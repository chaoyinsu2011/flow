import{_ as e}from"./TableImg.28dd5cba.js";import"./BasicForm.4961b69c.js";import{u as s}from"./useTable.f161cb20.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.678c8826.js";import{k as i,K as t,o as a,n,q as d,Q as m,s as p}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";import"./index.f36f9bca.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.c70d8b8c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";var c=i({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const b={class:"p-4"};c.render=function(e,s,o,r,i,c){const j=t("BasicTable");return a(),n("div",b,[d(j,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[d("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default c;
