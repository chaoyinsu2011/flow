import{u as e}from"./useContextMenu.6d56ec4d.js";import{ae as t,g as n}from"./index.1f477f84.js";import{_ as a}from"./PageWrapper.92431b9d.js";import{k as l,K as o,o as i,n as s,Q as r,q as c,Y as p}from"./vendor.9d9efc92.js";/* empty css              */import"./usePageContext.69aad0be.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var d=l({components:{CollapseContainer:t,PageWrapper:a},setup(){const[t]=e(),{createMessage:a}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{a.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{a.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{a.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const u=p(" Right Click on me "),m=p(" Right Click on me ");d.render=function(e,t,n,a,l,p){const d=o("a-button"),b=o("CollapseContainer"),f=o("PageWrapper");return i(),s(f,{title:"右键菜单示例"},{default:r((()=>[c(b,{title:"Simple"},{default:r((()=>[c(d,{type:"primary",onContextmenu:e.handleContext},{default:r((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),c(b,{title:"Multiple",class:"mt-4"},{default:r((()=>[c(d,{type:"primary",onContextmenu:e.handleMultipleContext},{default:r((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default d;
