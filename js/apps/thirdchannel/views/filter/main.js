define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        FilterParams = require('shared/models/filterParams'),
        FilterControl = require('thirdchannel/views/filter/filterControl');
    
    /**
     *  The main entry point for working with the Filters.
     * 
     * @exports thirdchannel/views/filter/main
     */
    var FiltersModule = {
        /**
         * Initializes the Filter
         *
         * If no filter collection is passed in, will attempt to look for 
         * 'window.filterBootstrap'
         * 
         * @param  {FilterCollection} collection A Backbone collection containing a url to retrieve filters
         * 
         */
        init: function (collection, url) {

            // possible states:
            // collection ->
            // window.filterBootstrap -> can contain a list of filters, plus a url for additional filters to load async
            // 

            if (!collection && window.filterBootstrap) {
                collection = new Backbone.Collection(window.filterBootstrap.filters);
                url = window.filterBootstrap.filters_url;
            }

            // model for keeping track of the current params set
            if(!context.filterParams) {
                context.filterParams = new FilterParams();
            }
            
            return new FilterControl({collection: collection, model: context.filterParams, url: url});
        }
    };

    return FiltersModule;

});