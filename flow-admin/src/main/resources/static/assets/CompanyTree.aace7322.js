import{j as e,aJ as t,r as a,I as n,K as r,at as o,w as s,o as i,m as l,n as c}from"./vendor.686fd1d4.js";import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.a6f2d871.js";import{g as m}from"./company.e946a487.js";import{b4 as u}from"./index.ffeb6485.js";import"./useContextMenu.9fd55a1d.js";/* empty css              */var p=e({name:"CompanyTree",components:{BasicTree:d,Spin:t},emits:["select"],setup(e,{emit:t}){const r=a([]),o=a(!1);function s(){return e=this,t=null,a=function*(){o.value=!0,m().then((e=>{r.value=e})).finally((()=>{o.value=!1}))},new Promise(((n,r)=>{var o=e=>{try{i(a.next(e))}catch(t){r(t)}},s=e=>{try{i(a.throw(e))}catch(t){r(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);i((a=a.apply(e,t)).next())}));var e,t,a}return n((()=>{s()})),{treeData:r,treeLoading:o,handleSelect:function(e,a){const n=u(r.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",n)}}}});const f={class:"company-tree bg-white m-4 mr-0 overflow-hidden"};p.render=function(e,t,a,n,d,m){const u=r("BasicTree"),p=o("loading");return s((i(),l("div",f,[c(u,{title:"公司",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default p;
