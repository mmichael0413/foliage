define(function(require) {
    var jQueryUI = require('jquery-ui'),
        Backbone = require('backbone'),
        Model = require('thirdchannel/models/shared/reindex'),
        Chosen = require('chosen');

    return Backbone.View.extend({
        el: ".content",

        events: {
            "sortupdate .ui-sortable": "reindex"
        },

        initialize: function() {
            this.model = new Model();
        },

        render: function() {
            this.$('select').chosen({disable_search: false, width: "100%"});
            this.$('.ui-sortable').sortable({
                handle: '.handle'
            }).disableSelection();

            return this;
        },

        reindex: function(e, ui) {
            this.model.set("reindex", $.makeArray(this.$('.ui-sortable > div').map(_.bind(function( i, elem ) {
                return { id: this.$(elem).data("id"), idx: this.$(elem).index() };
            }, this)))).save().fail(function() {
                context.trigger('error');
            });
        }
    });
});
