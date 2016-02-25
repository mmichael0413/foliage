define(function (require) {
    var Backbone = require('backbone');


    return Backbone.View.extend({
        el: '.alert',

        events: {
            "click .close-alert" : "closeAlertBox"
        },

        closeAlertBox: function (e) {
            e.stopPropagation();
            e.preventDefault();

            this.remove();
        }
    });
});
