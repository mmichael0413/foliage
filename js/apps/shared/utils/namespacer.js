define(function(require){

    var namespaces = []; // cache the known namespace strings
    return function(ns) {
        'use strict';

        if (namespaces.indexOf(ns) === -1) {
            var segments = ns.split(".").reverse(),
            /*
             Inner recursive function to add a new object if not defined
             */
                createSegment = function (segments, currentSegment) {
                    if (segments.length === 0) {
                        return;
                    }
                    var segment = segments.pop();
                    // prevent overwriting of existing segment
                    if(currentSegment[segment] === undefined) {
                        currentSegment[segment] = {};
                    }
                    createSegment(segments, currentSegment[segment]);
                };
            namespaces.push(ns);
            createSegment(segments, window);
        }
    };

    /*
        Usage:
     namespacer("bootstrap");
     namespacer("bootstrap.foo.bar");
     namespacer("foo.controllers.someControllerGrouping");

     */


});