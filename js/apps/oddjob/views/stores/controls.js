define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        
        StoreListControlsView = {
            el: '#storeControls',

            events: {
                'click .select': 'selectPage',
                'click .deselect': 'deselectPage',
                'click .remove': 'removeStores',
                'change .file-upload': 'broadcastFileChoice',
                'keypress #text': 'textSearch'
            },
            initialize: function () {
                this.listenTo(context, 'stores:selected:count', this.updateCount);

            },

            broadcastFileChoice: function(e) {
                e.preventDefault();
                context.trigger("stores:file:selected", e.target.files);

            },

            selectPage: function (e) {
                e.preventDefault();
                context.trigger('stores:page:select:true');
            },

            deselectPage: function (e) {
                e.preventDefault();
                context.trigger('stores:page:select:false');
            },

            removeStores: function (e) {
                e.preventDefault();
                context.trigger('stores:remove:selected');
            },

            textSearch: function (e) {

                if (e.which == 13) {
                    context.trigger('filter:set', [{name: 'text', value: $(e.currentTarget).val()}]);
                    e.preventDefault();
                    e.stopPropagation();
                }
            },
            updateCount: function (count) {
                this.$el.find('#storeCount').text(count);
            },

        };
    return Backbone.View.extend(StoreListControlsView);     

});