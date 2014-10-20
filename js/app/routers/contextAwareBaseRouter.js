define(function(require) {
    var Backbone = require('backbone'),
        context = require('context');

    /**
     * A base router that can be extended to provide before or after filtering effects
     *
     * 
     * @exports 'app/routers/contextAwareBaseRouter'
     */
    var ContextAwareBaseRouter = {
        before: function () {},
        after: function () {},

        route: function(route, name, callback) {
            var self = this;
            return Backbone.Router.prototype.route.call(this, route, name, function() {
                //this.trigger.apply(this, ['beforeroute:' + name].concat(_.toArray(arguments)));
                self.before(arguments);
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