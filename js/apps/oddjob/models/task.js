define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            payable: true,
            billable: true
        }
    });
});