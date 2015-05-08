define(function (require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        /**
         * Represents the Base Row for an Entry in the list view
         * 
         * @exports 'pennyPacker/views/entry/row'
         */
        EntryRowView = {

            template: '',
            subViewClass: undefined,

            initialize: function (options) {
                this.model = options.model;
                this.listenTo(this.model, 'sync', this.render);
            },

            events: function () {
                // for some crazy reason, I can only get the events to work if I declare them as a 
                // function. Zero idea why
                return {
                    'click .validate'    : 'toggleValidation',
                    'click .details'     : 'toggleSubView'
                };
            },

            render: function () {
                console.log("Template: " + this.template);
                console.log(Templates);
                this.$el.html(Templates[this.template](this.model.toJSON()));
                this.decorate();
                return this;
            },
            decorate: function () {
                // use to adjuste the markup before it's inserted
            },

            toggleValidation: function (e) {
                e.preventDefault();
                e.stopPropagation();
                // add a little effect to the validation button
                this._toggleButtonSpinner($(e.currentTarget).find('i'));
                this.model.save("valid", !this.model.get('valid'), {patch:true});
            },

            toggleSubView: function (e) {
                e.preventDefault();
                this._toggleSubView($(e.currentTarget));
            },

            _toggleSubView: function ($button) {
                // toggle both the button class to make it solid, plus add the class which will 'reveal' the row
                $button.toggleClass('solid');
                //$itemRow.toggleClass('active');
                this.$el.toggleClass('active');
                // remove if present any existing SubViews
                // 
                if (this.subView) {
                    this._clearSubView();
                } else {
                    
                    this._createSubView($button);
                }
            },

            _clearSubView: function () {
                this.stopListening(this.subView);
                this.subView.remove();
                delete this.subView;
                // be sure to replace the target row we just destroyed
                //this.$el.append(Handlebars.partials.alert_details_empty_row());
                this.$el.append(Handlebars.partials.empty_sub_view());

            },
            _createSubView: function ($button) {
                var self = this;
                this.subView = new this.subViewClass({url: $button[0].href});
                this.subView.setElement(this.$el.find('.sub-view-container'));
                this.subView.fetch();
                this.listenTo(this.subView, "subview:close", function () {
                    self._toggleSubView($button);
                });
                
            },




            _toggleButtonSpinner: function ($btn) {
                $btn.toggleClass('ic_check');
                $btn.toggleClass('fa fa-spin fa-spinner');
            }

        };

    return Backbone.View.extend(EntryRowView);

});