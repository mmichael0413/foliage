define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        PageableCollection = require('backbone.paginator'),
        Activity = require('app/models/activities/activity');


    return Backbone.PageableCollection.extend({
        initialize: function (options) {
            this.url = options.url;
            this.currentPage = 0;
        },
        model: Activity,
        state: {
            pageSize: 5,
            sortKey: "updated",
            order: 1
        },

        queryParams: {
            totalPages: null,
            totalRecords: null,
            pageSize: 'rows',
            sortKey: "sort",
            order: "order",
            directions: {
                "-1": "asc",
                "1": "desc"
            }
        }
    });

});