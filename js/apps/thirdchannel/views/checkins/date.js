define(function(require){
    var ExpandableView = require('thirdchannel/views/checkins/expandable'),
        HandleBarsHelpersExt = require('handlebarsHelpersExt'),
        Job = require('thirdchannel/views/checkins/job');

    return ExpandableView.extend({
        className: ExpandableView.prototype.className + " visit section",
        openText: "Show Jobs",
        closeText: "Hide Jobs",
        fillsubsection: function(){
            this.subsection.append("<div>Jobs:</div>");
            _.each(this.model.job_uuids, function(job_uuid){
                var jobView = new Job({model: {
                    job: this.model.job_details_by_uuid[job_uuid],
                    hide_toggle: true,
                }});
                this.subsection.append(jobView.render().el);
            }.bind(this));
        },
        rowTemplate: 'thirdchannel/checkins/date',
    });
});
