define(function(require) {
    var $ = require('jquery'),
        PaginatorView = require('thirdchannel/views/utils/paginator');

    return PaginatorView.extend({
        applyPageChange: function(e){
            e.preventDefault();
            e.stopPropagation();
            //var container = this.$el.parent().attr('class');
            var page = $.trim($(e.currentTarget).text());
            var qs = "page=" + page;

            this.trigger('new_page', qs);
            this.render(qs);

        }
    });
});