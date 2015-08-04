define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        AmbiguousAccountView = require('stores/views/uploads/events/ambiguous_account');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/events/ambiguous_accounts'],
        childViews: [],
        render: function() {
            this.$el.html(this.template({count: this.collection.length}));
            this.renderChildren();
            return this;
        },
        renderChildren: function() {
            var self = this;
            this.collection.each(function(ambiguousAccount) {
                var v = new AmbiguousAccountView({model: ambiguousAccount});
                self.$('#ambiguous-accounts').append(v.render().el);
                self.childViews.push(v);
            });
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