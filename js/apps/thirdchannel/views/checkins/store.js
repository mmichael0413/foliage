define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandleBarsTemplates = require('handlebarsTemplates'),
        TaskList = require('thirdchannel/views/checkins/task_list');


    return Backbone.View.extend({
        className: 'store',
        template: HandleBarsTemplates['thirdchannel/checkins/store'],
        initialize: function(options) {
            this.model = options.model;
            return this;
        },

        events: {
            "click .expand-indicator": "openVisits",
            "click .contract-indicator": "closeVisits"
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        openVisits: function(e){
            e.preventDefault();
            e.stopPropagation();

            $(e.currentTarget).removeClass('expand-indicator');
            $(e.currentTarget).addClass('contract-indicator');

            this.taskList = new TaskList({tasks: this.model.get('tasks')});

            this.$el.append(this.taskList.render().el);
        },

        closeVisits: function(e){
            e.preventDefault();
            e.stopPropagation();

            $(e.currentTarget).removeClass('contract-indicator');
            $(e.currentTarget).addClass('expand-indicator');

            this.taskList.remove();

        }
    });
});