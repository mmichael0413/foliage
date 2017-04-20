define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/activities/add/task'],

        events: {
            'click .clickable:not(.selected)' : 'select',
            'click .selected': 'submit'
        },

        initialize: function () {
            this.model.action = window.location.href;
            this.listenTo(context, 'list:search:update', this.search);
            this.listenTo(context, 'list:item:selected', this.deselect);
        },

        render: function() {
            this.$el.html(this.template(this.model));
            this.$task = this.$('.task');
            this.$form = this.$('form');
            this.$button = this.$('button');
            return this;
        },

        select: function() {
            context.trigger('list:item:selected');
            this.$task.addClass('selected');
            this.$button.removeClass('hide');
        },

        deselect: function() {
            this.$task.removeClass('selected');
            this.$button.addClass('hide');
        },

        submit: function(e) {
            e.preventDefault();
            this.$form.submit();
            context.trigger('list:create:activity');
        },

        search: function(result) {
            var show = true;

            Object.keys(result).forEach(function (key) {
                var searchValue = result[key].toLocaleString().toLowerCase().split(','),
                    taskValue = this.$task.data(key).toLowerCase();
                if (searchValue) {
                    show &= taskValue.indexOf(searchValue) >= 0 || searchValue.indexOf(taskValue) >= 0;
                }
            }, this);

            if (show) {
                this.$el.removeClass('hide');
            } else {
                this.$el.addClass('hide');
            }
        }
    });
});
