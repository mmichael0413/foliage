define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        Opportunities = require('erudition/collections/opportunities');

    return Backbone.View.extend({
        el: '.content',

        viewTemplate: templates['erudition/recruiting/opportunities/index'],
        listTemplate: templates['erudition/recruiting/opportunities/list'],

        initialize: function () {
            this.collection = new Opportunities();
        },

        render: function () {
            this.$el.append(this.viewTemplate());
            this.collection.fetch({success: function (collection) {
                this.$('#opportunities').html(this.listTemplate(collection.toJSON()));
            }.bind(this)});
            return this;
        }
    });
});