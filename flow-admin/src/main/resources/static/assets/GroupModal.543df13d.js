var e=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(r,i,t)=>i in r?e(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,s=(e,r,i)=>new Promise(((t,o)=>{var s=e=>{try{n(i.next(e))}catch(r){o(r)}},a=e=>{try{n(i.throw(e))}catch(r){o(r)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((i=i.apply(e,r)).next())}));import{B as a,a as n}from"./index.cf90a7d3.js";import{_ as d}from"./BasicForm.ccc180d0.js";import{u as l}from"./useForm.753834fe.js";import{f as m}from"./group.data.50658ad5.js";import{c,s as f}from"./group.f7896d1e.js";import{j as p,r as u,u as j,i as g,K as b,o as x,m as h,Q as v,n as y,N as w}from"./vendor.686fd1d4.js";import"./index.91a03d82.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";var P=p({name:"GroupModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[p,{resetFields:b,updateSchema:x,setFieldsValue:h,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[y,{setModalProps:w,closeModal:P}]=n((e=>s(this,null,(function*(){yield b(),w({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield x([{field:"sn",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{trigger:["change","blur"],pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{trigger:["change","blur"],max:64,message:"字符长度不能大于64！"},...(e={id:j(d)&&s&&s.id||"",field:"sn",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(r,i)=>i?c({id:e.id,field:e.field,fieldValue:i,fieldName:e.fieldName}).then((r=>r?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),j(d)&&h(((e,s)=>{for(var a in s||(s={}))i.call(s,a)&&o(e,a,s[a]);if(r)for(var a of r(s))t.call(s,a)&&o(e,a,s[a]);return e})({},e.record))}))));return{registerModal:y,registerForm:p,getTitle:g((()=>j(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{const e=yield v();w({confirmLoading:!0}),yield f(e),P(),a("success")}finally{w({confirmLoading:!1})}}))}}}});P.render=function(e,r,i,t,o,s){const a=b("BasicForm"),n=b("BasicModal");return x(),h(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[y(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
