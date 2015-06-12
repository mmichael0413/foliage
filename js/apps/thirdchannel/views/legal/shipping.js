define(function (require) {
    var $ = require('jquery'),
        jqueryValidate = require('jquery-validate');

    return {
        init: function () {
            $('.user-form').validate({
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
                    'user[shipping_address_attributes][street_1]': {
                        required: '#different_shipping_address:checked'
                    },
                    'user[shipping_address_attributes][city]': {
                        required: '#different_shipping_address:checked'
                    },
                    'user[shipping_address_attributes][state]': {
                        required: '#different_shipping_address:checked'
                    },
                    'user[shipping_address_attributes][zip]': {
                        required: '#different_shipping_address:checked'
                    },
                    'user[shirt_size]': {
                        required: true
                    },
                    'user[shoe_size]': {
                        required: true
                    }
                }
            });

            var $shippingAddressFields = $('#shipping-address-fields');

            $('#different_shipping_address').on('click', function(e) {
                if($(this).is(':checked')) {
                    $shippingAddressFields.removeClass('hide');
                    $('#user_shipping_address_attributes__destroy').val(false);
                } else {
                    $shippingAddressFields.addClass('hide');
                    if($('#user_shipping_address_attributes_id').val().length) {
                        $('#user_shipping_address_attributes__destroy').val(true);
                    } else {
                        $shippingAddressFields.find(':input').val('');
                    }
                }
            });
        }
    };
});