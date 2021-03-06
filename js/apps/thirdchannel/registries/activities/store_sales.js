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
                .map(function(uuid) {return self.register(uuid); })
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
                //todo: add unknown numbers from registery
                var self = this,
                    promise = $.ajax({
                    url: this.feedUrl,
                    dataType: 'json',
                    data: {
                        uuids: uuids
                    }
                }).promise();


                rx.Observable.fromPromise(promise)
                .map(function (data) {
                    context.trigger("store.sales.providers", data.salesProviders);

                    var arr = [];
                    for (var uuid in data.sales) {
                        arr.push({
                          uuid: uuid,
                          salesChange: data.sales[uuid].sales_change,
                          message: data.sales[uuid].message,
                          mostRecent: data.sales[uuid].mostRecent,
                          unitsOnHandChange: data.sales[uuid].unitsOnHandChange,
                          unitsSoldChange: data.sales[uuid].unitsSoldChange,
                          salesInCents: data.sales[uuid].salesInCents,
                          unitsSold: data.sales[uuid].unitsSold,
                          unitsOnHand: data.sales[uuid].unitsOnHand,
                          salesDataFor: data.sales[uuid].salesDataFor,
                          salesUrl: data.sales[uuid].salesUrl
                        });
                    }

                    return arr;
                })
                .flatMap(function (data) {
                    return rx.Observable.from(data);
                })
                .subscribe(function (response) {
                    self.registry[response.uuid] = response.salesChange;
                    context.trigger("store.sales.update", response);
                }, function () {
                    console.error("Could not fetch Sales data", arguments);
                }, function () {});
            }


        });

    return StoreSalesRegistry;
});
