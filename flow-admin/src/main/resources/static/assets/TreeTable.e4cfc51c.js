import{_ as e}from"./TableImg.f5e002b4.js";import"./BasicForm.4f71108f.js";import{u as o}from"./useTable.38359fc9.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,K as r,o as a,n,q as p,Q as d,Y as l}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";import"./index.574e7466.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.919850c0.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:r}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:r}}});const c={class:"p-4"},f=l("展开全部"),j=l("折叠全部");m.render=function(e,o,t,s,i,l){const m=r("a-button"),b=r("BasicTable");return a(),n("div",c,[p(b,{onRegister:e.register},{toolbar:d((()=>[p(m,{type:"primary",onClick:e.expandAll},{default:d((()=>[f])),_:1},8,["onClick"]),p(m,{type:"primary",onClick:e.collapseAll},{default:d((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;
