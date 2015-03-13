define(function(require){
    var Backbone = require('backbone'),
        BackboneValidator = require('backboneValidator');
        
    return Backbone.Model.extend({
        type:  "choice",
        templates: {
            edit: "editChoice",
            show: "showChoice"
        },
        lookUps: {
            triggers: {
                true: "Yes",
                false: "No"
            }
        },
        validation: {
            title: [{
                required: true,
                message: "Required"
            },{
                minLength: 2,
                message: "The name is too short, please enter at name with at least 2 characters"
            },{
                maxLength: 255,
                message: "The name is too long, please enter at name with at most 255 characters"
            }],
            triggers: {
                required: true,
                message: "Required"
            }
        }
    });
});