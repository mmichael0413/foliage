define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/percent_icon'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            this.setElement(this.template(this.model));
            return this;
        }
    });
    return view;
});
