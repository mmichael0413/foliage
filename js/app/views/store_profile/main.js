define(function (require) {
    var context = require('context'),
        _ = require('underscore'),
        PersonnelView = require('app/views/store_profile/personnel');

    /**
     * The main entry point for loading the JS needed for the store profile page
     *
     * 
     * @exports app/views/store_profile/main
     */
    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
            new PersonnelView().render();
        }
    };
    return main;
});