import{_ as e}from"./TableImg.28dd5cba.js";import{f as t}from"./BasicForm.4961b69c.js";import{u as i}from"./useTable.f161cb20.js";import{d as n}from"./table.678c8826.js";import{k as o,K as a,o as s,n as d,q as r,Q as l}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";import"./index.f36f9bca.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.c70d8b8c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";const c=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",auth:"test"},{title:"状态",dataIndex:"status"},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var p=o({components:{BasicTable:e,TableAction:t},setup(){const[e]=i({title:"TableAction组件及固定列示例",api:n,columns:c,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleEdit:function(e){},handleDelete:function(e){},handleOpen:function(e){}}}});const m={class:"p-4"};p.render=function(e,t,i,n,o,c){const p=a("TableAction"),b=a("BasicTable");return s(),d("div",m,[r(b,{onRegister:e.registerTable},{action:l((({record:t})=>[r(p,{actions:[{label:"编辑",onClick:e.handleEdit.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,t)},ifShow:e=>"enable"!==t.status},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:e.handleOpen.bind(null,t)},ifShow:()=>"enable"===t.status},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:e.handleOpen.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default p;
