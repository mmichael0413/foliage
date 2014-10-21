define(function(require) {
    var Backbone = require('backbone'),
        FormModel = require('app/models/checkins/show/form'),
        SerializeObject = require('serializeObject'),
        Chosen = require('chosen'),
        Expanding = require('libs/expanding');

    return Backbone.View.extend({
        el: '.checkin-form',
        events: {
            "blur input[type!=radio]": "saveState",
            "change textarea": "saveState",
            "change input[type=radio]": "saveState",
            "change input[type=hidden]": "saveState",
            "change select": "saveState",
            'blur input.inventory': 'updateTotal',
            "click [data-show-element]" : 'showElement',
            "click [data-hide-element]" : 'hideElement'
        },
        initialize: function (options) {
            this.model = new FormModel(options);
            this.inventoryTotal = this.$el.find('input.inventory-total');
            this.inventories = this.$el.find('input.inventory');
        },
        render :function () {
            this.$el.find('select').chosen({disable_search: true, width: "100%"});
            this.$el.find('textarea:visible').expanding();
            return this;
        },
        saveState: function (e) {
            var $elem = this.$el.find(e.currentTarget);
            if ($elem !== undefined) {
                var attributes = $elem.serializeObject();
                if ($.isEmptyObject(attributes)) {
                    attributes[$elem.attr('name')] = $elem.val();
                }
                this.model.save(attributes, {patch: true});
            }
        },
        updateTotal: function () {
            if (this.inventoryTotal !== undefined) {
                var currentTotal = 0,
                    self = this;
                this.inventories.each(function(){
                    currentTotal += self.extractInt($(this));
                });
                this.inventoryTotal.val(currentTotal).trigger('change');
            }
        },
        extractInt: function ($input) {
            var value = parseInt($input.val(), 10);
            return (value === -1 || isNaN(value)) ? 0 : value;
        },
        showElement: function (e, data) {
            var $elem = this.$el.find(e.currentTarget);
            this.$el.find($elem.data('show-element')).show('fast', "linear");
        },
        hideElement: function (e, data) {
            var $elem = this.$el.find(e.currentTarget);
            this.$el.find($elem.data('hide-element')).hide('fast', "linear").val('').trigger('change');
        }
    });
});