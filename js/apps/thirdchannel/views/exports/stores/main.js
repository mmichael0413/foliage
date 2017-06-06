define(function(require) {
    var View = require('thirdchannel/views/exports/button'),
        Model = require('thirdchannel/models/exports/stores');

    return View.extend({
        el: '.actions',

        initialize: function(options) {
            this.model = new Model();
            this.model.set(options);
        }
    });
});