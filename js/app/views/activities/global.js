define([
    'jquery',
    'underscore',
    'backbone',
    'app/utils/eventListener',
    'app/modals/activities/photo-modal',
    'libs/owl.carousel'
], function($, _, Backbone, EventListener, PhotoModal, OwlCarousel){
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