import{_ as e}from"./BasicForm.adb2a199.js";import{u as t}from"./useForm.40c52001.js";import{step1Schemas as a}from"./data.2505cb7f.js";import{j as s,bv as o,ad as i,aV as n,k as r,l as d,K as p,o as l,m as c,n as m,x as u,Y as f}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.04486bdf.js";import"./index.a84c0e16.js";/* empty css              *//* empty css              *//* empty css              */import"./index.13a30da8.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.45a835c8.js";import"./base64Conver.bb012c73.js";import"./index.9702aa73.js";var j=s({components:{BasicForm:e,[o.name]:o,ASelectOption:o.Option,[i.name]:i,[i.Group.name]:i.Group,[n.name]:n},emits:["next"],setup(e,{emit:s}){const[o,{validate:i}]=t({labelWidth:100,schemas:a,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:function(){return e=this,t=null,a=function*(){try{const e=yield i();s("next",e)}catch(e){}},new Promise(((s,o)=>{var i=e=>{try{r(a.next(e))}catch(t){o(t)}},n=e=>{try{r(a.throw(e))}catch(t){o(t)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,n);r((a=a.apply(e,t)).next())}));var e,t,a}});return{register:o}}});const v=u();r("data-v-3c7b1145");const x={class:"step1"},b={class:"step1-form"},h=f(" 支付宝 "),y=f(" 银联 "),_=m("h3",null,"说明",-1),F=m("h4",null,"转账到支付宝账户",-1),g=m("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=m("h4",null,"转账到银行卡",-1),B=m("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);d();const O=v(((e,t,a,s,o,i)=>{const n=p("a-select-option"),r=p("a-select"),d=p("a-input"),u=p("a-input-group"),f=p("BasicForm"),j=p("a-divider");return l(),c("div",x,[m("div",b,[m(f,{onRegister:e.register},{fac:v((({model:e,field:t})=>[m(u,{compact:""},{default:v((()=>[m(r,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:v((()=>[m(n,{value:"zfb"},{default:v((()=>[h])),_:1}),m(n,{value:"yl"},{default:v((()=>[y])),_:1})])),_:2},1032,["value","onUpdate:value"]),m(d,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),m(j),_,F,g,w,B])}));j.render=O,j.__scopeId="data-v-3c7b1145";export default j;
