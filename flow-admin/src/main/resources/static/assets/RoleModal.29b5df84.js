var P=Object.defineProperty;var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var E=(t,u,e)=>u in t?P(t,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[u]=e,B=(t,u)=>{for(var e in u||(u={}))b.call(u,e)&&E(t,e,u[e]);if(g)for(var e of g(u))x.call(u,e)&&E(t,e,u[e]);return t};var f=(t,u,e)=>new Promise((l,n)=>{var d=o=>{try{s(e.next(o))}catch(i){n(i)}},r=o=>{try{s(e.throw(o))}catch(i){n(i)}},s=o=>o.done?l(o.value):Promise.resolve(o.value).then(d,r);s((e=e.apply(t,u)).next())});import{B as y,a as _}from"./index.a492e5cd.js";import{B as N}from"./BasicForm.027cbf67.js";import{u as R}from"./useForm.81406efc.js";import{c as A,s as M}from"./role.13794e37.js";import{g as v}from"./company.adda1c4d.js";import{F as S}from"./constantEnum.bf6653fb.js";import{az as k,a as q,x as T,k as h,h as $,aB as C,i as O,l as V,C as j,q as L,aC as U}from"./index.e61ad282.js";const ue=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"sn",width:120,align:"left"},{title:"\u6240\u5C5E\u516C\u53F8",dataIndex:"companyName",width:120,align:"left"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u64CD\u4F5C",dataIndex:"action",width:120}],ae=[{title:"\u64CD\u4F5C",dataIndex:"action",width:50,slots:{customRender:"action"}},{dataIndex:"name",align:"left",width:200,slots:{title:"customName"},customRender:({record:t})=>t.name+" - ["+t.code+"]"},{title:"\u6240\u5C5E\u516C\u53F8",dataIndex:"companyName",align:"left"},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"deptName",align:"left"}],oe=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:6,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],z=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"}],colProps:{span:24}},{field:"sn",label:"\u7F16\u7801",component:"Input",required:!0,colProps:{span:24}},{field:"companyId",label:"\u6240\u5C5E\u516C\u53F8",component:"TreeSelect",componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0,colProps:{span:24}},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"},{label:"\u5907\u6CE8",field:"note",component:"InputTextArea",rules:[{max:1024,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E1024\uFF01"}],colProps:{span:24}}],W=q({name:"RoleModal",components:{BasicModal:y,BasicForm:N},emits:["success","register"],setup(t,{emit:u}){const e=T(!0),[l,{setFieldsValue:n,updateSchema:d,resetFields:r,validate:s}]=R({labelWidth:100,schemas:z,showActionButtonGroup:!1,actionColOptions:{span:23}}),o=a=>[{trigger:"blur",validator:(c,m)=>m?A({id:a.id,field:a.field,fieldValue:m,fieldName:a.fieldName}).then(F=>F?Promise.resolve():Promise.reject(a.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[i,{setModalProps:p,closeModal:D}]=_(a=>f(this,null,function*(){yield r(),p({confirmLoading:!1}),e.value=!!(a!=null&&a.isUpdate);let c=a.record;const m=yield v();yield d([{field:"companyId",componentProps:{treeData:m}},{field:"sn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(S.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"},...o({id:h(e)&&c&&c.id||"",field:"sn",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),n(B({},c))})),I=$(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function w(){return f(this,null,function*(){try{p({confirmLoading:!0});const a=yield s();yield M(a),D(),u("success")}finally{p({confirmLoading:!1})}})}return{registerModal:i,registerForm:l,getTitle:I,handleSubmit:w}}});function G(t,u,e,l,n,d){const r=C("BasicForm"),s=C("BasicModal");return O(),V(s,U(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:j(()=>[L(r,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var H=k(W,[["render",G]]),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});export{H as R,se as a,ue as c,ae as p,oe as s};
