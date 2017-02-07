define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        context = require('context'),
        helpers = require('helpers');


    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/activities/sales_marquee'],
        salesTemplate: HandlebarsTemplates['thirdchannel/activities/sales_widget'],

        events: {
          'click .next': 'next',
          'click .previous': 'previous'
        },

        initialize: function (data) {
          this.currentWidget = 0;
          this.salesData = data.salesData;
          this.salesWidgets = this.formatSalesWidgets(this.salesData);
          this.canNavBack = false;
          this.canNavForward = false;
        },

        render: function () {
          this.canNavBack = (this.salesWidgets.length !== 0 && this.currentWidget !== 0);
          this.canNavForward = (this.salesWidgets.length !== 0 && this.currentWidget !== this.salesWidgets.length - 1);

          var templateData = {
            showMessage: this.salesData.message && this.salesWidgets.length === 0,
            message: this.salesData.message,
            widget: this.salesWidgets[this.currentWidget],
            salesUrl: this.salesData.salesUrl,
            mostRecent: this.salesData.mostRecent
          };
          this.$el.html(this.template({canNavForward: this.canNavForward, canNavBack: this.canNavBack}));
          this.$el.find('.sales-figure').append(this.salesTemplate(templateData));
          // TODO: Don't inline these styles
          this.$el.find('.sales-marquee').fadeIn(500).css({"display": "inline-block", "float": "right"});
        },

        formatSalesWidgets: function(salesData) {
          var widgets = [
            {
              label: 'QTD $ Sales',
              change: salesData.salesChange
            },
            {
              label: 'Units Sold',
              change: salesData.unitsSoldChange
            },
            {
              label: 'Units OH',
              change: salesData.unitsOHChange
            }
          ];

          return _.filter(widgets, function(widget) {
            return _.isNumber(widget.change) && widget.change !== 0;
          });
        },

        next: function(e) {
          e.stopPropagation();
          e.preventDefault();

          this.currentWidget = this.currentWidget + 1;
          this.render();
        },

        previous: function(e) {
          e.stopPropagation();
          e.preventDefault();

          this.currentWidget = this.currentWidget - 1;
          this.render();
        }
    });
});
