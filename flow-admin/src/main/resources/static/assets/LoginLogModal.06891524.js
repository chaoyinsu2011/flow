var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,r=(e,t,o)=>new Promise(((a,n)=>{var r=e=>{try{l(o.next(e))}catch(t){n(t)}},i=e=>{try{l(o.throw(e))}catch(t){n(t)}},l=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,i);l((o=o.apply(e,t)).next())}));import{_ as i,a as l}from"./useModal.919850c0.js";import{_ as s}from"./BasicForm.4f71108f.js";import{u as d}from"./useForm.4c43bf99.js";import{aO as p,av as c}from"./index.574e7466.js";import{k as g,r as m,u,f,K as h,o as b,n as v,Q as w,q as y,N as P}from"./vendor.56d2c57f.js";const I=[{title:"访问IP",dataIndex:"ip",width:100,align:"left"},{title:"操作人ID",dataIndex:"operationId",width:100,align:"left"},{title:"操作人的姓名",dataIndex:"operationUsername",width:100,align:"left"},{title:"操作人姓名",dataIndex:"operationPerson",width:100,align:"left"},{title:"操作内容",dataIndex:"operationContent",width:100,align:"left"},{title:"操作时间",dataIndex:"operationTime",width:100,align:"left",customRender:({text:e})=>p(e)}],L=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"dateRange",label:"时间范围",component:"RangePicker",componentProps:{placeholder:"选择时间"},labelWidth:80,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],x=[{field:"ip",label:"访问ip",required:!1,component:"Input",show:!0},{field:"operationId",label:"操作人id",required:!1,component:"Input",show:!0},{field:"operationUsername",label:"操作人的姓名",required:!1,component:"Input",show:!0,rules:[{required:!1,whitespace:!0,message:"操作人的姓名不能为空！"},{max:32,message:"字符长度不能大于32！"}]},{field:"operationPerson",label:"操作人姓名",required:!1,component:"Input",show:!0},{field:"operationContent",label:"操作内容",required:!1,component:"Input",show:!0},{field:"operationTime",label:"操作时间",required:!0,component:"DatePicker",show:!0}];var O,R;(R=O||(O={})).LoginLogPageList="/flow/privilege/loginLog/getPagerModel",R.SaveOrUpdate="/flow/privilege/loginLog/saveOrUpdate",R.Delete="/flow/privilege/loginLog/delete";const S=e=>{const t=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let o=e||{};e.dateRange&&e.dateRange.length>0&&(o.startTimeStr=e.dateRange[0],o.endTimeStr=e.dateRange[1]),o&&(delete o.pageNum,delete o.pageSize,delete o.dateRange);const a={query:t,entity:o};return c.post({url:O.LoginLogPageList,params:a})},j=e=>c.post({url:O.Delete,params:e});var M=g({name:"LoginLogModal",components:{BasicModal:i,BasicForm:s},emits:["success","register"],setup(e,{emit:i}){const s=m(!0),[p,{resetFields:g,setFieldsValue:h,validate:b}]=d({labelWidth:100,schemas:x,showActionButtonGroup:!1}),[v,{setModalProps:w,closeModal:y}]=l((e=>r(this,null,(function*(){g(),w({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),u(s)&&h(((e,r)=>{for(var i in r||(r={}))o.call(r,i)&&n(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&n(e,i,r[i]);return e})({},e.record))}))));return{registerModal:v,registerForm:p,getTitle:f((()=>u(s)?"修改":"新增")),handleSubmit:function(){return r(this,null,(function*(){try{w({confirmLoading:!0});const t=yield b();yield(e=t,c.post({url:O.SaveOrUpdate,params:e})),y(),i("success")}finally{w({confirmLoading:!1})}var e}))}}}});M.render=function(e,t,o,a,n,r){const i=h("BasicForm"),l=h("BasicModal");return b(),v(l,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[y(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{q as L,M as _,I as c,j as d,S as g,L as s};
