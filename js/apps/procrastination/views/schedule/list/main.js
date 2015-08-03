define(function (require) {
    var _ = require('underscore'),
        AsyncListView = require('shared/views/async_list'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        Pageable = require('shared/views/utils/pageable_component'),
        ScheduleCollection = require('procrastination/collections/schedule/collection'),
        Item = require('procrastination/views/schedule/list/item'),

        List = {
            el: '#cycles',
            emptyHTML: "<p class='item col-1-1'>No Schedules found</p>",
            template: Templates['procrastination/schedule/list/main'],

            initialize: function() {
                AsyncListView.prototype.initialize.call(this, arguments);
            },

            rowView: function(options) {
                return new Item(options);
            },

            collectionClass: ScheduleCollection,

            afterRender: function(){
                this.renderPagination();
            }
        };

    _.extend(List, Pageable);

    return AsyncListView.extend(List);
});