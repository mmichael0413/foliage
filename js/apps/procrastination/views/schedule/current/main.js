define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        ScheduleRowGroup = require('procrastination/views/schedule/current/list_days'),
        ScheduledVisitsCollection = require('procrastination/collections/schedule/current/list_schedules');

    return Backbone.View.extend({
        el: '.schedule-container',
        initialize: function (options) {
            this.aggregate = context.aggregateId;
            this.collection = new ScheduledVisitsCollection(null, {
                aggregateId: this.aggregate,
                personId: context.personId,
                programId: context.programId
            });

            this.showCompleted = options.showCompleted;
            this.listenTo(this.collection, 'destroy', this.destroy);
        },

        fetch: function (reset) {
            var self = this;
            this.collection.fetch().done(function () {
                self.render();
            });
        },

        render: function () {
            var self = this;
            this.$el.html("");
            if (this.collection.models.length === 0) {
                this.$el.append('No visits have been scheduled for this month.');
                return this;
            }

            var groupedVisits = this.collection.groupBy(function (model) {
                return model.get('dateScheduled');
            });

            var keyset = _.sortBy(Object.keys(groupedVisits), function (it) {
                return it;
            });
            _.each(keyset, function (date) {
                var group = new ScheduleRowGroup({date: date, visits: groupedVisits[date], showCompleted: self.showCompleted});
                self.$el.append(group.render().el);
            });
        },
        destroy: function() {
            this.render();
        }
    });
});