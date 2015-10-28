define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
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
            var $target = $(e.currentTarget);
            e.preventDefault();
            e.stopPropagation();

            $target.removeClass('open-jobs');
            $target.html(this.closeBtn);
            $target.addClass('close-jobs');

            this.taskList = new TaskList({
                tasks: this.model.get('tasks'),
                customerStoreId: this.model.get('id'),
                authenticityToken: this.model.get('authenticity_token')
            });

            this.$el.append(this.taskList.render().el);
        },

        closeVisits: function(e){
            var $target = $(e.currentTarget);
            e.preventDefault();
            e.stopPropagation();

            $target.removeClass('close-jobs');
            $target.html(this.openBtn);
            $target.addClass('open-jobs');

            this.taskList.remove();

        }
    });
});