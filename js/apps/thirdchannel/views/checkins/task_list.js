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
            console.log(options.tasks);
        },

        render: function() {
           // this.$el.html(this.loadingHTML);



            this.$el.html(this.template({tasks: this.tasks}));

            return this;
        },

        fetch: function() {

        }
    });
});