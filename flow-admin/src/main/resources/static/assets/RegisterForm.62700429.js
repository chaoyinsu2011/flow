import{_ as e,u as a,a as o,b as s,L as l}from"./LoginFormTitle.19e53e99.js";import{j as t,aL as r,aU as n,ad as i,aT as d,r as m,z as c,i as u,u as p,K as f,o as g,m as h,n as v,Q as x,Y as y,q as w,V as b,X as k}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              */import{S as D}from"./index.4641642c.js";import{C as F}from"./index.b526d419.js";import{e as I}from"./index.99f998d8.js";var P=t({name:"RegisterPasswordForm",components:{Button:r,Form:n,FormItem:n.Item,Input:i,InputPassword:i.Password,Checkbox:d,StrengthMeter:D,CountdownInput:F,LoginFormTitle:e},setup(){const{t:e}=I(),{handleBackLogin:t,getLoginState:r}=a(),n=m(),i=m(!1),d=c({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:f}=o(d),{validForm:g}=s(n);return{t:e,formRef:n,formData:d,getFormRules:f,handleRegister:function(){return e=this,a=null,o=function*(){yield g()},new Promise(((s,l)=>{var t=e=>{try{n(o.next(e))}catch(a){l(a)}},r=e=>{try{n(o.throw(e))}catch(a){l(a)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(t,r);n((o=o.apply(e,a)).next())}));var e,a,o},loading:i,handleBackLogin:t,getShow:u((()=>p(r)===l.REGISTER))}}});P.render=function(e,a,o,s,l,t){const r=f("LoginFormTitle"),n=f("Input"),i=f("FormItem"),d=f("CountdownInput"),m=f("StrengthMeter"),c=f("InputPassword"),u=f("Checkbox"),p=f("Button"),D=f("Form");return e.getShow?(g(),h(b,{key:0},[v(r,{class:"enter-x"}),v(D,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:x((()=>[v(i,{name:"account",class:"enter-x"},{default:x((()=>[v(n,{size:"large",value:e.formData.account,"onUpdate:value":a[1]||(a[1]=a=>e.formData.account=a),placeholder:e.t("sys.login.userName")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"mobile",class:"enter-x"},{default:x((()=>[v(n,{size:"large",value:e.formData.mobile,"onUpdate:value":a[2]||(a[2]=a=>e.formData.mobile=a),placeholder:e.t("sys.login.mobile")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"sms",class:"enter-x"},{default:x((()=>[v(d,{size:"large",value:e.formData.sms,"onUpdate:value":a[3]||(a[3]=a=>e.formData.sms=a),placeholder:e.t("sys.login.smsCode")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"password",class:"enter-x"},{default:x((()=>[v(m,{size:"large",value:e.formData.password,"onUpdate:value":a[4]||(a[4]=a=>e.formData.password=a),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"confirmPassword",class:"enter-x"},{default:x((()=>[v(c,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":a[5]||(a[5]=a=>e.formData.confirmPassword=a),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])])),_:1}),v(i,{class:"enter-x",name:"policy"},{default:x((()=>[v(u,{checked:e.formData.policy,"onUpdate:checked":a[6]||(a[6]=a=>e.formData.policy=a),size:"small"},{default:x((()=>[y(w(e.t("sys.login.policy")),1)])),_:1},8,["checked"])])),_:1}),v(p,{type:"primary",class:"enter-x",size:"large",block:"",onClick:e.handleRegister,loading:e.loading},{default:x((()=>[y(w(e.t("sys.login.registerButton")),1)])),_:1},8,["onClick","loading"]),v(p,{size:"large",block:"",class:"enter-x mt-4",onClick:e.handleBackLogin},{default:x((()=>[y(w(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])),_:1},8,["model","rules"])],64)):k("",!0)};export default P;
