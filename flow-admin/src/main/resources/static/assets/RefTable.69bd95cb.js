import{_ as e}from"./TableImg.f5e002b4.js";import"./BasicForm.4f71108f.js";import{getBasicColumns as o,getBasicShortColumns as t}from"./tableData.83d6955e.js";import{g as n}from"./index.574e7466.js";import{d as i}from"./table.2a8a22a3.js";import{k as s,r as a,u as l,K as c,o as r,n as d,q as f,Q as m,Y as u}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.919850c0.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";var p=s({components:{BasicTable:e},setup(){const e=a(null),{createMessage:s}=n();function c(){const o=l(e);if(!o)throw new Error("tableAction is null");return o}return{tableRef:e,api:i,columns:o(),changeLoading:function(){c().setLoading(!0),setTimeout((()=>{c().setLoading(!1)}),1e3)},changeColumns:function(){c().setColumns(t())},reloadTable:function(){c().setColumns(o()),c().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){c().setPagination({current:2}),c().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){c().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){c().clearSelectedRowKeys()}}}});const C={class:"p-4"},b={class:"mb-4"},g=u(" 还原 "),j=u(" 开启loading "),k=u(" 更改Columns "),w=u(" 获取Columns "),x=u(" 获取表格数据 "),S=u(" 跳转到第2页 "),R={class:"mb-4"},_=u(" 获取选中行 "),L=u(" 获取选中行Key "),y=u(" 设置选中行 "),K=u(" 清空选中行 "),T=u(" 获取分页信息 ");p.render=function(e,o,t,n,i,s){const a=c("a-button"),l=c("BasicTable");return r(),d("div",C,[f("div",b,[f(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[j])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[k])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[w])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[x])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),f("div",R,[f(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[_])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[L])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[K])),_:1},8,["onClick"]),f(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[T])),_:1},8,["onClick"])]),f(l,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;
