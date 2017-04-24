define(function(require) {
    var Backbone = require('backbone');

    return Backbone.View.extend({
        el: '.content-holder',

        events: {
            "submit form": "disableButtons"
        },

        render: function () {
            return this;
        },

        disableButtons: function(e) {
            this.$('.form-submit').prop('disabled', true).addClass('disabled');
            this.$(".form-submit i").removeClass(function (index, className) {
                return (className.match (/(^|\s)ic_\S+/g) || []).join(' ');
            }).addClass("ic-spin ic_processing");
        }
    });
});
