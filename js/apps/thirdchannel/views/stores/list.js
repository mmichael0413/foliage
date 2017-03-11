define(function(require) {
    var $ = require('jquery'),
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
                'click .select-store': 'selectStore'
            },

            initialize: function() {
                this.$requestVisitLink = $('.request-visit-link');
                this.$requestVisitLink.on('click', this.handleRequestVisitClick.bind(this));
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
                    this.$requestVisitLink.removeClass('disabled');
                } else {
                    var index = selectedStores.indexOf(e.target.value);
                    if(index !== -1) {
                        selectedStores.splice(index, 1);
                    }

                    if(selectedStores.length === 0) {
                        this.$requestVisitLink.addClass('disabled');
                    }
                }

                // save back to sessionStorage
                window.sessionStorage.setItem(selectedStoresKey, JSON.stringify(selectedStores));
            },

            handleRequestVisitClick: function() {
                if(this.$requestVisitLink.hasClass('disabled')) {
                    return false;
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

                    if(selectedStores.length > 0) {
                        this.$requestVisitLink.removeClass('disabled');
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
