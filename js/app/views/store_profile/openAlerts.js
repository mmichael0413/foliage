define(function(require) {
    var FilterableTableView = require('app/views/shared/filterableTable'),
        OpenAlertsDetails = require('app/views/store_profile/openAlertsDetails'),
        BaseAlertsCollection = require('app/collections/alerts/base'),
        Handlebars = require('handlebars'),
        context = require('context'),
        _ = require('underscore'),
        PaginationView = require('app/views/utils/pagination'),

        OpenAlertsView = FilterableTableView.extend({
            el: '#openAlerts',
            loadingHTML: "<div class='item'><i class='fa fa-spin fa-spinner'></i></div>",
            collectionClass: BaseAlertsCollection.extend({
                getUrlBase: function () {
                    return context.alerts.links.self;
                },
                getCustomerStoreId: function () {
                    return context.requestParameters[1];
                },
                resolved: false,
                per: 3,

            }),
            subViewClass: OpenAlertsDetails,
            template: 'store_profile/alerts_rows',
            bodySelector: '.body',

        
            initialize: function () {
                _.extend(this.events, {
                    'click .resolve': 'toggleSubViewHandler'
                });
                this.delegateEvents();
                OpenAlertsView.__super__.initialize.call(this, arguments);
            },

            additionalData: function () {
                return context.alerts;
            },

            afterRender: function () {   
                //clean up old pager, if exists
                
                if (this.pager) {
                    this.stopListening(this.pager);
                    this.pager.remove();
                    delete this.pager;    
                }
                
                this.pager = new PaginationView(this.collection.pages !== undefined ? this.collection.pages : this.pages).render();
                
                this.$el.find('.pagination-holder').replaceWith(this.pager.$el);
                this.$el.find('.counter').text((this.collection.count !== undefined ? this.collection.count : this.count) + " ");
                this.listenTo(this.pager, 'new_page', this.pageChange);
                
            },

            renderCollection: function (model) {
                this.count = model.pages.totalCount;
                this.pages = model.pages;
                OpenAlertsView.__super__.renderCollection.call(this, model.items);
            },

            pageChange: function (page) {
                this.collection.page = page;
                this.collection.fetch({reset:true});
            },

            toggleSubViewHandler: function (e) {
                e.stopPropagation();
                e.preventDefault();
                this._toggleSubView(this.$el.find(e.currentTarget));
            },

            _toggleSubView: function ($button) {
                var $itemRow = $button.parents('.item'),
                    // slice the alert id off of the href
                    tokens = $button[0].href.split("/"),
                    id = tokens[tokens.length-1];
                // toggle both the button class to make it solid, plus add the class which will 'reveal' the row
                $button.toggleClass('solid');
                $itemRow.toggleClass('active');
                // remove if present any existing SubViews
                // 
                if (this.subView) {
                    this._clearSubView($itemRow);
                } else {
                    this._createSubView($button, id);
                }
            },

            _clearSubView: function ($itemRow) {
                this.stopListening(this.subView);
                this.subView.remove();
                delete this.subView;
                // be sure to replace the target row we just destroyed
                $itemRow.append(Handlebars.partials.alert_details_empty_row());

            },
            _createSubView: function ($button, alert_id) {
                var self = this;
                this.subView = new this.subViewClass({url: context.alerts.links.self + "/" + alert_id});
                this.subView.setElement(this.$el.find('.alert-details'));
                this.subView.fetch();
                this.listenTo(this.subView, "details:close", function () {
                    self._toggleSubView($button);
                });
            }
            
        });
        return OpenAlertsView;     
});