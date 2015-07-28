define(function (require) {
    var _ = require('underscore'),
        AsyncListView = require('shared/views/async_list'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        Pageable = require('shared/views/utils/pageable_component'),
        Filterable = require('shared/views/utils/filterable_component'),
        ScheduleCollection = require('procrastination/collections/admin/scheduling_progress'),
        VisitProgressItem = require('procrastination/views/admin/visit_progress_item'),

        VisitProgressList = {
            el: '#visits',
            emptyHTML: "<p class='item col-1-1'>No visits found</p>",
            template: Templates['procrastination/admin/visit_progress'],

            initialize: function() {
                AsyncListView.prototype.initialize.call(this, arguments);
                this.initFilterable();
            },

            rowView: function(options) {
                 return new VisitProgressItem(options);
            },

            collectionClass: ScheduleCollection,

            afterRender: function(){
                this.renderPagination();
            }
        };

    _.extend(VisitProgressList, Pageable);
    _.extend(VisitProgressList, Filterable);
    return AsyncListView.extend(VisitProgressList);
});