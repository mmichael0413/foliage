define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
        className: 'section data-section',
        initialize: function(options) {
            this.options = options;

            this.loadingView = new LoadingView();
        },
        render: function() {
            var self = this;

            this.$el.html(this.loadingView.render().el);

            //

            return this;
        }
    });
});