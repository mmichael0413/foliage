define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        BreakdownRow = require('thirdchannel/views/store_profile/sales/breakdown_row');

    var View = Backbone.View.extend({
        className: 'breakdown-group',

        render: function() {
            this.collection.each(function(breakdown) {
                var view = new BreakdownRow({model: breakdown});
                this.$el.append(view.render().el);
            }.bind(this));
            return this;
        }
    });

    return View;
});