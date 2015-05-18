define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        FormModel = require('thirdchannel/models/checkins/show/form'),
        SerializeObject = require('serializeObject'),
        Chosen = require('chosen'),
        Expanding = require('expanding'),
        DateTimePicker = require('dateTimePicker');

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
            this.checkinId = options.checkinId;
            this.images = {};
            this.imageGroupLabels = this.$el.data('group-labels');
            this.inventoryTotal = this.$('input.inventory-total');
            this.inventories = this.$('input.inventory');
            this.listenTo(context, 'image:added', this.imageAdded);
            this.listenTo(context, 'image:updated', this.imageUpdated);
            this.listenTo(context, 'image:deleted', this.imageDeleted);
        },
        render :function () {
            this.$('select').chosen({disable_search: true, width: "100%"});
            this.$('textarea:visible').expanding();
            this.$('.datetime').datetimepicker();
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
            window.localStorage.setItem('checkinImages_' + this.checkinId, JSON.stringify(this.images));
            return this;
        },
        removeImage: function(model) {
            var inputSel = model.get('input');
            var uuid = model.get('uuid');
            this.images.removed = this.images.removed || {};
            this.images.removed[uuid] = this.images[inputSel][uuid];
            delete this.images[inputSel][uuid];
            window.localStorage.setItem('checkinImages_' + this.checkinId, JSON.stringify(this.images));
            return this;
        },
        setImageInputValue: function(model) {
            var inputSel = model.get('input');
            this.$el.find(inputSel).val(JSON.stringify(this.images[inputSel])).trigger('change:nosave');
            this.$('#remove_images').val(JSON.stringify(this.images.removed));
        },
        getImageParams: function(model) {
            return {id: model.get('id'), label: model.get('label'), group_label: model.get('group_label'), temp_location: model.get('temp_location')};
        },
        imageAdded: function (model) {
            this.addImage(model).setImageInputValue(model);
        },
        imageUpdated: function (model) {
            if(model.get('input') === '#before_images' && model.get('group_label') !== undefined && model.changed['group_label'] !== undefined) {
                var oldValue = model.changed['group_label'],
                    newValue = model.get('group_label');

                console.log(model);
                console.log(oldValue);
                console.log(newValue);

                if(oldValue !== undefined && oldValue !== '') {
                    this.imageGroupLabels.splice($.inArray(oldValue, this.imageGroupLabels), 1);
                }

                if(newValue !== undefined && newValue !== '') {
                    this.imageGroupLabels.push(newValue);
                }

                this.updateAfterImageGroupSelections();
            }

            this.addImage(model).setImageInputValue(model);
        },
        imageDeleted: function (model) {
            if(model.get('input') === '#before_images' && model.get('group_label') !== undefined) {
                var value = model.get('group_label');
                this.imageGroupLabels.splice($.inArray(value, this.imageGroupLabels), 1);
                this.updateAfterImageGroupSelections();
            }

            this.removeImage(model).setImageInputValue(model);
        },
        updateAfterImageGroupSelections: function() {
            console.log('TODO: update after image selections');
            console.log(this.imageGroupLabels);
        }
    });
});