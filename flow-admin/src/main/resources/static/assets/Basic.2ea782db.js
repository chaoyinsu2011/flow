import{_ as e}from"./TableImg.375209e8.js";import"./BasicForm.de2d0bb0.js";import{getBasicColumns as o,getBasicData as i}from"./tableData.83d6955e.js";import{k as t,r as a,K as n,o as r,n as s,q as d,Q as p,Y as l,s as c}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.906ec90d.js";import"./index.1f477f84.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.0a504584.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.55e358dc.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";/* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";var m=t({components:{BasicTable:e},setup(){const e=a(!1),t=a(!1),n=a(!0),r=a(!0),s=a(!1);return{columns:o(),data:i(),canResize:e,loading:t,striped:n,border:r,toggleStriped:function(){n.value=!n.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1,s.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:s}}});const u={class:"p-4"},g=l(" 开启loading ");m.render=function(e,o,i,t,a,m){const f=n("a-button"),b=n("BasicTable");return r(),s("div",u,[d(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:p((()=>[d(f,{type:"primary",onClick:e.toggleCanResize},{default:p((()=>[l(c(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),d(f,{type:"primary",onClick:e.toggleBorder},{default:p((()=>[l(c(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),d(f,{type:"primary",onClick:e.toggleLoading},{default:p((()=>[g])),_:1},8,["onClick"]),d(f,{type:"primary",onClick:e.toggleStriped},{default:p((()=>[l(c(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default m;
