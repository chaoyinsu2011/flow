import{_ as e}from"./BasicForm.ccc180d0.js";import{ag as i,h as s}from"./index.91a03d82.js";import{M as t}from"./index.27dcb723.js";import{P as o}from"./index.27db6639.js";import{j as r,a1 as a,K as n,o as d,m,Q as p,n as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./index.cf90a7d3.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";import"./useContentViewHeight.5e4dffd7.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>a(t,{value:e[i],onChange:s=>{e[i]=s}})}];var f=r({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const{createMessage:e}=s();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,s,t,o,r){const a=n("BasicForm"),l=n("CollapseContainer"),f=n("PageWrapper");return d(),m(f,{title:"MarkDown组件嵌入Form示例"},{default:p((()=>[c(l,{title:"MarkDown表单"},{default:p((()=>[c(a,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;
