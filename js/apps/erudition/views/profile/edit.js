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

        photoTemplate: templates['shared/s3uploader/uploaderForm'],
        aboutPhotoInputTemplate: templates['erudition/s3Uploader/about_photo_input'],
        initialize: function (options) {
            // this view is extended by the /application/create.js and uses a different template
            var templateString = (options && options.template) ? options.template : 'erudition/profile/edit';
            this.template = templates[templateString];

            this.person = context.content.person;
            this.aboutPhotoCount = this.person.aboutPhotos ? this.person.aboutPhotos.length - 1 : 0;

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
                aboutPhotoCount: this.aboutPhotoCount
            };

            this.$el.append(this.template(model));
            this.beginValidation();
            this.configureAutocomplete();
            this.initializePhotoUpload();

            return this;
        },

        beginValidation: function () {
            var self = this;
            $.validator.addMethod("validateAboutPhotos", function (value, element) {
                return self.$('div.aboutPhotoInput').find('img').length > 0;
            }, "Please upload at least one photo");

            $.validator.addMethod("attendedCollege", function(value, element){
                return true;
                var valid = false;
                // get the value of input[name='attendedCollege']
                var attendedCollege = self.$('#attendedCollege').val();

                // if attendedCollege is null or yes then check if the field value exists;
                if(attendedCollege === undefined || attendedCollege === 'yes') {
                    if(value) {
                        valid = true;
                    }
                }


                return valid;
            }, "This field is required.");

            $('.profile-form').validate({
                rules: {
                    aboutPhotoInput: {
                        validateAboutPhotos: true
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

        initializePhotoUpload: function () {
            new FileView({el: this.$('.profilePhotoInput'), inputTemplate: 'profile_photo_input'});
            new FileView({el: this.$('.aboutPhotoInput'), inputTemplate: 'about_photo_input'});
        },

        imageAdded: function (model) {
            var type = model.get('image_type');
            var file = model.get('temp_location');
            if (type === 'profilePhoto') {
                this.$('#' + type).val(file);
                this.$('#profilePhotoInput').prop('disabled', 'disabled');
            } else {
                this.aboutPhotoCount += 1;
                if (this.aboutPhotoCount > 3) {
                    this.$('#aboutPhotoInput').prop('disabled', 'disabled');
                }
            }
        },

        handleDeletedImage: function (photo) {

            if (photo.get('image_type') === 'profilePhoto') {
                $('#profilePhotoInput').prop('disabled', '');
            } else {
                this.aboutPhotoCount -= 1;
                console.log(this.aboutPhotoCount);
                $('#aboutPhotoInput').removeAttr('disabled');
            }
        }
    });
});