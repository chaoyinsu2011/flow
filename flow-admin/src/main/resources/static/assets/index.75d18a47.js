import{_ as e}from"./TableImg.69b87631.js";import{f as o}from"./BasicForm.ccc180d0.js";import{u as i}from"./useTable.96fb9503.js";import{a as t}from"./system.504cf874.js";import{b as n}from"./index.cf90a7d3.js";import{_ as s,c as a,s as r}from"./DeptModal.631ecfcb.js";import{j as d,K as c,o as l,m,n as p,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.753834fe.js";import"./index.91a03d82.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.aa5494d2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";var b=d({name:"DeptManagement",components:{BasicTable:e,DeptModal:s,TableAction:o},setup(){const[e,{openModal:o}]=n(),[s,{reload:d}]=i({title:"部门列表",api:t,columns:a,formConfig:{labelWidth:120,schemas:r},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:s,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=u(" 新增部门 ");b.render=function(e,o,i,t,n,s){const a=c("a-button"),r=c("TableAction"),d=c("BasicTable"),u=c("DeptModal");return l(),m("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(a,{type:"primary",onClick:e.handleCreate},{default:f((()=>[j])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;
