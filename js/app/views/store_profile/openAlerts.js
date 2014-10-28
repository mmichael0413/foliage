define(function(require) {
    var FilterableTableView = require('app/views/shared/filterableTable'),
        context = require('context'),
        PaginationView = require('app/views/utils/pagination'),
        Backbone = require('backbone'),

        OpenAlertsView = FilterableTableView.extend({
            el: '#openAlerts',
            loadingHTML: "<div class='item'><i class='fa fa-spin fa-spinner'></i></div>",
            collectionClass: Backbone.Collection.extend({
                queryString: "",
                url: function () {
                    return context.alerts.links.open;
                },
                parse: function (response) {
                    this.count = response.pages.totalCount;
                    this.pages = response.pages;
                    return response.items;
                }
            }),
            template: 'store_profile/alerts_rows',
            bodySelector: '.body',

            events : {
                'click .resolve': 'resolveAlert'
            },

            additionalData: function () {
                return context.alerts;
            },

            afterRender: function () {   
                //clean up old pager, if exists
                if (this.pager) {
                    this.pager.remove();
                    delete this.pager;    
                }
                
                this.pager = new PaginationView(this.collection.pages !== undefined ? this.collection.pages : this.pages).render();
                this.$el.find('.pagination-holder').replaceWith(this.pager.$el);
                
                this.$el.find('.counter').text((this.collection.count !== undefined ? this.collection.count : this.count) + " ");
            },

            renderCollection: function (model) {
                this.count = model.pages.totalCount;
                this.pages = model.pages;
                OpenAlertsView.__super__.renderCollection.call(this, model.items);
            },

            resolveAlert: function (e) {
                e.stopPropagation();
                e.preventDefault();

                var tokens = e.currentTarget.href.split("/"),
                    $link = this.$el.find(e.currentTarget),
                    id = tokens[tokens.length-1],
                    self = this,
                    tracker = this.collection.get(id);
                // put the change, then reset the collection with the results
                tracker.url = e.currentTarget.href;
                tracker.set({resolved: true});
                
                $link.parent().html("<i class='fa fa-spin fa-spinner'></i>");
                tracker.save()
                    .done(function () {
                        context.trigger('filter:query', "");
                    })
                    .fail(function () {
                        self.html("There is a problem. Please contact Tech Support");                            
                    });

            }
        });
        return OpenAlertsView;     
});