define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DateSliderView = require('thirdchannel/views/filter/dateSlider'),
        OverviewView = require('thirdchannel/views/reports/field_activity/overview'),
        AssociateEducationView = require('thirdchannel/views/reports/field_activity/associate_education'),
        ConsumerEngagementView = require('thirdchannel/views/reports/field_activity/consumer_engagement'),
        MerchandisingView = require('thirdchannel/views/reports/field_activity/merchandising');

    return Backbone.View.extend({
        el: '.report',
        template: HandlebarsTemplates['thirdchannel/reports/field_activity/main'],

        initialize: function(options) {
          this.$el.html(this.template());

          new DateSliderView({el: '.date-slider-container'});

          this.listenTo(context, 'filter:query', this.handleFilter);


          this.overview = new OverviewView(options);
          this.associateEducation = new AssociateEducationView(options);
          this.consumerEngagement = new ConsumerEngagementView(options);
          this.merchandising = new MerchandisingView(options);
        },

        handleFilter: function(params) {
          this.overview.update(params);
          this.associateEducation.update(params);
          this.consumerEngagement.update(params);
          this.merchandising.update(params);
        }
    });
});
