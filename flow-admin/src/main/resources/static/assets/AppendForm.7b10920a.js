import{_ as e}from"./BasicForm.6aa2f34f.js";import{u as o}from"./useForm.d7887b42.js";import{ag as i,ap as t}from"./index.99f998d8.js";import{j as n,ad as a,r as d,K as r,o as s,m as l,Q as p,n as m,X as c,Y as u}from"./vendor.686fd1d4.js";import{P as f}from"./index.1d2e788a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b526d419.js";/* empty css              *//* empty css              *//* empty css              */import"./index.e1dd33bd.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.9a81d061.js";import"./base64Conver.bb012c73.js";import"./index.4641642c.js";import"./useContentViewHeight.1a9d325a.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var b=n({components:{BasicForm:e,CollapseContainer:i,PageWrapper:f,[a.name]:a,Button:t},setup(){const[e,{appendSchemaByField:i,removeSchemaByFiled:t,validate:n}]=o({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const a=d(1);return{register:e,handleSubmit:function(){return e=this,o=null,i=function*(){try{yield n()}catch(e){}},new Promise(((t,n)=>{var a=e=>{try{r(i.next(e))}catch(o){n(o)}},d=e=>{try{r(i.throw(e))}catch(o){n(o)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,d);r((i=i.apply(e,o)).next())}));var e,o,i},add:function(){i({field:`field${a.value}a`,component:"Input",label:"字段"+a.value,colProps:{span:8},required:!0},""),i({field:`field${a.value}b`,component:"Input",label:"字段"+a.value,colProps:{span:8},required:!0},""),i({field:`${a.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),a.value++},del:function(e){t([`field${e}a`,`field${e}b`,`${e}`]),a.value--}}}});const j=u("+"),x=u("-");b.render=function(e,o,i,t,n,a){const d=r("Button"),u=r("BasicForm"),f=r("CollapseContainer"),b=r("PageWrapper");return s(),l(b,{title:"表单增删示例"},{default:p((()=>[m(f,{title:"表单增删"},{default:p((()=>[m(u,{onRegister:e.register,onSubmit:e.handleSubmit},{add:p((({field:o})=>[0===Number(o)?(s(),l(d,{key:0,onClick:e.add},{default:p((()=>[j])),_:1},8,["onClick"])):c("",!0),o>0?(s(),l(d,{key:1,onClick:i=>e.del(o)},{default:p((()=>[x])),_:2},1032,["onClick"])):c("",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;
