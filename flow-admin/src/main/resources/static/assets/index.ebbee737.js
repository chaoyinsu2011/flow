var r;import e from"./DetailModal.e6a1dea0.js";import{_ as o}from"./TableImg.f5e002b4.js";import{f as t}from"./BasicForm.4f71108f.js";import{u as i}from"./useTable.38359fc9.js";import{b as s}from"./useModal.919850c0.js";import{av as a,d as n,aY as l}from"./index.574e7466.js";import{getColumns as c}from"./data.6b616af3.js";import{k as d,r as m,D as f,J as p,am as u,K as j,o as b,n as g,V as x,ah as v,w as y,v as E,q as h,Q as w,Y as D,s as k}from"./vendor.56d2c57f.js";import"./Description.vue_vue&type=script&lang.aa875cc6.js";/* empty css              */import"./useDescription.4feee4b2.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";(r||(r={})).Error="/error";var C=d({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:t},setup(){const e=m(),o=m([]),{t:t}=n(),d=l(),[j,{setTableData:b}]=i({title:t("sys.errorLog.tableTitle"),columns:c(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[g,{openModal:x}]=s();return f((()=>d.getErrorLogInfoList),(r=>{p((()=>{b(u(r))}))}),{immediate:!0}),{register:j,registerModal:g,handleDetail:function(r){e.value=r,x(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,t=function*(){yield a.get({url:r.Error})},new Promise(((r,i)=>{var s=r=>{try{n(t.next(r))}catch(e){i(e)}},a=r=>{try{n(t.throw(r))}catch(e){i(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,o)).next())}));var e,o,t},imgList:o,rowInfo:e,t:t}}});const L={class:"p-4"};C.render=function(r,e,o,t,i,s){const a=j("DetailModal"),n=j("a-button"),l=j("TableAction"),c=j("BasicTable");return b(),g("div",L,[(b(!0),g(x,null,v(r.imgList,(r=>y((b(),g("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(a,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(c,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[D(k(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[D(k(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[D(k(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(l,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default C;
