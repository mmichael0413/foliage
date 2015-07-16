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
        
        buildData: function () {
            var surveys = SurveysStore.toJSON(),
                pos = surveys.length;
            while(pos--) {
                if (surveys[pos].uuid == this.model.get('surveyId')) {
                    surveys[pos].selected = true;
                }
            }
            this.model.set('surveys', surveys);



            if (this.model.get('index') > 0) {
                this.model.set('removeable', true);
            }

            return this.model.toJSON();
        },

        clear: function (e) {
            e.preventDefault();
            alert("Nope!");
        }

    };

    return require('oddjob/views/tasks/create').extend(TaskEditView);
});