define(function (require) {

    var context = require('context'),
        $ = require('jquery'),
        _ = require('underscore'),
        Templates = require('handlebarsTemplates'),
        SelectedStoresStore = require('oddjob/stores/selectedStores'),
        ProgramStoresStore = require('oddjob/stores/programStores');

        /**
         * A list view of stores representing the stores currently assigned to the schedule
         * 
         * @return View
         */
    return require('oddjob/views/stores/list').extend({
        templateName: "oddjob/stores/scheduled",
        initialize: function () {
            this.collection = ProgramStoresStore;
            // the filter will awaken the programStores fetch
            this.listenTo(ProgramStoresStore, 'sync', function () {
                this.render();
            }.bind(this));

            this.listenTo(context, 'stores:remove:selected', this.removeSelected);
            
        },

        removeSelected: function () {
            var selectedCheckboxes = _.filter(this.$el.find("input[type='checkbox']"), function (checkbox) { return checkbox.checked;}),
                uuids = _.map( selectedCheckboxes, function (checkbox) {
                    return checkbox.value;
                });

            if (confirm("Are you sure you wish to unassign " + uuids.length + " store(s) from this schedule?")) {
                
                $.ajax({
                    method: "POST",
                    url: context.links.unassign,
                    data: JSON.stringify(uuids),
                    contentType: 'application/json',
                    dataType: 'json',
                })
                .done(function () {
                    _.each (selectedCheckboxes, function(checkbox) {
                        $(checkbox).parents('.store-row').remove();
                    });
                    this.listenToOnce(context, 'stores:selected:count', this.callFilter);    
                    context.trigger('stores:uuids:false', uuids);
                }.bind(this))
                .fail(function () {
                    console.error("Fail time");
                }.bind(this));
            }
        },

        callFilter: function () {
            context.trigger('filter:request');
        }
    });
    
});