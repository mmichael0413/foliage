define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        Noty = require('noty'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        LabelItemView = require('stores/views/program_stores/label_item'),
        Labels = require('stores/collections/labels');

    return Backbone.Modal.extend({
        cancelEl: '.cancel-button',

        template: HandlebarsTemplates['stores/program_stores/labels'],

        initialize: function() {
            this.collection = new Labels([], {programStore: this.model});
            this.listenTo(this.collection, 'reset', this.renderLabels);
            this.collection.fetch({reset: true});
        },

        getTemplateData: function () {
            return [];
        },

        renderLabels: function() {
            this.collection.each(function(label) {
                var labelView = new LabelItemView({model: label});
                this.$('.labels').append(labelView.render().el);
            }.bind(this));
        }

    });

});
