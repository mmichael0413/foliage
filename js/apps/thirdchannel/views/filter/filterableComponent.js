define(function (require) {
    var context = require('context');

    /**
     * A variation of the standard Filter Component for handling explicit dates
     *
     * @exports thirdchannel/views/filter/dateComponent
     */
    var FilterableComponent = require('thirdchannel/views/filter/component').extend({
        templateName: 'thirdchannel/filters/filterable_component',

        handleFilterItems: function() {
            console.log('Filtering Items');
        }
    });

    return FilterableComponent;
});