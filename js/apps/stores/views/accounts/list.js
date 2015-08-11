define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ListItemView = require('stores/views/accounts/list_item');

    var View = Backbone.View.extend({
        template: Templates['stores/accounts/list'],
        childViews: [],
        initialize: function() {
            _.bindAll(this, 'renderAccountItem');
        },
        render: function() {
            this.$el.html(this.template());
            this.collection.each(this.renderAccountItem);
            return this;
        },
        renderAccountItem: function(account) {
            var v = new ListItemView({model: account});
            this.$('#account-list').append(v.render().el);
            this.childViews.push(v);
        },
        leave: function() {
            _.each(this.childViews, function(v) {
                v.remove();
            });
            this.childViews = [];
            this.remove();
        }
    });

    return View;
});