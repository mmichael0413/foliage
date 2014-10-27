define(function(require) {
    var Backbone = require('backbone'),
        Chosen = require('chosen'),
        Expanding = require('libs/expanding');

    return Backbone.View.extend({
        el: '.store-intel',
        initialize: function (options) {
        },
        render :function () {
            this.$el.find('select').chosen({disable_search: true, width: "100%"});
            this.$el.find('textarea:visible').expanding();
            return this;
        }
    });
});