import{j as e,aJ as t,r as a,I as r,K as n,at as o,w as s,o as i,m as l,n as c}from"./vendor.686fd1d4.js";import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.edbc4ea5.js";import{a as u}from"./dept.67a5ae84.js";import{b4 as m}from"./index.29a0a4fb.js";import"./useContextMenu.95380b03.js";/* empty css              */var p=e({name:"OrgTree",components:{BasicTree:d,Spin:t},emits:["select"],setup(e,{emit:t}){const n=a([]),o=a(!1);function s(){return e=this,t=null,a=function*(){o.value=!0,u().then((e=>{n.value=e})).finally((()=>{o.value=!1}))},new Promise(((r,n)=>{var o=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,s);i((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{s()})),{treeData:n,treeLoading:o,handleSelect:function(e,a){const r=m(n.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",r)}}}});const v={class:"org-tree bg-white m-4 mr-0 overflow-hidden"};p.render=function(e,t,a,r,d,u){const m=n("BasicTree"),p=o("loading");return s((i(),l("div",v,[c(m,{title:"组织",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default p;
