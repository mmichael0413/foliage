define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/activities/manage/task'],

        events: {
            'click .clickable:not(.removal)' : 'select',
            'click .removal': 'submit'
        },

        initialize: function() {
            _.bindAll(this, 'hide', 'remove');
            this.submission = new (Backbone.Model.extend({urlRoot: window.location.href}))({id: this.model.submission.id});
            this.listenTo(context, 'list:item:selected', this.deselect);
        },

        render: function() {
            this.$el.html(this.template(this.model));
            this.$task = this.$('.task');
            this.$button = this.$('button');
            return this;
        },

        select: function() {
            context.trigger('list:item:selected');
            this.$task.addClass('selected removal');
            this.$button.removeClass('hide');
        },

        deselect: function() {
            this.$task.removeClass('selected removal');
            this.$button.addClass('hide');
        },

        submit: function(e) {
            e.preventDefault();
            this.submission.destroy({success: this.hide});
        },

        hide: function() {
            this.$el.slideUp('fast', this.remove);
        },

        remove: function() {
            Backbone.View.prototype.remove.call(this);
            context.trigger('list:item:removed');
        }
    });
});
