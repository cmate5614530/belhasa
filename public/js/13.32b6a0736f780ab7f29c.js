webpackJsonp([13],{1129:function(e,t,a){var n=a(1130);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("1faf597f",n,!0,{})},1130:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,'.wrapper[data-v-32ca26da]:after,.wrapper[data-v-32ca26da]:before{display:table;content:" "}.wrapper[data-v-32ca26da]:after{clear:both}.wrapper[data-v-32ca26da]{display:table;overflow-x:hidden;width:100%;max-width:100%;table-layout:fixed}.left-aside[data-v-32ca26da],.right-aside[data-v-32ca26da]{padding:0;display:table-cell;vertical-align:top}.right-aside[data-v-32ca26da]{background-color:#eee!important}@media (max-width:992px){.wrapper>.right-aside[data-v-32ca26da]{width:100vw;min-width:100vw}}',""])},1131:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(198),r=(a.n(n),a(802)),o=a.n(r),i=a(806),s=a.n(i),d=a(811),c=a.n(d),l=a(834),p=a.n(l),u=a(842),f=(a.n(u),a(844));a.n(f);t.default={name:"layout",components:{preloader:o.a,vueadmin_header:p.a,left_side:c.a,right_side:s.a},data:function(){return{showtopbtn:!1}},mounted:function(){window.innerWidth<=992&&this.$store.commit("left_menu","close")}}},1132:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("preloader",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.preloader,expression:"this.$store.state.preloader"}]}),this._v(" "),t("vueadmin_header"),this._v(" "),t("div",{staticClass:"wrapper row-offcanvas"},[t("left_side",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.left_open,expression:"this.$store.state.left_open"}]}),this._v(" "),t("right_side",[t("router-view")],1)],1)],1)},staticRenderFns:[]}},1189:function(e,t,a){var n=a(47)(a(1131),a(1132),!1,function(e){a(1129)},"data-v-32ca26da",null);e.exports=n.exports},730:function(e,t,a){var n,r,o={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),s=function(e){var t={};return function(e){return void 0===t[e]&&(t[e]=function(e){return document.querySelector(e)}.call(this,e)),t[e]}}(),d=null,c=0,l=[],p=a(732);function u(e,t){for(var a=0;a<e.length;a++){var n=e[a],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i],t))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i],t));o[n.id]={id:n.id,refs:1,parts:s}}}}function f(e,t){for(var a=[],n={},r=0;r<e.length;r++){var o=e[r],i=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(s):a.push(n[i]={id:i,parts:[s]})}return a}function h(e,t){var a=s(e.insertInto);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),l.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function b(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),h(e,t),t}function v(e,t){Object.keys(t).forEach(function(a){e.setAttribute(a,t[a])})}function g(e,t){var a,n,r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var i=c++;a=d||(d=b(t)),n=_.bind(null,a,i,!1),r=_.bind(null,a,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),h(e,t),t}(t),n=function(e,t,a){var n=a.css,r=a.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(n=p(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,a,t),r=function(){m(a),a.href&&URL.revokeObjectURL(a.href)}):(a=b(t),n=function(e,t){var a=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,a),r=function(){m(a)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var a=f(e,t);return u(a,t),function(e){for(var n=[],r=0;r<a.length;r++){var i=a[r];(s=o[i.id]).refs--,n.push(s)}e&&u(f(e,t),t);for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete o[s.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function _(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},732:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var a=t.protocol+"//"+t.host,n=a+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?a+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},745:function(e,t){e.exports="/belhasa/public/images/symbol.png?b516713de274c8ca34e14bd8acfc8460"},802:function(e,t,a){var n=a(47)(null,a(805),!1,function(e){a(803)},"data-v-b8ff1b4a",null);e.exports=n.exports},803:function(e,t,a){var n=a(804);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("070dd1ac",n,!0,{})},804:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,".cssload-aim[data-v-b8ff1b4a]{position:fixed;z-index:1500;left:calc(100% - 42px);top:60px;border-radius:20px;background-color:transparent;border-width:15px;border-style:double;border-color:transparent #428bca;-webkit-animation:cssload-anim-data-v-b8ff1b4a .7s linear infinite;animation:cssload-anim-data-v-b8ff1b4a .7s linear infinite}@media screen and (max-width:560px){.cssload-aim[data-v-b8ff1b4a]{top:106px}}@-webkit-keyframes cssload-anim-data-v-b8ff1b4a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cssload-anim-data-v-b8ff1b4a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},805:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"cssload-aim"})},staticRenderFns:[]}},806:function(e,t,a){var n=a(47)(a(809),a(810),!1,function(e){a(807)},"data-v-8f0b6170",null);e.exports=n.exports},807:function(e,t,a){var n=a(808);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("19b1c688",n,!0,{})},808:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,".right-aside[data-v-8f0b6170]{padding:0 20px 10px;width:100%;max-width:100%;min-height:100vh;background-color:#eee}.right-aside .content-header>h1[data-v-8f0b6170]{padding-left:13px;padding-top:12px;font-size:21px;line-height:1.5;margin-top:58px;margin-left:0;color:#555}.right-aside .content-header[data-v-8f0b6170]{margin:-2px -20px 25px;height:55px;display:-webkit-box;display:-ms-flexbox;display:flex}.right-aside .top-btn[data-v-8f0b6170]{border-radius:50%;font-size:24px;height:41px;min-width:41px;width:41px;padding:0;overflow:hidden;position:relative;line-height:41px;background-color:#fff;color:#999;cursor:pointer;border:1px solid #fff;margin-top:64px;margin-left:33px}.right-aside .top-btn[data-v-8f0b6170]:hover{background-color:#fff;color:#999;-webkit-box-shadow:0 4px 4px 0 hsla(0,0%,70%,.14),0 4px 8px -2px hsla(0,0%,70%,.2),0 2px 6px 0 hsla(0,0%,70%,.12);box-shadow:0 4px 4px 0 hsla(0,0%,70%,.14),0 4px 8px -2px hsla(0,0%,70%,.2),0 2px 6px 0 hsla(0,0%,70%,.12)}.right-aside .top-btn-point1[data-v-8f0b6170]{margin-top:-14px}.right-aside .top-btn-point2[data-v-8f0b6170],.right-aside .top-btn-point3[data-v-8f0b6170]{margin-top:-49px}",""])},809:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"right-side",methods:{}}},810:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"right-aside"},[a("div",{staticClass:"content-header "},[e._m(0),e._v(" "),a("h1",[e._v(e._s(this.$store.state.page_title?e.$t(this.$store.state.page_title):e.$t(this.$route.meta.title)))])]),e._v(" "),a("div",{staticClass:"content"},[a("section",{staticClass:"container-fluid"},[e._t("default")],2)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"top-btn"},[t("p",{staticClass:"top-btn-point1"},[this._v(".")]),this._v(" "),t("p",{staticClass:"top-btn-point2"},[this._v(".")]),this._v(" "),t("p",{staticClass:"top-btn-point3"},[this._v(".")])])}]}},811:function(e,t,a){var n=a(47)(a(814),a(833),!1,function(e){a(812)},"data-v-522a63ed",null);e.exports=n.exports},812:function(e,t,a){var n=a(813);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("fb40435c",n,!0,{})},813:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,".left-aside[data-v-522a63ed]{width:250px;background:#fff;background-repeat:repeat-y}.navigation[data-v-522a63ed]{padding:0}.divider[data-v-522a63ed]{margin-top:10px;list-style-type:none;border-bottom:1px solid #ececec;padding-bottom:6px}.divider span[data-v-522a63ed]{font-size:15px;font-weight:700;color:#fff;margin:20px 20px -15px}.sidebar[data-v-522a63ed]{display:block;font-size:14px;letter-spacing:1px}.content[data-v-522a63ed]{display:block;width:auto;overflow-x:hidden;padding:0 15px}.badge-success[data-v-522a63ed]{background-color:#22d69d}.badge[data-v-522a63ed]{padding:.6em .7em;border-radius:.75rem}.nav_profile[data-v-522a63ed]{border-bottom:1px solid #eee}.bk-img-black[data-v-522a63ed]{background-repeat:no-repeat;background-size:cover}",""])},814:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(815),r=a(829),o=a.n(r),i=[{name:"home.menu.home",icon:"fa fa-home",link:"/"},{name:"home.menu.my_results",icon:"fa fa-edit",link:"/results"},{name:"form.practise",icon:"fa fa-product-hunt",link:"/practise"}],s=[{name:"Home",link:"/admin",icon:" fa fa-home"},{name:"Users",link:"/admin/users",icon:"fa fa-users"},{name:"Category",link:"/admin/category",icon:"fa fa-cog"},{name:"Topic Area",link:"/admin/topic-area",icon:"fa fa-car"},{name:"Test",link:"/admin/questionmanagement",icon:"fa fa-question-circle"},{name:"Results ",link:"/admin/results",icon:"fa fa-pencil-square-o"},{name:"Logs ",link:"/admin/logs",icon:"fa fa-tag"},{name:"Reports ",link:"/admin/reports",icon:"fa fa-file-text"}];t.default={name:"left-side",components:{vmenu:n.vmenu,vsubMenu:n.vsubMenu,vmenuItem:n.vmenuItem,profile:o.a},data:function(){return{menuitems:i}},mounted:function(){this.$route.path.includes("admin")&&(this.menuitems=s)}}},815:function(e,t,a){t.vmenu=a(816),t.vsubMenu=a(819),t.vmenuItem=a(824)},816:function(e,t,a){var n=a(47)(a(817),a(818),!1,null,null,null);e.exports=n.exports},817:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{$collapseItems:function(){return this.$children.filter(function(e){return e._isCollapseItem})}},methods:{openByIndex:function(e){this.$collapseItems.forEach(function(t,a){a!==e&&(t.isActived=!1)})}},mounted:function(){var e=this;this.$on("closeall",function(t){e.openByIndex(t)})}}},818:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vuemenu navigation"},[this._t("default")],2)},staticRenderFns:[]}},819:function(e,t,a){var n=a(47)(a(822),a(823),!1,function(e){a(820)},"data-v-42ddc640",null);e.exports=n.exports},820:function(e,t,a){var n=a(821);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("4bbd2c20",n,!0,{})},821:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,".collapse-item .submenu-header[data-v-42ddc640]{cursor:pointer;color:#3e6174;padding:11px 10px 11px 30px}.collapse-item .submenu-header[data-v-42ddc640]:hover{color:#5e7b85}.collapse-item .submenu-header .submenu-header-title[data-v-42ddc640]{vertical-align:text-bottom}.collapse-item .submenu-header .active .submenu-header-title[data-v-42ddc640]{font-weight:600}.collapse-item .submenu-content[data-v-42ddc640]{background-color:#f8f7f6;overflow-y:hidden;position:relative}.collapse-item .submenu-content-box[data-v-42ddc640]:active{color:#000}.collapse-item .submenu_icon[data-v-42ddc640]{-webkit-transition:all .3s;transition:all .3s;font-size:16px;margin-top:-2px;color:#3e6174}.collapse-item.active>.submenu-header[data-v-42ddc640]{background-color:#e6e6e6;color:#3e6174;font-weight:500}.collapse-item.active>.submenu-header>.submenu_icon[data-v-42ddc640]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.collapse-item.active>.submenu-header i[data-v-42ddc640]{color:#3e6174!important}.leftmenu_icon[data-v-42ddc640]{margin-right:6px;line-height:20px;height:22px;width:20px;text-align:center;font-size:16px;color:#3e6174}.leftmenu_icon:hover .submenu-header-title[data-v-42ddc640],.leftmenu_icon:hover .submenu_icon[data-v-42ddc640]{padding-left:50px}",""])},822:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(198),r=a.n(n);t.default={props:{selected:Boolean,icon:String,title:{type:String,required:!0}},data:function(){return{isActived:this.selected}},computed:{index:function(){return this.$parent.$collapseItems.indexOf(this)}},created:function(){this._isCollapseItem=!0},mounted:function(){var e=this;function t(e){e.$refs.box&&(e.isActived=e.$refs.box.querySelectorAll("a.active").length>=1)}this.$store.subscribe(function(a,n){"routeChange"==a.type&&"end"==a.payload&&setTimeout(function(){t(e)},0)}),t(this)},methods:{toggle:function(){this.$parent.$emit("closeall",this.index),this.isActived=!this.isActived},cancel:function(){this.anime.pause()},before:function(e){e.removeAttribute("style")},enter:function(e,t){var a=e.scrollHeight;e.style.height=0,e.style.opacity=0,r()({targets:e,duration:377,easing:"easeOutExpo",opacity:[0,1],height:a,complete:function(){e.removeAttribute("style"),t()}})},leave:function(e,t){r()({targets:e,duration:377,easing:"easeOutExpo",opacity:[1,0],height:0})}}}},823:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"submenu collapse-item",class:{active:e.isActived}},[a("div",{staticClass:"submenu-header touchable",attrs:{role:"tab","aria-expanded":e.selected?"true":"fase"},on:{click:e.toggle}},[a("i",{staticClass:"leftmenu_icon",class:e.icon}),e._v(" "),a("span",{staticClass:"submenu-header-title"},[e._v(e._s(e.title))]),e._v(" "),e._m(0)]),e._v(" "),a("transition",{attrs:{name:"collapsed-fade",css:!1},on:{"before-appear":e.before,appear:e.enter,"appear-cancel":e.cancel,"before-enter":e.before,enter:e.enter,"enter-cancel":e.cancel,leave:e.leave,"leave-cancel":e.cancel}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActived,expression:"isActived"}],staticClass:"submenu-content"},[a("div",{ref:"box",staticClass:"submenu-content-box"},[e._t("default")],2)])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"submenu_icon float-right"},[t("i",{staticClass:"fa fa-angle-right"})])}]}},824:function(e,t,a){var n=a(47)(a(827),a(828),!1,function(e){a(825)},"data-v-31af606c",null);e.exports=n.exports},825:function(e,t,a){var n=a(826);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("72e26cb6",n,!0,{})},826:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,"a[data-v-31af606c]{color:#fff;position:relative;display:block;line-height:21px;padding:12px 31px}a.active[data-v-31af606c]{color:#fff;background-color:#9c27b0;-webkit-box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(156,39,176,.4);box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(156,39,176,.4);margin:0 15px;border-radius:3px;padding-left:16px;padding-right:10px;text-transform:capitalize;font-size:14px;letter-spacing:1px}a.active i[data-v-31af606c]{color:#fff}.submenu-content-box .listbrdr[data-v-31af606c]:active{color:#000}.submenu-content-box .listbrdr[data-v-31af606c]:hover{color:#c6c4c4}.submenu-content a[data-v-31af606c]{padding:11px 20px 10px 45px;position:relative}.submenu-content .leftmenu_icon[data-v-31af606c]{font-size:14px;color:inherit}.name[data-v-31af606c]{vertical-align:text-bottom}.collapse-item .card-content .card-content-box div a[data-v-31af606c]{padding-left:43px}.leftmenu_icon[data-v-31af606c]{margin-right:1px;line-height:22px;height:23px;width:20px;text-align:center;font-size:16px;color:#fff}",""])},827:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["link","icon"]}},828:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"listbrdr"},[t("router-link",{staticClass:"menu-item",attrs:{to:this.link,exact:""}},[t("i",{staticClass:"leftmenu_icon",class:this.icon}),this._v(" "),t("span",{staticClass:"name"},[this._t("default")],2)])],1)},staticRenderFns:[]}},829:function(e,t,a){var n=a(47)(null,a(832),!1,function(e){a(830)},"data-v-0b459988",null);e.exports=n.exports},830:function(e,t,a){var n=a(831);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("9ce7f06a",n,!0,{})},831:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,".user_section[data-v-0b459988]{height:188px;padding:15px 20px}.user_section .img-wrapper[data-v-0b459988]{width:100px;border-radius:50%;padding:7px;margin:auto}.user_section img[data-v-0b459988]{width:84px;border:2px solid #ccc}.user_section p[data-v-0b459988]{font-size:15px}.user_section .leftuser_icons .logout_padd[data-v-0b459988]{padding:1px!important;color:#fff}.user_name_max[data-v-0b459988]{text-transform:uppercase;font-weight:700;max-width:210px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;margin:0 0 -4px;padding-top:2px;padding-bottom:5px}.leftuser_icons div[data-v-0b459988]{cursor:pointer;padding:1px 12px;font-size:18px;background-color:transparent;margin-right:3px;border-radius:50px;margin:auto;width:100%;display:inline}.leftuser_icons i[data-v-0b459988],.user_name_max[data-v-0b459988]{color:#fff}.profile-name[data-v-0b459988]{color:#fff;font-family:sans-serif}.compact_data[data-v-0b459988]{color:#fff}.user-profile-img[data-v-0b459988]{width:84px;height:84px}",""])},832:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"user_section"},[t("div",{staticClass:"img-wrapper"},[t("img",{staticClass:"rounded-circle user-profile-img",attrs:{src:this.$store.state.user.photo,alt:"user profile image"}})]),this._v(" "),t("p",{staticClass:"mt-2 mb-1 user_name_max text-center profile-name"},[this._v(this._s(this.$store.state.user.name))])])])},staticRenderFns:[]}},833:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("aside",{staticClass:"left-aside sidebar-offcanvas bk-img-black",staticStyle:{"background-image":"url(resources/assets/assets/img/left-side-bk.PNG)"},attrs:{"data-background-color":"black"}},[a("div",[a("section",[a("div",{attrs:{id:"menu",role:"navigation"}},[a("div",{staticClass:"nav_profile"},[a("profile")],1),a("br"),e._v(" "),a("vmenu",[e._l(e.menuitems,function(t){return[t.title?a("li",{staticClass:"divider mt-3 "},[a("span",[e._v(e._s(t.name))])]):e._e(),e._v(" "),t.child?a("vsub-menu",{attrs:{title:t.name,icon:t.icon}},e._l(t.child,function(t){return a("vmenu-item",{key:t.name,attrs:{link:t.link,icon:t.icon}},[e._v(e._s(t.name))])}),1):e._e(),e._v(" "),t.link?a("vmenu-item",{attrs:{link:t.link,icon:t.icon}},[e._v(e._s(e.$t(t.name)))]):e._e()]})],2)],1)])])])])},staticRenderFns:[]}},834:function(e,t,a){var n=a(47)(a(839),a(841),!1,function(e){a(835),a(837)},"data-v-7e5d7d2e",null);e.exports=n.exports},835:function(e,t,a){var n=a(836);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("9668e78c",n,!0,{})},836:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,".header[data-v-7e5d7d2e]{z-index:1030}.header nav[data-v-7e5d7d2e]{margin-bottom:0;height:50px;background:#fff;background-size:100% 100%;-webkit-box-shadow:0 0 10px #ccc;box-shadow:0 0 10px #ccc}.header .navbar-right[data-v-7e5d7d2e]{float:right;margin-right:15px}.header .logo[data-v-7e5d7d2e]{display:block;float:left;height:50px;line-height:41px;padding:3px 10px;text-align:center;width:250px;background:#fff}.header .logo img[data-v-7e5d7d2e]{width:125px}.header .navbar-right .dropdown-item[data-v-7e5d7d2e]{padding:0;width:100%;outline:none}.header .navbar-right div.dropdown>a[data-v-7e5d7d2e]{color:#000}.header .navbar-right div.dropdown .dropdown-menu>button[data-v-7e5d7d2e]{padding:10px 15px}.header .navbar-right div.dropdown.notifications-menu[data-v-7e5d7d2e]{height:50px}.header .navbar-right div.dropdown.notifications-menu .noti-icon[data-v-7e5d7d2e]{font-size:18px}.header .navbar-right div.dropdown>a>i[data-v-7e5d7d2e]{font-size:23px}.header .navbar-right div.dropdown>a[data-v-7e5d7d2e]{display:block;padding:12px}.header .navbar-right div.dropdown:hover>a[data-v-7e5d7d2e]{background-color:#ededed;color:#000}.header .navbar-right div.dropdown>a.padding-user[data-v-7e5d7d2e]{padding-top:8px;padding-bottom:6px}.header nav .sidebar-toggle[data-v-7e5d7d2e]{float:left;color:#000;font-size:19px;padding-top:10px}.user_name_max[data-v-7e5d7d2e]{display:inline-block;max-width:180px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;margin:0 0 -4px}.noti_msg[data-v-7e5d7d2e]{font-size:16px;padding:10px;border:1px solid #4f90c1;border-radius:50px;margin-top:10px}.user.user-menu>button img[data-v-7e5d7d2e]{width:35px;height:35px}@media screen and (max-width:767px){.dropdown.open .dropdown-menu[data-v-7e5d7d2e]{position:absolute}.navbar-right>li>a[data-v-7e5d7d2e]{padding:10px 12px}}@media (max-width:560px){body .header .logo[data-v-7e5d7d2e],body .header nav[data-v-7e5d7d2e]{width:100%}body .header nav .sidebar-toggle[data-v-7e5d7d2e]{padding-left:15px}nav[data-v-7e5d7d2e]{height:100px!important}}.notifications_badge_top[data-v-7e5d7d2e]{margin-top:-28px;margin-left:10px;position:absolute}.notifications_badge_top span[data-v-7e5d7d2e]{top:1px;left:2px;border-radius:50%;font-size:9px;padding:.23em .45em}.notifications-menu .dropdown-item[data-v-7e5d7d2e]{width:100%;display:block}.dropdown-footer[data-v-7e5d7d2e]{padding:10px!important}",""])},837:function(e,t,a){var n=a(838);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(39)("3b78a198",n,!0,{})},838:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,"@media screen and (max-width:560px){.wrapper{margin-top:100px}}.sidebar-toggle{margin-left:10px}.bell_bg button.btn-secondary{background-color:#fff;border:none;border-radius:0;-webkit-box-shadow:none!important;box-shadow:none!important}.bell_bg button.btn-secondary:hover{background-color:#ededed!important}.bell_bg button.btn-secondary:active{color:#000!important}.bell_bg.show button{background-color:#edede!important}.bell_bg.user_btn .dropdown-toggle{padding:7px 9px}.event_date,.tabs_cont{background-color:#fff!important}body.left-hidden aside.right-aside{margin-left:0}body.left-hidden .header.fixed-top{padding-right:0!important}.logo img{height:40px!important;width:90px!important}.logo-title{font-size:28px;font-family:sans-serif;color:#0a001f}.logo{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}",""])},839:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(840),r=a.n(n);t.default={name:"vueadmin_header",data:function(){return{checkAdmin:0}},methods:{toggle_menu:function(){this.$store.commit("left_menu","toggle")},fullscreen:function(){r.a.enabled&&r.a.toggle()},logout:function(){var e=this.$route.path;console.log("path",e),e.includes("admin")?(this.$store.dispatch("adminLogout"),this.$router.push("/admin/login")):e.includes("supervisor")?(this.$store.dispatch("supervisorLogout"),this.$router.push("/supervisor/login")):(this.$store.dispatch("logout"),this.$router.push("/login"))}},created:function(){this.$route.path.includes("admin")?this.checkAdmin=1:this.checkAdmin=0,console.log("this.checkAdmin",this.checkAdmin)}}},840:function(e,t){!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},a=void 0!==e&&e.exports,n="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var e,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=a.length,o={};n<r;n++)if((e=a[n])&&e[1]in t){for(n=0;n<e.length;n++)o[a[0][n]]=e[n];return o}return!1}(),o={change:r.fullscreenchange,error:r.fullscreenerror},i={request:function(e){var a=r.requestFullscreen;e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[a]():e[a](n?Element.ALLOW_KEYBOARD_INPUT:{})},exit:function(){t[r.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,a){var n=o[e];n&&t.addEventListener(n,a,!1)},off:function(e,a){var n=o[e];n&&t.removeEventListener(n,a,!1)},raw:r};r?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(t[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[r.fullscreenEnabled])}}}),a?e.exports=i:window.screenfull=i):a?e.exports=!1:window.screenfull=!1}()},841:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header fixed-top"},[n("nav",[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:a(745),alt:"logo"}}),e._v(" "),n("p",{staticClass:"logo-title"},[e._v("Belhasa")])]),e._v(" "),n("div",{staticClass:"float-left"},[n("a",{staticClass:"sidebar-toggle",attrs:{href:"javascript:void(0)"},on:{click:e.toggle_menu}},[n("i",{staticClass:"fa fa-bars"})])]),e._v(" "),n("div",{staticClass:"navbar-right",staticStyle:{"margin-top":"-10px"}},[n("div",[e.fullscreen?n("div",{staticClass:"dropdown hidden-xs-down btn-group fullscreen"},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:e.fullscreen}},[n("i",{staticClass:"fa fa-arrows-alt"})])]):e._e(),e._v(" "),1==this.$store.state.user.isAdmin?n("b-dropdown",{staticClass:"user user-menu bell_bg user_btn",attrs:{right:"",link:""}},[n("span",{attrs:{slot:"text"},slot:"text"},[n("img",{staticClass:"rounded-circle",attrs:{src:this.$store.state.user.photo,alt:"User Image"}}),e._v(" "),n("p",{staticClass:"user_name_max"},[e._v(e._s(this.$store.state.user.name))])]),e._v(" "),1==e.checkAdmin?n("a",{staticClass:"dropdown-item dropdown_content",staticStyle:{padding:"10px"},attrs:{href:"#/admin/users/edit/"+this.$store.state.user.id}},[e._v("\n                          "),n("i",{staticClass:"fa fa-user-o"}),e._v("  Profile\n                    ")]):e._e(),e._v(" "),0==e.checkAdmin?n("a",{staticClass:"dropdown-item dropdown_content",staticStyle:{padding:"10px"},attrs:{href:"#/users/edit/"+this.$store.state.user.id}},[e._v("\n                          "),n("i",{staticClass:"fa fa-user-o"}),e._v("  "+e._s(e.$t("home.menu.profile"))+"\n                    ")]):e._e(),e._v(" "),n("b-dropdown-item",{staticClass:"dropdown_content",attrs:{exact:""}},[n("a",{staticClass:"drpodowtext",attrs:{href:"javascript:void(0)",exact:""},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"fa fa-sign-out"}),e._v(" Logout\n                        ")])])],1):n("b-dropdown",{staticClass:"user user-menu bell_bg user_btn",attrs:{right:"",link:""}},[n("span",{attrs:{slot:"text"},slot:"text"},[n("img",{staticClass:"rounded-circle",attrs:{src:this.$store.state.user.photo,alt:"User Image"}}),e._v(" "),n("p",{staticClass:"user_name_max"},[e._v(e._s(this.$store.state.user.name))])]),e._v(" "),n("a",{staticClass:"dropdown-item dropdown_content",staticStyle:{padding:"10px"},attrs:{href:"#/users/edit/"+this.$store.state.user.id}},[e._v("\n                    "),n("i",{staticClass:"fa fa-user-o"}),e._v("  "+e._s(e.$t("home.menu.profile"))+"\n                ")]),e._v(" "),n("b-dropdown-item",{staticClass:"dropdown_content",attrs:{exact:""}},[n("a",{staticClass:"drpodowtext",attrs:{href:"javascript:void(0)",exact:""},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"fa fa-sign-out"}),e._v(" "+e._s(e.$t("home.menu.logout"))+"\n                  ")])])],1)],1)])],1)])},staticRenderFns:[]}},842:function(e,t,a){var n=a(843);"string"==typeof n&&(n=[[e.i,n,""]]);var r={transform:void 0};a(730)(n,r);n.locals&&(e.exports=n.locals)},843:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,'.badge{color:#fff}html{background:none repeat scroll 0 0 #fff;overflow-x:hidden;transition:all .25s ease-out;font-size:small}button,html,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}body{background:none repeat scroll 0 0 #fff;overflow-x:hidden;transition:all .25s ease-out;font-size:small;letter-spacing:.5px;width:100%;margin:0 auto}#app,#app>div,#app div.wrapper,body{min-height:calc(100vh - 102px)}body.modal-open,body.modal-open .header{padding-right:0!important}ul{list-style:none}label{font-weight:400;font-size:14px;letter-spacing:1px}a,a:hover{text-decoration:none!important}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{vertical-align:middle}.dropdown-menu{box-shadow:0 3px 6px rgba(0,0,0,.1);z-index:2300;margin-top:0;border:none;outline:none}.submenu-content .name{vertical-align:text-top!important}.resize_vertical{resize:vertical}h4.card-header{font-size:16px}.card{margin-bottom:25px}.bg-primary-card{border:1px solid #337ab7}.bg-primary-card>.card-header{background-color:#337ab7;color:#fff}.bg-info-card{border:1px solid #4fc1e9}.bg-info-card>.card-header{background-color:#4fc1e9;color:#fff}.bg-warning-card{border:1px solid #fea115}.bg-warning-card>.card-header{background-color:#fea115;color:#fff}.bg-danger-card{border:1px solid #fd7570}.bg-danger-card>.card-header{background-color:#fd7570;color:#fff}.bg-success-card{border:1px solid #16af81}.bg-success-card>.card-header{background-color:#16af81;color:#fff}.bg-danger-card:hover,.bg-info-card:hover,.bg-primary-card:hover,.bg-success-card:hover,.bg-warning-card:hover,.card:hover{box-shadow:1px 1px 38px -8px #8e8c8e}.btn,.btn-link{cursor:pointer}@media print{#scroll,aside.left-aside,header.header,section.content-header{display:none!important}.table-responsive{display:inline-table;width:100%}}header .navbar-right .dropdown-menu{padding:0}header .navbar-right .dropdown-footer,header .navbar-right .dropdown-footer:hover,header .navbar-right .dropdownheader .nav.nav-tabs,header .navbar-right .dropdownheader:hover .nav.nav-tabs{background:#fff;color:#000;border:1px solid #ccc}header .navbar-right .show>.btn-secondary.dropdown-toggle{background-color:#eee;color:#000;border-color:#eee}header .navbar-right .btn-link:active,header .navbar-right .btn-link:focus,header .navbar-right .btn-link:hover{text-decoration:none}header .navbar-right .btn .btn:active{border:none}header .navbar-right .btn-group>button{vertical-align:top;color:#000}header .navbar-right .btn-group>button:hover{background-color:#ededed;color:#000}@media (max-width:560px){.notifications-menu .dropdown-menu.dropdown-menu-right{right:-123px}}.notifications-menu .dropdown-menu{width:300px}.dropdownheader .nav-tabs .nav-link{color:#000}.dropdown-menu .nav-tabs .nav-link:focus,.dropdown-menu .nav-tabs .nav-link:hover{border-color:transparent}.dropdown-menu .nav-tabs .nav-item.show .nav-link,.dropdown-menu .nav-tabs .nav-link.active{color:#000;background-color:#eee}.nav-tabs>li>a{color:#000}.drpodowtext{color:#333;transition:.3s}.drpodowtext:hover{margin-left:12px;transition:.3s}.dropdown_content a{width:100%;display:block;padding:10px 15px}.dropdown-item img{height:50px;width:50px}.dropdown-item.active,.dropdown-item:active{color:#111;text-decoration:none;background-color:transparent}.btn-secondary.focus,.btn-secondary:focus{box-shadow:none}.dropdown-toggle:after{display:none}.ql-container .ql-editor{min-height:20em;padding-bottom:1em;max-height:25em}.nav-tabs:focus{outline:none}.full-calendar-body .dates .dates-events .events-week .events-day{min-height:100px!important}.full-calendar-header>div.header-center{font-size:18px}.ct-series-a .ct-line,.ct-series-a .ct-point{stroke:#8dcee4!important}.ct-series-b .ct-line,.ct-series-b .ct-point{stroke:#4fc1e9!important}.ct-series-c .ct-line,.ct-series-c .ct-point{stroke:#16af81!important}.ct-series-d .ct-line,.ct-series-d .ct-point{stroke:#8dcee4!important}.ct-series-a .ct-bar{stroke:#97d9ef!important}.ct-series-b .ct-bar{stroke:#4fc1e9!important}.ct-label{font-size:10px;color:#000}.ct-series-a .ct-slice-pie{fill:#7faff7!important}.ct-series-b .ct-slice-pie{fill:#6f8dd5!important}.ct-series-c .ct-slice-pie{fill:#11bca9!important}.v-chartist-container{height:300px}.ct-series-a .ct-slice-donut{stroke:#11bca9!important;stroke:#6f8dd5!important;stroke:#7faff7!important}.ct-series-c .ct-slice-donut{stroke:#11bca9!important}.ct-series-b .ct-slice-donut{stroke:#6f8dd5!important}.drp_align .dropdown-menu{left:-100%}.form_elemntsdropdown .dropdown-item{padding:10px 15px}.breadcrumb1>.breadcrumb-item+.breadcrumb-item:before{content:"\\BB"}.breadcrumb2>.breadcrumb-item+.breadcrumb-item:before{content:"\\203A"!important}.breadcrumb3>.breadcrumb-item+.breadcrumb-item:before{content:"\\2013   "}.vdp-datepicker input,.vdp-datepicker select{padding:.75em .5em;font-size:100%;border:1px solid #dcdccc;width:100%}@media (max-width:768px){.vdp-datepicker__calendar{width:100%!important}}.pull-right{float:right}.car-header:first-child{border:none!important}.form-control{transition:initial}',""])},844:function(e,t,a){var n=a(845);"string"==typeof n&&(n=[[e.i,n,""]]);var r={transform:void 0};a(730)(n,r);n.locals&&(e.exports=n.locals)},845:function(e,t,a){(e.exports=a(38)(!1)).push([e.i,"aside.left-aside{position:fixed;top:50px;left:0;max-height:100%;height:calc(100% - 50px);overflow-y:auto}@media screen and (max-width:560px){aside.left-aside{top:100px;height:calc(100% - 100px)}}aside.right-aside{display:block!important;width:auto!important;margin-left:250px}body.left-hidden aside.right-aside{margin-left:0}",""])}});