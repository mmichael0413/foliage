define(function (require) {
    /**
     * View for a program's opportunity page.
     * -    The contains the registration form and the scroll to animate hash util
     *
     * @exports thirdchannel/views/opportunities/main
     */

    require('jquery-validate');

    var ValidateRegistration = require('thirdchannel/views/shared/validate_registration'),
        anchorTransition = require('thirdchannel/views/utils/anchor_transition'),
        sb = require('slidebars'),
        $ = require('jquery'),
        context = require('context');

    return ValidateRegistration.extend({
        initialize: function () {
            anchorTransition(-65, 1000);
            $.slidebars();
            this.validateRegistrationForm();
        }
    });

});