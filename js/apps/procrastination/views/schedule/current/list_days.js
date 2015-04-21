define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ScheduledVisits = require('procrastination/views/schedule/current/list_visit');

    return Backbone.View.extend({
        className: 'schedule-group',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row_header'],
        initialize: function(options) {
            this.date = options.date;
            this.visits = options.visits;
        },

        render: function() {
            this.$el.append(this.template({date: this.date}));
            this.attachVisits();

            return this;
        },

        attachVisits: function(){
            var self = this;
            _.each(this.visits, function(visit){
                var visits = new ScheduledVisits({model: visit});
                self.$el.append(visits.render().el);
            });

        }
    });
});