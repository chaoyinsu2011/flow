import{_ as e}from"./TableImg.375209e8.js";import{f as o}from"./BasicForm.de2d0bb0.js";import{u as t}from"./useTable.5c7aa523.js";import{g as i,d as n}from"./category.62c9b87d.js";import{_ as a,c as r,s}from"./CategoryModal.52c37777.js";import{g as d}from"./index.1f477f84.js";import{b as l}from"./useModal.0a504584.js";import{k as c,K as p,o as m,n as u,q as f,Q as b,Y as g}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.906ec90d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.55e358dc.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";/* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";import"./company.0e3fabdb.js";const{createMessage:j}=d();var h=c({name:"Category",components:{BasicTable:e,TableAction:o,CategoryModal:a},setup(){const[e,{openModal:o,setModalProps:a}]=l(),[d,{reload:c}]=t({title:"列表",api:i,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(e){a({title:"新增流程分类"}),o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),a({title:"修改流程分类"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),a({title:"新增【"+e.name+"】的子分类"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e,o){o.stopPropagation(),e.children&&e.children.length>0?j.warning("有子节点，不能删除！"):n([e.id]).then((e=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const C=g(" 新增 ");h.render=function(e,o,t,i,n,a){const r=p("a-button"),s=p("TableAction"),d=p("BasicTable"),l=p("CategoryModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[C])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(s,{actions:[{title:"添加子分类",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default h;
