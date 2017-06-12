define(function (require) {
    var Backbone = require('backbone'),
        syncOverride = require('syncOverride'),
        context = require('context'),

        Schedule = Backbone.Model.extend({
            initialize: function () {
                this.set('aggregateId', context.aggregateId);
                this.get('jobDetails').whiteoutDates.sort();
                if (!this.get('jobDetail')) {
                    this.set('jobDetail', 'Standard Visit');
                }
                if(!this.get('dateCompleted')) {
                    this.set({canUnassign: context.canUnassign});
                    this.set({canUnschedule: context.canUnschedule});
                    this.set({canConfirm: context.canConfirm});
                }
            },
            url: function () {
                return context.base_url + '/schedule/create';
            }
        });

    return Schedule;
});
