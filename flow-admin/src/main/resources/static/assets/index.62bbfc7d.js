import{u as e}from"./useContextMenu.969b638f.js";import{ag as t,h as n}from"./index.99f998d8.js";import{P as i}from"./index.1d2e788a.js";import{j as o,K as a,o as l,m as s,Q as r,n as d,Y as c}from"./vendor.686fd1d4.js";/* empty css              */import"./useContentViewHeight.1a9d325a.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var p=o({components:{CollapseContainer:t,PageWrapper:i},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const u=c(" Right Click on me "),m=c(" Right Click on me ");p.render=function(e,t,n,i,o,c){const p=a("a-button"),f=a("CollapseContainer"),b=a("PageWrapper");return l(),s(b,{title:"右键菜单示例"},{default:r((()=>[d(f,{title:"Simple"},{default:r((()=>[d(p,{type:"primary",onContextmenu:e.handleContext},{default:r((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),d(f,{title:"Multiple",class:"mt-4"},{default:r((()=>[d(p,{type:"primary",onContextmenu:e.handleMultipleContext},{default:r((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default p;
