var C=(r,a,p)=>new Promise((m,u)=>{var o=t=>{try{i(p.next(t))}catch(e){u(e)}},n=t=>{try{i(p.throw(t))}catch(e){u(e)}},i=t=>t.done?m(t.value):Promise.resolve(t.value).then(o,n);i((p=p.apply(r,a)).next())});import{B as $}from"./BasicForm.d8aa86d3.js";import{u as P}from"./useForm.d7bb3373.js";import{az as F,a as k,cG as I,I as v,dF as h,x as g,aB as c,i as d,l as f,C as l,q as _,D as B,m as b}from"./index.ef013507.js";import{P as q}from"./index.4dfdb4ab.js";/* empty css              *//* empty css               */import"./index.8a7cb11f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.0b0495b0.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0e08ed6e.js";import"./get.fbc063d7.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.4ff668bf.js";import"./useWindowSizeFn.37be93ea.js";import"./FullscreenOutlined.d97e6502.js";import"./index.0bfe1343.js";import"./index.27c2d820.js";import"./uuid.2b29000c.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";const y=k({components:{BasicForm:$,CollapseContainer:I,PageWrapper:q,[v.name]:v,Button:h},setup(){const[r,{appendSchemaByField:a,removeSchemaByField:p,validate:m}]=P({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function u(){return C(this,null,function*(){try{const e=yield m()}catch(e){}})}const o=g(1);function n(){a({field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),a({field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),a({field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),o.value++}function i(){a([{field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},{field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},{field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"}],""),o.value++}function t(e){p([`field${e}a`,`field${e}b`,`${e}`]),o.value--}return{register:r,handleSubmit:u,add:n,del:t,batchAdd:i}}});function S(r,a,p,m,u,o){const n=c("Button"),i=c("BasicForm"),t=c("CollapseContainer"),e=c("PageWrapper");return d(),f(e,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:l(()=>[_(t,{title:"\u8868\u5355\u589E\u5220"},{default:l(()=>[_(i,{onRegister:r.register,onSubmit:r.handleSubmit},{add:l(({field:s})=>[Number(s)===0?(d(),f(n,{key:0,onClick:r.add},{default:l(()=>[B("+")]),_:1},8,["onClick"])):b("",!0),Number(s)===0?(d(),f(n,{key:1,class:"ml-2",onClick:r.add},{default:l(()=>[B("\u6279\u91CF\u6DFB\u52A0\u8868\u5355\u914D\u7F6E")]),_:1},8,["onClick"])):b("",!0),s>0?(d(),f(n,{key:2,onClick:N=>r.del(s)},{default:l(()=>[B("-")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ko=F(y,[["render",S]]);export{ko as default};
