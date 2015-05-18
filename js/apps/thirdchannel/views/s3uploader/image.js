define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/s3uploader/image'],
        events: {
            "blur input": 'updated',
            "change select": 'updated',
            "click button": 'deleted'
        },
        initialize: function() {
          if(this.model.get('input') === '#before_images') {
              this.template = HandlebarsTemplates['thirdchannel/s3uploader/image_group']
          } else if(this.model.get('input') === '#after_images') {
              this.template = HandlebarsTemplates['thirdchannel/s3uploader/image_group_select']
          }
        },
        render: function ($element) {
            if ($element !== undefined) {
                this.setElement($element);
            } else {
                this.$el.html(this.template(this.model.toJSON()));
            }

            this.model.set({uuid:  Math.random().toString(36).substring(7), id: this.$el.data('id'), label: this.$('.description input').val()});
            context.trigger('image:added', this.model);
            return this;
        },
        updated: function (e) {
            this.model.set(e.target.name, e.target.value);
            context.trigger('image:updated', this.model);
        },
        deleted: function (e) {
            context.trigger('image:deleted', this.model);
            this.remove();
        }
    });
});