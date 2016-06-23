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
        addRange: function(date) {
            date = moment.utc(date).format("YYYY-MM-DD");
            var newRangeRow = $(Templates['oddjob/blackout_schemes/range_row'](date));
            newRangeRow.find(".blackout-scheme-date-remove").click(function() {
               newRangeRow.remove();
            });
            $("#blackout-scheme-ranges").append(newRangeRow);
        },
        render: function(){
            this.$el.html(Templates[this.template](window.bootstrap));
            var addButton = $("#blackout-scheme-date-add");
            addButton.click(this.addDate);

            // new
            var addRangeButton = $("#blackout-scheme-range-add");
            addRangeButton.click(this.addRange);

            var saveButton = $("#blackout-scheme-save");
            saveButton.click(this.submitChanges);
            var deleteButton = $("#blackout-scheme-delete");
            deleteButton.click(this.deleteScheme);
            _.each(window.bootstrap.blackoutScheme.dates, this.addDate);
        },
        submitChanges: function(){
            var rangesFrom = $("#blackout-scheme-ranges").find(".blackout-scheme-range-input1").map(function(){return this.value;}).get();
            var rangesTo = $("#blackout-scheme-ranges").find(".blackout-scheme-range-input2").map(function(){return this.value;}).get();
            var invalidRanges = [];
            // filter for finding invalid input fields
            function findFrom(from, index, date, array) {
                return from == date.value;
            }

            // validate ranges
            for(var i = 0; i < rangesFrom.length; i++) {
                var from = rangesFrom[i];
                var to = rangesTo[i];
                var element = $("#blackout-scheme-ranges").find(".blackout-scheme-range-input1")
                    .filter(findFrom.bind(null, from));

                if(moment(from).isAfter(to)) {
                    element.parent().addClass('error');
                    invalidRanges.push({to: to, from: from});
                }
                else {
                    element.parent().removeClass('error');
                }
            }

            // create warning for when invalid ranges exist
            var warningText = "ERROR: You have entered one or more ranges that are invalid." +
                " \n\nThe date in the 'From' field cannot be after the date in the To field. " +
                "\n\nInvalid Ranges: ";

            _.each(invalidRanges, function(range) {
                warningText += "\nFrom: " + range.from + ", To: " + range.to;
            });

            if (invalidRanges.length === 0) {
                $("#blackout-scheme-save").prop("disabled", true);
                var data = {
                    "name": $("#blackout-scheme-name").get(0).value,
                    "dates": $("#blackout-scheme-dates").find(".blackout-scheme-date-input").map(function () {
                        return this.value;
                    }).get(),
                    "rangesFrom": rangesFrom,
                    "rangesTo": rangesTo,
                    "inverse": $("#blackout-scheme-inverse_whitelist").is(':checked'),
                };
                $.ajax({
                    type: "POST",
                    url: window.bootstrap.submitUrl,
                    data: JSON.stringify(data),
                    success: function (data, textstatus, jqxhr) {
                        window.location.href = ".";
                    },
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                }).fail(function () {
                    alert("Failed to save blackout scheme!");
                    $("#blackout-scheme-save").prop("disabled", false);
                });
            }
            else {
                alert(warningText);
            }
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
