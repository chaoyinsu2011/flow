var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,n=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{n(t.next(e))}catch(o){i(o)}},a=e=>{try{n(t.throw(e))}catch(o){i(o)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,o)).next())}));import{_ as l,a as d}from"./useModal.c70d8b8c.js";import{_ as p}from"./BasicForm.4961b69c.js";import{u as c}from"./useForm.4f4a10e2.js";import{b as m}from"./account.data.be685cbd.js";import{b as u}from"./account.b5287497.js";import{g as f}from"./group.9b0d9123.js";import{k as b,bt as j,r as g,u as v,f as h,K as y,o as x,n as O,Q as w,q as F,N as M}from"./vendor.9d9efc92.js";import"./index.f36f9bca.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";var P=b({name:"AccountModal",components:{BasicModal:l,BasicForm:p,Select:j},emits:["success","register"],setup(e,{emit:l}){const p=g(!0),b=g([]),j=g("设置组"),[y,{setFieldsValue:x,updateSchema:O,resetFields:w,validate:F}]=c({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[M,{setModalProps:P,closeModal:S}]=d((e=>n(this,null,(function*(){w(),P({confirmLoading:!1,title:"给账号【"+e.record.realName+"("+e.record.username+")】设置组"}),p.value=!!(null==e?void 0:e.isUpdate);const n=yield f();if(n.forEach((e=>{e.label=e.name,e.value=e.id})),b.value=n,v(p)){let n=e.record.groups||[];n=n.map((e=>e.id)),x((l=((e,o)=>{for(var t in o||(o={}))i.call(o,t)&&a(e,t,o[t]);if(r)for(var t of r(o))s.call(o,t)&&a(e,t,o[t]);return e})({},e.record),o(l,t({groups:n}))))}var l}))));return{registerModal:M,registerForm:y,getTitle:h((()=>v(p)?j.value:"新增")),groupOptions:b,handleSubmit:function(){return n(this,null,(function*(){try{P({confirmLoading:!0});const e=yield F();e.groups=e.groups.map((e=>({id:e}))),e.userId=e.id,delete e.id,yield u(e),S(),l("success")}finally{P({confirmLoading:!1})}}))}}}});P.render=function(e,o,t,r,i,s){const a=y("Select"),n=y("BasicForm"),l=y("BasicModal");return x(),O(l,M(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[F(n,{onRegister:e.registerForm},{groups:w((({model:o,field:t})=>[F(a,{value:o[t],"onUpdate:value":e=>o[t]=e,mode:"multiple",style:{width:"100%"},placeholder:"请选择组","option-label-prop":"label",options:e.groupOptions},null,8,["value","onUpdate:value","options"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
