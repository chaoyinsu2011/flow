import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.93b9c797.js";import{t}from"./data.2c592186.js";import{_ as a}from"./PageWrapper.5df89cd8.js";import{k as r,a1 as i,bV as o,bW as s,K as n,o as c,n as l,Q as p,q as d}from"./vendor.9d9efc92.js";import"./index.f36f9bca.js";import"./useContextMenu.e6e614fe.js";/* empty css              */import"./useExpose.0886c4eb.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var f=r({components:{BasicTree:e,PageWrapper:a},setup:()=>({treeData:t,actionList:[{render:e=>i(o,{class:"ml-2",onClick:()=>{}})},{render:()=>i(s)}],getRightMenuList:function(e){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]},createIcon:function({level:e}){return 1===e?"ion:git-compare-outline":2===e?"ion:home":3===e?"ion:airplane":void 0}})});const u={class:"flex"};f.render=function(e,t,a,r,i,o){const s=n("BasicTree"),f=n("PageWrapper");return c(),l(f,{title:"Tree函数操作示例"},{default:p((()=>[d("div",u,[d(s,{class:"w-1/3",title:"右侧操作按钮/自定义图标",helpMessage:"帮助信息",treeData:e.treeData,actionList:e.actionList,renderIcon:e.createIcon},null,8,["treeData","actionList","renderIcon"]),d(s,{class:"w-1/3 mx-4",title:"右键菜单",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"]),d(s,{class:"w-1/3",title:"工具栏使用",toolbar:"",checkable:"",search:"",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])])),_:1})};export default f;
