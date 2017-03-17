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

        startJob: function (e) {
            e.preventDefault();
            this.$(".checkin-form-btn").prop('disabled', true);
            this.$(".checkin-form-btn i").removeClass('ic ic_check').addClass("ic ic-spin ic_processing");
            this.$form.submit();
        }
    });
});
