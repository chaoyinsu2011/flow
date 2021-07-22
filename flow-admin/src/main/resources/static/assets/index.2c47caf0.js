var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import{P as s}from"./index.c1dc3b6b.js";import{p as i,e as u,aQ as m,aB as p,as as d,k as c,j as f,I as v,w as b,ag as j}from"./index.04486bdf.js";import{j as w,r as g,bX as O,C as y,o as T,m as D,q as P,z as h,G as C,K as M,Q as x,n as Y}from"./vendor.686fd1d4.js";import"./useContentViewHeight.c5b829cb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var _=w({name:"Time",props:{value:i.oneOfType([i.number,i.instanceOf(Date),i.string]).isRequired,step:i.number.def(60),mode:i.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const t=g(""),{t:n}=u();function a(){const{mode:a,value:o}=e,r=function(){const{value:t}=e;let n=0;if(c(t)){const e=t.toString().length>10?t:1e3*t;n=new Date(e).getTime()}else f(t)?n=new Date(t).getTime():v(t)&&(n=t.getTime());return n}();"relative"===a?t.value=function(e){const t=(new Date).getTime(),a=d(e).isBefore(t);let o=t-e;a||(o=-o);let r="",l=n(a?"component.time.before":"component.time.after");r=o<1e3?n("component.time.just"):o<6e4?parseInt(o/1e3)+n("component.time.seconds")+l:o>=6e4&&o<36e5?Math.floor(o/6e4)+n("component.time.minutes")+l:o>=36e5&&o<864e5?Math.floor(o/36e5)+n("component.time.hours")+l:o>=864e5&&o<262386e4?Math.floor(o/864e5)+n("component.time.days")+l:o>=262386e4&&o<=3156786e4&&a?d(e).format("MM-DD-HH-mm"):d(e).format("YYYY");return r}(r):"datetime"===a?t.value=m(o):"date"===a&&(t.value=p(o))}return O(a,1e3*e.step),y((()=>e.value),(()=>{a()}),{immediate:!0}),{date:t}}});_.render=function(e,t,n,a,o,r){return T(),D("span",null,P(e.date),1)};var H=w({components:{PageWrapper:s,Time:b(_),CollapseContainer:j},setup(){const e=(new Date).getTime(),s=h({time1:e-18e4,time2:e-2592e5});return i=((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&l(e,n,t[n]);return e})({},C(s)),t(i,n({now:e}));var i}});const I=Y("br",null,null,-1),S=Y("br",null,null,-1),W=Y("br",null,null,-1),q=Y("br",null,null,-1);H.render=function(e,t,n,a,o,r){const l=M("Time"),s=M("CollapseContainer"),i=M("PageWrapper");return T(),D(i,{title:"时间组件示例"},{default:x((()=>[Y(s,{title:"基础示例"},{default:x((()=>[Y(l,{value:e.time1},null,8,["value"]),I,Y(l,{value:e.time2},null,8,["value"])])),_:1}),Y(s,{title:"定时更新",class:"my-4"},{default:x((()=>[Y(l,{value:e.now,step:1},null,8,["value"]),S,Y(l,{value:e.now,step:5},null,8,["value"])])),_:1}),Y(s,{title:"定时更新"},{default:x((()=>[Y(l,{value:e.now,mode:"date"},null,8,["value"]),W,Y(l,{value:e.now,mode:"datetime"},null,8,["value"]),q,Y(l,{value:e.now},null,8,["value"])])),_:1})])),_:1})};export default H;
