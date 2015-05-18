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
        initialize: function(options) {
            this.options = options;
        },
        render: function() {
            this.formView = new FormView(this.options).render().$el;
            this.formValidation = new FormValidate({errorPlacementClass: '.question'}).render(this.formView);
            this.isLocalStorageSupported();
            this.savedImages = JSON.parse(window.localStorage.getItem('checkinImages_' + this.options.checkinId)) || {};

            this.$('.body.images').each(function() {
                new FileView().render(this);
            });
            this.setupImages();

            return this;
        },
        isLocalStorageSupported: function () {
            var testKey = 'test', storage = window.sessionStorage;
            try {
                storage.setItem(testKey, '1');
                storage.removeItem(testKey);
            }
            catch (error) {
                alert("We currently don't support private/incognito windows.  Please reopen the checkin using a normal window for your browser.");
            }
        },
        setupImages: function() {
            for (var key in this.savedImages) {
                var imageSet = this.savedImages[key];
                var $elem = this.$('[data-input='+ key +'] .viewer');
                if ($elem.length) {
                    for (var image in imageSet) {
                        if (!_.has(imageSet[image], 'id')) {
                            $elem.append(new ImageView({model: new Backbone.Model($.extend(imageSet[image], {input: key}))}).render().$el);
                        }
                    }
                }
            }
        },
        validateForm: function() {
            if (this.formValidation.valid()) {
                this.$(".checkin-form-btn").prop('disabled', true);
                this.$(".checkin-form-btn i").removeClass('ic ic_check').addClass("fa fa-spin fa-spinner");
                window.localStorage.removeItem('checkinImages_' + this.options.checkinId);
                this.formView.submit();
            } else {
                $('.content-holder').animate({
                    scrollTop: this.$('div.error:first')[0].offsetTop
                }, 500);
            }
        }
    });
});