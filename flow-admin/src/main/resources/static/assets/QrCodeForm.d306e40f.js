import{_ as e,u as s,L as n}from"./LoginFormTitle.1125c7f6.js";import{j as a,aL as t,aV as o,i as r,u as i,K as l,o as d,m as c,n as m,Q as f,Y as g,q as u,V as x,X as p}from"./vendor.686fd1d4.js";/* empty css              */import{Q as j}from"./index.ab8e0166.js";import{e as v}from"./index.29a0a4fb.js";import"./download.173d4fef.js";import"./base64Conver.bb012c73.js";var b=a({name:"QrCodeForm",components:{Button:t,QrCode:j,Divider:o,LoginFormTitle:e},setup(){const{t:e}=v(),{handleBackLogin:a,getLoginState:t}=s();return{t:e,handleBackLogin:a,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(t)===n.QR_CODE))}}});const C={class:"enter-x min-w-64 min-h-64"};b.render=function(e,s,n,a,t,o){const r=l("LoginFormTitle"),i=l("QrCode"),j=l("Divider"),v=l("Button");return e.getShow?(d(),c(x,{key:0},[m(r,{class:"enter-x"}),m("div",C,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(j,{class:"enter-x"},{default:f((()=>[g(u(e.t("sys.login.scanSign")),1)])),_:1}),m(v,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:f((()=>[g(u(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default b;
