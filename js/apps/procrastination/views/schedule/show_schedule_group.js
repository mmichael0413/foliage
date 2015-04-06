define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ScheduledVisits = require('procrastination/views/schedule/list_scheduled_row');

    return Backbone.View.extend({
        className: 'schedule-group',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row_header'],
        initialize: function(options) {
            this.date = options.date;
            this.visits = options.visits;
        },

        render: function() {
            this.$el.append(this.template({date: this.date}));
           // console.log(this.date + ": " + this.visits.length);
            this.attachVisits();


            return this;
        },

        attachVisits: function(){
            var self = this;
            _.each(this.visits, function(visit){
                console.log(visit.attributes);
                var visits = new ScheduledVisits({model: visit});
                self.$el.append(visits.render().el);
            });

        }
    });
});