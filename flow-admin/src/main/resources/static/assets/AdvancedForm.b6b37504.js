import{_ as e}from"./BasicForm.ccc180d0.js";import{u as o}from"./useForm.753834fe.js";import{ag as n}from"./index.91a03d82.js";import{P as l}from"./index.27db6639.js";import{j as p,K as t,o as i,m as s,Q as a,n as r}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./index.cf90a7d3.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";import"./useContentViewHeight.5e4dffd7.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var d=p({components:{BasicForm:e,CollapseContainer:n,PageWrapper:l},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[n]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:n}}});d.render=function(e,o,n,l,p,d){const c=t("BasicForm"),m=t("CollapseContainer"),f=t("PageWrapper");return i(),s(f,{title:"可折叠表单示例"},{default:a((()=>[r(m,{title:"基础收缩示例"},{default:a((()=>[r(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),r(m,{title:"超过3行自动收起",class:"mt-4"},{default:a((()=>[r(c,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;
