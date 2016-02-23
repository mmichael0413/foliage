define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        template = require('handlebarsTemplates')['thirdchannel/hoverable_image'],

        /**
         * Provides an image view that has a hover overlay effect
         *
         * @exports thirdchannel/views/shared/hoverable_image
         */
        HoverableImageView = Backbone.View.extend({
            className: 'hoverable-image',
            events: {
                'mouseover': 'mouseOver',
                'mouseout': 'mouseOut',
                'click .overlay': 'openModal'
            },
            render: function () {
                this.$el.addClass(this.model.get('image_type'));
                // tweak the label, show the image type of label is null
                if (!this.model.get('label')) {
                    this.model.set('label', this.model.get('image_type').toUpperCase());
                }
                this.$el.html(template(this.model.toJSON()));
                return this;
            },
            mouseOver: function (e) {
                e.stopPropagation();
                this.$el.addClass('active');
            },
            mouseOut: function (e) {
                e.stopPropagation();
                this.$el.removeClass('active');
            },
            openModal: function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(e.target).parent().find('img').click();
            }
        });

    return HoverableImageView;
});