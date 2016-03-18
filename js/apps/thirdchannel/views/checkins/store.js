define(function(require) {
    var ExpandableView = require('thirdchannel/views/checkins/expandable'),
        ScheduleDate = require('thirdchannel/views/checkins/date');

    return ExpandableView.extend({
        className: ExpandableView.prototype.className + " store",
        openText: "Show Visits",
        closeText: "Hide Visits",
        fillsubsection: function(){
            _.chain(this.model.job_uuids_by_date).keys().sort().each(function(date){
                this.subsection.append(new ScheduleDate({
                    model: {
                        date: date,
                        job_uuids: this.model.job_uuids_by_date[date],
                        job_details_by_uuid: this.model.job_details_by_uuid,
                        store_details: this.model.store_details,
                        pre_expand: true,
                        auth_token: window.bootstrap.auth_token,
                    },
                    hide_toggle: true,
                }).render().$el);
            }.bind(this));
        },
        rowTemplate: 'thirdchannel/checkins/store',
    });
});
