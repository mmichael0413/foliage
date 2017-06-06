define(function(require) {
    var $ = require('jquery'),
        context = require('context'),
        PageableListView = require('thirdchannel/views/shared/pageable_list'),
        ExportView = require('thirdchannel/views/utils/report_export_button'),
        ExportModel = require('thirdchannel/models/exports/stores'),

        StoreListView = PageableListView.extend({
            el: '#stores',
            template: 'thirdchannel/profiles/stores/rows',
            pageChange: function (page) {
                context.trigger('filter:query', "page=" + page);
            },
            init: function (options) {
                return this;
            }
        });
    return StoreListView;
});