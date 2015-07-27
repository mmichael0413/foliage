define(function (require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        moment = require('moment');
        VisitProgressRow = {
            className: 'pure-g',
            template: Templates['procrastination/admin/visit_progress_item'],
            render: function() {
                var formattedDateScheduled =  moment(this.model.get('dateScheduled')).utc();
                var formattedDateCompleted =  moment(this.model.get('dateCompleted')).utc();
                if(formattedDateScheduled.isValid()) {
                    this.model.set('formattedDateScheduled', formattedDateScheduled.format('MM/DD/YYYY'));
                }

                if(formattedDateCompleted.isValid()) {
                    this.model.set('formattedDateCompleted', formattedDateCompleted.format('MM/DD/YYYY'));
                }
                var now = moment().utc();
                if(formattedDateScheduled.isValid() && !formattedDateCompleted.isValid() && formattedDateScheduled.isBefore(now, 'days')) {

                } else {
                    var gap = formattedDateCompleted.diff(formattedDateScheduled, 'days');
                    this.model.set('gap', gap + ' days');
                }
                this.$el.html(this.template(this.model.attributes));
                return this;
            }
        };

    return Backbone.View.extend(VisitProgressRow);
});