define(function(require){
	var Backbone = require('backbone'),
	context = require('context'),
	Schedule = require('procrastination/models/schedule/main');

	ScheduleCollection = Backbone.Collection.extend({
		initialize: function(models, options){
			this.aggregateId = options.aggregateId;
			this.personId = options.personId;
			this.programId = options.programId;

			console.log(this.aggregateId);
		},
		model: Schedule,
		comparator: 'taskDetail',
		url: function(){
			return context.base_url + '/schedule/list/upcoming/' + this.aggregateId;
		},
        generateLegend: function(){
            var self = this;
            this.tasks = this.groupBy(function(task){
                return task.get('taskDetail');
            });

            var idx = 0;
            _.each(this.tasks, function(task){
                _.each(task, function(visit) {
					var taskNum = 'task-' + idx;

					if(visit.get('dateCompleted')){
						taskNum = 'task-completed';
					}

                    visit.set('taskColor', taskNum);
                });
                idx++;
            });
        }
	});

	return ScheduleCollection;
});