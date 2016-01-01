define(function (require) {
    var Backbone = require('backbone'),
    $ = require('jquery'),
    _ = require('underscore'),
    moment = require('moment'),
    Templates = require('handlebarsTemplates');
    return Backbone.View.extend({
        el: "#blackout-scheme-container",
        initialize: function () {
            this.render();
        },
        template: 'oddjob/blackout_schemes/blackout_scheme',
        addDate: function(date) {
            date = moment.utc(date).format("YYYY-MM-DD");
            var newDateRow = $(Templates['oddjob/blackout_schemes/date_row'](date));
            newDateRow.find(".blackout-scheme-date-remove").click(function(){
                newDateRow.remove();
            });
            $("#blackout-scheme-dates").append(newDateRow);
        },
        render: function(){
            this.$el.html(Templates[this.template](window.bootstrap));
            var addButton = $("#blackout-scheme-date-add");
            addButton.click(this.addDate);
            var saveButton = $("#blackout-scheme-save");
            saveButton.click(this.submitChanges);
            var deleteButton = $("#blackout-scheme-delete");
            deleteButton.click(this.deleteScheme);
            _.each(window.bootstrap.blackoutScheme.dates, this.addDate);
        },
        submitChanges: function(){
            $("#blackout-scheme-save").prop("disabled", true);
            var data = {
                "name": $("#blackout-scheme-name").get(0).value,
                "dates": $("#blackout-scheme-dates").find(".blackout-scheme-date-input").map(function(){return this.value;}).get(),
            };
            $.ajax({
                type: "POST",
                url: window.bootstrap.submitUrl,
                data: JSON.stringify(data),
                success: function(data, textstatus, jqxhr) {
                    window.location.href = ".";
                },
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
            }).fail(function(){
                alert("Failed to save blackout scheme!");
                $("#blackout-scheme-save").prop("disabled", false);
            });
        },
        deleteScheme: function(){
            if(confirm("Are you sure you want to delete this Blackout Scheme? This will affect " + window.bootstrap.assignedJobs.length + " jobs.")){
                $("#blackout-scheme-delete").prop("disabled", true);
                var data = {
                    "name": $("#blackout-scheme-name").get(0).value,
                    "dates": $("#blackout-scheme-dates").find(".blackout-scheme-date-input").map(function(){return this.value;}).get(),
                };
                $.ajax({
                    type: "POST",
                    url: window.bootstrap.deleteUrl,
                    success: function(data, textstatus, jqxhr) {
                        window.location.href = ".";
                    },
                }).fail(function(){
                    alert("Failed to delete blackout scheme!");
                    $("#blackout-scheme-delete").prop("disabled", false);
                });
            }
        }
    });
});
