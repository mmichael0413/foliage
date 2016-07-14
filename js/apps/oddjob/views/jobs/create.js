define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        TaskCreateView = require('oddjob/views/tasks/create'),
        SummaryView = require('oddjob/views/jobs/summary'),
        Quill = require('quill'),
        Task = require('oddjob/models/task'),
        ActivityPacketStore = require("oddjob/stores/activityPackets"),
        SurveysStore = require('oddjob/stores/surveys'),

        TaskCollection = Backbone.Collection.extend({
            model: Task
        });



    var JobCreateView = {
        el: "#job",
        templateName: "oddjob/jobs/create",
        taskViewClass: TaskCreateView, // the class to use when instantiate existing tasks from the server

        childViews: [],
        events: {
            'click .add-task': 'addTask',
            'click .delete': 'deleteJob',
            'click .job-tracking': 'jobTrackingHandler',
            'click .job-submit': 'jobSubmit'
        },

        initialize: function(data){
            this.model = data.model;
            this.tasks = new TaskCollection();
            if (this.model.get('tasks')) {
                this.tasks.add(this.model.get('tasks'));
            } else {
                this.tasks.add(new Task());
            }

            this.listenTo(this.tasks, 'remove', function() {
                this.renderChildViews();
            }.bind(this));

        },

        fetch: function () {
            return $.when(SurveysStore.fetch(), ActivityPacketStore.fetch());
        },

        render: function () {
            var data = this.model.toJSON();
            this.summary = new SummaryView({tasks: this.tasks});
            data.reports = context.reports;
            data.roles = context.roles;
            
            this.loadRole(data.role, data.roles);
            
            this.$el.html(Templates[this.templateName](data));
            this._toggleJobTrackingText(data.tracked);
            this._configureTextEditor();
            this.$tasksContainer = this.$el.find('.tasks-container');
            // create the first view
            this.renderChildViews();
            this.summary.setElement($("#jobSummary"));
            this.summary.render();
            
            return this;
        },

        loadRole: function (selectedRole, roles) {
            _.each(roles, function (role) {
                if (role.id === "agent") {
                    role.selected = true;
                }
            });
        },

        jobTrackingHandler: function (e) {
            var enabled = $(e.currentTarget).is(':checked');
            this._toggleJobTrackingText(enabled);

            this.$('.job-target').prop('disabled', !enabled);
            this.$('.job-report').prop('disabled', !enabled);
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
            this.$tasksContainer.html("");
            for (var i = 0; i < this.tasks.length; i++) {
                this._addTaskAtIndex(i, this.taskViewClass, this.tasks.at(i));
            }
        },

        _addTaskAtIndex: function (index, taskClass, model) {
            var view = new taskClass({index: index, model: model});
            this.$tasksContainer.append(view.render().$el);
            
        },

        addTask: function (e) {
            e.stopPropagation();
            e.preventDefault();

            var index = this.tasks.length,
                model = new Task();
            this.tasks.add(model);
            this._addTaskAtIndex(index, TaskCreateView, model);

        },

        jobSubmit: function(e) {
            var taskCount = this.$('.task').length;
            if(taskCount === 0) {
                alert('Jobs require at least one task');
                return false;
            }
            return true;
        },

        deleteJob: function () {
            // no op for create
        }

    };

    return Backbone.View.extend(JobCreateView);
});