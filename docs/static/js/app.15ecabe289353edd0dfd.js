webpackJsonp([1],{"1LV8":function(t,e){},"6A3X":function(t,e){},"7Xql":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("Word Search Toolset")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"app"},n,!1,function(t){s("7Xql")},null,null).exports,a=s("/ocq"),i=s("mtWM"),l=s.n(i);s("6A3X");var d={name:"WordSearch",components:{},data:function(){return{results:null,wordList:[],messages:[],phrase:"",soundsLike:"",startLetter:"",endLetter:"",showSpinner:!1}},methods:{addWord:function(t){-1===this.wordList.indexOf(t)?(this.wordList.push(t),console.log("Added "+t+" to wordList.")):console.log("Word is already on wordlist.")},removeWord:function(t){this.wordList.splice(this.wordList.indexOf(t),1)},findWords:function(){var t=this;this.results=null,l.a.get("https://api.datamuse.com/words",{params:{ml:this.phrase,sl:this.soundsLike,sp:this.startLetter+"*"+this.endLetter}}).then(function(e){t.results=e.data}).catch(function(t){})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"messages"}),t._v(" "),s("div",{staticClass:"word-search"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.findWords(e)}}},[s("p",[s("label",[t._v("Find synonyms for "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phrase,expression:"phrase"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:t.phrase},on:{input:function(e){e.target.composing||(t.phrase=e.target.value)}}}),t._v(" that:")])]),t._v(" "),s("ul",[s("li",[s("label",[t._v("sounds like "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.soundsLike,expression:"soundsLike"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:t.soundsLike},on:{input:function(e){e.target.composing||(t.soundsLike=e.target.value)}}})])]),t._v(" "),s("li",[s("label",[t._v("start with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.startLetter,expression:"startLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:t.startLetter},on:{input:function(e){e.target.composing||(t.startLetter=e.target.value)}}})])]),t._v(" "),s("li",[s("label",[t._v("end with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.endLetter,expression:"endLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:t.endLetter},on:{input:function(e){e.target.composing||(t.endLetter=e.target.value)}}})])])]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"word-list-container"},[s("h2",[t._v("Word List")]),t._v(" "),s("ul",{staticClass:"word-list"},t._l(t.wordList,function(e){return s("li",[t._v(t._s(e)+" "),s("button",{staticClass:"remove-word",on:{click:function(s){t.removeWord(e)}}},[t._v("x")])])}))]),t._v(" "),s("div",{staticClass:"results-container"},[t.results&&t.results.length>0?s("h2",[t._v(t._s(t.results.length)+" Words Found")]):t._e(),t._v(" "),t.results&&t.results.length>0?s("ul",{staticClass:"results"},t._l(t.results,function(e){return s("li",{staticClass:"item"},[s("p",{staticClass:"result-word"},[t._v(t._s(e.word))]),t._v(" "),s("p",[s("button",{staticClass:"add-word",on:{click:function(s){t.addWord(e.word)}}},[t._v("Add to WordList")])])])})):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("button",{attrs:{type:"submit"}},[this._v("Search")])])}]};var c=s("VU/8")(d,u,!1,function(t){s("1LV8")},"data-v-59a42a0f",null).exports;r.a.use(a.a);var p=new a.a({routes:[{path:"/",name:"WordSearch",component:c}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:p,template:"<App/>",components:{App:o}})}},["NHnr"]);
//# sourceMappingURL=app.15ecabe289353edd0dfd.js.map