define(function(require) {
    var context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
        Visit = require('thirdchannel/views/scheduled_visits/scheduled_visit'),
        LoadingView = require('thirdchannel/views/utils/loading'),
        Filter = require('thirdchannel/views/filter/main');

    return Backbone.View.extend({
        el: "#scheduled-visits",
        template: 'thirdchannel/scheduled_visits/scheduled_visits',
        initialize: function(){
            this.collection = Filter.init().collection;
            this.render();
            window.location.search = this.model.queryString;
            this.listenTo(context, 'filter:query', this.applyFilter);
        },
        render: function(){
            this.$el.html(handlebarsTemplates[this.template]({}));
            _.each(this.model.visits, function(v){
                this.$el.append(new Visit({model: v}).render().$el);
            }.bind(this));
        },
        applyFilter: function (qs) {
            //this.$el.empty();
            //this.$el.append(new LoadingView().render().$el);
            /*$.getJSON(this.model.link + '?' + qs, function (data) {
                    this.model.visits = data;
                    this.render();
            }.bind(this));*/
        }
    });
});
