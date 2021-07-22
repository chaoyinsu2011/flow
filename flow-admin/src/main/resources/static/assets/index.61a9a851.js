var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,o=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&s(e,l,t[l]);if(a)for(var l of a(t))r.call(t,l)&&s(e,l,t[l]);return e},i=(e,a)=>t(e,l(a));import{c as p,i as c,ae as u,af as d,ag as f,w as b}from"./index.04486bdf.js";import{j as m,r as y,i as j,u as O,n as v,bn as x,bo as g,N as h,bp as w}from"./vendor.686fd1d4.js";/* empty css              */const P=b(m({name:"Description",props:{useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},emits:["register"],setup(e,{slots:t,emit:l}){const a=y(null),{prefixCls:n}=p("description"),r=u(),s=j((()=>o(o({},e),O(a)))),b=j((()=>i(o({},O(s)),{title:void 0}))),m=j((()=>!!O(s).title)),P=j((()=>o({canExpand:!1},O(b).collapseOptions))),S=j((()=>o(o({},O(r)),O(b))));function C({label:e,labelMinWidth:t,labelStyle:l}){if(!l&&!t)return e;const a=i(o({},l),{minWidth:`${t}px `});return v("div",{style:a},[e])}const D=()=>{let e;return v(x,h({class:`${n}`},O(S)),"function"==typeof(t=e=function(){const{schema:e,data:t}=O(b);return O(e).map((e=>{const{render:l,field:a,span:n,show:r,contentMinWidth:s}=e;if(r&&c(r)&&!r(t))return null;const o=()=>{var e;const t=null==(e=O(b))?void 0:e.data;if(!t)return null;const n=w(t,a);return c(l)?l(n,t):null!=n?n:""},i=s;return v(x.Item,{label:C(e),key:a,span:n},{default:()=>s?v("div",{style:{minWidth:`${i}px`}},[o()]):o()})})).filter((e=>!!e))}())||"[object Object]"===Object.prototype.toString.call(t)&&!g(t)?e:{default:()=>[e]});var t};return l("register",{setDescProps:function(e){a.value=o(o({},O(a)),e)}}),()=>O(m)?(()=>{const l=e.useCollapse?D():v("div",null,[D()]);if(!e.useCollapse)return l;const{canExpand:a,helpMessage:n}=O(P),{title:r}=O(s);return v(f,{title:r,canExpan:a,helpMessage:n},{default:()=>l,action:()=>d(t,"action")})})():D()}}));export{P as D};
