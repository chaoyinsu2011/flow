var e=(e,l,t)=>new Promise(((n,i)=>{var a=e=>{try{s(t.next(e))}catch(l){i(l)}},u=e=>{try{s(t.throw(e))}catch(l){i(l)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,u);s((t=t.apply(e,l)).next())}));import{af as l,at as t,ay as n}from"./index.1f477f84.js";import{r as i,a0 as a,u,D as s,J as r}from"./vendor.9d9efc92.js";function o(o){const d=i(null),c=i(!1);function h(){return e(this,null,(function*(){const e=u(d);return e||t("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield r(),e}))}return[function(e){a((()=>{d.value=null,c.value=null})),u(c)&&l()&&e===u(d)||(d.value=e,c.value=!0,s((()=>o),(()=>{o&&e.setProps(n(o))}),{immediate:!0,deep:!0}))},{scrollToField:(l,t)=>e(this,null,(function*(){(yield h()).scrollToField(l,t)})),setProps:l=>e(this,null,(function*(){(yield h()).setProps(l)})),updateSchema:l=>e(this,null,(function*(){(yield h()).updateSchema(l)})),resetSchema:l=>e(this,null,(function*(){(yield h()).resetSchema(l)})),clearValidate:l=>e(this,null,(function*(){(yield h()).clearValidate(l)})),resetFields:()=>e(this,null,(function*(){h().then((l=>e(this,null,(function*(){yield l.resetFields()}))))})),removeSchemaByFiled:l=>e(this,null,(function*(){var e;null==(e=u(d))||e.removeSchemaByFiled(l)})),getFieldsValue:()=>{var e;return null==(e=u(d))?void 0:e.getFieldsValue()},setFieldsValue:l=>e(this,null,(function*(){(yield h()).setFieldsValue(l)})),appendSchemaByField:(l,t,n)=>e(this,null,(function*(){(yield h()).appendSchemaByField(l,t,n)})),submit:()=>e(this,null,(function*(){return(yield h()).submit()})),validate:l=>e(this,null,(function*(){return(yield h()).validate(l)})),validateFields:l=>e(this,null,(function*(){return(yield h()).validateFields(l)}))}]}export{o as u};
