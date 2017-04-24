define(function(require) {
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        className: 'job-request-assignment-history',

        template: function () {
            return HandlebarsTemplates['thirdchannel/manage/jobs/assignment_history'](this.getTemplateData());
        },

        getTemplateData: function () {
            return {
                assignments: this.collection.toJSON()
            };
        },

        cancelEl: '.bbm-button'
    });
});