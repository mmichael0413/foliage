define(function(require){
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function(options){
            this.url = options.url;
            this.attributes['X-Requested-With'] ='xhr';
            $.extend(this.attributes, options.policy);
            this.set({key : this.get('key').replace('{timestamp}', new Date().getTime()).replace('{unique_id}', Math.random().toString(36).substr(2, 16))});
        },
        parse: function(data, options)  {
            return {s3location: data.children[0].textContent};
        },
        sync: function(method, model, options){
            if(method == 'create'){
                var formData = new FormData();

                _.each(model.attributes, function(value, key){
                    if (key === 'file') {
                        formData.append('content-type', value.type);
                    }

                    if (key !== 'url') {
                        formData.append(key, value);
                    }
                });

                _.defaults(options || (options = {}), {
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: "xml",
                    xhr: function(){
                        var xhr = $.ajaxSettings.xhr();
                        xhr.upload.onprogress = function(event) {
                            if (event.lengthComputable) {
                                model.trigger('progress', ((event.loaded / event.total) * 100).toFixed(2));
                            }
                        };
                        xhr.upload.onload = function(){
                            model.trigger('complete', 100);
                        };
                        return xhr;
                    }
                });
            }
            this._xhr = Backbone.sync.call(this, method, model, options);

            return this._xhr;
        },
        abort: function () {
            this._xhr.abort();
        }

    });
});