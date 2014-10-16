define(function(require) {
    var Backbone = require('backbone'),
        PaginatorView = require('app/views/utils/paginator'),
        dispatcher = require('app/utils/eventListener');

    return PaginatorView.extend({
        applyPageChange: function(e){
            e.preventDefault();
            e.stopPropagation();
            var container = this.$el.parent().attr('class');
            var page = $.trim($(e.currentTarget).text());
            var qs = "page=" + page;

            this.trigger('new_page', qs);
            this.render(qs);

        }
    });
});