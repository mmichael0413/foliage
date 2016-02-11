define(function (require) {

	var Backbone = require('backbone'),
        typeahead = require('typeahead'),
        Pikaday = require('pikaday'),
        validator = require('jquery-validate'),
		$ = require('jquery'),
		templates = require('handlebarsTemplates'),
        context =  require('context'),

		/**
		 * View for the DirectPayment
		 * 
		 * @type {View}
		 * @exports pennyPacker/views/programs/directPayment
		 */
		DirectPaymentView = {
			el: '#directPayment',
			events: {
				'click .submit': 'submit',
                'submit form': 'formSubmit'
			},


			render: function () {
                var data = {
                    links: context.content.links,
                    program: context.programId
                };
				this.$el.find(".body").html(templates['pennyPacker/programs/directPayment'](data));

                this.configureDatepicker();
                this.configureTypeahead(this.$el.find("#userTypeahead"));
                this.$el.find("form").validate();
				return this;
			},

            configureDatepicker: function () {
                //this.$el.find('.datepicker')
                var self = this,
                    $input = this.$el.find(".datepicker"),
                    datepicker = new Pikaday({field: $input[0],
                         format: 'ddd MMM DD YYYY',
                         bound: false,
                         onSelect : function(){
                             $input.val(datepicker.toString());
                         }});
                self.$el.find('.pika-single').addClass('col-1-1');
            },

            configureTypeahead: function($input) {
                $input.typeahead({
                    minLength:3,
                    highlight: true,
                    hint: true
                },
                {
                    source: this.typeaheadSource,
                    displayKey: "name",
                    templates: {
                    empty: "<div class='suggestion'>No Users Found</div>",
                    suggestion: templates['pennyPacker/programs/suggestion']
                  }
                }
                );
                this.$el.find(".twitter-typeahead").addClass("col-1-1");
            },

            typeaheadSource: function (query, cb) {
                $.getJSON(
                    "/person",
                    {
                        name: query,
                        program: context.programId
                    }
                )
                .done( function (results) {
                    cb(results);
                });

                
            },

            submit: function (e) {
                e.stopPropagation();
                e.preventDefault();
                this.$el.find("form").submit();
            }

		};

	return Backbone.View.extend(DirectPaymentView);
});