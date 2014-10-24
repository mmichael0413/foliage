define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        FormView = require('app/views/checkins/show/form'),
        jqueryValidate = require('jquery-validate'),
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
            this.validator = this.formView.validate({
                ignore: [],
                errorPlacement: function (error, element) {},
                highlight: function (element, errorClass, validClass) {
                    var validator = this;
                    var input = self.formView.find(element),
                        id = input.data('error-for');

                    if (id !== undefined) {
                        input = self.$el.find(id);
                        self.listenToOnce(context, 'hidden:update', function() { validator.element(element); });
                    } else {
                        input = input.closest('.question');
                    }

                    input.addClass(errorClass).removeClass(validClass);
                },
                unhighlight: function (element, errorClass, validClass) {
                    var input = self.formView.find(element),
                        id = input.data('error-for');

                    if (id !== undefined) {
                        input = self.$el.find(id);
                    } else {
                        input = input.closest('.question');
                    }

                    input.removeClass(errorClass).addClass(validClass);
                }
            });

            this.$el.find('.body.images').each(function(){
                new UploaderView().render(this);
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