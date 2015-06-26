define(['handlebars'], function(Handlebars) {

this["PennyPacker"] = this["PennyPacker"] || {};
this["PennyPacker"]["templates"] = this["PennyPacker"]["templates"] || {};

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
    + "\">\n    <i class=\"ic ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n    <span class=\"link\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon2), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>";
  return buffer;
  }));

Handlebars.registerPartial("empty_sub_view", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"col-1-1 sub-view-container\"></div>";
  }));

Handlebars.registerPartial("entry_comment", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p><span class='comment-header key-info'>";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "):</span> ";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }));

Handlebars.registerPartial("entry_comments", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.entry_comment, 'entry_comment', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n        <p class=\"empty-comments-message\">No Comments</p>\n    ";
  }

  buffer += "<section class=\"comments\">\n    <h3>Comments</h3>\n    <div class=\"comments-list\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.comments), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "   \n    </div>\n\n    <textarea name=\"text\" class=\"comment-input\"></textarea>\n    <button class=\"btn default comment\">Leave Comment</button>\n</section>";
  return buffer;
  }));

Handlebars.registerPartial("expand_action", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"btn primary details\" title=\"Expand Entry\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">...</a>";
  return buffer;
  }));

Handlebars.registerPartial("valid_indicator", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "ic_check";
  }

function program3(depth0,data) {
  
  
  return "ic_x";
  }

  buffer += "<div class=\"col-1-12 valid-indicator\"><i class=\"ic ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.valid), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i></div>";
  return buffer;
  }));

Handlebars.registerPartial("validate_action", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"btn primary validate\" title=\"Toggle Entry as valid / invalid\"><i class=\"ic ic_check\"></i></a>";
  }));

this["PennyPacker"]["templates"]["shared/layout/action_buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["PennyPacker"]["templates"]["shared/layout/main_navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.nav_item, 'nav_item', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
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

this["PennyPacker"]["templates"]["pennyPacker/entries/row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"item\">\n	<p class=\"col-2-12\">";
  if (helper = helpers.payment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.payment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/entry/checkin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.valid_indicator, 'valid_indicator', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<p class=\"col-2-12\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12 payment\">$";
  if (helper = helpers.payment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.payment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12\">";
  if (helper = helpers.units) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.units); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " mins</p>\n\n<p class=\"col-2-12\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<p class=\"col-2-12\">";
  if (helper = helpers.locationName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.locationName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n\n<div class=\"col-2-12 entry-actions\">\n    <!--<a class=\"btn primary\" href=\"#\" title=\"View Checkin Report\"><i class=\"ic ic_report-16\"></i></a>-->\n    ";
  stack1 = self.invokePartial(partials.expand_action, 'expand_action', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.validate_action, 'validate_action', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "    \n</div>\n\n";
  stack1 = self.invokePartial(partials.empty_sub_view, 'empty_sub_view', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/entry/checkin_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <p>Payment Tier: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tier)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n";
  return buffer;
  }

  buffer += "<h2>Details for Checkin at ";
  if (helper = helpers.locationName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.locationName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n<p class=\"address\"><a href=\"";
  if (helper = helpers.customerStoreProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customerStoreProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n<p>Agent: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.paypalEmail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</p>\n<p>Payment <span class=\"key-info\">$";
  if (helper = helpers.payment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.payment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> for <span class=\"key-info\">";
  if (helper = helpers.units) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.units); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> minutes at <span class=\"key-info\">$";
  if (helper = helpers.rate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/hr</span></p>\n<p>";
  if (helper = helpers.surveyName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.surveyName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Checkin <a href=\"";
  if (helper = helpers.checkinReportUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checkinReportUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">Click here to View</a></p>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tier), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n<section class=\"payment-adjustment\">\n    <h3>Payment Adjustment</h3>\n    <p>If Checkin duration seems inappropriate, please enter a new duration - <span class=\"key-info\">in minutes</span> - as a correction.</p>\n    <input type=\"number\" value=\"0\" class=\"adjustment-input\"/><a class='btn primary adjust'>Adjust duration</a> \n</section>\n\n\n";
  stack1 = self.invokePartial(partials.entry_comments, 'entry_comments', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/entry/direct"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.valid_indicator, 'valid_indicator', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<p class=\"col-2-12\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12 payment\">$";
  if (helper = helpers.payment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.payment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<div class=\"col-1-12\"></div>\n<p class=\"col-2-12\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<p class=\"col-2-12\">Payment Adjustment</p>\n\n<div class=\"col-2-12 entry-actions\">\n	<!--<a class=\"btn primary delete\" title=\"Delete Entry\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">X</a>-->\n    ";
  stack1 = self.invokePartial(partials.expand_action, 'expand_action', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.validate_action, 'validate_action', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = self.invokePartial(partials.empty_sub_view, 'empty_sub_view', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/entry/direct_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<p>";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  stack1 = self.invokePartial(partials.entry_comments, 'entry_comments', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/entry/travel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.valid_indicator, 'valid_indicator', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<p class=\"col-2-12\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-12 payment\">$";
  if (helper = helpers.payment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.payment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<p class=\"col-1-12\">";
  if (helper = helpers.units) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.units); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " mi</p>\n<p class=\"col-2-12\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<div class=\"col-2-12\"></div>\n<div class=\"col-2-12 entry-actions\">\n    ";
  stack1 = self.invokePartial(partials.expand_action, 'expand_action', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.validate_action, 'validate_action', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = self.invokePartial(partials.empty_sub_view, 'empty_sub_view', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/entry/travel_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<h2>Travel Details for "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.paypalEmail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\n<p>";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p>This results in a distance of <span class=\"key-info\">";
  if (helper = helpers.units) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.units); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " miles</span> travelled at a rate of <span class=\"key-info\">$0.42</span>. </p>\n\n<section class=\"payment-adjustment\">\n	<h3>Payment Adjustment</h3>\n	<p>If Travel distance seems inappropriate, please enter a new mileage as a correction.</p>\n	<input type=\"number\" value=\"0\" class=\"adjustment-input\"/><a class='btn primary adjust'>Adjust Mileage</a>	\n</section>\n\n";
  stack1 = self.invokePartial(partials.entry_comments, 'entry_comments', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/programs/directPayment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.action)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" method=\"post\" class=\"pure-g\">\n	<input type=\"hidden\" name=\"program\" value=\"";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	<label class=\"col-1-1\">User:</label>\n	<input name=\"person\" type=\"text\" id=\"userTypeahead\" class=\"col-1-1\" required/>\n\n	<label class=\"col-2-12\">Amount ($):</label>\n	<input type=\"number\" name=\"payment\" value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"col-3-12 payment\" placeholder=\"Dollars\" required/>\n	\n	<label class=\"col-1-1\">Payment Date:</label>\n	<input type=\"text\" name=\"date\" class=\"datepicker col-1-1\"/>\n	\n	\n\n	<label class=\"col-1-1\">Comments:</label>\n	<textarea placeholder=\"Comments...\" class=\"col-1-1 comment\" name=\"comment\"></textarea>\n\n\n	<button class=\"btn default submit\">Make Payment</button>\n</form>";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/programs/suggestion"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"suggestion\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (";
  if (helper = helpers.paypalEmail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.paypalEmail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</p>";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/travel/missing"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"travel-form section\">\n    <div class=\"pure-g \">\n        <div class=\"col-1-1\">\n            <p>Please select a date range, and verify whether the visits should have travel entries created for them.</p>\n        </div>\n        <form action=\"/program/";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/travel/listMissing\" method=\"post\">\n            <input type=\"hidden\" name=\"program\" value=\"";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n            <label class=\"col-1-1\">Begin Date</label>\n            <input type=\"text\" name=\"begin\" class=\"datepicker col-1-1\" />\n\n            <label class=\"col-1-1\">End Date</label>\n            <input type=\"text\" name=\"end\" class=\"datepicker col-1-1\" />\n\n            <button class=\"btn primary submit\">Find Missing Travel</button>\n        </form>\n    </div>\n</div>\n<div class=\"body\"></div>";
  return buffer;
  });

this["PennyPacker"]["templates"]["pennyPacker/travel/row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"item\">\n	<p class=\"col-9-12\">";
  if (helper = helpers.personName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.personName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (";
  if (helper = helpers.checkins) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checkins); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " checkins, ";
  if (helper = helpers.travels) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.travels); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " travel entries)</p>\n	<p class=\"col-2-12\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>";
  return buffer;
  });

this["PennyPacker"]["templates"]["thirdchannel/filters/date_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["PennyPacker"]["templates"]["thirdchannel/filters/hidden_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["PennyPacker"]["templates"]["thirdchannel/filters/list_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"filter-list-item flexible\" data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <div class=\"btn default\">&nbsp;</div><span>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n        <div class=\"no-results\">No results</div>\n    ";
  }

  buffer += "<div class=\"filter-component\">\n  <div class=\"filter-item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"expand-indicator\"></span></div>\n  <div class=\"filter-list\">\n    ";
  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.items) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.items); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });

this["PennyPacker"]["templates"]["thirdchannel/filters/spinner_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='filter-component spinner'>\n    <div class='filter-item'>\n        <i class='fa fa-spinner fa-spin'></i>\n    </div>\n</div>\"";
  });

this["PennyPacker"]["templates"]["thirdchannel/pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["PennyPacker"]["templates"]["thirdchannel/activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
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

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <p class=\"activity-special-project\">\n                    ";
  if (helper = helpers.survey_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.survey_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </p>\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div class=\"issues-found\">\n                <h3>";
  if (helper = helpers.issue_length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue_length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), "Issue Found", "Issues Found", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.issue_length), "Issue Found", "Issues Found", options)))
    + "</h3>\n                <ul class=\"unstyled\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.issues), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n                ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.issue_length), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <li>- ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <a href=\"";
  if (helper = helpers.report_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.report_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><span class=\"indicator\">showing 3 of ";
  if (helper = helpers.issue_length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue_length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"activity-photos\">\n\n            <div class=\"carousel\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(11, program11, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href=\"#\" class=\"arrow arrow-left\">\n                    <span class=\"ic ic_left\"></span>\n                </a>\n                <a href=\"#\" class=\"arrow arrow-right\">\n                    <span class=\"ic ic_right\"></span>\n                </a>\n            </div>\n\n        </div>\n        ";
  return buffer;
  }
function program11(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div>\n                    <div class=\"helper\">\n                        <img src=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a class=\"activity_like_button gray\" data-id=\"";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">\n                        Like\n                    </a>\n                    ";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "\n                     Liked\n                    ";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <span class=\"action bold\">\n                    <a href=\"";
  if (helper = helpers.report_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.report_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">Full Report</a>\n                </span>\n            ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"moderation-actions  visible-xs\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideable), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"action\"><a href=\"";
  if (helper = helpers.editable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Checkin</a></span>\n                ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\n                    <span class=\"action\"><a href=\"#\" class=\"hide-post\">Hide Post</a></span>\n                ";
  }

function program24(depth0,data) {
  
  
  return "hidden-xs";
  }

function program26(depth0,data) {
  
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

function program28(depth0,data) {
  
  
  return "\n        <div class=\"comment new-comment\">\n\n\n        </div>\n        ";
  }

function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"moderation-actions\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideable), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  return buffer;
  }
function program31(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <span class=\"action\"><a href=\"";
  if (helper = helpers.editable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Checkin</a></span>\n            ";
  return buffer;
  }

function program33(depth0,data) {
  
  
  return "\n            <span class=\"action\"><a href=\"#\" class=\"hide-post\">Hide Post</a></span>\n            ";
  }

  buffer += "<div class=\"activity-holder\">\n    <div class=\"activity\">\n        <div class=\"activity-meta\">\n            <img src=\"";
  if (helper = helpers.user_image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Images That Describes Me\" class=\"user-image img-circle\" onerror=\"this.src='";
  if (helper = helpers.user_image_error_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image_error_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\"/>\n\n            <div class=\"bar-body\">\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.checkin_type), "special_project", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.checkin_type), "special_project", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <p>\n                    <span data-livestamp=\"";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n                    by\n                    <a href=\"/programs/";
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
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <h3>";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n            ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
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
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_like_button), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n            <span class=\"action bold\">\n                <a href=\"#\" class=\"start-comment\">Comment</a>\n            </span>\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
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
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['show-moderation']), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"comment-holder ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.singleActivity), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.singleActivity), false, options));
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
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.comments_count), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.comments_count), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"comments\">\n\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current_user), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['show-moderation']), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["PennyPacker"]["templates"]["thirdchannel/comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
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

  buffer += "<img src=\"";
  if (helper = helpers.user_image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"user-image img-circle\" onerror=\"this.src='";
  if (helper = helpers.user_image_error_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image_error_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\"/>\n\n<div class=\"bar-body\">\n    <strong>";
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

this["PennyPacker"]["templates"]["thirdchannel/filter_active_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["PennyPacker"]["templates"]["thirdchannel/filters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["PennyPacker"]["templates"]["thirdchannel/gallery_image_modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["PennyPacker"]["templates"]["thirdchannel/hoverable_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"img-background\">\n  <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" onerror=\"this.src='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\" class=\"img-responsive\"/>\n</div>\n<div class=\"overlay\">\n  <div class=\"caption\">\n    <p class=\"label\">";
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

this["PennyPacker"]["templates"]["thirdchannel/incomplete_activities"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"activity-holder\">\n<h3>";
  if (helper = helpers.incomplete) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.incomplete); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Checkins in progress</h3>\n    <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/activities/current_checkins\">View Locations</a>\n</div>";
  return buffer;
  });

this["PennyPacker"]["templates"]["thirdchannel/loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section loading-section\">\n    <div class=\"loading\">\n        <div class=\"fa fa-spin fa-spinner\"></div> Loading...\n    </div>\n</div>\n\n";
  });

this["PennyPacker"]["templates"]["thirdchannel/new-comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.current_user)),stack1 == null || stack1 === false ? stack1 : stack1.user_image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"user-image hidden-xs img-circle\" onerror=\"this.src='";
  if (helper = helpers.user_image_error_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image_error_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\"/>\n\n<div class=\"bar-body\">\n\n    <textarea rows=\"1\" class=\"expanding new-comment-field\" placeholder=\"Write a comment...\"></textarea>\n\n    <button class=\"btn light solid add-comment\">Comment</button>\n</div>";
  return buffer;
  });

this["PennyPacker"]["templates"]["thirdchannel/no_results"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"\">\n    <i class=\"fa fa-ban\"></i> No Results Found\n</div>\n";
  });

this["PennyPacker"]["templates"]["thirdchannel/photo-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"carousel\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a href=\"#\" class=\"arrow arrow-left\"><span class=\"ic ic_left\"></span> </a>\n        <a href=\"#\" class=\"arrow arrow-right\"><span class=\"ic ic_right\"></span> </a>\n    </div>\n    ";
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

  buffer += "<div class=\"bbm-button close-modal\"><i class=\"ic ic_x\"></i></div>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

return this["PennyPacker"]["templates"];

});