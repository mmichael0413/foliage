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

Handlebars.registerPartial("address", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.street1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.street1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <br class=\"visible-xs\"/> ";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.zip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.zip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }));

Handlebars.registerPartial("about_image_input", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type=\"hidden\" id=\"aboutImage\" name=\"aboutImages[";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].temp\" value=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }));

Handlebars.registerPartial("about_photo_input", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type=\"hidden\" id=\"aboutPhoto\" name=\"aboutPhotos[";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "].temp\" value=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }));

Handlebars.registerPartial("profile_image_input", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type=\"hidden\" id=\"profileImage\" name=\"profileImage.temp\" value=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>";
  return buffer;
  }));

Handlebars.registerPartial("profile_photo_input", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type=\"hidden\" id=\"profilePhoto\" name=\"profilePhoto.temp\" value=\"";
  if (helper = helpers.temp_location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.temp_location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>";
  return buffer;
  }));

Handlebars.registerPartial("upload_form", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n    <form accept-charset=\"UTF-8\" action=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1.action)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"s3_uploader\" enctype=\"multipart/form-data\" method=\"post\">\n        <div style=\"display:none\">\n            <input name=\"utf8\" type=\"hidden\" value=\"✓\">\n        </div>\n        <input id=\"key\" name=\"key\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input id=\"acl\" name=\"acl\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1.acl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input id=\"AWSAccessKeyId\" name=\"AWSAccessKeyId\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1.AWSAccessKeyId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input id=\"policy\" name=\"policy\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1.policy)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input id=\"signature\" name=\"signature\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1.signature)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input id=\"success_action_status\" name=\"success_action_status\" type=\"hidden\"\n               value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1.success_action_status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input id=\"X-Requested-With\" name=\"X-Requested-With\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.s3)),stack1 == null || stack1 === false ? stack1 : stack1['X-Requested-With'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n\n    </form>\n\n";
  return buffer;
  }));

Handlebars.registerPartial("about_images", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "disabled";
  }

function program3(depth0,data) {
  
  
  return "disabled=\"disabled\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"image col-sm-1-1 col-1-5\">\n                    <input type=\"hidden\" id=\"aboutImage\" name=\"aboutImages["
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "].temp\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.temp)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n\n                    <img src=\""
    + escapeExpression(((stack1 = (depth0 && depth0.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Image\">\n                    <div class=\"delete\">\n                        <a class=\"btn primary removeImage\"><i class=\"ic ic_x\"></i>Delete</a>\n                    </div>\n                    <div class=\"divider visible-xs\"></div>\n                </div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">Show us who you are</div>\n    <div class=\"body images aboutImageInput\" required=\"\" data-image-type=\"aboutImage\">\n\n        <label>Upload up to 5 pictures to give us a glimpse into who you are and what you like.</label>\n        <div class=\"clear\"></div>\n        <div class=\"fileUpload btn primary ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.aboutImageCount), 4, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.aboutImageCount), 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            Upload\n        <input accept=\"image/*\" data-input=\"false\" id=\"aboutImageInput\" name=\"aboutImageInput\" type=\"file\" ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.aboutImageCount), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.aboutImageCount), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        </div>\n        <div class=\"image-viewer pure-g\">\n            ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.aboutImages), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("address_input", Handlebars.template(function (Handlebars,depth0,helpers,partials,data,depth1) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.select || (depth1 && depth1.select),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth1 && depth1.address)),stack1 == null || stack1 === false ? stack1 : stack1.state), options) : helperMissing.call(depth0, "select", ((stack1 = (depth1 && depth1.address)),stack1 == null || stack1 === false ? stack1 : stack1.state), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.abbr)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<input type=\"text\" class=\"low-margin\" name=\"residentialAddress.city\" placeholder=\"City\"\n       value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n<select name=\"residentialAddress.state\" data-rule-required=\"true\">\n    <option value=\"\">Select State/Province</option>\n    ";
  stack1 = helpers.each.call(depth0, (depth1 && depth1.states), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>";
  return buffer;
  }));

Handlebars.registerPartial("basic_information", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">General Info</div>\n    <div class=\"body\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" id=\"firstName\" name=\"firstName\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"First Name\"\n               data-rule-required=\"true\"/>\n\n        <label for=\"lastName\">Last Name</label>\n        <input id=\"lastName\" type=\"text\" name=\"lastName\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Last name\"\n               data-rule-required=\"true\"/>\n\n        <label>Gender</label>\n        <div class=\"radio-input-group bottom\">\n            <label class='radio'><input type='radio' name='gender' value='Male' ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.gender), "Male", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.gender), "Male", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  data-rule-required=\"true\"/> Male</label>\n            <label class='radio'><input type='radio' name='gender' value='Female' ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.gender), "Female", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.gender), "Female", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  data-rule-required=\"true\"/> Female</label>\n        </div>\n\n        <div class=\"clear\"></div>\n        <label for=\"phone\">Phone</label>\n        <input id=\"phone\" name=\"phone\" type=\"text\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Phone number\"\n               data-rule-required=\"true\"/>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("interest_view", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"col-sm-1-3 col-md-1-4 col-1-7\">\n                    <i class=\"ic "
    + escapeExpression(((stack1 = (depth0 && depth0.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i><br/>\n                    <span>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                </div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">How I spend my time</div>\n    <div class=\"body interests\">\n        <div class=\"pure-g\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.interests), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n    </div>\n\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("interests_input", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <div class=\"col-sm-1-3 col-md-1-4 col-1-6\">\n                        <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"interests\" class=\"interest\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.interests), options) : helperMissing.call(depth0, "contains", (depth0 && depth0.name), ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.interests), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-rule-required=\"true\"/>\n                        <label for=\""
    + escapeExpression(((stack1 = (depth0 && depth0.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"ic "
    + escapeExpression(((stack1 = (depth0 && depth0.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></label><br/>\n                        <label for=\""
    + escapeExpression(((stack1 = (depth0 && depth0.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" >"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n                    </div>\n                ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">How do you spend your time?</div>\n    <div class=\"body\">\n        <div class=\"input-group interests\">\n            <div class=\"pure-g\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.interests), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("owns_car", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div class=\"card\">\n    <div class=\"body\">\n        <label>Do you own a reliable car that you would be willing to drive to and from stores (if compensated)?</label>\n\n        <div class='radio-input-group bottom'>\n            <label class='radio'><input type='radio' name='ownsCar' value='Yes'\n                                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.ownsCar), "Yes", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.ownsCar), "Yes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  data-rule-required=\"true\"/> Yes</label>\n            <label class='radio'><input type='radio' name='ownsCar' value='No'\n                                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.ownsCar), "No", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.ownsCar), "No", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  data-rule-required=\"true\"/> No</label>\n        </div>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("paypal", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"card\">\n    <div class=\"header\">Paypal Email</div>\n    <div class=\"body\">\n        <label>Providing this enables us to pay you.</label>\n        <input type=\"email\" name=\"paypalEmail\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.paypalEmail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Paypal Email\" data-rule-required=\"true\"/>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("profile_image", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "disabled";
  }

function program3(depth0,data) {
  
  
  return "disabled=\"disabled\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"image col-sm-1-1 col-2-5\">\n                    <!-- migrated users do not have temp image locations -->\n                    <input type=\"hidden\" id=\"profileImage\" name=\"profileImage.temp\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.profileImage)),stack1 == null || stack1 === false ? stack1 : stack1.temp)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n                    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.profileImage)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Image\">\n\n                    <div class=\"delete\">\n                        <a class=\"btn primary removeImage\"><i class=\"ic ic_x\"></i>Delete</a>\n                    </div>\n                </div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">Upload Profile Photo</div>\n    <div class=\"body images profileImageInput\" required=\"\" data-image-type=\"profileImage\">\n        <div class=\"fileUpload btn primary ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.profileImage), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            Upload\n            <input accept=\"image/*\" data-input=\"false\" id=\"profileImageInput\" name=\"profileImageInput\" data-rule-required=\"true\" type=\"file\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.profileImage)),stack1 == null || stack1 === false ? stack1 : stack1.medium), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        </div>\n\n        <div class=\"image-viewer pure-g\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.profileImage)),stack1 == null || stack1 === false ? stack1 : stack1.medium), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("residential_address", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.select || (depth1 && depth1.select),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state), options) : helperMissing.call(depth0, "select", ((stack1 = ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.abbr)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">Residential Address</div>\n    <div class=\"body compressed\">\n        <label>(Where you currently live / where you leave from to begin store visits)</label>\n        <input type=\"text\" class=\"low-margin\" name=\"residentialAddress.street1\" placeholder=\"Street\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.street1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  data-rule-required=\"true\"/>\n        <input type=\"text\" class=\"low-margin\" name=\"residentialAddress.city\" placeholder=\"City\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n        <select name=\"residentialAddress.state\" data-rule-required=\"true\">\n            <option value=\"\">Select State/Province</option>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.states), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <input type=\"text\" name=\"residentialAddress.zip\" placeholder=\"Zip Code\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("shipping_address", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.select || (depth1 && depth1.select),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.shippingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state), options) : helperMissing.call(depth0, "select", ((stack1 = ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.shippingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.abbr)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">Shipping Address</div>\n    <div class=\"body\">\n        Reliable address we can mail program materials to\n        <input type=\"text\" class=\"low-margin\" name=\"shippingAddress.street1\" placeholder=\"Street\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shippingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.street1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\" />\n        <input type=\"text\" class=\"low-margin\" name=\"shippingAddress.city\" placeholder=\"City\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shippingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n        <select name=\"shippingAddress.state\" data-rule-required=\"true\">\n            <option value=\"\">Select State/Province</option>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.states), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <input type=\"text\" name=\"shippingAddress.zip\" placeholder=\"Zip Code\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shippingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("shirt_shoe_form", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n            <option value=\"Men - S\">Men - S</option>\n            <option value=\"Men - M\">Men - M</option>\n            <option value=\"Men - L\">Men - L</option>\n            <option value=\"Men - XL\">Men - XL</option>\n            <option value=\"Men - XXL\">Men - XXL</option>\n            <option value=\"Women - XS\">Women - XS</option>\n            <option value=\"Women - S\">Women - S</option>\n            <option value=\"Women - M\">Women - M</option>\n            <option value=\"Women - L\">Women - L</option>\n            <option value=\"Women - XL\">Women - XL</option>\n            ";
  }

function program3(depth0,data) {
  
  
  return "\n            <option value=\"Men - 7\">Men - 7</option>\n            <option value=\"Men - 7.5\">Men - 7.5</option>\n            <option value=\"Men - 8\">Men - 8</option>\n            <option value=\"Men - 8.5\">Men - 8.5</option>\n            <option value=\"Men - 9\">Men - 9</option>\n            <option value=\"Men - 9.5\">Men - 9.5</option>\n            <option value=\"Men - 10\">Men - 10</option>\n            <option value=\"Men - 10.5\">Men - 10.5</option>\n            <option value=\"Men - 11\">Men - 11</option>\n            <option value=\"Men - 11.5\">Men - 11.5</option>\n            <option value=\"Men - 12\">Men - 12</option>\n            <option value=\"Men - 12.5\">Men - 12.5</option>\n            <option value=\"Men - 13\">Men - 13</option>\n            <option value=\"Men - 13.5\">Men - 13.5</option>\n            <option value=\"Men - 14\">Men - 14</option>\n            <option value=\"Men - 14.5\">Men - 14.5</option>\n            <option value=\"Men - 15\">Men - 15</option>\n            <option value=\"Men - 15.5\">Men - 15.5</option>\n            <option value=\"Women - 5\">Women - 5</option>\n            <option value=\"Women - 5.5\">Women - 5.5</option>\n            <option value=\"Women - 6\">Women - 6</option>\n            <option value=\"Women - 6.5\">Women - 6.5</option>\n            <option value=\"Women - 7\">Women - 7</option>\n            <option value=\"Women - 7.5\">Women - 7.5</option>\n            <option value=\"Women - 8\">Women - 8</option>\n            <option value=\"Women - 8.5\">Women - 8.5</option>\n            <option value=\"Women - 9\">Women - 9</option>\n            <option value=\"Women - 9.5\">Women - 9.5</option>\n            <option value=\"Women - 10\">Women - 10</option>\n            <option value=\"Women - 10.5\">Women - 10.5</option>\n            <option value=\"Women - 11\">Women - 11</option>\n            <option value=\"Women - 11.5\">Women - 11.5</option>\n            <option value=\"Women - 12\">Women - 12</option>\n            <option value=\"Women - 12.5\">Women - 12.5</option>\n            ";
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">Additional Information</div>\n    <div class=\"body\">\n        <label for=\"shirtSize\">Shirt Size:</label>\n        <select name=\"shirtSize\" id=\"shirtSize\" data-rule-required=\"true\">\n            <option value=\"\">Select Size</option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shirtSize), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shirtSize), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n\n        <label for=\"shoeSize\">Shoe Size</label>\n        <select name=\"shoeSize\" id=\"shoeSize\" data-rule-required=\"true\">\n            <option value=\"\">Select Size</option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shoeSize), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shoeSize), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("university", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "checked";
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.select || (depth1 && depth1.select),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.graduationYear), options) : helperMissing.call(depth0, "select", ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.graduationYear), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    <option value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"body\">\n        <label>Do/Did you attend college?</label>\n        <div class='radio-input-group spacer'>\n            <label class='radio'><input type='radio' name='attendedCollege' value='Yes' ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.attendedCollege), "Yes", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.attendedCollege), "Yes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  data-rule-required=\"true\"/> Yes</label>\n            <div class=\"clear visible-xs\"></div>\n            <label class='radio'><input type='radio' name='attendedCollege' value='No' ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.attendedCollege), "No", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.attendedCollege), "No", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  data-rule-required=\"true\"/> No, college would have slowed me down, went straight to work</label>\n        </div>\n        <div class=\"pure-g\">\n            <label class=\"col-1-1\">Where did you attend school?</label>\n            <input type=\"text\" class=\"typeahead\" name=\"university.name\" placeholder=\"Select College/University\"\n                   value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.university)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n            <input type=\"hidden\" name=\"university.id\" id=\"university\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.university)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n        </div>\n\n        <label for=\"graduationYear\">When did you graduate</label>\n\n        <select name=\"graduationYear\" id=\"graduationYear\">\n            <option value=\"\">When did you graduate?</option>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.graduationYears), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n    </div>\n</div>\n";
  return buffer;
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

this["ThirdChannel"]["templates"]["shared/layout/toggle_filter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<button class=\"btn default toggle-filter\">\n    <i class=\"ic fa ic_filter\"></i>\n</button>";
  });

this["ThirdChannel"]["templates"]["shared/s3uploader/application_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["shared/s3uploader/checkin_group_label_options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["shared/s3uploader/checkin_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["shared/s3uploader/checkin_image_group_select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["shared/s3uploader/error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"uploader-error\">\n    <div class=\"pull-right error-close ic ic_x\"></div>\n    <div class=\"message\">The image uploader has encountered an error.  This is most likely due to a bad internet connection.  Please check your connection and try again or wait until you can get a better connection.</div>\n</div>\n";
  });

this["ThirdChannel"]["templates"]["shared/s3uploader/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["shared/s3uploader/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["thirdchannel/activities/sales_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <p class=\"text full\">";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p class=\"text\">QTD $ Sales: <span class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.salesChange), options)))
    + "\"><i class=\"ic "
    + escapeExpression((helper = helpers.percentageChangeIcon || (depth0 && depth0.percentageChangeIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "percentageChangeIcon", (depth0 && depth0.salesChange), options)))
    + "\"></i> "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.salesChange), options)))
    + "</span> ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showLabel), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <a class=\"details\" href=\"";
  if (helper = helpers.salesUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.salesUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">DETAILS</a>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " From LY";
  }

  buffer += "<section class=\"sales-widget\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n</section>    ";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
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
    + "\">\n                    <div class=\"badge task-label\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                    ";
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.has_summary) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.has_summary); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.has_summary) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data}
  if (helper = helpers.has_photos) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.has_photos); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.has_photos) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}
  if (helper = helpers.has_alerts) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.has_alerts); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.has_alerts) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </a>\n                ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "active";
  }

function program5(depth0,data) {
  
  
  return "<div class=\"task-info badge\"><i class=\"ic ic_feed-summary\"/></div>";
  }

function program7(depth0,data) {
  
  
  return "<div class=\"task-info badge\"><i class=\"ic ic_feed-photos\"/></div>";
  }

function program9(depth0,data) {
  
  
  return "<div class=\"task-info badge\"><i class=\"ic ic_feed-alerts\"/></div>";
  }

function program11(depth0,data) {
  
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

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <p class=\"activity-special-project\">\n                    ";
  if (helper = helpers.survey_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.survey_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </p>\n                ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), 0, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.issue_length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"issues-found\">\n                    <h3>";
  if (helper = helpers.issue_length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue_length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), "New Issue Found", "New Issues Found", options) : helperMissing.call(depth0, "pluralize", (depth0 && depth0.issue_length), "New Issue Found", "New Issues Found", options)))
    + "</h3>\n                    <ul class=\"unstyled\">\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.issues), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </ul>\n                    ";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.issue_length), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.issue_length), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <li>- ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n                        ";
  return buffer;
  }

function program19(depth0,data) {
  
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

function program21(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "                \n                <h3>"
    + escapeExpression(((stack1 = (depth1 && depth1.subject)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n                <p>";
  stack1 = ((stack1 = (depth1 && depth1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>    \n            ";
  return buffer;
  }

function program23(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                <h3>There is no Summary for this "
    + escapeExpression(((stack1 = (depth1 && depth1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".</h3>\n            ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"activity-photos\">\n\n            <div class=\"carousel\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.programWithDepth(26, program26, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href=\"#\" class=\"arrow arrow-left\">\n                    <span class=\"ic ic_left\"></span>\n                </a>\n                <a href=\"#\" class=\"arrow arrow-right\">\n                    <span class=\"ic ic_right\"></span>\n                </a>\n            </div>\n\n        </div>\n        ";
  return buffer;
  }
function program26(depth0,data,depth1) {
  
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

function program28(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a class=\"activity_like_button gray\" data-id=\"";
  if (helper = helpers.activity_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activity_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">\n                        Like\n                    </a>\n                    ";
  return buffer;
  }

function program30(depth0,data) {
  
  
  return "\n                     Liked\n                    ";
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <span class=\"action bold\">\n                    <a href=\"";
  if (helper = helpers.report_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.report_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">Full Report</a>\n                </span>\n            ";
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"moderation-actions  visible-xs\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideable), {hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        ";
  return buffer;
  }
function program35(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"action\"><a href=\"";
  if (helper = helpers.editable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Checkin</a></span>\n                ";
  return buffer;
  }

function program37(depth0,data) {
  
  
  return "\n                    <span class=\"action\"><a href=\"#\" class=\"hide-post\">Hide Post</a></span>\n                ";
  }

function program39(depth0,data) {
  
  
  return "hidden-xs";
  }

function program41(depth0,data) {
  
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

function program43(depth0,data) {
  
  
  return "\n        <div class=\"comment new-comment\">\n\n\n        </div>\n        ";
  }

function program45(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"moderation-actions\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(46, program46, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideable), {hash:{},inverse:self.noop,fn:self.program(48, program48, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  return buffer;
  }
function program46(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <span class=\"action\"><a href=\"";
  if (helper = helpers.editable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Checkin</a></span>\n            ";
  return buffer;
  }

function program48(depth0,data) {
  
  
  return "\n            <span class=\"action\"><a href=\"#\" class=\"hide-post\">Hide Post</a></span>\n            ";
  }

  buffer += "<div class=\"activity-holder\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tasks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"activity\">\n        <div class=\"activity-meta\">\n            <img src=\"";
  if (helper = helpers.user_image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Images That Describes Me\" class=\"user-image img-circle\" onerror=\"this.src='";
  if (helper = helpers.user_image_error_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_image_error_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\"/>\n\n            <div class=\"bar-body\">\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.checkin_type), "special_project", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.checkin_type), "special_project", options));
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
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"summary\">\n            ";
  options={hash:{},inverse:self.programWithDepth(23, program23, data, depth0),fn:self.programWithDepth(21, program21, data, depth0),data:data}
  if (helper = helpers.show_summary) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.show_summary); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.show_summary) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.programWithDepth(23, program23, data, depth0),fn:self.programWithDepth(21, program21, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            \n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
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
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_like_button), {hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n            <span class=\"action bold\">\n                <a href=\"#\" class=\"start-comment\">Comment</a>\n            </span>\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "Checkin", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "Checkin", options));
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
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['show-moderation']), {hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"comment-holder ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.singleActivity), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.singleActivity), false, options));
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
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.comments_count), 3, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.comments_count), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"comments\">\n\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current_user), {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['show-moderation']), {hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/authentication/login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Login</h2>\n<form accept-charset=\"UTF-8\" action=\"/login\" class=\"new_user\" id=\"new_user\" method=\"post\">\n    <div style=\"display:none\">\n        <input name=\"utf8\" type=\"hidden\" value=\"✓\">\n        <input name=\"authenticity_token\" type=\"hidden\" value=\"";
  if (helper = helpers.authToken) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authToken); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n    <div class=\"form-group\">\n        <input autofocus=\"autofocus\" class=\"large low-margin dark\" id=\"user_email\" name=\"user[email]\" placeholder=\"Email\" type=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n        <input class=\"large low-margin dark\" id=\"user_password\" name=\"user[password]\" placeholder=\"Password\" type=\"password\">\n    </div>\n\n    <div class=\"checkbox\">\n        <input name=\"user[remember_me]\" type=\"hidden\" value=\"0\"><input id=\"user_remember_me\" name=\"user[remember_me]\" type=\"checkbox\" value=\"1\">\n        <label for=\"user_remember_me\">Keep me logged in</label></div>\n\n    <div class=\"help-block\">\n        <a href=\"/secret/new\">Forgot your password?</a><br>\n    </div>\n    <div class=\"clear\"></div>\n    <input class=\"btn primary solid\" name=\"commit\" type=\"submit\" value=\"Login\">\n</form>\n\n<div>\n    Don't have an account? <a href=\"#\" class=\"sign-up\">Sign up!</a>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/authentication/register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Create your account</h2>\n<form action=\"/register\" id=\"registration-form\" method=\"post\">\n    <div class=\"form-group\">\n        <input type=\"text\" id=\"first_name\" class=\"large dark low-margin\" placeholder=\"First Name\" name=\"user[first_name\"]>\n        <span class=\"error-message\" style=\"display: none;\"></span>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" id=\"last_name\" class=\"large dark low-margin\" placeholder=\"Last Name\" name=\"user[last_name]\">\n        <span class=\"error-message\" style=\"display: none;\"></span>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" id=\"email\" class=\"large dark low-margin\" placeholder=\"Email\" name=\"user[email]\">\n        <span class=\"error-message\" style=\"display: none;\"></span>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" id=\"password\" class=\"large dark low-margin\" placeholder=\"Password (8 Character Minimum)\" name=\"user[password]\">\n        <span class=\"error-message\" style=\"display: none;\"></span>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" id=\"password_confirmation\" class=\"large dark low-margin\" placeholder=\"Confirm Password\" name=\"user[password_confirmation]\">\n        <span class=\"error-message\" style=\"display: none;\"></span>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" id=\"zip\" class=\"large dark low-margin\" placeholder=\"Zip Code\" name=\"user[zip]\">\n        <span class=\"error-message\" style=\"display: none;\"></span>\n    </div>\n\n\n    <span class=\"tooltip\">\n            <span class=\"visible-xs\"><i class=\"fa fa-info-circle\"></i></span> <span class=\"hidden-xs\">Why are we asking for your zip code?</span>\n        </span>\n\n    <div class=\"tip\">\n        This allows us to match you with current opportunities in your geographic location.\n    </div>\n\n\n    <div class=\"clear\"></div>\n    <div class=\"form-group\">\n        <button class=\"btn primary solid\">Create Account</button>\n    </div>\n</form>\n\n<div>Already have an account? <a href=\"#\" class=\"login\">Login here.</a></div>\n";
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
    + "\" method=\"post\">\n            <input id=\"customer_store_uuid\" name=\"customer_store_uuid\" type=\"hidden\" value=\"";
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
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"pure-g\">\n    <div class=\"col-4-5\">\n        <a href=\"/programs/";
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
    + "</a><br/>\n        ";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"col-1-5\"><a href=\"#\" class=\"open-jobs\">Open <i class=\"ic ic_down\"></i> </a> </div>\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/checkins/stores"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"pure-g\">\n    <h3 class=\"col-1-2 col-md-1\">YOUR STORES</h3>\n    <h3 class=\"col-1-2 minor-m\">LAST CHECKIN</h3>\n</div>\n";
  });

this["ThirdChannel"]["templates"]["thirdchannel/checkins/tasks"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"pure-g\">\n        <div class=\"col-4-5\">\n            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.required) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.required) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"col-1-5\">\n            <form accept-charset=\"UTF-8\" action=\"";
  if (helper = helpers.form_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.form_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" method=\"post\">\n\n                <input id=\"customer_store_uuid\" name=\"customer_store_uuid\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = (depth1 && depth1.customerStoreId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                <input id=\"survey_id\" name=\"survey_id\" type=\"hidden\" value=\"";
  if (helper = helpers.survey_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.survey_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <input id=\"task_uuid\" name=\"task_uuid\" type=\"hidden\" value=\"";
  if (helper = helpers.uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <input id=\"job_uuid\" name=\"job_uuid\" type=\"hidden\" value=\"";
  if (helper = helpers.jobUUID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.jobUUID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <input id=\"type\" name=\"type\" type=\"hidden\" value=\"";
  if (helper = helpers.checkin_type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checkin_type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <input name=\"authenticity_token\" value=\""
    + escapeExpression(((stack1 = (depth1 && depth1.authenticityToken)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"hidden\">\n                <button class=\"btn primary\" name=\"commit\"><i class=\"ic fa ic_location\"></i><span>Start</span></button>\n            </form>\n        </div>\n    </div>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<span class=\"subtle-instruction\">*</span>";
  }

  buffer += "<div class=\"pure-g\">\n    <h3 class=\"col-8-12 col-md-1-2 task-item\">Tasks</h3>\n  <span class=\"subtle-instruction col-4-12 col-md-1-2\">* Required During Visit</span>\n</div>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tasks), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
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
    + "\"><span class=\"alert-count\"><i class=\"fa fa-spin ic_processing\"></i></span></a></td>\n    <td></td>\n</tr>\n";
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
    + "</td>\n<td><span class=\"alert-count\"><i class=\"fa fa-spin ic_processing\"></i></span></td>\n<td class=\"expand-indicator open\"></td>\n";
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

this["ThirdChannel"]["templates"]["thirdchannel/filters/filterable_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + " Visits in progress</h3>\n    <a href=\"/programs/";
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


  buffer += "<section class=\"section labs pure-g\">\n	<div class=\"col-1-6\">\n		<p class=\"statistic\">";
  if (helper = helpers.totalStores) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalStores); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p>Stores</p>\n	</div>\n\n	<div class=\"col-1-3\">\n		<p class=\"statistic\">";
  if (helper = helpers.states) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.states); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p>States Covered</p>\n	</div>\n\n	<div class=\"col-1-2\">\n		<p class=\"statistic\">";
  if (helper = helpers.averageUnits) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.averageUnits); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n		<p>Avg. Units on Display</p>\n	</div>	\n</section>\n";
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

  buffer += "<canvas width=\"450\" height=\"450\" class=\"retail-sales\">	</canvas>\n";
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
  


  return "<div class=\"section loading-section\">\n    <div class=\"loading\">\n        <div class=\"fa fa-spin ic_processing\"></div> Loading...\n    </div>\n</div>\n\n";
  });

this["ThirdChannel"]["templates"]["thirdchannel/loading_icon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"loading\">\n    <div class=\"fa fa-spin ic_processing\"></div> Loading...\n</div>\n\n";
  });

this["ThirdChannel"]["templates"]["thirdchannel/modals/export/error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"export-modal error\">\n    We have encountered an error.  Please contact <a href=\"mailto:techsupport@thirdchannel.com\">techsupport@thirdchannel.com</a>\n</div>";
  });

this["ThirdChannel"]["templates"]["thirdchannel/modals/export/progress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"export-modal progress\">Generating the requested file...\n    <div class=\"small\">(This may take a while, please wait.)</div>\n    <div><i class=\"ic ic_processing fa-spin\"></i></div>\n</div>";
  });

this["ThirdChannel"]["templates"]["thirdchannel/modals/export/success"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"export-modal success\">\n    Export Successful!\n    <div class=\"small\">(Please right-click the link below and choose \"Save Link As...\")</div>\n    <div><a href=\"";
  if (helper = helpers.href) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.href); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" download=\"\">Download file</a></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/modals/export/timeout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"export-modal error\">\n    The requested file has timed out.  Please contact <a href=\"mailto:techsupport@thirdchannel.com\">techsupport@thirdchannel.com</a> for further assistance.\n</div>";
  });

this["ThirdChannel"]["templates"]["thirdchannel/modals/reports/checkins/choices"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, depth0, (depth1 && depth1.answers), options) : helperMissing.call(depth0, "contains", depth0, (depth1 && depth1.answers), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</div>\n    </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n    <div class=\"selected choice all\">\n        <div class=\"pdf-hide ic_check\"></div>\n    ";
  }

function program4(depth0,data) {
  
  
  return "\n    <div class=\"choice all\">\n        <div class=\"pdf-hide ic_blank\"></div>\n    ";
  }

  buffer += "<div class=\"bbm-button pull-right\"><i class=\"ic ic_x\"></i></div>\n<h2>";
  if (helper = helpers.section) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.section); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n<div>";
  if (helper = helpers.question) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.question); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n<div class=\"choices\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.choices), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
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

this["ThirdChannel"]["templates"]["thirdchannel/profiles/stores/rows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <tr>\n        <td>\n          <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.schedule), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n        <td>";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            &nbsp;\n            <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.schedule)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" title=\"View Store Schedule\"><i class=\"ic ic_calendar\"></i></a>\n          ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n      <tr>\n        <td colspan=\"2\">No stores are assigned.</td>\n      </tr>\n    ";
  }

  buffer += "<table class=\"table\">\n  <thead>\n   <tr>\n     <th>Store Name</th>\n     <th>Address</th>\n   </tr>\n  </thead>\n  <tbody>\n    ";
  options={hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.rows) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.rows); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>";
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
  buffer += "</h3>\n    ";
  return buffer;
  }

  buffer += "<div class=\"subsection ";
  if (helper = helpers.css_class) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.css_class); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=";
  if (helper = helpers.uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"widgets\"></div>\n</div>";
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
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"info pure-g\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.label), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"col-2-3\">"
    + escapeExpression(((stack1 = (depth0 && depth0.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"task col-1\">"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"col-1-3\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": </div>\n            ";
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
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checkins), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n</tr><tr class=\"checkins hide\">\n    <td colspan=\"3\"></td>\n</tr>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/bar_chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n        <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\" target=\"_blank\">View Breakdown</a>\n    ";
  }

  buffer += "<div class=\"widget "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
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
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\" target=\"_blank\">View Breakdown</a>\n        ";
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
    + "\">\n    <div class=\"leading-dots leading-row\">\n        <span>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.prepend_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.results) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.results); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.append_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n    </div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/legend"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <h4><span style=\"color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&#9608;</span> ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n    ";
  return buffer;
  }

  buffer += "<div class=\"widget legend "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.results), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
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
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                <p>"
    + escapeExpression((helper = helpers.index_inc || (depth0 && depth0.index_inc),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index_inc", (data == null || data === false ? data : data.index), options)))
    + ". "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</p>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n            <p>N/A</p>\n        ";
  }

  buffer += "<div class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"padding-left: 70px;\">\n    <div class=\"pull-left\" style=\"margin-left: -70px;\">\n        <div class=\"circle-icon circle-md\">\n            <div class=\"circle "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.circle_css)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><div class=\"tc-icons tc-icons-md tc-icons_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></div>\n        </div>\n    </div>\n    <div class=\"pull-left\">\n        <h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n        ";
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
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\" target=\"_blank\">\n        ";
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
  
  
  return "\n            <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\" target=\"_blank\">View Breakdown</a>\n        ";
  }

function program3(depth0,data) {
  
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
    + "</p>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div>\n            <div class=\"y-axis-label-top\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.top)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            <div>\n                <div class=\"x-axis-label-left\">\n                    <div>\n                        <div class=\"l_content\">\n                            <div class=\"l_table\">\n                                <div class=\"l_table-cell\">\n                                    <div>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.left)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"x-axis-label-right\">\n                    <div>\n                        <div class=\"l_content\">\n                            <div class=\"l_table\">\n                                <div class=\"l_table-cell\">\n                                    <div>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.chartLabels)),stack1 == null || stack1 === false ? stack1 : stack1.right)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"chart\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.results), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
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

function program3(depth0,data) {
  
  
  return "\n        <a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\">View Breakdown</a>\n    ";
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
  buffer += "\n    </table>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_view_list), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/resolution_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "<a href=\"#\" class=\"breakdown-link\" tag=\"View Breakdown\" target=\"_blank\">";
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

this["ThirdChannel"]["templates"]["thirdchannel/reports/widgets/totals_averages_table"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"pure-g data-row\">\n        <div class=\"col-1-3\"><span>";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n        <div class=\"col-1-3\"><span>";
  if (helper = helpers.total) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n        <div class=\"col-1-3\"><span>";
  if (helper = helpers.average) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.average); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n    </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"widget totals-averages-table "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.config)),stack1 == null || stack1 === false ? stack1 : stack1.widget_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n    <div class=\"pure-g\">\n        <div class=\"col-1-3\"></div>\n        <div class=\"col-1-3\">Total</div>\n        <div class=\"col-1-3\">Avg/Store</div>\n    </div>\n\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
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

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/sales/breakdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section class=\"section data-section\">\n    <div class=\"pure-g\">\n        <h3 class=\"header alternate col-2-12\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">$ Sales</h3>\n            <span class=\"sub-header\">This Period, TY</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">$ Sales</h3>\n            <span class=\"sub-header\">This Period, LY</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">% Change</h3>\n            <span class=\"sub-header\">$ Store Sales</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">% Change</h3>\n            <span class=\"sub-header\">$ Account Sales</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">Units Sold</h3>\n            <span class=\"sub-header\">This Period</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">Units Sold</h3>\n            <span class=\"sub-header\">This Period, LY</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">UoH</h3>\n            <span class=\"sub-header\">TP, TY</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">UoH</h3>\n            <span class=\"sub-header\">TP, LY</span>\n        </div>\n        <div class=\"col-1-12\">\n            <h3 class=\"header alternate\">% Change</h3>\n            <span class=\"sub-header\">UoH</span>\n        </div>\n    </div>\n    <div class=\"body\"></div>\n    <div class=\"col-1-1\">\n        <span class=\"pull-right sps-logo\"></span>\n    </div>\n</section>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/sales/breakdown_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"col-2-12 breakdown-label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"col-1-12\">"
    + escapeExpression((helper = helpers.formatSalesDollarValue || (depth0 && depth0.formatSalesDollarValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesInCents), options) : helperMissing.call(depth0, "formatSalesDollarValue", (depth0 && depth0.salesInCents), options)))
    + "</div>\n<div class=\"col-1-12\">"
    + escapeExpression((helper = helpers.formatSalesDollarValue || (depth0 && depth0.formatSalesDollarValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesInCentsLY), options) : helperMissing.call(depth0, "formatSalesDollarValue", (depth0 && depth0.salesInCentsLY), options)))
    + "</div>\n<div class=\"col-1-12\">\n    <span class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.salesChange), options)))
    + "\">\n        <i class=\"ic "
    + escapeExpression((helper = helpers.percentageChangeIcon || (depth0 && depth0.percentageChangeIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "percentageChangeIcon", (depth0 && depth0.salesChange), options)))
    + "\"></i> "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.salesChange), options)))
    + "\n    </span>\n</div>\n<div class=\"col-1-12\">\n    <span class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.accountSalesChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.accountSalesChange), options)))
    + "\">\n        <i class=\"ic "
    + escapeExpression((helper = helpers.percentageChangeIcon || (depth0 && depth0.percentageChangeIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.accountSalesChange), options) : helperMissing.call(depth0, "percentageChangeIcon", (depth0 && depth0.accountSalesChange), options)))
    + "\"></i> "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.accountSalesChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.accountSalesChange), options)))
    + "\n    </span>\n</div>\n<div class=\"col-1-12\">"
    + escapeExpression((helper = helpers.formatSalesValue || (depth0 && depth0.formatSalesValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsSold), options) : helperMissing.call(depth0, "formatSalesValue", (depth0 && depth0.unitsSold), options)))
    + "</div>\n<div class=\"col-1-12\">"
    + escapeExpression((helper = helpers.formatSalesValue || (depth0 && depth0.formatSalesValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsSoldLY), options) : helperMissing.call(depth0, "formatSalesValue", (depth0 && depth0.unitsSoldLY), options)))
    + "</div>\n<div class=\"col-1-12\">"
    + escapeExpression((helper = helpers.formatSalesValue || (depth0 && depth0.formatSalesValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHand), options) : helperMissing.call(depth0, "formatSalesValue", (depth0 && depth0.unitsOnHand), options)))
    + "</div>\n<div class=\"col-1-12\">"
    + escapeExpression((helper = helpers.formatSalesValue || (depth0 && depth0.formatSalesValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHandLY), options) : helperMissing.call(depth0, "formatSalesValue", (depth0 && depth0.unitsOnHandLY), options)))
    + "</div>\n<div class=\"col-1-12\">\n    <span class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHandChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.unitsOnHandChange), options)))
    + "\">\n        "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHandChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.unitsOnHandChange), options)))
    + "\n    </span>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/sales/chart_breakdowns"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"section data-section\">\n    <div class=\"pure-g\">\n        <div class=\"col-1-2\" id=\"brand-percent-of-sales\">\n            <h3>% of Sales By Brand</h3>\n            <p>This period</p>\n            <div class=\"chart\"></div>\n        </div>\n        <div class=\"col-1-2\" id=\"brand-change-in-sales\">\n            <h3>% Change in Sales</h3>\n            <p>Compared to this period previous year</p>\n            <div class=\"chart horizontal-bar\"></div>\n        </div>\n        <div class=\"col-1-1\">\n            <span class=\"pull-right sps-logo\"></span>\n        </div>\n    </div>\n</section>";
  });

this["ThirdChannel"]["templates"]["thirdchannel/store_profile/sales/overview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section class=\"section data-section\">\n    <div class=\"pure-g\">\n        <div class=\"col-1-1\">\n            <div class=\"pull-left\">\n                <h2>Overview</h2>\n            </div>\n            <div class=\"pull-right\">\n                <a href=\"#\" class=\"prev-quarter\">Previous Quarter</a>\n                Q";
  if (helper = helpers.current_time_period) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_time_period); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.current_year) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_year); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                <a href=\"#\" class=\"next-quarter\">Next Quarter</a>\n            </div>\n        </div>\n        <div class=\"col-1-4\">\n            <h2>"
    + escapeExpression((helper = helpers.formatSalesDollarValue || (depth0 && depth0.formatSalesDollarValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.accountSalesInCents), options) : helperMissing.call(depth0, "formatSalesDollarValue", (depth0 && depth0.accountSalesInCents), options)))
    + "</h2>\n            <p>Total $ Account Sales</p>\n        </div>\n        <div class=\"col-1-4\">\n            <h2>"
    + escapeExpression((helper = helpers.formatSalesDollarValue || (depth0 && depth0.formatSalesDollarValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesInCents), options) : helperMissing.call(depth0, "formatSalesDollarValue", (depth0 && depth0.salesInCents), options)))
    + "</h2>\n            <p>Total $ Store Sales</p>\n        </div>\n        <div class=\"col-1-4\">\n            <h2>"
    + escapeExpression((helper = helpers.formatSalesValue || (depth0 && depth0.formatSalesValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsSold), options) : helperMissing.call(depth0, "formatSalesValue", (depth0 && depth0.unitsSold), options)))
    + "</h2>\n            <p>Units Sold</p>\n        </div>\n        <div class=\"col-1-4\">\n            <h2>"
    + escapeExpression((helper = helpers.formatSalesValue || (depth0 && depth0.formatSalesValue),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHand), options) : helperMissing.call(depth0, "formatSalesValue", (depth0 && depth0.unitsOnHand), options)))
    + "</h2>\n            <p>Units OH</p>\n        </div>\n\n        <div class=\"col-1-4\">\n            <h2 class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.accountSalesChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.accountSalesChange), options)))
    + "\">\n                <i class=\"ic "
    + escapeExpression((helper = helpers.percentageChangeIcon || (depth0 && depth0.percentageChangeIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.accountSalesChange), options) : helperMissing.call(depth0, "percentageChangeIcon", (depth0 && depth0.accountSalesChange), options)))
    + "\"></i> "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.accountSalesChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.accountSalesChange), options)))
    + "\n            </h2>\n            <p>Compared to this period last year</p>\n        </div>\n        <div class=\"col-1-4\">\n            <h2 class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.salesChange), options)))
    + "\">\n                <i class=\"ic "
    + escapeExpression((helper = helpers.percentageChangeIcon || (depth0 && depth0.percentageChangeIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "percentageChangeIcon", (depth0 && depth0.salesChange), options)))
    + "\"></i> "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.salesChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.salesChange), options)))
    + "\n            </h2>\n            <p>Compared to this period last year</p>\n        </div>\n        <div class=\"col-1-4\">\n            <h2 class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsSoldChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.unitsSoldChange), options)))
    + "\">\n                <i class=\"ic "
    + escapeExpression((helper = helpers.percentageChangeIcon || (depth0 && depth0.percentageChangeIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsSoldChange), options) : helperMissing.call(depth0, "percentageChangeIcon", (depth0 && depth0.unitsSoldChange), options)))
    + "\"></i> "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsSoldChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.unitsSoldChange), options)))
    + "\n            </h2>\n            <p>Compared to this period last year</p>\n        </div>\n        <div class=\"col-1-4\">\n            <h2 class=\"percentage-change "
    + escapeExpression((helper = helpers.percentageChangeClass || (depth0 && depth0.percentageChangeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHandChange), options) : helperMissing.call(depth0, "percentageChangeClass", (depth0 && depth0.unitsOnHandChange), options)))
    + "\">\n                <i class=\"ic "
    + escapeExpression((helper = helpers.percentageChangeIcon || (depth0 && depth0.percentageChangeIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHandChange), options) : helperMissing.call(depth0, "percentageChangeIcon", (depth0 && depth0.unitsOnHandChange), options)))
    + "\"></i> "
    + escapeExpression((helper = helpers.formatPercentageChange || (depth0 && depth0.formatPercentageChange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitsOnHandChange), options) : helperMissing.call(depth0, "formatPercentageChange", (depth0 && depth0.unitsOnHandChange), options)))
    + "\n            </h2>\n            <p>Compared to this period last year</p>\n        </div>\n    </div>\n</section>";
  return buffer;
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
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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

this["ThirdChannel"]["templates"]["erudition/application/create"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <input type=\"text\" class=\"low-margin\" name=\"residentialAddress.street1\" placeholder=\"Street\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.street1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n            ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.select || (depth1 && depth1.select),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state), options) : helperMissing.call(depth0, "select", ((stack1 = ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.abbr)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                    ";
  return buffer;
  }

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.select || (depth1 && depth1.select),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.heardAboutUs), options) : helperMissing.call(depth0, "select", ((stack1 = (depth1 && depth1.person)),stack1 == null || stack1 === false ? stack1 : stack1.heardAboutUs), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <option value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                    ";
  return buffer;
  }

  buffer += "<h1 class=\"subheader\">Create Application</h1>\n<h2>Step 1 of 2</h2>\n";
  stack1 = self.invokePartial(partials.upload_form, 'upload_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n<form action=\"/program/";
  if (helper = helpers.programId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.programId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/application/save\" class=\"profile-form\" method=\"post\">\n    ";
  stack1 = self.invokePartial(partials.profile_image, 'profile_image', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = self.invokePartial(partials.basic_information, 'basic_information', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = self.invokePartial(partials.university, 'university', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"card\">\n        <div class=\"header\">Where you currently live?\n\n        <span class=\"tooltip\">\n            <span class=\"visible-xs\"><i class=\"fa fa-info-circle\"></i></span> <span class=\"hidden-xs\">Why are we asking this?</span>\n        </span>\n\n            <div class=\"tip\">\n                This allows us to match you with current opportunities in your geographic location.\n            </div>\n        </div>\n\n\n        <div class=\"body compressed\">\n            <label></label>\n\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.street1), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <input type=\"text\" class=\"low-margin\" name=\"residentialAddress.city\" placeholder=\"City\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n            <select name=\"residentialAddress.state\" data-rule-required=\"true\">\n                <option value=\"\">Select State/Province</option>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.states), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n            <input type=\"text\" class=\"low-margin\" name=\"residentialAddress.zip\" placeholder=\"Zip\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rule-required=\"true\"/>\n\n        </div>\n    </div>\n    ";
  stack1 = self.invokePartial(partials.about_images, 'about_images', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = self.invokePartial(partials.interests_input, 'interests_input', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = self.invokePartial(partials.owns_car, 'owns_car', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"card\">\n        <div class=\"body\">\n            <label for=\"heardAboutUs\">How did you hear about us?</label>\n\n            <select name=\"heardAboutUs\" id=\"heardAboutUs\" data-rule-required=\"true\">\n                <option value=\"\">Select</option>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.choices), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            </select>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"body\">\n            <label for=\"brandAmbassador\">Have you been a brand ambassador or represented a brand before?</label>\n            <textarea name=\"brandAmbassador\" id=\"brandAmbassador\" cols=\"30\" rows=\"10\"\n                      class=\"expanding-wrapper double\" data-rule-required=\"true\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.brandAmbassador)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n        </div>\n    </div>\n\n    <div class=\"card\">\n\n        <div class=\"body\">\n            <label for=\"retailExperience\">Do you have any experience working in retail?</label>\n            <textarea name=\"retailExperience\" id=\"retailExperience\" cols=\"30\" rows=\"10\"\n                      class=\"expanding-wrapper double\" data-rule-required=\"true\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.retailExperience)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n        </div>\n    </div>\n\n    <div class=\"button-row\">\n        <a href=\"";
  if (helper = helpers.cancelUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cancelUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn inverse\">Cancel</a>\n        <input type=\"submit\" class=\"btn primary submit\" value=\"Continue\" data-input=\"false\"/>\n    </div>\n\n    <br/>\n</form>\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["erudition/ftue/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<h1>Program Setup</h1>\n<div class=\"card\">\n    <div class=\"header\">*All fields must be completed.</div>\n</div>\n\n<form action=\"/profile/save/ftue/program/";
  if (helper = helpers.programUUID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.programUUID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"profile-form\" method=\"post\">\n    ";
  stack1 = self.invokePartial(partials.paypal, 'paypal', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.residential_address, 'residential_address', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.shipping_address, 'shipping_address', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.shirt_shoe_form, 'shirt_shoe_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"button-row\">\n        <input type=\"submit\" class=\"btn primary submit\" value=\"Save\" data-input=\"false\"/>\n    </div>\n</form>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["erudition/profile/banner"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <img src=\""
    + escapeExpression(((stack1 = (depth0 && depth0.large)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"ljkl\"/>\n        ";
  return buffer;
  }

  buffer += "<div class=\"bannerImages\">\n    <div class=\"about-images\">\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.aboutImages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"clear\"></div>\n</div>";
  return buffer;
  });

this["ThirdChannel"]["templates"]["erudition/profile/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<h1 class=\"subheader\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.fullName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n<h2>Edit Profile</h2>\n\n";
  stack1 = self.invokePartial(partials.upload_form, 'upload_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<form action=\"";
  if (helper = helpers.saveUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.saveUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"profile-form\" method=\"post\">\n    ";
  stack1 = self.invokePartial(partials.profile_image, 'profile_image', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.basic_information, 'basic_information', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.university, 'university', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.paypal, 'paypal', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.residential_address, 'residential_address', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.shipping_address, 'shipping_address', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.interests_input, 'interests_input', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.about_images, 'about_images', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.shirt_shoe_form, 'shirt_shoe_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.owns_car, 'owns_car', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <input type=\"hidden\" name=\"referer\" value=\"";
  if (helper = helpers.referer) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.referer); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    <input type=\"hidden\" name=\"programUUID\" value=\"";
  if (helper = helpers.programUUID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.programUUID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n\n    <div class=\"button-row\">\n        <a href=\"";
  if (helper = helpers.referer) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.referer); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn inverse\">Cancel</a>\n        <input type=\"submit\" class=\"btn primary submit\" value=\"Save\" data-input=\"false\"/>\n    </div>\n</form>\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["erudition/profile/view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"action-row\">\n        <a href=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editUrl), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"light\"><i\n                class=\"ic ic_edit\"></i> Edit Info</a>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.editUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.editUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "/profile/edit/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <ul class=\"nav tabbed-nav\">\n        <li class=\"tab active\"><a href=\"#\">Profile</a></li>\n        <li class=\"tab\"><a href=\"";
  if (helper = helpers.activityUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.activityUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"\">Activities</a></li>\n        <li class=\"tab\"><a href=\"";
  if (helper = helpers.storeUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.storeUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Stores</a></li>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notificationUrl), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <li class=\"tab\"><a href=\"";
  if (helper = helpers.notificationUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.notificationUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Notification Preferences</a></li>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Paypal Email:</div>\n        <div class=\"col-3-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.paypalEmail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    </div>\n    ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.address, 'address', ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "\n                Not Available\n            ";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.address, 'address', ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shippingAddress), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.interest_view, 'interest_view', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"card\">\n    <div class=\"header\">Additional Information</div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Shirt Size:</div>\n        <div class=\"col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shirtSize), {hash:{},inverse:self.program(15, program15, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Shoe Size:</div>\n        <div class=\"col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shoeSize), {hash:{},inverse:self.program(15, program15, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>\n";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shirtSize)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shoeSize)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"card\">\n        <div class=\"body pure-g\">\n            <div class=\"col-1-5 col-sm-1-1 about-images\">\n\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.aboutImages), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <img src=\""
    + escapeExpression(((stack1 = (depth0 && depth0.large)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" onerror=\"this.src='/assets/missing.jpg'\"/>\n                ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canEdit), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"page-heading\">\n    <div>\n        <img class=\"user-image img-circle\" onerror=\"this.src='/assets/user/missing.jpg'\"\n             src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.profileImage)),stack1 == null || stack1 === false ? stack1 : stack1.small)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n    <div>\n        <h1>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.fullName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n        ";
  if (helper = helpers.universityLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.universityLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayResidential), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  if (helper = helpers.userLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n\n    </div>\n</div>\n\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.activityUrl), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n<div class=\"card\">\n    <div class=\"header\">Contact Information</div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Email:</div>\n        <div class=\"col-3-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Phone Number:</div>\n        <div class=\"col-3-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    </div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showAllFields), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n<div class=\"card\">\n    <div class=\"header\">Address</div>\n\n    <div class=\"body pure-g\">\n        <div class=\"col-sm-1-1 col-1-4\">Residential Address:</div>\n        <div class=\"col-sm-1-1 col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayResidential), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-sm-1-1 col-1-4\">Shipping Address:</div>\n        <div class=\"col-sm-1-1 col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayShipping), {hash:{},inverse:self.program(15, program15, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.interests), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showAllFields), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.aboutImageCount), 0, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.aboutImageCount), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["ThirdChannel"]["templates"]["erudition/shared/alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<i class=\"close ic ic_x\"></i>\n";
  if (helper = helpers.alertText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alertText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  });

return this["ThirdChannel"]["templates"];

});