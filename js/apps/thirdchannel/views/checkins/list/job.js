define(function(require){
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        events: {
            'click': 'startJob'
        },

        template: Templates['thirdchannel/checkins/list/job'],

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },

        startJob: function (e) {
            e.preventDefault();
            if (!this.inprogress) {
                this.inprogress = true;
                this.$('form').submit();
            }
        }
    });
});
