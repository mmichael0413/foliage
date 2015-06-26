define(function (require) {
    var Backbone = require('backbone'),

        VisitGroupModel = Backbone.Model.extend({
            parse: function(data) {

                return data;
            }
        });
    return VisitGroupModel;
});