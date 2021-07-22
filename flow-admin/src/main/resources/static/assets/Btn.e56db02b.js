import{j as e,bB as s,aV as t,i as a,k as o,l,K as r,at as u,o as n,m as i,x as m,n as d,q as c,Y as p,X as f,w as E}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import R from"./CurrentPermissionMode.2e0984d8.js";import{ak as S,f as _,b1 as P}from"./index.91a03d82.js";import{A as T}from"./index.3350134f.js";import{P as x}from"./index.27db6639.js";import"./useContentViewHeight.5e4dffd7.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var y=e({components:{Alert:s,PageWrapper:x,CurrentPermissionMode:R,Divider:t,Authority:T},setup(){const{changeRole:e,hasPermission:s}=S(),t=_();return{userStore:t,RoleEnum:P,isSuper:a((()=>t.getRoleList.includes(P.SUPER))),isTest:a((()=>t.getRoleList.includes(P.TEST))),changeRole:e,hasPermission:s}}});const h=m();o("data-v-95aee818");const v=p(" 当前角色: "),g={class:"mt-4"},j=p(" 权限切换(请先切换权限模式为前端角色权限模式): "),U=p("组件方式判断权限(有需要可以自行全局注册)"),b=p(" 拥有super角色权限可见 "),k=p(" 拥有test角色权限可见 "),C=p(" 拥有[test,super]角色权限可见 "),A=p("函数方式方式判断权限(适用于函数内部过滤)"),w=p(" 拥有super角色权限可见 "),M=p(" 拥有test角色权限可见 "),L=p(" 拥有[test,super]角色权限可见 "),W=p("指令方式方式判断权限(该方式不能动态修改权限.)"),B=p(" 拥有super角色权限可见 "),D=p(" 拥有test角色权限可见 "),V=p(" 拥有[test,super]角色权限可见 ");l();const q=h(((e,s,t,a,o,l)=>{const m=r("CurrentPermissionMode"),R=r("Alert"),S=r("a-button"),_=r("a-button-group"),P=r("Divider"),T=r("Authority"),x=r("PageWrapper"),y=u("auth");return n(),i(x,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:h((()=>[d(m),d("p",null,[v,d("a",null,c(e.userStore.getRoleList),1)]),d(R,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),d("div",g,[j,d(_,null,{default:h((()=>[d(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:h((()=>[p(c(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),d(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:h((()=>[p(c(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),d(P,null,{default:h((()=>[U])),_:1}),d(T,{value:e.RoleEnum.SUPER},{default:h((()=>[d(S,{type:"primary",class:"mx-4"},{default:h((()=>[b])),_:1})])),_:1},8,["value"]),d(T,{value:e.RoleEnum.TEST},{default:h((()=>[d(S,{color:"success",class:"mx-4"},{default:h((()=>[k])),_:1})])),_:1},8,["value"]),d(T,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:h((()=>[d(S,{color:"error",class:"mx-4"},{default:h((()=>[C])),_:1})])),_:1},8,["value"]),d(P,null,{default:h((()=>[A])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(n(),i(S,{key:0,type:"primary",class:"mx-4"},{default:h((()=>[w])),_:1})):f("",!0),e.hasPermission(e.RoleEnum.TEST)?(n(),i(S,{key:1,color:"success",class:"mx-4"},{default:h((()=>[M])),_:1})):f("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(n(),i(S,{key:2,color:"error",class:"mx-4"},{default:h((()=>[L])),_:1})):f("",!0),d(P,null,{default:h((()=>[W])),_:1}),E(d(S,{type:"primary",class:"mx-4"},{default:h((()=>[B])),_:1},512),[[y,e.RoleEnum.SUPER]]),E(d(S,{color:"success",class:"mx-4"},{default:h((()=>[D])),_:1},512),[[y,e.RoleEnum.TEST]]),E(d(S,{color:"error",class:"mx-4"},{default:h((()=>[V])),_:1},512),[[y,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));y.render=q,y.__scopeId="data-v-95aee818";export default y;
