define(function(require){
var _ = require('underscore'),
    $ = require('jquery'),
    AsyncListView = require('shared/views/async_list'),
    EntriesCollection = require('pennyPacker/collections/invalidEntries'),
    
    
    Filterable = require('shared/views/utils/filterable_component'),
    CheckinView = require('pennyPacker/views/entry/checkin'),
    TravelView = require('pennyPacker/views/entry/travel'),
        /**
         *
         * The Invalid entries list
         * 
         * @extends {module:shared/views/async_list}
         * @exports pennyPacker/views/entries/invalid
         */
        InvalidEntryListView = {
            el: '#invalidEntries',
            initialize: function () {
                AsyncListView.prototype.initialize.call(this, arguments);
                this.initFilterable();
            },
            initializeCustomCollectionListeners: function () {
                
            },

            rowView: function(options) {
                var type = options.model.get('type'),
                    view = CheckinView;

                if (type == "CHECKIN") {
                }
                else if (type == "TRAVEL") {
                    view = TravelView;
                } else {
                    console.error("Model has unknown type of " + type);
                    console.error(options.model);
                }
                return new view(options);
            },

            afterRender: function () {
                // code smell, I think. when rendering, we should check the collection size and hide the view if there's no items to display
                // 
                if (this.collection.length > 0) {
                    if (!this.$el.is(':visible')) {
                        this.$el.fadeIn();
                    }
                } else {
                    this.$el.fadeOut();
                }
            },
            
            collectionClass: EntriesCollection,
            
        };
    _.extend(InvalidEntryListView, Filterable);
    return AsyncListView.extend(InvalidEntryListView);
});