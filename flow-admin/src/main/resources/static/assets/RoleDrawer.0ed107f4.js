var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t,a)=>new Promise(((r,o)=>{var n=e=>{try{s(a.next(e))}catch(t){o(t)}},l=e=>{try{s(a.throw(e))}catch(t){o(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(n,l);s((a=a.apply(e,t)).next())}));import{_ as l}from"./BasicForm.99631a91.js";import{u as s}from"./useForm.29bf2c0c.js";import{a1 as i,bF as d,j as u,r as c,i as m,u as p,K as f,o as b,m as h,Q as g,n as v,N as w}from"./vendor.686fd1d4.js";/* empty css              */import{s as y,d as x}from"./system.656162d2.js";import{h as j}from"./index.ffeb6485.js";import{B as I,a as D}from"./index.1db0f76a.js";import{_ as F}from"./Tree.vue_vue&type=style&index=0&lang.a6f2d871.js";const S=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),i(d,{checked:"1"===e.status,checkedChildren:"已启用",unCheckedChildren:"已禁用",loading:e.pendingStatus,onChange(t){e.pendingStatus=!0;const a=t?"1":"0",{createMessage:r}=j();y(e.id,a).then((()=>{e.status=a,r.success("已成功修改角色状态")})).catch((()=>{r.error("修改角色状态失败")})).finally((()=>{e.pendingStatus=!1}))}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],B=[{field:"roleNme",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],P=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}];var _=u({name:"RoleDrawer",components:{BasicDrawer:I,BasicForm:l,BasicTree:F},emits:["success","register"],setup(e,{emit:l}){const i=c(!0),d=c([]),[u,{resetFields:f,setFieldsValue:b,validate:h}]=s({labelWidth:90,schemas:P,showActionButtonGroup:!1}),[g,{setDrawerProps:v,closeDrawer:w}]=D((e=>n(this,null,(function*(){f(),v({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),p(i)&&b(((e,n)=>{for(var l in n||(n={}))a.call(n,l)&&o(e,l,n[l]);if(t)for(var l of t(n))r.call(n,l)&&o(e,l,n[l]);return e})({},e.record)),d.value=yield x()}))));return{registerDrawer:g,registerForm:u,getTitle:m((()=>p(i)?"编辑角色":"新增角色")),handleSubmit:function(){return n(this,null,(function*(){try{yield h();v({confirmLoading:!0}),w(),l("success")}finally{v({confirmLoading:!1})}}))},treeData:d}}});_.render=function(e,t,a,r,o,n){const l=f("BasicTree"),s=f("BasicForm"),i=f("BasicDrawer");return b(),h(i,w(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:g((()=>[v(s,{onRegister:e.registerForm},{menu:g((({model:t,field:a})=>[v(l,{value:t[a],"onUpdate:value":e=>t[a]=e,treeData:e.treeData,replaceFields:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});export{k as R,_,S as c,B as s};
