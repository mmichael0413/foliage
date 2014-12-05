define(function(require) {
    var Backbone = require('backbone'),
        Chosen = require('chosen'),
        Expanding = require('expanding');

    return Backbone.View.extend({
        el: '.store-intel',
        events: {
            "click [data-show-element]" : 'showElement',
            "click [data-hide-element]" : 'hideElement',
            "click .checkin-form-btn" : "submit"
        },
        initialize: function (options) {
        },
        render :function () {
            this.$el.find('select').chosen({disable_search: true, width: "100%"});
            this.$el.find('textarea:visible').expanding();
            return this;
        },
        showElement: function (e, data) {
            var $elem = this.$el.find(e.currentTarget);
            this.$el.find($elem.data('show-element')).show('fast', "linear");
        },
        hideElement: function (e, data) {
            var $elem = this.$el.find(e.currentTarget);
            this.$el.find($elem.data('hide-element')).hide('fast', "linear").val('').trigger('change');
        },
        submit: function(e, data) {
            this.$el.find(".checkin-form-btn").prop('disabled', true);
            this.$el.find(".checkin-form-btn i").removeClass('ic ic_check').addClass("fa fa-spin fa-spinner");
            this.$el.find('form').submit();
        }
    });
});