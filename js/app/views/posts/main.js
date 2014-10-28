define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Post = require('app/models/posts/post'),
        Serialize = require('serializeObject'),
        Chosen = require('chosen'),
        Quill = require('quill'),
        QuillVideo = require('quill-video');


    return Backbone.View.extend({
        el: '.content',
        initialize: function () {
            _this = this;
            this.model = new Post();

            // set model attributes to check for the 'toable_filter'
            this.model.set(this.$('.new-message form').serializeObject());

            var re = /.*toable_filter.*/;
            _.each(this.model.attributes, function (value, key) {
                if (re.exec(key)) {
                    _this.model.containsFilter = true;
                    _this.model.filters.push(key);
                }
            });

            this.editor = new Quill('#editor', {
                theme: 'snow'
            });
            this.editor.addModule('toolbar', { container: '#full-toolbar' });
            this.editor.addModule('link-tooltip');
            this.editor.addModule('image-tooltip');
            this.editor.addModule('video-tooltip');


            this.$el.find('.send-to select').chosen({disable_search: false, width: "100%"});

            this.$('iframe').each(function () {
                $(this.contentWindow).on('blur', function () {
                    _this.correctEditorValidationError();
                });
            });

        },
        events: {
            'click #post-submit-btn': 'submitForm',
            'change .message-subject': 'correctValidationErrors',
            'change select': 'correctSelectionErrors'
        },
        submitForm: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.model.set(this.$('.new-message form').serializeObject());
            this.getDataFromEditor();


            if (this.model.isValid()) {
                this.model.save(this.$('.new-message form').serializeObject()).done(function () {
                    window.location = '/programs/' + context.programId + '/activities';
                }).fail(function () {
                    console.log('fail');
                });
            } else {
                var _this = this;

                this.$('.error-container').html('<div class="alert error">There was an error submitting your post. Please ensure all fields are complete</div>');

                _.each(this.model.validationError, function (errorClass) {
                    if (errorClass == 'message-filters') {
                        _this.$('.send-to .chosen-choices').addClass('error');
                        if (_this.$('.send-to .alert-string').length === 0) {
                            _this.$('.send-to h3').append('<div class="alert-string error">At least one selection must be made</div>');
                        }
                    } else {
                        _this.$('.' + errorClass).addClass('error');
                    }
                });
            }

        },
        getDataFromEditor: function () {
            if (this.editor.getLength() > 1) {
                this.model.set('message-content', this.editor.getHTML());
                this.$('#content').val(this.model.get('message-content'));
            } else {
                this.model.set('message-content', '');
                this.$('#content').val(this.model.get('message-content'));
            }
        },
        correctValidationErrors: function (e) {

            if (this.model.validationError !== null) {

                var changedAttr = $(e.currentTarget).attr('name');

                this.model.set(this.$('.new-message form').serializeObject(), {validate: true});

                var errorClass = changedAttr.replace(/\[/g, '-').replace(/\]/g, '');


                if ($.inArray(changedAttr, this.model.validationError) == -1) {
                    this.$('.' + errorClass).removeClass('error');
                }

            }
            this.removeValidationError();
        },
        correctEditorValidationError: function () {
            if (this.model.validationError !== null) {
                var changedAttr = 'message[content]';
                var changedVal = this.getDataFromEditor();

                this.model.set(changedAttr, changedVal);

                var errorClass = changedAttr.replace(/\[/g, '-').replace(/\]/g, '');


                if ($.inArray(changedAttr, this.model.validationError) == -1) {
                    this.$('.' + errorClass).removeClass('error');
                }
            }

            this.removeValidationError();
        },
        removeValidationError: function () {
            if (this.model.isValid()) {
                this.$('.error-container .alert').remove();
            }
        },
        correctSelectionErrors: function(e){
            if (this.model.validationError !== null) {
                var _this = this;

                this.model.set(this.$('.new-message form').serializeObject(), {validate: true});

                if ($.inArray('message-filters', this.model.validationError) == -1){
                    _this.$('.send-to .chosen-choices').removeClass('error');
                    _this.$('.send-to .alert-string').remove();
                }
            }

            this.removeValidationError();

        }

    });
});