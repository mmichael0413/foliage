define(function(require){
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/edit/task'],

        events: {
            'click' : 'submit'
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },

        submit: function(e) {
            this.$('form').submit();
        }
    });
});
