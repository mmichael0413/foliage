define(function (require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        moment = require('moment');
    VisitProgressRow = {
        className: 'pure-g',
        template: Templates['procrastination/schedule/list/item'],
        render: function() {

            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    };

    return Backbone.View.extend(VisitProgressRow);
});