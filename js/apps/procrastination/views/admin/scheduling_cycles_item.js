define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),

        SchedulingCyclesItemView = {
            className: 'scheduling-cycle pure-g',

            template: Templates['procrastination/admin/scheduling_cycles_item'],

            render: function() {
                var data = this.model.attributes;

                if(data.statusCounts['Complete'] !== undefined) {
                    data.percentComplete = Math.round((data.statusCounts['Complete'] / data.scheduleCount) * 100.0);
                } else {
                    data.percentComplete = 0;
                }

                if(data.statusCounts['In Progress'] !== undefined) {
                    data.percentInProgress = Math.round((data.statusCounts['In Progress'] / data.scheduleCount) * 100.0);
                } else {
                    data.percentInProgress = 0;
                }

                if(data.statusCounts['Not Started'] !== undefined) {
                    data.percentNotStarted = Math.round((data.statusCounts['Not Started'] / data.scheduleCount) * 100.0);
                } else {
                    data.percentNotStarted = 0;
                }

                data.links.self = context.base_url + data.links.self;

                this.$el.html(this.template(data));
                return this;
            }
        };

    return Backbone.View.extend(SchedulingCyclesItemView);
});