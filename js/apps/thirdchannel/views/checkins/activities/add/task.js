define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/activities/add/task'],
        inputTemplate: Templates['thirdchannel/checkins/activities/add/input'],

        events: {
            'click' : 'select'
        },

        initialize: function () {
            this.listenTo(context, 'list:search:update', this.search);
        },

        render: function() {
            this.$input = this.inputTemplate(this.model);
            this.$el.html(this.template(this.model));
            this.$task = this.$('.task');
            this.metadata = this.$task.data('search').toLowerCase();
            this.$icon = this.$('> div i');
            this.$inputs = this.$('.inputs');
            return this;
        },

        select: function() {
            this.$task.toggleClass('selected');
            this.$icon.toggleClass('ic_blank').toggleClass('ic_check');

            if (this.$task.hasClass('selected')) {
                this.$inputs.append(this.$input);
            } else {
                this.$inputs.empty();
            }
        },

        search: function(result) {
            if (this.metadata.indexOf(result.toLowerCase()) >= 0) {
                this.$el.removeClass('hide');
            } else {
                this.$el.addClass('hide');
            }
        }
    });
});
