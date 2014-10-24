define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
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
            this.images = {};
            this.inventoryTotal = this.$el.find('input.inventory-total');
            this.inventories = this.$el.find('input.inventory');
            this.listenTo(context, 'image:added', this.imageAdded);
            this.listenTo(context, 'image:updated', this.imageUpdated);
            this.listenTo(context, 'image:deleted', this.imageDeleted);
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
                context.trigger('hidden:update');
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
        },
        addImage: function(model) {
            var inputSel = model.get('input');
            this.images[inputSel] = this.images[inputSel] || {};
            this.images[inputSel][model.get('uuid')] = this.getImageParams(model);
            return this;
        },
        removeImage: function(model) {
            var inputSel = model.get('input');
            var uuid = model.get('uuid');
            this.images.removed = this.images.removed || {};
            this.images.removed[uuid] = this.images[inputSel][uuid];
            delete this.images[inputSel][uuid];
            return this;
        },
        setImageInputValue: function(model) {
            var inputSel = model.get('input');
            this.$el.find(inputSel).val(JSON.stringify(this.images[inputSel]));
            this.$el.find('#remove_images').val(JSON.stringify(this.images.removed));
        },
        getImageParams: function(model) {
            return {id: model.get('id'), label: model.get('label'), temp_location: model.get('s3location')}
        },
        imageAdded: function (model) {
            this.addImage(model).setImageInputValue(model);
        },
        imageUpdated: function (model) {
            this.removeImage(model).addImage(model).setImageInputValue(model);
        },
        imageDeleted: function (model) {
            this.removeImage(model).setImageInputValue(model);
        }
    });
});