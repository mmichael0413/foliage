define(function(require) {
    var $ = require('jquery'),
        context = require('context'),
        PageableListView = require('thirdchannel/views/shared/pageable_list'),
        SalesMarquee = require('thirdchannel/views/shared/sales_marquee'),
        SalesProvidersView = require('thirdchannel/views/sales_providers'),

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

            afterRender: function(options) {
              var self = this;
              PageableListView.prototype.afterRender.apply(this, [options]);

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
