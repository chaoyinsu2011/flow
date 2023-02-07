var I=Object.defineProperty,_=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var E=(u,t,e)=>t in u?I(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,B=(u,t)=>{for(var e in t||(t={}))x.call(t,e)&&E(u,e,t[e]);if(h)for(var e of h(t))A.call(t,e)&&E(u,e,t[e]);return u},w=(u,t)=>_(u,q(t));var p=(u,t,e)=>new Promise((n,a)=>{var c=o=>{try{r(e.next(o))}catch(i){a(i)}},l=o=>{try{r(e.throw(o))}catch(i){a(i)}},r=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,l);r((e=e.apply(u,t)).next())});import{B as M,a as S}from"./index.4ff668bf.js";import{B as y}from"./BasicForm.d8aa86d3.js";import{u as k}from"./useForm.d7bb3373.js";import{bV as v,az as N,a as R,x as V,k as F,h as T,aB as b,i as $,l as O,C as j,q as L,aC as U}from"./index.ef013507.js";import{T as z}from"./index.0b0495b0.js";import{c as W,s as G}from"./positionSeq.8293e7d6.js";import{F as H}from"./constantEnum.bf6653fb.js";const re=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left"},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:u})=>{const e=~~u.status===1,n=e?"green":"red",a=e?"\u542F\u7528":"\u505C\u7528";return v(z,{color:n},()=>a)}},{title:"\u6392\u5E8F\u7F16\u53F7",dataIndex:"orderNo",width:100,align:"left"},{title:"\u5907\u6CE8",dataIndex:"note",align:"left"}],ne=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],J=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"}],colProps:{span:24}},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",show:!0,colProps:{span:24}},{field:"pid",label:"\u7236\u7EA7\u7F16\u7801",required:!1,component:"Input",show:!1},{field:"orderNo",label:"\u6392\u5E8F\u7F16\u53F7",required:!1,component:"InputNumber",show:!0},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u505C\u7528"},colProps:{span:24}},{field:"note",label:"\u5907\u6CE8",required:!1,component:"InputTextArea",show:!0,rules:[{max:255,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E255\uFF01"}],colProps:{span:24}}],K=R({name:"PositionSeqModal",components:{BasicModal:M,BasicForm:y},emits:["success","register"],setup(u,{emit:t}){const e=V(!0),[n,{resetFields:a,updateSchema:c,setFieldsValue:l,validate:r}]=k({labelWidth:100,schemas:J,showActionButtonGroup:!1}),o=s=>[{trigger:"blur",validator:(d,g)=>g?W({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(f=>f?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(f=>Promise.reject(f)):Promise.resolve()}],[i,{setModalProps:m,closeModal:D}]=S(s=>p(this,null,function*(){yield a(),m({confirmLoading:!1}),e.value=!!(s!=null&&s.isUpdate);let d=s.record;yield c([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(H.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...o({id:F(e)&&d&&d.id||"",field:"code",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&l(w(B({},d),{status:d.status===1}))})),P=T(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function C(){return p(this,null,function*(){try{m({confirmLoading:!0});const s=yield r();s.status=s.status?1:0,yield G(s),D(),t("success")}finally{m({confirmLoading:!1})}})}return{registerModal:i,registerForm:n,getTitle:P,handleSubmit:C}}});function Q(u,t,e,n,a,c){const l=b("BasicForm"),r=b("BasicModal");return $(),O(r,U(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:j(()=>[L(l,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var X=N(K,[["render",Q]]),le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});export{X as P,le as a,re as c,ne as s};
