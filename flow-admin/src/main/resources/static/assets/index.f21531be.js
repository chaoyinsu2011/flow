import{_ as e}from"./TableImg.96b6e2f6.js";import{f as t}from"./BasicForm.99631a91.js";import{u as o}from"./useTable.ee2b6f63.js";import{g as i}from"./system.656162d2.js";import{P as n}from"./index.52d50d5a.js";import s from"./DeptTree.6152c11e.js";import{b as r}from"./index.08cdb95c.js";import{_ as a,c as d,s as c}from"./AccountModal.0410970f.js";import{j as l,K as m,o as p,m as f,Q as u,n as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.29bf2c0c.js";import"./index.ffeb6485.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";import"./useContentViewHeight.7085396b.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.a6f2d871.js";import"./useContextMenu.9fd55a1d.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:n,DeptTree:s,AccountModal:a,TableAction:t},setup(){const[e,{openModal:t}]=r(),[n,{reload:s,updateTableDataRecord:a}]=o({title:"账号列表",api:i,rowKey:"id",columns:d,formConfig:{labelWidth:120,schemas:c},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:n,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:t}){if(e){a(t.id,t)}else s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=j("新增账号");x.render=function(e,t,o,i,n,s){const r=m("DeptTree"),a=m("a-button"),d=m("TableAction"),c=m("BasicTable"),l=m("AccountModal"),j=m("PageWrapper");return p(),f(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:u((()=>[b(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),b(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:u((()=>[b(a,{type:"primary",onClick:e.handleCreate},{default:u((()=>[g])),_:1},8,["onClick"])])),action:u((({record:t})=>[b(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;
