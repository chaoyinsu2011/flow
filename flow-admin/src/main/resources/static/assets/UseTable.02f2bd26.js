import{_ as e}from"./TableImg.4a5f8f0f.js";import"./BasicForm.7c543d71.js";import{u as o}from"./useTable.a87cba2e.js";import{getBasicColumns as t,getBasicShortColumns as n}from"./tableData.83d6955e.js";import{h as i}from"./index.29a0a4fb.js";import{d as s}from"./table.ba919866.js";import{j as a,K as l,o as c,m as r,n as d,Q as m,Y as f}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.42b3028e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.44f8140f.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a100a250.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.e5b0725d.js";/* empty css              *//* empty css              *//* empty css              */import"./download.173d4fef.js";import"./base64Conver.bb012c73.js";import"./index.186d815d.js";var u=a({components:{BasicTable:e},setup(){const{createMessage:e}=i();function a(){}const[l,{setLoading:c,setColumns:r,getColumns:d,getDataSource:m,reload:f,getPaginationRef:u,setPagination:g,getSelectRows:p,getSelectRowKeys:b,setSelectedRowKeys:C,clearSelectedRowKeys:j}]=o({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:s,columns:t(),rowKey:"id",showTableSetting:!0,onChange:a,rowSelection:{type:"checkbox"},onColumnsChange:e=>{}});return{registerTable:l,changeLoading:function(){c(!0),setTimeout((()=>{c(!1)}),1e3)},changeColumns:function(){r(n())},reloadTable:function(){r(t()),f({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){g({current:2}),f()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){C(["0","1","2"])},clearSelect:function(){j()},onChange:a}}});const g={class:"p-4"},p={class:"mb-4"},b=f(" 还原 "),C=f(" 开启loading "),j=f(" 更改Columns "),k=f(" 获取Columns "),x=f(" 获取表格数据 "),S=f(" 跳转到第2页 "),w={class:"mb-4"},R=f(" 获取选中行 "),T=f(" 获取选中行Key "),_=f(" 设置选中行 "),h=f(" 清空选中行 "),y=f(" 获取分页信息 ");u.render=function(e,o,t,n,i,s){const a=l("a-button"),f=l("BasicTable");return c(),r("div",g,[d("div",p,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[b])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[j])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),d("div",w,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[R])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[h])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[y])),_:1},8,["onClick"])]),d(f,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;
