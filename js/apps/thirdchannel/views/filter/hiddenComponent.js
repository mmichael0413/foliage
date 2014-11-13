define(function (require) {
    var context = require('context');

    /**
     * A variation of the standard Filter Component for handling explicit dates
     * 
     * @exports app/views/filter/dateComponent
     */
    var HiddenComponent = require('app/views/filter/component').extend({

            templateName: 'filters/hidden_component',
    });

    return HiddenComponent;
});