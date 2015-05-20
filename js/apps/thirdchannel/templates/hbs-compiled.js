define(['handlebars'], function(Handlebars) {

this["ThirdChannel"] = this["ThirdChannel"] || {};
this["ThirdChannel"]["templates"] = this["ThirdChannel"]["templates"] || {};

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

Handlebars.registerPartial("comment", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "and ";
  if (helper = helpers.comment_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comment_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " other ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.comment_count), 1, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.comment_count), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " have ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "person";
  }

function program4(depth0,data) {
  
  
  return "people";
  }

function program6(depth0,data) {
  
  
  return "\n 	your\n";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.parent_user)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<strong>";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong>:";
  return buffer;
  }

  buffer += "<p>";
  if (helper = helpers.author_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.comment_count), 0, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.comment_count), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (helper = helpers.verb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.verb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " on\n";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.parent_user)),stack1 == null || stack1 === false ? stack1 : stack1.id), (depth0 && depth0.current_user), options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.parent_user)),stack1 == null || stack1 === false ? stack1 : stack1.id), (depth0 && depth0.current_user), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n";
  if (helper = helpers.parent_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.parent_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ": ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subject), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n<p class=\"notification-content\">";
  if (helper = helpers.comment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n";
  return buffer;
  }));

Handlebars.registerPartial("newActivity", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " <p>";
  if (helper = helpers.author_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (helper = helpers.verb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.verb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <strong>";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong>:</p>\n <p  class=\"notification-content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  }));

Handlebars.registerPartial("alert_details_empty_row", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"col-1 alert-details\"><i class=\"fa fa-spin fa-spinner\"></i></div>";
  }));

Handlebars.registerPartial("open_alert_rows", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"item pure-g alert-row\">\n		<p class=\"col-1-2 col-md-1\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-1-4 minor-m\">";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<div class=\"col-1-4 col-md-1 alert-actions\">\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.resolve)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary expand resolve-link\"><i class=\"ic fa ic_check\"></i><span class=\"visible-md\">Resolve Alert</span></a>\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.checkin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary report-link\"><i class=\"ic fa ic_report-16\"></i><span class=\"visible-md\">View Report</span></a>\n		</div>\n		\n		";
  stack1 = self.invokePartial(partials.alert_details_empty_row, 'alert_details_empty_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n	<p>There are no open alerts for this store</p>\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

this["ThirdChannel"]["templates"]["shared/layout/action_buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["shared/layout/main_navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/checkins/choose"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"pure-g item\">\n    <div class=\"col-3-4 col-md-1\">\n        ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"col-1-4 col-md-1 general-actions\">\n        <form accept-charset=\"UTF-8\" action=\"";
  if (helper = helpers.checkin_choose_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checkin_choose_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" method=\"post\">\n            <input id=\"customer_store_id\" name=\"customer_store_id\" type=\"hidden\" value=\"";
  if (helper = helpers.customer_store_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_store_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <input id=\"survey_id\" name=\"survey_id\" type=\"hidden\" value=\"";
  if (helper = helpers.survey_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.survey_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <input id=\"type\" name=\"type\" type=\"hidden\" value=\"";
  if (helper = helpers.checkin_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checkin_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <input name=\"authenticity_token\" value=\"";
  if (helper = helpers.authenticity_token) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authenticity_token); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"hidden\">\n            <button class=\"btn primary\" name=\"commit\"><i class=\"ic fa ic_location\"></i><span>Continue</span></button>\n        </form>\n    </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/checkins/chooses"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section data-section\">\n    <h3>Checkins</h3>\n    <div class=\"surveys body\"></div>\n</div>";
  });

this["ThirdChannel"]["templates"]["thirdchannel/checkins/store"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"pure-g\">\n    <div class=\"col-1-2 col-md-1\">\n        <a href=\"/programs/";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/stores/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>, ";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"col-1-4 minor-m\">";
  if (helper = helpers.last_checkin) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_checkin); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"col-1-4 col-md-1 general-actions\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.special_project), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"action-spacer\"></div>\n            <a href=\"/programs/";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/checkins/choose/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn primary\"><i class=\"ic fa ic_report-16\"></i><span>Checkin Here</span></a>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <form accept-charset=\"UTF-8\" action=\"/programs/";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/checkins\" method=\"post\">\n                <input id=\"id\" name=\"customer_store_id\" type=\"hidden\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <input name=\"authenticity_token\" value=\"";
  if (helper = helpers.authenticity_token) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authenticity_token); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"hidden\">\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.last_checkin), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <button class=\"btn primary expand resolve-link\" name=\"commit\"><i class=\"ic fa ic_location\"></i><span>Checkin Here</span></button>\n            </form>\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"/programs/";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/reports/checkin/";
  if (helper = helpers.last_checkin_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_checkin_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn primary report-link\"><i class=\"ic fa ic_report-16\"></i><span class=\"visible-md\">View Report</span></a>\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n                    <div class=\"action-spacer\"></div>\n                ";
  }

  buffer += "<div class=\"pure-g\">\n    <h3 class=\"col-1-2 col-md-1\">YOUR STORES</h3>\n    <h3 class=\"col-1-2 minor-m\">LAST CHECKIN</h3>\n</div>\n\n";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/alerts/index/alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\n    <td class=\"";
  if (helper = helpers.alertClass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alertClass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><a href=\"alerts/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n    <td><a href=\"alerts/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"alert-count\"><i class=\"fa fa-spinner fa-spin\"></i></span></a></td>\n    <td></td>\n</tr>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/alerts/index/alerts"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<tbody class=\"alerts\"></tbody>\n\n";
  });

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/alerts/index/group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td><span class=\"alert-count\"><i class=\"fa fa-spinner fa-spin\"></i></span></td>\n<td class=\"expand-indicator open\"></td>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/alerts/index/section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table>\n    <thead>\n    <tr>\n        <th>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n        <th>Stores Affected</th>\n        <th></th>\n    </tr>\n    </thead>\n</table>\n\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/alerts/show/store"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"col-1-2 col-sm-1 col-md-2-3\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.profile)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"store-profile-link\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ",</a> ";
  if (helper = helpers.location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"col-1-4 hidden-md date-added\">";
  if (helper = helpers.dateAdded) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dateAdded); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"col-1-4 col-sm-1 col-md-1-3\">\n	<div class=\"action\">\n        <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.alert)),stack1 == null || stack1 === false ? stack1 : stack1.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary expand\"><i class=\"ic fa ic_check\"></i><span class=\"visible-md\">Resolve Alert</span></a>\n    </div>\n	<div class=\"action\">\n        <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.report)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary\"><i class=\"ic fa ic_report-16\"></i><span class=\"visible-md\">View Report</span></a>\n    </div>\n</div>\n\n";
  stack1 = self.invokePartial(partials.alert_details_empty_row, 'alert_details_empty_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/alerts/show/stores"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section class=\"section data-section\">\n    <div class=\"pure-g\">\n        <h3 class=\"col-1-2 col-sm-1 col-md-2-3\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n        <h3 class=\"col-1-4 hidden-md\">Date Added</h3>\n        <h3 class=\"col-1-4 col-md-1-3 hidden-xs\">Actions</h3>\n    </div>\n    <div class=\"body\">\n        \n    </div>\n</section>\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/special_projects/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"col-1-7\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.report)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n<p class=\"col-1-7\">";
  if (helper = helpers.customer_stores_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_stores_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-7\">";
  if (helper = helpers.customer_stores_with_open_alerts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_stores_with_open_alerts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-7\">";
  if (helper = helpers.percent_of_stores_complete) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percent_of_stores_complete); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%</p>\n<p class=\"col-1-7\">";
  if (helper = helpers.start_date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.start_date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-7\">";
  if (helper = helpers.end_date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.end_date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-1-7\">";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/dashboards/special_projects/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section data-section\">\n    <div class=\"pure-g\">\n        <h3 class=\"header col-1-7\">Name</h3>\n        <h3 class=\"header col-1-7\"># Stores</h3>\n        <h3 class=\"header col-1-7\"># Stores that Need Revisit</h3>\n        <h3 class=\"header col-1-7\">% Complete</h3>\n        <h3 class=\"header col-1-7\">Start Date</h3>\n        <h3 class=\"header col-1-7\">End Date</h3>\n        <h3 class=\"header col-1-7\">Status</h3>\n    </div>\n    <div class=\"body\"></div>\n</div>";
  });

this["ThirdChannel"]["templates"]["thirdchannel/filter_active_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/filters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/filters/date_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/filters/hidden_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/filters/list_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/filters/spinner_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='filter-component spinner'>\n    <div class='filter-item'>\n        <i class='fa fa-spinner fa-spin'></i>\n    </div>\n</div>\"";
  });

this["ThirdChannel"]["templates"]["thirdchannel/gallery_image_modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/hoverable_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/incomplete_activities"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/labs/sales_compare/meta"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"col-1-6\">\n	<p class=\"statistic\">";
  if (helper = helpers.totalStores) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalStores); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n	<p>Stores</p>\n</div>\n\n<div class=\"col-1-3\">\n	<p class=\"statistic\">";
  if (helper = helpers.states) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.states); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n	<p>States Covered</p>\n</div>\n\n<div class=\"col-1-2\">\n	<p class=\"statistic\">";
  if (helper = helpers.averageUnits) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.averageUnits); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n	<p>Avg. Units on Display</p>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/labs/sales_compare/retail_sales"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n";
  }

function program3(depth0,data) {
  
  
  return "\n<p class=\"col-1-1\">No Sales numbers found for this date range</p>\n";
  }

  buffer += "<canvas width=\"400\" height=\"400\" class=\"retail-sales\"></canvas>\n";
  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.sales) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.sales); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.sales) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/labs/sales_compare/widget_section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section class=\"section labs\">\n\n	<h2 class=\"header\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<div class=\"widgets\"></div>\n</section>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/labs/top_sku_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n	<div class=\"col-1-6\">\n		<p>"
    + escapeExpression((helper = helpers.index_inc || (depth0 && depth0.index_inc),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index_inc", (data == null || data === false ? data : data.index), options)))
    + ") ";
  if (helper = helpers.sku) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sku); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n	</div>\n\n	<div class=\"col-1-6\">\n		<p>No Description Available</p>\n	</div>\n\n	<div class=\"col-1-6\">\n		<p>";
  if (helper = helpers.usd) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.usd); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n	</div>\n\n	<div class=\"col-1-6\">\n		<p>";
  if (helper = helpers.unitsSold) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unitsSold); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n	</div>\n\n	<div class=\"col-1-6\">\n		<p>";
  if (helper = helpers.unitsOnHand) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unitsOnHand); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n	</div>\n\n	<div class=\"col-1-6\">\n		<p><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.emptyStores)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.emptyStores) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emptyStores); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n	</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n	<p class=\"col-1-1\">No Report Data found for this date range</p>\n\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.skus) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.skus); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.skus) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["thirdchannel/loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section loading-section\">\n    <div class=\"loading\">\n        <div class=\"fa fa-spin fa-spinner\"></div> Loading...\n    </div>\n</div>\n\n";
  });

this["ThirdChannel"]["templates"]["thirdchannel/new-comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/no_results"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"\">\n    <i class=\"fa fa-ban\"></i> No Results Found\n</div>\n";
  });

this["ThirdChannel"]["templates"]["thirdchannel/notifications/badge"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/notifications/notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<tr>\n    <td colspan=\"2\" class=\"<%= note.read ? 'read' : 'unread' %>\">\n       <div class=\"tiny\"><i>";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</i></div>\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, "Comment", (depth0 && depth0.note_type), options) : helperMissing.call(depth0, "if_eq", "Comment", (depth0 && depth0.note_type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, "Message", (depth0 && depth0.note_type), options) : helperMissing.call(depth0, "if_eq", "Message", (depth0 && depth0.note_type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, "Checkin", (depth0 && depth0.note_type), options) : helperMissing.call(depth0, "if_eq", "Checkin", (depth0 && depth0.note_type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <div class=\"table-actions\">\n            ";
  if (helper = helpers.activity_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " | ";
  if (helper = helpers.delete_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.delete_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mark_read_url), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </td>\n</tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = self.invokePartial(partials.comment, 'comment', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = self.invokePartial(partials.newActivity, 'newActivity', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "| ";
  if (helper = helpers.mark_read_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mark_read_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n<tr>\n    <td colspan=\"2\">You have no notifications</td>\n</tr>\n";
  }

  options={hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["thirdchannel/pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/photo-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/reports/index/section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"section ";
  if (helper = helpers.css_class) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.css_class); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <h2>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    <div class=\"subsections\"></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/index/subsection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n        ";
  return buffer;
  }

  buffer += "<div class=\"subsection ";
  if (helper = helpers.css_class) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.css_class); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"widgets\"></div>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/info/show/checkin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n            by\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\n        <div class=\"info\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"checkin\">\n    <h3 class=\"pull-right\"><a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">View Report</a></h3>\n    <h3>";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a href=\"";
  if (helper = helpers.user_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.user) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n    </h3>\n\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.info), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/info/show/info_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"report-info-list\">\n    <div class=\"pages\"></div>\n\n    <div class=\"section\">\n        <table>\n            <thead>\n            <th>";
  if (helper = helpers.header_1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.header_1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n            <th>";
  if (helper = helpers.header_2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.header_2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n            </thead>\n            <tbody class=\"list-items\"></tbody>\n        </table>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/info/show/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n                <i class=\"fa fa-lg fa-angle-down\"></i>\n            ";
  }

  buffer += "<tr>\n        <td><span class=\"bold\"><a href=\"";
  if (helper = helpers.label_1_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_1_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label_1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></span> <span>";
  if (helper = helpers.label_2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n        <td>";
  if (helper = helpers.column_value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.column_value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td class=\"info-toggle\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.column_value), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n</tr><tr class=\"checkins hide\">\n    <td colspan=\"3\"></td>\n</tr>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/bar_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n        <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n    ";
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"chart horizontal-bar\"></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/default"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/donut_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n        ";
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"chart donut-chart\"></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/heatmap"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><i class=\"fa fa-square\" style=\"color: "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></i> "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        ";
  return buffer;
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <ul class=\"heatmap-legend\">\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.legend), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <div class=\"heatmap\"><svg></svg></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/leading_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"widget small-padding "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"leading-dots leading-row\">\n        <span class=\"pull-right\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.prepend_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.results) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.results); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.append_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        <span>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/line_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n        <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n    ";
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <div class=\"chart line-chart\"></div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/list_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.eachRange || (depth0 && depth0.eachRange),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, 0, 3, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.list), options) : helperMissing.call(depth0, "eachRange", 0, 3, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.list), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <h4>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</h4>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n            <h4>N/A</h4>\n        ";
  }

  buffer += "<div class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"padding-left: 70px;\">\n    <div class=\"pull-left\" style=\"margin-left: -70px;\">\n        <div class=\"circle-icon circle-md\">\n            <div class=\"circle "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.circle_css)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><div class=\"tc-icons tc-icons-md tc-icons_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></div>\n        </div>\n    </div>\n    <div class=\"pull-left\">\n        <div>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"clearfix\"></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/metric_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"widget metric-icon "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.prepend_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression((helper = helpers.format_number || (depth0 && depth0.format_number),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.results), options) : helperMissing.call(depth0, "format_number", (depth0 && depth0.results), options)))
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.append_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n    <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/multi_question_counts"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"leading-dots leading-row\">\n            <span class=\"pull-right\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.prepend_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.sum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.append_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.rows), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/multi_question_totals"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <tr>\n            <td>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (helper = helpers.sum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <table>\n        <thead>\n        <th colspan=\"2\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n        </thead>\n        <tbody>\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.rows), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <tr>\n            <td><strong>Total # "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.count_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong></td>\n            <td><strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong></td>\n        </tr>\n        </tbody>\n    </table>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/overview_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">\n        ";
  }

function program3(depth0,data) {
  
  
  return "\n        </a>\n        ";
  }

  buffer += "<div class=\"overview "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <h2>"
    + escapeExpression((helper = helpers.format_number || (depth0 && depth0.format_number),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.count), options) : helperMissing.call(depth0, "format_number", ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.count), options)))
    + "</h2>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/percent_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"icon\">\n        <p class=\"left "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.title_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-5 percent_icon_arrow\">\n                <span class=\"tc-icons tc-icons-sm tc-icons_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " inverse\"></span>\n            </div>\n            <div class=\"col-xs-12 col-md-6 percent_icon_stats\">\n                 <span class=\"legend\">\n                         <span class=\"legend-item center bold positive\">"
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "value_lookup", ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "% "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><br/>\n                         <span class=\"legend-item center\">"
    + escapeExpression((helper = helpers.format_number_from_value_lookup || (depth0 && depth0.format_number_from_value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options) : helperMissing.call(depth0, "format_number_from_value_lookup", ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options)))
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.count_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                 </span>\n            </div>\n\n\n\n        </div>\n\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/quadrant_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <div class=\"square\" style=\"background-color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                        <div class=\"l_content\">\n                            <div class=\"l_table\">\n                                <div class=\"l_table-cell\">\n                                    <h2>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%</h2>\n                                    <div>";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                ";
  return buffer;
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"chart quadrant\">\n        <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div>\n            <div class=\"y-axis-label-top\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.top)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            <div>\n                <div class=\"x-axis-label-left\">\n                    <div>\n                        <div class=\"l_content\">\n                            <div class=\"l_table\">\n                                <div class=\"l_table-cell\">\n                                    <div>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.left)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"x-axis-label-right\">\n                    <div>\n                        <div class=\"l_content\">\n                            <div class=\"l_table\">\n                                <div class=\"l_table-cell\">\n                                    <div>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.right)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"chart\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.results), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <div class=\"clearfix\"></div>\n                </div>\n            </div>\n            <div class=\"y-axis-label-bottom\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.bottom)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/range_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            <tr>\n                <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.prefix)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.postfix)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            </tr>\n        ";
  return buffer;
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <table class=\"chart range\">\n        <thead>\n            <th colspan=\"2\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n        </thead>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.results), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/resolution_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "<a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">";
  }

function program3(depth0,data) {
  
  
  return "</a>";
  }

  buffer += "<div class=\"widget small-padding resolution-row "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><div class=\"col-1-4\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div><div class=\"col-1-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.occurrences)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div><div class=\"col-1-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.resolutions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div><div class=\"col-1-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.remaining)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div></div>\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/stacked_bar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <ul class=\"ct-legend\">\n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.legend), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n                <div class=\"clear\"></div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                        <li class=\"ct-legend-item ct-legend-"
    + escapeExpression((helper = helpers.chartist_series_name || (depth0 && depth0.chartist_series_name),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "chartist_series_name", (data == null || data === false ? data : data.index), options)))
    + "\" data-series-name=\""
    + escapeExpression((helper = helpers.chartist_series_name || (depth0 && depth0.chartist_series_name),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "chartist_series_name", (data == null || data === false ? data : data.index), options)))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div>\n        <div class=\"chart line\">\n            <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.legend), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"ct-chart ct-perfect-fourth\"></div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/s3uploader/checkin_group_label_options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  stack1 = helpers.each.call(depth0, (depth0 && depth0.group_labels), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/s3uploader/checkin_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/s3uploader/checkin_image_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += "\n    </div>\n    <div class=\"delete\">\n        <button class=\"btn primary\"><i class=\"ic ic_x\"></i><span>Delete Image</span></button>\n    </div>\n    <div class=\"group_label\">\n        <label>Label:</label>\n        <input type=\"text\" class=\"image_group_label\" data-attribute=\"group_label\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][group_label]\" value=\"";
  if (helper = helpers.group_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.group_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n    <div class=\"description\">\n        <label>Description:</label>\n        <input type=\"text\" class=\"image_label\" data-attribute=\"label\" name=\"";
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

this["ThirdChannel"]["templates"]["thirdchannel/s3uploader/checkin_image_group_select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += "\n    </div>\n    <div class=\"delete\">\n        <button class=\"btn primary\"><i class=\"ic ic_x\"></i><span>Delete Image</span></button>\n    </div>\n    <div class=\"group_label\">\n        <label>Label:</label>\n        <select class=\"image_group_label\" data-attribute=\"group_label\" name=\"";
  if (helper = helpers.image_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[][group_label]\">\n            <option value=\"\">Select corresponding before image label...</option>\n        </select>\n    </div>\n    <div class=\"description\">\n        <label>Description:</label>\n        <input type=\"text\" class=\"image_label\" data-attribute=\"label\" name=\"";
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

this["ThirdChannel"]["templates"]["thirdchannel/s3uploader/error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"uploader-error\">\n    <div class=\"pull-right error-close ic ic_x\"></div>\n    <div class=\"message\">The image uploader has encountered an error.  This is most likely due to a bad internet connection.  Please check your connection and try again or wait until you can get a better connection.</div>\n</div>\n";
  });

this["ThirdChannel"]["templates"]["thirdchannel/s3uploader/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "\">\n    </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/s3uploader/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\" holder\">\n    <div>\n        <div class=\"image pull-left\">\n            <img src=\"";
  if (helper = helpers.source) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"63840\" alt=\"Image\" >\n        </div>\n        <div class=\"pull-right\">\n            <button class=\"btn primary cancel\"><i class=\"ic fa ic_x\"></i><span>Cancel Upload</span></button>\n        </div>\n        <div class=\"progress\">\n            <div class=\"bar\"></div>\n        </div>\n        <div class=\"percentage\">0%</div>\n    </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/alerts_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"item\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.history)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">View Alert History</a></div>\n";
  return buffer;
  }

  stack1 = self.invokePartial(partials.open_alert_rows, 'open_alert_rows', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.history), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/hoverable_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"img-background\">\n	<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" onerror=\"this.src='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\" class=\"img-responsive\"/>\n</div>\n<div class=\"overlay\">\n<div class=\"caption\">\n	<p class=\"label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n	<p class=\"timestamp\">";
  if (helper = helpers.photo_updated_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.photo_updated_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n</div>\n	\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/open_alert_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>ISSUE OPENED</h3>\n<p>";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " by <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.created_by)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.created_by) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_by); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n\n<h3>ADDITIONAL NOTES</h3>\n<textarea name=\"resolution_notes\" class=\"notes-input\"></textarea>\n\n<a class=\"btn primary submit\"><i class=\"ic ic_check\"></i><span class=\"keep\">Resolve Alert</span></a>\n<a class=\"btn default cancel\"><i class=\"ic ic_x\"></i><span class=\"keep\">Cancel</span></a>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/open_alerts_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, self=this;


  stack1 = self.invokePartial(partials.open_alert_rows, 'open_alert_rows', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/personnel_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"item pure-g\">\n		<p class=\"col-1-3 col-md-8-12\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n		<p class=\"col-1-3 col-md-4-12\">";
  if (helper = helpers.role) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.role); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-1-3 minor-m\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.last_visited), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "			\n		</p>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.last_checkin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.last_visited) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_visited); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n		";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n			No checkins on record\n		";
  }

function program6(depth0,data) {
  
  
  return "\n	<p>There are no personnel assigned to this store</p>\n";
  }

  options={hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/photo_modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/products/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/resolved_alert_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.notes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.notes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "No Notes provided";
  }

  buffer += "<h3>ISSUE OPENED</h3>\n<p>";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " by <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.created_by)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.created_by) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_by); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n\n<h3>ISSUE RESOLVED</h3>\n<p>";
  if (helper = helpers.resolved_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resolved_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " by <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.resolved_by)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.resolved_by) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resolved_by); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n\n<h3>ADDITIONAL NOTES</h3>\n<p class=\"notes\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notes), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/resolved_alerts_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"item pure-g alert-row\">\n		<p class=\"col-6-12 col-md-1\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-2-12 minor-m\">";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-2-12 minor-m\">";
  if (helper = helpers.resolved_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resolved_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<div class=\"col-2-12 col-md-1 alert-actions\">\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.resolve)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary expand\">...<span class=\"visible-md\">Details</span></a>\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.checkin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary\"><i class=\"ic fa ic_report-16\"></i><span class=\"visible-md\">View Report</span></a>\n		</div>\n		";
  stack1 = self.invokePartial(partials.alert_details_empty_row, 'alert_details_empty_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n	<p>There are no resolved alerts for this store</p>\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/schedule/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <tr>\n        <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.month)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n        <td><input type=\"number\" name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.month)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_core\" class=\"additionalVisit no-margin\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.occurrences)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\n        <td><input type=\"number\" name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.month)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_additional\" class=\"additionalVisit no-margin\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.additional_occurrences)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\n        <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.total_occurrences)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n      </tr>\n      ";
  return buffer;
  }

  buffer += "<form id=\"scheduleForm\">\n  <table>\n    <thead>\n      <tr>\n        <th>Month</th>\n        <th>Core Visits</th>\n        <th>Additional Visits</th>\n        <th>Total Visits</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.schedule), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n  <button class=\"subitSchedule btn primary solid\">Update Schedule</button>\n</form>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/stores/rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"item\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>, ";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n	<p class=\"item\">There are no stores for this query.</p>\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["thirdchannel/teams/rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"item pure-g\">\n    <p class=\"col-3-12 col-md-1-2\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.first_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.first_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.last_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n    <p class=\"col-1-12 minor-m\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <p class=\"col-3-12 col-md-1-2\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"col-2-12 minor-m\">";
  if (helper = helpers.phone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.phone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"col-3-12 minor-m\">";
  if (helper = helpers.university) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.university); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n<p class=\"item\">No field force found for this query.</p>\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

return this["ThirdChannel"]["templates"];

});