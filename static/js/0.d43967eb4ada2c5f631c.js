webpackJsonp([0,1],{59:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Task",data:function(){return{date:"",totalTime:"",comment:""}},methods:{save:function(){var t={name:"Armin",avatar:"https://avatars0.githubusercontent.com/u/10386102?v=3&s=460",date:this.date,totalTime:this.totalTime,comment:this.comment};this.$store.dispatch("save",t),this.$store.dispatch("addTotalTime",this.totalTime),this.$router.go(-1)}}}},114:function(t,e,a){var s=a(6)(a(59),a(120),null,null);t.exports=s.exports},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-horizontal"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-6"},[a("label",[t._v("日期")]),t._v(" "),a("div",[a("el-date-picker",{attrs:{type:"date",placeholder:"Date",format:"yyyy-MM-dd"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("label",[t._v("时间")]),t._v(" "),a("el-input",{attrs:{type:"number",placeholder:"Hours"},model:{value:t.totalTime,callback:function(e){t.totalTime=e},expression:"totalTime"}})],1)]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-12"},[a("label",[t._v("备注")]),t._v(" "),a("el-input",{attrs:{placeholder:"Comment"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.save()}}},[t._v("保存")]),t._v(" "),a("router-link",{attrs:{to:"/time-entries"}},[a("el-button",{attrs:{type:"danger"}},[t._v("取消")])],1),t._v(" "),a("hr")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.d43967eb4ada2c5f631c.js.map