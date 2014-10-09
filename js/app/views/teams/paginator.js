define(function(require) {
    var Backbone = require('backbone'),
        dispatcher = require('app/utils/eventListener');

    return Backbone.View.extend({
        el: '.pagination-holder',

        events: {
            'click .page': 'applyPageChange'
        },

        initialize: function (data) {
            this.listenTo(dispatcher, 'filter:query', this.render);
        },

        render: function (qs) {
            var self = this;
            self.$el.html("<i class='fa fa-spin fa-spinner'></i>");
            $.ajax({
                url: "teams/pagination?" + qs
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