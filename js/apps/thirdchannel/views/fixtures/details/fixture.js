define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({

        className: 'fixture-instance-tile pure-g section',

        render: function () {
            var data = this.model;
            data.containsImages = data.imagesCount > 0;
            data.alert = data.problemsCount > 0;
            //data.previewImageUrl = data.attributes.fixtureImages[0].original;
            data.imageErrorUrl = context.links.fixtures.image_error;
            data.storeUrl = context.links.fixtures.program_store_base +"/" + this.model.programStoreUuid;
            this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/fixture_detail_tile"](data));
            return this;
        }
    });

});