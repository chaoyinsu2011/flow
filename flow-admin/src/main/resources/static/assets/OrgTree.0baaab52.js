import{j as e,aJ as t,r as a,I as r,K as n,at as o,w as s,o as i,m as l,n as d}from"./vendor.686fd1d4.js";import{_ as c}from"./Tree.vue_vue&type=style&index=0&lang.8420d232.js";import{a as u}from"./dept.7628fdda.js";import{b4 as m}from"./index.99f998d8.js";import"./useContextMenu.969b638f.js";/* empty css              */var p=e({name:"OrgTree",components:{BasicTree:c,Spin:t},emits:["select"],setup(e,{emit:t}){const n=a([]),o=a(!1);function s(){return e=this,t=null,a=function*(){o.value=!0,u().then((e=>{n.value=e})).finally((()=>{o.value=!1}))},new Promise(((r,n)=>{var o=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,s);i((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{s()})),{treeData:n,treeLoading:o,handleSelect:function(e,a){const r=m(n.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",r)}}}});const f={class:"org-tree bg-white m-4 mr-0 overflow-hidden"};p.render=function(e,t,a,r,c,u){const m=n("BasicTree"),p=o("loading");return s((i(),l("div",f,[d(m,{title:"组织",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default p;
