var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,s=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{n(t.next(e))}catch(o){i(o)}},a=e=>{try{n(t.throw(e))}catch(o){i(o)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,o)).next())}));import{_ as a,a as n}from"./useModal.0a504584.js";import{_ as d}from"./BasicForm.de2d0bb0.js";import{u as l}from"./useForm.906ec90d.js";import{p,e as m}from"./module.data.3b38f947.js";import{g as c}from"./appPrivilegeValue.afce1e19.js";import{k as f,r as u,u as j,f as b,K as g,o as v,n as h,Q as x,q as y,N as w}from"./vendor.9d9efc92.js";import"./index.1f477f84.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";var F=f({name:"PValueSettingModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[f,{resetFields:g,setFieldsValue:v,updateSchema:h,validate:x}]=l({labelWidth:100,schemas:p,showActionButtonGroup:!1}),[y,{setModalProps:w,closeModal:F}]=n((e=>s(this,null,(function*(){if(g(),w({confirmLoading:!1,title:"设置菜单【"+e.record.name+"】的权限值"}),d.value=!!(null==e?void 0:e.isUpdate),j(d)){v(((e,s)=>{for(var a in s||(s={}))t.call(s,a)&&i(e,a,s[a]);if(o)for(var a of o(s))r.call(s,a)&&i(e,a,s[a]);return e})({},e.record));let s=(yield c())||[];s.forEach((e=>{e.value=e.position,e.label=e.name}));const a=e.record.pvs.map((e=>e.position));h({field:"pvs",componentProps:{options:s}}),v({pvs:a})}}))));return{registerModal:y,registerForm:f,getTitle:b((()=>j(d)?"设置权限值":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{w({confirmLoading:!0});const e=yield x();e.pvs=e.pvs.map((e=>({position:e}))),yield m(e),F(),a("success")}finally{w({confirmLoading:!1})}}))}}}});F.render=function(e,o,t,r,i,s){const a=g("BasicForm"),n=g("BasicModal");return v(),h(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[y(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default F;
