define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chosen = require('chosen');

    return Backbone.View.extend({
        className: 'task-list',
        loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
        template: HandlebarsTemplates['thirdchannel/checkins/tasks'],
        render: function() {
            this.$el.html(this.template(this.model));
            this.$('select').chosen({disable_search: false, width: "100%"});
            return this;
        }
    });
});
