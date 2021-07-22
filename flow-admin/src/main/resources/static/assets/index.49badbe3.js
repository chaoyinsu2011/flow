var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{j as o,ad as i,b2 as d,z as c,ca as u,a5 as p,i as m,G as f,K as v,o as b,m as g,Q as h,n as y,Y as x,q as O,V as j,ah as w}from"./vendor.686fd1d4.js";/* empty css              */import{P as T}from"./index.c1dc3b6b.js";import{aQ as P}from"./index.04486bdf.js";import"./useContentViewHeight.c5b829cb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var C=o({components:{PageWrapper:T,[i.name]:i,InputTextArea:i.TextArea,Tag:d},setup(){const e=c({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:o,data:i,send:d,close:v,open:b}=u(e.server,{autoReconnect:!1,heartbeat:!0});p((()=>{if(i.value)try{const t=JSON.parse(i.value);e.recordList.push(t)}catch(t){e.recordList.push({res:i.value,id:Math.ceil(1e3*Math.random()),time:(new Date).getTime()})}}));const g=m((()=>"OPEN"===o.value)),h=m((()=>g.value?"success":"red")),y=m((()=>[...e.recordList].reverse()));return x=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&n(e,a,t[a]);return e})({status:o,formatToDateTime:P},f(e)),t(x,a({handlerSend:function(){d(e.sendValue),e.sendValue=""},getList:y,toggle:function(){g.value?v():b()},getIsOpen:g,getTagColor:h}));var x}});const I={class:"flex"},k={class:"w-1/3 bg-white p-4"},V={class:"flex items-center"},L=y("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),S=y("hr",{class:"my-4"},null,-1),_={class:"flex"},A=x(" 服务地址 "),D=y("p",{class:"text-lg font-medium mt-4"},"设置",-1),W=y("hr",{class:"my-4"},null,-1),M=x(" 发送 "),z={class:"w-2/3 bg-white ml-4 p-4"},E=y("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),N=y("hr",{class:"my-4"},null,-1),Q={class:"max-h-80 overflow-auto"},U={class:"flex items-center"},q=y("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);C.render=function(e,t,a,s,r,l){const n=v("Tag"),o=v("a-input"),i=v("a-button"),d=v("InputTextArea"),c=v("PageWrapper");return b(),g(c,{title:"WebSocket 示例"},{default:h((()=>[y("div",I,[y("div",k,[y("div",V,[L,y(n,{color:e.getTagColor},{default:h((()=>[x(O(e.status),1)])),_:1},8,["color"])]),S,y("div",_,[y(o,{value:e.server,"onUpdate:value":t[1]||(t[1]=t=>e.server=t),disabled:""},{addonBefore:h((()=>[A])),_:1},8,["value"]),y(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:h((()=>[x(O(e.getIsOpen?"关闭连接":"开启连接"),1)])),_:1},8,["type","onClick"])]),D,W,y(d,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[2]||(t[2]=t=>e.sendValue=t),allowClear:""},null,8,["disabled","value"]),y(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:h((()=>[M])),_:1},8,["disabled","onClick"])]),y("div",z,[E,N,y("div",Q,[y("ul",null,[(b(!0),g(j,null,w(e.getList,(t=>(b(),g("li",{class:"mt-2",key:t.time},[y("div",U,[q,y("span",null,O(e.formatToDateTime(t.time)),1)]),y("div",null,O(t.res),1)])))),128))])])])])])),_:1})};export default C;
