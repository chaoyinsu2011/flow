import{C as e,D as t}from"./index.99f998d8.js";import{u as n}from"./useWindowSizeFn.d82e06bf.js";import{r as i,i as o,u as r}from"./vendor.686fd1d4.js";const a=Symbol();function s(){return t(a)}const u=i(0),f=i(0);function h(){return{headerHeightRef:u,footerHeightRef:f,setHeaderHeight:function(e){u.value=e},setFooterHeight:function(e){f.value=e}}}function c(){const t=i(window.innerHeight),s=i(window.innerHeight),f=o((()=>r(t)-r(u)||0));n((()=>{t.value=window.innerHeight}),100,{immediate:!0}),e({contentHeight:f,setPageHeight:function(e){return t=this,n=null,i=function*(){s.value=e},new Promise(((e,o)=>{var r=e=>{try{s(i.next(e))}catch(t){o(t)}},a=e=>{try{s(i.throw(e))}catch(t){o(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,a);s((i=i.apply(t,n)).next())}));var t,n,i},pageHeight:s},a,{native:!0})}export{h as a,s as b,c as u};
