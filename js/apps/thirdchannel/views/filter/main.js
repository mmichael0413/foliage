define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
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
            
            new FilterControl({collection: collection, url:url});

        }
    };

    return FiltersModule;

});