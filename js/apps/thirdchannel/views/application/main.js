define(function (require) {
    require('expanding');


    var Backbone = require('backbone'),
        context = require('context'),
        template = require('handlebarsTemplates'),
        SerializeObject = require('serializeObject');

    return Backbone.View.extend({
        el: '.content',
        template: template['thirdchannel/applications/thumbnail'],
        initialize: function (options) {
            this.applicationId = options.applicationId;
            this.$('textarea').expanding();

            this.beginValidation();

        },

        events: {
            'click .save' : 'save'
        },

        beginValidation: function () {

            $.validator.addMethod("validInstagramHandle", function(value, element){
                var valid = true,
                    handle = self.$("input[name*='instagram_handle']").val(),
                    regex = /^@[a-zA-Z0-9\.\-_]{0,28}$/;

                if(handle.length > 0) {
                    valid = regex.exec(handle);
                }

                return valid;
            }, "Invalid instagram handle.");

            $('.application-form').validate({
                rules: {
                    "program_application[instagram_handle]": {
                        validInstagramHandle: true
                    }
                },

                errorPlacement: function (error, element) {
                    $(error).addClass('clear');
                    if ($(element).attr('type') == 'checkbox' || $(element).attr('type') == 'radio') {
                        $(element).closest('.input-group').after(error);
                    } else {
                        $(element).after(error);
                    }
                }
            });
        },

        save: function (e) {
            if(confirm('Are you sure you want to continue?')) {
                // serialize form and post to the save action
                var $applicationForm = $('.application-form');
                var saveUrl = $applicationForm.attr('action') + '/save';
                var formData = $applicationForm.serializeObject();
                formData.id = this.applicationId;

                //
                $.ajax({
                    type: "POST",
                    url: saveUrl,
                    data: formData,
                    async: false
                });

                window.location = '/agents/opportunities';
            }
        }
    });
});