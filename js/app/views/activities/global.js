define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        EventListener = require('app/utils/eventListener'),
        PhotoModal = require('app/modals/activities/photo-modal'),
        OwlCarousel = require('libs/owl.carousel');

    return Backbone.View.extend({
        el: '#site-wrapper',
        initialize: function (options) {
            var self = this;
            this.listenTo(EventListener, 'activity:openModal', function (model) {
                self.openModal(model);
            });
        },
        openModal: function (model) {
            this.modal = new PhotoModal({model: model});
            this.$el.append(this.modal.render().el);
            var f = this.$('.bbm-modal .owl-carousel').owlCarousel();

            return this;
        },
        closeModal: function (e) {
            this.modal.remove();
        }
    });

});