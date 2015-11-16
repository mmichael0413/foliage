define(function(require) {
    var context = require('context'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        rx = require('rxjs'),

        /**
         *  A Regisitry for storing sales figures for programStores. Responsible for receiving registration events
         * 
         * @type {View}
         */
        StoreSalesRegistry = Backbone.View.extend({

            registry: {},
            bufferFrequency: 750,

            initialize: function () {
                var self = this;
                if (!context.links || !context.links.sales) {
                    // don't run unless the sales link is provided
                    return false;
                }
                this.feedUrl = context.links.sales;
                
                // watch the context event emitter, register each uuid, buffer them in groups by time, 
                // then query for sales data 
                rx.Observable.fromEvent(context, "store.sales.register")
                .map(function(uuid) { return self.register(uuid); })
                .buffer(function () { return Rx.Observable.timer(self.bufferFrequency); })
                .filter(function (data) { return data.length > 0; })
                .subscribe(function (data) { self.queryForSales(data); });
            },

            register: function (uuid) {
                if (!this.registry.hasOwnProperty(uuid)) {
                    this.registry[uuid] = {};
                }
                return uuid;
            },

            queryForSales: function(uuids) {
                console.log("Received ", uuids);
                //todo: add unknown numbers from registery
                var promise = $.ajax({
                    url: this.feedUrl,
                    dataType: 'json',
                    data: {
                        uuids: uuids
                    }
                }).promise();


                rx.Observable.fromPromise(promise)
                .subscribe(function (response) {
                    if (!response.hasOwnProperty('sales')) {
                        console.error("No sales found. Emitting nothing");
                    } else {
                        console.log("Complete.  Will emit ", arguments );
                    }
                }, function () {
                    console.error("Oh no!", arguments);
                }, function () {});
            }


        });

    return StoreSalesRegistry;
});