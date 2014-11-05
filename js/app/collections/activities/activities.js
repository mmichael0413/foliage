define(function (require) {
    var InfiniteCollection = require('app/collections/shared/infinite'),
        Activity = require('app/models/activities/activity');

    return InfiniteCollection.extend({
        model: Activity
    });

});