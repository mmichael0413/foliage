define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function(models, options){
            this.options = options;
        },
        _prepareModel: function (model, options) {
            return Backbone.Collection.prototype._prepareModel.call(this, _.extend(model, {options:  _.clone(this.options)}), options);
        }
    });
});