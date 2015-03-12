define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: HandlebarsTemplates['singleNickel/survey/list'],
        initialize: function() {
            this.listenTo(this.collection, 'change', this.render);
        },
        render: function() {
            this.$el.html(this.template({surveys: this.collection.toJSON()}));
            return this;
        }
    });

    return View;
});