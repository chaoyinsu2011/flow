import{n as t,ad as i}from"./index.574e7466.js";import{k as e,r,A as n,f as s,u as a,D as l,I as h,J as m,q as o}from"./vendor.56d2c57f.js";function u(t,i="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${i}`}var c=e({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(e,{slots:c}){const g=r(null),d=n({first:0,last:0,scrollTop:0}),f=s((()=>parseInt(e.bench,10))),p=s((()=>parseInt(e.itemHeight,10))),b=s((()=>Math.max(0,d.first-a(f)))),x=s((()=>Math.min((e.items||[]).length,d.last+a(f)))),N=s((()=>({height:u((e.items||[]).length*a(p))}))),H=s((()=>{const t={},i=u(e.height),r=u(e.minHeight),n=u(e.minWidth),s=u(e.maxHeight),a=u(e.maxWidth),l=u(e.width);return i&&(t.height=i),r&&(t.minHeight=r),n&&(t.minWidth=n),s&&(t.maxHeight=s),a&&(t.maxWidth=a),l&&(t.width=l),t}));function S(t){const i=a(g);if(!i)return 0;const r=parseInt(e.height||0,10)||i.clientHeight;return t+Math.ceil(r/a(p))}function v(){const t=a(g);t&&(d.scrollTop=t.scrollTop,d.first=Math.floor(d.scrollTop/a(p)),d.last=S(d.first))}function y(){const{items:t=[]}=e;return t.slice(a(b),a(x)).map(W)}function W(t,e){const r=u((e+=a(b))*a(p));return o("div",{class:"virtual-scroll__item",style:{top:r},key:e},[i(c,"default",{index:e,item:t})])}return l([()=>e.itemHeight,()=>e.height],(()=>{v()})),h((()=>{d.last=S(0),m((()=>{const i=a(g);i&&t({el:i,name:"scroll",listener:v,wait:0})}))})),()=>o("div",{class:"virtual-scroll",style:a(H),ref:g},[o("div",{class:"virtual-scroll__container",style:a(N)},[y()])])}});export default c;
