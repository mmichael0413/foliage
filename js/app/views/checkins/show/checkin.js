define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        FormView = require('app/views/checkins/show/form'),
        FormValidate = require('app/views/utils/validation'),
        UploaderView = require('app/views/s3uploader/file');

    return Backbone.View.extend({
        el: ".checkin",
        events: {
            "click .checkin-form-btn" : "validateForm"
        },
        initialize: function (options) {
            this.options = options;
            this.listenTo(context, 'file:added', this.addImage);
        },
        render: function (options) {
            var self = this;
            this.formView = new FormView(this.options).render().$el;
            this.formValidation = new FormValidate({errorPlacementClass: '.question'}).render(this.formView);
            this.$el.find('.body.images').each(function(){
                new UploaderView().render(this);
            });

            return this;
        },
        validateForm: function() {
            if (this.formValidation.valid()) {
                this.formView.submit();
            }
        }
    });
});