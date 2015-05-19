define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/s3uploader/checkin_image'],
        events: {
            "blur input": 'updated',
            'change select': 'updated',
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
            var attrs = {};
            attrs[e.target.getAttribute('data-attribute')] = e.target.value;
            this.model.save(attrs, {patch: true});
        },
        deleted: function(e) {
            e.preventDefault();
            var self = this;
            this.model.destroy().then(function() {
                self.remove();
            });
        }
    });
});