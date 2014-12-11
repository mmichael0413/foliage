define(function(require) {
    var FilterableView = require('thirdchannel/views/shared/filterable_table'),
        context = require('context'),
        Backbone = require('backbone'),
        StorePersonnelSectionView = {
            el: '#personnel',
            collectionClass: Backbone.Collection.extend({
                url: function () {
                    return context.personnel.links.self;
                }
            }),
            template: 'thirdchannel/store_profile/personnel_rows',
            bodySelector: '.body'
        };
    
    return FilterableView.extend(StorePersonnelSectionView);
        
});