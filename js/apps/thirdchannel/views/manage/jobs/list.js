define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
        JobRequest = require('thirdchannel/views/manage/jobs/list_item'),
        PaginationView = require('thirdchannel/views/utils/pagination'),
        Filter = require('thirdchannel/views/filter/main'),
        ExportModel = require('thirdchannel/models/exports/job_requests'),
        ExportModal = require('thirdchannel/modals/export');

    return Backbone.View.extend({
        el: "#job-requests",
        template: handlebarsTemplates['thirdchannel/manage/jobs/list'],
        loading: handlebarsTemplates["thirdchannel/loading_icon"](),

        initialize: function() {
            _.bindAll(this, 'initiateExport');

            this.listenTo(context, 'filter:query', this.applyFilter);

            $(".actions .export").on('click', this.initiateExport);

            Filter.init();
        },

        render: function(jobRequest) {
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
            $.getJSON(this.model.json + "?" + qs).done(function(jobRequest){
                this.render(jobRequest);
            }.bind(this)).fail(function(){
                this.$el.html("Unable to fetch requests at this time. Check your connection and please try again.");
            }.bind(this));
        },

        addPages: function (jobRequest) {
            this.$el.prepend(new PaginationView(jobRequest.pagination).render().$el);
        },

        initiateExport: function(e) {
            e.preventDefault();
            var filters = context.filterParams;
            var model = new ExportModel(_.extend(filters.attributes, {programId: context.programId}));
            model.save().then(function() {
                var modal = new ExportModal({model: model});
                $("body").append(modal.render().el);
            }).fail(function(response) {
                console.error(response);
                alert('Something went wrong, please try again.');
            }.bind(this));
        }
    });
});
