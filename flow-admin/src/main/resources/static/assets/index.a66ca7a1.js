import{_ as e}from"./TableImg.69b87631.js";import{f as i}from"./BasicForm.ccc180d0.js";import{u as o}from"./useTable.96fb9503.js";import{g as t,d as n}from"./dicType.13762179.js";import{_ as a,c as s,s as d}from"./DicTypeModal.d39e2b9b.js";import{h as r}from"./index.91a03d82.js";import{b as c}from"./index.cf90a7d3.js";import{j as l,K as m,o as p,m as f,n as u,Q as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.753834fe.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.aa5494d2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";const{createMessage:h}=r();var x=l({name:"GetDic",components:{BasicTable:e,TableAction:i,GetDicModal:a},setup(){const[e,{openModal:i,setModalProps:a}]=c(),[r,{reload:l}]=o({title:"列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:d,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,pagination:!1,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:r,registerModal:e,handleCreate:function(){a({title:"新增字典分类"}),i(!0,{isUpdate:!1})},handleEdit:function(e,o){o.stopPropagation(),a({title:"修改字典分类"}),i(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,o){o.stopPropagation(),a({title:"新增【"+e.name+"】的子分类"}),e={pid:e.id},i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},doSearch:function(){l()}}}});const g=j(" 新增 ");x.render=function(e,i,o,t,n,a){const s=m("a-button"),d=m("TableAction"),r=m("BasicTable"),c=m("GetDicModal");return p(),f("div",null,[u(r,{onRegister:e.registerTable},{toolbar:b((()=>[u(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[g])),_:1},8,["onClick"])])),action:b((({record:i})=>[u(d,{actions:[{title:"添加子分类",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,i)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
