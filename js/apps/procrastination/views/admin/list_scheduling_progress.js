define(function (require) {
    var _ = require('underscore'),
        AsyncListView = require('shared/views/async_list'),
        context = require('context'),
        Filterable = require('shared/views/utils/filterable_component'),
        ScheduleCollection = require('procrastination/collections/admin/scheduling_progress'),
        SchedulingProgressRow = require('procrastination/views/admin/scheduling_progress_row'),

        SchedulingProgressView = {
            el: '#schedules',
            emptyHTML: "<p class='item status col-1-1'>No Results Found</p>",
            initialize: function () {
                AsyncListView.prototype.initialize.call(this, arguments);
                this.initFilterable();
            },
            rowView: function (options) {
                return new SchedulingProgressRow(options);
            },

            collectionClass: ScheduleCollection,
        };

    _.extend(SchedulingProgressView, Filterable);
    return AsyncListView.extend(SchedulingProgressView);
});
