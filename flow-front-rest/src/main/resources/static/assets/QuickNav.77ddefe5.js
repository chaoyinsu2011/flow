import{a as B,V as P,S as k,bH as b,m as n,T as h,e as w,b1 as N,v as S,L as $,cX as A,aF as d,o as p,i as C,z as u,f as j,F as T,aI as z,l as g,t as G,aG as E}from"./index.f3cc7ad7.js";import{C as l}from"./index.35061a4f.js";import"./index.077d37be.js";import"./index.3779cff5.js";import{B as x,R as M}from"./index.38d72023.js";import{a as F}from"./data.93390901.js";import{g as V}from"./process.59d5edec.js";import{R as L,C as O}from"./index.c43829ae.js";import"./index.94720a28.js";import"./useRefs.d5c25866.js";import"./PlusOutlined.c8fb4a3b.js";import"./useFlexGapSupport.7ceb9daf.js";x.install=function(t){return t.component(x.name,x),t.component(M.name,M),t};var Q=function(){return{prefixCls:String,title:h.any,description:h.any,avatar:h.any}},D=B({compatConfig:{MODE:3},name:"ACardMeta",props:Q(),slots:["title","description","avatar"],setup:function(o,c){var r=c.slots,f=P("card",o),s=f.prefixCls;return function(){var i=k({},"".concat(s.value,"-meta"),!0),e=b(r,o,"avatar"),m=b(r,o,"title"),v=b(r,o,"description"),y=e?n("div",{class:"".concat(s.value,"-meta-avatar")},[e]):null,_=m?n("div",{class:"".concat(s.value,"-meta-title")},[m]):null,a=v?n("div",{class:"".concat(s.value,"-meta-description")},[v]):null,R=_||a?n("div",{class:"".concat(s.value,"-meta-detail")},[_,a]):null;return n("div",{class:i},[y,R])}}}),H=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},I=B({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:H(),setup:function(o,c){var r=c.slots,f=P("card",o),s=f.prefixCls,i=w(function(){var e;return e={},k(e,"".concat(s.value,"-grid"),!0),k(e,"".concat(s.value,"-grid-hoverable"),o.hoverable),e});return function(){var e;return n("div",{class:i.value},[(e=r.default)===null||e===void 0?void 0:e.call(r)])}}});l.Meta=D;l.Grid=I;l.install=function(t){return t.component(l.name,l),t.component(D.name,D),t.component(I.name,I),t};const X=B({components:{Badge:x,Card:l,CardGrid:l.Grid,Icon:N,Row:L,Col:O},setup(){const t=S({});function o(c){const{href:r}=A.resolve({path:c});window.open(r,"_blank")}return V({}).then(c=>{t.value={todo:c}}),{items:F,toDetail:o,badgeCounts:t}}}),q={class:"flex flex-col items-center action-item"},J={class:"text-md mt-2"},K={class:"flex flex-col items-center action-item"},U={class:"text-md mt-2"};function W(t,o,c,r,f,s){const i=d("Icon"),e=d("router-link"),m=d("Badge"),v=d("Col"),y=d("Row"),_=d("Card");return p(),C(_,E(t.$attrs,{bordered:!1,"body-style":"padding:10px;"}),{default:u(()=>[n(y,{type:"flex",justify:"space-around",align:"middle"},{default:u(()=>[(p(!0),j(T,null,z(t.items,a=>(p(),C(v,{span:4,key:a,style:{"text-align":"center"}},{default:u(()=>[n(m,{count:t.badgeCounts[a.sn]||0,offset:[-20,0]},{default:u(()=>[a.url?(p(),C(e,{key:0,to:a.url?a.url:""},{default:u(()=>[g("div",q,[n(i,{icon:a.icon,color:a.color,size:"30"},null,8,["icon","color"]),g("span",J,G(a.title),1)])]),_:2},1032,["to"])):(p(),C(e,{key:1,disabled:!0,to:""},{default:u(()=>[g("div",K,[n(i,{icon:a.icon,color:a.color,size:"30"},null,8,["icon","color"]),g("span",U,G(a.title),1)])]),_:2},1024))]),_:2},1032,["count"])]),_:2},1024))),128))]),_:1})]),_:1},16)}var dt=$(X,[["render",W],["__scopeId","data-v-7faf358a"]]);export{dt as default};
