define(function(require) {
    var Backbone = require('backbone'),
        dispatcher = require('app/utils/eventListener');

    return Backbone.View.extend({
        el: '.pagination-holder',

        events: {
            'click .page': 'applyPageChange'
        },

        initialize: function (data) {
            // allow setting of url via the data object... or could simply set it on a subclass
            this.url = data.url;
            this.listenTo(dispatcher, 'filter:query', this.render);
        },

        render: function (qs) {
            var self = this;
            self.$el.html("<i class='fa fa-spin fa-spinner'></i>");
            $.ajax({
                url: self.url + "?" + qs
            })
            .done(function (html) {
                self.$el.html(html);
            });
        },

        applyPageChange: function (e) {
            e.preventDefault();
            var page = $.trim($(e.currentTarget).text());
            dispatcher.trigger('filter:set', [{name: 'page', value:page}]);
        }
    });
});