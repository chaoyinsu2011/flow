import{j as e,aJ as a,r as n,i as s,u as t,I as r,J as i,K as o,o as l,m as p,n as c,x as f}from"./vendor.686fd1d4.js";import{p as d,c as m,ad as u}from"./index.99f998d8.js";import{u as g}from"./useWindowSizeFn.d82e06bf.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:d.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:p}=m("iframe-page");g(f,150,{immediate:!0});const c=s((()=>({height:`${t(o)}px`})));function f(){const e=t(l);if(!e)return;let{top:n}=u(e);n+=20,a.value=n,o.value=window.innerHeight-n,document.documentElement.clientHeight,e.style.height="100%"}function d(){e.value=!1,f()}return r((()=>{e.value=!0,i((()=>{const e=t(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{d()})):e.onload=()=>{d()}}))})),{getWrapStyle:c,loading:e,frameRef:l,prefixCls:p}}});const h=f(),x=h(((e,a,n,s,t,r)=>{const i=o("Spin");return l(),p("div",{class:e.prefixCls,style:e.getWrapStyle},[c(i,{wrapperClassName:"custom-spin-container",spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[c("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-3c0be771";export default v;
