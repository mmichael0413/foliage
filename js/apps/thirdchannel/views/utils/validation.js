define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        jqueryValidate = require('jquery-validate');

    return Backbone.View.extend({
        events: {
            "blur input[type!=radio]": "saveState",
            "change textarea": "saveState",
            "change input[type=radio]": "saveState",
            "change input[type=hidden]": "validate",
            "change:nosave input[type=hidden]": "validate",
            "change select": "validate"
        },
        initialize: function (options) {
            this.errorPlacementClass = options.errorPlacementClass;
            this.validationRun = false;
        },
        render: function ($element) {
            this.setElement($element);
            var self = this;
            this.validator = this.$el.validate({
                ignore: [],
                errorPlacement: function (error, element) {self.errorPlacement(error, element);},
                success: function(error) {self.validateSuccess(error);},
                highlight: function (element, errorClass, validClass) {self.highlight(element, errorClass, validClass); },
                unhighlight: function (element, errorClass, validClass) {self.unhighlight(element, errorClass, validClass); }
            });
            return this;
        },
        validate: function(e) {
            if (this.validCalled) {
                this.valid();
            }
        },
        valid: function() {
            this.validCalled = true;
            return this.$el.valid();
        },
        errorPlacement: function (error, element) {
            var input = this.$el.find(element),
                id = input.data('error-for');

            if (id !== undefined) {
                input = $(id);
            } else {
                input = input.closest(this.errorPlacementClass);
            }

            if (input.find("label.error").length === 0) {
                input.append(error);
            }
        },
        highlight: function (element, errorClass, validClass) {
            var input = this.$el.find(element),
                id = input.data('error-for');

            if (id !== undefined) {
                input = $(id);
            } else {
                input = input.closest(this.errorPlacementClass);
            }

            input.addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            var input = this.$el.find(element),
                id = input.data('error-for');

            if (id !== undefined) {
                input = $(id);
            } else {
                input = input.closest(this.errorPlacementClass);
            }

            input.removeClass(errorClass).addClass(validClass);
        },
        validateSuccess: function(error) {
            $("#" + error.attr("id")).remove();
        }
    });
});
