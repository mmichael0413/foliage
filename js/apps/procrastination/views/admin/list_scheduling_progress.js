define(function (require) {
    var _ = require('underscore'),
        AsyncListView = require('shared/views/async_list'),
        context = require('context'),
        Pageable = require('shared/views/utils/pageable_component'),
        Filterable = require('shared/views/utils/filterable_component'),
        ScheduleCollection = require('procrastination/collections/admin/scheduling_progress'),
        SchedulingProgressRow = require('procrastination/views/admin/scheduling_progress_row'),

        SchedulingProgressView = {
            el: '#schedules',
            initialize: function () {
                AsyncListView.prototype.initialize.call(this, arguments);
                this.initFilterable();
            },
            rowView: function (options) {
               return new SchedulingProgressRow(options);


            },

            collectionClass: ScheduleCollection,

            afterRender: function () {
                this.renderPagination();
            }
        };

    _.extend(SchedulingProgressView, Pageable);
    _.extend(SchedulingProgressView, Filterable);
    return AsyncListView.extend(SchedulingProgressView);
});