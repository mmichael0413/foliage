define(function(require){

    var $ = require('jquery')

    return {
        initialize: function () {
            $('.full-section-controls > a').on('click', function(e) {
                e.preventDefault();
                var $el = $(this);
                var $parent = $el.parent().parent();
                var $next = $parent.next('.full-section');

                $('body').animate({
                    scrollTop: $next.offset().top - 68
                }, 1000);
            });
        }
    };
});