define(function (require) {
    var InfiniteCollection = require('thirdchannel/collections/shared/infinite'),
        Activity = require('thirdchannel/models/activities/activity');

    return InfiniteCollection.extend({
        model: Activity,
    });

});