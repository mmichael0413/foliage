define(function(require) {

    /**
        A variation on the regular Component, which allows for 
        only one answer to be selected. If an answer is part of the active filter,
        this view will not allow another


        It's up to the filtercontrol to determine which Component type to create,
        but it should currently be based on the param passed to the view, based on the 
        type of param and wheter or not it supports multiples. E.g., in Rails, a form
        parameter that ends with '[]', like 'state[]' indicates that multiple answers 
        are supported. A regular Component would be used there
        
        @exports app/views/filter/singleAnswerComponent

    **/
    var SingleAnswerComponent = require('app/views/filter/component').extend({
        
        /**
         * Overrides the parent _addFilter. Only passes through if there's not
         * an active filter item present
         * 
         * @param {JQuery} $link
         */
        _addFilter: function ($link) {
            // count the number of active filters
            var $activeFilters = this.$el.find('.active-filter');
            if ($activeFilters.length === 0) {
                //proceed!
                SingleAnswerComponent.__super__._addFilter.call(this, $link);
                //this.$el.find('.filter-list').hide();    
                this.toggleOpen();
            }
        }
    });

    //return require('app/views/filter/component').extend(singleAnswerComponent);
    return SingleAnswerComponent;
});