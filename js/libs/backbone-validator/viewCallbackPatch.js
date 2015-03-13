/**
 * Backbone.Validator
 *
 * Adds decoupled validator functionality that could be bound to model and view, as well as
 * validated plain hashes with built-in or custom validators
 *
 * @author Maksim Horbachevsky
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['backbone', 'backboneValidator'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('backbone'), require('backboneValidator'));
    } else {
        factory(window.Backbone, window._);
    }
})(function(Backbone, backboneValidator) {

    'use strict';

    Backbone.Validator.ViewCallbacks = {
        onValidField: function (name /*, value, model*/) {
            var input = this.$('[name="' + name + '"]');

            input.removeClass('error');
            input.next('.error-text').remove();
        },

        onInvalidField: function (name, value, errors /*, model*/) {
            var input = this.$('[name="' + name + '"]');

            input.next('.error-text').remove();
            input.addClass('error').after('<div class="error-text">' + errors.join(', ') + '</div>');
        }
    };
});
