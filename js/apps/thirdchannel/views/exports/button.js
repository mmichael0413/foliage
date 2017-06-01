define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Modal = require('thirdchannel/modals/export');

    return Backbone.View.extend({
        el: 'a.export',
        model: Backbone.Model,

        events: {
            'click': 'initiateExport'
        },

        render: function() {
            return this;
        },

        initiateExport: function(e) {
            e.preventDefault();
            this.model.save().then(function () {
                var modal = new Modal({model: this.model});
                $("body").append(modal.render().el);
            }.bind(this)
            ).fail(function(response) {
                if(response.status === 422) {
                    var error = response.responseJSON;
                    alert(error.error);
                    _.each(error.errors, function(v, k) {
                        this.$('#' + k).addClass('error');
                    }.bind(this));
                } else {
                    alert('Something went wrong.');
                }
            }.bind(this));
        }
    });
});