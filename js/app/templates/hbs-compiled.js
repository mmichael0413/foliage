define(['handlebars'], function(Handlebars) {

this["ThirdChannel"] = this["ThirdChannel"] || {};
this["ThirdChannel"]["templates"] = this["ThirdChannel"]["templates"] || {};

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
  buffer += "\n	<div class=\"item pure-g alert-row\">\n		<p class=\"col-6-12 col-md-1-2\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-4-12 col-md-1-2\">";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<div class=\"col-2-12\">\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.resolve)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary expand\"><i class=\"ic fa ic_check\"></i></a>\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.checkin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary\"><i class=\"ic fa ic_report-16\"></i></a>\n		</div>\n		\n		";
  stack1 = self.invokePartial(partials.alert_details_empty_row, 'alert_details_empty_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n	<p>There are no Open Alerts for this Store</p>\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

this["ThirdChannel"]["templates"]["activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <p>\n                    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.profile_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.store)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                    , "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </p>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"issues-found\">\n                <h3>";
  if (helper = helpers.issue_length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue_length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Issues Found</h3>\n                <ul class=\"unstyled\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.issues), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </div>\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <li>- ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"activity-photos\">\n\n            <div class=\"carousel\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href=\"#\" class=\"arrow arrow-left\">\n                    <span class=\"ic ic_left\"></span>\n                </a>\n                <a href=\"#\" class=\"arrow arrow-right\">\n                    <span class=\"ic ic_right\"></span>\n                </a>\n            </div>\n\n        </div>\n        ";
  return buffer;
  }
function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div>\n                    <div class=\"helper\">\n                        <img src=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-responsive\" onerror=\"this.src='"
    + escapeExpression(((stack1 = (depth1 && depth1.content_image_error_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\"/>\n                    </div>\n                    <div class=\"img-label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                </div>\n\n                ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a class=\"activity_like_button gray\" data-id=\"";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">\n                        Like\n                    </a>\n                    ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\n                     Liked\n                    ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <span class=\"action bold\">\n                    <a href=\"";
  if (helper = helpers.report_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.report_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_new\">Full Report</a>\n                </span>\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
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

function program17(depth0,data) {
  
  
  return "\n        <div class=\"comment new-comment\">\n\n\n        </div>\n        ";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"moderation-actions\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideable), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <span class=\"action\"><a href=\"";
  if (helper = helpers.editable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Checkin</a></span>\n            ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\n            <span class=\"action\"><a href=\"#\" class=\"hide-post\">Hide Message</a></span>\n            ";
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
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <h3>";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n            ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n\n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
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
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_like_button), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n            <span class=\"action bold\">\n                <a href=\"#\" class=\"start-comment hidden-xs\">Comment</a>\n                <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/activities/";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"visible-xs-inline\">Comment</a>\n            </span>\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"action bold\">\n            <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/activities/";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"hidden-xs\">View Activity</a>\n                </span>\n        </div>\n    </div>\n    <div class=\"comment-holder hidden-xs\">\n        <div class=\"activity-status\">\n            <span class=\"action\">\n                <span class=\"like-count\" data-likecount=\"";
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
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.comments_count), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.comments_count), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"comments\">\n\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current_user), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['show-moderation']), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["checkins/store"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"pure-g\">\n    <div class=\"col-1-2 col-md-1\">\n        <a href=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", #";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>, ";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.special_project), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n    <div class=\"col-1-4 minor-m\">";
  if (helper = helpers.last_checkin) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_checkin); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"col-1-4 col-md-1\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.special_project), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            <strong>This store is part of a Special Project</strong>\n        ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <a href=\"/programs/";
  if (helper = helpers.program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/checkins/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/choose\" class=\"btn btn-primary btn-sm\"><strong>Checkin Here</strong></a>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n            <form accept-charset=\"UTF-8\" action=\"/programs/";
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
    + "\" type=\"hidden\">\n                <strong><button class=\"btn primary\" name=\"commit\"><i class=\"ic ic_location\"></i>  Checkin Here</button></strong>\n            </form>\n        ";
  return buffer;
  }

  buffer += "<div class=\"pure-g\">\n    <h3 class=\"col-1-2 col-md-1\">YOUR STORES</h3>\n    <h3 class=\"col-1-2 minor-m\">LAST CHECKIN</h3>\n</div>\n\n\n";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["ThirdChannel"]["templates"]["comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["dashboards/alerts/index/alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["dashboards/alerts/index/alerts"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<tbody class=\"alerts\"></tbody>\n\n";
  });

this["ThirdChannel"]["templates"]["dashboards/alerts/index/group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td><span class=\"alert-count\"></span></td>\n<td class=\"expand-indicator open\"></td>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["dashboards/alerts/index/section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table>\n    <thead>\n    <tr>\n        <th>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n        <th>Total Issues</th>\n        <th></th>\n    </tr>\n    </thead>\n</table>\n\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["dashboards/alerts/show/store"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<p class=\"col-7-12 col-md-1\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.profile)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"store-profile-link\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ",</a> ";
  if (helper = helpers.location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"col-4-12 date-added\">";
  if (helper = helpers.dateAdded) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dateAdded); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n<div class=\"col-1-12 col-md-1\">\n	<div class=\"action\">\n        <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.alert)),stack1 == null || stack1 === false ? stack1 : stack1.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary expand\"><i class=\"ic fa ic_check\"></i><span class=\"visible-xs\">View Report</span></a>\n    </div>\n	<div class=\"action\">\n        <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.report)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary\"><i class=\"ic fa ic_report-16\"></i><span class=\"visible-xs\">Resolve Alert</span></a>\n    </div>\n</div>\n\n";
  stack1 = self.invokePartial(partials.alert_details_empty_row, 'alert_details_empty_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["dashboards/alerts/show/stores"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"section data-section\">\n    <div class=\"pure-g\">\n        <h3 class=\"col-7-12 col-md-1\">STORES WITH DISPLAY ITEMS ARE DAMAGED</h3>\n        <h3 class=\"col-4-12 hidden-xs\">Date Added</h3>\n        <h3 class=\"col-1-12 hidden-xs\">Actions</h3>\n    </div>\n    <div class=\"body\">\n        \n    </div>\n</section>\n\n";
  });

this["ThirdChannel"]["templates"]["filter_active_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["filters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["filters/date_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"filter-component\" data-type=\"date\">\n  <div class=\"filter-item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"expand-indicator\"></span></div>\n  <div class=\"filter-list\">\n        <div class=\"filter-list-item\">\n          <p>Please enter the date:</p>\n          <input type=\"date\"/>\n        </div>\n  </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["filters/list_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  
  
  return "\n    	<p>There are no items for this filter.</p>\n    ";
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

this["ThirdChannel"]["templates"]["filters/spinner_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='filter-component spinner'>\n    <div class='filter-item'>\n        <i class='fa fa-spinner fa-spin'></i>\n    </div>\n</div>\"";
  });

this["ThirdChannel"]["templates"]["incomplete_activities"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section loading-section\">\n    <div class=\"loading\">\n        <div class=\"fa fa-spin fa-spinner\"></div> Loading...\n    </div>\n</div>\n\n";
  });

this["ThirdChannel"]["templates"]["new-comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["no_results"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"\">\n    <i class=\"fa fa-ban\"></i> No Results Found\n</div>\n";
  });

this["ThirdChannel"]["templates"]["notifications/badge"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["notifications/notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<tr>\n    <td class=\"<%= note.read ? 'read' : 'unread' %>\">\n        <p>\n            ";
  if (helper = helpers.author_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <span>\n                    ";
  if (helper = helpers.verb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.verb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, "Comment", (depth0 && depth0.note_type), options) : helperMissing.call(depth0, "if_eq", "Comment", (depth0 && depth0.note_type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    on ";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":\n                </span>\n        </p>\n        ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"table-actions\">\n            ";
  if (helper = helpers.activity_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " | ";
  if (helper = helpers.delete_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.delete_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </td>\n</tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.parent_type), "message", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.parent_type), "message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                            on\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.parent_user)),stack1 == null || stack1 === false ? stack1 : stack1.id), (depth0 && depth0.current_user), options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.parent_user)),stack1 == null || stack1 === false ? stack1 : stack1.id), (depth0 && depth0.current_user), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                            ";
  if (helper = helpers.parent_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.parent_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                        ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n                                your\n                            ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                               ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.parent_user)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n<tr>\n    <td>You have no notifications</td>\n</tr>\n";
  }

  options={hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["photo-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "'\"/>\n            </div>\n            <div class=\"img-label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        </div>\n        ";
  return buffer;
  }

  buffer += "<div class=\"bbm-button close-modal\"><i class=\"ic ic_x\"></i></div>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/index/section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["reports/index/subsection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"subsection ";
  if (helper = helpers.css_class) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.css_class); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div>\n    <h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n    <div class=\"widgets\"></div>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/info/show/checkin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["reports/info/show/info_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["reports/info/show/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["reports/widgets/bar_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n        ";
  }

  buffer += "<div class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"bar-chart\">\n        <div>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div class='progress'>\n            <div class='progress-bar "
    + escapeExpression((helper = helpers.threshold_class || (depth0 && depth0.threshold_class),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.threshold), ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "threshold_class", ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.threshold), ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "' role='progressbar' aria-valuenow='"
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "value_lookup", ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "' aria-valuemin='0' aria-valuemax='100' style='width: "
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, "Yes", ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "value_lookup", "Yes", ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "%;'>\n                <span>"
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "value_lookup", ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "% "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            </div>\n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/default"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/donut_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <tr>\n                        <td>\n                            <i class=\"fa fa-circle\" style=\"color: "
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, depth0, ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.legendColors), options) : helperMissing.call(depth0, "value_lookup", depth0, ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.legendColors), options)))
    + "\"></i>\n                        </td>\n                        <td>\n                            "
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, depth0, ((stack1 = (depth1 && depth1.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "value_lookup", depth0, ((stack1 = (depth1 && depth1.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "% "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n                        </td>\n                    </tr>\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.count_text), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program2(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <tr>\n                            <td></td>\n                            <td>\n                                "
    + escapeExpression((helper = helpers.format_number_from_value_lookup || (depth1 && depth1.format_number_from_value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, depth1, ((stack1 = (depth2 && depth2.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options) : helperMissing.call(depth0, "format_number_from_value_lookup", depth1, ((stack1 = (depth2 && depth2.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options)))
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.config)),stack1 == null || stack1 === false ? stack1 : stack1.count_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                            </td>\n                        </tr>\n                    ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n                <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n            ";
  }

  buffer += "<div class=\"widget chart donut "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div>\n        <canvas width=\"120\" height=\"120\"></canvas>\n        <div class=\"legend\">\n            <table>\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.legendOrder), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </table>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/horizontal_bar_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n              <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n            ";
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div>\n        <div class=\"chart horizontal-bar\">\n            <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <canvas></canvas>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/leading_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"widget small-padding "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"leading-dots leading-row\">\n        <span class=\"pull-right\">"
    + escapeExpression((helper = helpers.format_number_from_value_lookup || (depth0 && depth0.format_number_from_value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options) : helperMissing.call(depth0, "format_number_from_value_lookup", ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.selected_key), ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options)))
    + "</span>\n        <span>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/list_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.eachRange || (depth0 && depth0.eachRange),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, 0, 3, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.list), options) : helperMissing.call(depth0, "eachRange", 0, 3, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.list), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <h4>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</h4>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  
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
    + "</div>\n\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"clearfix\"></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/metric_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"widget metric-icon "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.prepend_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression((helper = helpers.format_number || (depth0 && depth0.format_number),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.count), options) : helperMissing.call(depth0, "format_number", ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.count), options)))
    + "</h2>\n    <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/multi_question_totals"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["reports/widgets/overview_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["reports/widgets/percent_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["reports/widgets/quadrant_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <div class=\"square\" style=\"background-color: "
    + escapeExpression((helper = helpers.value_lookup || (depth1 && depth1.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.key), ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartColors), options) : helperMissing.call(depth0, "value_lookup", (data == null || data === false ? data : data.key), ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartColors), options)))
    + "\">\n                        <div class=\"l_content\">\n                            <div class=\"l_table\">\n                                <div class=\"l_table-cell\">\n                                    <h2>"
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, depth0, ((stack1 = (depth1 && depth1.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "value_lookup", depth0, ((stack1 = (depth1 && depth1.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "%</h2>\n                                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.config)),stack1 == null || stack1 === false ? stack1 : stack1.count_text), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                ";
  return buffer;
  }
function program2(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                                        <div>"
    + escapeExpression((helper = helpers.format_number_from_value_lookup || (depth1 && depth1.format_number_from_value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, depth1, ((stack1 = (depth2 && depth2.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options) : helperMissing.call(depth0, "format_number_from_value_lookup", depth1, ((stack1 = (depth2 && depth2.results)),stack1 == null || stack1 === false ? stack1 : stack1.counts), options)))
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.config)),stack1 == null || stack1 === false ? stack1 : stack1.count_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                                    ";
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
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartOrder), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <div class=\"clearfix\"></div>\n                </div>\n            </div>\n            <div class=\"y-axis-label-bottom\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.bottom)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/range_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <tr>\n                    <td>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</td>\n                    <td>"
    + escapeExpression((helper = helpers.value_lookup || (depth2 && depth2.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.key), ((stack1 = (depth2 && depth2.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options) : helperMissing.call(depth0, "value_lookup", (data == null || data === false ? data : data.key), ((stack1 = (depth2 && depth2.results)),stack1 == null || stack1 === false ? stack1 : stack1.percentages), options)))
    + "%</td>\n                </tr>\n            ";
  return buffer;
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <table class=\"chart range\">\n        <thead>\n            <th colspan=\"2\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n        </thead>\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.legendOrder), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["reports/widgets/resolution_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["s3uploader/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\" holder\">\n    <div>\n        <div class=\"image\">\n            <img src=\"";
  if (helper = helpers.source) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Image\" >\n        </div>\n        <div class=\"delete\">\n            <button class=\"btn primary\"><i class=\"ic ic_x\"></i><span>Delete Image</span></button>\n        </div>\n\n        <div class=\"description\">\n            <label>Description: </label>\n            <input type=\"text\" name=\"description\">\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["s3uploader/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["store_profile/alerts_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["store_profile/hoverable_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" onerror=\"this.src='/assets/missing.jpg'\"/>\n<div class=\"overlay\">\n	<p class=\"caption\">";
  if (helper = helpers.caption) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.caption); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["store_profile/open_alert_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "</a></p>\n\n<h3>ADDITIONAL NOTES</h3>\n<textarea name=\"resolution_notes\" class=\"notes-input\"></textarea>\n\n<a class=\"btn primary submit\"><i class=\"ic ic_check\"></i><span>Resolve Alert</span></a>\n<a class=\"btn default cancel\"><span>Cancel</span></a>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["store_profile/open_alerts_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, self=this;


  stack1 = self.invokePartial(partials.open_alert_rows, 'open_alert_rows', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["store_profile/personnel_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"item pure-g\">\n		<p class=\"col-1-3 col-md-1-2\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.self)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n		<p class=\"col-1-3 col-md-1-2\">";
  if (helper = helpers.role) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.role); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-1-3 col-md-1\">\n		";
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
  
  
  return "\n			No Checkins on Record\n		";
  }

function program6(depth0,data) {
  
  
  return "\n	<p>There are no Personnel assigned to this store</p>\n";
  }

  options={hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["store_profile/resolved_alert_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["store_profile/resolved_alerts_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"item pure-g alert-row\">\n		<p class=\"col-6-12 col-md-4-12\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-2-12 col-md-4-12\">";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p class=\"col-2-12 col-md-3-12\">";
  if (helper = helpers.resolved_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resolved_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<div class=\"col-2-12\">\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.resolve)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary expand\">...</a>\n			<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.checkin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn primary\"><i class=\"ic fa ic_report-16\"></i></a>\n		</div>\n		";
  stack1 = self.invokePartial(partials.alert_details_empty_row, 'alert_details_empty_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n	<p>There are no Resolved Alerts for this Store</p>\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["stores/table_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<tr>\n    <td><a href=\""
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
    + "</td>\n</tr>\n\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n<tr>\n	<td>There are no Stores for this query.</td>\n</tr>\n\n";
  }

  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["teams_table_rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<tr>\n    <td><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.first_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.first_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.last_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n    <td class=\"minor-m\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    <td>";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td class=\"minor-m\">";
  if (helper = helpers.phone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.phone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td class=\"minor-m\">";
  if (helper = helpers.university) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.university); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n</tr>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n<tr>\n	<td colspan=\"5\">No Field Force found for this query.</td>\n</tr>\n";
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