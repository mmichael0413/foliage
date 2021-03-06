define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/events/ambiguous_geocode'],
        className: 'ambiguous-geocode-entry section',
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return View;
});