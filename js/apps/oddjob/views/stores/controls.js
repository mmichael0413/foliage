define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        
        StoreListControlsView = {
            el: '#storeControls',

            events: {
                'click .select': 'selectPage',
                'click .deselect': 'deselectPage',
                'keypress #text': 'textSearch'
            },

            selectPage: function (e) {
                e.preventDefault();
                context.trigger('stores:page:select:true');
            },

            deselectPage: function (e) {
                e.preventDefault();
                context.trigger('stores:page:select:false');
            },

            textSearch: function (e) {
                //e.preventDefault();
                if (e.which == 13) {
                    context.trigger('filter:set', [{name: 'text', value: $(e.currentTarget).val()}]);
                }
            }

        };
    return Backbone.View.extend(StoreListControlsView);     

});