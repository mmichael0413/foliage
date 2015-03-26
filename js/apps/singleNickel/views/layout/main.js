define(function(require) {
    var OrigMainLayout = require('shared/views/layout/main'),
        ErrorView = require('singleNickel/views/errors/main');

    return  {
        init: function () {
            OrigMainLayout.init();
            new ErrorView();
        }
    };
});