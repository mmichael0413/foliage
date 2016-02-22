define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers');

    var View = Backbone.View.extend({
        template: Templates['stores/accounts/similar_accounts'],
        initialize: function() {
            this.listenTo(this.collection, 'reset', this.render);
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.template({accounts: this.collection.toJSON()}));
            return this;
        }
    });

    return View;
});