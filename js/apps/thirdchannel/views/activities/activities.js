define(function (require) {
    var $ = require('jquery'),
        context = require('context'),
        ActivityView = require('thirdchannel/views/activities/activity'),
        IncompleteActivityView = require('thirdchannel/views/activities/incomplete_activity'),
        ActivityCollection = require('thirdchannel/collections/activities/activities'),
        IncompleteActivity = require('thirdchannel/models/activities/incomplete_activity'),
        Expanding = require('expanding'),
        Livestamp = require('livestamp'),
        InfiniteScrollView = require('thirdchannel/views/shared/infinite_scroll'),
        SalesProvidersView = require('thirdchannel/views/sales_providers');

    var ActivitiesView = InfiniteScrollView.extend({
        el: '.activities-holder',
        infiniteCollectionClass: ActivityCollection,

        endOfFeedHTML: "<div class='activity alert info'>You have reached the end of the feed!</div>",
        noResultsHTML: "<div class='activity alert info'>No Activity was found, please try different search criteria.</div>",
        errorHTML: '<div class="activity alert error">Additional activities cannot be loaded due to an error on the server. Please contact Tech Support</div>',


        initialize: function (options) {
            var self = this;

            this.incompleteActivityUrl = options.incompleteActivityUrl;

            this.listenTo(context, 'filter:query', this.insertLoadingTemplate);
            this.listenToOnce(context, 'page:height', this.checkPageHeight);
            this.listenTo(context, 'store.sales.providers', this.updateSalesProviders);
            $(window).resize(function () {
                self.resizeCarousel();
            });
            ActivitiesView.__super__.initialize.apply(this, arguments);
        },


        fetch: function () {
            var self = this;

            // render incomplete checkins;
            if (this.incompleteActivityUrl) {
                var incomplete = new IncompleteActivity({current_program: context.programId}, {url: this.incompleteActivityUrl});

                incomplete.fetch().done(function (data) {
                    if (incomplete.get('incomplete') > 0) {
                        self.$('.incomplete').append(new IncompleteActivityView({model: incomplete}).render().el);
                    }
                });
            }

            return this;
        },


        renderModel: function (model) {
            for (var i = 0; i<model.attributes.length; i++) {
                var activityModel = new Backbone.Model(model.attributes[i]);

                if (activityModel.get('type') !== undefined) {
                    var activity = new ActivityView({ model: activityModel, programId: context.programId, singleActivity:
                    this.singleActivity, currentUserId: model.currentUserId, highlightWords: model.highlightWords});
                    this.getContentElement().append(activity.render().el);
                    activity.$("textarea").expanding();
                    activity.initializeCarousel();
                }
            }
        },

        resizeCarousel: function () {
            var $carousel = self.$('.carousel');
            var width = $carousel.width();

            self.$('.slick-slide').height(width);
            $carousel.find('img').css({'max-width': width, 'max-height': width});
        },

        insertLoadingTemplate: function () {
          this.$el.prepend(this.loadIndicator.render().el);
        },

        getContentElement: function () {
            return this.$('.complete');
        },

        updateSalesProviders: function(event) {
          new SalesProvidersView({salesProviders: event});
        }
    });

    return ActivitiesView;
});
