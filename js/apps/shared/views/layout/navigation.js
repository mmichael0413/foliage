define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Ujs = require('jquery_ujs'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');


    return Backbone.View.extend({
        el: '#site-wrapper',
        template: HandlebarsTemplates['shared/layout/main_navigation'],
        initialize: function () {
            var _this = this;

            this.browserCompatibility();

            this.listenTo(context, 'filter:toggle', this.toggleFilter);
            this.listenTo(context, 'filter:close', this.closeFilter);
            this.listenTo(context, 'nav:toggle', this.collapseNav);
            this.listenTo(context, 'nav:collapse', this._collapseNav);
            this.listenTo(context, 'nav:expand', this.expandNav);
            this.$siteWrapper = this.$el;
            this.$siteSubmenu = this.$('#site-submenu');
            this.$toggleFilter = $('.toggle-filter');

            if (window.bootstrap && window.bootstrap.navigation){
                this.render();
            }

            this.listenTo(context, 'navigation:changed', _.debounce(function() {
                setTimeout(function () {
                    _this.render();
                }, 500);
            }, 500));

            if(!this.isLocalStorageSupported()) {
                return;
            }

            if (!window.localStorage.getItem('main_navigation')){
                window.localStorage.setItem('main_navigation', 'expanded-nav');
            }

            // width in ems
            var width = $(window).width() / parseFloat($("body").css("font-size"));
            if (width < 35.5) {
                this.state = 'mobile';
                _this.initialNavState = 'expanded-nav';

                // if the initial state was collapsed, toggle the nav
                if (window.localStorage.getItem('main_navigation') == 'collapsed-nav') {
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
                    if (window !== undefined && window.localStorage !== undefined) {
                        _this.initialNavState = window.localStorage.getItem('main_navigation') || 'expanded-nav';

                        // if the initial state was collapsed, toggle the nav
                        if (_this.initialNavState == 'collapsed-nav') {
                            _this.collapseNav(null, true);
                        }
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

            var $contentHolder = $('.content-holder');
            var topOfOthDiv = $contentHolder.offset().top;
            $contentHolder.on('scroll', function() {
                if ($contentHolder.scrollTop() > topOfOthDiv + 300) {
                    $(".scroll-top").show();
                } else {
                    $(".scroll-top").hide();
                }
            });
        },
        events: {
            'click .toggle-nav': 'toggleNav',
            'click .toggle-filter': 'toggleFilter',
            'click .toggle-subnav': 'toggleSubnav',
            'click .collapse-nav': 'collapseNav',
            "click .scroll-top" : "scrollTop",
            "click .content-holder" : "closeNav",
            "click #mobile-header" : "closeNav",
            "transitionend" : "navTransitionEnd",
            "webkitTransitionEnd" : "navTransitionEnd",
            "oTransitionEnd" : "navTransitionEnd",
            "MSTransitionEnd" : "navTransitionEnd",
            "click .close-alert" : "closeAlertBox"
        },
        render: function(){
            this.$('#site-menu').html(this.template({navItems: window.bootstrap.navigation, homeLink: window.bootstrap.homeLink}));
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
                this.$siteSubmenu.find('.site-submenu-component').hide();
            } else {
                // Do things on Nav Open
                this.$siteWrapper.addClass('show-nav');
            }
        },
        closeNav: function(e) {
            if (this.$siteWrapper.hasClass('show-nav')) {
                if(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                // Do things on Nav Close
                this.$siteWrapper.removeClass('show-nav');
                this.$siteSubmenu.removeClass('show-subnav');
                this.$siteSubmenu.find('.site-submenu-component').hide();
            }
        },
        toggleFilter: function (e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (this.$siteWrapper.hasClass('show-filter')) {
                this.closeFilter();
                if(window.localStorage.getItem('main_navigation') === 'expanded-nav' && this.state == 'desktop') {
                    this.expandNav(null, true);
                }
            } else {
                // Do things on Nav Open
                this.$siteWrapper.addClass('show-filter');
                this.$toggleFilter.addClass('enabled');

                if(window.localStorage.getItem('main_navigation') === 'expanded-nav' && this.state == 'desktop') {
                    this._collapseNav(null, true);
                }
            }
            context.trigger('filter-toggled');
        },
        closeFilter: function() {
            // Do things on Nav Close
            this.$siteWrapper.removeClass('show-filter');
            this.$toggleFilter.removeClass('enabled');
        },
        navTransitionEnd: function (e) {
            if (e.originalEvent.propertyName == 'transform') {
                context.trigger('filter-toggled:complete');
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
                this.$siteSubmenu.find('.site-submenu-component').hide();
            } else {
                // Do things on Nav Open
                var $triggerEl = $(e.target).closest('.nav-item');

                if($triggerEl.attr('rel') !== undefined) {
                    this.$siteSubmenu.find($triggerEl.attr('rel')).show();
                } else {
                    this.$siteSubmenu.find('.site-submenu-component').first().show();
                }

                this.$siteSubmenu.addClass('show-subnav');
            }
        },
        closeSubNav: function() {
            if (this.$siteSubmenu.hasClass('show-subnav')) {
                // Do things on Nav Close
                this.$siteSubmenu.removeClass('show-subnav');
                this.$siteSubmenu.find('.site-submenu-component').hide();
            }
        },
        collapseNav: function (e, trigger) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (this.$siteWrapper.hasClass('collapsed-nav')) {
                this.expandNav(e, trigger);
            } else {
                this._collapseNav(e, trigger);
            }

            context.trigger('navigation:collapsed');
        },
        _collapseNav: function(e, trigger) {
            this.$siteWrapper.find('.collapse-nav .ic_left').removeClass('ic_left').addClass('ic_right');
            this.$siteWrapper.addClass('collapsed-nav');
            this.$siteWrapper.removeClass('expanded-nav');
            if (!trigger) {
                window.localStorage.setItem('main_navigation', 'collapsed-nav');
            }
            context.trigger('navigation:collapsed');
        },
        expandNav: function(e, trigger) {
            this.$siteWrapper.find('.collapse-nav .ic_right').removeClass('ic_right').addClass('ic_left');
            this.$siteWrapper.removeClass('collapsed-nav');
            this.$siteWrapper.addClass('expanded-nav');
            if (!trigger) {
                window.localStorage.setItem('main_navigation', 'expanded-nav');
            }
        },
        browserCompatibility: function() {
            var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

            re = /(W|w)in.*/;

            // if the requesting user is on a windows machine, add a browser class to site-wrapper
            if(navigator.platform.match(re)) {
                if(isIE) {
                    var ver = this.getInternetExplorerVersion();

                    if ( ver <= 9.0 && ver != -1 ) {
                        this.$el.addClass('ie');
                    } else {
                        this.$el.addClass('win');
                    }
                } else {
                    this.$el.addClass('win');
                }
            }

        },
        getInternetExplorerVersion: function () {
            var rv = -1; // Return value assumes failure.
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                if (re.exec(ua) !== null)
                    rv = parseFloat(RegExp.$1);
            }
            return rv;
        },
        scrollTop: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.$('.content-holder').animate({
                scrollTop: 0
            }, 500);
        },
        isLocalStorageSupported: function () {
            var testKey = 'test', storage = window.sessionStorage;
            try {
                storage.setItem(testKey, '1');
                storage.removeItem(testKey);
                return true;
            }
            catch (error) {
                return false;
            }
        },

        closeAlertBox: function (e) {
            e.stopPropagation();
            e.preventDefault();

            $(e.target).parent().remove();
        }
    });
});
