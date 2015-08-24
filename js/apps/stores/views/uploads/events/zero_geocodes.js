define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ZeroGeocodeView = require('stores/views/uploads/events/zero_geocode');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/events/zero_geocodes'],
        childViews: [],
        render: function() {
            this.$el.html(this.template({count: this.collection.length}));
            this.renderChildren();
            return this;
        },
        renderChildren: function() {
            var self = this;
            this.collection.each(function(zeroGeocode) {
                var v = new ZeroGeocodeView({model: zeroGeocode});
                self.$('#zero-geocodes').append(v.render().el);
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