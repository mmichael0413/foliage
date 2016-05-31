define(function(require) {
    var context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates');
    return Backbone.View.extend({
        template: 'thirdchannel/scheduled_visits/scheduled_visit',
        render: function(){
            this.$el.html(handlebarsTemplates[this.template](this.model));
            return this;
        }
    });
});
