define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),
        ConfirmationModal = require('pennyPacker/modals/confirmation'),
        InvalidateModel = require('pennyPacker/models/invalidate');

    return Backbone.View.extend({
        el: '.content',

        events: {
            'click .paypal': 'paypal',
            'click .invalidate': 'invalidate'
        },

        render: function () {
            return this;
        },

        paypal: function (e) {
            e.stopPropagation();
            e.preventDefault();
            window.location = context.content.links.paypal + window.location.search + "&format=csv";
        },

        invalidate: function (e) {
            e.stopPropagation();
            e.preventDefault();
            $("body").append(new ConfirmationModal({model: new InvalidateModel()}).render().el);
        }
    });
});