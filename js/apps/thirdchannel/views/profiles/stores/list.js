define(function(require) {
    var $ = require('jquery'),
        context = require('context'),
        PageableListView = require('thirdchannel/views/shared/pageable_list'),
        ExportView = require('thirdchannel/views/utils/report_export_button'),
        StoresExportModel = require('thirdchannel/models/profiles/stores_export'),

        StoreListView = PageableListView.extend({
            el: '#stores',
            template: 'thirdchannel/profiles/stores/rows',
            pageChange: function (page) {
                context.trigger('filter:query', "page=" + page);
            },
            init: function (options) {
                $(".actions .export").each(function() {
                    var data = {};
                    var model = new StoresExportModel(_.extend(data, options));
                    new ExportView({model: model}).render(this);
                });
                return this;
            }
        });
    return StoreListView;
});