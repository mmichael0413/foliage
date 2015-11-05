define(function(require) {
    var Backbone = require('backbone'),
        Noty = require('noty'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/stores/show'],

        render: function() {
            console.log(this.model);
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return View;
});