define(function (require) {
    var $ = require('jquery');
    /**
     * Scrolls from an a tag to the element with the id of the #hash
     * @exports thirdchannel/views/utils/anchor_transition
     */
    return function(offset, time) {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top  + offset
                    }, time);
                    return false;
                }
            }
        });
    };
});

