webpackJsonp([62],{1483:function(t,e,a){var s=a(1484);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(38)("904b3da0",s,!0,{})},1484:function(t,e){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)")},1485:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(46),o=a.n(s),n=a(569),i=a.n(n),r=a(570),l=a(568);l.a.init(),o.a.use(i.a,r.a),e.default={name:"login2",data:function(){return{formstate:{},model:{email:"",password:""}}},methods:{onSubmit:function(){var t=this;this.formstate.$invalid||l.a.post("login",this.model).then(function(e){var a=e.data;a.success&&(t.$store.dispatch("adminLogin",a.data),t.$store.commit("changeAdmin",a.data),console.log("getUserData",a),t.$router.push("/admin"))},function(t){})}},mounted:function(){},destroyed:function(){}}},1486:function(t,e,a){var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 mt-3"},[e("h2",{staticClass:"text-center"},[e("img",{attrs:{src:a(835),alt:"Logo"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"rounded-circle",attrs:{src:a(1487)}})])])])}];t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid img_backgrond"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 mt-3 "},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{name:"email",id:"email",type:"email",required:"",autofocus:"",placeholder:"Student Id"},domProps:{value:t.model.email},on:{input:function(e){e.target.composing||t.$set(t.model,"email",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"password"}},[t._v(" Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],staticClass:"form-control",attrs:{name:"password",id:"password",type:"password",required:"",placeholder:"Password",minlength:"4",maxlength:"10"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"password",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Password is required")]),t._v(" "),a("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("Password should be atleast 4 characters long")]),t._v(" "),a("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("Password should be atmost 10 characters long")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6"},[a("validate",{attrs:{tag:"label"}},[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.remember,expression:"model.remember"}],staticClass:"custom-control-input checkbox_label",attrs:{type:"checkbox",name:"remember",id:"remember","check-box":""},domProps:{checked:Array.isArray(t.model.remember)?t._i(t.model.remember,null)>-1:t.model.remember},on:{change:function(e){var a=t.model.remember,s=e.target,o=!!s.checked;if(Array.isArray(a)){var n=t._i(a,null);s.checked?n<0&&t.$set(t.model,"remember",a.concat([null])):n>-1&&t.$set(t.model,"remember",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.model,"remember",o)}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("Remember Me")])]),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"remember",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"check-box"},slot:"check-box"},[t._v("Terms must be accepted")])])],1)],1),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 text-right"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"Sign In"}})])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"col-sm-12 text-center"},[a("div",{staticClass:"form-group"},[a("p",[a("router-link",{attrs:{tag:"a",to:"/forgotpassword"}},[t._v("Forgot Your Password ?")])],1),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block ",attrs:{tag:"a",to:"/register"}},[t._v("New User? Sign Up Now\n                            ")])],1)])])])],1)])])},staticRenderFns:s}},1487:function(t,e){t.exports="/vuejs-laravel/public/images/login_user-01.png?11f289cac06c5b1a19de1d9cd11f677c"},1579:function(t,e,a){var s=a(45)(a(1485),a(1486),!1,function(t){a(1483)},"data-v-38b276df",null);t.exports=s.exports},563:function(t,e,a){"use strict";var s,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function a(t,e){if(!a.installed){if(a.installed=!0,!e)return void console.error("You have to install axios");t.axios=e,Object.defineProperties(t.prototype,{axios:{get:function(){return e}},$http:{get:function(){return e}}})}}"object"==o(e)?t.exports=a:void 0===(s=function(){return a}.apply(e,[]))||(t.exports=s)}()},568:function(t,e,a){"use strict";var s=a(46),o=a.n(s),n=a(108),i=a.n(n),r=a(563),l=a.n(r),u=a(196),d={init:function(){o.a.use(l.a,i.a),o.a.axios.defaults.baseURL="api/admin/",o.a.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},setHeader:function(){var t=u.a.getUser("admin");o.a.axios.defaults.headers.common.user_id=""+t.user_id,o.a.axios.defaults.headers.common.password=""+t.password},query:function(t,e){return o.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";null!==u.a.getUser()&&this.setHeader();var a="";return _.isNaN(e)||(a="?"+e),_.isObject(e)&&(a="?"+_.keys(e).filter(function(t){return null!=e[t]&&"null"!==e[t]}).map(function(t){return t+"="+e[t]}).join("&")),o.a.axios.get(""+t+a).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return null!==u.a.getUser()&&this.setHeader(),o.a.axios.post(""+t,e)}};e.a=d},569:function(t,e,a){(function(e){var a;a=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,a=/^(http\:\/\/|https\:\/\/)(.{4,})$/,s=function(e,a,s){return t.test(e)};s._allowNulls=!0;var o=function(t,e,a){return!isNaN(t)};o._allowNulls=!0;var n=function(t,e,s){return a.test(t)};n._allowNulls=!0;var i={validators:{email:s,number:o,url:n,required:function(t,e,a){return!1===e||(0===t||(!(!(a.data.attrs&&void 0!==a.data.attrs.bool||a.componentOptions&&a.componentOptions.propsData&&void 0!==a.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"VueForm",formTag:"form",messagesComponent:"FieldMessages",messagesTag:"div",showMessages:"",validateComponent:"Validate",validateTag:"div",fieldComponent:"Field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),u=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t,e){var a;return u(a={},t.dirty,e.$dirty),u(a,t.pristine,e.$pristine),u(a,t.valid,e.$valid),u(a,t.invalid,e.$invalid),u(a,t.touched,e.$touched),u(a,t.untouched,e.$untouched),u(a,t.focused,e.$focused),u(a,t.pending,e.$pending),u(a,t.submitted,e.$submitted),a}function f(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function m(t,e){var a={vModel:[],label:null,messages:null};if(!t)return a;return function t(s){for(var o=0;o<s.length;o++){var n=s[o];n.componentOptions&&n.componentOptions.tag===h(e.messagesComponent)&&(a.messages=n),"label"!==n.tag||a.label||(a.label=n),n.data&&(n.data.model?a.vModel.push(n):n.data.directives&&n.data.directives.filter(function(t){return"model"===t.name}).length&&a.vModel.push(n)),n.children?t(n.children):n.componentOptions&&n.componentOptions.children&&t(n.componentOptions.children)}}(t),a}function v(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var p=/([^-])([A-Z])/g;function h(t){return t.replace(p,"$1-$2").replace(p,"$1-$2").toLowerCase()}function b(){return Math.random().toString(36).substr(2,10)}var g="VueFormProviderConfig"+b(),_="VueFormProviderState"+b(),$="VueFormProviderParentForm"+b(),y=Object.prototype.hasOwnProperty,w=Object.prototype.toString,C=Object.defineProperty,x=Object.getOwnPropertyDescriptor,j=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===w.call(t)},O=function(t){if(!t||"[object Object]"!==w.call(t))return!1;var e,a=y.call(t,"constructor"),s=t.constructor&&t.constructor.prototype&&y.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!a&&!s)return!1;for(e in t);return void 0===e||y.call(t,e)},F=function(t,e){C&&"__proto__"===e.name?C(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},S=function(t,e){if("__proto__"===e){if(!y.call(t,e))return;if(x)return x(t,e).value}return t[e]},k=function t(){var e,a,s,o,n,i,r=arguments[0],l=1,u=arguments.length,d=!1;for("boolean"==typeof r&&(d=r,r=arguments[1]||{},l=2),(null==r||"object"!=typeof r&&"function"!=typeof r)&&(r={});l<u;++l)if(null!=(e=arguments[l]))for(a in e)s=S(r,a),r!==(o=S(e,a))&&(d&&o&&(O(o)||(n=j(o)))?(n?(n=!1,i=s&&j(s)?s:[]):i=s&&O(s)?s:{},F(r,{name:a,newValue:t(d,i,o)})):void 0!==o&&F(r,{name:a,newValue:o}));return r},P={render:function(t){var e=this,a={};return"undefined"!=typeof window&&(a.novalidate=""),t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:a},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:g},provide:function(){var t;return u(t={},_,this.state),u(t,$,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},a=this.state,s={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(a));delete e.$submittedState,Object.keys(e).forEach(function(a){t.$set(t.state.$submittedState,a,e[a])})},_addControl:function(s){e[s.$name]=s,t.$set(a,s.$name,s)},_removeControl:function(a){delete e[a.$name],t.$delete(t.state,a.$name),t.$delete(t.state.$error,a.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){a.$submitted=!1,a.$pending=!1,a.$submittedState={},Object.keys(e).forEach(function(t){var a=e[t];a._hasFocused=!1,a._setUntouched(),a._setPristine(),a.$submitted=!1,a.$pending=!1})}};Object.keys(s).forEach(function(e){t.$set(t.state,e,s[e])}),this.$watch("state",function(){var s=!1,o=!0,n=!1,i=!1,r=!1;Object.keys(e).forEach(function(l){var u=e[l];u.$submitted=a.$submitted,u.$dirty&&(s=!0),u.$touched&&(n=!0),u.$focused&&(i=!0),u.$pending&&(r=!0),u.$valid?t.$delete(a.$error,u.$name):(o=!1,t.$set(a.$error,u.$name,u))}),a.$dirty=s,a.$pristine=!s,a.$touched=n,a.$untouched=!n,a.$focused=i,a.$valid=o,a.$invalid=!o,a.$pending=r},{deep:!0,immediate:!0})}},computed:{className:function(){return c(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},E="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var N,V=(function(t){(function(){var e={}.hasOwnProperty,a=[].slice;t.exports=function(t,s){var o,n,i,r;for(o in n=[],r=[],s)e.call(s,o)&&(i=s[o],"this"!==o&&(n.push(o),r.push(i)));return Function.apply(null,a.call(n).concat(["return eval("+JSON.stringify(t)+")"])).apply(s.this,r)}}).call(E)}(N={exports:{}},N.exports),N.exports);function L(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return L(t[e].children)}}var D={inject:{vueFormConfig:g,vueFormState:_,vueFormParentForm:$},render:function(t){var e=this,a=[],s=this.formstate[this.fieldname];if(s&&s.$error&&this.isShown&&(Object.keys(s.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var o=e.$slots[t]||e.$scopedSlots[t](s);if(e.autoLabel){var n=L(o);n&&(n.data=n.data||{},n.data.attrs=n.data.attrs||{},n.data.attrs.for=s._id)}a.push(o)}}),!a.length&&s.$valid&&(this.$slots.default||this.$scopedSlots.default))){var o=this.$slots.default||this.$scopedSlots.default(s);if(this.autoLabel){var n=L(o);n&&(n.data=n.data||{},n.data.attrs=n.data.attrs||{},n.data.attrs.for=s._id)}a.push(o)}return t(this.tag||this.vueFormConfig.messagesTag,a)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||V(e,t)}}},A={render:function(t){var e=this,a=m(this.$slots.default,this.vueFormConfig),s=a.vModel,o={for:null};if(s.length){if(this.name=v(s[0]),a.messages&&this.$nextTick(function(){var t=a.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var n=s[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=n,s[0].data.attrs.id=n,a.label?(a.label.data=a.label.data||{},a.label.data.attrs=a.label.data.attrs||{},a.label.data.attrs.for=n):"label"===this.tag&&(o.for=n)}s.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:o},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:g,vueFormState:_,vueFormParentForm:$},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,a){return e[t.invalid+"-"+h(a)]=!0,e},c(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(a,s){for(var o,n=void 0,i=function(t,e){s&&Object.keys(s).filter(function(t){return s[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),n=[],Object.keys(a).filter(function(t){return a[t]}).forEach(function(t){n.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},r=0;o=e[r++];)i(0,o);t.fieldstate._className=n},{deep:!0,immediate:!0}),this.$watch("name",function(e,a){t.formstate._removeControl(t.fieldstate),t.fieldstate.$name=e,t.formstate._addControl(t.fieldstate)})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,a=[],s=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},$attrs:{},_className:null,_id:"vf"+b(),_setValidatorValidity:function(t,a){a?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var o=this;t?s=t:t=s,this.$pending=!0;var n=!0,i=f(t.data);i;var r={promises:[],names:[]};a.push(r);var l=t.data.attrs||{},u=t.componentInstance;u&&u._vfValidationData_&&(l=k({},l,u._vfValidationData_));var d=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(a){if((""===i||void 0===i||null===i)&&"required"!==a)return o._setValidatorValidity(a,!0),void!0;var s=void 0!==l[a]?l[a]:d[a],u="function"==typeof o._validators[a];if(!u||null!==s&&void 0!==s||o._validators[a]._allowNulls){s&&(o.$attrs[a]=s);var c=u?o._validators[a](i,s,t):e.custom[a];"boolean"==typeof c?c?o._setValidatorValidity(a,!0):(n=!1,o._setValidatorValidity(a,!1)):(r.promises.push(c),r.names.push(a),e.vueFormParentForm.promises.push(c))}}),r.promises.length?e.vueFormConfig.Promise.all(r.promises).then(function(t){r===a[a.length-1]&&(a=[],t.forEach(function(t,e){var a=r.names[e];t?o._setValidatorValidity(a,!0):(n=!1,o._setValidatorValidity(a,!1))}),o._setValidity(n),o.$pending=!1)}):(this._setValidity(n),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,a){var s,o,n,i;a&&e&&(s=e,o=a,n="",i="",Object.keys(s).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return n+=s[t]}),Object.keys(o).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return i+=o[t]}),n!==i&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},M={inject:{vueFormConfig:g},render:function(t){var e=m(this.$slots.default,this.vueFormConfig),a=e.vModel,s={for:null};if(a.length&&this.autoLabel){var o=a[0].data.attrs&&a[0].data.attrs.id||"vf"+b();a[0].data.attrs.id=o,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=o):"label"===this.tag&&(s.for=o)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:s},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},T={};function q(t,e,a){Object.keys(t).forEach(function(s){var o="type"===s?t[s].toLowerCase():s.toLowerCase();e[o]&&!a[o]&&(a[o]=e[o])})}var z={name:"vue-form-validator",bind:function(t,e,a){var s=e.value.fieldstate,o=e.value.config.validators,n=a.data.attrs||{};if(v(a)){var i,r,l,u;n.debounce&&(T[s._id]=(i=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},r=n.debounce,function(){var t=this,e=arguments,a=l&&!u;clearTimeout(u),u=setTimeout(function(){u=null,l||i.apply(t,e)},r),a&&i.apply(t,e)})),q(n,o,s._validators),a.componentOptions&&a.componentOptions.propsData&&q(a.componentOptions.propsData,o,s._validators),s._validate(a),t.addEventListener("blur",function(){s._setFocused(!1)},!1),t.addEventListener("focus",function(){s._setFocused(!0)},!1);var d=a.componentInstance;d&&(d.$on("blur",function(){s._setFocused(!1)}),d.$on("focus",function(){s._setFocused(!0)}),d.$once("vf:addFocusListeners",function(){t.addEventListener("focusout",function(){s._setFocused(!1)},!1),t.addEventListener("focusin",function(){s._setFocused(!0)},!1)}),d.$on("vf:validate",function(t){d._vfValidationData_||q(t,o,s._validators),d._vfValidationData_=t,s._validate(d.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,a,s){var o=function(t,e,a){var s=!1,o=t.data.attrs||{},n=e.data.attrs||{},i={};if(f(t.data)!==f(e.data)&&(i.vModel=!0,s=!0),Object.keys(a).forEach(function(t){o[t]!==n[t]&&(i[t]=!0,s=!0)}),t.componentOptions&&t.componentOptions.propsData){var r=t.componentOptions.propsData,l=e.componentOptions.propsData;Object.keys(a).forEach(function(t){r[t]!==l[t]&&(i[t]=!0,s=!0)})}if(s)return i}(a,s,e.value.config.validators),n=e.value.fieldstate,i=a.data.attrs||{},r=a.componentInstance;r&&r._vfValidationData_&&(i=k({},i,r[r._vfValidationData_])),-1===a.elm.className.indexOf(n._className[0])&&(a.elm.className=a.elm.className+" "+n._className.join(" ")),o&&(o.vModel?i.debounce?(n.$pending=!0,T[n._id](n,a)):(n._hasFocused&&n._setDirty(),n._validate(a)):n._validate(a))}};function R(t){var e,a=k(!0,{},i,t);this.provide=function(){return u({},g,a)},this.components=(u(e={},a.formComponent,P),u(e,a.messagesComponent,D),u(e,a.validateComponent,A),u(e,a.fieldComponent,M),e),this.directives={vueFormValidator:z}}var U=function(t){function e(){return r(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,R),l(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return R.call(U),U.options=new U,U},t.exports=a()}).call(e,a(25))},570:function(t,e,a){"use strict";e.a={validators:{checkbox:function(t,e,a){return t},sameas:function(t,e,a){return t==e}}}},835:function(t,e){t.exports="/vuejs-laravel/public/images/logo_black.png?117d588be583d4d6e207df3054b95a99"}});