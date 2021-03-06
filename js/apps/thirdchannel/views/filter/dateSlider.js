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
          this.dateMap = options.dateMap || this.defaultDateMap;

          if (options.pageFilters) {
            this.filters = options.pageFilters;
          }

          if (options.startPoint) {
            this.startPoint = options.startPoint;
          } else {
            this.startPoint = this.getSliderValueFromFilters();
          }

          this.listenTo(context, 'filter:item:cleared', function() {
            $(this.$el.find('.date-slider-component')).slider("value", this._getLastValue());
          }.bind(this));

          this.listenTo(context, 'filter:item:selected', function() {
            $(this.$el.find('.date-slider-component')).slider("value", this.getSliderValueFromFilters());
          }.bind(this));

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
            this.setFiltersFromSliderValue(value);
          }
        },

        jumpToDate: function(e) {
          e.preventDefault();

          var point = $(e.target).data('point');

          $(this.$el.find('.date-slider-component')).slider("value", point);

          this.handleSliderUpdate(point);
        },

        setFiltersFromSliderValue: function(value) {
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

        getSliderValueFromFilters: function() {
          var startPoint = this._getLastValue(); // Set a default startPoint to last item in dateMap
          var startDateFilter = _.find(this.filters.components, function(filter) {
            return filter.filterParam === "start_date";
          }).activeFilters[0]; // start_date should only ever have a max of one active item
          var endDateFilter = _.find(this.filters.components, function(filter) {
            return filter.filterParam === "end_date";
          }).activeFilters[0]; // end_date should only ever have a max of one active item

          // If we have both an end date and start date filter applied, attempt to match a range.
          // If we don't, that means we're in a custom date range, so just get to the return.
          if (endDateFilter && startDateFilter) {
            var endDateMatch = endDateFilter.getQueryValue() === this.endDate;
            var startDateValue = startDateFilter.getQueryValue();

            for (var property in this.dateMap) {
              if (endDateMatch && (this.dateMap[property].start_date) === startDateValue) {
                startPoint = property; // If we get a range match, update startPoint
              }
            }
          }

          return startPoint;
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
        },

        _getLastValue: function() {
          return Object.keys(this.dateMap).length - 1;
        }
    });
});
