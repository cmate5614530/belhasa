webpackJsonp([33],{1170:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(46);e.n(a);s.default={name:"cards",components:{},data:function(){return{tabIndex:null,tabs:[],tabCounter:0}},methods:{closeTab:function(t){for(var s=0;s<this.tabs.length;s++)this.tabs[s]===t&&this.tabs.splice(s,1)},newTab:function(){this.tabCounter<4&&this.tabs.push(this.tabCounter++)}}}},1171:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"mb-1 mt-4 pt-1 bg-primary",attrs:{variant:"primary"}},[a("h5",{staticClass:"text-white"},[t._v(" Card Primary")])]),t._v(" "),a("b-card",{staticClass:"mb-1 pt-2 bg-danger",attrs:{variant:"danger"}},[a("h5",{staticClass:"text-white"},[t._v("Card Danger")])]),t._v(" "),a("b-card",{staticClass:"mb-1 pt-2 bg-warning",attrs:{variant:"warning"}},[a("h5",{staticClass:"text-white"},[t._v("Card Warning")])]),t._v(" "),a("b-card",{staticClass:"mb-5 pt-2 bg-success",attrs:{variant:"success"}},[a("h5",{staticClass:"text-white"},[t._v("Card Success")])])],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:" bg-success-card mb-3 mt-4",attrs:{header:"Card Header & Footer","header-tag":"h4",title:"Main Title","sub-title":"Card subtitle","show-footer":""}},[a("p",[t._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                ")]),t._v(" "),a("p",{staticClass:"mt-2",attrs:{slot:"footer"},slot:"footer"},[t._v("\n                    Last updated 3 mins ago\n                ")])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("b-card",{staticClass:"bg-info-card",attrs:{header:"Card Alignments","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("b-card",{staticClass:"mb-2 mt-2 bg-primary-card",attrs:{header:"Card Left","header-tag":"h4",align:"left"}},[a("p",[t._v("\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                            ")])])],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("b-card",{staticClass:"mb-2 mt-2 bg-danger-card",attrs:{header:"Card center","header-tag":"h4",align:"center"}},[a("p",[t._v("\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum.\n                            ")])])],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("b-card",{staticClass:"mb-2 mt-2 bg-warning-card",attrs:{header:"Card Right","header-tag":"h4",align:"right"}},[a("p",[t._v("\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum.\n                            ")])])],1)])])],1)]),t._v(" "),a("b-card",{staticClass:"bg-danger-card",attrs:{"header-tag":"h4",header:"Cards with Different Tabs"}},[a("div",{staticClass:"row "},[a("div",{staticClass:"col-lg-12"},[a("b-tabs",[a("b-tab",{attrs:{title:"First tab",active:""}},[a("p",{staticClass:"mt-4"},[t._v(" I'm the first fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        ")])]),t._v(" "),a("b-tab",{attrs:{title:"Second tab"}},[a("p",{staticClass:"mt-4"},[t._v(" I'm the Second fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        ")])]),t._v(" "),a("b-tab",{attrs:{title:"Third tab"}},[a("p",{staticClass:"mt-4"},[t._v(" I'm the Third fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        ")])])],1)],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("b-card",{staticClass:"mb-5 mt-2 bg-info-card",attrs:{header:"Cards With Content","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"mb-5 mt-4",attrs:{header:"Card Header","header-tag":"h4",title:"Main Title"}},[a("p",[t._v("\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                            ")])])],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"mb-3 mt-4",attrs:{title:"Main Title","show-footer":""}},[a("p",[t._v("\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                            ")]),t._v(" "),a("p",{staticClass:"mt-3",attrs:{slot:"footer"},slot:"footer"},[t._v("\n                    Last updated 3 mins ago\n               ")])])],1)])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"mb-5  bg-success-card",attrs:{"show-footer":"",header:"Card With image","header-tag":"h4"}},[a("img",{staticClass:"img-fluid ",attrs:{src:e(1172)}}),t._v(" "),a("p",{staticClass:"pt-3",attrs:{slot:"footer"},slot:"footer"},[t._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting\n                ")])])],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"mb-5 bg-info text-white",attrs:{header:"Card","header-tag":"h4",variant:"info",title:"Main Title"}},[a("p",{staticClass:"text-white"},[t._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                ")]),t._v(" "),a("p",{staticClass:"text-white"},[t._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                ")]),t._v(" "),a("p",{staticClass:"text-white"},[t._v("\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                ")])])],1)])],1)},staticRenderFns:[]}},1172:function(t,s){t.exports="/vuejs-laravel/public/images/headsset.jpg?245c36115c3940ba33b2dfb593d9a40c"},1523:function(t,s,e){var a=e(45)(e(1170),e(1171),!1,null,null,null);t.exports=a.exports}});