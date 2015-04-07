define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        ScheduleRowGroup = require('procrastination/views/schedule/show_schedule_group'),
        ScheduledVisitsCollection = require('procrastination/collections/schedule/list_schedules');

    return Backbone.View.extend({
        el: '.section',
        initialize: function() {
            console.log('initialize');
            this.collection = new ScheduledVisitsCollection();
            this.listenTo(this.collection, 'reset', this.render);
        },
        bootstrapCollection: function (data) {
            this.collection.reset(data);
        },

        render: function() {
            var self = this;

            if(this.collection.models.length === 0) {
                this.$el.append('No visits have been scheduled for this month.');
                return this;
            }

            var groupedVisits = this.collection.groupBy(function(model) {
                return model.get('dateScheduled');
            });

            var keyset = _.sortBy(Object.keys(groupedVisits), function(it){ return it;});
            _.each(keyset, function(date){
                var group = new ScheduleRowGroup({date: date, visits: groupedVisits[date]});
                self.$el.append(group.render().el);
               // console.log(groupedVisits[date]);
            });
        }
    });

});