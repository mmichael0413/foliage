define(function(require){
    var BaseModel = require('singleNickel/models/base'),
        Questions = require('singleNickel/collections/questions');

    return BaseModel.extend({
        type:  "section",
        childType: 'question',
        childrenCollection: Questions,
        templates: {
            edit: "editSection",
            show: "showSection"
        },
        events: {
            'change:id': "updateChildren"
        },
        createClone: function(opts) {
            var options = {
                url: this.url() + '/clone',
                type: 'POST'
            };

            _.extend(options, opts);

            return (this.sync || Backbone.sync).call(this, null, this, options);
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
            }]
        }
    });
});