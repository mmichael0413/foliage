define(function (require) {
    var SectionLoaderView = require('app/views/store_profile/section_loader'),
        context = require('context'),
        Backbone = require('backbone'),

        AlertsTrackingView = SectionLoaderView.extend({
            el: '#alerts',

            events: {
                'click .resolve': 'resolveAlert'
            },
            
            collectionClass: Backbone.Collection.extend({
                url: function () {
                    return context.alerts.links.open;
                },
                parse: function (response) {
                    this.count = response.count;
                    return response.items;
                }
            }),
            
            rowsTemplate: 'store_profile/alerts_rows',
            
            additionalData: function () {
                return context.alerts;
            },
            afterRender: function () {
                this.$el.find('.counter').text(this.collection.count + " ");
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
                        self.collection.fetch({reset:true});
                    })
                    .fail(function () {
                        self.html("There is a problem. Please contact Tech Support");                            
                    });

            }
        });
    
    return AlertsTrackingView;

});