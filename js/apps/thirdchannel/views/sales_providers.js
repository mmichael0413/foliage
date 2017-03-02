define(function (require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var SalesProvidersView = Backbone.View.extend({
        el: '.sales-data-providers',
        template: HandlebarsTemplates['thirdchannel/sales_providers'],

        initialize: function (options) {
          this.providers = options.salesProviders;
          if (this.providers) {
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
