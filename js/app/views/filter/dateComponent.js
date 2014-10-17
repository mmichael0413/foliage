define(function (require) {
    var dispatcher = require('app/utils/eventListener');

    /**
     * A variation of the standard Filter Component for handling explicit dates
     * 
     * @exports app/views/filter/dateComponent
     */
    var DateComponent = require('app/views/filter/component').extend({

            templateName: 'filters/date_component',
            
            addFilterHandler: function (e) {
                //shut it down!
                e.preventDefault();
                e.stopPropagation();
            },
            handleDateChange: function (e) {
                
                var value = e.currentTarget.value;
                if (value) {
                    this.clear();
                    this._addFilter(value, value);    
                }
                
            },
            handleDateBlur: function (e) {
                this.handleDateChange(e);
                this.toggleOpen();
                dispatcher.trigger('filter:request');
            }
    });

    return DateComponent;
});