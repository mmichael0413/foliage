define(function(require) {
    var View = require('thirdchannel/views/checkins/activities/add/tasks'),
        Search = require('thirdchannel/views/shared/search'),
        DisableButtons = require('thirdchannel/views/shared/submit_button_disabled');

    return {
        init: function () {
            new View({collection: window.bootstrap.activities, model: window.bootstrap.job}).render();
            new Search().render();
            new DisableButtons().render();
        }
    };
});
