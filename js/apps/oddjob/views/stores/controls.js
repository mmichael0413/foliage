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
                console.log("triggering");
                context.trigger('stores:page:select');
            },

            deselectPage: function (e) {
                e.preventDefault();
                console.log("triggering");
                context.trigger('stores:page:deselect');
            },

            textSearch: function (e) {
                //e.preventDefault();
                if (e.which == 13) {
                    console.log("Submitting ", $(e.currentTarget).val());
                    context.trigger('filter:set', [{name: 'text', value: $(e.currentTarget).val()}]);
                }
            }

        };
    return Backbone.View.extend(StoreListControlsView);     

});