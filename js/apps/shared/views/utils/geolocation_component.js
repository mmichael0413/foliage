define(function(require) {
    var context = require('context'),
    
    GeolocationComponent = {
        verifyGeolocation: function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    this.addGeolocationToForm(position);
                }.bind(this), function(error) {
                    this.handleGeolocationError(error);
                }.bind(this));
            } else {
              console.log('Geolocation is not supported by this browser.');
            }
        },
        addGeolocationToForm: function(position) {
            if (position.coords !== undefined) {
                $.each(position.coords, function(key, value) {
                    this.$('form input[name="exif[' + key + ']"]').val(value);
                }.bind(this));
            }
            if (position.timestamp !== undefined) {
                this.$('form input[name="exif[timestamp]"]').val(position.timestamp);
            }
        }.bind(this),
        handleGeolocationError: function(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    console.log("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.log("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.");
                    break;
            }
        }
    };

    return GeolocationComponent;
});