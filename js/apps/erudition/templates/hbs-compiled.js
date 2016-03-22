define(['handlebars'], function(Handlebars) {

this["erudition"] = this["erudition"] || {};
this["erudition"]["templates"] = this["erudition"]["templates"] || {};

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

Handlebars.registerPartial("opportunity", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"body pure-g\">\n    <div class=\"col-1-2 col-md-1\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"col-1-2 col-md-1\">";
  if (helper = helpers.opportunityUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.opportunityUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("user", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"body pure-g\">\n    <div class=\"col-2-5 col-md-1\">";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"col-2-5 col-md-1\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"col-1-5 col-md-1\"><a href=\"/profile/edit/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit Profile</a></div>\n</div>";
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

  buffer += "<div class=\"card\">\n    <div class=\"header\">How do you spend your time?</div>\n    <div class=\"body\">\n        <div class=\"radio-input-group interests\">\n            <div class=\"pure-g\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.interests), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("notifications", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n                <option value=\"Yes\">Yes</option>\n                <option value=\"No\">No</option>\n            ";
  }

  buffer += "<div class=\"card\">\n    <div class=\"header\">Notification Preferences</div>\n\n    <div class=\"body\">\n\n        <label for=\"emailOpportunities\">Would you like to receive emails about future opportunities?</label>\n\n        <select name=\"emailOpportunities\" id=\"emailOpportunities\" data-rule-required=\"true\">\n            <option value=\"\">Select Preference</option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.emailOpportunities), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.emailOpportunities), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n\n    </div>\n</div>";
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

this["erudition"]["templates"]["shared/layout/action_buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["shared/layout/main_navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["shared/layout/toggle_filter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<button class=\"btn default toggle-filter\">\n    <i class=\"ic fa ic_filter\"></i>\n</button>";
  });

this["erudition"]["templates"]["shared/s3uploader/application_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["shared/s3uploader/checkin_group_label_options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["shared/s3uploader/checkin_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["shared/s3uploader/checkin_image_group_select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["shared/s3uploader/error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"uploader-error\">\n    <div class=\"pull-right error-close ic ic_x\"></div>\n    <div class=\"message\">The image uploader has encountered an error.  This is most likely due to a bad internet connection.  Please check your connection and try again or wait until you can get a better connection.</div>\n</div>\n";
  });

this["erudition"]["templates"]["shared/s3uploader/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["shared/s3uploader/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["erudition/application/create"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["erudition/ftue/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["erudition/profile/banner"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["erudition/profile/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.notifications, 'notifications', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <input type=\"hidden\" name=\"referer\" value=\"";
  if (helper = helpers.referer) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.referer); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    <input type=\"hidden\" name=\"programUUID\" value=\"";
  if (helper = helpers.programUUID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.programUUID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    <input type=\"hidden\" name=\"validate\" value=\"";
  if (helper = helpers.validate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.validate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n\n    <div class=\"button-row\">\n        <a href=\"";
  if (helper = helpers.referer) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.referer); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn inverse\">Cancel</a>\n        <input type=\"submit\" class=\"btn primary submit\" value=\"Save\" data-input=\"false\"/>\n    </div>\n</form>\n\n";
  return buffer;
  });

this["erudition"]["templates"]["erudition/profile/view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += "\n<div class=\"card\">\n    <div class=\"header\">Contact Information</div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Email:</div>\n        <div class=\"col-3-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Phone Number:</div>\n        <div class=\"col-3-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Paypal Email:</div>\n        <div class=\"col-3-4\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.paypalEmail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    </div>\n</div>\n\n\n<div class=\"card\">\n    <div class=\"header\">Address</div>\n\n    <div class=\"body pure-g\">\n        <div class=\"col-sm-1-1 col-1-4\">Residential Address:</div>\n        <div class=\"col-sm-1-1 col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayResidential), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-sm-1-1 col-1-4\">Shipping Address:</div>\n        <div class=\"col-sm-1-1 col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayShipping), {hash:{},inverse:self.program(14, program14, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>\n";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.address, 'address', ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.residentialAddress), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\n                Not Available\n            ";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.address, 'address', ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shippingAddress), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.interest_view, 'interest_view', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"card\">\n    <div class=\"header\">Additional Information</div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Shirt Size:</div>\n        <div class=\"col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shirtSize), {hash:{},inverse:self.program(14, program14, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"body pure-g\">\n        <div class=\"col-1-4\">Shoe Size:</div>\n        <div class=\"col-3-4\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shoeSize), {hash:{},inverse:self.program(14, program14, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>\n";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shirtSize)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.shoeSize)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"card\">\n        <div class=\"body pure-g\">\n            <div class=\"col-1-5 col-sm-1-1 about-images\">\n\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.aboutImages), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n";
  return buffer;
  }
function program26(depth0,data) {
  
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
  buffer += "\n\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showAllFields), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.person)),stack1 == null || stack1 === false ? stack1 : stack1.interests), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showAllFields), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.if_gt || (depth0 && depth0.if_gt),options={hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.aboutImageCount), 0, options) : helperMissing.call(depth0, "if_gt", (depth0 && depth0.aboutImageCount), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["erudition"]["templates"]["erudition/recruiting/opportunities/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<h1>Opportunities</h1>\n<div id=\"opportunities\">\n    ";
  stack1 = self.invokePartial(partials.loading, 'loading', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["erudition"]["templates"]["erudition/recruiting/opportunities/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.opportunity, 'opportunity', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"header pure-g\">\n        <div class=\"col-md-1 col-1-2\">Program</div>\n        <div class=\"hidden-md col-1-2\">Url</div>\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["erudition"]["templates"]["erudition/recruiting/users/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<h1>Users</h1>\n<div id=\"users-list\">\n    ";
  stack1 = self.invokePartial(partials.loading, 'loading', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["erudition"]["templates"]["erudition/recruiting/users/users_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.email), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = self.invokePartial(partials.user, 'user', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

  buffer += "<div class=\"card\">\n    <div class=\"header pure-g\">\n        <div class=\"col-2-5 col-md-1\">Agent</div>\n        <div class=\"hidden-md col-2-5\">Email</div>\n        <div class=\"hidden-md col-1-5\">Actions</div>\n    </div>\n\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["erudition"]["templates"]["erudition/shared/alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<i class=\"close ic ic_x\"></i>\n";
  if (helper = helpers.alertText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alertText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  });

this["erudition"]["templates"]["thirdchannel/filters/date_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["thirdchannel/filters/filterable_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["thirdchannel/filters/hidden_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["thirdchannel/filters/list_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["thirdchannel/filters/spinner_component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='filter-component spinner'>\n    <div class='filter-item'>\n        <i class='fa fa-spinner fa-spin'></i>\n    </div>\n</div>\"";
  });

this["erudition"]["templates"]["thirdchannel/pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["erudition"]["templates"]["thirdchannel/filter_active_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

return this["erudition"]["templates"];

});