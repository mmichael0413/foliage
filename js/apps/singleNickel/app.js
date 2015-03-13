define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        BackboneValidatorPatch = require('backboneValidatorPatch'),
        Router = require('singleNickel/routers/main');

    var initialize = function(){
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});