var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,s=(e,o,r)=>new Promise(((t,i)=>{var s=e=>{try{a(r.next(e))}catch(o){i(o)}},n=e=>{try{a(r.throw(e))}catch(o){i(o)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,n);a((r=r.apply(e,o)).next())}));import{B as n,a}from"./index.08cdb95c.js";import{_ as d}from"./BasicForm.99631a91.js";import{u as l}from"./useForm.29bf2c0c.js";import{f as m,b as c}from"./module.data.e1f3b555.js";import{j as f,r as p,u,i as b,K as j,o as x,m as h,Q as g,n as v,N as y}from"./vendor.686fd1d4.js";import"./index.ffeb6485.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";var w=f({name:"ModuleModal",components:{BasicModal:n,BasicForm:d},emits:["success","register"],setup(e,{emit:n}){const d=p(!0),[f,{resetFields:j,setFieldsValue:x,updateSchema:h,validate:g}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[v,{setModalProps:y,closeModal:w}]=a((e=>s(this,null,(function*(){j(),y({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),u(d)?(x(((e,s)=>{for(var n in s||(s={}))r.call(s,n)&&i(e,n,s[n]);if(o)for(var n of o(s))t.call(s,n)&&i(e,n,s[n]);return e})({},e.record)),h([{field:"component",show:!1},{field:"url",show:!1}])):h([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:v,registerForm:f,getTitle:b((()=>u(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{y({confirmLoading:!0});const e=yield g();yield c(e),w(),n("success")}finally{y({confirmLoading:!1})}}))}}}});w.render=function(e,o,r,t,i,s){const n=j("BasicForm"),a=j("BasicModal");return x(),h(a,y(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:g((()=>[v(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default w;
