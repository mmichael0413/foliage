define(function(require) {
    var Backbone = require('backbone'),
        BackboneValidator = require('backboneValidator'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var Builder =  Backbone.View.extend({
        editTemplate: HandlebarsTemplates['singleNickel/survey/build/edit'],
        showTemplate: HandlebarsTemplates['singleNickel/survey/build/show'],
        events: {
            'click .add': 'add',
            'click .edit': 'edit',
            'click .delete': 'delete',
            'click .save': 'update',
            'click .cancel': 'cancel',
            'change select': 'updateInputChildren'
        },
        initialize: function(options) {
            this.model = options.model;
        },
        render: function(template) {
            this.$el.html((template || this.editTemplate)(this.model));
            this.bindValidation();
            this.renderChildren();
            return this;
        },
        renderChildren: function(){
            this.children = this.model.children;
            if (this.children !== undefined) {
                this.$childContainer = this.$el.find('.children');
                this.children.each(function(value, index){
                    this.addChild(value);
                }.bind(this));
            }
        },
        add: function(e) {
            this.stopEvent(e);
            this.addChild();
        },
        addChild: function(child) {
            var self = this;
            child = child || this.children.add(this.model.childParams());

            if (child.isNew()) {
                self.$childContainer.append(new Builder({model: child}).render().$el);
            } else {
                this.fetchChild(child);
            }
        },
        fetchChild: function(child) {
            var self = this;
            child.fetch().success(function(){
                self.$childContainer.append(new Builder({model: child}).render().$el);
            }).fail(function () {
                alert('An error has occurred.  Please contact Andrew!');
            });
        },
        edit: function(e) {
            this.stopEvent(e);
            this.render(this.editTemplate);
        },
        cancel: function(e) {
            this.stopEvent(e);
            if (this.model.isNew()) {
                this.remove();
            } else {
                this.render(this.showTemplate);
            }
        },
        delete: function(e) {
            this.stopEvent(e);
            if (confirm("Please confirm that you wish to delete this " + this.model.type) === true) {
                this.remove();
            }
        },
        update: function(e) {
            this.stopEvent(e);
            var self = this;
            this.model.set(this.editsToJSON());
            if (this.model.isValid()) {
                this.model.save({}, {wait: true}).success(function(){
                    self.render(self.showTemplate);
                }).fail(function () {
                    alert('An error has occurred.  Please contact Andrew!');
                });
            }
        },
        stopEvent: function(e) {
            e.stopPropagation();
            e.preventDefault();
        },
        editsToJSON: function(){
            var self = this,
                ret = {};

            this.$el.find('input:enabled, select:enabled').each(function(){
                var input = self.$(this);
                ret[input.attr('name')] = input.val() || '';
            });

            return ret;
        },
        updateInputChildren: function(e, data) {
            var element = this.$el.find(e.target).find('option:selected');
            this.$el.find(element.data('showSiblings')).show().find('select, input').prop( "disabled", false );
            this.$el.find(element.data('hideSiblings')).hide().find('select, input').val('').prop( "disabled", true );
        }
    });

    return Builder;
});
