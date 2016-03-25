define(function (require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        Templates = require('handlebarsTemplates'),
        $ = require('jquery'),

        /**
         * 
         * @exports 'pennyPacker/views/details'
         */
        BaseEntryDetailsView = Backbone.View.extend({
            template:'',
            spinnerHTML: "<div class='status'><i class='fa fa-spin fa-spinner fa-2x'></div>",

            events: {
                'click .comment': 'createComment',
                'click .btn.adjust': 'adjustEntry'
            },

            initialize: function (options) {
                this.model = new (Backbone.Model.extend({
                    url: options.url
                }))();
                this.listenTo(this.model, 'sync', this.render);
            },

            fetch: function() {
                
                var self = this;
                this.$el.html(this.spinnerHTML);
                this.model.fetch()
                .done(function () {
                    self.render();
                });
            },

            render: function () {
                this.$el.html(Templates[this.template](this.model.toJSON()));
                return this;
            },

            createComment: function (e) {
                e.preventDefault();
                var $button = $(e.currentTarget),
                    $input = $button.prev('.comment-input'),
                    $commentsList = $input.prev('.comments-list'),
                    $emptyCommentsMessage = $commentsList.find('.empty-comments-message'),
                    $buttonSpinner = $(this.spinnerHTML),
                    comment = new (Backbone.Model.extend({
                        url: this.model.get('links').comments
                    }))();
                if ($input && $input.val()) {
                    $emptyCommentsMessage.remove();
                    $commentsList.append($(this.spinnerHTML));
                    $buttonSpinner.insertAfter($button);
                    $button.hide();
                    // add the row and make the text gray
                    comment.set({entryId: this.model.get('id'), text: $input.val()});
                    comment.save()
                        .done(function (data) {
                            $commentsList.children().last().remove();
                            $commentsList.append(Handlebars.partials.entry_comment(data));
                            $buttonSpinner.remove();
                            $button.show();
                            
                        })
                        .fail(function () {
                            //'Error time'
                            alert("There was an error saving comments. Please contact techsupport@thirdchannel.com");
                        });
                }
                
            },

            adjustEntry: function(e) {
                e.preventDefault();
                var $input = $(e.currentTarget).prev('.adjustment-input'),
                    self = this,
                    adjustment = new (Backbone.Model.extend({
                        url: this.model.get('links').adjust
                    }))();
                
                if ($input && $input.val() >= 0) {
                    adjustment.set({value: $input.val()});
                    adjustment.save()
                    .done(function (data) {
                        self.model.fetch();
                    })
                    .fail(function () {
                        alert("There was an error adjusting the entry. Please contact tech support");
                    });
                }
            }

        });

    return BaseEntryDetailsView;

});