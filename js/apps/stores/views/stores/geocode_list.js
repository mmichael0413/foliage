define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/stores/geocode_list'],

        render: function() {

            return this;
        }
    });

    return View;
});