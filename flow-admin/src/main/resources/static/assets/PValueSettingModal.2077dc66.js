var e=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(o,i,t)=>i in o?e(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t,s=(e,o,i)=>new Promise(((t,r)=>{var s=e=>{try{n(i.next(e))}catch(o){r(o)}},a=e=>{try{n(i.throw(e))}catch(o){r(o)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((i=i.apply(e,o)).next())}));import{B as a,a as n}from"./index.08cdb95c.js";import{_ as d}from"./BasicForm.99631a91.js";import{u as l}from"./useForm.29bf2c0c.js";import{p as m,e as p}from"./module.data.e1f3b555.js";import{g as c}from"./appPrivilegeValue.f9639fc9.js";import{j as f,r as u,u as b,i as j,K as v,o as g,m as x,Q as y,n as h,N as F}from"./vendor.686fd1d4.js";import"./index.ffeb6485.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";var P=f({name:"PValueSettingModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[f,{resetFields:v,setFieldsValue:g,updateSchema:x,validate:y}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[h,{setModalProps:F,closeModal:P}]=n((e=>s(this,null,(function*(){if(v(),F({confirmLoading:!1,title:"设置菜单【"+e.record.name+"】的权限值"}),d.value=!!(null==e?void 0:e.isUpdate),b(d)){g(((e,s)=>{for(var a in s||(s={}))i.call(s,a)&&r(e,a,s[a]);if(o)for(var a of o(s))t.call(s,a)&&r(e,a,s[a]);return e})({},e.record));let s=(yield c())||[];s.forEach((e=>{e.value=e.position,e.label=e.name}));const a=e.record.pvs.map((e=>e.position));x({field:"pvs",componentProps:{options:s}}),g({pvs:a})}}))));return{registerModal:h,registerForm:f,getTitle:j((()=>b(d)?"设置权限值":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{F({confirmLoading:!0});const e=yield y();e.pvs=e.pvs.map((e=>({position:e}))),yield p(e),P(),a("success")}finally{F({confirmLoading:!1})}}))}}}});P.render=function(e,o,i,t,r,s){const a=v("BasicForm"),n=v("BasicModal");return g(),x(n,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[h(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
