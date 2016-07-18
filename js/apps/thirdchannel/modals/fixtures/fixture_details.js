define(function(require) {
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        HandlebarsTemplates = require('handlebarsTemplates');

    /**
     * Displays details about a fixture when clicking on the overview
     * 'more info' links
     */
    return Backbone.Modal.extend({
        className: 'fixture-modal',

        initialize: function (options) {
            this.model = options.model;
        },
        template: function () {
            return HandlebarsTemplates['thirdchannel/fixtures/fixture_details_modal'](this.getTemplateData());
        },
        getTemplateData: function () {
            var data = this.model.toJSON();
            data.imageUrl = data.attributes.fixtureImages[0].original;
            return data;
        },
        cancelEl: '.bbm-button'
    });

});