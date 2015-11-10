define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        TaskCreateView = require('oddjob/views/tasks/create'),
        Quill = require('quill'),
        SurveysStore = require('oddjob/stores/surveys');

    var JobCreateView = {
        el: "#job",
        templateName: "oddjob/jobs/create",
        taskViewClass: TaskCreateView, // the class to use when instantiate existing tasks from the server
        childViews: [],
        events: {
            'click .add-task': 'addTask',
            'click .delete': 'deleteJob',
            'click .job-tracking': 'jobTrackingHandler'
        },

        render: function () {
            SurveysStore.fetch()
            .done(function () {
                var data = this.model.toJSON();
                data.roles = context.roles;
                _.each(data.roles, function (role) {
                    if (role.id === data.role) {
                        role.selected = true;
                    }
                });
                this.$el.html(Templates[this.templateName](data));
                this._toggleJobTrackingText(data.tracked);
                this._configureTextEditor();
                this.$tasksContainer = this.$el.find('.tasks-container');
                // create the first view
                this.renderChildViews();
            }.bind(this));
            
            return this;
        },

        jobTrackingHandler: function (e) {
            this._toggleJobTrackingText($(e.currentTarget).is(':checked'));
        },
        _toggleJobTrackingText: function (value) {
            var $text = this.$el.find("#jobTrackingText");
            if (value) {
                $text.fadeIn();
            } else {
                $text.fadeOut();
            }
        },
        _configureTextEditor: function() {
            var completionInstructions = $('#completionInstructions');

            editor = new Quill('#editor', {
                theme: 'snow',
                pollInterval: 0
            });
            editor.addModule('toolbar', { container: '#full-toolbar' });
            editor.addModule('link-tooltip');

            editor.on('text-change', function(delta, source) {
                completionInstructions.val(editor.getHTML());
            });

            editor.setHTML(completionInstructions.val());
        },

        renderChildViews: function () {
            this._addTaskAtIndex(0, this.taskViewClass, new Backbone.Model());

        },

        _addTaskAtIndex: function (index, taskClass, model) {
            var view = new taskClass({index:index, model: model});
            this.$tasksContainer.append(view.render().$el);
            this.childViews.push(view);
        },

        addTask: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var index = this.$tasksContainer.find('.task').length;
            this._addTaskAtIndex(index, TaskCreateView, new Backbone.Model());
        },

        deleteJob: function () {
            // no op for create
        }

    };

    return Backbone.View.extend(JobCreateView);
});