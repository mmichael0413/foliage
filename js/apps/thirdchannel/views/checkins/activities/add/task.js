define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/activities/add/task'],
        inputTemplate: Templates['thirdchannel/checkins/activities/add/input'],

        events: {
            'click :not(button)' : 'select'
        },

        initialize: function () {
            this.listenTo(context, 'list:search:update', this.search);
            this.listenTo(context, 'list:item:selected', this.deselect);
        },

        render: function() {
            this.$input = this.inputTemplate(this.model);
            this.$el.html(this.template(this.model));
            this.$task = this.$('.task');
            this.$indicator = this.$('.indicator div');
            this.$icon = this.$('> div i');
            this.$inputs = this.$('.inputs');
            return this;
        },

        select: function() {
            context.trigger('list:item:selected');

            this.$task.toggleClass('selected');
            this.$icon.toggleClass('ic_blank').toggleClass('ic_check');
            this.$indicator.toggleClass('hide');

            if (this.$task.hasClass('selected')) {
                this.$inputs.append(this.$input);
            } else {
                this.$inputs.empty();
            }
        },

        deselect: function() {
            this.$task.removeClass('selected removal');
            this.$indicator.addClass('hide');
            this.$inputs.empty();
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
