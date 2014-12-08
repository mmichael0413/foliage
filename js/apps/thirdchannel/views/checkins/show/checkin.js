define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        FormView = require('thirdchannel/views/checkins/show/form'),
        FormValidate = require('thirdchannel/views/utils/validation'),
        FileView = require('thirdchannel/views/s3uploader/file'),
        ImageView = require('thirdchannel/views/s3uploader/image');

    return Backbone.View.extend({
        el: ".checkin",
        events: {
            "click .checkin-form-btn" : "validateForm"
        },
        initialize: function (options) {
            this.options = options;
        },
        render: function (options) {
            var self = this;
            this.formView = new FormView(this.options).render().$el;
            this.formValidation = new FormValidate({errorPlacementClass: '.question'}).render(this.formView);
            this.$el.find('.body.images').each(function(){
                new FileView().render(this);
            });
            this.setupImages();

            return this;
        },
        setupImages: function() {
            var images = JSON.parse(window.localStorage.getItem('checkinImages')) || {};
            for (var key in images) {
                var imageSet = images[key];
                var $elem = this.$el.find('[data-input='+ key +'] .viewer');
                if ($elem.length) {
                    for (var image in imageSet) {
                        $elem.append(new ImageView({model: new Backbone.Model($.extend(imageSet[image], {input: key}))}).render().$el);
                    }
                }
            }
        },
        validateForm: function() {
            if (this.formValidation.valid()) {
                this.$el.find(".checkin-form-btn").prop('disabled', true);
                this.$el.find(".checkin-form-btn i").removeClass('ic ic_check').addClass("fa fa-spin fa-spinner");
                window.localStorage.removeItem('checkinImages');
                this.formView.submit();
            } else {
                $('.content-holder').animate({
                    scrollTop: this.$('div.error:first')[0].offsetTop
                }, 500);
            }
        }
    });
});