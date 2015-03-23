define(['handlebars'], function(Handlebars) {

this["ThirdChannel"] = this["ThirdChannel"] || {};
this["ThirdChannel"]["templates"] = this["ThirdChannel"]["templates"] || {};

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
  


  return "<div class=\"controls show\">\n    <a href=\"#\" class=\"edit btn light round\"><i class=\"ic ic_post\"></i></a>\n    <a href=\"#\" class=\"delete btn primary round\"><i class=\"ic ic_remove\"></i></a>\n</div>";
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
    + "\">\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n";
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
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.customers)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                ";
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
  buffer += "\n        </select>\n        <label>Customer</label>\n        <select name=\"customer\" required data-placeholder=\"Choose a customer\">\n            <option></option>\n            ";
  stack1 = (helper = helpers.select || (depth0 && depth0.select),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.customer), options) : helperMissing.call(depth0, "select", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.customer), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n    </div>\n</div>\n\n\n\n\n\n\n\n";
  return buffer;
  }));

Handlebars.registerPartial("showChoice", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n    <div class=\"answer-controls\">\n        <a href=\"#\" class=\"edit btn light round\"><i class=\"ic ic_post\"></i></a>\n        <a href=\"#\" class=\"delete btn primary round\"><i class=\"ic ic_remove\"></i></a>\n    </div>\n    <div class=\"answer show\">\n        <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.choice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    </div>\n</div>\n\n";
  return buffer;
  }));

Handlebars.registerPartial("showQuestion", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n        <div class=\"children\"></div>\n        <div class=\"controls child\">\n            <a href=\"#\" class=\"add btn light round\"><i class=\"ic ic_add\"></i></a>\n        </div>\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  return buffer;
  }

  buffer += "<div class=\"question\">\n    <div class=\"controls show\">\n        <a href=\"#\" class=\"edit btn light round\"><i class=\"ic ic_post\"></i></a>\n        <a href=\"#\" class=\"delete btn primary round\"><i class=\"ic ic_remove\"></i></a>\n    </div>\n    <p class=\"content\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n\n";
  return buffer;
  }));

Handlebars.registerPartial("showSection", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"section\">\n    ";
  stack1 = self.invokePartial(partials.showControls, 'showControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <h3>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n    <div class=\"children\"></div>\n    <div class=\"controls child\">\n        <a href=\"#\" class=\"add btn light solid\"><i class=\"ic ic_add\"></i> Add New Question</a>\n    </div>\n</div>\n";
  return buffer;
  }));

Handlebars.registerPartial("showSurvey", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n    <div class=\"controls show\">\n        <a href=\"#\" class=\"edit btn light round\"><i class=\"ic ic_post\"></i></a>\n    </div>\n    <h1>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <div class=\"children survey\"></div>\n    <div class=\"controls child\">\n        <a href=\"#\" class=\"add btn light solid\"><i class=\"ic ic_add\"></i> Add New Section</a>\n    </div>\n</div>\n\n\n";
  return buffer;
  }));

Handlebars.registerPartial("QuestionDatetime", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"question-show\">\n    <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <input type=\"text\" readonly=\"readonly\" class=\"datetime form-control input-lg\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n</div>\n\n\n";
  return buffer;
  }));

Handlebars.registerPartial("QuestionHidden", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"question-show\">\n    <p><i>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</i></p>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("QuestionInteger", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"question-show\">\n    <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <input type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("QuestionMultiChoice", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div>\n            <input type=\"radio\" name=\"question-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <label for=\"question-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.choice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n        </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  return buffer;
  }

  buffer += "<div class=\"question-show\">\n    <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <div class=\"radio-group\">\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
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
  buffer += "\n            <option>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.choice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  return buffer;
  }

  buffer += "<div class=\"question-show\">\n    <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <select ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-placeholder=\"Please select ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.multiple), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <option></option>\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.explain), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("QuestionText", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"question-show\">\n    <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.ask)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("question", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  return escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.type), depth0, options) : helperMissing.call(depth0, "partial", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.type), depth0, options)));
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

  buffer += "<div class=\"section\">\n    <h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
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

this["ThirdChannel"]["templates"]["singleNickel/survey/build/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  return escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.edit), depth0, options) : helperMissing.call(depth0, "partial", ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.edit), depth0, options)));
  });

this["ThirdChannel"]["templates"]["singleNickel/survey/build/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  return escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.show), depth0, options) : helperMissing.call(depth0, "partial", ((stack1 = (depth0 && depth0.templates)),stack1 == null || stack1 === false ? stack1 : stack1.show), depth0, options)));
  });

this["ThirdChannel"]["templates"]["singleNickel/survey/delete"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["ThirdChannel"]["templates"]["singleNickel/survey/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.surveys), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <tr>\n                <td><a href=\"/surveys/"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\n                <td>\n                    <a href=\"/surveys/"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/edit\">Edit</a>\n                    <a href=\"/surveys/"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/delete\">Delete</a>\n                    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1['export'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Export</a>\n                </td>\n            </tr>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n            <tr><td>No Surveys</td><td></td></tr>\n        ";
  }

  buffer += "<h1>Surveys</h1>\n<div class=\"section\">\n    <table>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.surveys), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n</div>\n\n\n\n\n\n\n\n";
  return buffer;
  });

this["ThirdChannel"]["templates"]["singleNickel/survey/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

  buffer += "<h1>Preview: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

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

return this["ThirdChannel"]["templates"];

});