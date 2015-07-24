define(function (require) {

    var context = require('context'),
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
            console.log("Removing selected");
        }
    });
    
});