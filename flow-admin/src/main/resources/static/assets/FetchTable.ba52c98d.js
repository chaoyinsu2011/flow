import{_ as e}from"./TableImg.f5e002b4.js";import"./BasicForm.4f71108f.js";import{u as o}from"./useTable.38359fc9.js";import{getBasicColumns as t}from"./tableData.83d6955e.js";import{d as r}from"./table.2a8a22a3.js";import{k as i,K as s,o as a,n,q as d,Q as m,Y as p}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";import"./index.574e7466.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.919850c0.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";var f=i({components:{BasicTable:e},setup(){const[e,{reload:i}]=o({title:"远程加载示例",api:r,columns:t()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const l={class:"p-4"},c=p(" 刷新当前页 "),j=p(" 刷新并返回第一页 ");f.render=function(e,o,t,r,i,p){const f=s("a-button"),u=s("BasicTable");return a(),n("div",l,[d(u,{onRegister:e.registerTable},{toolbar:m((()=>[d(f,{type:"primary",onClick:e.handleReloadCurrent},{default:m((()=>[c])),_:1},8,["onClick"]),d(f,{type:"primary",onClick:e.handleReload},{default:m((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default f;
