var e=(e,o,l)=>new Promise(((i,r)=>{var s=e=>{try{a(l.next(e))}catch(o){r(o)}},t=e=>{try{a(l.throw(e))}catch(o){r(o)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(s,t);a((l=l.apply(e,o)).next())}));import{_ as o}from"./BasicForm.4f71108f.js";import{u as l}from"./useForm.4c43bf99.js";import{ae as i,g as r}from"./index.574e7466.js";import{_ as s}from"./PageWrapper.37b62bcf.js";import{k as t,K as a,o as n,n as d,Q as c,q as p,Y as u}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.919850c0.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";import"./usePageContext.568cee97.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"验证码",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(o,l)=>e(this,null,(function*(){return l?"1"===l?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空")})),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var f=t({components:{BasicForm:o,CollapseContainer:i,PageWrapper:s},setup(){const{createMessage:o}=r(),[i,{validateFields:s,clearValidate:t,getFieldsValue:a,resetFields:n,setFieldsValue:d}]=l({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:i,schemas:m,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},getFormValues:function(){const e=a();o.success("values:"+JSON.stringify(e))},setFormValues:function(){d({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})},validateForm:function(){return e(this,null,(function*(){try{yield s()}catch(e){}}))},resetValidate:function(){return e(this,null,(function*(){t()}))},resetFields:n}}});const b={class:"mb-4"},j=u(" 手动校验表单 "),P=u(" 清空校验信息 "),v=u(" 获取表单值 "),g=u(" 设置表单值 "),x=u(" 重置 ");f.render=function(e,o,l,i,r,s){const t=a("a-button"),u=a("BasicForm"),m=a("CollapseContainer"),f=a("PageWrapper");return n(),d(f,{title:"表单校验示例"},{default:c((()=>[p("div",b,[p(t,{onClick:e.validateForm,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),p(t,{onClick:e.resetValidate,class:"mr-2"},{default:c((()=>[P])),_:1},8,["onClick"]),p(t,{onClick:e.getFormValues,class:"mr-2"},{default:c((()=>[v])),_:1},8,["onClick"]),p(t,{onClick:e.setFormValues,class:"mr-2"},{default:c((()=>[g])),_:1},8,["onClick"]),p(t,{onClick:e.resetFields,class:"mr-2"},{default:c((()=>[x])),_:1},8,["onClick"])]),p(m,{title:"表单校验"},{default:c((()=>[p(u,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;
