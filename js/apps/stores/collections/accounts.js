define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Account = require('stores/models/account');

    return Backbone.Collection.extend({
        model: Account,
        comparator: 'name',
        url: '/api/accounts'
    });
});