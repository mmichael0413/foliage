define(function (require) {
    var $ = require('jquery');
    return {
        isMobile: {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            iPhone: function () {
                return navigator.userAgent.match(/iPhone/i);
            },
            iPad: function () {
                return navigator.userAgent.match(/iPad/i);
            },
            iPod: function () {
                return navigator.userAgent.match(/iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            },
            getPlatform: function () {
                if (this.Android()) {
                    return "Android";
                }
                else if (this.BlackBerry()) {
                    return "BlackBerry";
                }
                else if (this.iPhone()) {
                    return "iPhone";
                }
                else if (this.iPad()) {
                    return "iPad";
                }
                else if (this.iPod()) {
                    return "iPod";
                }
                else if (this.Opera()) {
                    return "Opera";
                }
                else if (this.Windows()) {
                    return "Windows";
                }
                else {
                    return "Not Mobile";
                }
            }
        }
    };
});