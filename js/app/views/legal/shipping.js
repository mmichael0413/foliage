define(function (require) {
    var $ = require('jquery'),
        jqueryValidate = require('jquery-validate');

    return {
        init: function () {
            $('.user-form').validate({
                ignore: [],
                errorPlacement: function (error, element) {
                    if (element.is(":radio")) {
                        error.appendTo(element.parent().parent().find('p'));
                    }
                    error.addClass('control-label');
                },
                rules: {
                    'user[payment_address_attributes][state]': {
                        required: true
                    },
                    'user[address_attributes][state]': {
                        required: true
                    },
                    'user[shirt_size]': {
                        required: true
                    },
                    'user[shoe_size]': {
                        required: true
                    }
                }
            });
        }
    }
});