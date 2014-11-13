define(["underscore", "backbone"], function (_, Backbone) {
    /**
     * The central, shared context of the app. Acts as:
     * <ul>
     *     <li>The central event bus</li>
     *     <li>Central shared place to cache variables (e.g. the current program id)
     * </ul>
     *
     * 
     * @exports thirdchannel/utils/context
     */
    var data = function () {
        var container = {
        };
        _.extend(container, Backbone.Events);
        return container;
    };
    return data();
});