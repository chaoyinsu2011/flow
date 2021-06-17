import{k as e,bz as s,aV as t,f as a,l as o,m as r,K as l,ar as u,o as n,n as i,x as m,q as c,s as d,Y as p,X as f,w as E}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import R from"./CurrentPermissionMode.6c136740.js";import{ai as _,f as S,b0 as y}from"./index.574e7466.js";import{_ as P}from"./Authority.vue_vue&type=script&lang.4d520226.js";import{_ as T}from"./PageWrapper.37b62bcf.js";import"./usePageContext.568cee97.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var x=e({components:{Alert:s,PageWrapper:T,CurrentPermissionMode:R,Divider:t,Authority:P},setup(){const{changeRole:e,hasPermission:s}=_(),t=S();return{userStore:t,RoleEnum:y,isSuper:a((()=>t.getRoleList.includes(y.SUPER))),isTest:a((()=>t.getRoleList.includes(y.TEST))),changeRole:e,hasPermission:s}}});const v=m();o("data-v-95aee818");const g=p(" 当前角色: "),h={class:"mt-4"},j=p(" 权限切换(请先切换权限模式为前端角色权限模式): "),U=p("组件方式判断权限(有需要可以自行全局注册)"),b=p(" 拥有super角色权限可见 "),k=p(" 拥有test角色权限可见 "),C=p(" 拥有[test,super]角色权限可见 "),A=p("函数方式方式判断权限(适用于函数内部过滤)"),M=p(" 拥有super角色权限可见 "),L=p(" 拥有test角色权限可见 "),W=p(" 拥有[test,super]角色权限可见 "),w=p("指令方式方式判断权限(该方式不能动态修改权限.)"),D=p(" 拥有super角色权限可见 "),q=p(" 拥有test角色权限可见 "),z=p(" 拥有[test,super]角色权限可见 ");r();const B=v(((e,s,t,a,o,r)=>{const m=l("CurrentPermissionMode"),R=l("Alert"),_=l("a-button"),S=l("a-button-group"),y=l("Divider"),P=l("Authority"),T=l("PageWrapper"),x=u("auth");return n(),i(T,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:v((()=>[c(m),c("p",null,[g,c("a",null,d(e.userStore.getRoleList),1)]),c(R,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),c("div",h,[j,c(S,null,{default:v((()=>[c(_,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:v((()=>[p(d(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),c(_,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:v((()=>[p(d(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),c(y,null,{default:v((()=>[U])),_:1}),c(P,{value:e.RoleEnum.SUPER},{default:v((()=>[c(_,{type:"primary",class:"mx-4"},{default:v((()=>[b])),_:1})])),_:1},8,["value"]),c(P,{value:e.RoleEnum.TEST},{default:v((()=>[c(_,{color:"success",class:"mx-4"},{default:v((()=>[k])),_:1})])),_:1},8,["value"]),c(P,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:v((()=>[c(_,{color:"error",class:"mx-4"},{default:v((()=>[C])),_:1})])),_:1},8,["value"]),c(y,null,{default:v((()=>[A])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(n(),i(_,{key:0,type:"primary",class:"mx-4"},{default:v((()=>[M])),_:1})):f("",!0),e.hasPermission(e.RoleEnum.TEST)?(n(),i(_,{key:1,color:"success",class:"mx-4"},{default:v((()=>[L])),_:1})):f("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(n(),i(_,{key:2,color:"error",class:"mx-4"},{default:v((()=>[W])),_:1})):f("",!0),c(y,null,{default:v((()=>[w])),_:1}),E(c(_,{type:"primary",class:"mx-4"},{default:v((()=>[D])),_:1},512),[[x,e.RoleEnum.SUPER]]),E(c(_,{color:"success",class:"mx-4"},{default:v((()=>[q])),_:1},512),[[x,e.RoleEnum.TEST]]),E(c(_,{color:"error",class:"mx-4"},{default:v((()=>[z])),_:1},512),[[x,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));x.render=B,x.__scopeId="data-v-95aee818";export default x;
