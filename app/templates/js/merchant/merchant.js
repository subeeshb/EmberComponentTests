this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["merchant"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"section group\">\r\n    <div class=\"span_3_of_3\">\r\n        <div class=\"merchant\">\r\n            <p>Bank Balance Changed</p>\r\n            <p>");
  hashContexts = {'type': depth0,'valueBinding': depth0};
  hashTypes = {'type': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "LazySplit.NumericTextField", {hash:{
    'type': ("number"),
    'valueBinding': ("bankBalanceChanged")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\r\n        </div>\r\n        <div class=\"merchant\">\r\n            <p>Percentage Cut</p>\r\n            <p>");
  hashContexts = {'type': depth0,'valueBinding': depth0};
  hashTypes = {'type': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "LazySplit.NumericTextField", {hash:{
    'type': ("number"),
    'valueBinding': ("percentageCut")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});