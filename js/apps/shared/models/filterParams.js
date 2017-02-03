define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        qs = require('qs');

    return Backbone.Model.extend({
        /**
         *
         * @param override (Optional) an object to override the current model's attributes
         * @returns {String|*}
         */
        toQueryString: function(override) {
            if(!override) {
                override = {};
            }

            var data = _.extend(this.attributes, override);

            return qs.stringify(data, { arrayFormat: 'brackets' });
        }
    });
});