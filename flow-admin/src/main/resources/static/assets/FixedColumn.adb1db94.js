import{_ as e}from"./TableImg.96b6e2f6.js";import{f as i}from"./BasicForm.99631a91.js";import{u as t}from"./useTable.ee2b6f63.js";import{d as o}from"./table.8c22cc61.js";import{j as n,K as d,o as a,m as s,n as r,Q as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.29bf2c0c.js";import"./index.ffeb6485.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08cdb95c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";const l=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=n({components:{BasicTable:e,TableAction:i},setup(){const[e]=t({title:"TableAction组件及固定列示例",api:o,columns:l,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,i,t,o,n,l){const m=d("TableAction"),f=d("BasicTable");return a(),s("div",p,[r(f,{onRegister:e.registerTable},{action:c((({record:i})=>[r(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;
