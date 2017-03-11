define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        url: function () {
            var url = '/programs/' + context.programId + '/manage/jobs';
            if(this.id) {
                url += '/' + this.id;
            }
            return url;
        },
        defaults: {
            duration: 180 // 3 hours will be the default
        }
    });
});