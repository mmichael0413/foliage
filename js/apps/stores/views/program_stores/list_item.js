define(function(require) {
    var Backbone = require('backbone'),
        Noty = require('noty'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/program_stores/list_item'],
        tagName: 'tr',
        className: 'program-store-list-item',
        events: {
            'change .status': 'update'
        },
        render: function() {
            var data = this.model.attributes;
            data.programStoreStatuses = context.programStoreStatuses;
            this.$el.html(this.template(data));
            return this;
        },
        update: function(e) {
            e.preventDefault();

            var data = {
                status: e.target.value
            };

            this.model.save(data, {patch: true}).then(function() {
                noty({
                    layout: 'top',
                    theme: 'relax',
                    text: 'Successfully updated ' + this.model.get('name'),
                    type: 'success',
                    animation: {
                        open: {height: 'toggle'},
                        close: {height: 'toggle'},
                        easing: 'swing',
                        speed: 500
                    },
                    timeout: 2500
                });
            }.bind(this)).fail(function() {
                noty({
                    layout: 'top',
                    theme: 'relax',
                    text: 'Failed to update ' + this.model.get('name'),
                    type: 'error',
                    animation: {
                        open: {height: 'toggle'},
                        close: {height: 'toggle'},
                        easing: 'swing',
                        speed: 500
                    },
                    timeout: 2500
                });
            }.bind(this));
        }
    });

    return View;
});