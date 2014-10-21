define(function(require) {
    var Backbone = require('backbone'),
        FormView = require('app/views/checkins/show/form'),
        jqueryValidate = require('jquery-validate');

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