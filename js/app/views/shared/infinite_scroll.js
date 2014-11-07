define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),
        _ = require('underscore'),
        LoadingView = require('app/views/activities/loading'),

        /**
         * A base class for dealing with infinite scrolling of some items
         * 
         * @exports app/views/shared/infinite_scroll
         */
        InfiniteScrollView = Backbone.View.extend({
            el: '.infinite-container',
            enableScroll: true,

            infiniteCollectionClass: undefined,
            per: 5,
            endOfFeedHTML: "<div class='alert info'>You have reached the end of the feed!</div>",
            errorHTML: '<div class="alert error">Additional items cannot be loaded due to an error on the server. Please contact Tech Support</div>',

            initialize: function (options) {
                var self = this,
                    // this is probably taboo, but we grab the location of the 
                    // parent dom element which contains all of our content
                    $contentHolder = $('.content-holder');
                if (options) {
                    this.infiniteURL = options.url;
                }
                this.collection = new this.infiniteCollectionClass({url: this.infiniteURL});
                this.listenTo(this.collection, 'reset', this.clearAndRender);
                this.listenTo(this.collection, 'nextPage', this.render);
                this.listenTo(this.collection, 'error', this.stopOnError);

                this.loadIndicator = new LoadingView();
                this.getContentElement().append(this.loadIndicator.render().el);
                this.allModelsLoaded = false;

                if (options && options.enableScroll !== undefined) {
                    this.enableScroll = options.enableScroll;
                }

                
                //this.listenTo(context, 'filter:query', this.applyFilter);
                // configure the filter to ignore some specific fields which the infinite scroll will control
                context.trigger('configure:excludeFields', ['page', 'per', 'sort', 'direction']);
                // asumes the presence of the filter, of course
                // todo: the value should come from the collection
                context.trigger('filter:set', [{name: 'per', value: this.per}]);
                
                if (!window.filterBootstrap) {
                    this.applyFilter();
                }

                if (this.enableScroll) {
                    var topOfOthDiv = $contentHolder.offset().top;
                    $contentHolder.on('scroll', function() {

                        if (self.allModelsLoaded) {
                            $contentHolder.off('scroll.wall');
                            return false;
                        }
                        
                        if (!self.loadIndicator.active && $contentHolder.scrollTop() > ( self.getContentElement().height()) - 1500) {

                            self.$el.append(self.loadIndicator.render().el);

                            // self.collection.getNextPage().done(function () {
                            //     self.render();
                            // }).fail(function () {
                            //     self.stopOnError();
                            //     return false;
                            // });
                            self.collection.getNextPage();
                        }

                        return true;
                    });
                }
            },
            
            fetch: function () {
                // todo: should return jqxhr
                return this;
            },
            
            render: function () {
                var self = this;
                
                if (this.collection.models.length === 0) {
                    self.allModelsLoaded = true;
                    self.endOfFeed();
                } else {
                    //this.collection.currentPage += 1;
                    
                    _.each(this.collection.models, function () {
                        self.renderModel.apply(self, arguments);
                     });
                    
                    self.loadIndicator.removeFromDOM();
                    context.trigger('page:height');
                }
            },

            clearAndRender: function() {
                this.getContentElement().html('');
                this.allModelsLoaded = false;
                this.render();
            },

            renderModel: function () {
                console.warn("Override me!");
            },

            endOfFeed: function () {
                this.loadIndicator.removeFromDOM();
                this.getContentElement().append(this.endOfFeedHTML);
            },

            stopOnError: function () {
                this.loadIndicator.removeFromDOM();
                //self.$('.complete').append('<div class="activity alert error">Additional activities cannot be loaded due to an error on the server. Please contact Tech Support</div>');
                this.getContentElement().append(this.errorHTML);
                $(window).off('scroll.wall');
            },
           
            checkPageHeight: function () {
                // handles case where only one item is shown and the screen doesn't scroll so triggering
                // next page won't occur. This forces at least one scroll.
                var windowHeight = $(window).height();
                this.$el.css('min-height', windowHeight + 'px' );

            },

            /**
             * On some implementations, their is an inner div to the infinite scrolling which should have the content
             * rendered. This isn't optimal, and should be unified in the sense that this view should simply render to 
             * itself, but until then, override this function to specify the infinite content;
             *
             * 
             * @return {DOM} jQuery wrapped dom element containing the infinite content
             */
            getContentElement: function () {
                return this.$el;
            }
        });

    return InfiniteScrollView;
});