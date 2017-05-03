define(function(require) {
    var context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/manage/jobs/list_item'],
        tagName: 'tr',
        className: 'scheduled-visit-row',

        render: function() {
            var data = this.model;
            data.duration = data.duration / 60.0;
            this.$el.html(this.template(data));
            return this;
        }
    });
});
