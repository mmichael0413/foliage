define(function(require){
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/edit/task'],

        events: {
            'click' : 'show'
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },

        show: function(e) {
            window.location.href = this.model.submission.url;
        }
    });
});
