import{B as e,a as o}from"./index.cf90a7d3.js";import{_ as i}from"./BasicForm.ccc180d0.js";import{u as s}from"./useForm.753834fe.js";import{j as r,r as t,K as d,o as n,m as a,Q as m,n as p,N as c}from"./vendor.686fd1d4.js";import"./index.91a03d82.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=r({components:{BasicModal:e,BasicForm:i},setup(){const e=t({}),[i,{}]=s({labelWidth:120,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=o((o=>{e.value={field2:o.data,field1:o.info}}));return{register:r,schemas:f,registerForm:i,model:e}}});l.render=function(e,o,i,s,r,t){const f=d("BasicForm"),l=d("BasicModal");return n(),a(l,c(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:m((()=>[p(f,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default l;
