import{D as e}from"./index.2a059bfb.js";import{P as a}from"./index.ddacb028.js";import{u as t}from"./useDescription.994698ac.js";import{j as s,K as r,o as i,m as n,Q as o,n as l}from"./vendor.686fd1d4.js";import"./index.29a0a4fb.js";/* empty css              */import"./useContentViewHeight.263bd4fd.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const m={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},d=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var c=s({components:{Description:e,PageWrapper:a},setup(){const[e]=t({title:"useDescription",data:m,schema:d}),[a]=t({title:"无边框",bordered:!1,data:m,schema:d});return{mockData:m,schema:d,register:e,register1:a}}});c.render=function(e,a,t,s,m,d){const c=r("Description"),p=r("PageWrapper");return i(),n(p,{title:"详情组件示例"},{default:o((()=>[l(c,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(c,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(c,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),l(c,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default c;
