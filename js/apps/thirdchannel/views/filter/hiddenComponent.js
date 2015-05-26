define(function (require) {
    var context = require('context');

    /**
     * A variation of the standard Filter Component for handling explicit dates
     * 
     * @exports thirdchannel/views/filter/dateComponent
     */
    var HiddenComponent = require('thirdchannel/views/filter/component').extend({
            templateName: 'thirdchannel/filters/hidden_component'
    });

    return HiddenComponent;
});