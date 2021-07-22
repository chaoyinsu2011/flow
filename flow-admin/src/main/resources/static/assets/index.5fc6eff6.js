var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,o=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&a(e,s,t[s]);if(i)for(var s of i(t))r.call(t,s)&&a(e,s,t[s]);return e};import{e as c,n as l,m as u,af as d,aV as p,w as m}from"./index.29a0a4fb.js";import{j as g,z as f,r as h,i as y,C as v,a5 as w,u as x,n as T,bQ as b,c5 as S,N as P,a2 as D}from"./vendor.686fd1d4.js";const{t:M}=c(),O={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:M("component.verify.dragText")},successText:{type:[String],default:M("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},I=($=o({},O),t($,s({src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}})));var $,j=g({name:"BaseDargVerify",props:O,emits:["success","update:value","change","start","move","end"],setup(e,{emit:t,slots:s,expose:i}){const n=f({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),r=h(null),a=h(null),c=h(null),p=h(null);l({el:document,name:"mouseup",listener:()=>{n.isMoving&&N()}});const m=y((()=>{const{height:t,actionStyle:s}=e,i=`${parseInt(t)}px`;return o({left:0,width:i,height:i},s)})),g=y((()=>{const{height:t,width:s,circle:i,wrapStyle:n}=e,r=parseInt(t),a=`${parseInt(s)}px`;return o({width:a,height:`${r}px`,lineHeight:`${r}px`,borderRadius:i?r/2+"px":0},n)})),P=y((()=>{const{height:t,circle:s,barStyle:i}=e,n=parseInt(t);return o({height:`${n}px`,borderRadius:s?n/2+"px 0 0 "+n/2+"px":0},i)})),D=y((()=>{const{height:t,width:s,contentStyle:i}=e,n=`${parseInt(t)}px`,r=`${parseInt(s)}px`;return o({height:n,width:r},i)}));function M(e){return e.pageX||e.touches[0].pageX}function O(e){if(n.isPassing)return;const s=x(p);s&&(t("start",e),n.moveDistance=M(e)-parseInt(s.style.left.replace("px",""),10),n.startTime=(new Date).getTime(),n.isMoving=!0)}function I(t){const s=parseInt(t.style.width),{width:i}=e,n=parseInt(i);return{offset:n-s-6,widthNum:n,actionWidth:s}}function $(s){const{isMoving:i,moveDistance:r}=n;if(i){const i=x(p),n=x(a);if(!i||!n)return;const{offset:o,widthNum:c,actionWidth:l}=I(i),u=M(s)-r;t("move",{event:s,moveDistance:r,moveX:u}),u>0&&u<=o?(i.style.left=`${u}px`,n.style.width=`${u+l/2}px`):u>o&&(i.style.left=c-l+"px",n.style.width=c-l/2+"px",e.isSlot||R())}}function j(s){const{isMoving:i,isPassing:r,moveDistance:o}=n;if(i&&!r){t("end",s);const i=x(p),r=x(a);if(!i||!r)return;const l=M(s)-o,{offset:u,widthNum:d,actionWidth:m}=I(i);l<u?e.isSlot?setTimeout((()=>{if(e.value){const e=x(c);e&&(e.style.width=`${parseInt(r.style.width)}px`)}else N()}),0):N():(i.style.left=d-m+"px",r.style.width=d-m/2+"px",R()),n.isMoving=!1}}function R(){e.isSlot?N():(n.endTime=(new Date).getTime(),n.isPassing=!0,n.isMoving=!1)}function N(){n.isMoving=!1,n.isPassing=!1,n.moveDistance=0,n.toLeft=!1,n.startTime=0,n.endTime=0;const e=x(p),t=x(a),s=x(c);e&&t&&s&&(n.toLeft=!0,u((()=>{n.toLeft=!1,e.style.left="0",t.style.width="0"}),300),s.style.width=x(D).width)}return v((()=>n.isPassing),(e=>{if(e){const{startTime:s,endTime:i}=n;t("success",{isPassing:e,time:((i-s)/1e3).toFixed(1)}),t("update:value",e),t("change",e)}})),w((()=>{n.isPassing=!!e.value})),i({resume:N}),()=>T("div",{class:"darg-verify",ref:r,style:x(g),onMousemove:$,onTouchmove:$,onMouseleave:j,onMouseup:j,onTouchend:j},[(()=>{const e=["darg-verify-bar"];return n.toLeft&&e.push("to-left"),T("div",{class:e,ref:a,style:x(P)},null)})(),(()=>{const t=["darg-verify-content"],{isPassing:i}=n,{text:r,successText:a}=e;return i&&t.push("success"),T("div",{class:t,ref:c,style:x(D)},[d(s,"text",i)||(i?a:r)])})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:i}=n;return t&&e.push("to-left"),T("div",{class:e,onMousedown:O,onTouchstart:O,style:x(m),ref:p},[d(s,"actionIcon",i)||T(i?b:S,{class:"darg-verify-action__icon"},null)])})()])}}),R=g({name:"ImgRotateDargVerify",inheritAttrs:!1,props:I,emits:["success","change","update:value"],setup(e,{emit:t,attrs:s}){const i=h(null),n=f({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:r}=c();v((()=>n.isPassing),(e=>{if(e){const{startTime:s,endTime:i}=n;t("success",{isPassing:e,time:((i-s)/1e3).toFixed(1)}),t("change",e),t("update:value",e)}}));const a=y((()=>{const{imgWrapStyle:t,imgWidth:s}=e;return o({width:`${s}px`,height:`${s}px`},t)})),l=y((()=>{const{minDegree:t,maxDegree:s}=e;return t===s?Math.floor(1+1*Math.random())/10+1:1}));function d(){n.startTime=(new Date).getTime()}function m(t){n.draged=!0;const{imgWidth:s,height:i,maxDegree:r}=e,{moveX:a}=t,o=Math.ceil(a/(s-parseInt(i))*r*x(l));n.currentRotate=o,n.imgStyle=p("transform",`rotateZ(${n.randomRotate-o}deg)`)}function g(){const{minDegree:t,maxDegree:s}=e,i=Math.floor(t+Math.random()*(s-t));n.randomRotate=i,n.imgStyle=p("transform",`rotateZ(${i}deg)`)}function w(){const{randomRotate:t,currentRotate:s}=n,{diffDegree:i}=e;Math.abs(t-s)>=(i||20)?(n.imgStyle=p("transform",`rotateZ(${t}deg)`),n.toOrigin=!0,u((()=>{n.toOrigin=!1,n.showTip=!0}),300)):(n.isPassing=!0,n.endTime=(new Date).getTime()),n.showTip=!0}function b(){n.showTip=!1;const e=x(i);e&&(n.isPassing=!1,e.resume(),g())}const S=D();return S&&(S.resume=b),()=>{const{src:t}=e,{toOrigin:c,isPassing:l,startTime:u,endTime:p}=n,f=[];c&&f.push("to-origin");const h=(p-u)/1e3;return T("div",{class:"ir-dv"},[T("div",{class:"ir-dv-img__wrap",style:x(a)},[T("img",{src:t,onLoad:g,width:parseInt(e.width),class:f,style:n.imgStyle,onClick:()=>{b()}},null),n.showTip&&T("span",{class:["ir-dv-img__tip",n.isPassing?"success":"error"]},[n.isPassing?r("component.verify.time",{time:h.toFixed(1)}):r("component.verify.error")]),!n.showTip&&!n.draged&&T("span",{class:["ir-dv-img__tip","normal"]},[r("component.verify.redoTip")])]),T(j,P({class:"ir-dv-drag__bar",onMove:m,onEnd:w,onStart:d,ref:i},o(o({},s),e),{value:l,isSlot:!0}),null)])}}});const N=m(j),_=m(R);export{N as B,_ as R};
