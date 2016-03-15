define(function(require) {
    var ExpandableView = require('thirdchannel/views/checkins/expandable'),
        TaskList = require('thirdchannel/views/checkins/task_list');

    return ExpandableView.extend({
        className: ExpandableView.prototype.className + " job",
        openText: "Show Tasks",
        closeText: "Hide Tasks",
        fillsubsection: function(){
            var taskList = new TaskList({model:{
                job: this.model.job,
                store: this.model.store,
                auth_token: window.bootstrap.auth_token,
            }});
            this.subsection.append(taskList.render().el);
        },
        rowTemplate: 'thirdchannel/checkins/job',
    });
});
