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


        initialize: function (data) {
          this.currentWidget = 0;
          this.salesData = data.salesData;
          this.salesWidgets = this.formatSalesWidgets(this.salesData);
          this.canNavBack = false;
          this.canNavForward = false;

          this.render();
        },

        render: function () {
          this.canNavBack = (this.salesWidgets.length !== 0 && this.currentWidget !== 0);
          this.canNavForward = (this.salesWidgets.length !== 0 && this.currentWidget !== this.salesWidgets.length - 1);

          var templateData = {
            showMessage: this.salesData.salesDataFor && this.salesWidgets.length === 0,
            message: this.getSalesDataMessage(this.salesData.salesDataFor),
            widget: this.salesWidgets[this.currentWidget],
            mostRecent: this.salesData.mostRecent,
            salesUrl: this.salesData.salesUrl
          };

          this.$el.html(this.template({canNavForward: this.canNavForward, canNavBack: this.canNavBack}));
          this.$el.find('.sales-figure').append(this.salesTemplate(templateData));
        },

        getSalesDataMessage: function(salesDataFor){
            if(!salesDataFor){
                return "No Sales Data Available";
            } else if (salesDataFor === "TY") {
                return "Sales data Available For TY";
            } else if(salesDataFor === "LY") {
                return "No Sales Data Available for TY";
            }  else if (salesDataFor === "NA"){
                return "Sales Data Incomplete";
            }
            return "";
        },

        formatSalesWidgets: function(salesData) {
          var widgets = [
            {
              label: 'QTD $ Sales',
              change: salesData.salesInCents
            },
            {
              label: 'Units Sold',
              change: salesData.unitsSold
            },
            {
              label: 'Units OH',
              change: salesData.unitsOnHand
            },
            {
              label: 'QTD $ Sales',
              change: salesData.salesInCents
            },
            {
              label: 'Units Sold',
              change: salesData.unitsSold
            },
            {
              label: 'Units OH',
              change: salesData.unitsOnHand
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
