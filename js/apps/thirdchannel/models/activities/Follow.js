define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (attributes, options) {
            this.programId = options.programId;
            this.following = options.following;
        },
        url: function () {
            if (this.following) {
                return '/programs/' + this.programId + '/activities/' + this.id + '/unfollow';
            } else {
                return '/programs/' + this.programId + '/activities/' + this.id + '/follow';
            }
        }
    });

});