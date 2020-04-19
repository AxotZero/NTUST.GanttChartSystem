!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueEasyGantt=t():e.VueEasyGantt=t()}(this,function(){return webpackJsonpVueEasyGantt([1],{121:function(e,t,i){i(127);var a=i(1)(i(123),i(130),null,null);e.exports=a.exports},122:function(e,t,i){"use strict";var a=i(133),s=i.n(a),n=i(134),r=i.n(n),o=i(0),u=i.n(o),l={getMoment:function(e){var t=l[e];return t||u()(e)}},d=function(){function e(t,i){s()(this,e),this.sdate=i,this.items0=t,this.total=t.length,this.dates=this._getDates(),this._parse(),this.items=this._groupTasks()}return r()(e,[{key:"_parse",value:function(){var e=this,t=this.items0;t.forEach(function(t,i){var a=l.getMoment(t.sdate),s=a.isoWeekday(),n=Math.min(7-s+1,t.duration);a.add(n,"days"),t.edate=a.format("YYYY-MM-DD"),t.duration=n,t.weekday=s,t.space=7-s-t.duration+1,t.canHasFollowingTasks=e.dates.includes(t.edate)}),this.items0=t.sort(function(e,t){return e.weekday-t.weekday})}},{key:"_getDates",value:function(){for(var e=l.getMoment(this.sdate),t=1,i=[];t<8;)i.push(e.isoWeekday(t).format("YYYY-MM-DD")),t++;return i}},{key:"_getNextDateOf",value:function(e){var t=this.dates.findIndex(function(t){return t===e});return t===this.dates.length-1?null:this.dates[t+1]}},{key:"_getFollowingTask",value:function(e,t,i,a){if(0===i||null===t)return a;var s=e.filter(function(e){return e.sdate===t&&e.duration<=i});s.sort(function(e,t){return t.duration-e.duration});var n=null,r=null;return s.length>0?(r=s[0],n=e.findIndex(function(e){return e._id===r._id}),e.splice(n,1),a.push(r),r.canHasFollowingTasks?this._getFollowingTask(e,r.edate,r.space,a):a):this._getFollowingTask(e,this._getNextDateOf(t),i-1,a)}},{key:"_groupTasks",value:function(){for(var e=this,t=this.items0.slice(),i=[];t.length;){(function(){var a=t.shift(),s={sdate:a.sdate};if(s[a.sdate]=a,!a.canHasFollowingTasks)return i.push(s),"continue";var n=[];e._getFollowingTask(t,a.edate,a.space,n),n.forEach(function(e,t){s[e.sdate]=e}),i.push(s)})()}return i}}]),e}();t.a=d},123:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(129),s=i.n(a),n=i(122);t.default={data:function(){return{dates:[],isLoading:!1}},props:{utasks:{type:Array,default:[]},sdate:String,spinner:{type:String,default:"default"}},computed:{egtasks:function(){var e=this,t=[];return this.utasks.forEach(function(i,a){var s=new n.a(i.tasks,e.sdate),r={};r.user=i,r.tasks=s.items,r.total=s.total,e.dates=s.dates,t.push(r)}),t}},components:{UserTasks:s.a},created:function(){this.isLoading=!0},updated:function(){this.isLoading=!1}}},124:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{task:{type:Object,required:!0},floorIndex:{type:Number,default:0}},computed:{classLength:function(){return"at-eg-len-"+this.task.duration},classFloor:function(){return"at-eg-floor-"+this.floorIndex}}}},125:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(128),s=i.n(a);t.default={props:{user:{type:Object,required:!0},dates:{type:Array,required:!0},tasks:{type:Array,required:!0},cls:{type:String}},computed:{tallSize:function(){return this.tasks.length}},components:{TaskItem:s.a}}},127:function(e,t){},128:function(e,t,i){var a=i(1)(i(124),i(131),null,null);e.exports=a.exports},129:function(e,t,i){var a=i(1)(i(125),i(132),null,null);e.exports=a.exports},130:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"at-eg"},[i("div",{staticClass:"at-eg-hd"},[i("table",{staticClass:"at-eg-tb",attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[i("thead",[i("tr",[i("th",{staticClass:"at-eg-cell-first"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"at-eg-spinner"},[e._t("spinner",[i("i",{class:"at-eg-spinner-"+e.spinner})])],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"at-eg-cell-first-inner"},[e._v("#")])]),e._v(" "),e._l(e.dates,function(t){return i("th",[e._v("\n            "+e._s(t)+"\n          ")])})],2)])])]),e._v(" "),i("div",{staticClass:"at-eg-bd"},[i("table",{staticClass:"at-eg-tb at-eg-tasks"},[i("tbody",[e._l(e.egtasks,function(t,a){return[i("user-tasks",{attrs:{user:t.user,tasks:t.tasks,dates:e.dates,cls:a%2==0?"at-eg-odd":""}})]})],2)])])])},staticRenderFns:[]}},131:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"at-eg-task",class:[e.classLength,e.classFloor]},[i("div",{staticClass:"at-eg-task-inner"},[e._v("\n  "+e._s(e.task.title)+"\n  ")])])},staticRenderFns:[]}},132:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",{staticClass:"at-eg-row",class:e.cls},[i("td",{staticClass:"at-eg-cell-a"},[i("div",{staticClass:"at-eg-user"},[i("div",{staticClass:"at-eg-user-inner"},[i("img",{staticClass:"at-eg-avatar",attrs:{src:e.user.avatar,alt:e.user.name}}),e._v(" "),i("p",{staticClass:"at-eg-name"},[e._v(e._s(e.user.name))])])])]),e._v(" "),e._l(e.dates,function(t,a){return i("td",{staticClass:"at-eg-cell-b",class:"at-eg-cell-"+a,attrs:{"data-date":t}},[i("div",{staticClass:"at-eg-tgroup",class:"at-eg-tall-"+e.tallSize},[e._l(e.tasks,function(a,s){return[(e.task=a[t])?i("task-item",{attrs:{task:e.task,"floor-index":s}}):e._e()]})],2)])})],2)},staticRenderFns:[]}},139:function(e,t,i){function a(e){return i(s(e))}function s(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var n={"./af":3,"./af.js":3,"./ar":10,"./ar-dz":4,"./ar-dz.js":4,"./ar-kw":5,"./ar-kw.js":5,"./ar-ly":6,"./ar-ly.js":6,"./ar-ma":7,"./ar-ma.js":7,"./ar-sa":8,"./ar-sa.js":8,"./ar-tn":9,"./ar-tn.js":9,"./ar.js":10,"./az":11,"./az.js":11,"./be":12,"./be.js":12,"./bg":13,"./bg.js":13,"./bm":14,"./bm.js":14,"./bn":15,"./bn.js":15,"./bo":16,"./bo.js":16,"./br":17,"./br.js":17,"./bs":18,"./bs.js":18,"./ca":19,"./ca.js":19,"./cs":20,"./cs.js":20,"./cv":21,"./cv.js":21,"./cy":22,"./cy.js":22,"./da":23,"./da.js":23,"./de":26,"./de-at":24,"./de-at.js":24,"./de-ch":25,"./de-ch.js":25,"./de.js":26,"./dv":27,"./dv.js":27,"./el":28,"./el.js":28,"./en-au":29,"./en-au.js":29,"./en-ca":30,"./en-ca.js":30,"./en-gb":31,"./en-gb.js":31,"./en-ie":32,"./en-ie.js":32,"./en-nz":33,"./en-nz.js":33,"./eo":34,"./eo.js":34,"./es":37,"./es-do":35,"./es-do.js":35,"./es-us":36,"./es-us.js":36,"./es.js":37,"./et":38,"./et.js":38,"./eu":39,"./eu.js":39,"./fa":40,"./fa.js":40,"./fi":41,"./fi.js":41,"./fo":42,"./fo.js":42,"./fr":45,"./fr-ca":43,"./fr-ca.js":43,"./fr-ch":44,"./fr-ch.js":44,"./fr.js":45,"./fy":46,"./fy.js":46,"./gd":47,"./gd.js":47,"./gl":48,"./gl.js":48,"./gom-latn":49,"./gom-latn.js":49,"./gu":50,"./gu.js":50,"./he":51,"./he.js":51,"./hi":52,"./hi.js":52,"./hr":53,"./hr.js":53,"./hu":54,"./hu.js":54,"./hy-am":55,"./hy-am.js":55,"./id":56,"./id.js":56,"./is":57,"./is.js":57,"./it":58,"./it.js":58,"./ja":59,"./ja.js":59,"./jv":60,"./jv.js":60,"./ka":61,"./ka.js":61,"./kk":62,"./kk.js":62,"./km":63,"./km.js":63,"./kn":64,"./kn.js":64,"./ko":65,"./ko.js":65,"./ky":66,"./ky.js":66,"./lb":67,"./lb.js":67,"./lo":68,"./lo.js":68,"./lt":69,"./lt.js":69,"./lv":70,"./lv.js":70,"./me":71,"./me.js":71,"./mi":72,"./mi.js":72,"./mk":73,"./mk.js":73,"./ml":74,"./ml.js":74,"./mr":75,"./mr.js":75,"./ms":77,"./ms-my":76,"./ms-my.js":76,"./ms.js":77,"./my":78,"./my.js":78,"./nb":79,"./nb.js":79,"./ne":80,"./ne.js":80,"./nl":82,"./nl-be":81,"./nl-be.js":81,"./nl.js":82,"./nn":83,"./nn.js":83,"./pa-in":84,"./pa-in.js":84,"./pl":85,"./pl.js":85,"./pt":87,"./pt-br":86,"./pt-br.js":86,"./pt.js":87,"./ro":88,"./ro.js":88,"./ru":89,"./ru.js":89,"./sd":90,"./sd.js":90,"./se":91,"./se.js":91,"./si":92,"./si.js":92,"./sk":93,"./sk.js":93,"./sl":94,"./sl.js":94,"./sq":95,"./sq.js":95,"./sr":97,"./sr-cyrl":96,"./sr-cyrl.js":96,"./sr.js":97,"./ss":98,"./ss.js":98,"./sv":99,"./sv.js":99,"./sw":100,"./sw.js":100,"./ta":101,"./ta.js":101,"./te":102,"./te.js":102,"./tet":103,"./tet.js":103,"./th":104,"./th.js":104,"./tl-ph":105,"./tl-ph.js":105,"./tlh":106,"./tlh.js":106,"./tr":107,"./tr.js":107,"./tzl":108,"./tzl.js":108,"./tzm":110,"./tzm-latn":109,"./tzm-latn.js":109,"./tzm.js":110,"./uk":111,"./uk.js":111,"./ur":112,"./ur.js":112,"./uz":114,"./uz-latn":113,"./uz-latn.js":113,"./uz.js":114,"./vi":115,"./vi.js":115,"./x-pseudo":116,"./x-pseudo.js":116,"./yo":117,"./yo.js":117,"./zh-cn":118,"./zh-cn.js":118,"./zh-hk":119,"./zh-hk.js":119,"./zh-tw":120,"./zh-tw.js":120};a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=139},141:function(e,t){e.exports={name:"vue-easy-gantt",version:"1.0.1",description:"A simple Vue.js gantt chart plugin for presenting weekly tasks.",main:"dist/vue-easy-gantt.js",files:["dist","src"],author:{name:"mamboer",email:"mamboer@gmail.com",url:"https://aotu.io"},scripts:{dev:"node build/dev-server.js",build:"node build/build.js",unit:"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js",unit1:"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",test:"npm run unit",lint:"eslint --ext .js,.vue src test/unit/specs",release:"bash ./release.sh",commit:"git-cz",changelog:"node build/changelog.js",deploy:"sh ./.travis/deploy.sh",clean:"rm -rf dist"},keywords:["vue","vue components","gantt","gantt chart","vue gantt"],repository:{type:"git",url:"git+https://github.com/mamboer/vue-easy-gantt.git"},bugs:{url:"https://github.com/mamboer/vue-easy-gantt/issues"},homepage:"https://github.com/mamboer/vue-easy-gantt",devDependencies:{autoprefixer:"^6.7.7","babel-core":"^6.24.0","babel-eslint":"^7.2.1","babel-loader":"^6.4.1","babel-plugin-istanbul":"^4.1.1","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.24.0",chai:"^3.5.0",chalk:"^1.1.3",commitizen:"^2.9.6","connect-history-api-fallback":"^1.3.0","conventional-changelog":"^1.1.3","copy-webpack-plugin":"^4.0.1","cross-env":"^4.0.0","css-loader":"^0.28.0","cz-conventional-changelog":"^2.0.0",eslint:"^3.19.0","eslint-config-standard":"^7.1.0","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^2.1.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^2.1.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.1.0","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","json-loader":"^0.5.7",karma:"^1.5.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.1.1","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.4","karma-sinon-chai":"^1.2.4","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"^2.0.3",lolex:"^1.6.0",mocha:"^3.2.0",opn:"^4.0.2","optimize-css-assets-webpack-plugin":"^1.3.0",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.14","pre-commit":"^1.2.2",rimraf:"^2.6.1",semver:"^5.3.0",sinon:"^2.1.0","sinon-chai":"^2.9.0",stylus:"^0.54.5","stylus-loader":"^3.0.1","url-loader":"^0.5.8","vue-loader":"^11.3.4","vue-resource":"^1.2.1","vue-style-loader":"^2.0.5","vue-template-compiler":"^2.2.6",webpack:"^2.3.3","webpack-bundle-analyzer":"^2.3.1","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},license:"MIT","pre-commit":["lint"],browserslist:["> 1%","last 2 versions","not ie <= 8"],engines:{node:">= 4.0.0",npm:">= 3.0.0"},dependencies:{moment:"^2.18.1",vue:"^2.2.6"}}},142:function(e,t,i){i(163);var a=i(1)(i(147),i(175),null,null);e.exports=a.exports},145:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(144),s=i(143),n=i(142),r=i.n(n);a.a.config.productionTip=!1,a.a.use(s.a),new a.a({el:"#app",template:"<App/>",components:{App:r.a}})},147:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(173),s=i.n(a),n=i(174),r=i.n(n),o=i(172),u=i.n(o);t.default={name:"app",components:{Hello:s.a,Demo:u.a,Love:r.a}}},148:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),s=(i.n(a),i(121)),n=i.n(s),r=i(167),o=i.n(r);t.default={data:function(){return{sdate:null,utasks:[]}},name:"demo",components:{EasyGantt:n.a},mounted:function(){var e=this;this.$http.get("http://beta.json-generator.com/api/json/get/NJDAlJKhf").then(function(t){e.utasks=t.body.items,e.sdate=t.body.sdate},function(t){e.utasks=o.a.items,e.sdate=o.a.sdate})}}},149:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(141),s=i.n(a);t.default={name:"hello",data:function(){return{version:s.a.version,msg:s.a.description,name:s.a.name}}}},150:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(141),s=i.n(a);t.default={name:"love",data:function(){return{version:s.a.version,author:s.a.author,homepage:s.a.homepage}}}},163:function(e,t){},164:function(e,t){},165:function(e,t){},166:function(e,t){},167:function(e,t){e.exports={items:[{tasks:[{tags:["esse","ullamco","fugiat"],duration:1,sdate:"2017-04-05",desc:"Nulla aliqua ipsum nisi in aliquip dolor in esse deserunt laborum sint. Do consequat ad elit reprehenderit. Consequat sint eu aliquip ad aliquip ut in amet deserunt minim excepteur eiusmod reprehenderit eiusmod.",title:"Sint est occaecat mollit exercitation adipisicing sit ut ex.",isActive:!1,guid:"73a5bc0f-f7b4-47e4-a963-8729456f90a3",index:0,_id:"58e20c3fb4d06792ff8696f3"},{tags:["qui"],duration:6,sdate:"2017-04-04",desc:"Irure ex enim dolor qui Lorem do dolore. Veniam ea nostrud mollit cillum et nisi. Excepteur ad anim culpa laborum mollit reprehenderit consequat magna tempor labore veniam ad dolore. Laboris ullamco ut dolor aliquip enim ex amet aliquip dolor consequat reprehenderit. Occaecat nostrud eu in mollit ad cillum nostrud eu. Proident pariatur occaecat duis et consequat pariatur in mollit qui officia. Laboris in aute velit est.",title:"Nulla consequat do ipsum esse nisi.",isActive:!0,guid:"041fec9a-c855-49e0-8fe7-81d6d1a358e1",index:1,_id:"58e20c3fb36c1d71d2ac703a"},{tags:["exercitation","qui","consectetur"],duration:6,sdate:"2017-04-08",desc:"Sunt eiusmod minim minim adipisicing nisi qui. Reprehenderit enim voluptate deserunt adipisicing do culpa minim commodo occaecat officia laboris non nisi non. Veniam sit ullamco fugiat esse. Et exercitation velit dolor deserunt velit officia officia sit ullamco commodo magna. Aute amet excepteur sint elit eu ex. Deserunt aliqua ex proident quis eu aliquip tempor in duis. Officia tempor id enim laboris culpa duis dolore dolor id sunt.",title:"Lorem eu ad ex et minim duis deserunt laboris qui elit proident deserunt adipisicing.",isActive:!0,guid:"0c326bf2-bf06-4354-9dcd-dac843cfe663",index:2,_id:"58e20c3f5c2aca7f20865a95"},{tags:["laboris","sunt","dolor"],duration:5,sdate:"2017-04-08",desc:"Sit fugiat eu aliqua laboris quis qui amet dolore pariatur. Quis tempor commodo ullamco nulla. Anim mollit ipsum sunt ex id eiusmod. Commodo magna nostrud do tempor ut elit ullamco laboris ea incididunt nisi proident elit. Velit elit ad exercitation ea aliqua reprehenderit officia culpa aliquip mollit deserunt.",title:"Officia et laboris cupidatat eu officia occaecat commodo aliquip ex do occaecat.",isActive:!0,guid:"d6d6eee9-e3cf-4de5-b7ee-ab3b7ec76538",index:3,_id:"58e20c3f6a73c0e1738c44ab"}],name:"Hensley Morales",age:30,avatar:"https://avatars0.githubusercontent.com/u/9457798?v=3&s=68",isActive:!0,guid:"89d44348-6627-40ac-abde-3d447ab90556",index:0,_id:"58e20c3f43b5f9dcda48f707"},{tasks:[{tags:["veniam"],duration:6,sdate:"2017-04-07",desc:"Elit nostrud ipsum ullamco consectetur reprehenderit aliqua proident id adipisicing. Sunt ut esse excepteur esse ea culpa esse officia amet culpa enim deserunt. Cillum incididunt nostrud velit consequat occaecat sunt culpa esse elit pariatur ad magna. Dolore velit voluptate duis labore est deserunt nostrud incididunt. Elit consequat nostrud anim laborum tempor ullamco consectetur voluptate cupidatat ullamco aute elit tempor consequat. Ad mollit elit laborum consequat. Enim anim deserunt eu enim Lorem excepteur dolor deserunt aliquip est Lorem consequat adipisicing eiusmod.",title:"Laborum quis et exercitation minim duis quis consectetur nulla id in Lorem ad consectetur nulla.",isActive:!0,guid:"cb8da824-0b66-4555-8860-7dfdce383b35",index:0,_id:"58e20c3f03ba47494ca531bf"},{tags:["occaecat"],duration:1,sdate:"2017-04-06",desc:"Irure excepteur laboris anim tempor adipisicing culpa occaecat occaecat voluptate. Velit cillum ut nisi laboris non laboris enim aliqua ex cillum qui velit exercitation ex. Fugiat nulla laborum occaecat velit sint sunt adipisicing officia anim ea duis ex commodo.",title:"Dolore adipisicing culpa deserunt nisi elit proident amet labore in elit voluptate pariatur.",isActive:!1,guid:"d4b9abc2-dac1-4c71-b16f-191d5c1db2c6",index:1,_id:"58e20c3f66121feb933f8ff2"},{tags:["culpa","incididunt","aliquip"],duration:3,sdate:"2017-04-07",desc:"Laboris ea do veniam aute dolor nisi nostrud eu velit aute elit commodo proident quis. Dolor veniam est minim consectetur laboris sint sit elit id eu sunt. Nostrud laborum cillum eu sint enim duis. Culpa ipsum Lorem ullamco in anim ea laboris sunt aliqua Lorem. Sit ut nostrud dolor elit dolor tempor et commodo sint. Sunt cupidatat Lorem sint do esse consequat Lorem ea et non labore proident magna et.",title:"Cillum labore ipsum est non mollit est qui deserunt elit magna cillum.",isActive:!1,guid:"bfef9975-488a-4a40-b1d5-37a4ab8ffd44",index:2,_id:"58e20c3f0c081528023a1ecc"}],name:"Patterson Caldwell",age:33,avatar:"https://avatars0.githubusercontent.com/u/85879?v=3&s=68",isActive:!0,guid:"aa2af04b-9946-4d01-9ea1-9ae4f4e92286",index:1,_id:"58e20c3f21ded9b687f6fdc6"},{tasks:[{tags:["elit","voluptate","minim"],duration:4,sdate:"2017-04-06",desc:"Dolor ea mollit ullamco nisi. Laborum mollit velit cupidatat aliqua sit tempor fugiat amet tempor. Deserunt aute minim exercitation culpa ea culpa Lorem Lorem dolore. Adipisicing commodo enim ea exercitation elit esse amet est incididunt exercitation.",title:"Fugiat excepteur proident consectetur fugiat ea dolor in sint ullamco magna minim sit ex consequat.",isActive:!0,guid:"114df882-b8dc-4776-9e24-7941757b7a5d",index:0,_id:"58e20c3fffd78fff90d4c7a9"},{tags:["deserunt","aliqua","nisi"],duration:2,sdate:"2017-04-07",desc:"Ullamco esse incididunt sint esse sit consequat. Ad sint nulla cillum voluptate magna id pariatur nisi non minim ullamco excepteur. Sint magna excepteur tempor qui esse sit mollit reprehenderit enim ex duis. Est ex elit occaecat eu minim tempor duis pariatur aliqua.",title:"Nostrud duis aliquip dolore ut est duis aute nostrud anim sit.",isActive:!0,guid:"f1646ab5-2cbd-476a-b88f-5bc4bcb125cf",index:1,_id:"58e20c3f6d283a7899bb5009"},{tags:["consequat"],duration:4,sdate:"2017-04-09",desc:"Reprehenderit aute qui enim et aute do ut tempor pariatur consequat quis eiusmod. Velit cupidatat adipisicing voluptate eu quis magna et. Consectetur veniam pariatur dolore magna ex ipsum culpa dolor nostrud ea proident. Dolore id aliqua ad tempor pariatur non aute reprehenderit laboris anim esse nisi. Culpa magna aliqua non sunt fugiat quis et veniam amet incididunt consequat proident.",title:"Anim deserunt culpa laboris laboris enim qui labore irure id culpa.",isActive:!0,guid:"b3c4cd98-9ada-4387-8bc9-e04c52b79d14",index:2,_id:"58e20c3f23fb153fb46fb1bb"}],name:"Bethany Bush",age:26,avatar:"https://avatars0.githubusercontent.com/u/1324016?v=3&s=68",isActive:!1,guid:"6ebf37ca-c569-4742-88fa-87e3646b798e",index:2,_id:"58e20c3f433691fde06357a9"},{tasks:[{tags:["laboris","consectetur","quis"],duration:6,sdate:"2017-04-04",desc:"Aliqua id enim qui sunt voluptate quis officia consectetur in proident fugiat sunt. Laboris laborum dolore nulla laborum aliqua esse velit esse consequat do id dolore magna eu. Deserunt commodo sit duis nisi pariatur pariatur eiusmod in exercitation cillum occaecat ex duis. Esse nulla elit sint eiusmod ut pariatur occaecat sunt aute velit ipsum. Voluptate sint laboris mollit in proident et duis nisi.",title:"Ea elit aute anim irure deserunt qui ad.",isActive:!1,guid:"eaf0a419-5a5f-45d8-9d91-2744804ae2b1",index:0,_id:"58e20c3f41c6e93b6ecfd0be"},{tags:["amet","fugiat"],duration:2,sdate:"2017-04-04",desc:"Ullamco reprehenderit mollit veniam laborum occaecat minim est sint nostrud labore. Enim nulla non ad amet enim eu amet magna quis sunt est. Nisi elit consectetur dolor voluptate adipisicing laborum amet reprehenderit consectetur. Non commodo et nostrud ut tempor commodo Lorem nulla incididunt aute consectetur. Veniam sint dolore proident proident eiusmod reprehenderit ex esse aute dolore ut dolore reprehenderit. Irure excepteur ipsum nulla commodo nisi. Enim fugiat mollit cillum irure aliquip in non dolor.",title:"Exercitation amet velit mollit enim aute non labore.",isActive:!0,guid:"93d7e7fa-19dc-4da9-b3d2-7d62fe137cf3",index:1,_id:"58e20c3f2cee2246095b483e"},{tags:["veniam","proident","dolor"],duration:2,sdate:"2017-04-04",desc:"Esse irure dolore irure consequat voluptate proident nulla elit mollit minim laborum. Elit dolor labore excepteur qui duis enim dolore duis ullamco et. Ex ullamco officia est nostrud proident ea ea ipsum.",title:"Culpa enim id sit est cupidatat eiusmod dolore anim officia nostrud nostrud.",isActive:!0,guid:"89e28a9a-eff0-4237-8099-fdca88188c56",index:2,_id:"58e20c3f916ba14120a5f0a9"},{tags:["excepteur","excepteur"],duration:6,sdate:"2017-04-07",desc:"Excepteur et qui quis tempor mollit dolore laboris cillum qui. Exercitation ipsum id anim aliqua et. Fugiat dolor magna aute incididunt reprehenderit. Non nostrud minim Lorem aliquip laboris excepteur. Non irure ad nostrud ex aute adipisicing occaecat culpa proident. Consequat ex nisi ad duis laboris nulla adipisicing officia laboris laborum ea laboris. Consequat mollit id in esse est.",title:"Anim culpa eu fugiat cillum ut irure pariatur non irure sit.",isActive:!0,guid:"39efd7f6-f574-4706-8080-10f25b9903bd",index:3,_id:"58e20c3fb9963fb9270a897a"},{tags:["incididunt","minim"],duration:5,sdate:"2017-04-09",desc:"Aliqua et tempor sunt eiusmod dolor nostrud aliquip proident non. Enim anim aliquip cillum do ipsum incididunt nostrud anim reprehenderit. Id ullamco eiusmod aliquip officia elit eu sunt laborum voluptate. Amet dolore ex ea velit laboris do amet dolore quis ut sit. Mollit id dolor ipsum ea consectetur. Sunt dolor est sunt in adipisicing incididunt duis dolore veniam in eiusmod eiusmod laboris do. Sint amet ut in dolor est aliquip eiusmod sunt adipisicing ipsum ut sint.",title:"Veniam ut laborum labore nostrud in.",isActive:!0,guid:"fa8d4e0d-f4b0-40e1-b533-72343fa96449",index:4,_id:"58e20c3ff27e1ad6f956ab63"}],name:"Marion Herman",age:22,avatar:"https://avatars0.githubusercontent.com/u/85879?v=3&s=68",isActive:!0,guid:"6fee986d-2d40-408d-bf91-d1554942045f",index:3,_id:"58e20c3fc3b5410e365e92f7"}],sdate:"2017-04-03"}},171:function(e,t){e.exports="data:image/png;base64,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"},172:function(e,t,i){i(165);var a=i(1)(i(148),i(177),"data-v-2a4ac87c",null);e.exports=a.exports},173:function(e,t,i){i(164);var a=i(1)(i(149),i(176),"data-v-19ee76c2",null);e.exports=a.exports},174:function(e,t,i){i(166);var a=i(1)(i(150),i(178),"data-v-33c932c3",null);e.exports=a.exports},175:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app",attrs:{id:"app"}},[e._m(0),e._v(" "),i("hello"),e._v(" "),i("demo"),e._v(" "),i("love")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:i(171),alt:"Vue Easy Gantt"}})])}]}},176:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("h1",[e._v(e._s(e.name)+" - v"+e._s(e.version))]),e._v(" "),i("p",{staticClass:"desc"},[e._v(e._s(e.msg))]),e._v(" "),i("h2",[e._v("Essential Links")]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("a",{attrs:{href:"https://faso.me/vue-ease-gantt",target:"_blank"}},[e._v("Demo")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/mamboer/vue-easy-gantt",target:"_blank"}},[e._v("Github")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/mamboer/vue-easy-gantt/blob/master/README.md",target:"_blank"}},[e._v("Doc")])])])}]}},177:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo"},[i("easy-gantt",{ref:"easyGantt",attrs:{sdate:e.sdate,utasks:e.utasks}})],1)},staticRenderFns:[]}},178:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"made-with-love"},[e._v("\n  Made with\n  "),i("i",[e._v("♥")]),e._v(" by\n  "),i("a",{attrs:{target:"_blank",href:e.author.url}},[e._v(e._s(e.author.name))])])},staticRenderFns:[]}},181:function(e,t){}},[145])});
//# sourceMappingURL=demo.6bb8bf66b6b69a8752ff.js.map