define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        Noty = require('noty'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        TagItemView = require('stores/views/program_stores/tag_item'),
        Tags = require('stores/collections/tags');

    return Backbone.Modal.extend({
        cancelEl: '.cancel-button',

        template: HandlebarsTemplates['stores/program_stores/tags'],

        initialize: function() {
            this.collection = new Tags([], {programStore: this.model});
            this.listenTo(this.collection, 'reset', this.renderTags);
            this.collection.fetch({reset: true});
        },

        getTemplateData: function () {
            return [];
        },

        renderTags: function() {
            this.collection.each(function(tag) {
                var tagView = new TagItemView({model: tag});
                this.$('.tags').append(tagView.render().el);
            }.bind(this));
        }

    });

});