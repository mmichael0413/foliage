define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),
        jui = require('jquery-ui'),
        moment = require('moment'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/filters/date_slider'],
        endDate: moment().format("YYYY-MM-DD"),
        dateMap: {
          1: {
            label: "Max",
            start_date: ""
          },
          2: {
            label: "1 Year",
            start_date: moment().subtract(1, 'y').format("YYYY-MM-DD")
          },
          3: {
            label: "6 Months",
            start_date: moment().subtract(6, 'M').format("YYYY-MM-DD")
          },
          4: {
            label: "3 Months",
            start_date: moment().subtract(3, 'M').format("YYYY-MM-DD")
          },
          5: {
            label: "1 Month",
            start_date: moment().subtract(1, 'M').format("YYYY-MM-DD")
          },
          6: {
            label: "1 Day",
            start_date: moment().subtract(1, 'd').format("YYYY-MM-DD")
          },
          7: {
            label: "Custom"
          },
        },

        initialize: function(options) {
          this.render();
        },

        render: function() {
          this.$el.html(this.template({dates: this.dateMap}));

          var self = this;
          var handle = this.$el.find("#custom-handle");

          $(this.$el.find('#dateSlider')).slider({
            range: "max",
            min: 1,
            max: 7,
            value: 5,
            step: 1,
            create: function() {
              handle.text(self.dateMap[5].label);
            },
            change: function(event, ui) {
              handle.text(self.dateMap[ui.value].label);
            },
            slide: function(event, ui) {
              handle.text(self.dateMap[ui.value].label);
            },
            stop: function(event, ui) {
              if (ui.value === 7) {
                $('#site-filter').animate({
                  scrollTop: $(".filter-component[data-type='date']").offset().top
                }, 500);
              } else {
                context.trigger('filter:set', [
                  {name: "start_date", value: self.dateMap[ui.value].start_date},
                  {name: "end_date", value: self.endDate}
                ]);
              }
            }
          });
        }
    });
});
