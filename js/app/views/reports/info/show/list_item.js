define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ReportInfoListCheckinView = require('app/views/reports/info/show/checkin');

    return Backbone.View.extend({
        template: HandlebarsTemplates.reports_info_show_list_item,
        initialize: function (options) {
            this.model = options;
        },
        events: {
            "click .info-toggle": "toggleCheckins"
        },
        render: function () {
            var that = this;
            this.setElement(this.template(this.model));
            if (this.model.checkins !== undefined) {
                $.each(this.model.checkins, function (key, value) {
                    that.addCheckin(that, value);
                });
            }
            return this;
        },
        addCheckin: function (that, value) {
            that.$el.last().find('td').append(new ReportInfoListCheckinView(value).render().$el);
        },
        toggleCheckins: function (e, data) {
            this.$el.last().toggleClass('hide');
            this.$el.find('.fa').toggleClass('fa-rotate-180');
        }
    });
});