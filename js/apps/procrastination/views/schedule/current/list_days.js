define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ScheduledVisits = require('procrastination/views/schedule/current/list_visit'),
        moment = require('moment');

    return Backbone.View.extend({
        className: 'section data-section',
        tagName: 'section',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row_header'],
        initialize: function(options) {
            this.date = options.date;
            this.visits = options.visits;
            this.showCompleted = options.showCompleted;
        },

        render: function() {
            this.$el.append(this.template({date: this.date, showCompleted: this.showCompleted}));
            this.attachVisits();
            return this;
        },

        attachVisits: function(){
            var self = this;
            _.each(this.visits, function(visit){
                var visits = new ScheduledVisits({model: visit, showCompleted: self.showCompleted});
                self.$('.body.main').append(visits.render().el);
            });

        }
    });
});
