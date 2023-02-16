var _=Object.defineProperty;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(t,o,e)=>o in t?_(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,f=(t,o)=>{for(var e in o||(o={}))M.call(o,e)&&m(t,e,o[e]);if(p)for(var e of p(o))v.call(o,e)&&m(t,e,o[e]);return t};var d=(t,o,e)=>new Promise((r,s)=>{var c=a=>{try{u(e.next(a))}catch(n){s(n)}},i=a=>{try{u(e.throw(a))}catch(n){s(n)}},u=a=>a.done?r(a.value):Promise.resolve(a.value).then(c,i);u((e=e.apply(t,o)).next())});import{B as C,a as D}from"./index.a492e5cd.js";import{B as I}from"./BasicForm.027cbf67.js";import{u as N}from"./useForm.81406efc.js";import{bV as P,a as S,x as k,k as g,h as w,az as T,aB as F,i as x,l as y,C as R,q as $,aC as q}from"./index.e61ad282.js";import{T as A}from"./index.6e0a0264.js";import{a as L}from"./system.963456bf.js";const X=[{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",width:160,align:"left"},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:t})=>{const e=~~t.status===0,r=e?"green":"red",s=e?"\u542F\u7528":"\u505C\u7528";return P(A,{color:r},()=>s)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],Y=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],V=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",required:!0},{field:"parentDept",label:"\u4E0A\u7EA7\u90E8\u95E8",component:"TreeSelect",componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"\u6392\u5E8F",component:"InputNumber",required:!0},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},required:!0},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],O=S({name:"DeptModal",components:{BasicModal:C,BasicForm:I},emits:["success","register"],setup(t,{emit:o}){const e=k(!0),[r,{resetFields:s,setFieldsValue:c,updateSchema:i,validate:u}]=N({labelWidth:100,schemas:V,showActionButtonGroup:!1}),[a,{setModalProps:n,closeModal:b}]=D(l=>d(this,null,function*(){s(),n({confirmLoading:!1}),e.value=!!(l!=null&&l.isUpdate),g(e)&&c(f({},l.record));const h=yield L();i({field:"parentDept",componentProps:{treeData:h}})})),E=w(()=>g(e)?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8");function B(){return d(this,null,function*(){try{const l=yield u();n({confirmLoading:!0}),b(),o("success")}finally{n({confirmLoading:!1})}})}return{registerModal:a,registerForm:r,getTitle:E,handleSubmit:B}}});function z(t,o,e,r,s,c){const i=F("BasicForm"),u=F("BasicModal");return x(),y(u,q(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:R(()=>[$(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var G=T(O,[["render",z]]),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});export{G as D,Z as a,X as c,Y as s};
