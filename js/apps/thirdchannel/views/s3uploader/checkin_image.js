define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/s3uploader/checkin_image'],
        events: {
            "blur input": 'updated',
            "click button": 'deleted'
        },
        initialize: function() {
            switch(this.model.get('image_type')) {
                case 'before':
                    this.template = HandlebarsTemplates['thirdchannel/s3uploader/checkin_image_group'];
                    break;
                case 'after':
                    this.template = HandlebarsTemplates['thirdchannel/s3uploader/checkin_image_group_select'];
                    break;
            }
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        updated: function(e) {
            /*
            this.model.set({label: e.target.value});
            context.trigger('image:updated', this.model);
            */
        },
        deleted: function(e) {
            context.trigger('image:deleted', this.model);
            this.remove();
        }
    });
});