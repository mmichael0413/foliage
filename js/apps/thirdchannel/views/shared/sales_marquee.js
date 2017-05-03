define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');


    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/activities/sales_marquee'],
        salesTemplate: HandlebarsTemplates['thirdchannel/activities/sales_widget'],

        events: {
          'click .next': 'next',
          'click .previous': 'previous'
        },

        messages: {
            "TY": "Sales data Available For TY",
            "LY": "Sales data Available For LY",
            "NA": "Sales Data Incomplete"
        },

        initialize: function (data) {
          this.currentWidget = 0;
          this.salesData = data.salesData;
          this.display = data.display;
          this.salesWidgets = this.formatSalesWidgets(this.salesData);
          this.canNavBack = false;
          this.canNavForward = false;

          this.render();
        },

        render: function () {
          this.canNavBack = (this.salesWidgets.length !== 0 && this.currentWidget !== 0);
          this.canNavForward = (this.salesWidgets.length !== 0 && this.currentWidget !== this.salesWidgets.length - 1);

          var templateData = {
            showMessage: (!this.salesData.salesDataFor || this.salesData.salesDataFor == "NA") || this.salesWidgets.length === 0,
            message: this.getSalesDataMessage(this.salesData.salesDataFor),
            widgets: this.salesWidgets,
            mostRecent: this.salesData.mostRecent,
            salesUrl: this.salesData.salesUrl,
            currentWidget: this.currentWidget
          };

          this.$el.html(this.template({canNavForward: this.canNavForward, canNavBack: this.canNavBack, display: this.display}));
          this.$el.find('.sales-figure').append(this.salesTemplate(templateData));
        },

        getSalesDataMessage: function(salesDataFor){
            if (!salesDataFor) {
                return "No Sales Data Available";
            } else {
                return this.messages[salesDataFor] || "";
            }
        },

        formatSalesWidgets: function(salesData) {
          var widgets = [
            {
              label: 'QTD YOY $ Sales',
              value: salesData.salesChange,
              template: "decimal_percent_change_badge"
            },
            {
              label: 'QTD YOY Units Sold',
              value: salesData.unitsSoldChange,
              template: "decimal_percent_change_badge"
            },
            {
              label: 'YOY Units OH',
              template: "decimal_percent_change_badge",
              value:  salesData.unitsOnHandChange
            },
            {
              label: 'QTD $ Sales',
              value: salesData.salesInCents,
              template: "dollar_number_badge"
            },
            {
              label: 'Units Sold',
              value: salesData.unitsSold,
              template: "quantity_number_badge"
            },
            {
              label: 'Units OH',
              value: salesData.unitsOnHand,
              template: "quantity_number_badge"
            }
          ];

          return _.filter(widgets, function(widget) {
            return _.isNumber(widget.value) && widget.value!== 0;
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
