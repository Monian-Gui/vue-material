!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-whiteframe",e.extend(a.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(157),a=o(r)},66:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdElevation:[String,Number]},data:function(){return{elevation:0===this.mdElevation?0:this.mdElevation||1}},watch:{mdElevation:function(){this.elevation=this.mdElevation}},computed:{classes:function(){var e=parseInt(this.elevation,10),t="md-whiteframe-";return isNaN(e)||"number"!=typeof e?this.elevation.indexOf("dp")>-1&&(t+=this.elevation):(t+=e,t+="dp"),t}}}},71:function(e,t){},157:function(e,t,n){var o,i;n(71),o=n(66);var r=n(161);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},161:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"md-whiteframe",class:e.classes},[e._t("default")])},staticRenderFns:[]}}})});