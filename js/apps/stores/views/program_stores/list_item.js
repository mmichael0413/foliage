define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/program_stores/list_item'],
        className: 'pure-g item program-store-list-item',
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
            console.log(this.model.url());
            console.log(this.model.attributes);
        }
    });

    return View;
});