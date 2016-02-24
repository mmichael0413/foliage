define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/metric_icon'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            var data = _.clone(this.model);
            if(data.results === data.config.no_data_state) {
              data.results = "No Data";
              data.config.append_count = "";
              data.config.prepend_count = "";
            }
            this.setElement(this.template(data));
            return this;
        }
    });
    return view;
});
