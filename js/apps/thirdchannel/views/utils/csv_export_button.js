define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        ExportModal = require('thirdchannel/modals/export'),
        ExportModel = require('thirdchannel/models/reports/info/export');

    return Backbone.View.extend({
        events: {
            "click": "stopClick"
        },
        initialize: function (options) {
            this.options = options;
            this.model = new ExportModel(options);
        },
        render: function ($element) {
            this.setElement($element);
            this.listenTo(context, 'filter:query', this.updateUrl);
            return this;
        },
        updateUrl: function(qs) {
            this.model.setQueryString(qs);
        },
        stopClick: function(e) {
            e.preventDefault();
            this.modal = new ExportModal({model: this.model});
            $("body").append(this.modal.render().el);
        }
    });
});
