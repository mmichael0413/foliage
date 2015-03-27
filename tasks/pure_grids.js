/**
 * pure_grids
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        responsive: {
            dest: 'css/scss/lib/pure.responsive-grid.scss',

            options: {
                units: [2, 3, 4, 5, 7, 12], // 5-column grid and 12-column grid

                mediaQueries: {
                    //xl: 'screen and (max-width: 80em)'    // 1280px
                    //lg: 'screen and (max-width: 64em)',   // 1024px
                    md: 'screen and (max-width: 48em)',   // 768px
                    sm: 'screen and (max-width: 35.5em)' // 568px
                },
                selectorPrefix: '.col-'
            }
        }
    };
};