webpackJsonp([2],{"00f+":function(t,e,n){var o={"./blog1.md":"+9fc","./blog2.md":"bWNq","./blog3.md":"bRtv","./blog4.md":"OVz+","./blog5.md":"v0XC"};function r(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="00f+"},sepL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{blogPage:""}},mounted:function(){window.scroll(0,0)},updated:function(){window.scroll(0,0)},created:function(){this.getMarkdown()},watch:{$route:function(t){this.getMarkdown()}},methods:{getMarkdown:function(){try{this.blogPage=n("00f+")("./blog"+this.$route.params.id+".md")}catch(t){this.blogPage="这篇文章未上传，请联系：<a href='mailto:sharealex@163.com'>sharealex@163.com</a>"}}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("div",{domProps:{innerHTML:this._s(this.blogPage)}}),this._v(" "),e("br")])},staticRenderFns:[]},i=n("vSla")(o,r,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=2.b3742f609b9d4e0b3242.js.map