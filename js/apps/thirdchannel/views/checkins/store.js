define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandleBarsTemplates = require('handlebarsTemplates'),
        TaskList = require('thirdchannel/views/checkins/task_list');


    return Backbone.View.extend({
        className: 'store',
        template: HandleBarsTemplates['thirdchannel/checkins/store'],

        openBtn: "Open <i class='ic ic_down'></i>",
        closeBtn: "Close <i class='ic ic_up'></i>",

        events: {
            "click .open-jobs": "openVisits",
            "click .close-jobs": "closeVisits"
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        openVisits: function(e){
            e.preventDefault();
            e.stopPropagation();

            $(e.currentTarget).removeClass('open-jobs');
            $(e.currentTarget).html(this.closeBtn);
            $(e.currentTarget).addClass('close-jobs');

            this.taskList = new TaskList({tasks: this.model.get('tasks')});

            this.$el.append(this.taskList.render().el);
        },

        closeVisits: function(e){
            e.preventDefault();
            e.stopPropagation();

            $(e.currentTarget).removeClass('close-jobs');
            $(e.currentTarget).html(this.openBtn);
            $(e.currentTarget).addClass('open-jobs');

            this.taskList.remove();

        }
    });
});