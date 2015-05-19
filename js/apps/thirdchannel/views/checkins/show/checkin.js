define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        SerializeObject = require('serializeObject'),
        Chosen = require('chosen'),
        Expanding = require('expanding'),
        DateTimePicker = require('dateTimePicker'),
        context = require('context'),
        FileView = require('thirdchannel/views/s3uploader/checkin_file'),
        ImageView = require('thirdchannel/views/s3uploader/checkin_image'),
        FormValidate = require('thirdchannel/views/utils/validation');

    return Backbone.View.extend({
        el: ".checkin",
        events: {
            "click .checkin-form-btn" : "validateForm",
            "blur .question input[type!=radio]": "saveState",
            "change .question textarea": "saveState",
            "change .question input[type=radio]": "saveState",
            "change .question input[type=hidden]": "saveState",
            "change .question select": "saveState",
            'blur .question input.inventory': 'updateTotal',
            "click .question [data-show-element]" : 'showElement',
            "click .question [data-hide-element]" : 'hideElement'
        },
        initialize: function() {
            this.inventoryTotal = this.$('input.inventory-total');
            this.inventories = this.$('input.inventory');
        },
        render: function() {
            var self = this;

            this.$('select').chosen({disable_search: true, width: "100%"});
            this.$('textarea:visible').expanding();
            this.$('.datetime').datetimepicker();

            // create a image file view to manage each image set
            this.$('.body.images').each(function() {
                var fileView = new FileView({
                    el: this,
                    model: self.model
                });
            });

            //this.formValidation = new FormValidate({errorPlacementClass: '.question'}).render(this.formView);

            return this;
        },
        saveState: function(e) {
            var $elem = this.$el.find(e.currentTarget);
            if ($elem !== undefined) {
                var attributes = $elem.serializeObject();
                if ($.isEmptyObject(attributes)) {
                    attributes[$elem.attr('name')] = $elem.val();
                }
                this.model.save(attributes, {patch: true});
            }
        },
        updateTotal: function(e) {
            if (this.inventoryTotal !== undefined) {
                var currentTotal = 0;
                this.inventories.each(function() {
                    var value = parseInt($(this).val(), 10);
                    currentTotal += (value === -1 || isNaN(value)) ? 0 : value;
                });
                this.inventoryTotal.val(currentTotal).trigger('change');
            }
        },
        showElement: function(e) {
            this.$(e.currentTarget.getAttribute('data-show-element')).show('fast', "linear");
        },
        hideElement: function(e) {
            this.$(e.currentTarget.getAttribute('data-hide-element')).hide('fast', "linear").val('').trigger('change');
        },
        validateForm: function() {
            if (this.formValidation.valid()) {
                this.$(".checkin-form-btn").prop('disabled', true);
                this.$(".checkin-form-btn i").removeClass('ic ic_check').addClass("fa fa-spin fa-spinner");
                window.localStorage.removeItem('checkinImages_' + this.options.checkinId);
                this.formView.submit();
            } else {
                $('.content-holder').animate({
                    scrollTop: this.$('div.error:first')[0].offsetTop
                }, 500);
            }
        }
    });
});