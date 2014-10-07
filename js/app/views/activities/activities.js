define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ActivityView = require('app/views/activities/activity'),
        IncompleteActivityView = require('app/views/activities/incomplete_activity'),
        LoadingView = require('app/views/activities/loading'),
        ActivityCollection = require('app/collections/activities/activities'),
        IncompleteActivity = require('app/models/activities/incomplete_activity'),
        Expanding = require('libs/expanding');


    return Backbone.View.extend({
        el: '.activities-holder',
        initialize: function (options) {

            this.activityUrl = options.url;
            this.programId = options.programId;
            this.collection = new ActivityCollection({url: this.activityUrl});
            this.isLoading = new LoadingView();
            this.allModelsLoaded = false;
            this.incompleteActivityUrl = options.incompleteActivityUrl;
            var self = this;
            $(window).on('scroll.wall', function () {
                if (self.allModelsLoaded) {
                    $(window).off('scroll.wall');
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
                        self.$el.prepend(new IncompleteActivityView({model: incomplete}).render().el);
                    }
                });
            }

            this.$el.append(self.isLoading.render().el);

            this.collection.fetch().done(function (data) {
                self.render();
            }).fail(function () {
                self.stopOnError();
                return false;
            });

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
                        self.$el.append(this.activity.render().el);
                        this.activity.$el.find("textarea").expanding();
                    }
                });
                // resize();
                self.isLoading.removeFromDOM();
            }
        },
        endOfFeed: function () {
            // if collection has no models, tell user no activities yet
            this.isLoading.removeFromDOM();
            if (this.collection.currentPage === 0) {
                this.$el.append("<div class='activity info'>No Activity was found, please try different search criteria.</div>");
            } else {
                this.$el.append("<div class='activity info'>You have reached the end of the feed!</div>");
            }
        },
        stopOnError: function () {
            this.isLoading.removeFromDOM();
            this.$el.append('<div class="activity info error">Additional activities cannot be loaded due to an error on the server. Please contact Tech Support</div>');
            $(window).off('scroll.wall');
        }
    });
});