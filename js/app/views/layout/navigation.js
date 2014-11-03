define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Ujs = require('jquery_ujs'),
        context = require('context'),
        NotificationBadge = require('app/views/notifications/notification_badge');


    return Backbone.View.extend({
        el: '#site-wrapper',
        initialize: function () {
            var _this = this;
            this.listenTo(context, 'filter:toggle', this.toggleFilter);
            this.$siteWrapper = this.$el;
            this.$siteSubmenu = this.$('#site-submenu');
            this.$toggleFilter = $('.toggle-filter');
            new NotificationBadge().render();

            // width in ems
            var width = $(window).width() / parseFloat($("body").css("font-size"));
            if (width < 35.5) {
                this.state = 'mobile';
                _this.initialNavState = window.localStorage.getItem('main_navigation') || 'expanded-nav';

                // if the initial state was collapsed, toggle the nav
                if (_this.initialNavState == 'collapsed-nav') {
                    _this.collapseNav(null, true);
                }

            } else {
                this.state = 'desktop';
            }

            $(window).on('resize', function () {
                var width = $(window).width() / parseFloat($("body").css("font-size"));
                // if we pass the threshold and are coming from desktop
                if (width <= 35.5 && _this.state === 'desktop') {
                    // set state to mobile
                    _this.state = 'mobile';

                    // get the initial nav state
                    _this.initialNavState = window.localStorage.getItem('main_navigation') || 'expanded-nav';

                    // if the initial state was collapsed, toggle the nav
                    if (_this.initialNavState == 'collapsed-nav') {
                        _this.collapseNav(null, true);
                    }

                    _this.closeSubNav();

                    // set the current nav state to 'expanded-nav'
                    _this.currentNavState = 'expanded-nav';

                // if tranistion from mobile has different initial and current state, toggle the nav
                } else if (width > 35.5  && _this.state == 'mobile' && _this.currentNavState != _this.initialNavState) {
                    _this.state = 'desktop';
                    _this.closeSubNav();
                    _this.closeNav();
                    _this.collapseNav(null, true);
                } else if (width > 35.5 && _this.state == 'mobile') {
                    _this.state = 'desktop';
                    _this.closeSubNav();
                    _this.closeNav();
                }
            });
        },
        events: {
            'click .toggle-nav': 'toggleNav',
            'click .toggle-filter': 'toggleFilter',
            'click .toggle-subnav': 'toggleSubnav',
            'click .collapse-nav': 'collapseNav'
        },
        toggleNav: function (e) {
            if(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (this.$siteWrapper.hasClass('show-nav')) {
                // Do things on Nav Close
                this.$siteWrapper.removeClass('show-nav');
                this.$siteSubmenu.removeClass('show-subnav');
            } else {
                // Do things on Nav Open
                this.$siteWrapper.addClass('show-nav');
            }
        },
        closeNav: function() {
            if (this.$siteWrapper.hasClass('show-nav')) {
                // Do things on Nav Close
                this.$siteWrapper.removeClass('show-nav');
                this.$siteSubmenu.removeClass('show-subnav');
            }
        },
        toggleFilter: function (e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
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
        toggleSubnav: function (e) {
            if(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (this.$siteSubmenu.hasClass('show-subnav')) {
                // Do things on Nav Close
                this.$siteSubmenu.removeClass('show-subnav');
               // this.subNavState = 'collapsed'
            } else {
                // Do things on Nav Open
                this.$siteSubmenu.addClass('show-subnav');
               // this.subNavState = 'expanded'
            }
        },
        closeSubNav: function() {
            if (this.$siteSubmenu.hasClass('show-subnav')) {
                // Do things on Nav Close
                this.$siteSubmenu.removeClass('show-subnav');

            }
        },
        collapseNav: function (e, trigger) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (this.$siteWrapper.hasClass('collapsed-nav')) {
                this.$siteWrapper.find('.collapse-nav .ic_right').removeClass('ic_right').addClass('ic_left');
                this.$siteWrapper.removeClass('collapsed-nav');
                this.$siteWrapper.addClass('expanded-nav');
                if (!trigger) {
                    window.localStorage.setItem('main_navigation', 'expanded-nav');
                }
            } else {
                this.$siteWrapper.find('.collapse-nav .ic_left').removeClass('ic_left').addClass('ic_right');
                this.$siteWrapper.addClass('collapsed-nav');
                this.$siteWrapper.removeClass('expanded-nav');
                if (!trigger) {
                    window.localStorage.setItem('main_navigation', 'collapsed-nav');
                }
            }

            context.trigger('navigation:collapsed');
        }
    });
});
