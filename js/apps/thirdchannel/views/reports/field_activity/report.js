define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DateSliderView = require('thirdchannel/views/filter/dateSlider'),
        OverviewView = require('thirdchannel/views/reports/field_activity/overview'),
        ReportSection = require('thirdchannel/views/reports/field_activity/report_section');

    return Backbone.View.extend({
        el: '.report',
        template: HandlebarsTemplates['thirdchannel/reports/field_activity/main'],
        sections: ['associate_education', 'consumer_engagement_education', 'merchandising'],

        initialize: function(options) {
          this.$el.html(this.template({sections: this.sections}));

          new DateSliderView({el: '.date-slider-container', startPoint: 4});

          this.listenTo(context, 'filter:query', this.handleFilter);

          this.overview = new OverviewView(options);

          this.sections.forEach(function(section) {
            var sectionOptions = _.clone(options);

            sectionOptions.section = section;
            sectionOptions.el = '#' + section;
            this[section] = new ReportSection(sectionOptions);
          });
        },

        handleFilter: function(params) {
          context.trigger('fieldActivity:update', params);
        }
    });
});
