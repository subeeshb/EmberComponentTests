this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\r\n<div class=\"loading-layer\">\r\n    <div class=\"loading\" ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("topStyle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"loading-indicator\">\r\n        <div id=\"floatingCirclesG\">\r\n            <div class=\"f_circleG\" id=\"frotateG_01\"></div>\r\n            <div class=\"f_circleG\" id=\"frotateG_02\"></div>\r\n            <div class=\"f_circleG\" id=\"frotateG_03\"></div>\r\n            <div class=\"f_circleG\" id=\"frotateG_04\"></div>\r\n            <div class=\"f_circleG\" id=\"frotateG_05\"></div>\r\n            <div class=\"f_circleG\" id=\"frotateG_06\"></div>\r\n            <div class=\"f_circleG\" id=\"frotateG_07\"></div>\r\n            <div class=\"f_circleG\" id=\"frotateG_08\"></div>\r\n        </div>\r\n        <p>Loading...</p>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controllers.loading.loading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});