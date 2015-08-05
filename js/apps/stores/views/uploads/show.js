define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        InvalidRowsView = require('stores/views/uploads/events/invalid_rows'),
        AmbiguousAccountsView = require('stores/views/uploads/events/ambiguous_accounts'),
        AmbiguousGeocodesView = require('stores/views/uploads/events/ambiguous_geocodes'),
        ZeroGeocodesView = require('stores/views/uploads/events/zero_geocodes'),
        FailedGeocodesView = require('stores/views/uploads/events/failed_geocodes');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/show'],
        childViews: [],
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            this.renderInvalidRows();
            this.renderAmbiguousAccounts();
            this.renderAmbiguousGeocodes();
            this.renderZeroGeocodes();
            this.renderFailedGeocodes();
            return this;
        },
        renderInvalidRows: function() {
            this.invalidRows = new Backbone.Collection(this.model.get('invalidRows'));
            if(this.invalidRows.length) {
                var view = new InvalidRowsView({collection: this.invalidRows});
                this.$el.append(view.render().el);
                this.childViews.push(view);
            }
        },
        renderAmbiguousAccounts: function() {
            this.ambiguousAccounts = new Backbone.Collection(this.model.get('ambiguousAccounts'));
            if(this.ambiguousAccounts.length) {
                var view = new AmbiguousAccountsView({collection: this.ambiguousAccounts});
                this.$el.append(view.render().el);
                this.childViews.push(view);
            }
        },
        renderAmbiguousGeocodes: function() {
            this.ambiguousGeocodes = new Backbone.Collection(this.model.get('ambiguousGeocodes'));
            if(this.ambiguousGeocodes.length) {
                var view = new AmbiguousGeocodesView({collection: this.ambiguousGeocodes});
                this.$el.append(view.render().el);
                this.childViews.push(view);
            }
        },
        renderZeroGeocodes: function() {
            this.zeroGeocodes = new Backbone.Collection(this.model.get('zeroGeocodes'));
            if(this.zeroGeocodes.length) {
                var view = new ZeroGeocodesView({collection: this.zeroGeocodes});
                this.$el.append(view.render().el);
                this.childViews.push(view);
            }
        },
        renderFailedGeocodes: function() {
            this.failedGeocodes = new Backbone.Collection(this.model.get('failedGeocodes'));
            if(this.failedGeocodes.length) {
                var view = new FailedGeocodesView({collection: this.failedGeocodes});
                this.$el.append(view.render().el);
                this.childViews.push(view);
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