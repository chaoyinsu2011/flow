import{I as e}from"./index.fdce518d.js";import{_ as t}from"./TableImg.96b6e2f6.js";import"./BasicForm.99631a91.js";import{P as s}from"./index.52d50d5a.js";import{j as o,r as i,K as a,o as r,m as d,Q as n,n as c,V as m,ah as p,Y as f}from"./vendor.686fd1d4.js";import"./index.ffeb6485.js";import"./index.08cdb95c.js";import"./useWindowSizeFn.d82e06bf.js";import"./useForm.29bf2c0c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";import"./useContentViewHeight.7085396b.js";/* empty css              *//* empty css              */var u=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=i([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:i}}=s,a=[];for(const e of t)a.push({title:e,dataIndex:e});e.value.push({title:i,dataSource:o,columns:a})}},tableListRef:e}}});const l=f(" 导入Excel ");u.render=function(e,t,s,o,i,f){const u=a("a-button"),j=a("ImpExcel"),x=a("BasicTable"),b=a("PageWrapper");return r(),d(b,{title:"excel数据导入示例"},{default:n((()=>[c(j,{onSuccess:e.loadDataSuccess},{default:n((()=>[c(u,{class:"m-3"},{default:n((()=>[l])),_:1})])),_:1},8,["onSuccess"]),(r(!0),d(m,null,p(e.tableListRef,((e,t)=>(r(),d(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default u;
