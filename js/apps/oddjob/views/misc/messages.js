define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        noty = require('noty'),

        MessagesView = {
            el: '#message',

            initialize: function () {
                //this.alertUser("Test", 'success');
                var message = this.$el.text();
                if (message) {
                    this.alertUser(message, 'success');
                }
            },

            alertUser: function (message, type) {
                noty({
                            layout: 'topCenter',
                            theme: 'relax',
                            text: message,
                            type: type,
                            animation: {
                                open: {height: 'toggle'},
                                close: {height: 'toggle'},
                                easing: 'swing',
                                speed: 500
                            },
                            timeout: 2500
                        });
            }
        };
    return Backbone.View.extend(MessagesView);
});