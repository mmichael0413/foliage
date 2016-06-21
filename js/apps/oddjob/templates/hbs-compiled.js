define(['handlebars'], function(Handlebars) {

this["oddjob"] = this["oddjob"] || {};
this["oddjob"]["templates"] = this["oddjob"]["templates"] || {};

Handlebars.registerPartial("loading", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section loading-section\">\n    <div class=\"loading\">\n        <div class=\"fa fa-spin ic_processing\"></div> Loading...\n    </div>\n</div>\n\n";
  }));

Handlebars.registerPartial("content", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <i class=\"ic fa ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <span>";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.text), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }));

Handlebars.registerPartial("nav_item", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "active";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-bypass=\"";
  if (helper = helpers.bypass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bypass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <i class=\"ic ";
  if (helper = helpers.icon2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n    ";
  return buffer;
  }

  buffer += "<a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"nav-item ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (helper = helpers.className) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.className); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.bypass), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <i class=\"ic ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n    <span class=\"link\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon2), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>";
  return buffer;
  }));

Handlebars.registerPartial("job_fields", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "checked";
  }

function program8(depth0,data) {
  
  
  return "disabled";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <option value=\"";
  if (helper = helpers.uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n            ";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div class=\"form-section clearfix\">\n    <label class=\"label\" for=\"jobName\">Name</label>\n    <input class=\"input\" type=\"text\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"name\" id=\"jobName\" placeholder=\"Enter Optional name here\"/>\n\n    <label for=\"role\" class=\"label\">Limit Job to Role: </label>\n    <select name=\"role\" id=\"role\" class=\"input\">\n        <option value=\"\">Anyone</option>\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.roles) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.roles); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.roles) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n\n    \n    <label for=\"edit-blackout-schemes\" class=\"label\">Blackout Schemes: </label>\n    <select id=\"edit-blackout-schemes\" name=\"blackoutSchemes\" class=\"input\" multiple data-placeholder=\"Assign Blackout Schemes\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.programBlackoutSchemes), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    \n</div>\n\n<section id=\"tasks\" class=\"form-section clearfix\">\n    <h3>Activities</h3>\n    <div class=\"header pure-g\">\n        <p class=\"col-3-12 header-item\">Type</p>\n        <p class=\"col-3-12 header-item\">Activity / Packet</p>\n        <p class=\"col-1-12 header-item\">Duration</p>\n        <p class=\"col-1-12 header-item\">Hourly Rate</p>\n        <p class=\"col-1-12 header-item\">Payable</p>\n        <p class=\"col-1-12 header-item\">Billable</p>\n        <p class=\"col-1-12 header-item\">Required</p>\n        <p class=\"col-1-12 header-item\"></p>\n    </div>\n    <div class=\"tasks-container\"></div>\n    <div class=\"btn-row pure-g\">\n        <div class=\"col-11-12\"></div>\n        <button class=\"btn add-task col-1-12\"><i class=\"fa fa-plus\"></i>&nbsp;Add</button>    \n    </div>\n    \n    <div class=\"summary pure-g\" id=\"jobSummary\"></div>    \n</section>\n\n\n<div class=\"form-section\">\n    <div class=\"form-group\">\n        <label for=\"allowRescheduling\" class=\"\">Allow Job to be Rescheduled After Schedule Finalization?</label>\n        <input type=\"checkbox\" class=\"input-checkbox\" name=\"allowRescheduling\" id=\"allowRescheduling\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.allowRescheduling), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>    \n    </div>\n    \n    <div class=\"form-group\">\n        <label for=\"jobTracked\" class=\"\">Enable Job Tracking (Special Project Tracking)?</label>\n        <input type=\"checkbox\" class=\"input-checkbox job-tracking\" name=\"tracked\" id=\"jobTracked\" ";
  options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}
  if (helper = helpers.tracked) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.tracked); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.tracked) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>    \n    </div>\n</div>\n\n<section id=\"jobTrackingText\" class=\"form-section\">\n    <div class=\"form-group\">\n        <label for=\"jobTarget\" class=\"\">Completion Target (%)</label>\n        <input type=\"number\" class=\"input job-target\" name=\"target\" id=\"jobTarget\" value=\"";
  if (helper = helpers.target) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.target); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.tracked), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n    </div>\n    <br>\n    <div class=\"form-group\">\n        <label for=\"report\" class=\"\">Report</label>\n        <select name=\"reportUUID\" id=\"report\" class=\"input job-report\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.tracked), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            <option value=\"\">--Select a Report--</option>\n            ";
  options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data}
  if (helper = helpers.reports) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.reports); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.reports) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n    </div>\n    <br><br>\n    <div style=\"clear: both;\">\n        <p class=\"instruction\"><span class=\"important\">Note:</span> For now, any jobs we wish to track must have only one task and one frequency assigned to them. Or rather, only the first task's survey will be tracked, and the first frequency will be used for the start and end date of the tracking. We hope to change this in the future.</p>\n        <label for=\"editor\">Completion Instructions</label>\n        <input type=\"hidden\" name=\"completionInstructions\" id=\"completionInstructions\" value=\"";
  if (helper = helpers.completionInstructions) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.completionInstructions); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n        <div class=\"editor-container message-content\">\n            <div id=\"full-toolbar\" class=\"toolbar ql-toolbar-container\">\n              <span title=\"Bold\" class=\"ql-format-button ql-bold\"></span>\n              <span title=\"Italic\" class=\"ql-format-button ql-italic\"></span>\n              <span title=\"Italic\" class=\"ql-format-button ql-underline\"></span>\n              <span class=\"ql-format-separator\"></span>\n              <span title=\"Italic\" class=\"ql-format-button ql-bullet\"></span>\n              <span title=\"Italic\" class=\"ql-format-button ql-list\"></span>\n            </div>\n            <div id=\"editor\">\n              <div></div>\n            </div>\n        </div>\n    </div>\n</section>\n";
  return buffer;
  }));

this["oddjob"]["templates"]["shared/layout/action_buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "link", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "link", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "button", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "button", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn ";
  if (helper = helpers.className) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.className); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  stack1 = self.invokePartial(partials.content, 'content', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <button class=\"btn ";
  if (helper = helpers.className) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.className); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  stack1 = self.invokePartial(partials.content, 'content', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </button>\n    ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.buttons), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["oddjob"]["templates"]["shared/layout/main_navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.hidden), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = self.invokePartial(partials.nav_item, 'nav_item', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

  buffer += "<div class=\"navigation\">\n    <div class=\"logo\">\n        <a href=\"";
  if (helper = helpers.homeLink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.homeLink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n        <span class=\"ic ic_logo\"></span>\n        <span class=\"third hidden-xs\">\n            THIRD<span class=\"gray-regulartext channel\">CHANNEL</span>\n        </span>\n        </a>\n    </div>\n\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.navItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <a href=\"javascript:void(0)\" class=\"collapse-nav nav-item minor-s\">\n        <i class=\"ic ic_left\"></i>\n        <span class=\"link\">Collapse</span>\n    </a>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["shared/layout/toggle_filter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<button class=\"btn default toggle-filter\">\n    <i class=\"ic fa ic_filter\"></i>\n</button>";
  });

this["oddjob"]["templates"]["shared/s3uploader/application_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <img src=\"";
  if (helper = helpers.source) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image_src), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <img src=\"";
  if (helper = helpers.image_src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.source), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n"
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.inputTemplate), depth0, options) : helperMissing.call(depth0, "partial", (depth0 && depth0.inputTemplate), depth0, options)))
    + "\n<div class=\"delete\">\n    <a class=\"btn primary removeImage\"><i class=\"ic ic_x\"></i>Delete</a>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["shared/s3uploader/checkin_group_label_options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=\"";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n";
  return buffer;
  }

  buffer += "<option value=\"\">Select corresponding before image label...</option>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.labels), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["oddjob"]["templates"]["shared/s3uploader/checkin_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <img src=\"";
  if (helper = helpers.source) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.temp_location), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <img src=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n            ";
  return buffer;
  }

  buffer += "<div class=\"holder\">\n    <div class=\"image\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.source), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"delete\">\n        <button class=\"btn primary\"><i class=\"ic ic_x\"></i><span>Delete Image</span></button>\n    </div>\n    <div class=\"description\">\n        <label>Description:</label>\n        <input type=\"text\" class=\"image_label\" data-attribute=\"label\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][label]\" value=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n    <input type=\"hidden\" class=\"image_id\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][id]\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input type=\"hidden\" class=\"image_temp_location\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][temp_location]\" value=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["shared/s3uploader/checkin_image_group_select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <img src=\"";
  if (helper = helpers.source) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.temp_location), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <img src=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n            ";
  return buffer;
  }

  buffer += "<div class=\"holder\">\n    <div class=\"image\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.source), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"delete\">\n        <button class=\"btn primary\"><i class=\"ic ic_x\"></i><span>Delete Image</span></button>\n    </div>\n    <div class=\"description\">\n        <label>Description:</label>\n        <select class=\"image_label\" data-attribute=\"label\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][label]\">\n            <option value=\"\">Select corresponding before image label...</option>\n        </select>\n    </div>\n    <input type=\"hidden\" class=\"image_id\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][id]\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input type=\"hidden\" class=\"image_temp_location\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][temp_location]\" value=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["shared/s3uploader/error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"uploader-error\">\n    <div class=\"pull-right error-close ic ic_x\"></div>\n    <div class=\"message\">The image uploader has encountered an error.  This is most likely due to a bad internet connection.  Please check your connection and try again or wait until you can get a better connection.</div>\n</div>\n";
  });

this["oddjob"]["templates"]["shared/s3uploader/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <img src=\"";
  if (helper = helpers.source) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.temp_location), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <img src=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\">\n            ";
  return buffer;
  }

  buffer += "<div class=\"holder\">\n    <div class=\"image\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.source), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"delete\">\n        <button class=\"btn primary\"><i class=\"ic ic_x\"></i><span>Delete Image</span></button>\n    </div>\n    <div class=\"description\">\n        <label>Description:</label>\n        <input type=\"text\" name=\"label\" value=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n</div>\n<div class=\"clear\"></div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["shared/s3uploader/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\" holder\">\n    <div class=\"image\">\n        <img src=\"";
  if (helper = helpers.source) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"63840\" alt=\"Image\" >\n    </div>\n    <div class=\"delete\">\n        <button class=\"btn primary cancel\"><i class=\"ic fa ic_x\"></i><span>Cancel Upload</span></button>\n    </div>\n    <div class=\"progress-container\">\n        <div class=\"progress\">\n            <div class=\"bar\"></div>\n        </div>\n        <div class=\"percentage\">0%</div>\n    </div>\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/blackout_schemes/blackout_scheme"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	<div class=\"section\">\n		Warning: Changes to this blackout scheme will affect the following jobs:\n		<ul>\n			";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.assignedJobs) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.assignedJobs); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.assignedJobs) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n				<li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n			";
  return buffer;
  }

  buffer += "<h1 class=\"title\">Editing Blackout Scheme</h1>\n\n<div class=\"actions\" id=\"blackout-scheme-save\">\n	<button class=\"btn primary\" id=\"blackout-scheme-delete\">\n		<i class=\"ic fa ic_remove\"></i>\n		<span>Delete</span>\n	</button>\n	<button class=\"btn primary\" id=\"blackout-scheme-save\">\n		<i class=\"ic fa ic_check\"></i>\n		<span>Save</span>\n	</button>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.assignedJobs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"section\">\n	<h3>Name</h3>\n	<input id=\"blackout-scheme-name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.blackoutScheme)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" required>\n</div>\n\n<div class=\"section\">\n	<h3>Dates</h3>\n	<button id=\"blackout-scheme-date-add\">Add Date</button>\n	<div id=\"blackout-scheme-dates\">\n	</div>\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/blackout_schemes/date_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"blackout-scheme-date-row\">\n<input class=\"blackout-scheme-date-input\" type=\"date\" required value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">\n<button class=\"blackout-scheme-date-remove\">Remove</button>\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/frequencies/row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <option value=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "x</option>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

  buffer += "<p class=\"col-2-12\">Frequency</p>\n<p class=\"col-2-12 info\">Monthly</p>\n\n<select class=\"col-1-4\" name=\"monthlyVisits[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "]\" id=\"monthlyVisits\">\n    ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.visitOptions) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.visitOptions); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.visitOptions) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n<p class=\"col-4-12\"></p>\n\n<p class=\"col-2-12\">Start Date</p>\n<input  name=\"begin[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "]\" class=\"col-3-12 datepicker begin\" value=\"";
  if (helper = helpers.begin) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.begin); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" readonly=\"readonly\"/>\n\n<p class=\"col-1-12\"></p>\n\n<p class=\"col-2-12\">End Date</p>\n<input  name=\"end[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "]\" class=\"col-3-12 datepicker end\" value=\"";
  if (helper = helpers.end) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.end); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" readonly=\"readonly\"/>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/jobs/create"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<h3>Create New Job</h3>\n";
  stack1 = self.invokePartial(partials.job_fields, 'job_fields', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<button type=\"submit\" name=\"submit\" class=\"btn btn-primary job-submit\">Submit</button>";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/jobs/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<h3>Edit Job</h3>\n";
  stack1 = self.invokePartial(partials.job_fields, 'job_fields', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div>\n    <button type=\"submit\" name=\"submit\" class=\"btn btn-primary job-submit\">Submit</button>\n    <button name=\"delete\" class=\"btn btn-primary delete\">Delete Job</button>\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/jobs/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"job section\">\n	<div class=\"header pure-g\">\n		<h3 class=\"col-6-12\">Job Name</h3>\n		<h3 class=\"col-2-12\">Duration</h3>\n		<h3 class=\"col-2-12\">Total Payment</h3>\n		<h3>&nbsp;</h3>\n	</div>\n</div>";
  });

this["oddjob"]["templates"]["oddjob/jobs/row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " only)";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "( Tracked )";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <th>";
  if (helper = helpers['short']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['short']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n            ";
  return buffer;
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <tr class=\"schedule-row\">\n                    <td><a href=\""
    + escapeExpression(((stack1 = (depth1 && depth1.createScheduleUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.programStoreCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.programStoreCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n                    ";
  options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}
  if (helper = helpers.monthlyVisits) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.monthlyVisits); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.monthlyVisits) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tr>\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <td>";
  if (helper = helpers.visits) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.visits); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n                <tr><td colspan=\"14\" class=\"info\">There are no Schedules or store assignments for this Job. Click 'Create New Schedule' to get started.</td></tr>\n            ";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<ul class=\"col-1-1\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.blackoutSchemes), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<li>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n			";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "\n		<div class=\"col-1-1\">No blackout schemes assigned.</div>\n	";
  }

function program17(depth0,data) {
  
  
  return "not";
  }

  buffer += "<div class=\"header pure-g\">\n	<h3 class=\"col-6-12\"><a href=\"";
  if (helper = helpers.editUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.role) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.role); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.role) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.tracked) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.tracked); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.tracked) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n	<span class=\"col-2-12\">";
  if (helper = helpers.displayDuration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayDuration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span class=\"col-2-12\">$";
  if (helper = helpers.displayTotalPayment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayTotalPayment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <span class=\"col-2-12\"><button class=\"btn btn-primary toggleTasks\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Show Tasks</button></span>\n</div>\n\n<div class=\"tasks-container tasks-container";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n\n<div class=\"frequencies-container frequencies-container";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " pure-g\">\n    <h3 class=\"col-1-1 frequency-row\">Schedules:</h3>\n    <table class=\"col-1-1\">\n        <colgroup>\n        </colgroup>\n        <thead>\n            <th>Stores</th>\n            ";
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.scheduleDates) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.scheduleDates); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.scheduleDates) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </thead>\n        <tbody>\n            ";
  options={hash:{},inverse:self.program(10, program10, data),fn:self.programWithDepth(7, program7, data, depth0),data:data}
  if (helper = helpers.scheduleSummaries) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.scheduleSummaries); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.scheduleSummaries) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(10, program10, data),fn:self.programWithDepth(7, program7, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    <div class=\"frequency-row col-1-1 static\"><a class=\"btn btn-primary primary\" href=\"";
  if (helper = helpers.createScheduleUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.createScheduleUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Create New Schedule</a></div> \n</div>\n\n<div class=\"blackout-schemes-container blackout-schemes-container";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " pure-g\">\n	<h3 class=\"col-1-1\">Blackout Schemes:</h3>\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.blackoutSchemes), {hash:{},inverse:self.program(15, program15, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"allow-rescheduling-container allow-rescheduling-container";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " pure-g\">\n	<div class=\"col-1-1\">This job <b>can";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.allowRescheduling), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b> be rescheduled after schedule finalization.</div>\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/jobs/summary"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<div class=\"col-3-12\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.types), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"col-3-12\"></div>\n<p class=\"col-1-12\">";
  if (helper = helpers.expectedDuration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.expectedDuration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12 cell right\">$";
  if (helper = helpers.expectedPayment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.expectedPayment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12 cell center\">";
  if (helper = helpers.payable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.payable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12 cell center\">";
  if (helper = helpers.billable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.billable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12 cell center\">";
  if (helper = helpers.required) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/schedule/row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"col-1-12 col-md-2-12 col-sm-4-12\"><p>";
  if (helper = helpers['short']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['short']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <select class=\"visits\" name=\"visits["
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "]\">\n        ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data}
  if (helper = helpers.visitOptions) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.visitOptions); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.visitOptions) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <option value=\""
    + escapeExpression(((stack1 = (depth1 && depth1.input)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "x</option>\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.scheduleDates) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.scheduleDates); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.scheduleDates) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<p class=\"col-2-12\">Start Date</p>\n<input  name=\"begin\" class=\"col-3-12 datepicker begin\" value=\"";
  if (helper = helpers.begin) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.begin); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n\n<p class=\"col-1-12\"></p>\n\n<p class=\"col-2-12\">End Date</p>\n<input  name=\"end\" class=\"col-3-12 datepicker end\" value=\"";
  if (helper = helpers.end) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.end); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/stores/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<p class=\"store-row\"><input type=\"checkbox\" name=\"ids\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"check\" ";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

function program4(depth0,data) {
  
  
  return "\n<p class=\"info\">No stores match your query</p>\n";
  }

  buffer += "<h3 class=\"title\">";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Possible Stores</h3>\n<div class=\"pagination-holder\"></div>\n";
  options={hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.programStores) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.programStores); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.programStores) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/stores/scheduled"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<p class=\"store-row\"><input type=\"checkbox\" name=\"ids\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"check\" ";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<h3 class=\"title\"><span id=\"storeCount\">";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> Stores</h3>\n<div class=\"pagination-holder\"></div>\n";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.programStores) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.programStores); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.programStores) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/stores/upload/confirm"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>Success! File appears to contain <span class=\"important\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.uuids)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " stores</span>, which should be added to the checked off items below.</p>";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/stores/upload/error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"error\">Could not process file <span class=\"important\">";
  if (helper = helpers.fileName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fileName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n<p>Reason: <span class=\"info\">";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n\n<p class=\"reminder\">Reminder, a valid store upload file must meet the following criteria:\n    <ul>\n        <li>Be a Microsoft .xls or .xlsx file.</li>\n        <li>Contain at least two rows, and the very first row must be headers.</li>\n        <li>Contain a column with the header <span class=\"important\">'uuid'</span>.</li>\n        <li>The <span class=\"important\">uuid</span> column must contain valid store UUIDs.</li>\n    </ul>\n</p>";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/stores/upload/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>Attempting to upload file: <span class=\"important\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n<i class=\"fa fa-spin fa-spinner fa-2x\"></i>\n";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/tasks/create"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <option value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "selected";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <option value=\"";
  if (helper = helpers.uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.selected) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "0";
  }

function program12(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<input name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].id\" type=\"hidden\" value=\"";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.id) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.id) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"/>\n\n<div class=\"col-3-12 cell\">\n    <select name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].type\" class=\"task-type\">\n    ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.types) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.types); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.types) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>    \n</div>\n\n\n<div class=\"col-3-12 cell\">\n    <select name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].trackableUuid\" class=\"survey\">\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}
  if (helper = helpers.trackableItems) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.trackableItems); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.trackableItems) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n</div>\n\n\n<div class=\"col-1-12 cell\">\n    <select name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].expectedDuration\" class=\"expected-duration\">\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}
  if (helper = helpers.durations) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.durations); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.durations) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n</div>\n\n\n<div class=\"col-1-12 cell right\">\n    <input name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].paymentRate\" type=\"number\" step=\"any\" placeholder=\"15.00\" class=\"payment-rate input cell right\" value=\"";
  options={hash:{},inverse:self.program(10, program10, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.displayPaymentRate) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.displayPaymentRate); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.displayPaymentRate) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(10, program10, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n</div>\n\n<div class=\"col-1-12 cell center\">\n    <input type=\"hidden\" value=\"on\" name=\"_tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].payable\"/>\n    <input name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].payable\" type=\"checkbox\" class=\"payable\" ";
  options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}
  if (helper = helpers.payable) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.payable); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.payable) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> </input>\n</div>\n\n<div class=\"col-1-12 cell center\">\n    <input type=\"hidden\" value=\"on\" name=\"_tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].billable\"/>\n    <input name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].billable\" type=\"checkbox\" class=\"billable\" ";
  options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}
  if (helper = helpers.billable) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.billable); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.billable) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> </input>\n</div>\n\n<div  class=\"col-1-12 cell center\">\n    <input type=\"hidden\" value=\"on\" name=\"_tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].required\"/>\n    <input name=\"tasks[";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].required\" type=\"checkbox\" class=\"required\" ";
  options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}
  if (helper = helpers.required) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.required) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> </input>\n</div>\n\n<div class=\"col-1-12 cell center\">\n    <i class=\"fa fa-trash remove\"></i>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["oddjob/tasks/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"job\">\n    <div class=\"header pure-g\">\n        <h3 class=\"col-6-12\">Task Name:</h3>\n        <h3 class=\"col-2-12\">Duration (Minutes)</h3>\n        <h3 class=\"col-2-12\">Hourly Rate</h3>\n        <h3 class=\"col-2-12\">Task Required?</h3>\n    </div>\n</div>";
  });

this["oddjob"]["templates"]["oddjob/tasks/row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "Yes";
  }

function program3(depth0,data) {
  
  
  return "No";
  }

  buffer += "<p class=\"title col-6-12\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-2-12\">";
  if (helper = helpers.expectedDuration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.expectedDuration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-2-12\">$";
  if (helper = helpers.displayPaymentRate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayPaymentRate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-2-12\">";
  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.required) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.required) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/filters/date_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"filter-component\" data-type=\"date\">\n  <div class=\"filter-item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"expand-indicator\"></span></div>\n  <div class=\"filter-list\">\n        <div class=\"filter-list-item\">\n          <p class=\"visible-xs\">Please enter the date:</p>\n          <input class=\"visible-xs\" type=\"datetime\"/>\n          <div class=\"datepicker\"></div>\n        </div>\n  </div>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/filters/filterable_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"filter-list-item flexible\" data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-filter=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"btn default\">&nbsp;</div><span>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n            <div class=\"no-results\">No results</div>\n        ";
  }

  buffer += "<div class=\"filter-component\">\n    <div class=\"filter-item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"expand-indicator\"></span></div>\n    <div class=\"filter-list filter-list-items\">\n        <div class=\"filter-list-search\">\n            <input type=\"text\" name=\"items-filter\" class=\"items-filter\">\n            <a href=\"#\" class=\"btn light clear-items-filter\"><i class=\"ic ic_x\"></i></a>\n        </div>\n        ";
  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.items) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.items); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/filters/hidden_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"global\" name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.items)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/filters/list_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"filter-list-item flexible\" data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"btn default\">&nbsp;</div><span>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n      <div class=\"no-results\">No results</div>\n  ";
  }

  buffer += "<div class=\"filter-item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"expand-indicator\"></span></div>\n<div class=\"filter-list\">\n  ";
  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.items) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.items); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/filters/spinner_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='filter-component spinner'>\n    <div class='filter-item'>\n        <i class='fa fa-spinner fa-spin'></i>\n    </div>\n</div>\"";
  });

this["oddjob"]["templates"]["thirdchannel/pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <nav class=\"pagination\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.firstPage), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lessPages), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.pages), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.morePages), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lastPage), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </nav>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            <span class=\"first page\">\n                <a href=\"?page=1\">1</a>\n            </span>\n        ";
  }

function program4(depth0,data) {
  
  
  return "\n            <span class=\"page gap\">...</span>\n        ";
  }

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.if_eq || (depth1 && depth1.if_eq),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.currentPage), depth0, options) : helperMissing.call(depth0, "if_eq", (depth1 && depth1.currentPage), depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <span class=\"page current\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <span class=\"page\">\n                    <a href=\"?page="
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a>\n                </span>\n            ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <span class=\"last page\">\n                <a href=\"?page=";
  if (helper = helpers.totalPages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalPages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.totalPages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalPages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n            </span>\n        ";
  return buffer;
  }

  buffer += "<div class=\"pagination-holder\">\n    <span class=\"pagination-info\"><strong>";
  if (helper = helpers.infoText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.infoText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong> of <strong>";
  if (helper = helpers.totalCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></span>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showPages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"tasks clearfix\">\n            <h3 class=\"tasks-label\">Tasks:</h3>\n            <div class=\"task-container\">\n                ";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.tasks) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.tasks); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.tasks) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <a class=\"task-item ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.active) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.active); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.active) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"";
  if (helper = helpers.href) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.href); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <div class=\"badge task-label col-md-1-2\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                    ";
  options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data}
  if (helper = helpers.has_summary) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.has_summary); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.has_summary) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  options={hash:{},inverse:self.program(7, program7, data),fn:self.program(9, program9, data),data:data}
  if (helper = helpers.has_photos) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.has_photos); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.has_photos) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(7, program7, data),fn:self.program(9, program9, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  options={hash:{},inverse:self.program(7, program7, data),fn:self.program(11, program11, data),data:data}
  if (helper = helpers.has_alerts) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.has_alerts); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.has_alerts) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(7, program7, data),fn:self.program(11, program11, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </a>\n                ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "active";
  }

function program5(depth0,data) {
  
  
  return "<div class=\"task-info badge col-md-1-7\"><i class=\"ic ic_feed-summary\"/></div>";
  }

function program7(depth0,data) {
  
  
  return "<span class=\"col-md-1-7\"></span>";
  }

function program9(depth0,data) {
  
  
  return "<div class=\"task-info badge col-md-1-7\"><i class=\"ic ic_feed-photos\"/></div>";
  }

function program11(depth0,data) {
  
  
  return "<div class=\"task-info badge col-md-1-7\"><i class=\"ic ic_feed-alerts\"/></div>";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <p>\n                    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.profile_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.store)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                    , "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </p>\n                ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <p class=\"activity-special-project\">\n                    ";
  if (helper = helpers.survey_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.survey_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </p>\n                ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), 0, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.issue_length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"issues-found\">\n                    <h3>";
  if (helper = helpers.issue_length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue_length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), "New Issue Found", "New Issues Found", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.issue_length), "New Issue Found", "New Issues Found", options)))
    + "</h3>\n                    <ul class=\"unstyled\">\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.issues), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </ul>\n                    ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.issue_length), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <li>- ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n                        ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"";
  if (helper = helpers.report_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.report_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><span class=\"indicator\">showing 3 of ";
  if (helper = helpers.issue_length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue_length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n                    ";
  return buffer;
  }

function program23(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "                \n                <h3>"
    + escapeExpression(((stack1 = (depth1 && depth1.subject)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n                <p>";
  stack1 = ((stack1 = (depth1 && depth1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>    \n            ";
  return buffer;
  }

function program25(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                <h3>There is no Summary for this "
    + escapeExpression(((stack1 = (depth1 && depth1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".</h3>\n            ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"activity-photos\">\n\n            <div class=\"carousel\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(28, program28, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.unless_eq || (depth0 && depth0.unless_eq),options={hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1.length), 1, options) : helperMissing.call(depth0, "unless_eq", ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1.length), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n\n        </div>\n        ";
  return buffer;
  }
function program28(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div>\n                    <div class=\"helper\">\n                        <img src=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-responsive\" onerror=\"this.src='"
    + escapeExpression(((stack1 = (depth1 && depth1.content_image_error_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\"/>\n                    </div>\n                    <div class=\"img-label\">";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                </div>\n\n                ";
  return buffer;
  }

function program30(depth0,data) {
  
  
  return "\n                <a href=\"#\" class=\"arrow arrow-left\">\n                    <span class=\"ic ic_left\"></span>\n                </a>\n                <a href=\"#\" class=\"arrow arrow-right\">\n                    <span class=\"ic ic_right\"></span>\n                </a>\n                ";
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a class=\"activity_like_button gray\" data-id=\"";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">\n                        Like\n                    </a>\n                    ";
  return buffer;
  }

function program34(depth0,data) {
  
  
  return "\n                     Liked\n                    ";
  }

function program36(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <span class=\"action bold\">\n                    <a href=\"";
  if (helper = helpers.report_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.report_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">Full Report</a>\n                </span>\n            ";
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"moderation-actions  visible-xs\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideable), {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        ";
  return buffer;
  }
function program39(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"action\"><a href=\"";
  if (helper = helpers.editable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Visit</a></span>\n                ";
  return buffer;
  }

function program41(depth0,data) {
  
  
  return "\n                    <span class=\"action\"><a href=\"#\" class=\"hide-post\">Hide Post</a></span>\n                ";
  }

function program43(depth0,data) {
  
  
  return "hidden-xs";
  }

function program45(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <span class=\"action\">\n                <a href=\"#\" class=\"more-comments\">View ";
  if (helper = helpers.additional_comments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.additional_comments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " More "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.additional_comments), "Comment", "Comments", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.additional_comments), "Comment", "Comments", options)))
    + "\n                </a>\n            </span>\n            ";
  return buffer;
  }

function program47(depth0,data) {
  
  
  return "\n        <div class=\"comment new-comment\">\n\n\n        </div>\n        ";
  }

function program49(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"moderation-actions\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(50, program50, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideable), {hash:{},inverse:self.noop,fn:self.program(52, program52, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  return buffer;
  }
function program50(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <span class=\"action\"><a href=\"";
  if (helper = helpers.editable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Visit</a></span>\n            ";
  return buffer;
  }

function program52(depth0,data) {
  
  
  return "\n            <span class=\"action\"><a href=\"#\" class=\"hide-post\">Hide Post</a></span>\n            ";
  }

  buffer += "<div class=\"activity-holder\">\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tasks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"activity\">\n        <div class=\"activity-meta\">\n            ";
  stack1 = self.invokePartial(partials.user_image, 'user_image', (depth0 && depth0.user_image), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <div class=\"bar-body\">\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.checkin_type), "special_project", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.checkin_type), "special_project", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <p>\n                    <span data-livestamp=\"";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span> <span>("
    + escapeExpression((helper = helpers.formatSecondsToDate || (depth0 && depth0.formatSecondsToDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "formatSecondsToDate", (depth0 && depth0.created_at), options)))
    + ")</span>\n                    by\n                    <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/profiles/";
  if (helper = helpers.user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.user_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n                </p>\n            </div>\n        </div>\n        <div class=\"activity-content\">\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"summary\">\n            ";
  options={hash:{},inverse:self.programWithDepth(25, program25, data, depth0),fn:self.programWithDepth(23, program23, data, depth0),data:data}
  if (helper = helpers.show_summary) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.show_summary); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.show_summary) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.programWithDepth(25, program25, data, depth0),fn:self.programWithDepth(23, program23, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            \n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <div class=\"activity-status visible-xs\">\n            <span class=\"action\">\n                <span class=\"like-count\" data-likecount=\"";
  if (helper = helpers.like_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.like_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.like_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.like_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <span class=\"like-label\">"
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.like_count), "Like", "Likes", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.like_count), "Like", "Likes", options)))
    + "</span>\n            </span>\n\n\n            <span class=\"action\">\n                <span> ";
  if (helper = helpers.comments_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comments_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.comments_count), "Comment", "Comments", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.comments_count), "Comment", "Comments", options)))
    + "\n                </span>\n            </span>\n\n        </div>\n\n        <div class=\"activity-actions\">\n                <span class=\"action bold\">\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_like_button), {hash:{},inverse:self.program(34, program34, data),fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n            <span class=\"action bold\">\n                <a href=\"#\" class=\"start-comment\">Comment</a>\n            </span>\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(36, program36, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"action bold\">\n            <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/activities/";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"hidden-xs\">View Activity</a>\n                </span>\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['show-moderation']), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"comment-holder ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.singleActivity), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.singleActivity), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <div class=\"activity-status\">\n            <span class=\"action\">\n                <span class=\"like-count\" data-likecount=\"";
  if (helper = helpers.like_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.like_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.like_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.like_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <span class=\"like-label\">"
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.like_count), "Like", "Likes", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.like_count), "Like", "Likes", options)))
    + "</span>\n            </span>\n\n            ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.comments_count), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.comments_count), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"comments\">\n\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current_user), {hash:{},inverse:self.noop,fn:self.program(47, program47, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['show-moderation']), {hash:{},inverse:self.noop,fn:self.program(49, program49, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/profiles/";
  if (helper = helpers.commenter_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.commenter_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.user_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "Anonymous";
  }

function program5(depth0,data) {
  
  
  return "\n<div class=\"pull-right\">\n    <a href=\"#\" class=\"fa fa-times-circle delete-comment\" style=\"text-decoration: none; font-size: 16px;\"></a>\n</div>\n";
  }

  stack1 = self.invokePartial(partials.user_image, 'user_image', (depth0 && depth0.user_image), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"bar-body\">\n    <strong>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user_name), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>:\n    ";
  if (helper = helpers.comment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br/>\n    <span class=\"tiny\">posted  <span data-livestamp=\"";
  if (helper = helpers.posted_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.posted_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span></span>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.deletable), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/filter_active_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type=\"checkbox\" name=\"";
  if (helper = helpers.param) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.param); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"filter-input\" checked=\"true\"/>\n<div class=\"btn default ic_check\"></div>\n<span>";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/filters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"filter-component\" data-filter-param=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"filter-item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"expand-indicator\"></span></div>\n        <div class=\"filter-list\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"filter-list-item\" data-value=\""
    + escapeExpression(((stack1 = (depth0 && depth0[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                    <div class=\"btn default\">&nbsp;</div>\n                    <span>"
    + escapeExpression(((stack1 = (depth0 && depth0[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                </div>\n            ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["oddjob"]["templates"]["thirdchannel/gallery_image_modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"bbm-button close-modal\"><i class=\"ic ic_x\"></i></div>\n<div class=\"image-container\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" onerror=\"this.src='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\" alt=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    <p class=\"caption\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <p class=\"timestamp caption\">";
  if (helper = helpers.photo_updated_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.photo_updated_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n</div>\n";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/hoverable_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"img-background\">\n  <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" onerror=\"this.src='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\" title=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-responsive\"/>\n</div>\n<div class=\"overlay\">\n  <div class=\"caption\">\n    <p class=\"label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <p class=\"timestamp\">";
  if (helper = helpers.photo_updated_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.photo_updated_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  </div>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/incomplete_activities"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"activity-holder\">\n<h3>";
  if (helper = helpers.incomplete) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.incomplete); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Visits in progress</h3>\n    <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/activities/current_checkins\">View Locations</a>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section loading-section\">\n    <div class=\"loading\">\n        <div class=\"ic ic-spin ic_processing\"></div> Loading...\n    </div>\n</div>\n\n";
  });

this["oddjob"]["templates"]["thirdchannel/loading_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"loading\">\n    <div class=\"fa fa-spin ic_processing\"></div> Loading...\n</div>\n\n";
  });

this["oddjob"]["templates"]["thirdchannel/new-comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  stack1 = self.invokePartial(partials.user_image, 'user_image', ((stack1 = (depth0 && depth0.current_user)),stack1 == null || stack1 === false ? stack1 : stack1.user_image), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"bar-body\">\n\n    <textarea rows=\"1\" class=\"expanding new-comment-field\" placeholder=\"Write a comment...\"></textarea>\n\n    <button class=\"btn light solid add-comment\">Comment</button>\n</div>";
  return buffer;
  });

this["oddjob"]["templates"]["thirdchannel/no_results"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"\">\n    <i class=\"fa fa-ban\"></i> No Results Found\n</div>\n";
  });

this["oddjob"]["templates"]["thirdchannel/photo-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"carousel\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = (helper = helpers.unless_eq || (depth0 && depth0.unless_eq),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1.length), 1, options) : helperMissing.call(depth0, "unless_eq", ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1.length), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div>\n            <div class=\"helper\">\n                <img src=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-responsive\" onerror=\"this.src='"
    + escapeExpression(((stack1 = (depth1 && depth1.content_image_error_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\"/>\n\n            </div>\n            <div class=\"label\">\n            <div class=\"img-label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </div>\n        </div>\n\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n        <a href=\"#\" class=\"arrow arrow-left\"><span class=\"ic ic_left\"></span> </a>\n        <a href=\"#\" class=\"arrow arrow-right\"><span class=\"ic ic_right\"></span> </a>\n        ";
  }

  buffer += "<div class=\"bbm-button close-modal\"><i class=\"ic ic_x\"></i></div>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

return this["oddjob"]["templates"];

});