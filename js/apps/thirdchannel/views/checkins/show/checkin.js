define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        SerializeObject = require('serializeObject'),
        Chosen = require('chosen'),
        Expanding = require('expanding'),
        DateTimePicker = require('dateTimePicker'),
        context = require('context'),
        FileView = require('thirdchannel/views/s3uploader/checkin_file');

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
            "click .question [data-hide-element]" : 'hideElement',
            "change .question input[type=hidden], change .question select": "validate",
            "change:nosave .question input[type=hidden]": "validate"
        },
        initialize: function() {
            _.bindAll(this, 'errorPlacement', 'validateSuccess', 'highlight', 'unhighlight');
            this.$form = this.$('.checkin-form');
            this.inventoryTotal = this.$('input.inventory-total');
            this.inventories = this.$('input.inventory');
            this.errorPlacementClass = '.question';
            this.model.beforeImages = new Backbone.Collection();
        },
        render: function() {
            var self = this;

            this.$('select').chosen({disable_search: true, width: "100%"});
            this.$('textarea:visible').expanding();
            this.$('.datetime').datetimepicker();

            // create a image file view to manage each image set
            this.$('.body.images').each(function() {
                new FileView({
                    el: this,
                    model: self.model
                });
            });

            this.validator = this.$form.validate({
                ignore: [],
                errorPlacement: this.errorPlacement,
                success: this.validateSuccess,
                highlight: this.highlight,
                unhighlight: this.unhighlight
            });

            this.$(".checkin-form").addClass('open');
            this.$(".loading-section").removeClass('open');

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
            if(this.inventoryTotal !== undefined) {
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
        validateForm: function(e) {
            e.preventDefault();
            if (this.valid()) {
                this.$(".checkin-form-btn").prop('disabled', true);
                this.$(".checkin-form-btn i").removeClass('ic ic_check').addClass("fa fa-spin fa-spinner");
                this.$form.submit();
            } else {
                $('.content-holder').animate({
                    scrollTop: this.$('div.error:first')[0].offsetTop
                }, 500);
            }
        },
        validate: function(e) {
            if(this.validCalled) {
                this.valid();
            }
        },
        valid: function() {
            this.validCalled = true;

            var questionsValid = this.$form.valid(),
                imagesValid = true;

            var $beforeImages = this.$('.images.before'),
                $afterImages = this.$('.images.after');

            // TODO: move to template?
            var requiredLabel = '<label class="error">This field is required.</label>';

            // TODO: jquery validator doesn't play nice with input arrays... This should get updated once we re-arch the checkin system
            // clean up existing errors before re-validating
            $beforeImages.removeClass('error');
            $beforeImages.find('label.error').remove();

            $afterImages.removeClass('error');
            $afterImages.find('label.error').remove();

            this.$('.image_label').parent().removeClass('error');

            if($beforeImages.find('.holder').length === 0) {
                $beforeImages.addClass('error');
                this.$('#before_file').after(requiredLabel);
                imagesValid = false;
            }

            if($afterImages.find('.holder').length === 0) {
                $afterImages.addClass('error');
                this.$('#after_file').after(requiredLabel);
                imagesValid = false;
            }

            // verify labels are present for all images
            var $labels = this.$('.body.images .image_label');

            _.each($labels, function(labelField) {
                var $labelField = $(labelField);
                if($labelField.val() === '') {
                    imagesValid = false;

                    $labelField.parent().addClass('error');
                    $labelField.parent().append(requiredLabel);
                }
            });

            return questionsValid && imagesValid;
        },
        errorPlacement: function(error, element) {
            var input = this.$(element),
                id = input.data('error-for');

            if(id !== undefined) {
                input = $(id);
            } else {
                input = input.closest(this.errorPlacementClass);
            }

            if(input.find("label.error").length === 0) {
                input.append(error);
            }
        },
        highlight: function(element, errorClass, validClass) {
            var input = this.$(element),
                id = input.data('error-for');

            if(id !== undefined) {
                input = $(id);
            } else {
                input = input.closest(this.errorPlacementClass);
            }

            input.addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            var input = this.$(element),
                id = input.data('error-for');

            if(id !== undefined) {
                input = $(id);
            } else {
                input = input.closest(this.errorPlacementClass);
            }

            input.removeClass(errorClass).addClass(validClass);
        },
        validateSuccess: function(error) {
            $("#" + error.attr("id")).remove();
        }
    });
});