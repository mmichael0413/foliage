define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    var StoreItem = Backbone.View.extend({
        className: 'pure-g date-range-item',

        template: HandlebarsTemplates['thirdchannel/manage/jobs/range'],

        events: {
            'click .date-range-remove-link': 'handleRemove'
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        handleRemove: function(e) {
            e.preventDefault();

            if(confirm("Are you sure you want to remove this date range?")) {
                this.model.collection.remove(this.model);
                this.remove();
            }
        }
    });

    return StoreItem;
});