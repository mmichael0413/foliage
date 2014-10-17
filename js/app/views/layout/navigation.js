define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Ujs = require('jquery_ujs'),
        dispatcher = require('app/utils/eventListener');


        
    return Backbone.View.extend({
        el: '#site-wrapper',
        initialize: function() {
            this.listenTo(dispatcher, 'filter:toggle', this.toggleFilter);
            this.$siteWrapper = this.$el;
            this.$siteSubmenu = this.$('#site-submenu');
            this.$toggleFilter = $('.toggle-filter');

            var navState = window.localStorage.getItem('main_navigation'); 

            if (navState !== null) {
           //     this.$siteWrapper.addClass(navState);
            }
        },
        events: {
            'click .toggle-nav': 'toggleNav',
            'click .toggle-filter': 'toggleFilter',
            'click .toggle-subnav': 'toggleSubnav',
            'click .collapse-nav': 'collapseNav'
        },
        toggleNav: function() {
            if (this.$siteWrapper.hasClass('show-nav')) {
                // Do things on Nav Close
                this.$siteWrapper.removeClass('show-nav');
                this.$siteSubmenu.removeClass('show-subnav');
            } else {
                // Do things on Nav Open
                this.$siteWrapper.addClass('show-nav');
            }
        },
        toggleFilter: function() {
            if (this.$siteWrapper.hasClass('show-filter')) {
                // Do things on Nav Close
                this.$siteWrapper.removeClass('show-filter');
                this.$toggleFilter.removeClass('enabled');
            } else {
                // Do things on Nav Open
                this.$siteWrapper.addClass('show-filter');
                this.$toggleFilter.addClass('enabled');
            }
        },
        toggleSubnav: function() {
            if (this.$siteSubmenu.hasClass('show-subnav')) {
                // Do things on Nav Close
                this.$siteSubmenu.removeClass('show-subnav');
            } else {
                // Do things on Nav Open
                this.$siteSubmenu.addClass('show-subnav');
            }
        },
        collapseNav: function() {
            if (this.$siteWrapper.hasClass('collapsed-nav')) {
                this.$siteWrapper.find('.collapse-nav .ic_right').removeClass('ic_right').addClass('ic_left');
                this.$siteWrapper.removeClass('collapsed-nav');
                this.$siteWrapper.addClass('expanded-nav');
                window.localStorage.setItem('main_navigation', 'expanded-nav');
            } else {
                this.$siteWrapper.find('.collapse-nav .ic_left').removeClass('ic_left').addClass('ic_right');   
                this.$siteWrapper.addClass('collapsed-nav');
                this.$siteWrapper.removeClass('expanded-nav');
                window.localStorage.setItem('main_navigation', 'collapsed-nav');
            }
             dispatcher.trigger('navigation:collapsed');
        }
    });
});
