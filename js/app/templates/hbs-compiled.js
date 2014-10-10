define(['handlebars'], function(Handlebars) {

this["ThirdChannel"] = this["ThirdChannel"] || {};
this["ThirdChannel"]["templates"] = this["ThirdChannel"]["templates"] || {};

this["ThirdChannel"]["templates"]["activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <p>\n                    <a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.location)),stack1 == null || stack1 === false ? stack1 : stack1.store)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>, "
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
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a class=\"activity_like_button gray\" data-id=\"";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">\n                        Like\n                    </a>\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n                     Liked\n                    ";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <span class=\"action bold\">\n                    <a href=\"";
  if (helper = helpers.report_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.report_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_new\">Full Report</a>\n                </span>\n                ";
  return buffer;
  }

function program12(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <div class=\"swiper-slide\">\n                            <img src=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-responsive \" onerror=\"this.src='"
    + escapeExpression(((stack1 = (depth1 && depth1.content_image_error_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\"/>\n                        </div>\n                    ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <span class=\"action\">\n                <a href=\"#\" class=\"more-comments\">View ";
  if (helper = helpers.additional_comments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.additional_comments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " More "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.additional_comments), "Comment", "Comments", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.additional_comments), "Comment", "Comments", options)))
    + "</a>\n            </span>\n            ";
  return buffer;
  }

function program16(depth0,data) {
  
  
  return "\n        <div class=\"comment new-comment\">\n\n\n        </div>\n        ";
  }

  buffer += "<div class=\"activity-holder\">\n    <div class=\"activity\">\n        <div class=\"activity-meta\">\n            <img src=\"";
  if (helper = helpers.user_image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Images That Describes Me\" class=\"user-image img-circle\" onerror=\"this.src='";
  if (helper = helpers.user_image_error_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image_error_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\"/>\n            <div class=\"bar-body\">\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <p>\n                    <span data-livestamp=\"";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span> by\n                    <a href=\"/programs/";
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
  buffer += " <a href=\"/programs/";
  if (helper = helpers.current_program) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_program); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/activities/";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">View Full Activity</a>\n\n            <div class=\"activity-actions\">\n                <span class=\"action bold\">\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_like_button), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n                <span class=\"action bold\"><a href=\"#\" class=\"start-comment\">Comment</a></span>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n\n        <div class=\"activity-photos\">\n            <div class=\"swiper-container\">\n                <div class=\"swiper-wrapper\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(12, program12, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n    <div class=\"comment-holder\">\n        <div class=\"status-bar\">\n            <span class=\"action\">\n                <span class=\"like-count\" data-likecount=\"";
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
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.comments_count), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.comments_count), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"comments\">\n\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current_user), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
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

this["ThirdChannel"]["templates"]["alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["alerts"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<tbody class=\"alerts\"></tbody>\n\n";
  });

this["ThirdChannel"]["templates"]["group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td><span class=\"alert-count\"></span></td>\n<td class=\"expander\"><i class=\"fa fa-caret-up\"></i></td>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["store"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.profile)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>, ";
  if (helper = helpers.location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (helper = helpers.dateAdded) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dateAdded); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>\n    <button class=\"btn default\" onclick=\"location.href='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.report)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\">\n        <i class=\"ic fa ic_report-16\"></i>\n    </button>\n    <button class=\"btn default\" onclick=\"location.href='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.report)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\">\n        <i class=\"ic fa ic_check\"></i>\n    </button>\n\n</td>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["stores"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"section\">\n    <table>\n        <thead>\n        <tr>\n            <th>Stores with ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n            <th>Date Added</th>\n            <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody></tbody>\n    </table>\n</div>\n\n";
  return buffer;
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
    + "/activities/current_checkins\">View Locations  <i class=\"fa fa-chevron-right\"></i></a>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"loading\">\n    <span class=\"fa fa-spin fa-spinner\"></span> <span>Loading...</span>\n</div>\n";
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

this["ThirdChannel"]["templates"]["photo-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"item\">\n        <div class=\"img-container\">\n            <img src=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-responsive \" onerror=\"this.src='"
    + escapeExpression(((stack1 = (depth1 && depth1.content_image_error_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\"/>\n        </div>\n    </div>\n    ";
  return buffer;
  }

  buffer += "<h1>Test</h1>\n<div class=\"owl-carousel owl-theme\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["checkin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["info_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"report-info-list\">\n    <div class=\"header\">\n        <h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    </div>\n\n    <div class=\"pages\"></div>\n\n    <div class=\"section\">\n        <table>\n            <thead>\n            <th>";
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

this["ThirdChannel"]["templates"]["list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["teams_table_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\n    <td><a href=\""
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
    + "</td>\n</tr>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["filters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"filter-component\" data-filter-param=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"filter-item\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"expand-indicator\"></span>\n            ";
  stack1 = helpers.each.call(depth0, (depth1 && depth1.applied), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"filter-list\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.filterId), (depth1 && depth1.filterId), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.filterId), (depth1 && depth1.filterId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <div class=\"active-filter\">\n                            <div class=\"btn default ic_check\"></div>\n                            <span>&nbsp;"
    + escapeExpression(((stack1 = (depth0 && depth0[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                        </div>\n                    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"filter-list-item\"><div class=\"btn default\">&nbsp;</div>"
    + escapeExpression(((stack1 = (depth0 && depth0[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.available), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["ThirdChannel"]["templates"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"section\">\n    <div class=\"loading\">\n        <div class=\"fa fa-spin fa-spinner\"></div> Loading...\n    </div>\n</div>\n\n";
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
  if (helper = helpers.lastPage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastPage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.lastPage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastPage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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

return this["ThirdChannel"]["templates"];

});