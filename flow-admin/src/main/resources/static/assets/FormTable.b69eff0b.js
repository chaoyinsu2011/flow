import{_ as e}from"./TableImg.4a5f8f0f.js";import"./BasicForm.7c543d71.js";import{u as o}from"./useTable.a87cba2e.js";import{getBasicColumns as t,getFormConfig as i}from"./tableData.83d6955e.js";import{d as r}from"./table.ba919866.js";import{j as s,K as a,o as m,m as d,Q as n,n as p,Y as f}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.42b3028e.js";import"./index.29a0a4fb.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.44f8140f.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a100a250.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.e5b0725d.js";/* empty css              *//* empty css              *//* empty css              */import"./download.173d4fef.js";import"./base64Conver.bb012c73.js";import"./index.186d815d.js";var c=s({components:{BasicTable:e},setup(){const[e,{getForm:s}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:i(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const j=f(" custom-slot "),b=f("获取表单数据");c.render=function(e,o,t,i,r,s){const f=a("a-button"),c=a("BasicTable");return m(),d(c,{onRegister:e.registerTable},{"form-custom":n((()=>[j])),toolbar:n((()=>[p(f,{type:"primary",onClick:e.getFormValues},{default:n((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default c;
