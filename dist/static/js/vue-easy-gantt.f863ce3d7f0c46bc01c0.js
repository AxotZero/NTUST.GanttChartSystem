!function(s,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueEasyGantt=t():s.VueEasyGantt=t()}(this,function(){return webpackJsonpVueEasyGantt([2],{121:function(s,t,e){e(127);var a=e(1)(e(123),e(130),null,null);s.exports=a.exports},122:function(s,t,e){"use strict";var a=e(133),n=e.n(a),r=e(134),i=e.n(r),o=e(0),u=e.n(o),l={getMoment:function(s){var t=l[s];return t||u()(s)}},c=function(){function s(t,e){n()(this,s),this.sdate=e,this.items0=t,this.total=t.length,this.dates=this._getDates(),this._parse(),this.items=this._groupTasks()}return i()(s,[{key:"_parse",value:function(){var s=this,t=this.items0;t.forEach(function(t,e){var a=l.getMoment(t.sdate),n=a.isoWeekday(),r=Math.min(7-n+1,t.duration);a.add(r,"days"),t.edate=a.format("YYYY-MM-DD"),t.duration=r,t.weekday=n,t.space=7-n-t.duration+1,t.canHasFollowingTasks=s.dates.includes(t.edate)}),this.items0=t.sort(function(s,t){return s.weekday-t.weekday})}},{key:"_getDates",value:function(){for(var s=l.getMoment(this.sdate),t=1,e=[];t<8;)e.push(s.isoWeekday(t).format("YYYY-MM-DD")),t++;return e}},{key:"_getNextDateOf",value:function(s){var t=this.dates.findIndex(function(t){return t===s});return t===this.dates.length-1?null:this.dates[t+1]}},{key:"_getFollowingTask",value:function(s,t,e,a){if(0===e||null===t)return a;var n=s.filter(function(s){return s.sdate===t&&s.duration<=e});n.sort(function(s,t){return t.duration-s.duration});var r=null,i=null;return n.length>0?(i=n[0],r=s.findIndex(function(s){return s._id===i._id}),s.splice(r,1),a.push(i),i.canHasFollowingTasks?this._getFollowingTask(s,i.edate,i.space,a):a):this._getFollowingTask(s,this._getNextDateOf(t),e-1,a)}},{key:"_groupTasks",value:function(){for(var s=this,t=this.items0.slice(),e=[];t.length;){(function(){var a=t.shift(),n={sdate:a.sdate};if(n[a.sdate]=a,!a.canHasFollowingTasks)return e.push(n),"continue";var r=[];s._getFollowingTask(t,a.edate,a.space,r),r.forEach(function(s,t){n[s.sdate]=s}),e.push(n)})()}return e}}]),s}();t.a=c},123:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(129),n=e.n(a),r=e(122);t.default={data:function(){return{dates:[],isLoading:!1}},props:{utasks:{type:Array,default:[]},sdate:String,spinner:{type:String,default:"default"}},computed:{egtasks:function(){var s=this,t=[];return this.utasks.forEach(function(e,a){var n=new r.a(e.tasks,s.sdate),i={};i.user=e,i.tasks=n.items,i.total=n.total,s.dates=n.dates,t.push(i)}),t}},components:{UserTasks:n.a},created:function(){this.isLoading=!0},updated:function(){this.isLoading=!1}}},124:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{task:{type:Object,required:!0},floorIndex:{type:Number,default:0}},computed:{classLength:function(){return"at-eg-len-"+this.task.duration},classFloor:function(){return"at-eg-floor-"+this.floorIndex}}}},125:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(128),n=e.n(a);t.default={props:{user:{type:Object,required:!0},dates:{type:Array,required:!0},tasks:{type:Array,required:!0},cls:{type:String}},computed:{tallSize:function(){return this.tasks.length}},components:{TaskItem:n.a}}},127:function(s,t){},128:function(s,t,e){var a=e(1)(e(124),e(131),null,null);s.exports=a.exports},129:function(s,t,e){var a=e(1)(e(125),e(132),null,null);s.exports=a.exports},130:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"at-eg"},[e("div",{staticClass:"at-eg-hd"},[e("table",{staticClass:"at-eg-tb",attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[e("thead",[e("tr",[e("th",{staticClass:"at-eg-cell-first"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.isLoading,expression:"isLoading"}],staticClass:"at-eg-spinner"},[s._t("spinner",[e("i",{class:"at-eg-spinner-"+s.spinner})])],2),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!s.isLoading,expression:"!isLoading"}],staticClass:"at-eg-cell-first-inner"},[s._v("#")])]),s._v(" "),s._l(s.dates,function(t){return e("th",[s._v("\n            "+s._s(t)+"\n          ")])})],2)])])]),s._v(" "),e("div",{staticClass:"at-eg-bd"},[e("table",{staticClass:"at-eg-tb at-eg-tasks"},[e("tbody",[s._l(s.egtasks,function(t,a){return[e("user-tasks",{attrs:{user:t.user,tasks:t.tasks,dates:s.dates,cls:a%2==0?"at-eg-odd":""}})]})],2)])])])},staticRenderFns:[]}},131:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"at-eg-task",class:[s.classLength,s.classFloor]},[e("div",{staticClass:"at-eg-task-inner"},[s._v("\n  "+s._s(s.task.title)+"\n  ")])])},staticRenderFns:[]}},132:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("tr",{staticClass:"at-eg-row",class:s.cls},[e("td",{staticClass:"at-eg-cell-a"},[e("div",{staticClass:"at-eg-user"},[e("div",{staticClass:"at-eg-user-inner"},[e("img",{staticClass:"at-eg-avatar",attrs:{src:s.user.avatar,alt:s.user.name}}),s._v(" "),e("p",{staticClass:"at-eg-name"},[s._v(s._s(s.user.name))])])])]),s._v(" "),s._l(s.dates,function(t,a){return e("td",{staticClass:"at-eg-cell-b",class:"at-eg-cell-"+a,attrs:{"data-date":t}},[e("div",{staticClass:"at-eg-tgroup",class:"at-eg-tall-"+s.tallSize},[s._l(s.tasks,function(a,n){return[(s.task=a[t])?e("task-item",{attrs:{task:s.task,"floor-index":n}}):s._e()]})],2)])})],2)},staticRenderFns:[]}},139:function(s,t,e){function a(s){return e(n(s))}function n(s){var t=r[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}var r={"./af":3,"./af.js":3,"./ar":10,"./ar-dz":4,"./ar-dz.js":4,"./ar-kw":5,"./ar-kw.js":5,"./ar-ly":6,"./ar-ly.js":6,"./ar-ma":7,"./ar-ma.js":7,"./ar-sa":8,"./ar-sa.js":8,"./ar-tn":9,"./ar-tn.js":9,"./ar.js":10,"./az":11,"./az.js":11,"./be":12,"./be.js":12,"./bg":13,"./bg.js":13,"./bm":14,"./bm.js":14,"./bn":15,"./bn.js":15,"./bo":16,"./bo.js":16,"./br":17,"./br.js":17,"./bs":18,"./bs.js":18,"./ca":19,"./ca.js":19,"./cs":20,"./cs.js":20,"./cv":21,"./cv.js":21,"./cy":22,"./cy.js":22,"./da":23,"./da.js":23,"./de":26,"./de-at":24,"./de-at.js":24,"./de-ch":25,"./de-ch.js":25,"./de.js":26,"./dv":27,"./dv.js":27,"./el":28,"./el.js":28,"./en-au":29,"./en-au.js":29,"./en-ca":30,"./en-ca.js":30,"./en-gb":31,"./en-gb.js":31,"./en-ie":32,"./en-ie.js":32,"./en-nz":33,"./en-nz.js":33,"./eo":34,"./eo.js":34,"./es":37,"./es-do":35,"./es-do.js":35,"./es-us":36,"./es-us.js":36,"./es.js":37,"./et":38,"./et.js":38,"./eu":39,"./eu.js":39,"./fa":40,"./fa.js":40,"./fi":41,"./fi.js":41,"./fo":42,"./fo.js":42,"./fr":45,"./fr-ca":43,"./fr-ca.js":43,"./fr-ch":44,"./fr-ch.js":44,"./fr.js":45,"./fy":46,"./fy.js":46,"./gd":47,"./gd.js":47,"./gl":48,"./gl.js":48,"./gom-latn":49,"./gom-latn.js":49,"./gu":50,"./gu.js":50,"./he":51,"./he.js":51,"./hi":52,"./hi.js":52,"./hr":53,"./hr.js":53,"./hu":54,"./hu.js":54,"./hy-am":55,"./hy-am.js":55,"./id":56,"./id.js":56,"./is":57,"./is.js":57,"./it":58,"./it.js":58,"./ja":59,"./ja.js":59,"./jv":60,"./jv.js":60,"./ka":61,"./ka.js":61,"./kk":62,"./kk.js":62,"./km":63,"./km.js":63,"./kn":64,"./kn.js":64,"./ko":65,"./ko.js":65,"./ky":66,"./ky.js":66,"./lb":67,"./lb.js":67,"./lo":68,"./lo.js":68,"./lt":69,"./lt.js":69,"./lv":70,"./lv.js":70,"./me":71,"./me.js":71,"./mi":72,"./mi.js":72,"./mk":73,"./mk.js":73,"./ml":74,"./ml.js":74,"./mr":75,"./mr.js":75,"./ms":77,"./ms-my":76,"./ms-my.js":76,"./ms.js":77,"./my":78,"./my.js":78,"./nb":79,"./nb.js":79,"./ne":80,"./ne.js":80,"./nl":82,"./nl-be":81,"./nl-be.js":81,"./nl.js":82,"./nn":83,"./nn.js":83,"./pa-in":84,"./pa-in.js":84,"./pl":85,"./pl.js":85,"./pt":87,"./pt-br":86,"./pt-br.js":86,"./pt.js":87,"./ro":88,"./ro.js":88,"./ru":89,"./ru.js":89,"./sd":90,"./sd.js":90,"./se":91,"./se.js":91,"./si":92,"./si.js":92,"./sk":93,"./sk.js":93,"./sl":94,"./sl.js":94,"./sq":95,"./sq.js":95,"./sr":97,"./sr-cyrl":96,"./sr-cyrl.js":96,"./sr.js":97,"./ss":98,"./ss.js":98,"./sv":99,"./sv.js":99,"./sw":100,"./sw.js":100,"./ta":101,"./ta.js":101,"./te":102,"./te.js":102,"./tet":103,"./tet.js":103,"./th":104,"./th.js":104,"./tl-ph":105,"./tl-ph.js":105,"./tlh":106,"./tlh.js":106,"./tr":107,"./tr.js":107,"./tzl":108,"./tzl.js":108,"./tzm":110,"./tzm-latn":109,"./tzm-latn.js":109,"./tzm.js":110,"./uk":111,"./uk.js":111,"./ur":112,"./ur.js":112,"./uz":114,"./uz-latn":113,"./uz-latn.js":113,"./uz.js":114,"./vi":115,"./vi.js":115,"./x-pseudo":116,"./x-pseudo.js":116,"./yo":117,"./yo.js":117,"./zh-cn":118,"./zh-cn.js":118,"./zh-hk":119,"./zh-hk.js":119,"./zh-tw":120,"./zh-tw.js":120};a.keys=function(){return Object.keys(r)},a.resolve=n,s.exports=a,a.id=139},146:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(121),n=e.n(a);t.default=n.a,"undefined"!=typeof window&&window.Vue&&window.Vue.component("easy-gantt",n.a)}},[146])});
//# sourceMappingURL=vue-easy-gantt.f863ce3d7f0c46bc01c0.js.map