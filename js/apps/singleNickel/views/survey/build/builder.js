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
            'click .up': 'moveUp',
            'click .down': 'moveDown',
            'click .clone': 'clone',
            'change select': 'updateInputChildren'
        },
        initialize: function() {
            _.bindAll(this, 'addChild', 'clone');
            if(this.model.children !== undefined) {
                this.listenTo(this.model.children, 'sort', this.renderChildren);
                this.listenTo(this.model.children, 'remove', this.renderChildren);
                this.listenTo(this.model.children, 'created', this.renderChildren);
            }
        },
        render: function(template) {
            if (template === undefined) {
                template = this.model.isNew() ? this.editTemplate : this.showTemplate;
            }
            this.$el.html(template(this.model));
            this.bindValidation();
            this.renderChildren();
            return this;
        },
        renderChildren: function(){
            this.children = this.model.children;
            this.$('.children').empty();
            if (this.children !== undefined) {
                this.$childContainer = this.$('.children');
                this.children.each(this.addChild);
            }
        },
        add: function(e) {
            this.stopEvent(e);
            var child = this.children.add(this.model.childParams(), {sort: false});
            this.addChild(child);
        },
        addChild: function(child) {
            this.$childContainer.append(new Builder({model: child}).render().el);
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
        moveUp: function(e) {
            this.stopEvent(e);

            var collection = this.model.collection,
                index = collection.indexOf(this.model),
                currentIdx = this.model.get('idx');

            if(index > 0) {
                var modelToSwap = collection.at(index - 1);

                if(modelToSwap !== undefined) {
                    var swapIdx = modelToSwap.get('idx');

                    this.model.set('idx', swapIdx);
                    modelToSwap.set('idx', currentIdx);

                    collection.parent.updateChildIndices().done(function() {
                        collection.sort();
                    }).fail(function() {
                        context.trigger('error');
                    });
                }
            }
        },
        moveDown: function(e) {
            this.stopEvent(e);

            var collection = this.model.collection,
                lastIndex = collection.indexOf(collection.last()),
                index = collection.indexOf(this.model),
                currentIdx = this.model.get('idx');

            if(index < lastIndex) {
                var modelToSwap = collection.at(index + 1);

                if(modelToSwap !== undefined) {
                    var swapIdx = modelToSwap.get('idx');

                    this.model.set('idx', swapIdx);
                    modelToSwap.set('idx', currentIdx);

                    collection.parent.updateChildIndices().done(function() {
                        collection.sort();
                    }).fail(function() {
                        context.trigger('error');
                    });
                }
            }
        },
        delete: function(e) {
            this.stopEvent(e);
            if (confirm("Please confirm that you wish to delete this " + this.model.type) === true) {
                var self = this;
                this.model.destroy().done(function() {
                    self.remove();
                }).fail(function() {
                    context.trigger('error');
                });
            }
        },
        update: function(e) {
            this.stopEvent(e);
            var self = this,
                isNew = this.model.isNew();

            this.model.set(this.editsToJSON());
            if (this.model.isValid()) {
                this.model.save().success(function(){
                    self.render(self.showTemplate);

                    if(isNew) {
                        self.model.collection.trigger('created');
                    }

                    if (self.model.redirect !== undefined) {
                        Backbone.history.navigate(self.model.redirect());
                    }
                }).fail(function () {
                    context.trigger('error');
                });
            }
        },
        clone: function(e) {
            this.stopEvent(e);
            var self = this;

            if(this.model.createClone !== undefined) {
                this.model.createClone().success(function(response) {
                    self.model.collection.add(response);
                    var m = self.model.collection.get(response.id);
                    $('.content-holder').animate({
                        scrollTop: $('#' + m.type + '-' + m.id)[0].offsetTop
                    }, 500);
                }).fail(function() {
                    context.trigger('error');
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

            this.$el.find('input:disabled, select:disabled').each(function(){
                ret[self.$(this).attr('name')] = null;
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
