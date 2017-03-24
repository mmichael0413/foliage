define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');
    DetailsModalView = Backbone.View.extend({
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit_label'],
        render: function () {
            console.log(this.model);
            this.$el.html(this.template(this.model));
            this.$el.dialog({
                modal: true,
                minWidth: window.innerWidth * 0.7, // ~70% of viewport width
                title: "Visit Details",
            });
        }
    });
    return DetailsModalView;
});
