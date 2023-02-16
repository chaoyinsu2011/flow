var x=Object.defineProperty,C=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var B=(u,t,e)=>t in u?x(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,E=(u,t)=>{for(var e in t||(t={}))P.call(t,e)&&B(u,e,t[e]);if(h)for(var e of h(t))y.call(t,e)&&B(u,e,t[e]);return u},b=(u,t)=>C(u,_(t));var p=(u,t,e)=>new Promise((n,o)=>{var c=a=>{try{r(e.next(a))}catch(i){o(i)}},l=a=>{try{r(e.throw(a))}catch(i){o(i)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,l);r((e=e.apply(u,t)).next())});import{B as M,a as q}from"./index.a492e5cd.js";import{B as N}from"./BasicForm.027cbf67.js";import{u as k}from"./useForm.81406efc.js";import{bV as v,az as R,a as S,x as T,k as f,h as $,aB as w,i as V,l as O,C as j,q as z,aC as L}from"./index.e61ad282.js";import{T as U}from"./index.6e0a0264.js";import{c as W,s as G}from"./company.adda1c4d.js";const ae=[{title:"\u5168\u79F0",dataIndex:"cname",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left",width:100},{title:"\u7B80\u79F0",dataIndex:"shortName",align:"left",width:180},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:u})=>{const e=~~u.status===1,n=e?"green":"red",o=e?"\u542F\u7528":"\u505C\u7528";return v(U,{color:n},()=>o)}},{title:"\u6392\u5E8F",dataIndex:"orderNo",align:"left",width:80},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u63CF\u8FF0",dataIndex:"descr",align:"left"}],oe=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],Z=[{field:"id",label:"ID",component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"cname",label:"\u5168\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u5168\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}],colProps:{span:24}},{field:"shortName",label:"\u7B80\u79F0",required:!1,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u7B80\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}],colProps:{span:24}},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",colProps:{span:24}},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528"},colProps:{span:24}},{field:"descr",label:"\u63CF\u8FF0",required:!1,component:"InputTextArea",rules:[{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}],colProps:{span:24}}],H=S({name:"CompanyModal",components:{BasicModal:M,BasicForm:N},emits:["success","register"],setup(u,{emit:t}){const e=T(!0),[n,{resetFields:o,updateSchema:c,setFieldsValue:l,validate:r}]=k({labelWidth:100,schemas:Z,showActionButtonGroup:!1}),a=s=>[{trigger:"blur",validator:(d,g)=>g?W({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(F=>F?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[i,{setModalProps:m,closeModal:D}]=q(s=>p(this,null,function*(){yield o(),m({confirmLoading:!1}),e.value=!!(s!=null&&s.isUpdate);let d=s.record;yield c([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"},...a({id:f(e)&&d&&d.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),f(e)&&l(b(E({},d),{status:d.status===1}))})),A=$(()=>f(e)?"\u4FEE\u6539":"\u65B0\u589E");function I(){return p(this,null,function*(){try{m({confirmLoading:!0});const s=yield r();s.status=s.status?1:0,yield G(s),D(),t("success")}finally{m({confirmLoading:!1})}})}return{registerModal:i,registerForm:n,getTitle:A,handleSubmit:I}}});function J(u,t,e,n,o,c){const l=w("BasicForm"),r=w("BasicModal");return V(),O(r,L(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:j(()=>[z(l,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var K=R(H,[["render",J]]),re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{K as C,re as a,ae as c,oe as s};
