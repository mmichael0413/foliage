define(function(require) {
    var $ = require('jquery'),
        Charts = require('chartjs');

    var Delta, VideoTooltip, Quill, Tooltip, dom, _,
        __hasProp = {}.hasOwnProperty,
        __extends = function (child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }
            function ctor() {
                this.constructor = child;
            }

            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };

    Quill = require('quill');

    Tooltip = Quill.modules.tooltip;

    _ = Quill.require('lodash');

    dom = Quill.require('dom');

    Delta = Quill.require('delta');

    VideoTooltip = (function (_super) {
        __extends(VideoTooltip, _super);

        VideoTooltip.DEFAULTS = {
            styles: {
                '.video-tooltip-container': {
                    'padding': '10px',
                    'width': '80%',
                    'max-width': '30rem'
                },
                '.video-tooltip-container:after': {
                    'clear': 'both',
                    'content': '""',
                    'display': 'table'
                },
                '.video-tooltip-container .input': {
                    'box-sizing': 'border-box',
                    'width': '100%'
                },
                '.video-tooltip-container a': {
                    'border': '1px solid black',
                    'box-sizing': 'border-box',
                    'display': 'inline-block',
                    'float': 'left',
                    'padding': '5px',
                    'text-align': 'center',
                    'width': '50%'
                }
            },
            template: '<div><b>YouTube Embedded Link String:</b></div><input class="input" type="textbox" placeholder="<iframe></iframe>"> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a>'
        };

        function VideoTooltip(quill, options) {
            this.quill = quill;
            this.options = options;
            this.options.styles = _.defaults(this.options.styles, Tooltip.DEFAULTS.styles);
            this.options = _.defaults(this.options, Tooltip.DEFAULTS);
            VideoTooltip.__super__.constructor.call(this, this.quill, this.options);
            this.textbox = this.container.querySelector('.input');
            dom(this.container).addClass('video-tooltip-container');
            this.initListeners();
        }

        VideoTooltip.prototype.initListeners = function () {
            dom(this.container.querySelector('.insert')).on('click', _.bind(this.insertVideo, this));
            dom(this.container.querySelector('.cancel')).on('click', _.bind(this.hide, this));
            this.initTextbox(this.textbox, this.insertVideo, this.hide);
            return this.quill.onModuleLoad('toolbar', (function (_this) {
                return function (toolbar) {
                    return toolbar.initFormat('video', _.bind(_this._onToolbar, _this));
                };
            })(this));
        };

        VideoTooltip.prototype.insertVideo = function () {
            var index, html;
            html = this.textbox.value;
            if (this.range == null) {
                this.range = new Range(0, 0);
            }
            if (this.range) {
                this.textbox.value = '';
                index = this.range.end;

                this.quill.setHTML(html);
                this.quill.setSelection(index + 1, index + 1);
            }
            return this.hide();
        };

        VideoTooltip.prototype._onToolbar = function (range, value) {
            if (value) {
                if (!this.textbox.value) {
                    this.textbox.value = '';
                }
                this.show();
                this.textbox.focus();
                return _.defer((function (_this) {
                    return function () {
                        return _this.textbox.setSelectionRange(_this.textbox.value.length, _this.textbox.value.length);
                    };
                })(this));
            } else {
                return this.quill.deleteText(range, 'user');
            }
        };

        return VideoTooltip;

    })(Tooltip);

    Quill.registerModule('video-tooltip', VideoTooltip);
});