define(function(require) {
    var context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates');
    return Backbone.View.extend({
        template: 'thirdchannel/job_requests/job_request',
        render: function(){
            this.$el.html(handlebarsTemplates[this.template](this.model));
            return this;
        }
    });
});
