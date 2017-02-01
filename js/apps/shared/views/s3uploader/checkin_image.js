define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['shared/s3uploader/checkin_image'],
        events: {
            "blur input": 'updated',
            'change select': 'updated',
            "click .delete-image-btn": 'deleted'
        },
        initialize: function() {
            if(this.model.get('image_type') === 'after') {
                this.template = HandlebarsTemplates['shared/s3uploader/checkin_image_group_select'];

                // We want to update the available group label selections for after images based on the before images
                // ... not the best of solutions, but should change with checkin re-arch!...
                this.listenTo(this.model.beforeImages, 'change:label', this.renderOptions);
                this.listenTo(this.model.beforeImages, 'change:label', this.maybeUpdateGroupLabel);
                this.listenTo(this.model.beforeImages, 'remove', this.renderOptions);
                this.listenTo(this.model.beforeImages, 'remove', this.maybeUpdateGroupLabel);
            }
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        renderOptions: function() {
            if(this.model.get('image_type') === 'after') {
                var $groupLabel = this.$('.image_label');

                var attrs = {
                    labels: this.model.beforeImages.map(function(i) { return i.get('label'); })
                };

                $groupLabel.html(HandlebarsTemplates['shared/s3uploader/checkin_group_label_options'](attrs));
                $groupLabel.find('[value="' + this.model.get('label') + '"]').attr({'selected': 'selected'});

                this.$('select').chosen({disable_search: true, width: "100%"});
                $groupLabel.trigger('chosen:updated');
            }
        },
        maybeUpdateGroupLabel: function() {
            var labels = this.model.beforeImages.map(function(i) { return i.get('label'); });

            // clear the group label if the before image group label doesn't exist anymore...
            if(!_.contains(labels, this.model.get('label'))) {
                this.model.save({label: ''}, {patch: true});
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
                // ...
                if(self.model.get('image_type') === 'before') {
                    self.model.beforeImages.remove(self.model);
                }
                self.remove();
            });
        }
    });
});