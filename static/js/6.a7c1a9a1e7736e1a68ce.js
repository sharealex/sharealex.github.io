webpackJsonp([6],{mVZR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("br"),t._v(" "),i("h3",[t._v("付刚的项目")]),t._v(" "),t._l(t.projectList,function(e){return i("div",{key:e.id,on:{click:function(i){t.link("/"+e.type+"/"+e.id)}}},[i("br"),t._v(" "),i("div",{staticClass:"card border-secondary"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(e.time))]),t._v(" "),i("p",{staticClass:"card-text"},[t._v(t._s(e.info))]),t._v(" "),i("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:"/static/images/project"+e.id+"-0.jpg"}})])])])})],2)},staticRenderFns:[]},r=i("vSla")({methods:{link:function(t){this.$router.push(t)}},data:function(){return{projectList:[]}},created:function(){var t=this.GLOBAL;this.projectList=t.filter(function(t){return"projects"===t.type}).reverse()}},s,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=6.a7c1a9a1e7736e1a68ce.js.map