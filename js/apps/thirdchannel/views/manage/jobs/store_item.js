define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');


    var StoreItem = Backbone.View.extend({
        className: 'pure-g store-item',

        template: HandlebarsTemplates['thirdchannel/manage/jobs/store'],

        events: {
            'click .store-remove-link': 'handleRemove'
        },

        initialize: function(options) {
            this.jobRequestId = options.jobRequestId;
        },

        render: function() {
            var data = this.model.attributes;
            data.jobRequestId = this.jobRequestId;
            this.$el.html(this.template(data));
            return this;
        },

        handleRemove: function(e) {
            e.preventDefault();

            if(confirm("Are you sure you want to remove " + this.model.get('name') + " " + this.model.get('address') + "?")) {
                // remove from collection
                this.model.collection.remove(this.model);

                // remove from session storage
                var storeIds = JSON.parse(window.sessionStorage.getItem('selected-stores'));
                var index = storeIds.indexOf(this.model.get('uuid'));
                storeIds.splice(index, 1);
                window.sessionStorage.setItem('selected-stores', JSON.stringify(storeIds));

                this.remove();
            }
        }
    });

    return StoreItem;
});