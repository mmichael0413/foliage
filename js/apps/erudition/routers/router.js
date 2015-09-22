define(function(require){
    var Backbone = require('backbone');

    return Backbone.Router.extend({
        initialize: function(){
            console.info('init');
            return this;
        },

        routes: {
            'home' : 'homePage'
        },

        homePage: function() {
            console.info('home page');
        }
    });
});
