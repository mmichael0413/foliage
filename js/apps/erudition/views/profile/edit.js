define(function (require) {
    require('jquery-ui');
    require('jquery.mask');
    require('chosen');
    require('jquery-validate');

    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        typeahead = require('typeahead'),
        FileView = require('shared/views/s3uploader/application_file');

    return Backbone.View.extend({
        el: '.content',

        imageTemplate: templates['shared/s3uploader/uploaderForm'],
        aboutImageInputTemplate: templates['erudition/s3Uploader/about_image_input'],
        initialize: function (options) {
            console.log(context.content);
            // this view is extended by the /application/create.js and uses a different template
            var templateString = (options && options.template) ? options.template : 'erudition/profile/edit';
            this.template = templates[templateString];

            this.person = context.content.person;
            this.aboutImageCount = this.person.aboutImages ? this.person.aboutImages.length - 1 : 0;

            $('#phone').mask('(000) 000-0000');

            this.listenTo(context, 'image:added', this.imageAdded);
            this.listenTo(context, 'image:deleted', this.handleDeletedImage);
        },

        events: {
            "click .deleteImage": 'deleteImage'
        },

        render: function () {
            var model = {
                person: this.person,
                interests: context.content.interests,
                graduationYears: context.content.graduationYears,
                states: context.content.states,
                s3: context.content.uploader,
                referer: context.content.referer,
                aboutImageCount: this.aboutImageCount,
                saveUrl: context.content.saveUrl,
                programUUID: context.content.programUUID
            };

            this.$el.append(this.template(model));

            if(context.content.requireValidation) {
                this.beginValidation();
            }
            this.configureAutocomplete();
            this.initializeImageUpload();

            return this;
        },

        beginValidation: function () {
            var self = this;
            $.validator.addMethod("validateAboutImages", function (value, element) {
                return self.$('div.aboutImageInput').find('img').length > 0;
            }, "Please upload at least one image");

            $.validator.addMethod("attendedCollege", function(value, element){
                var valid = false;
                // get the value of input[name='attendedCollege']
                var attendedCollege = self.$('input[name=attendedCollege]:checked').val();

                // if attendedCollege is null or yes then check if the field value exists;
                if(attendedCollege === undefined || attendedCollege === 'Yes') {
                    if(value) {
                        valid = true;
                    }
                } else {
                    valid = true;
                }


                return valid;
            }, "This field is required.");

            $('.profile-form').validate({
                rules: {
                    aboutImageInput: {
                        validateAboutImages: true
                    },
                    graduationYear: {
                        attendedCollege: true
                    }
                },
                errorPlacement: function (error, element) {
                    if ($(element).attr('type') == 'checkbox' || $(element).attr('type') == 'radio') {
                        $(element).closest('.input-group').after(error);
                    } else {
                        $(element).after(error);
                    }
                }
            });
        },

        configureAutocomplete: function () {
            var self = this;
            this.$('.typeahead').typeahead({
                    minLength: 3,
                    highlight: true
                },
                {
                    source: function (query, cb) {
                        var url = context.content.universityBaseUrl + '/universities/list.json';
                        $.getJSON(
                            url,
                            {
                                q: query
                            }
                        ).done(function (results) {
                                cb(results);
                            });
                    },
                    displayKey: "name",
                    templates: {
                        empty: "<div class='suggestion'>No Universities Found</div>",
                        suggestion: templates['erudition/profile/university_suggestion']
                    }
                }
            ).on('typeahead:opened', function () {
                    self.$('.typeahead').val('');
                    self.$('#university').val('');
                }).on('typeahead:selected', function (event, object) {
                    self.$('#university').val(object.id);
                    self.$('.typeahead:focus').blur();
                });

            this.$el.find(".twitter-typeahead").addClass("col-1-1");
        },

        initializeImageUpload: function () {
            new FileView({el: this.$('.profileImageInput'), inputTemplate: 'profile_image_input', collection: new Backbone.Collection()});
            new FileView({el: this.$('.aboutImageInput'), inputTemplate: 'about_image_input', collection: new Backbone.Collection()});
        },

        imageAdded: function (model) {
            var type = model.get('image_type');
            var file = model.get('temp_location');
            if (type === 'profileImage') {
                this.$('#' + type).val(file);
                this.$('#profileImageInput').prop('disabled', 'disabled');
                this.$('#profileImageInput').parent().addClass('disabled');
            } else {
                this.aboutImageCount += 1;
                if (this.aboutImageCount > 3) {
                    this.$('#aboutImageInput').prop('disabled', 'disabled');
                    this.$('#aboutImageInput').parent().addClass('disabled');
                }
            }
        },

        handleDeletedImage: function (image) {

            if (image.get('image_type') === 'profileImage') {
                $('#profileImageInput').prop('disabled', '');
                this.$('#profileImageInput').parent().removeClass('disabled');
            } else {
                this.aboutImageCount -= 1;
                this.$('#aboutImageInput').removeAttr('disabled');
                this.$('#aboutImageInput').parent().removeClass('disabled');
            }
        }
    });
});