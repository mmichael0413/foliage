define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),

        ProgramStoresStore = function () {
            return new (Backbone.Collection.extend({
                initialize: function () {
                    this.listenTo(context, 'filter:query', this.applyFilter);
                    this.queryString = "";
                },
                parse: function (data) {
                    this.count = data.count;
                    this.limit = data.limit;
                    this.offset = data.offset;
                    this.buildPages();
                    return data.programStores;
                },
                // used by the pagination view
                buildPages: function () {
                    this.pages = {
                        totalPages: 0,
                        currentPage: 0,
                        maxShown: 6,
                        pageCount: this.limit,
                        totalCount: this.count
                    };
                    this.pages.totalPages = Math.ceil(this.count / this.limit);
                    this.pages.currentPage = Math.ceil(this.offset / this.limit) + 1;
                },

                url: function () {
                    return context.links.stores +"?" +this.queryString;
                },

                applyFilter: function (qs) {
                    this.queryString = qs + "&offset=" + this._convertPageToOffset(qs);
                    this.fetch();

                },
                // given a query string, looks for the page parameter, then uses that and the limit to add an offset parameter
                _convertPageToOffset: function (qs) {
                    var pairs = qs.split('&'),
                        data = {},
                        offset;
                    pairs.forEach(function(pair) {
                        var r = pair.split('=');
                        data[r[0]] = decodeURIComponent(r[1] || '');
                    });
                    return data.limit * (data.page-1);
                }
            }))();
    };
    return ProgramStoresStore();



});