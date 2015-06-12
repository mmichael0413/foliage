define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandleBarsTemplates = require('handlebarsTemplates');


    return Backbone.View.extend({
        className: 'task-list',
        loadingHTML: "<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>",
        template: HandleBarsTemplates['thirdchannel/checkins/tasks'],
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