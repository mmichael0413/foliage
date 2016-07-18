define(function (require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        SurveysStore = require('oddjob/stores/surveys');

    /**
     * 
     * @type View
     */
    var TaskEditView = {
        
        clear: function (e) {
            e.preventDefault();
            this.model.url = context.links.tasks +"/" + this.model.get('id');
            var index = this.model.get('index');
            if (confirm("Are you sure you wish to delete this task from the job?")) {

                this.model.destroy()
                    .done(function () {
                        this.remove();
                        context.trigger("task:removed", index);
                    }.bind(this))
                    .fail(function () {
                        console.error("Uh oh");
                    });
            }
        }

    };

    return require('oddjob/views/tasks/create').extend(TaskEditView);
});