define(function(require) {
    var context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
        Visit = require('thirdchannel/views/scheduled_visits/scheduled_visit'),
        Filter = require('thirdchannel/views/filter/main');

    return Backbone.View.extend({
        el: "#scheduled-visits",
        template: 'thirdchannel/scheduled_visits/scheduled_visits',
        initialize: function(){
            Filter.init();
            this.render();
        },
        render: function(){
            this.$el.html(handlebarsTemplates[this.template](this.model));
            console.log(this.model);
            _.each(this.model.visits, function(v){
                var store = this.model.store_details[v.programStoreUUID];
                this.$el.append(new Visit({model:{
                    checkin_url: v.link,
                    date_completed: v.dateCompleted,
                    date_scheduled: v.dateScheduled,
                    job: this.model.job_details[v.jobId],
                    person: this.model.person_details[v.personId],
                    fmr: this.model.person_details[store.fmr],
                    store: store,
                    visit_id: v.id,
                }}).render().$el);
            }.bind(this));
        }
    });
});
