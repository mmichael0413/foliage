define(function(require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        context = require('context'),
        

        /**
         * SalesCompare View  listens for changes in the group selects and fires out notification events
         * 
         * 
         * @type View
         */
        SalesCompareView = {

            el: "#groupSelect",
            events: {
                "change #firstCompare": "emitFirst",
                "change #secondCompare": "emitSecond" 
            },

            emitFirst: function (e) {
                this._emit("first", e);
            },

            emitSecond: function (e) {
                this._emit("second", e);  
            },

            _emit: function(key, changeEvent) {
                var value = $(changeEvent.currentTarget).val();
                changeEvent.preventDefault();
                changeEvent.stopPropagation();
                context.trigger("group:change:" + key, value);
                console.log("transmitted", value);
            }
            
        };
    return Backbone.View.extend(SalesCompareView);
});