import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.93f19dfa.js";import{t}from"./data.5e96733f.js";import{P as a}from"./index.c1dc3b6b.js";import{j as r,a1 as i,bZ as n,b_ as o,K as s,o as c,m as l,Q as d,n as f}from"./vendor.686fd1d4.js";import"./index.04486bdf.js";import"./useContextMenu.1f0fede2.js";/* empty css              */import"./useContentViewHeight.c5b829cb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var p=r({components:{BasicTree:e,PageWrapper:a},setup:()=>({treeData:t,actionList:[{render:e=>i(n,{class:"ml-2",onClick:()=>{}})},{render:()=>i(o)}],getRightMenuList:function(e){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]},createIcon:function({level:e}){return 1===e?"ion:git-compare-outline":2===e?"ion:home":3===e?"ion:airplane":void 0}})});const u={class:"flex"};p.render=function(e,t,a,r,i,n){const o=s("BasicTree"),p=s("PageWrapper");return c(),l(p,{title:"Tree函数操作示例"},{default:d((()=>[f("div",u,[f(o,{class:"w-1/3",title:"右侧操作按钮/自定义图标",helpMessage:"帮助信息",treeData:e.treeData,actionList:e.actionList,renderIcon:e.createIcon},null,8,["treeData","actionList","renderIcon"]),f(o,{class:"w-1/3 mx-4",title:"右键菜单",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"]),f(o,{class:"w-1/3",title:"工具栏使用",toolbar:"",checkable:"",search:"",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])])),_:1})};export default p;
