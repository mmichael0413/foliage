define(function (require) {
    return {
        titleize : function(text) {
            if (text) {
                return text.split(' ').map(function (s) {
                    return s.length <= 1 ? s.toUpperCase() : s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
                }).join(" ");
            } else {
                return "";
            }
        }
    };
});