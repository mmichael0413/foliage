define(function (require) {
    var Backbone = require('backbone'),
        syncOverride = require('syncOverride'),
        context = require('context'),

        Schedule = Backbone.Model.extend({
            initialize: function () {
                this.set('aggregateId', context.aggregateId);
                if (!this.get('jobDetail')) {
                    this.set('jobDetail', 'Standard Visit');
                }
                if(!this.get('dateCompleted')) {
                    this.set({canUnassign: context.canUnassign});
                }
            },
            url: function () {
                return context.base_url + '/schedule/create';
            }
        });

    return Schedule;
});