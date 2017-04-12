define(function(require) {
    var context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
        JobRequest = require('thirdchannel/views/manage/jobs/list_item'),
        PaginationView = require('thirdchannel/views/utils/pagination'),
        Filter = require('thirdchannel/views/filter/main');

    return Backbone.View.extend({
        el: "#job-requests",
        template: handlebarsTemplates['thirdchannel/manage/jobs/list'],
        loading: handlebarsTemplates["thirdchannel/loading_icon"](),
        initialize: function(){
            this.listenTo(context, 'filter:query', this.applyFilter);
            Filter.init();
        },
        render: function(jobRequest){
            if(jobRequest.data.length === 0){
                this.$el.html("No requests were found that match your filter selections.");
            } else {
                this.$el.empty();
                this.addPages(jobRequest);
                var $table = $(document.createElement('table'));
                $table.append(this.template());
                _.each(jobRequest.data, function(v){
                    $table.append(new JobRequest({model: v}).render().$el);
                }.bind(this));
                this.$el.append($table);
            }
        },
        applyFilter: function (qs) {
            this.$el.html(this.loading);
            $(".actions .export").attr("href", this.model.csv + "?" + qs);
            $.getJSON(this.model.json + "?" + qs).done(function(jobRequest){
                this.render(jobRequest);
            }.bind(this)).fail(function(){
                this.$el.html("Unable to fetch requests at this time. Check your connection and please try again.");
            }.bind(this));
        },
        addPages: function (jobRequest) {
            this.$el.prepend(new PaginationView(jobRequest.pagination).render().$el);
        }
    });
});
