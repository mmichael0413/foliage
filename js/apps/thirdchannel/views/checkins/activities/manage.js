define(function(require) {
    var View = require('thirdchannel/views/checkins/activities/manage/jobs');

    return {
        init: function () {
            new View({collection: window.bootstrap}).render();
        }
    };
});
