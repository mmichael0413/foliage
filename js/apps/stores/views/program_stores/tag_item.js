define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/program_stores/tag_item'],
        tagName: 'li',
        className: 'program-stores-tag-list-item',
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return View;
});