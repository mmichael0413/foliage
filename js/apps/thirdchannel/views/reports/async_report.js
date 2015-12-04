define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),

        /**
         * Acts as a mechanism for loading report widgets asynchronously. Requires as input a json object containing
         * the report breakdown, eg.:
         *     report
         *         -> sections -> subsections -> widgets
         *  at each level, we expect a 'uuid' field. 
         *
         * This view must be passed the report_data as an initialization parameter
         * 
         * @type View
         */
        AsyncReportLoader = {

            initialize: function (report_data) {
                if (!report_data) {
                    console.error("No report data provided!");
                }
                console.log(report_data);
            },

            layout: function () {

            },

            loadWidgets: function (filter) {
                
            }
        };



    return Backbone.View.extend(AsyncReportLoader);
});