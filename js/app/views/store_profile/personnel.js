define(function(require) {
    var SectionLoaderView = require('app/views/store_profile/section_loader'),
        context = require('context'),
        Backbone = require('backbone'),
        StorePersonnelSectionView = {
            el: '#personnel',
            collectionClass: Backbone.Collection.extend({
                url: function () {
                    return context.personnel.links.self;
                }
            }),
            rowsTemplate: 'store_profile/personnel_rows'
        };
    
    return SectionLoaderView.extend(StorePersonnelSectionView);
        
});