define(function(require) {
    var context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates');
    return Backbone.View.extend({
        template: 'thirdchannel/manage/jobs/job_requests/list_item',
        render: function(){
            this.$el.html(handlebarsTemplates[this.template](this.model));
            return this;
        }
    });
});
