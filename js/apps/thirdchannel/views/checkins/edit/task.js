define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/edit/task'],

        events: {
            'click' : 'start'
        },

        render: function() {
            this.$el.html(this.template(this.model));
            this.$indicator = this.$('.indicator i');
            return this;
        },

        start: function(e) {
            context.trigger('list:activity:started');
            window.location.href = this.model.submission.url;
        }
    });
});
