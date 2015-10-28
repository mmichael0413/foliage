define(function (require) {
    var Backbone = require('backbone'),
        EditProfileView = require('erudition/views/profile/edit'),
        context = require('context'),
        templates = require('handlebarsTemplates');


    return EditProfileView.extend({
        initialize: function (options) {
            this.programId = options.programId;

            var templateString = options.template ? options.template : 'erudition/profile/edit';
            this.template = templates[templateString];
            this.person = context.content.person;
            this.aboutPhotoCount = this.person.aboutPhotos ? this.person.aboutPhotos.length - 1 : 0;
            $('#phone').mask('(000) 000-0000');
            this.listenTo(context, 'image:added', this.imageAdded);
            this.listenTo(context, 'image:deleted', this.handleDeletedImage);

        },


        render: function () {
            var person = context.content.person,
                interests = context.content.interests,
                graduationYears = context.content.graduationYears,
                states = context.content.states,
                uploader = context.content.uploader;

            var choices = ['ThirdChannel Invite', 'Professor', 'Department Head', 'Activities Advisor', 'Greek Life President',
                'Resident Assistant', 'Orientation Leader', 'Tour Guide', 'ThirdChannel Agent', 'None of the above'];

            var model = {
                person: person,
                interests: interests,
                graduationYears: graduationYears,
                states: states,
                s3: uploader,
                programId: this.programId,
                choices: choices
            };

            this.$el.append(this.template(model));
            this.beginValidation();
            this.configureAutocomplete();
            this.initializePhotoUpload();
            return this;
        }
    });
});