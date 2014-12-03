define(function(require){

    var $ = require('jquery'),
        sb = require('slidebars'),
        InquiryView = require('marketing/views/inquiries/main'),
        RegistrationView = require('marketing/views/registration/main');

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

            var proxiedSync = Backbone.sync;

            Backbone.sync = function(method, model, options) {
                options || (options = {});

                if (!options.crossDomain) {
                    options.crossDomain = true;
                }

                if (!options.xhrFields) {
                    options.xhrFields = {withCredentials:true};
                }

                return proxiedSync(method, model, options);
            };

            if($('#request-demo')) {
                new InquiryView();
            }

            if($('#for-applicants-page')) {
                $('.marketing-form').each(function() {
                    new RegistrationView({el: this});
                });
            }

            $.slidebars();
        }
    };
});