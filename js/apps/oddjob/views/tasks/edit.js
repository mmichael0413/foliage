define(function (require) {
    var Backbone = require('backbone'),
        context = require('context');

    /**
     * A wrapper around the edit view for Jobs in OddJob
     * 
     * @type View
     */
    var JobEditView = {
        el: "#jobEdit",
        events: {
            'click .delete': 'deleteJob'
        },

        deleteJob: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var jobId = this.$el.find("#jobId").val(),
                model;

            if (confirm("Are you sure you wish to delete this job?")) {
                model = new (Backbone.Model.extend({url: function () {
                    console.log(context.links.delete);
                    return context.links.delete;
                }}))({id: jobId});

                model.destroy()
                .done(function () {
                    this.$el.fadeOut(function () {
                        window.location = context.links.list;    
                    });
                }.bind(this))
                .fail(function () {
                    alert("Could not delete! Please alert tech support");
                });    
            }
        }
    };

    return Backbone.View.extend(JobEditView);
});