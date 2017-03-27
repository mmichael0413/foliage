define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');
    DetailsModalView = Backbone.View.extend({
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit_label'],
        className: 'details-modal',
        render: function () {
            this.model.showOptionalTasks = this.model.jobDetails.programUUID !== '219f1927-7997-4c03-a5c9-4a6b4d792d3e'; // vega
            console.log(this.model.jobDetails);
            this.$el.html(this.template(this.model));
            this.$el.dialog({
                modal: true,
                width: window.innerWidth * 0.7, // ~70% of viewport width
                title: "Job Details",
            });
        }
    });
    return DetailsModalView;
});
