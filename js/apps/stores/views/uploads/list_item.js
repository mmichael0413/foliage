define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/list_item'],
        className: 'pure-g item upload-list-item',
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return View;
});