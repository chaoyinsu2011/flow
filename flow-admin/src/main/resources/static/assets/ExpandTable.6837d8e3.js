import{_ as e}from"./TableImg.96b6e2f6.js";import{f as o}from"./BasicForm.99631a91.js";import{u as i}from"./useTable.ee2b6f63.js";import{P as t}from"./index.52d50d5a.js";import{getBasicColumns as n}from"./tableData.83d6955e.js";import{d as r}from"./table.8c22cc61.js";import{j as s,K as a,o as d,m as p,Q as c,n as l,q as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.29bf2c0c.js";import"./index.ffeb6485.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08cdb95c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";import"./useContentViewHeight.7085396b.js";/* empty css              *//* empty css              */var f=s({components:{BasicTable:e,TableAction:o,PageWrapper:t},setup(){const[e]=i({api:r,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:n(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});f.render=function(e,o,i,t,n,r){const s=a("TableAction"),f=a("BasicTable"),b=a("PageWrapper");return d(),p(b,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:c((()=>[l(f,{onRegister:e.registerTable},{expandedRowRender:c((({record:e})=>[l("span",null,"No: "+m(e.no),1)])),action:c((({record:o})=>[l(s,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,o)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])),_:1})};export default f;
