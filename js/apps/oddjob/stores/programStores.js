define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),

        ProgramStoresStore = function () {
            return new (Backbone.Collection.extend({
                defaultLimit: 25,
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
                    this.queryString = this._convertQueryString(qs);
                    this.fetch();

                },
                // spring boot is not happy with how our filter builds the query string, I don't believe at least
                _convertQueryString: function (qs) {
                    var params = this._convertQS(qs);
                    qs = this._convertPageToOffset(params, qs);
                    qs = this._convertStates(params, qs);
                    qs = this._convertAccounts(params, qs);
                    return qs;
                },
                // given a query string, looks for the page parameter, then uses that and the limit to add an offset parameter
                _convertPageToOffset: function (params, qs) {
                    if (!params.limit) {
                        params.limit = this.defaultLimit;
                    }
                    qs += "&offset=" + (params.limit * (params.page-1));
                    return qs;
                },

                _convertStates: function(params, qs) {
                    return this._convertIndividualParam("states", "state[]", params, qs);
                },
                _convertAccounts: function(params, qs) {
                    return this._convertIndividualParam("accountIds", 'customer_account[]', params, qs);
                },

                _convertQS: function (qs) {
                    var pairs = qs.split('&'),
                        data = {};
                    pairs.forEach(function(pair) {
                        var r = pair.split('='),
                            key = decodeURIComponent(r[0]) || 'unknown',
                            value = decodeURIComponent(r[1]) || '';
                        if (data.hasOwnProperty(key)) {
                            data[key] = [data[key]];
                            data[key].push(value);
                        } else {
                            data[key] = value;
                        }
                    });
                    return data;
                },

                _convertIndividualParam: function (goodKey, originalKey, params, qs) {
                    var result = "";
                    if (params.hasOwnProperty(originalKey)) {
                        if (typeof params[originalKey] === "string") {
                            result = params[originalKey];
                        } else {
                            result =params[originalKey].join(','); 
                        }
                        qs += ("&" +goodKey +"=" + result);
                    }
                    return qs;
                }
            }))();
    };
    return ProgramStoresStore();



});