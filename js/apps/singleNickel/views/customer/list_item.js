define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['singleNickel/customer/list_item'],

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});