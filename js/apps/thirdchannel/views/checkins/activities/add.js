define(function(require) {
    var View = require('thirdchannel/views/checkins/activities/add/jobs'),
        Search = require('thirdchannel/views/checkins/activities/add/search'),
        DisableButtons = require('thirdchannel/views/shared/submit_button_disabled');

    return {
        init: function () {
            new View({collection: window.bootstrap}).render();
            new Search().render();
            new DisableButtons().render();
        }
    };
});
