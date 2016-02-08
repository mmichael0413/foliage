define(function (require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        moment = require('moment');
        VisitProgressRow = {
            className: 'pure-g',
            template: Templates['procrastination/admin/visit_progress_item'],
            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            }
        };
    return Backbone.View.extend(VisitProgressRow);
});
