var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,i=(e,t,r)=>new Promise(((o,a)=>{var i=e=>{try{n(r.next(e))}catch(t){a(t)}},s=e=>{try{n(r.throw(e))}catch(t){a(t)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,s);n((r=r.apply(e,t)).next())}));import{_ as s,a as n}from"./useModal.0a504584.js";import{_ as l}from"./BasicForm.de2d0bb0.js";import{u as d}from"./useForm.906ec90d.js";import{a as c}from"./app.data.6cf363ae.js";import{r as f}from"./app.257193f5.js";import{aX as m,g as p}from"./index.1f477f84.js";import{k as u,aJ as j,ad as y,cb as b,aw as v,cc as g,r as x,u as h,f as w,K as S,o as M,n as O,Q as C,q as F,Y as P,s as _,N as B}from"./vendor.9d9efc92.js";/* empty css              */import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";const{TextArea:K}=y;var R=u({name:"SecretKeyModal",components:{BasicModal:s,BasicForm:l,Button:j,Input:y,TextArea:K,Space:b,Popconfirm:v,QuestionCircleOutlined:g},emits:["success","register"],setup(e,{emit:s}){const l=x(!0),u=x(""),{createMessage:j}=p(),{clipboardRef:y,copiedRef:b}=m(),[v,{resetFields:g,updateSchema:S,setFieldsValue:M,validate:O}]=d({labelWidth:100,schemas:c,showActionButtonGroup:!1}),[C,{setModalProps:F,closeModal:P}]=n((e=>i(this,null,(function*(){yield g(),F({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate);let i=e.record;u.value=i.secretKey,h(l)&&M(((e,i)=>{for(var s in i||(i={}))r.call(i,s)&&a(e,s,i[s]);if(t)for(var s of t(i))o.call(i,s)&&a(e,s,i[s]);return e})({},e.record))}))));return{registerModal:C,registerForm:v,getTitle:w((()=>h(l)?"修改":"新增")),handleCopy:function(){try{const e=h(u);if(!e)return void j.warning("请重新获取密钥！");y.value=e,h(b)&&j.success("拷贝成功！")}finally{F({confirmLoading:!1})}},refreshSecretKeyHandle:function(e){return i(this,null,(function*(){try{F({confirmLoading:!0});const t=yield f(e.id);u.value=t,M({secretKey:t})}finally{F({confirmLoading:!1})}}))}}}});const k={class:""},T=P(" 获取 "),A=P(" 复制 ");R.render=function(e,t,r,o,a,i){const s=S("TextArea"),n=S("QuestionCircleOutlined"),l=S("a-button"),d=S("Popconfirm"),c=S("Space"),f=S("BasicForm"),m=S("BasicModal");return M(),O(m,B(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:C((()=>[F(f,{onRegister:e.registerForm},{snSlot:C((({model:e,field:t})=>[P(_(e[t]),1)])),secretKeySlot:C((({model:t,field:r})=>[F("div",k,[F(s,{readonly:"",rows:4,value:t[r],"onUpdate:value":e=>t[r]=e},null,8,["value","onUpdate:value"]),F(c,null,{default:C((()=>[F(d,{title:"重新获取秘钥吗？",onConfirm:r=>e.refreshSecretKeyHandle(t)},{icon:C((()=>[F(n,{style:{color:"red"}})])),default:C((()=>[F(l,null,{default:C((()=>[T])),_:1})])),_:2},1032,["onConfirm"]),F(l,{type:"primary",onClick:e.handleCopy},{default:C((()=>[A])),_:1},8,["onClick"])])),_:2},1024)])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default R;
