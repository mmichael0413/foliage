define(function(require){
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/optional_activities/task'],
        inputTemplate: Templates['thirdchannel/checkins/optional_activities/input'],

        events: {
            'click' : 'select'
        },

        render: function() {
            this.$input = this.inputTemplate(this.model);
            this.$el.html(this.template(this.model));
            this.$task = this.$('.task');
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
        }
    });
});
