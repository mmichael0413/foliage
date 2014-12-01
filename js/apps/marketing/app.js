define(function(require){

    var $ = require('jquery'),
        sb = require('slidebars'),
        InquiryView = require('marketing/views/inquiries/main');

    return {
        initialize: function () {
            $('.full-section-controls > a').on('click', function(e) {
                e.preventDefault();
                var $el = $(this);
                var $parent = $el.parent().parent();
                var $next = $parent.next('.full-section');

                $('body,html').animate({
                    scrollTop: $next.offset().top - 60
                }, 1000);
            });

            if($('#request-demo')) {
                new InquiryView();
            }

            $.slidebars();
        }
    };
});