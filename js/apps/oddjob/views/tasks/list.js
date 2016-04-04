define(function (require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        jui = require('jquery-ui'),
        context = require('context'),
        JobRow = require('oddjob/views/jobs/row');
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({
        // assumes jobs / job groups have been fetched
        // 
        el: "#jobsContainer",
        rowsViews: [],
        events: {
            'click .toggleTasks': 'toggleTasks'
        },
        render: function () {
            context.stores.groups.fetch()
            .done(function (data) {
                    this.$el.html("");
                    this.renderRows(context.stores.groups);
            }.bind(this));
        },
        renderRows: function (collection) {
            
            if (collection.length === 0) {
                this.$el.html("<p>There are currently no jobs created for this program.</p>");
            } 
            else {
                
                //Add header to top of list only once
                $('#jobsContainer').html(Templates['oddjob/jobs/header']);

                //Sort jobs by name
                collection.comparator = function(model) {
                    return model.get('name');
                };

                //Sort names
                collection.sort();

                //Add each job row to table
                collection.each(function(group) {
                    var view = new JobRow({model: group});
                    view.render().$el.appendTo(this.$el);
                    this.rowsViews.push(view);
                }.bind(this));

            }

        },
        toggleTasks: function (e) {
            //e.preventDefault();
            var tasksContainerId = $(e.target).data("id");
            var tasksContainerButton = $(e.target);

            if($('.tasks-container'+tasksContainerId).is(":visible")){
                tasksContainerButton.html("Show Tasks");
                $('.tasks-container'+tasksContainerId).slideUp( "fast", function(){});
                $('.frequencies-container'+tasksContainerId).slideUp( "fast", function(){});
                $('.blackout-schemes-container'+tasksContainerId).slideUp( "fast", function(){});
                $('.allow-rescheduling-container'+tasksContainerId).slideUp( "fast", function(){});
            }
            else{
                tasksContainerButton.html("Hide Tasks");
                /*var scrollTopVal = $(e.target).offset().top; console.log(scrollTopVal); console.log($(e.target).offset());
                $('.content-holder').animate({
                    scrollTop: scrollTopVal
                }, 600);*/
                $('.tasks-container'+tasksContainerId).slideDown( "fast", function(){});
                $('.frequencies-container'+tasksContainerId).slideDown( "fast", function(){});
                $('.blackout-schemes-container'+tasksContainerId).slideDown( "fast", function(){});
                $('.allow-rescheduling-container'+tasksContainerId).slideDown( "fast", function(){});
            }

        }
    });
});
