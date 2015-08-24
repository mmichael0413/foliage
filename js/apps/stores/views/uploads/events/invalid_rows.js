define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        InvalidRowView = require('stores/views/uploads/events/invalid_row');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/events/invalid_rows'],
        childViews: [],
        render: function() {
            this.$el.html(this.template({count: this.collection.length}));
            this.renderChildren();
            return this;
        },
        renderChildren: function() {
            var self = this;
            this.collection.each(function(invalidRow) {
                var v = new InvalidRowView({model: invalidRow});
                self.$('#invalid-rows').append(v.render().el);
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