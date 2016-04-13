define(function(require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
        Chosen = require('chosen'),
		SurveysStore = require('oddjob/stores/surveys');

	var JobEditView = {
		templateName: "oddjob/jobs/edit",
		taskViewClass: require('oddjob/views/tasks/edit'),

		renderChildViews: function () {
        console.log(this.model);
			var i = 0,
				max = this.model.get('tasks').length;
			for(i; i < max; i++) {
				this._addTaskAtIndex(i, this.taskViewClass, new Backbone.Model(this.model.get('tasks')[i]));
			}
            $(this.model.attributes.blackoutSchemeUUIDs).each(function(){
                $("#edit-blackout-schemes").find("option[value="+this+"]").attr("selected","selected");
            });
            $("#edit-blackout-schemes").chosen({disable_search: true, width: "100%"});
		},

		deleteJob: function (e) {
			e.preventDefault();
			if (confirm("Are you sure you wish to delete this job?")) {
				this.model.destroy()
				.done(function () {
					window.location = context.links.jobs;	
				})
				.fail(function () {
					console.log("Could not delete!");
				});	
			}
		}
	};

	return require('oddjob/views/jobs/create').extend(JobEditView);
});
