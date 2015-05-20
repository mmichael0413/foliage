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

            // We want to update the available group label selections for after images based on the before images
            // ... not the best of solutions, but should change with checkin re-arch!...
            if(this.model.get('image_type') === 'after') {
                this.listenTo(this.model.beforeImages, 'change:group_label', this.renderOptions);
            }
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        renderOptions: function() {
            if(this.model.get('image_type') === 'after') {
                var $groupLabel = this.$('.image_group_label');

                var attrs = {
                    group_labels: this.model.beforeImages.map(function(i) { return i.get('group_label'); })
                };

                $groupLabel.html(HandlebarsTemplates['thirdchannel/s3uploader/checkin_group_label_options'](attrs));
                $groupLabel.find('[value="' + this.model.get('group_label') + '"]').attr({'selected': 'selected'});

                this.$('select').chosen({disable_search: true, width: "100%"});
                $groupLabel.trigger('chosen:updated');
            }
        },
        updated: function(e) {
            var attrs = {},
                attr = e.target.getAttribute('data-attribute');
            attrs[attr] = e.target.value;
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