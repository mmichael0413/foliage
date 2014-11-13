define(function (require) {
    var $ = require('jquery'),
        context = require('context'),
        ActivityView = require('thirdchannel/views/activities/activity'),
        IncompleteActivityView = require('thirdchannel/views/activities/incomplete_activity'),
        ActivityCollection = require('thirdchannel/collections/activities/activities'),
        IncompleteActivity = require('thirdchannel/models/activities/incomplete_activity'),
        Expanding = require('expanding'),
        Livestamp = require('livestamp'),
        InfiniteScrollView = require('thirdchannel/views/shared/infinite_scroll');

    var ActivitiesView = InfiniteScrollView.extend({
        el: '.activities-holder',
        infiniteCollectionClass: ActivityCollection,

        endOfFeedHTML: "<div class='activity alert info'>You have reached the end of the feed!</div>",
        errorHTML: '<div class="activity alert error">Additional activities cannot be loaded due to an error on the server. Please contact Tech Support</div>',


        initialize: function (options) {
            var self = this;

            this.incompleteActivityUrl = options.incompleteActivityUrl;

            this.listenToOnce(context, 'page:height', this.checkPageHeight);
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
            if (model.get('type') !== undefined) {
                var activity = new ActivityView({ model: model, programId: context.programId, singleActivity: this.singleActivity});
                this.getContentElement().append(activity.render().el);
                activity.$("textarea").expanding();
                activity.initializeCarousel();
            }
        },

        endOfFeed: function () {
            // if collection has no models, tell user no activities yet
            this.loadIndicator.removeFromDOM();
            if (this.collection.currentPage === 1 && this.collection.models.length === 0) {
                this.getContentElement().append("<div class='activity alert info'>No Activity was found, please try different search criteria.</div>");
            } else {
                this.getContentElement().append(this.endOfFeedHTML);
            }
        },
        
        resizeCarousel: function () {
            var $carousel = self.$('.carousel');
            var width = $carousel.width();

            self.$('.slick-slide').height(width);
            $carousel.find('img').css({'max-width': width, 'max-height': width});
        },
        getContentElement: function () {
            return this.$('.complete');
        }
    });

    return ActivitiesView;
});