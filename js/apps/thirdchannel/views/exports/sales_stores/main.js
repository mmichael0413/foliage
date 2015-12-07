define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Serialize = require('serializeObject'),
        context = require('context'),
        ExportModel = require('thirdchannel/models/exports/sales_stores'),
        ExportModal = require('thirdchannel/modals/export');

    return Backbone.View.extend({
        el: '#sales-stores-export-form',

        events: {
            'submit': 'initiateExport'
        },

        render: function() {
            return this;
        },

        initiateExport: function(e) {
            e.preventDefault();
            this.$('.error').removeClass('error');
            var model = new ExportModel(_.extend(this.$el.serializeObject(), {programId: context.programId}));
            model.save().then(function() {
                var modal = new ExportModal({model: model});
                $("body").append(modal.render().el);
            }).fail(function(response) {
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