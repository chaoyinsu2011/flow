var r;import e from"./DetailModal.cf6c3303.js";import{_ as o}from"./TableImg.96b6e2f6.js";import{f as i}from"./BasicForm.99631a91.js";import{u as t}from"./useTable.ee2b6f63.js";import{b as s}from"./index.08cdb95c.js";import{aw as a,e as n,a$ as l}from"./index.ffeb6485.js";import{getColumns as c}from"./data.c1b02f4b.js";import{j as d,r as f,C as m,J as p,am as u,K as b,o as j,m as x,V as g,ah as y,w as v,v as E,n as h,Q as w,Y as C,q as D}from"./vendor.686fd1d4.js";import"./index.bc94b166.js";/* empty css              */import"./useDescription.fb819ba4.js";/* empty css              *//* empty css              */import"./useForm.29bf2c0c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";(r||(r={})).Error="/error";var L=d({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:i},setup(){const e=f(),o=f([]),{t:i}=n(),d=l(),[b,{setTableData:j}]=t({title:i("sys.errorLog.tableTitle"),columns:c(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[x,{openModal:g}]=s();return m((()=>d.getErrorLogInfoList),(r=>{p((()=>{j(u(r))}))}),{immediate:!0}),{register:b,registerModal:x,handleDetail:function(r){e.value=r,g(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,i=function*(){yield a.get({url:r.Error})},new Promise(((r,t)=>{var s=r=>{try{n(i.next(r))}catch(e){t(e)}},a=r=>{try{n(i.throw(r))}catch(e){t(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((i=i.apply(e,o)).next())}));var e,o,i},imgList:o,rowInfo:e,t:i}}});const T={class:"p-4"};L.render=function(r,e,o,i,t,s){const a=b("DetailModal"),n=b("a-button"),l=b("TableAction"),c=b("BasicTable");return j(),x("div",T,[(j(!0),x(g,null,y(r.imgList,(r=>v((j(),x("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(a,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(c,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(l,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default L;
