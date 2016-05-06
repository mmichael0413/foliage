define( function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),

        /**
         * Filter Store is a store for current, active filter items
         * 
         */
        FilterStore = function () {
            var store = {
                data: {},
                getFilterState: function(param) {
                    return this.data[param];
                },

                /**
                 * Membership check to see if the filter has registered itself at all with the store
                 * 
                 * @param  {string} param The name of the filter param to look for
                 * @return {Boolean}      True if it's present, false if not
                 */
                has: function (param) {
                    return this.data.hasOwnProperty(param);
                },

                setFilterState: function (param, value) {
                    if (param.indexOf("[]") === param.length-2) {
                        if (!this.data.hasOwnProperty(param)) {
                            this.data[param] = [];
                        }
                        this.data[param].push(value);
                    } else {
                        this.data[param] = value;    
                    }
                    this.notifySubscribers(param);
                },

                clearFilterState: function (param, value) {
                    if (param.indexOf("[]") === param.length-2) {
                        // slice the array
                    } else {
                        this.data[param] = -1;
                    }
                    this.notifySubscribers(param);
                },

                notifySubscribers: function (param) {
                    context.trigger("filter:state:changed:" + param, {param: param, value:this.data[param]});
                }
            };
            // enable event dispatching
            _.extend(store, Backbone.Events);

            // add listeners
            store.listenTo(context, "filter:item:selected", function (event) {
                store.setFilterState(event.param, event.value);
            });

            store.listenTo(context, "filter:item:cleared", function (event) {
                store.clearFilterState(event.param, event.value);
            });
            return store;
        };

    return FilterStore();
});