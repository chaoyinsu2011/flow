var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,i=(e,r,t)=>new Promise(((o,a)=>{var i=e=>{try{n(t.next(e))}catch(r){a(r)}},s=e=>{try{n(t.throw(e))}catch(r){a(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,s);n((t=t.apply(e,r)).next())}));import{B as s,a as n}from"./index.cf90a7d3.js";import{_ as d}from"./BasicForm.ccc180d0.js";import{u as l}from"./useForm.753834fe.js";import{a as c}from"./app.data.adba05c8.js";import{r as m}from"./app.048810e2.js";import{a_ as f,h as p}from"./index.91a03d82.js";import{j as u,aL as j,ad as y,bW as b,ay as v,cf as x,r as g,u as h,i as S,K as w,o as O,m as C,Q as F,n as B,Y as M,q as P,N as _}from"./vendor.686fd1d4.js";/* empty css              */import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";const{TextArea:K}=y;var R=u({name:"SecretKeyModal",components:{BasicModal:s,BasicForm:d,Button:j,Input:y,TextArea:K,Space:b,Popconfirm:v,QuestionCircleOutlined:x},emits:["success","register"],setup(e,{emit:s}){const d=g(!0),u=g(""),{createMessage:j}=p(),{clipboardRef:y,copiedRef:b}=f(),[v,{resetFields:x,updateSchema:w,setFieldsValue:O,validate:C}]=l({labelWidth:100,schemas:c,showActionButtonGroup:!1}),[F,{setModalProps:B,closeModal:M}]=n((e=>i(this,null,(function*(){yield x(),B({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let i=e.record;u.value=i.secretKey,h(d)&&O(((e,i)=>{for(var s in i||(i={}))t.call(i,s)&&a(e,s,i[s]);if(r)for(var s of r(i))o.call(i,s)&&a(e,s,i[s]);return e})({},e.record))}))));return{registerModal:F,registerForm:v,getTitle:S((()=>h(d)?"修改":"新增")),handleCopy:function(){try{const e=h(u);if(!e)return void j.warning("请重新获取密钥！");y.value=e,h(b)&&j.success("拷贝成功！")}finally{B({confirmLoading:!1})}},refreshSecretKeyHandle:function(e){return i(this,null,(function*(){try{B({confirmLoading:!0});const r=yield m(e.id);u.value=r,O({secretKey:r})}finally{B({confirmLoading:!1})}}))}}}});const L={class:""},T=M(" 获取 "),k=M(" 复制 ");R.render=function(e,r,t,o,a,i){const s=w("TextArea"),n=w("QuestionCircleOutlined"),d=w("a-button"),l=w("Popconfirm"),c=w("Space"),m=w("BasicForm"),f=w("BasicModal");return O(),C(f,_(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:F((()=>[B(m,{onRegister:e.registerForm},{snSlot:F((({model:e,field:r})=>[M(P(e[r]),1)])),secretKeySlot:F((({model:r,field:t})=>[B("div",L,[B(s,{readonly:"",rows:4,value:r[t],"onUpdate:value":e=>r[t]=e},null,8,["value","onUpdate:value"]),B(c,null,{default:F((()=>[B(l,{title:"重新获取秘钥吗？",onConfirm:t=>e.refreshSecretKeyHandle(r)},{icon:F((()=>[B(n,{style:{color:"red"}})])),default:F((()=>[B(d,null,{default:F((()=>[T])),_:1})])),_:2},1032,["onConfirm"]),B(d,{type:"primary",onClick:e.handleCopy},{default:F((()=>[k])),_:1},8,["onClick"])])),_:2},1024)])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default R;
