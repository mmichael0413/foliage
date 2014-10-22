define(function(require) {
    var Backbone = require('backbone'),
        FormView = require('app/views/checkins/show/form'),
        jqueryValidate = require('jquery-validate'),
        s3UploaderView = require('app/views/s3uploader/file');

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

            this.$el.find('.s3_uploader').each(function(){
                new s3UploaderView().render(this);
            });

            this.formView = new FormView(this.options).render().$el;
            this.formView.validate({
                ignore: [],
                highlight: function (element, errorClass, validClass) {
                    self.formView.find(element).closest('.question').addClass(errorClass).removeClass(validClass);
                },
                unhighlight: function (element, errorClass, validClass) {
                    self.formView.find(element).closest('.question').removeClass(errorClass).addClass(validClass);
                }
            });

            return this;
        },
        validateForm: function() {
            if (this.formView.valid()) {
                this.formView.submit();
            }
        }
    });
});