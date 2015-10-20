define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),

    /**
     * Maintains a collection of the currently selected store uuids
     * 
     */
        SelectedStoresStore = function () {
        return new (Backbone.Collection.extend({

            initialize: function () {
                this.uuids = [];
                this.listenTo(context, 'stores:uuids:true', this.addUuids);
                this.listenTo(context, 'stores:uuids:false', this.removeUuids);
                
            },
            url: function () {
                return context.links.jobs;
            },
            contains: function (uuid) {
                return this.uuids.indexOf(uuid) > -1;
            },
            addUuids: function (uuids) {
                this.uuids  = this.uuids.concat(uuids).filter(this._uniqueFilter);
                this._broadcast();
            },
            removeUuids: function (uuids) {
                //this.uuids -= uuids;
                this.uuids = this.uuids.filter(function (uuid) {
                    return uuids.indexOf(uuid) < 0;
                });
                this._broadcast();
            },
            _uniqueFilter: function (value, index, self) { 
                return self.indexOf(value) === index;
            },
            _broadcast: function () {
                context.trigger('stores:selected:count', this.uuids.length);
            }

        }))();
    };
    return SelectedStoresStore(); 
});