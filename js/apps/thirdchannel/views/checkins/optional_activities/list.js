define(function(require) {
    var View = require('thirdchannel/views/checkins/optional_activities/tasks'),
        Filter = require('thirdchannel/views/filter/main');

    return {
        init: function () {
            new View({collection: window.bootstrap}).render();
            Filter.init();
        }
    };
});
