import{J as e,l as t,b5 as o,c as i,$ as s}from"./index.ffeb6485.js";import{j as r,co as n,i as a,u as m,K as d,o as p,m as c,n as g,X as u,V as f}from"./vendor.686fd1d4.js";import{c as j,u as b}from"./index.b905f7d5.js";import l from"./SessionTimeoutLogin.1a5558a0.js";import"./index.2c6ac8c4.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.2d93cbb4.js";import"./useContentViewHeight.7085396b.js";/* empty css              *//* empty css              */import"./useSortable.e687761f.js";import"./lock.81cd3f60.js";import"./Login.5c16b4bd.js";import"./LoginForm.3cd913f1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.5dea5c20.js";import"./ForgetPasswordForm.08a31468.js";import"./index.f6d89420.js";import"./RegisterForm.92597fc7.js";import"./index.dc4f899a.js";import"./MobileForm.a3325fd5.js";import"./QrCodeForm.4fbce950.js";import"./index.5fb176bc.js";import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";var x=r({name:"LayoutFeatures",components:{BackTop:n,LayoutLockPage:j((()=>e((()=>import("./index.c4d92c67.js")),["/assets/index.c4d92c67.js","/assets/LockPage.60a81382.js","/assets/LockPage.ee8eff52.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.ffeb6485.js","/assets/index.b89ee803.css","/assets/lock.81cd3f60.js","/assets/header.d801b988.js"]))),SettingDrawer:j((()=>e((()=>import("./index.4b643363.js").then((function(e){return e.i}))),["/assets/index.4b643363.js","/assets/index.6d85b653.css","/assets/index.1db0f76a.js","/assets/index.bb8cb3fb.css","/assets/index.864ac48e.css","/assets/index.ffeb6485.js","/assets/index.b89ee803.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.b905f7d5.js","/assets/index.39cf26f1.css","/assets/index.4881b566.css","/assets/index.2c6ac8c4.js","/assets/index.140aa9f4.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/useFrameKeepAlive.2d93cbb4.js","/assets/useContentViewHeight.7085396b.js","/assets/useSortable.e687761f.js","/assets/lock.81cd3f60.js"]))),SessionTimeoutLogin:l},setup(){const{getUseOpenBackTop:e,getShowSettingButton:r,getSettingButtonPosition:n,getFullContent:d}=t(),p=o(),{prefixCls:c}=i("setting-drawer-fearure"),{getShowHeader:g}=b(),u=a((()=>p.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a((()=>{if(!m(r))return!1;const e=m(n);return e===s.AUTO?!m(g)||m(d):e===s.FIXED})),prefixCls:c,getIsSessionTimeout:u}}});x.render=function(e,t,o,i,s,r){const n=d("LayoutLockPage"),a=d("BackTop"),m=d("SettingDrawer"),j=d("SessionTimeoutLogin");return p(),c(f,null,[g(n),e.getUseOpenBackTop?(p(),c(a,{key:0,target:e.getTarget},null,8,["target"])):u("",!0),e.getIsFixedSettingDrawer?(p(),c(m,{key:1,class:e.prefixCls},null,8,["class"])):u("",!0),e.getIsSessionTimeout?(p(),c(j,{key:2})):u("",!0)],64)};export default x;
