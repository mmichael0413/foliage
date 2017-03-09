define(function(require) {
    var CreateView = require('thirdchannel/views/manage/jobs/create');

    return {
        create: function() {
            // grab selected store list from context (or where ever they're stored)
            // fetch demo/event survey (uuid, name)
            // fetch survey topics (uuid, name)
            new CreateView();
        }
    };
});