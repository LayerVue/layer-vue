!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("layer",[],t):"object"==typeof exports?exports.layer=t():e.layer=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var u=n[i]={i:i,l:!1,exports:{}};return e[i].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"layer",data:function(){return{defaultvisible:!0,maxbtn:!1,minbtn:!1,minwidth:300,minheight:200,x:0,y:0,width:0,height:0,zIndex:1,transition:"none",overflow:"hidden"}},computed:{contentheight:function(){return this.height-(this.title?42:0)}},props:{title:{type:[String,Boolean],default:"信息"},area:{type:[String,Array],default:"auto"},offset:{type:[String,Array,Number],default:"auto"},settop:{type:Function},moveOut:{type:Array,default:function(){return[0,0,0,0]}},visible:{},zindex:{type:Number,default:1},closeBtn:{type:[Number,Boolean],default:!0},maxmin:{type:Array,default:function(){return[0,0]}},resize:{type:[Number,Boolean],default:!0},lbresize:{type:[Number,Boolean],default:!0},moveEnd:{type:Function},move:{type:[String,Boolean],default:".layer-vue-title"},cancel:{type:Function},success:{type:Function},end:{type:Function},full:{type:Function},min:{type:Function},restore:{type:Function},destroyOnClose:{type:[Number,Boolean],default:!1},amin:{type:Number,default:0},content:{}},watch:{visible:function(e){var t=this;if(e){if(this.settop){var n=this.settop();this.zIndex=n}else this.zIndex=this.zindex;this.$nextTick(function(){t.init(),t.success&&t.success(t)})}}},directives:{drag:{bind:function(e,t){e.onmousedown=function(){if(t.value.settop){var e=t.value.settop();t.value.setzIndex(e)}},e.addEventListener("transitionend",function(e){"width"===e.propertyName&&t.value.setoverflow("auto")}),e.querySelector(t.value.move)&&(e.querySelector(t.value.move).style.cursor="move",e.querySelector(t.value.move).onmousedown=function(n){if(!(e.className.indexOf("layer-vue-ismax")>=0))if(t.value.settransition(),e.className.indexOf("layer-vue-ismin")>=0){var i=t.value.getx(),u=n.clientX;document.onmousemove=function(e){e.preventDefault();var n=e.clientX-u,s=parseInt(i)+parseInt(n);!parseInt(t.value.moveOut[3])&&s<=0&&(s=0),!parseInt(t.value.moveOut[1])&&s>=document.documentElement.clientWidth-t.value.minwidth&&(s=document.documentElement.clientWidth-t.value.minwidth),t.value.setx(s)},document.onmouseup=function(e){e.preventDefault(),t.value.settransition(!0),document.onmousemove=null,document.onmouseup=null}}else{var s=t.value.getx(),l=t.value.gety(),a=n.clientX,o=n.clientY;document.onmousemove=function(e){e.preventDefault();var n=e.clientX-a,i=e.clientY-o;t.value.x=parseInt(s)+parseInt(n),!parseInt(t.value.moveOut[3])&&t.value.x<=0&&(t.value.x=0),!parseInt(t.value.moveOut[1])&&t.value.x>=document.documentElement.clientWidth-t.value.getwidth()&&(t.value.x=document.documentElement.clientWidth-t.value.getwidth()),t.value.y=parseInt(l)+parseInt(i),!parseInt(t.value.moveOut[0])&&t.value.y<=0&&(t.value.y=0),!parseInt(t.value.moveOut[2])&&t.value.y>=document.documentElement.clientHeight-t.value.getheight()&&(t.value.y=document.documentElement.clientHeight-t.value.getheight()),t.value.setx(t.value.x),t.value.sety(t.value.y)},document.onmouseup=function(e){e.preventDefault(),t.value.settransition(!0),t.value.moveEnd&&t.value.moveEnd(),document.onmousemove=null,document.onmouseup=null}}}),e.querySelector(".layer-vue-max")&&(e.querySelector(".layer-vue-max").onclick=function(){t.value.setmax(),t.value.getmax()?(t.value.move&&(e.querySelector(t.value.move).style.cursor="not-allowed"),t.value.getmin()?t.value.setmin(!1):(t.value.x=t.value.getx(),t.value.y=t.value.gety(),t.value.width=t.value.getwidth(),t.value.height=t.value.getheight()),t.value.setx(0),t.value.sety(0),t.value.setwidth(document.documentElement.clientWidth),t.value.setheight(document.documentElement.clientHeight),t.value.full&&t.value.full()):(t.value.setx(t.value.x),t.value.sety(t.value.y),t.value.setwidth(t.value.width),t.value.setheight(t.value.height),t.value.restore&&t.value.restore(),t.value.move&&(e.querySelector(t.value.move).style.cursor="move"))}),e.querySelector(".layer-vue-min")&&(e.querySelector(".layer-vue-min").onclick=function(){t.value.setmin(),t.value.getmin()?(t.value.move&&(e.querySelector(t.value.move).style.cursor="move"),t.value.getmax()?t.value.setmax(!1):(t.value.x=t.value.getx(),t.value.y=t.value.gety(),t.value.width=t.value.getwidth(),t.value.height=t.value.getheight()),t.value.setx(t.value.getx()),t.value.sety(document.documentElement.clientHeight-42),t.value.setheight(42),t.value.setwidth(t.value.minwidth),t.value.min&&t.value.min()):(t.value.setx(t.value.x),t.value.sety(t.value.y),t.value.setwidth(t.value.width),t.value.setheight(t.value.height),t.value.restore&&t.value.restore())}),e.querySelector(".layer-vue-resize").onmousedown=function(e){e.preventDefault(),t.value.settransition();var n=t.value,i=n.minwidth,u=n.minheight,s=t.value.getwidth(),l=t.value.getheight(),a=t.value.getx(),o=t.value.gety(),r=e.clientX,c=e.clientY;document.onmousemove=function(e){e.preventDefault();var n=e.clientX-r,h=e.clientY-c;t.value.width=parseInt(s)+parseInt(n),t.value.height=parseInt(l)+parseInt(h),t.value.width<=i&&(t.value.width=i),t.value.width+a>=document.documentElement.clientWidth&&(t.value.width=document.documentElement.clientWidth-a),t.value.height<=u&&(t.value.height=u),t.value.height+o>=document.documentElement.clientHeight&&(t.value.height=document.documentElement.clientHeight-o),t.value.setwidth(t.value.width),t.value.setheight(t.value.height)},document.onmouseup=function(e){e.preventDefault(),t.value.settransition(!0),document.onmousemove=null,document.onmouseup=null}},e.querySelector(".layer-vue-lbresize").onmousedown=function(e){e.preventDefault(),t.value.settransition();var n=t.value,i=n.minwidth,u=n.minheight,s=t.value.getwidth(),l=t.value.getheight(),a=t.value.getx(),o=e.clientX,r=e.clientY;document.onmousemove=function(e){e.preventDefault();var n=e.clientX-o,c=e.clientY-r;t.value.width=parseInt(s)-parseInt(n),t.value.height=parseInt(l)+parseInt(c),t.value.x=parseInt(a)+parseInt(n),t.value.width<=i&&(t.value.width=i),t.value.width+t.value.x>=a+s&&(t.value.x=a+s-t.value.width),t.value.height<=u&&(t.value.height=u),!parseInt(t.value.moveOut[3])&&t.value.x<=0&&(t.value.x=0,t.value.width=a+s),t.value.setwidth(t.value.width),t.value.setheight(t.value.height),t.value.setx(t.value.x)},document.onmouseup=function(e){e.preventDefault(),t.value.settransition(!0),document.onmousemove=null,document.onmouseup=null}}}}},created:function(){if(this.amininit(),window.addEventListener("resize",this.init),this.visible||void 0===this.visible){if(this.settop){var e=this.settop();this.zIndex=e}else this.zIndex=this.zindex;this.success&&this.success(this)}},beforeUpdate:function(){},updated:function(){},mounted:function(){var e=this;this.$nextTick(function(){(e.visible||void 0===e.visible)&&e.init()})},beforeDestroy:function(){window.onresize=null},methods:{amininit:function(){if(this.overflow="hidden",0===this.amin){var e=this.areainit(),t=e.height,n=e.width,i=this.offsetinit(this.offset,.5*n,.5*t,!0),u=i.x,s=i.y;this.width=0,this.height=0,this.x=u,this.y=s}},init:function(){this.settransition(!0);var e=this.areainit(),t=e.height,n=e.width,i=this.offsetinit(this.offset,n,t),u=i.x,s=i.y;this.width=n,this.height=t,this.x=u,this.y=s},areainit:function(){var e=0,t=0;return this.area instanceof Array?(t=this.Transformation(this.area[0],"clientWidth"),e=this.area[1]?this.Transformation(this.area[1],"clientHeight")+(this.title?42:0):this.$refs.content?this.$refs.content.scrollHeight:42):(t="auto"===this.area?this.$refs.content?this.$refs.content.scrollWidth:0:this.Transformation(this.area,"clientWidth"),e=this.$refs.content?this.$refs.content.scrollHeight:42),t>document.documentElement.clientWidth&&document.documentElement.clientWidth>this.minwidth?t=document.documentElement.clientWidth:t<=this.minwidth&&(t=this.minwidth),e>document.documentElement.clientHeight&&document.documentElement.clientHeight>this.minheight?e=document.documentElement.clientHeight:e<=this.minheight&&(e=this.minheight),isNaN(e)&&(e=this.minheight),isNaN(t)&&(t=this.minwidth),{height:e,width:t}},offsetinit:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=0,s=0,l=t,a=n;if(i&&(u=.5*t,s=.5*n,t=0,n=0),e instanceof Array)u=e[1]?this.Transformation(e[1],"clientWidth"):.5*(document.documentElement.clientWidth-t),s=this.Transformation(e[0],"clientHeight");else if("number"==typeof e)s=e,u=.5*(document.documentElement.clientWidth-t);else if(0===e.substr(-2).indexOf("px"))s=parseInt(e.slice(0,-2));else if(0===e.substr(-1).indexOf("%"))s=document.documentElement.clientHeight*parseInt(e.slice(0,-1))*.01;else switch(e){case"auto":u=.5*(document.documentElement.clientWidth-t),s=.5*(document.documentElement.clientHeight-n);break;case"t":u=.5*(document.documentElement.clientWidth-t);break;case"r":u=document.documentElement.clientWidth-l,s=.5*(document.documentElement.clientHeight-n);break;case"b":u=.5*(document.documentElement.clientWidth-t),s=document.documentElement.clientHeight-a;break;case"l":s=.5*(document.documentElement.clientHeight-n);break;case"lt":break;case"lb":s=document.documentElement.clientHeight-a;break;case"rt":u=document.documentElement.clientWidth-l;break;case"rb":u=document.documentElement.clientWidth-l,s=document.documentElement.clientHeight-a}return isNaN(u)&&(u=0),isNaN(s)&&(s=0),{x:u,y:s}},Transformation:function(e,t){return"number"==typeof e?e:0===e.substr(-2).indexOf("px")?parseInt(e.slice(0,-2)):0===e.substr(-1).indexOf("%")?document.documentElement[t]*parseInt(e.slice(0,-1))*.01:parseInt(e)},closeLayer:function(){void 0===this.visible?this.defaultvisible=!1:this.$emit("update:visible",!1),this.amininit(),this.destroyOnClose?this.end&&this.end():this.cancel&&this.cancel()},setoverflow:function(e){this.overflow=e},getx:function(){return this.x},setx:function(e){this.x=e},gety:function(){return this.y},sety:function(e){this.y=e},getwidth:function(){return this.width},setwidth:function(e){this.width=e},getheight:function(){return this.height},setheight:function(e){this.height=e},setmax:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.maxbtn=e?!this.maxbtn:e},getmax:function(){return this.maxbtn},setmin:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.minbtn=e?!this.minbtn:e},getmin:function(){return this.minbtn},setzIndex:function(e){this.zIndex=e},settransition:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.transition=e?"all 0.2s":"none"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);i.a.install=function(e){e.component(i.a.name,i.a)},t.default=i.a},function(e,t,n){"use strict";function i(e){n(3)}var u=n(0),s=n(5),l=n(4),a=i,o=l(u.a,s.a,!1,a,null,null);t.a=o.exports},function(e,t){},function(e,t){e.exports=function(e,t,n,i,u,s){var l,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(l=e,a=e.default);var r="function"==typeof a?a.options:a;t&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns,r._compiled=!0),n&&(r.functional=!0),u&&(r._scopeId=u);var c;if(s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},r._ssrRegister=c):i&&(c=i),c){var h=r.functional,v=h?r.render:r.beforeCreate;h?(r._injectStyles=c,r.render=function(e,t){return c.call(t),v(e,t)}):r.beforeCreate=v?[].concat(v,c):[c]}return{esModule:l,exports:a,options:r}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return!e.destroyOnClose||(void 0===e.visible?e.defaultvisible:e.visible)?n("div",{directives:[{name:"show",rawName:"v-show",value:void 0===e.visible?e.defaultvisible:e.visible,expression:"visible === undefined ? defaultvisible : visible"},{name:"drag",rawName:"v-drag",value:{visible:e.visible,moveOut:e.moveOut,settop:e.settop,x:e.x,y:e.y,width:e.width,height:e.height,minwidth:e.minwidth,minheight:e.minheight,getx:e.getx,setx:e.setx,gety:e.gety,sety:e.sety,setwidth:e.setwidth,getwidth:e.getwidth,getheight:e.getheight,setheight:e.setheight,setmax:e.setmax,getmax:e.getmax,setmin:e.setmin,getmin:e.getmin,setzIndex:e.setzIndex,moveEnd:e.moveEnd,move:e.move,full:e.full,min:e.min,restore:e.restore,settransition:e.settransition,setoverflow:e.setoverflow},expression:"{\n    visible,\n    moveOut,\n    settop,\n    x,\n    y,\n    width,\n    height,\n    minwidth,\n    minheight,\n    getx,\n    setx,\n    gety,\n    sety,\n    setwidth,\n    getwidth,\n    getheight,\n    setheight,\n    setmax,\n    getmax,\n    setmin,\n    getmin,\n    setzIndex,\n    moveEnd,\n    move,\n    full,\n    min,\n    restore,\n    settransition,\n    setoverflow,\n  }"}],staticClass:"layer-vue",class:{"layer-vue-ismax":e.maxbtn,"layer-vue-ismin":e.minbtn},style:{width:e.width+"px",height:e.height+"px",transform:"translate("+e.x+"px,"+e.y+"px)","z-index":e.zIndex,transition:e.transition},attrs:{"οndragstart":"return false;"}},[!1!==e.title?n("div",{staticClass:"layer-vue-title",attrs:{title:e.title}},[e._v("\n    "+e._s(e.title)+"\n  ")]):e._e(),e._v(" "),n("div",{staticClass:"layer-vue-tools"},[e.maxmin[1]?n("span",{staticClass:"layer-vue-min"},[e._v("-")]):e._e(),e._v(" "),e.maxmin[0]?n("span",{staticClass:"layer-vue-max"},[e._v("口")]):e._e(),e._v(" "),e.closeBtn?n("span",{staticClass:"layer-vue-close",on:{click:e.closeLayer}},[e._v("X")]):e._e()]),e._v(" "),e.resize?n("div",{staticClass:"layer-vue-resize"}):e._e(),e._v(" "),e.lbresize?n("div",{staticClass:"layer-vue-lbresize"}):e._e(),e._v(" "),n("div",{ref:"content",staticClass:"layer-vue-content",style:{height:e.contentheight+"px",overflow:e.overflow}},[e._t("default",[e._v(e._s(e.content))])],2)]):e._e()},u=[],s={render:i,staticRenderFns:u};t.a=s}])});
//# sourceMappingURL=layer.js.map