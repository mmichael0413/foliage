define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ListItemView = require('stores/views/accounts/list_item'),
        Actions = require('stores/collections/actions'),
        ActionsView = require('stores/views/actions');

    var View = Backbone.View.extend({
        template: Templates['stores/accounts/list'],
        childViews: [],
        initialize: function() {
            _.bindAll(this, 'renderAccountItem');
            this.listenTo(this.collection, 'add', this.renderAccountItem);
            this.listenTo(this.collection, 'remove', this.removeAccountItem);

            var actions = new Actions([
                {
                    type: 'link',
                    link: '/accounts/new',
                    className: 'primary',
                    icon: 'ic_add',
                    bypass: false
                }
            ]);
            this.actionsView = new ActionsView({collection: actions});
        },
        render: function() {
            this.$el.html(this.template());
            this.collection.each(this.renderAccountItem);
            this.actionsView.render();
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

            var index = null;
            if(view) {
                index = _.indexOf(this.childViews, view);
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
            this.actionsView.remove();
            this.remove();
        }
    });

    return View;
});