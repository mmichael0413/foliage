define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        PageableListView = require('thirdchannel/views/shared/pageable_list'),
        SalesMarquee = require('thirdchannel/views/shared/sales_marquee'),
        SalesProvidersView = require('thirdchannel/views/sales_providers'),

        selectedStoresKey = 'selected-stores',

        /**
         *
         * The Stores list
         *
         * @extends {module:thirdchannel/views/shared/pageable_list}
         * @exports thirdchannel/views/stores/list
         */
        StoreListView = PageableListView.extend({
            el: '#stores',
            template: 'thirdchannel/stores/rows',

            events: {
                'click .select-stores': 'selectStores',
                'click .select-store': 'selectStore'
            },

            initialize: function() {
                this.$requestVisitLink = $('.request-visit-link');
                this.$requestVisitLink.on('click', this.handleRequestVisitClick.bind(this));

                this.$selectStores = this.$('.select-stores');

                StoreListView.__super__.initialize.apply(this, arguments);
            },

            /**
             *
             * We're exposing the ability for account managers/fmrs to request jobs (driven by the Vega program).
             * Part of the form is to select the stores for the job to be performed at, which is being done by this page.
             * Select stores -> click "Request Visit" action button -> fill out abridged job/task form
             * However, this page wasn't intended to be bundled with the workflow in conjunction with other pages (typically this would be done as a module to round out the UX workflow)
             * In order to get information from this page to the form session storage (similar to localStorage except it expires) is being used until we find the time to build out the request job workflow properly...
             */
            selectStore: function(e) {
                var selectedStores = window.sessionStorage.getItem(selectedStoresKey);

                if(selectedStores) {
                    selectedStores = JSON.parse(selectedStores);
                } else {
                    selectedStores = [];
                }

                if(e.target.checked) {
                    selectedStores.push(e.target.value);
                } else {
                    var index = selectedStores.indexOf(e.target.value);
                    if(index !== -1) {
                        selectedStores.splice(index, 1);
                    }

                    if(this.$selectStores.is(':checked')) {
                        this.$selectStores.prop('checked', false);
                    }
                }

                this.maybeEnableRequestVisitLink(selectedStores);
                this.updateSelectStoresCount(selectedStores.length);

                // save back to sessionStorage
                window.sessionStorage.setItem(selectedStoresKey, JSON.stringify(selectedStores));
            },

            selectStores: function(e) {
                var $selectStore = this.$('.select-store');

                // Get the selected stores from session storage (could include some from different page...)
                var selectedStores = window.sessionStorage.getItem(selectedStoresKey);

                if(selectedStores) {
                    selectedStores = JSON.parse(selectedStores);
                } else {
                    selectedStores = [];
                }

                var allStoresIds = _.map($selectStore, function(s) {
                    return s.value;
                });

                if(e.target.checked) {
                    selectedStores = _.union(selectedStores, allStoresIds);

                    $selectStore.prop('checked', true);
                } else {
                    selectedStores = _.difference(selectedStores, allStoresIds);

                    $selectStore.prop('checked', false);
                }

                this.maybeEnableRequestVisitLink(selectedStores);
                this.updateSelectStoresCount(selectedStores.length);

                window.sessionStorage.setItem(selectedStoresKey, JSON.stringify(selectedStores));
            },

            maybeEnableRequestVisitLink: function(selectedStores) {
                if(selectedStores.length === 0) {
                    this.$requestVisitLink.addClass('disabled');
                } else {
                    this.$requestVisitLink.removeClass('disabled');
                }
            },

            handleRequestVisitClick: function() {
                if(this.$requestVisitLink.hasClass('disabled')) {
                    return false;
                }
            },

            updateSelectStoresCount: function(selectedStoresCount) {
                if(selectedStoresCount > 0) {
                    this.$('.stores-selected').html(selectedStoresCount + ' Stores Selected');
                } else {
                    this.$('.stores-selected').html('');
                }
            },

            afterRender: function(options) {
                var self = this;
                PageableListView.prototype.afterRender.apply(this, [options]);

                // If there are any selected stores check them off
                var selectedStores = window.sessionStorage.getItem(selectedStoresKey);
                if(selectedStores) {
                    selectedStores = JSON.parse(selectedStores);

                    selectedStores.forEach(function(id) {
                        this.$('#select-store-' + id).prop('checked', true);
                    }.bind(this));

                    this.maybeEnableRequestVisitLink(selectedStores);

                    this.updateSelectStoresCount(selectedStores.length);

                    // if all of the stores are selected, check the select all store checkbox
                    var checkedLength = this.$('.select-store:checked').length;
                    if(checkedLength > 0 && checkedLength === this.$('.select-store').length) {
                        this.$selectStores.prop('checked', true);
                    } else {
                        this.$selectStores.prop('checked', false);
                    }
                }

                this.collection.forEach(function(model) {
                    if (model.get('sales_data')) {
                        new SalesMarquee({el: self.$el.find('.sales-marquee#' + model.get('id')), salesData: model.get('sales_data')});
                    }
                });
              
                new SalesProvidersView({salesProviders: window.bootstrap.salesProviders});
            }
        });
    return StoreListView;
});
