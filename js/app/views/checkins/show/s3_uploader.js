define(function(require) {
    var Backbone = require('backbone'),
        Chosen = require('chosen');

    return Backbone.View.extend({
        el: '.s3_uploader',
        events: {
            "s3_upload_failed": "uploadFailed",
            "s3_upload_complete": "uploadComplete",
            "ajax:success": "uploadSuccessful"
        },
        initialize: function (options) {
            var that = this;

            this.$el.each(function() {
                $(this).S3Uploader({
                    remove_completed_progress_bar: true,
                    before_add: that.addImage
                });
            });

            $('.delete').on('confirm:complete', function(e, res) {
                if (res) {
                    that.removeImage($(this));
                }
            });

            $( document ).on( "click", "a.caption", function() {
                that.submitCaption($(this));
                return false;
            });
        },
        addImage: function(file) {
            var c = this.before_add.caller.arguments[0].target.id;

            var reader = new FileReader();
            reader.onload = (function (event) {
                if (c != 'extra') {
                    $("#" + c + ' #file').addClass('hide');
                }
                $('span.' + c).append('<span class="temp-image"><img src="' + event.target.result + '"></span>');
            });

            reader.readAsDataURL(file);

            return true;
        },
        submitCaption: function($elem) {
            var val = $elem.parent().parent().find('img').data('id');
            var captionval = $('#captionValue' + val).val();
            $('#caption'+val).html('<i class="fa fa-refresh fa-spin"></i>');
            $.ajax({url: $elem.attr('href') + "&caption="+captionval  });
            $('#caption'+val).html('Caption Updated to: <strong>' + captionval+'</strong>');
        },
        removeImage: function($elem) {
            var label = $elem.parent().parent().parent().attr('class');
            var val = $elem.find('img').data('id');
            this.updateInput(label);
            $('.s3_uploader.' + label + ' #file').removeClass('hide');
            $elem.remove();
            $('#captionrow'+val).remove();
        },
        updateInput: function(label, val) {
            val = val || '';
            var input = $('.checkin-form input[name="' + label + '_id"]');
            if (input) {
                input.val(val);
            }
        },
        uploadFailed: function (e, content) {
            $('.s3_uploader.' + label + ' #file').removeClass('hide');
            alert(content.filename + ' failed to upload');
        },
        uploadComplete: function (e, content) {
        },
        uploadSuccessful: function (e, data) {
            var label = e.currentTarget.id;

            // clear error label if it exists
            var errorLabel = $('label[for*="' + label + '_id"]');
            if (errorLabel.length > 0) {
                errorLabel.remove();
            }

            this.updateInput(label, data.id);
            var extra = '';
            if (label == 'extra') {
                extra = true;
            }

            var context = {
                checkinId: data.checkin_id,
                imageId: data.id,
                programId: data.program_id,
                extra: extra,
                imageSrc: $('span.temp-image img').attr('src')
            };

            $('span.' + label).append(HandlebarsTemplates['activities/deletable-image'](context));

            $('span.temp-image').remove();

            var that = this;
            $('span.' + label + ' .delete').on('confirm:complete', function(e, res) {
                if (res) {
                    that.removeImage($(this));
                }
            });
        }
    });
});