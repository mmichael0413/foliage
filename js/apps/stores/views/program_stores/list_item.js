define(function(require) {
    var Backbone = require('backbone'),
        Noty = require('noty'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        DeleteModal = require('stores/views/program_stores/delete_modal'),
        TagsModal = require('stores/views/program_stores/tags_modal');

    var View = Backbone.View.extend({
        template: Templates['stores/program_stores/list_item'],
        tagName: 'tr',
        className: 'program-store-list-item',
        events: {
            'change .status': 'update',
            'click .view-tags': 'displayTagsModal',
            'click .remove': 'displayRemoveDialog'
        },
        render: function() {
            var labels = this.model.attributes.labels
                .map(function(x){ return x.content; })
                .join(", ");
            var data = {
                storeUUID: this.model.attributes.storeUUID,
                address: this.model.attributes.address,
                name: this.model.attributes.name,
                latitude: this.model.attributes.latitude,
                longitude: this.model.attributes.longitude,
                labels: labels,
            };
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
        },
        displayRemoveDialog: function(e) {
            e.preventDefault();
            var modal = new DeleteModal({model: this.model});
            $("body").append(modal.render().el);
        },
        displayTagsModal: function(e) {
            e.preventDefault();
            var modal = new TagsModal({model: this.model});
            $('body').append(modal.render().el);
        }
    });

    return View;
});
