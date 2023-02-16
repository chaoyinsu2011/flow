var m=(u,i,e)=>new Promise((r,p)=>{var s=o=>{try{n(e.next(o))}catch(l){p(l)}},a=o=>{try{n(e.throw(o))}catch(l){p(l)}},n=o=>o.done?r(o.value):Promise.resolve(o.value).then(s,a);n((e=e.apply(u,i)).next())});import{B as F}from"./BasicForm.d8aa86d3.js";import{u as d}from"./useForm.d7bb3373.js";import{az as B,a as E,aB as c,i as C,l as b,C as f,q as A,H as _}from"./index.ef013507.js";import{P}from"./index.4dfdb4ab.js";/* empty css              *//* empty css               */import"./index.8a7cb11f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.0b0495b0.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0e08ed6e.js";import"./get.fbc063d7.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.4ff668bf.js";import"./useWindowSizeFn.37be93ea.js";import"./FullscreenOutlined.d97e6502.js";import"./index.0bfe1343.js";import"./index.27c2d820.js";import"./uuid.2b29000c.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";const t={span:8},D=[{field:"title",component:"Input",label:"\u6807\u9898",colProps:t,componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"RangePicker",label:"\u8D77\u6B62\u65E5\u671F",colProps:t,required:!0},{field:"client",component:"Input",colProps:t,label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"weights",component:"InputNumber",label:"\u6743\u91CD",colProps:t,subLabel:"( \u9009\u586B )",componentProps:{formatter:u=>u?`${u}%`:"",parser:u=>u.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"target",component:"InputTextArea",label:"\u76EE\u6807\u63CF\u8FF0",colProps:t,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"\u8861\u91CF\u6807\u51C6",colProps:t,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",rows:4},required:!0},{field:"inviteer",component:"Input",label:"\u9080\u8BC4\u4EBA",colProps:{span:8},subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"disclosure",component:"RadioGroup",label:"\u76EE\u6807\u516C\u5F00",colProps:{span:16},itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:u})=>u.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const g=E({name:"FormBasicPage",components:{BasicForm:F,PageWrapper:P},setup(){const{createMessage:u}=_(),[i,{validate:e,setProps:r}]=d({labelCol:{span:8},wrapperCol:{span:15},schemas:D,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:p});function p(){return m(this,null,function*(){try{yield e(),r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),u.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(s){}})}return{register:i}}});function h(u,i,e,r,p,s){const a=c("BasicForm"),n=c("PageWrapper");return C(),b(n,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",content:" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",contentClass:"p-4"},{default:f(()=>[A(a,{onRegister:u.register},null,8,["onRegister"])]),_:1})}var Cu=B(g,[["render",h],["__scopeId","data-v-1c566738"]]);export{Cu as default};
