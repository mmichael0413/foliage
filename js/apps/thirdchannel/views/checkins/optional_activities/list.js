define(function(require) {
    var View = require('thirdchannel/views/checkins/optional_activities/tasks'),
        Search = require('thirdchannel/views/shared/search');

    return {
        init: function () {
            new View({collection: window.bootstrap}).render();
            new Search().render();
        }
    };
});
