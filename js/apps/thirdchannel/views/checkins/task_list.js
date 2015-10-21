define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');


    return Backbone.View.extend({
        className: 'task-list',
        loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
        template: HandlebarsTemplates['thirdchannel/checkins/tasks'],
        initialize: function(options) {
            this.tasks = options.tasks;
            this.customerStoreId = options.customerStoreId;
            this.authenticityToken = options.authenticityToken;
        },

        render: function() {
            this.$el.html(this.template({tasks: this.tasks, customerStoreId: this.customerStoreId, authenticityToken: this.authenticityToken}));

            return this;
        },

        fetch: function() {

        }
    });
});