define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Inquiry = require('marketing/models/inquiry'),
        Serialize = require('serializeObject');


    return Backbone.View.extend({
        el: '#request-demo',

        events: {
            'submit': 'save'
        },

        initialize: function () {
            this.model = new Inquiry();
        },

        save: function(e) {
            e.preventDefault();


        }
    });
});