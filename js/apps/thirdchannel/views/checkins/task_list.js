define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chosen = require('chosen');

    return Backbone.View.extend({
        className: 'task-list',
        loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
        template: HandlebarsTemplates['thirdchannel/checkins/tasks'],
        events: {
            'click .task.grouped button' : 'submit',
            'submit form' : 'disableStart',
            "change select": "updateInputs"
        },
        render: function() {
            this.$el.html(this.template(this.model));
            this.$('select').chosen({disable_search: false, width: "100%"});
            this.$('.chosen-search input[type=text]').attr('placeholder', 'Search for task');
            this.valid = false;
            this.$formError = this.$('form .error');
            this.$groupedTaskForm = this.$('form.task.grouped');
            return this;
        },
        submit: function(e) {
            e.stopPropagation();
            e.preventDefault();

            if (this.valid) {
                this.hideError();
                this.$('form.task.grouped').submit();
            } else {
                this.showError(e);
            }
        },
        disableStart: function(e) {
            $(e.currentTarget).find(".btn.primary").prop( "disabled", true );
        },
        updateInputs: function () {
            var selectedOption = this.$('select :selected'),
                surveyId = selectedOption.data('survey'),
                packetId = selectedOption.data('packet'),
                taskId = selectedOption.data('task'),
                categoryId = selectedOption.data('category'),
                path = selectedOption.data('path');

            this.valid = (surveyId || packetId) && taskId;

            if (this.valid) {
                this.$groupedTaskForm.attr('action', path);
                this.$groupedTaskForm.find('input[name=survey_uuid]').val(surveyId);
                this.$groupedTaskForm.find('input[name=task_uuid]').val(taskId);
                this.$groupedTaskForm.find('input[name=category_id]').val(categoryId);
                this.$groupedTaskForm.find('input[name=packet_uuid]').val(packetId);

                this.hideError();
            } else {
                if(selectedOption.value !== undefined) {
                    this.showError();
                }
            }
        },
        showError: function(e) {
            this.$formError.show();
        },
        hideError: function(e) {
            this.$formError.hide();
        }
    });
});
