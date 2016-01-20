define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'task-list',
        loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
        template: HandlebarsTemplates['thirdchannel/checkins/tasks'],
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    });
});
