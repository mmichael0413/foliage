define(function(require) {
    var Backbone = require('backbone'),
        context = require('context');

    return Backbone.View.extend({
        initialize: function (options) {
            this.options = options;
        },
        render: function ($element) {
            this.setElement($element);
            this.linkUrl = this.$el.attr('href');
            this.updateUrl(this.options.queryString);
            this.listenTo(context, 'filter:query', this.updateUrl);
            return this;
        },
        updateUrl: function(qs){
            this.linkUrl = this.linkUrl.split("?", 1)[0] + "?" + qs;
            this.$el.attr('href', this.linkUrl);
        }
    });
});
