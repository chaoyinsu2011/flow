import{k as a,ad as e,a as r,f as t,u as s,K as n,o,n as p,Q as u,Y as m,s as i,q as c}from"./vendor.56d2c57f.js";import{_ as d}from"./PageWrapper.37b62bcf.js";import"./index.574e7466.js";import"./usePageContext.568cee97.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var f=a({name:"TestTab",components:{PageWrapper:d,Input:e},setup(){const{currentRoute:a}=r();return{params:t((()=>s(a).params))}}});const l=c("br",null,null,-1),j=m(" Keep Alive ");f.render=function(a,e,r,t,s,d){const f=n("Input"),b=n("PageWrapper");return o(),p(b,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:u((()=>[m(" Current Param : "+i(a.params)+" ",1),l,j,c(f)])),_:1})};export default f;
