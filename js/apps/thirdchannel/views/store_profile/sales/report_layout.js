define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context');

    var View = Backbone.View.extend({

        initialize: function() {
            console.log(this.model);
        },

        render: function() {

            return this;
        }
    });

    return View;
});