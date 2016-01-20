define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        context = require('context'),
        moment = require('moment'),
        HandleBarsTemplates = require('handlebarsTemplates'),
        TaskList = require('thirdchannel/views/checkins/task_list');


    return Backbone.View.extend({
        className: 'job',
        template: HandleBarsTemplates['thirdchannel/checkins/job'],
        openBtn: "Show Tasks <i class='ic ic_down'></i>",
        closeBtn: "Hide Tasks <i class='ic ic_up'></i>",
        events: {
            "click .open-tasks": "openTasks",
            "click .close-tasks": "closeTasks"
        },
        initialize: function(options){
            if(options.model.date !== ""){
                // parse date (iso8601 format) as a date in utc
                // and format it as a localized date in utc
                this.model.local_date = moment.utc(options.model.date).format("l");
            }
        },
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },
        openTasks: function(e){
            var $target = $(e.currentTarget);
            e.preventDefault();
            e.stopPropagation();

            $target.removeClass('open-tasks');
            $target.html(this.closeBtn);
            $target.addClass('close-tasks');

            this.taskList = new TaskList({model:{
                job: this.model.job,
                store: this.model.store
            }});

            this.$el.append(this.taskList.render().el);
        },
        closeTasks: function(e){
            var $target = $(e.currentTarget);
            e.preventDefault();
            e.stopPropagation();

            $target.removeClass('close-tasks');
            $target.html(this.openBtn);
            $target.addClass('open-tasks');

            this.taskList.remove();

        }
    });
});
