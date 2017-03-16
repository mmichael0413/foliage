define(function(require){
    var Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        events: {
            'click': 'startJob'
        },

        template: Templates['thirdchannel/checkins/list/job'],

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },

        startJob: function () {
            this.$('form').submit();
        }
    });
});
