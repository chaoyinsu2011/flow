import{_ as e}from"./TableImg.4a5f8f0f.js";import{f as i}from"./BasicForm.7c543d71.js";import{u as o}from"./useTable.a87cba2e.js";import{d as n}from"./system.b8f37ffa.js";import{u as t}from"./index.8f4069d1.js";import{_ as r,c as s,s as a}from"./MenuDrawer.74f7d5b6.js";import{j as d,K as c,o as m,m as l,n as f,Q as p,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.42b3028e.js";import"./index.29a0a4fb.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.44f8140f.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a100a250.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.e5b0725d.js";/* empty css              *//* empty css              *//* empty css              */import"./download.173d4fef.js";import"./base64Conver.bb012c73.js";import"./index.186d815d.js";/* empty css              */var b=d({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:r,TableAction:i},setup(){const[e,{openDrawer:i}]=t(),[r,{reload:d}]=o({title:"菜单列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:a},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=u(" 新增菜单 ");b.render=function(e,i,o,n,t,r){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),u=c("MenuDrawer");return m(),l("div",null,[f(d,{onRegister:e.registerTable},{toolbar:p((()=>[f(s,{type:"primary",onClick:e.handleCreate},{default:p((()=>[j])),_:1},8,["onClick"])])),action:p((({record:i})=>[f(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;
