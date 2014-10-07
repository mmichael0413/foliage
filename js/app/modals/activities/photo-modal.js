define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');


    return Backbone.Modal.extend({
        initialize: function (options) {
            this.model = options.model;
        },
        template: function () {
            return HandlebarsTemplates['photo-modal'](this.model.attributes);
        },
        cancelEl: '.bbm-button'
    });

});