define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        url: function () {
            var date = this.get('date')
            if(date === undefined) {
                date = this.get('begin');
            }
            return '/programs/' + context.programId + '/stores/' + this.get('program_store_uuid') + '/sales?date=' + date;
        }
    });
});