define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        ActivityView = require('app/views/activities/activity'),
        IncompleteActivityView = require('app/views/activities/incomplete_activity'),
        LoadingView = require('app/views/activities/loading'),
        ActivityCollection = require('app/collections/activities/activities'),
        IncompleteActivity = require('app/models/activities/incomplete_activity'),
        Expanding = require('libs/expanding'),
        Livestamp = require('livestamp'),
        Filter = require('app/views/filter/main');


    return Backbone.View.extend({
        el: '.activities-holder',
        enableScroll: true,
        initialize: function (options) {
            Filter.init();
            this.activityUrl = options.url;
            this.programId = options.programId;
            this.collection = new ActivityCollection({url: this.activityUrl});
            this.isLoading = new LoadingView();
            this.allModelsLoaded = false;
            this.incompleteActivityUrl = options.incompleteActivityUrl;

            if (options.enableScroll !== undefined) {
                this.enableScroll = options.enableScroll;
            }

            this.listenTo(context, 'filter:query', this.applyFilter);
            context.trigger('configure:excludeFields', ['page', 'per', 'sort', 'direction']);
            context.trigger('filter:set', [{name: 'per', value: 5}]);
            if (!window.filterBootstrap) {
                this.applyFilter();
            }

            var self = this;

            $(window).resize(function () {
                self.resizeCarousel();
            });

            if (this.enableScroll) {
                $('.content-holder').on('scroll', function() {

                    if (self.allModelsLoaded) {
                        $('.content-holder').off('scroll.wall');
                        return false;
                    }

                    if (!self.isLoading.active && $(window).scrollTop() > (self.$el.position().top + self.$el.height()) - 1500) {
                        self.$el.append(self.isLoading.render().el);

                        self.collection.getNextPage().done(function (data) {
                            self.render();
                        }).fail(function () {
                            self.stopOnError();
                            return false;
                        });
                    }

                    return true;
                });
            }
        },
        events: {

        },
        fetch: function () {
            var self = this;

            // render incomplete checkins;
            if (this.incompleteActivityUrl) {
                var incomplete = new IncompleteActivity({current_program: this.programId}, {url: this.incompleteActivityUrl});

                incomplete.fetch().done(function (data) {
                    if (incomplete.get('incomplete') > 0) {
                        self.$('.incomplete').append(new IncompleteActivityView({model: incomplete}).render().el);
                    }
                });
            }

            return this;
        },
        render: function () {
            var self = this;
            if (this.collection.models.length === 0) {
                self.allModelsLoaded = true;
                self.endOfFeed();
            } else {
                this.collection.currentPage += 1;
                _.each(this.collection.models, function (model) {
                    if (model.get('type') !== undefined) {
                        this.activity = new ActivityView({ model: model, programId: self.programId});
                        self.$('.complete').append(this.activity.render().el);
                        this.activity.$el.find("textarea").expanding();
                        this.activity.initializeCarousel();
                    }
                });
                // resize();
                self.isLoading.removeFromDOM();
            }
        },
        applyFilter: function () {
            var self = this;

            this.$('.complete').html(this.isLoading.render().el);
            this.collection.fetch({reset: true}).done(function (data) {
                self.render();
            }).fail(function () {
                self.stopOnError();
                return false;
            });
        },
        endOfFeed: function () {
            // if collection has no models, tell user no activities yet
            this.isLoading.removeFromDOM();
            if (this.collection.currentPage === 1 && this.collection.models.length === 0) {
                self.$('.complete').append("<div class='activity alert info'>No Activity was found, please try different search criteria.</div>");
            } else {
                self.$('.complete').append("<div class='activity alert info'>You have reached the end of the feed!</div>");
            }
        },
        stopOnError: function () {
            this.isLoading.removeFromDOM();
            self.$('.complete').append('<div class="activity alert error">Additional activities cannot be loaded due to an error on the server. Please contact Tech Support</div>');
            $(window).off('scroll.wall');
        },
        resizeCarousel: function () {
            var $carousel = self.$('.carousel');
            var width = $carousel.width();

            self.$('.slick-slide').height(width);
            $carousel.find('img').css({'max-width': width, 'max-height': width});
        }
    });
});