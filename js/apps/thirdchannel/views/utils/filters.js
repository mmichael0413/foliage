define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        FilterControlView = require('thirdchannel/views/filter/filterControl');

    return Backbone.View.extend({
        el: '#site-filter',
        template: HandlebarsTemplates.filters,
        initialize: function (options) {
            this.filters = options.filters;
        },
        render: function () {
            this.$el.append(this.template(this.filters));
            new FilterControlView();
            context.trigger('filter:request:queryString');
            return this;
        }
    });
});