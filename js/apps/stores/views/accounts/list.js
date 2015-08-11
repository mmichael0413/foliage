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
            this.listenTo(this.collection, 'add', this.renderAccountItem);
            this.listenTo(this.collection, 'remove', this.removeAccountItem);
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
        removeAccountItem: function(account) {
            // find and remove the child view
            var view = _.find(this.childViews, function(v) {
                return v.model.id === account.id;
            });

            if(view) {
                var index = _.indexOf(this.childViews, view);
            }

            if(index && index >= 0) {
                this.childViews.splice(index, 1);
            }
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