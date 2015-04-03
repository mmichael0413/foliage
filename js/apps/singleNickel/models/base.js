define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        id: '',
        childrenCollection: undefined,
        events: {},
        initialize: function(options) {
            _.bindAll(this, 'surveyLockChange');
            this.options = options.options || {};
            this.options[this.type + "Id"] = this.id;
            if (!_.isUndefined(options.attributes)) this.set(options.attributes);
            if (_.isFunction(this.childrenCollection)) {
                this.children = new this.childrenCollection((options.children || []), this.options);
                this.listenTo(this.children, 'sort', this.updateChildIndices);
            }
            if(this.options.survey !== undefined) {
                this.listenTo(this.options.survey, 'change:locked', this.surveyLockChange);
            }
            this.setEvents();
            this.setup();
        },
        setEvents: function() {
            var model = this;
            _.each(this.events, function(value, key) {
                var method = value;
                if (!_.isFunction(method)) method = model[value];
                if (method) model.on(key, method);
            });
        },
        setup: function() {
            // Used by other models that inherit this model as a means for initialize
        },
        parse: function (resp, options) {
            if (!_.isUndefined(resp)) {
                if (!_.isUndefined(resp.children)) {
                    this.children.reset(resp.children);
                    delete resp.children;
                }
            }
            return resp;
        },
        updateChildren: function() {
            this.options[this.type + "Id"] = this.id;
            if (!_.isUndefined(this.children)) {
                this.children.options = this.options;
            }
        },
        updateChildIndices: function() {
            // not sure if there's a better way at getting the type of the children
            var childAttributes = this.children.at(0).type + '_attributes';

            var attributes = {};
            attributes[childAttributes] = [];

            this.children.each(function(child) {
                attributes[childAttributes].push({
                    id: child.id,
                    idx: child.get('idx')
                });
            });

            // TODO:
            // Ideally, would like updateChildIndices be called from where the action actually happened (moveUp or moveDown in the builder)
            // For that to happen either the child models need to know or the collection of the child objects needs to know the parent object.
            this.save(attributes, {patch: true}).error(function() {
               context.trigger('error');
            });
        },
        childParams: function() {
            return {
                options: this.options,
                attributes: {
                    idx: this.children.models.length
                }
            };
        },
        optionalValidation: function(value) {
            return (value !== undefined) && (value === '') ? 'Required' : true;
        },
        surveyLockChange: function(survey) {
            this.set('locked', survey.get('locked'));
        }
    });
});