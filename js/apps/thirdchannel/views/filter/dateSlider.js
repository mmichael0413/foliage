define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),
        jui = require('jquery-ui'),
        moment = require('moment'),
        _ = require('underscore'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/filters/date_slider'],
        endDate: moment().format("YYYY-MM-DD"),
        startPoint: 0,
        defaultDateMap: {
          0: {
            label: "1 Year",
            start_date: moment().subtract(1, 'y').format("YYYY-MM-DD")
          },
          1: {
            label: "6 Months",
            start_date: moment().subtract(6, 'M').format("YYYY-MM-DD")
          },
          2: {
            label: "3 Months",
            start_date: moment().subtract(3, 'M').format("YYYY-MM-DD")
          },
          3: {
            label: "1 Month",
            start_date: moment().subtract(1, 'M').format("YYYY-MM-DD")
          },
          4: {
            label: "1 Day",
            start_date: moment().subtract(1, 'd').format("YYYY-MM-DD")
          },
          5: {
            label: "Custom"
          },
        },
        events: {
          "click .slider-label": "jumpToDate"
        },

        initialize: function(options) {
          if (options.startPoint) {
            this.startPoint = options.startPoint;
          }

          if (options.pageFilters) {
            this.filters = options.pageFilters;
          }

          this.dateMap = options.dateMap || this.defaultDateMap;

          this.render();
        },

        render: function() {
          this.$el.html(this.template({dates: this.dateMap}));

          var self = this;
          var handle = this.$el.find(".date-slider-handle");

          $(this.$el.find('.date-slider-component')).slider({
            range: "1 Year",
            min: 0,
            max: _.size(this.dateMap) - 1,
            value: this.startPoint,
            step: 1,
            create: function() {
              handle.text(self.dateMap[self.startPoint].label);
            },
            change: function(event, ui) {
              handle.text(self.dateMap[ui.value].label);
            },
            slide: function(event, ui) {
              handle.text(self.dateMap[ui.value].label);
            },
            stop: function(event, ui) {
              self.handleSliderUpdate(ui.value);
            }
          });
        },

        handleSliderUpdate: function(value) {
          if (value === (_.size(this.dateMap) - 1)) {
            this.focusDateFilters();
          } else {
            this.triggerFilterSet(value);
          }
        },

        jumpToDate: function(e) {
          e.preventDefault();

          var point = $(e.target).data('point');

          $(this.$el.find('.date-slider-component')).slider("value", point);

          this.handleSliderUpdate(point);
        },

        triggerFilterSet: function(value) {
          var filterUpdates = [
            {name: "start_date", value: this.dateMap[value].start_date},
            {name: "end_date", value: this.endDate}
          ];

          filterUpdates.forEach(function(filter) {
            var filterMatch = _.findWhere(this.filters.components, {filterParam: filter.name});
            filterMatch.clear();
            filterMatch.addFilterByValue(filter.value);
          }.bind(this));

          context.trigger('filter:set', filterUpdates);
        },

        focusDateFilters: function() {
          var dateFilters = $(".filter-component[data-type='date']");

          $('#site-filter').animate({
            scrollTop: dateFilters.offset().top
          }, 500);

          dateFilters.find('.filter-item').animate({ backgroundColor: "#73afef" }, 150)
                     .animate({ backgroundColor: "#e3eef9" }, 150)
                     .animate({ backgroundColor: "#73afef" }, 150)
                     .animate({ backgroundColor: "rgba(255,255,255,0)" }, 150);
        }
    });
});
