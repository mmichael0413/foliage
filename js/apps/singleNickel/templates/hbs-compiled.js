define(['handlebars'], function(Handlebars) {

this["SingleNickel"] = this["SingleNickel"] || {};
this["SingleNickel"]["templates"] = this["SingleNickel"]["templates"] || {};

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

Handlebars.registerPartial("editControls", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n        <a href=\"#\" class=\"cancel btn light\">Cancel</a>\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n        <a href=\"#\" class=\"cancel btn light\">Cancel</a>\n        ";
  }

  buffer += "<div class=\"controls\">\n    <a href=\"#\" class=\"save btn light solid\">Save</a>\n    ";
  stack1 = (helper = helpers.unless_eq || (depth0 && depth0.unless_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "survey", options) : helperMissing.call(depth0, "unless_eq", (depth0 && depth0.type), "survey", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "survey", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "survey", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("showControls", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"controls show\">\n        ";
  stack1 = (helper = helpers.unlessFirstChild || (depth0 && depth0.unlessFirstChild),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "unlessFirstChild", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = (helper = helpers.unlessLastChild || (depth0 && depth0.unlessLastChild),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "unlessLastChild", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a href=\"#\" class=\"edit btn light round\"><i class=\"ic ic_edit\"></i></a>\n        <a href=\"#\" class=\"delete btn primary round\"><i class=\"ic ic_remove\"></i></a>\n        <a href=\"#\" class=\"clone btn light round\"><i class=\"ic ic_sheep\"></i></a>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"up btn light round\"><i class=\"ic ic_up\"></i></a>\n        ";
  }

function program4(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"down btn light round\"><i class=\"ic ic_down\"></i></a>\n        ";
  }

  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

Handlebars.registerPartial("editChoice", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.triggers), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                ";
  return buffer;
  }

  buffer += "<div class=\"answer-editor\">\n    <div class=\"answer-controls\">\n        <a href=\"#\" class=\"save btn light round\"><i class=\"ic ic_check\"></i></a>\n        <a href=\"#\" class=\"cancel btn light round\"><i class=\"ic ic_x\"></i></a>\n    </div>\n    <div class=\"answer content\">\n        <input type=\"text\" name=\"choice\" placeholder=\"Enter answer\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.choice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <label>Does this choice cause the explanation field to appear?</label>\n        <select name=\"triggers\" data-placeholder=\"Choose one\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.triggers), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.triggers), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <input type=\"hidden\" name=\"idx\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.idx)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n</div>\n";
  return buffer;
  }));

Handlebars.registerPartial("editQuestion", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "Edit";
  }

function program3(depth0,data) {
  
  
  return "Create";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.type), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-show-siblings=\""
    + escapeExpression(((stack1 = (depth0 && depth0.showSiblings)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-hide-siblings=\""
    + escapeExpression(((stack1 = (depth0 && depth0.hideSiblings)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "display: none;";
  }

function program13(depth0,data) {
  
  
  return "disabled";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                    ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.explain), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-show-siblings=\""
    + escapeExpression(((stack1 = (depth0 && depth0.showSiblings)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-hide-siblings=\""
    + escapeExpression(((stack1 = (depth0 && depth0.hideSiblings)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"editor\">\n    <div class=\"header\">\n        <label>\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            Question\n        </label>\n        ";
  stack1 = self.invokePartial(partials.editControls, 'editControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"section\">\n        <label>What is the question asking?</label>\n        <input type=\"text\" name=\"ask\" placeholder=\"Please enter a text of the question\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <label>Are agents required to answer this question?</label>\n        <select name=\"required\" data-placeholder=\"Choose one\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.required), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.required), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <label>How should agents answer the question?</label>\n        <select name=\"type\" data-placeholder=\"Choose a question type\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.type), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <div id=\"questionMultiple\" style=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <label>Can they select multiple answers?</label>\n            <select name=\"multiple\" data-placeholder=\"Choose one\" ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <option></option>\n                ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n        </div>\n        <div id=\"questionExplain\" style=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <label>Should they explain the reason for their answer?</label>\n            <select name=\"explain\" data-placeholder=\"Choose one\" ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <option></option>\n                ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n        </div>\n        <div id=\"questionPlaceholder\" style=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <label>What should the placeholder text of the explanation field say?</label>\n            <input type=\"text\" name=\"placeholder\" placeholder=\"Please enter the text when asking the agent to explain\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        </div>\n        <input type=\"hidden\" name=\"idx\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.idx)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("editSection", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Edit";
  }

function program3(depth0,data) {
  
  
  return "Create";
  }

  buffer += "<div class=\"editor\">\n    <div class=\"header\">\n        <label>\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            Section\n        </label>\n        ";
  stack1 = self.invokePartial(partials.editControls, 'editControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"section\">\n        <label>Add Section Header</label>\n        <input type=\"text\" name=\"title\" placeholder=\"Name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n    <input type=\"hidden\" name=\"idx\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.idx)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n</div>\n\n\n\n\n\n\n\n\n";
  return buffer;
  }));

Handlebars.registerPartial("editSurvey", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "Edit";
  }

function program3(depth0,data) {
  
  
  return "Create";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.survey_type), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.show_images), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.require_images), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.show_additional_images), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.require_additional_images), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

  buffer += "<div class=\"editor\">\n    <div class=\"header\">\n        <label>\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n             Survey\n        </label>\n        ";
  stack1 = self.invokePartial(partials.editControls, 'editControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"section\">\n        <label>Name</label>\n        <input type=\"text\" name=\"title\" placeholder=\"Please enter a name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <label>Type</label>\n        <select name=\"survey_type\" required data-placeholder=\"Choose a survey type\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.survey_type), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.survey_type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <label>Request Before/After Images?</label>\n        <select name=\"show_images\" required data-placeholder=\"Choose an option\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_images), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_images), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <label>Require Before/After Images to be submitted with survey?</label>\n        <select name=\"require_images\" required data-placeholder=\"Choose an option\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_images), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_images), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <label>Request Additional Images?</label>\n        <select name=\"show_additional_images\" required data-placeholder=\"Choose an option\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_additional_images), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_additional_images), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <label>Require Additional Images to be submitted with survey?</label>\n        <select name=\"require_additional_images\" required data-placeholder=\"Choose an option\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_additional_images), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_additional_images), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        <label>Descriptive text that will appear ahead of the \"before\" images prompt</label>\n        <input type=\"text\" name=\"before_images_description\" placeholder=\"Please enter a description\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.before_images_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <label>Descriptive text that will appear ahead of the \"after\" images prompt</label>\n        <input type=\"text\" name=\"after_images_description\" placeholder=\"Please enter a description\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.after_images_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <label>Descriptive text that will appear ahead of the additional \"images\" prompt</label>\n        <input type=\"text\" name=\"additional_images_description\" placeholder=\"Please enter a description\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.additional_images_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n</div>\n\n\n\n\n\n\n\n";
  return buffer;
  }));

Handlebars.registerPartial("showChoice", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"answer-controls\">\n            ";
  stack1 = (helper = helpers.unlessFirstChild || (depth0 && depth0.unlessFirstChild),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "unlessFirstChild", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.unlessLastChild || (depth0 && depth0.unlessLastChild),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "unlessLastChild", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <a href=\"#\" class=\"edit btn light round\"><i class=\"ic ic_edit\"></i></a>\n            <a href=\"#\" class=\"delete btn primary round\"><i class=\"ic ic_remove\"></i></a>\n        </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                <a href=\"#\" class=\"up btn light round\"><i class=\"ic ic_up\"></i></a>\n            ";
  }

function program4(depth0,data) {
  
  
  return "\n                <a href=\"#\" class=\"down btn light round\"><i class=\"ic ic_down\"></i></a>\n            ";
  }

function program6(depth0,data) {
  
  
  return "\n                <span> (triggers explain)</span>\n            ";
  }

  buffer += "<div class=\"choice\" id=\"choice-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"answer show\">\n        <p>\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.choice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  stack1 = (helper = helpers.isChoiceTrigger || (depth0 && depth0.isChoiceTrigger),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.triggers), options) : helperMissing.call(depth0, "isChoiceTrigger", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.triggers), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </p>\n    </div>\n</div>\n\n";
  return buffer;
  }));

Handlebars.registerPartial("showQuestion", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"children\"></div>\n        ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            <div class=\"controls child\">\n                <a href=\"#\" class=\"add btn light round\"><i class=\"ic ic_add\"></i></a>\n            </div>\n        ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  return buffer;
  }

  buffer += "<div class=\"question\" id=\"question-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack1 = self.invokePartial(partials.showControls, 'showControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <p class=\"content\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"controls child\">\n    </div>\n</div>\n\n\n\n";
  return buffer;
  }));

Handlebars.registerPartial("showSection", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n        <div class=\"controls child\">\n            <a href=\"#\" class=\"add btn light solid\"><i class=\"ic ic_add\"></i> Add New Question</a>\n        </div>\n    ";
  }

  buffer += "<div class=\"section\" id=\"section-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack1 = self.invokePartial(partials.showControls, 'showControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <h3>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n    <div class=\"children\"></div>\n    ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("showSurvey", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n        <div class=\"controls show\">\n            <a href=\"#\" class=\"edit btn light round\"><i class=\"ic ic_edit\"></i></a>\n        </div>\n    ";
  }

function program3(depth0,data) {
  
  
  return "\n        <div class=\"controls child\">\n            <a href=\"#\" class=\"add btn light solid\"><i class=\"ic ic_add\"></i> Add New Section</a>\n        </div>\n    ";
  }

  buffer += "<div class=\"survey\" id=\"survey-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <h1>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <h2>"
    + escapeExpression((helper = helpers.lockDisplay || (depth0 && depth0.lockDisplay),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), options) : helperMissing.call(depth0, "lockDisplay", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), options)))
    + " for editing</h2>\n    <div class=\"children survey\"></div>\n    ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.locked), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("QuestionDatetime", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<input type=\"text\" readonly=\"readonly\" class=\"datetime form-control input-lg\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>";
  return buffer;
  }));

Handlebars.registerPartial("QuestionDisabled", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"disabled-question\"><i>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</i></p>";
  return buffer;
  }));

Handlebars.registerPartial("QuestionHidden", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p><i>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</i></p>";
  return buffer;
  }));

Handlebars.registerPartial("QuestionInteger", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<input type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  return buffer;
  }));

Handlebars.registerPartial("QuestionMultiChoice", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div>\n        <input type=\"radio\" name=\"question-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <label for=\"question-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.choice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n    </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n";
  return buffer;
  }

  buffer += "<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<div class=\"radio-group\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }));

Handlebars.registerPartial("QuestionSelect", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "multiple";
  }

function program3(depth0,data) {
  
  
  return "all";
  }

function program5(depth0,data) {
  
  
  return "one";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <option>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.choice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n";
  return buffer;
  }

  buffer += "<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<select ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-placeholder=\"Please select ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <option></option>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }));

Handlebars.registerPartial("QuestionSummary", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  return buffer;
  }));

Handlebars.registerPartial("QuestionText", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n<input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  return buffer;
  }));

Handlebars.registerPartial("additional_image", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"section\">\n        <h3>Images</h3>\n        <div class=\"question-show ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_additional_images), "true", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_additional_images), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.additional_images_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n            <input type=\"file\" name=\"file\">\n        </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "required";
  }

function program4(depth0,data) {
  
  
  return "optional";
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_additional_images), "true", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_additional_images), "true", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

Handlebars.registerPartial("after_image", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"section\">\n        <h3>After Images</h3>\n        <div class=\"question-show ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_images), "true", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_images), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.after_images_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n            <input type=\"file\" name=\"file\">\n        </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "required";
  }

function program4(depth0,data) {
  
  
  return "optional";
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_images), "true", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_images), "true", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

Handlebars.registerPartial("before_image", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"section\">\n        <h3>Before Images</h3>\n        <div class=\"question-show ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_images), "true", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.require_images), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.before_images_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n            <input type=\"file\" name=\"file\">\n        </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "required";
  }

function program4(depth0,data) {
  
  
  return "optional";
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_images), "true", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.show_images), "true", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

Handlebars.registerPartial("question", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "required";
  }

function program3(depth0,data) {
  
  
  return "optional";
  }

  buffer += "<div class=\"question-show ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.required), "true", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.required), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    "
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.type), depth0, options) : helperMissing.call(depth0, "partial", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.type), depth0, options)))
    + "\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("section", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.question, 'question', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<div class=\"section\">\n    <h3>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  }));

this["SingleNickel"]["templates"]["shared/layout/action_buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["shared/layout/main_navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["shared/layout/toggle_filter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<button class=\"btn default toggle-filter\">\n    <i class=\"ic fa ic_filter\"></i>\n</button>";
  });

this["SingleNickel"]["templates"]["shared/s3uploader/application_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["shared/s3uploader/checkin_group_label_options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["shared/s3uploader/checkin_image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["shared/s3uploader/checkin_image_group_select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["shared/s3uploader/error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"uploader-error\">\n    <div class=\"pull-right error-close ic ic_x\"></div>\n    <div class=\"message\">The image uploader has encountered an error.  This is most likely due to a bad internet connection.  Please check your connection and try again or wait until you can get a better connection.</div>\n</div>\n";
  });

this["SingleNickel"]["templates"]["shared/s3uploader/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["shared/s3uploader/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["SingleNickel"]["templates"]["singleNickel/customer/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Customers</h1>\n<div class=\"section\">\n    <table>\n        <thead>\n        <tr>\n            <th>Name</th>\n        </tr>\n        </thead>\n        <tbody id=\"customer-list-items\"></tbody>\n    </table>\n</div>\n\n\n\n\n\n\n\n";
  });

this["SingleNickel"]["templates"]["singleNickel/customer/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td><a href=\"/";
  if (helper = helpers.uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/surveys\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>";
  return buffer;
  });

this["SingleNickel"]["templates"]["singleNickel/survey/build/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  return escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.edit), depth0, options) : helperMissing.call(depth0, "partial", ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.edit), depth0, options)));
  });

this["SingleNickel"]["templates"]["singleNickel/survey/build/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  return escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.show), depth0, options) : helperMissing.call(depth0, "partial", ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.show), depth0, options)));
  });

this["SingleNickel"]["templates"]["singleNickel/survey/delete"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += " "
    + escapeExpression((helper = helpers.model_get || (depth0 && depth0.model_get),options={hash:{},data:data},helper ? helper.call(depth0, "name", depth0, options) : helperMissing.call(depth0, "model_get", "name", depth0, options)))
    + " ";
  return buffer;
  }

  buffer += "<h1>Delete Survey</h1>\n<div class=\"section\">\n    <h2>Are you sure you which to delete the following survey?</h2>\n    <div>\n     <p><label>Title:</label> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n     <p><label>Type:</label> "
    + escapeExpression((helper = helpers.value_lookup || (depth0 && depth0.value_lookup),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.survey_type), ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.survey_type), options) : helperMissing.call(depth0, "value_lookup", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.survey_type), ((stack1 = (depth0 && depth0.lookUps)),stack1 == null || stack1 === false ? stack1 : stack1.survey_type), options)))
    + "</p>\n        <p><label>Customer:</label> ";
  stack1 = (helper = helpers.collection_get || (depth0 && depth0.collection_get),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.customer), (depth0 && depth0.customers), options) : helperMissing.call(depth0, "collection_get", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.customer), (depth0 && depth0.customers), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    </div>\n    <div class=\"btn-container\">\n        <button id=\"confirm\" class=\"btn primary solid\">Yes, Delete This Survey</button>\n        <a href=\"/\" class=\"btn light solid\">No, Keep this Survey</a>\n    </div>\n</div>\n\n\n\n\n\n\n\n";
  return buffer;
  });

this["SingleNickel"]["templates"]["singleNickel/survey/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"btn light round pull-right\" href=\"/";
  if (helper = helpers.uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/new\" alt=\"Create Survey\"><i class=\"ic ic_add\"></i></a>\n<h1>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Surveys</h1>\n<div class=\"section\">\n    <table>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Actions</th>\n            <th></th>\n        </tr>\n        </thead>\n        <tbody id=\"survey-list-items\"></tbody>\n    </table>\n</div>\n\n\n\n\n\n\n\n";
  return buffer;
  });

this["SingleNickel"]["templates"]["singleNickel/survey/list_item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n        <strong>Survey Locked</strong>\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a class=\"btn light round\" href=\"/surveys/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/edit\"><i class=\"ic fa ic_edit\"></i></a>\n        <a class=\"btn primary delete round\" href=\"/";
  if (helper = helpers.customer_uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/surveys\" alt=\"Remove Survey\"><i class=\"ic fa ic_x\"></i></a>\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.isAdmin) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.isAdmin); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <a href=\"/";
  if (helper = helpers.customer_uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/surveys\" class=\"btn light round reindex\" alt=\"Re-Index\"><i class=\"ic fa ic_check\"></i></a>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a class=\"btn light round lock\" href=\"/";
  if (helper = helpers.customer_uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/surveys\" alt=\"Toggle Locked\"><i class=\"ic fa "
    + escapeExpression((helper = helpers.lockActionIconClass || (depth0 && depth0.lockActionIconClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.locked), options) : helperMissing.call(depth0, "lockActionIconClass", (depth0 && depth0.locked), options)))
    + "\"></i></a>\n    ";
  return buffer;
  }

  buffer += "<td><a href=\"/surveys/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n<td>"
    + escapeExpression((helper = helpers.displaySurveyType || (depth0 && depth0.displaySurveyType),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.survey), options) : helperMissing.call(depth0, "displaySurveyType", (depth0 && depth0.survey), options)))
    + "</td>\n<td>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <a href=\"/";
  if (helper = helpers.customer_uuid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_uuid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/surveys\" class=\"btn light round clone\" alt=\"Clone Survey\"><i class=\"ic fa ic_sheep\"></i></a>\n    <a data-bypass=\"true\" class=\"btn light round\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1['export'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Export Survey YAML\"><i class=\"ic fa ic_download\"></i></a>\n    ";
  options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}
  if (helper = helpers.isSuperAdmin) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.isSuperAdmin); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.isSuperAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td class=\"idx-handle\"><i class=\"ic ic_hamburger medium-blue\"></i></td>";
  return buffer;
  });

this["SingleNickel"]["templates"]["singleNickel/survey/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.section, 'section', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

  buffer += "<a class=\"btn light round pull-right\" href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.links)),stack1 == null || stack1 === false ? stack1 : stack1['export'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Export Survey YAML\"><i class=\"ic fa ic_download\"></i></a>\n<h1>Preview: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n( Required / <i class=\"medium-blue\">Optional</i> / <i class=\"disabled-question\">Disabled</i>  )\n\n";
  stack1 = self.invokePartial(partials.before_image, 'before_image', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = self.invokePartial(partials.after_image, 'after_image', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = self.invokePartial(partials.additional_image, 'additional_image', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

return this["SingleNickel"]["templates"];

});