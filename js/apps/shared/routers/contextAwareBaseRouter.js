define(function(require) {
    var Backbone = require('backbone'),
        context = require('context');

    /**
     * A base router that can be extended to provide before or after filtering effects.
     * In addition, sets the request parameters as a list on the global context
     * 
     * @exports thirdchannel/routers/contextAwareBaseRouter
     */
    var ContextAwareBaseRouter = {
        /**
         * A no-op intended to be overridden by sub-classed routers. This function will be called before the route action is 
         * executed.
         * 
         */
        before: function () {},

        /**
         * A no-op intended to be overridden by sub-classed routers. This function will be called AFTER the route action is 
         * executed
         * 
         */
        after: function () {},


        route: function(route, name, callback) {
            var self = this;
            return Backbone.Router.prototype.route.call(this, route, name, function() {
                // before hook
                self.before(arguments, route, name);
                // set the 
                context.requestParameters = arguments;
                if (callback) {
                    callback.apply(this, arguments);    
                } else {
                    self[name].apply(this, arguments);
                }
                self.after(arguments);
            });
        }
    };

    return Backbone.Router.extend(ContextAwareBaseRouter);
});