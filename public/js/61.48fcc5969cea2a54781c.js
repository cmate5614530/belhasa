webpackJsonp([61],{1488:function(t,e,s){var o=s(1489);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(38)("79e4b26f",o,!0,{})},1489:function(t,e){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10")},1490:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(46),a=s.n(o),n=s(569),i=s.n(n),r=s(570),l=s(767),u=s(566);u.a.init(),l.a.init(),a.a.use(i.a,r.a),e.default={name:"login",data:function(){return{formstate:{},model:{studentId:"",password:""}}},methods:{onSubmit:function(){var t=this;this.formstate.$invalid||l.a.post("login",this.model).then(function(e){var s=e.data;!0===s.success?(console.log(s),t.$store.dispatch("login",s.data),t.$store.commit("changeUser",s.data),t.$router.push("/choose-option")):(u.a.error(s.message),console.log(s))},function(t){})}},created:function(){u.a.setIcon("error","i",{class:"fa fa-times"})},mounted:function(){console.log("------locale-------",this.$i18n.locale)},destroyed:function(){}}},1491:function(t,e,s){var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"logo-img",attrs:{src:s(765)}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-content-f-line"},[e("div",[e("img",{staticClass:"logo-img-footer",attrs:{src:s(765)}}),this._v(" "),e("span",[this._v("Belhasa Driving Center")])])])}];t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid img_backgrond"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 mt-5 "},[t._m(0),t._v(" "),s("div",{staticClass:"login-content"},[s("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("h3",{staticClass:"login-title"},[t._v("Login")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 mt-3 "},[s("div",{staticClass:"form-group"},[s("validate",{attrs:{tag:"div"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.model.studentId,expression:"model.studentId"}],staticClass:"form-control",attrs:{name:"studentId",id:"studentId",type:"text",required:"",autofocus:"",placeholder:"Student ID"},domProps:{value:t.model.studentId},on:{input:function(e){e.target.composing||t.$set(t.model,"studentId",e.target.value)}}}),t._v(" "),s("field-messages",{staticClass:"text-danger",attrs:{name:"studentId",show:"$invalid && $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("User is a required field")])])],1)],1)]),t._v(" "),s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"form-group"},[s("validate",{attrs:{tag:"div"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],staticClass:"form-control",attrs:{name:"password",id:"password",type:"password",required:"",placeholder:"Password",minlength:"4",maxlength:"10"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),t._v(" "),s("field-messages",{staticClass:"text-danger",attrs:{name:"password",show:"$invalid && $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("Password is required")]),t._v(" "),s("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("Password should be atleast 4 characters long")]),t._v(" "),s("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("Password should be atmost 10 characters long")])])],1)],1)]),t._v(" "),s("div",{staticClass:"col-lg-8 col-md-8"},[s("div",{staticClass:"form-group"},[s("p",{staticClass:"change_link"},[t._v("Don't have an account?\n                                    "),s("router-link",{staticClass:"to_register ng-scope",attrs:{tag:"a",to:"/register","data-ui-sref":"login"}},[t._v("\n                                        Sign Up\n                                    ")])],1)])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-4 text-right"},[s("div",{staticClass:"form-group submit-login"},[s("input",{staticClass:"btn btn-light",attrs:{type:"submit",value:"Sign In"}})])])]),t._v(" "),s("h1")])],1),t._v(" "),t._m(1)])])])},staticRenderFns:o}},1580:function(t,e,s){var o=s(45)(s(1490),s(1491),!1,function(t){s(1488)},"data-v-3315e7fe",null);t.exports=o.exports},563:function(t,e,s){"use strict";var o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function s(t,e){if(!s.installed){if(s.installed=!0,!e)return void console.error("You have to install axios");t.axios=e,Object.defineProperties(t.prototype,{axios:{get:function(){return e}},$http:{get:function(){return e}}})}}"object"==a(e)?t.exports=s:void 0===(o=function(){return s}.apply(e,[]))||(t.exports=o)}()},566:function(t,e,s){"use strict";const o="mini-toastr",a="error",n="warn",i="success",r="info",l=o,u=`${o}__notification`,d=`${o}-notification__title`,c=`${o}-notification__icon`,f=`${o}-notification__message`,p=`-${a}`,m=`-${n}`,v=`-${i}`,h=`-${r}`;function g(t){const e=function t(e,s,o){s=s||{},o=o||"";for(let a in e)if(e.hasOwnProperty(a)){const n=e[a];n&&"object"==typeof n&&!(n instanceof Date||n instanceof RegExp)?t(n,s,o+a+" "):s[o]&&"object"==typeof s[o]?s[o][a]=n:(s[o]={},s[o][a]=n)}return s}(t);let s=JSON.stringify(e,null,2);return s=(s=s.replace(/"([^"]*)": {/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1")).substr(1,s.lastIndexOf("}")-1)}const b={types:{ERROR:a,WARN:n,SUCCESS:i,INFO:r},animation:function t(e,s){e.style.opacity&&e.style.opacity>.05?e.style.opacity=e.style.opacity-.05:e.style.opacity&&e.style.opacity<=.1?e.parentNode&&(e.parentNode.removeChild(e),s&&s()):e.style.opacity=.9,setTimeout(()=>t.apply(this,[e,s]),1e3/30)},timeout:3e3,icons:{},appendTarget:document.body,node:y(),style:{[`.${l}`]:{position:"fixed","z-index":99999,right:"12px",top:"12px"},[`.${u}`]:{cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px",[`&.${p}`]:{"background-color":"#D5122B"},[`&.${m}`]:{"background-color":"#F5AA1E"},[`&.${v}`]:{"background-color":"#7AC13E"},[`&.${h}`]:{"background-color":"#4196E1"},"&:hover":{opacity:1,"box-shadow":"#000 0 0 12px"}},[`.${d}`]:{"font-weight":"500"},[`.${f}`]:{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}}};function y(t="div"){return document.createElement(t)}function $(t,e,s){const o=y();o.className=s,o.appendChild(document.createTextNode(e)),t.appendChild(o)}const _={config:b,isInitialised:!1,showMessage(t,e,s,o,l,c){const g={};Object.assign(g,this.config),Object.assign(g,c);const b=y();return b.className=`${u} ${function(t){return t===i?v:t===n?m:t===a?p:t===r?h:""}(s)}`,b.onclick=function(){g.animation(b,null)},e&&$(b,e,d),g.icons[s]&&function(t,e,s){const o=y(s.icons[e].nodeType),a=s.icons[e].attrs;for(const t in a)a.hasOwnProperty(t)&&o.setAttribute(t,a[t]);t.appendChild(o)}(b,s,g),t&&$(b,t,f),g.node.insertBefore(b,g.node.firstChild),setTimeout(()=>g.animation(b,l),o||g.timeout),l&&l(),this},init(t){const e={};return Object.assign(e,b),Object.assign(e,t),this.config=e,function(t){let e=document.head||document.getElementsByTagName("head")[0],s=y("style");s.id=`${o}-styles`,s.type="text/css",s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t)),e.appendChild(s)}(g(e.style)),e.node.id=l,e.node.className=l,e.appendTarget.appendChild(e.node),Object.keys(e.types).forEach(t=>{this[e.types[t]]=function(s,o,a,n,i){return this.showMessage(s,o,e.types[t],a,n,i),this}.bind(this)}),this.isInitialised=!0,this},setIcon(t,e="i",s=[]){s.class=s.class?s.class+" "+c:c,this.config.icons[t]={nodeType:e,attrs:s}}};e.a=_},569:function(t,e,s){(function(e){var s;s=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,s=/^(http\:\/\/|https\:\/\/)(.{4,})$/,o=function(e,s,o){return t.test(e)};o._allowNulls=!0;var a=function(t,e,s){return!isNaN(t)};a._allowNulls=!0;var n=function(t,e,o){return s.test(t)};n._allowNulls=!0;var i={validators:{email:o,number:a,url:n,required:function(t,e,s){return!1===e||(0===t||(!(!(s.data.attrs&&void 0!==s.data.attrs.bool||s.componentOptions&&s.componentOptions.propsData&&void 0!==s.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,s){return"number"==(s.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,s){return"number"==(s.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"VueForm",formTag:"form",messagesComponent:"FieldMessages",messagesTag:"div",showMessages:"",validateComponent:"Validate",validateTag:"div",fieldComponent:"Field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}}(),u=function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t,e){var s;return u(s={},t.dirty,e.$dirty),u(s,t.pristine,e.$pristine),u(s,t.valid,e.$valid),u(s,t.invalid,e.$invalid),u(s,t.touched,e.$touched),u(s,t.untouched,e.$untouched),u(s,t.focused,e.$focused),u(s,t.pending,e.$pending),u(s,t.submitted,e.$submitted),s}function f(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function p(t,e){var s={vModel:[],label:null,messages:null};if(!t)return s;return function t(o){for(var a=0;a<o.length;a++){var n=o[a];n.componentOptions&&n.componentOptions.tag===h(e.messagesComponent)&&(s.messages=n),"label"!==n.tag||s.label||(s.label=n),n.data&&(n.data.model?s.vModel.push(n):n.data.directives&&n.data.directives.filter(function(t){return"model"===t.name}).length&&s.vModel.push(n)),n.children?t(n.children):n.componentOptions&&n.componentOptions.children&&t(n.componentOptions.children)}}(t),s}function m(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var v=/([^-])([A-Z])/g;function h(t){return t.replace(v,"$1-$2").replace(v,"$1-$2").toLowerCase()}function g(){return Math.random().toString(36).substr(2,10)}var b="VueFormProviderConfig"+g(),y="VueFormProviderState"+g(),$="VueFormProviderParentForm"+g(),_=Object.prototype.hasOwnProperty,w=Object.prototype.toString,C=Object.defineProperty,x=Object.getOwnPropertyDescriptor,j=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===w.call(t)},O=function(t){if(!t||"[object Object]"!==w.call(t))return!1;var e,s=_.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&_.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!s&&!o)return!1;for(e in t);return void 0===e||_.call(t,e)},F=function(t,e){C&&"__proto__"===e.name?C(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},S=function(t,e){if("__proto__"===e){if(!_.call(t,e))return;if(x)return x(t,e).value}return t[e]},E=function t(){var e,s,o,a,n,i,r=arguments[0],l=1,u=arguments.length,d=!1;for("boolean"==typeof r&&(d=r,r=arguments[1]||{},l=2),(null==r||"object"!=typeof r&&"function"!=typeof r)&&(r={});l<u;++l)if(null!=(e=arguments[l]))for(s in e)o=S(r,s),r!==(a=S(e,s))&&(d&&a&&(O(a)||(n=j(a)))?(n?(n=!1,i=o&&j(o)?o:[]):i=o&&O(o)?o:{},F(r,{name:s,newValue:t(d,i,a)})):void 0!==a&&F(r,{name:s,newValue:a}));return r},N={render:function(t){var e=this,s={};return"undefined"!=typeof window&&(s.novalidate=""),t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:s},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:b},provide:function(){var t;return u(t={},y,this.state),u(t,$,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},s=this.state,o={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(s));delete e.$submittedState,Object.keys(e).forEach(function(s){t.$set(t.state.$submittedState,s,e[s])})},_addControl:function(o){e[o.$name]=o,t.$set(s,o.$name,o)},_removeControl:function(s){delete e[s.$name],t.$delete(t.state,s.$name),t.$delete(t.state.$error,s.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){s.$submitted=!1,s.$pending=!1,s.$submittedState={},Object.keys(e).forEach(function(t){var s=e[t];s._hasFocused=!1,s._setUntouched(),s._setPristine(),s.$submitted=!1,s.$pending=!1})}};Object.keys(o).forEach(function(e){t.$set(t.state,e,o[e])}),this.$watch("state",function(){var o=!1,a=!0,n=!1,i=!1,r=!1;Object.keys(e).forEach(function(l){var u=e[l];u.$submitted=s.$submitted,u.$dirty&&(o=!0),u.$touched&&(n=!0),u.$focused&&(i=!0),u.$pending&&(r=!0),u.$valid?t.$delete(s.$error,u.$name):(a=!1,t.$set(s.$error,u.$name,u))}),s.$dirty=o,s.$pristine=!o,s.$touched=n,s.$untouched=!n,s.$focused=i,s.$valid=a,s.$invalid=!a,s.$pending=r},{deep:!0,immediate:!0})}},computed:{className:function(){return c(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},P="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var k,V=(function(t){(function(){var e={}.hasOwnProperty,s=[].slice;t.exports=function(t,o){var a,n,i,r;for(a in n=[],r=[],o)e.call(o,a)&&(i=o[a],"this"!==a&&(n.push(a),r.push(i)));return Function.apply(null,s.call(n).concat(["return eval("+JSON.stringify(t)+")"])).apply(o.this,r)}}).call(P)}(k={exports:{}},k.exports),k.exports);function D(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return D(t[e].children)}}var L={inject:{vueFormConfig:b,vueFormState:y,vueFormParentForm:$},render:function(t){var e=this,s=[],o=this.formstate[this.fieldname];if(o&&o.$error&&this.isShown&&(Object.keys(o.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var a=e.$slots[t]||e.$scopedSlots[t](o);if(e.autoLabel){var n=D(a);n&&(n.data=n.data||{},n.data.attrs=n.data.attrs||{},n.data.attrs.for=o._id)}s.push(a)}}),!s.length&&o.$valid&&(this.$slots.default||this.$scopedSlots.default))){var a=this.$slots.default||this.$scopedSlots.default(o);if(this.autoLabel){var n=D(a);n&&(n.data=n.data||{},n.data.attrs=n.data.attrs||{},n.data.attrs.for=o._id)}s.push(a)}return t(this.tag||this.vueFormConfig.messagesTag,s)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||V(e,t)}}},T={render:function(t){var e=this,s=p(this.$slots.default,this.vueFormConfig),o=s.vModel,a={for:null};if(o.length){if(this.name=m(o[0]),s.messages&&this.$nextTick(function(){var t=s.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var n=o[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=n,o[0].data.attrs.id=n,s.label?(s.label.data=s.label.data||{},s.label.data.attrs=s.label.data.attrs||{},s.label.data.attrs.for=n):"label"===this.tag&&(a.for=n)}o.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:a},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:b,vueFormState:y,vueFormParentForm:$},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,s){return e[t.invalid+"-"+h(s)]=!0,e},c(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(s,o){for(var a,n=void 0,i=function(t,e){o&&Object.keys(o).filter(function(t){return o[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),n=[],Object.keys(s).filter(function(t){return s[t]}).forEach(function(t){n.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},r=0;a=e[r++];)i(0,a);t.fieldstate._className=n},{deep:!0,immediate:!0}),this.$watch("name",function(e,s){t.formstate._removeControl(t.fieldstate),t.fieldstate.$name=e,t.formstate._addControl(t.fieldstate)})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,s=[],o=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},$attrs:{},_className:null,_id:"vf"+g(),_setValidatorValidity:function(t,s){s?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var a=this;t?o=t:t=o,this.$pending=!0;var n=!0,i=f(t.data);i;var r={promises:[],names:[]};s.push(r);var l=t.data.attrs||{},u=t.componentInstance;u&&u._vfValidationData_&&(l=E({},l,u._vfValidationData_));var d=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(s){if((""===i||void 0===i||null===i)&&"required"!==s)return a._setValidatorValidity(s,!0),void!0;var o=void 0!==l[s]?l[s]:d[s],u="function"==typeof a._validators[s];if(!u||null!==o&&void 0!==o||a._validators[s]._allowNulls){o&&(a.$attrs[s]=o);var c=u?a._validators[s](i,o,t):e.custom[s];"boolean"==typeof c?c?a._setValidatorValidity(s,!0):(n=!1,a._setValidatorValidity(s,!1)):(r.promises.push(c),r.names.push(s),e.vueFormParentForm.promises.push(c))}}),r.promises.length?e.vueFormConfig.Promise.all(r.promises).then(function(t){r===s[s.length-1]&&(s=[],t.forEach(function(t,e){var s=r.names[e];t?a._setValidatorValidity(s,!0):(n=!1,a._setValidatorValidity(s,!1))}),a._setValidity(n),a.$pending=!1)}):(this._setValidity(n),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,s){var o,a,n,i;s&&e&&(o=e,a=s,n="",i="",Object.keys(o).sort().filter(function(t){return"function"!=typeof o[t]}).forEach(function(t){return n+=o[t]}),Object.keys(a).sort().filter(function(t){return"function"!=typeof o[t]}).forEach(function(t){return i+=a[t]}),n!==i&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},I={inject:{vueFormConfig:b},render:function(t){var e=p(this.$slots.default,this.vueFormConfig),s=e.vModel,o={for:null};if(s.length&&this.autoLabel){var a=s[0].data.attrs&&s[0].data.attrs.id||"vf"+g();s[0].data.attrs.id=a,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=a):"label"===this.tag&&(o.for=a)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:o},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},M={};function R(t,e,s){Object.keys(t).forEach(function(o){var a="type"===o?t[o].toLowerCase():o.toLowerCase();e[a]&&!s[a]&&(s[a]=e[a])})}var z={name:"vue-form-validator",bind:function(t,e,s){var o=e.value.fieldstate,a=e.value.config.validators,n=s.data.attrs||{};if(m(s)){var i,r,l,u;n.debounce&&(M[o._id]=(i=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},r=n.debounce,function(){var t=this,e=arguments,s=l&&!u;clearTimeout(u),u=setTimeout(function(){u=null,l||i.apply(t,e)},r),s&&i.apply(t,e)})),R(n,a,o._validators),s.componentOptions&&s.componentOptions.propsData&&R(s.componentOptions.propsData,a,o._validators),o._validate(s),t.addEventListener("blur",function(){o._setFocused(!1)},!1),t.addEventListener("focus",function(){o._setFocused(!0)},!1);var d=s.componentInstance;d&&(d.$on("blur",function(){o._setFocused(!1)}),d.$on("focus",function(){o._setFocused(!0)}),d.$once("vf:addFocusListeners",function(){t.addEventListener("focusout",function(){o._setFocused(!1)},!1),t.addEventListener("focusin",function(){o._setFocused(!0)},!1)}),d.$on("vf:validate",function(t){d._vfValidationData_||R(t,a,o._validators),d._vfValidationData_=t,o._validate(d.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,s,o){var a=function(t,e,s){var o=!1,a=t.data.attrs||{},n=e.data.attrs||{},i={};if(f(t.data)!==f(e.data)&&(i.vModel=!0,o=!0),Object.keys(s).forEach(function(t){a[t]!==n[t]&&(i[t]=!0,o=!0)}),t.componentOptions&&t.componentOptions.propsData){var r=t.componentOptions.propsData,l=e.componentOptions.propsData;Object.keys(s).forEach(function(t){r[t]!==l[t]&&(i[t]=!0,o=!0)})}if(o)return i}(s,o,e.value.config.validators),n=e.value.fieldstate,i=s.data.attrs||{},r=s.componentInstance;r&&r._vfValidationData_&&(i=E({},i,r[r._vfValidationData_])),-1===s.elm.className.indexOf(n._className[0])&&(s.elm.className=s.elm.className+" "+n._className.join(" ")),a&&(a.vModel?i.debounce?(n.$pending=!0,M[n._id](n,s)):(n._hasFocused&&n._setDirty(),n._validate(s)):n._validate(s))}};function A(t){var e,s=E(!0,{},i,t);this.provide=function(){return u({},b,s)},this.components=(u(e={},s.formComponent,N),u(e,s.messagesComponent,L),u(e,s.validateComponent,T),u(e,s.fieldComponent,I),e),this.directives={vueFormValidator:z}}var q=function(t){function e(){return r(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,A),l(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return A.call(q),q.options=new q,q},t.exports=s()}).call(e,s(25))},570:function(t,e,s){"use strict";e.a={validators:{checkbox:function(t,e,s){return t},sameas:function(t,e,s){return t==e}}}},765:function(t,e){t.exports="/vuejs-laravel/public/images/symbol.png?b516713de274c8ca34e14bd8acfc8460"},767:function(t,e,s){"use strict";var o=s(46),a=s.n(o),n=s(108),i=s.n(n),r=s(563),l=s.n(r),u=s(196),d={init:function(){a.a.use(l.a,i.a),a.a.axios.defaults.baseURL="api/user/",a.a.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},setHeader:function(){var t=u.a.getUser("user");a.a.axios.defaults.headers.common.user_id=""+t.user_id,a.a.axios.defaults.headers.common.password=""+t.password},query:function(t,e){return a.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";null!==u.a.getUser()&&this.setHeader();var s="";return _.isNaN(e)||(s="?"+e),_.isObject(e)&&(s="?"+_.keys(e).filter(function(t){return null!=e[t]&&"null"!==e[t]}).map(function(t){return t+"="+e[t]}).join("&")),a.a.axios.get(""+t+s).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return console.log(a.a.axios),null!==u.a.getUser()&&this.setHeader(),a.a.axios.post(""+t,e)}};e.a=d}});