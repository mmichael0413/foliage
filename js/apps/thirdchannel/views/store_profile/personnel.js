define(function(require) {
    var FilterableView = require('app/views/shared/filterable_table'),
        context = require('context'),
        Backbone = require('backbone'),
        StorePersonnelSectionView = {
            el: '#personnel',
            collectionClass: Backbone.Collection.extend({
                url: function () {
                    return context.personnel.links.self;
                }
            }),
            template: 'store_profile/personnel_rows',
            bodySelector: '.body'
        };
    
    return FilterableView.extend(StorePersonnelSectionView);
        
});