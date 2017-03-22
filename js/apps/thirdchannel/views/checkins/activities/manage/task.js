define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/activities/manage/task'],
        inputTemplate: Templates['thirdchannel/checkins/activities/manage/input'],

        events: {
            'click' : 'select'
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
            this.$task.toggleClass('selected').toggleClass('removal');
            this.$icon.toggleClass('ic_blank').toggleClass('ic_x');

            if (this.$task.hasClass('selected')) {
                this.$inputs.append(this.$input);
            } else {
                this.$inputs.empty();
            }
        }
    });
});
