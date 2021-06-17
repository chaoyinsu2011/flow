var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,t,a)=>new Promise(((o,l)=>{var r=e=>{try{n(a.next(e))}catch(t){l(t)}},s=e=>{try{n(a.throw(e))}catch(t){l(t)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,s);n((a=a.apply(e,t)).next())}));import{_ as s,a as n}from"./useModal.919850c0.js";import{_ as i}from"./BasicForm.4f71108f.js";import{u as d}from"./useForm.4c43bf99.js";import{a1 as m,b2 as p,k as c,r as f,u,f as g,K as b,o as y,n as h,Q as w,q as I,N as v}from"./vendor.56d2c57f.js";/* empty css              */import{e as x,s as P}from"./modelInfo.c083fb6c.js";import{a as j}from"./app.b9bc9b47.js";import{s as M}from"./index.574e7466.js";const S=[{title:"名称",dataIndex:"name",align:"left"},{title:"KEY",dataIndex:"modelKey",width:100,align:"left"},{title:"分类名称",dataIndex:"categoryName",width:100,align:"left"},{title:"系统",dataIndex:"appName",width:100,align:"left"},{title:"应用范围",dataIndex:"appliedRange",width:100,align:"left"},{title:"状态",dataIndex:"statusName",width:70,align:"center",customRender:({record:e})=>{const{status:t,statusName:a}=e;return m(p,{color:2==~~t?"yellow":3==~~t?"green":4==~~t?"red":"gray"},(()=>a))}},{title:"更新时间",dataIndex:"updateTime",width:120,align:"left"}],O=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"系统",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],F=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"名称",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:200,message:"字符长度不能大于200！"}]},{field:"modelKey",label:"标识",component:"Input",required:!0},{field:"appSn",label:"所属系统",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}];var N=c({name:"ModelInfoModal",components:{BasicModal:s,BasicForm:i},emits:["success","register"],setup(e,{emit:s}){const i=f(!0),m=M(),[p,{setFieldsValue:c,updateSchema:b,resetFields:y,validate:h}]=d({labelWidth:100,schemas:F,showActionButtonGroup:!1,actionColOptions:{span:23}}),[w,{setModalProps:I,changeLoading:v,closeModal:S}]=n((e=>r(this,null,(function*(){y(),I({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),v(!0);let r=null;try{r=yield j()}finally{v(!1)}let s=e.record;yield b([{field:"appSn",componentProps:{options:r,labelField:"id"}},{field:"modelKey",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:150,message:"字符长度不能大于150！"},...(e={id:u(i)&&s&&s.id||"",field:"modelKey",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,a)=>a?x({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),u(i)&&c(((e,r)=>{for(var s in r||(r={}))a.call(r,s)&&l(e,s,r[s]);if(t)for(var s of t(r))o.call(r,s)&&l(e,s,r[s]);return e})({},e.record))}))));return{registerModal:w,registerForm:p,getTitle:g((()=>u(i)?"编辑":"新增")),handleSubmit:function(){return r(this,null,(function*(){try{I({confirmLoading:!0});const e=yield h(),t=yield P(e);m("/flowable/bpmn/designer?modelId="+t.modelId),S(),s("success")}finally{v(!1),I({confirmLoading:!1})}}))}}}});N.render=function(e,t,a,o,l,r){const s=b("BasicForm"),n=b("BasicModal");return y(),h(n,v(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[I(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});export{_ as M,N as _,S as c,O as s};
