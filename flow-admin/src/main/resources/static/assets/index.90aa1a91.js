import{_ as e}from"./TableImg.f5e002b4.js";import{f as o}from"./BasicForm.4f71108f.js";import{u as t}from"./useTable.38359fc9.js";import{_ as n,g as i,c as s,s as r,d as a}from"./SystemConfigModal.8e22fa98.js";import{b as d}from"./useModal.919850c0.js";import{k as c,K as l,o as m,n as f,q as u,Q as p,Y as b}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";import"./index.574e7466.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";var j=c({name:"SystemConfig",components:{BasicTable:e,TableAction:o,SystemConfigModal:n},setup(){const[e,{openModal:o}]=d(),[n,{reload:c}]=t({title:"列表",api:i,columns:s,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e){e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){a([e.id]).then((()=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const h=b(" 新增 ");j.render=function(e,o,t,n,i,s){const r=l("a-button"),a=l("TableAction"),d=l("BasicTable"),c=l("SystemConfigModal");return m(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:p((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:p((()=>[h])),_:1},8,["onClick"])])),action:p((({record:o})=>[u(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
