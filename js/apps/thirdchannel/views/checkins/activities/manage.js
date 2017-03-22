define(function(require) {
    var View = require('thirdchannel/views/checkins/activities/manage/jobs'),
        DisableButtons = require('thirdchannel/views/shared/submit_button_disabled');

    return {
        init: function () {
            new View({collection: window.bootstrap}).render();
            new DisableButtons().render();
        }
    };
});
