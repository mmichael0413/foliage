define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        AmbiguousAccountView = require('stores/views/uploads/events/ambiguous_account'),
        AmbiguousGeocodeView = require('stores/views/uploads/events/ambiguous_geocode'),
        ZeroGeocodeView = require('stores/views/uploads/events/zero_geocode'),
        FailedGeocodeView = require('stores/views/uploads/events/failed_geocode');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/show'],
        childViews: [],
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            console.log(this.model);
            this.renderAmbiguousAccounts();
            this.renderAmbiguousGeocodes();
            this.renderZeroGeocodes();
            this.renderFailedGeocodes();
            return this;
        },
        // TODO: might be better to create list views for these, but currently don't see any reason to do so.
        renderAmbiguousAccounts: function() {
            var self = this;
            this.ambiguousAccounts = new Backbone.Collection(this.model.get('ambiguousAccounts'));
            this.ambiguousAccounts.each(function(ambiguousAccount) {
                var v = new AmbiguousAccountView({model: ambiguousAccount});
                self.$('#ambiguous-accounts').append(v.render().el);
                self.childViews.push(v);
            });
        },
        renderAmbiguousGeocodes: function() {
            var self = this;
            this.ambiguousGeocodes = new Backbone.Collection(this.model.get('ambiguousGeocodes'));
            this.ambiguousGeocodes.each(function(ambiguousGeocode) {
                var v = new AmbiguousGeocodeView({model: ambiguousGeocode});
                self.$('#ambiguous-geocodes').append(v.render().el);
                self.childViews.push(v);
            });
        },
        renderZeroGeocodes: function() {
            var self = this;
            this.zeroGeocodes = new Backbone.Collection(this.model.get('zeroGeocodes'));
            this.zeroGeocodes.each(function(zeroGeocode) {
                var v = new ZeroGeocodeView({model: zeroGeocode});
                self.$('#zero-geocodes').append(v.render().el);
                self.childViews.push(v);
            });
        },
        renderFailedGeocodes: function() {
            var self = this;
            this.failedGeocodes = new Backbone.Collection(this.model.get('failedGeocodes'));
            this.failedGeocodes.each(function(failedGeocode) {
                var v = new FailedGeocodeView({model: failedGeocode});
                self.$('#failed-geocodes').append(v.render().el);
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