define(function (require) {
    var Backbone = require('backbone');

    return Backbone.View.extend({
        el: '.content',

        events: {
            "click a.download-link" :'disableLink'
        },

        disableLink: function (e) {
            e.stopPropagation();

           // $(e.currentTarget).removeAttr('href');
            $(e.currentTarget).parent().html("<i class='fa fa-spin fa-spinner'></i> The agent list is being prepared and will download shortly.");
        }
    });
});