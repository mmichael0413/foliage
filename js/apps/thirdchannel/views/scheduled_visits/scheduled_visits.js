define(function(require) {
    var context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
        Visit = require('thirdchannel/views/scheduled_visits/scheduled_visit'),
        Filter = require('thirdchannel/views/filter/main');

    return Backbone.View.extend({
        el: "#scheduled-visits",
        template: 'thirdchannel/scheduled_visits/scheduled_visits',
        loading: handlebarsTemplates["thirdchannel/loading_icon"](),
        initialize: function(){
            this.listenTo(context, 'filter:query', this.applyFilter);
            Filter.init();
        },
        render: function(visits){
            if(visits.length === 0){
                this.$el.html("No scheduled visits were found that match your filter selections.");
            } else {
                var supervisor_role = visits[0].supervisor_role;
                var show_requestors = _.some(visits, function(v) { return v.requestor_name; });
                this.$el.html(handlebarsTemplates[this.template]({supervisor_role: supervisor_role, show_requestors: show_requestors}));
                var $tbody = this.$el.find('tbody');
                _.each(visits, function(v){
                    v.show_requestors = show_requestors;
                    $tbody.append(new Visit({model: v}).render().$el);
                }.bind(this));
            }
        },
        applyFilter: function (qs) {
            this.$el.html(this.loading);
            $(".actions .export").attr("href", this.model.csv + "?" + qs);
            $.getJSON(this.model.json + "?" + qs).done(function(visits){
                this.render(visits);
            }.bind(this)).fail(function(){
                this.$el.html("Unable to fetch scheduled visits at this time. Check your connection and please try again.");
            }.bind(this));
        }
    });
});
