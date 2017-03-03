define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var SalesProvidersView = Backbone.View.extend({
        el: '.sales-data-providers',
        template: HandlebarsTemplates['thirdchannel/sales_providers'],

        initialize: function (options) {
          if (options.salesProviders) {
            this.providers = _.map(options.salesProviders, function(provider) {
              return provider.toLowerCase();
            });
            this.render();
          }
        },

        render: function() {
          this.$el.html(this.template({providers: this.providers}));
          this.$el.css('visibility', 'visible');
        }
    });

    return SalesProvidersView;
});
