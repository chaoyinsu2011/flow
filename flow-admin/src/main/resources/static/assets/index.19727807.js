import{g as e,_ as s}from"./BasicForm.4961b69c.js";import{u as a,av as o,g as r}from"./index.f36f9bca.js";import{u as i}from"./useForm.4f4a10e2.js";import{_ as n}from"./PageWrapper.5df89cd8.js";import{k as t,bz as p,K as d,o as m,n as c,Q as l,q as f}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";import"./uuid.c53863e7.js";/* empty css              */import"./useModal.c70d8b8c.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const{uploadUrl:u=""}=a();function j(e,s){return o.uploadFile({url:u,onUploadProgress:s},e)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var g=t({components:{BasicUpload:e,BasicForm:s,PageWrapper:n,[p.name]:p},setup(){const{createMessage:e}=r(),[s]=i({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:j,register:s}}});g.render=function(e,s,a,o,r,i){const n=d("a-alert"),t=d("BasicUpload"),p=d("BasicForm"),u=d("PageWrapper");return m(),c(u,{title:"上传组件示例"},{default:l((()=>[f(n,{message:"基础示例"}),f(t,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),f(n,{message:"嵌入表单,加入表单校验"}),f(p,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default g;
