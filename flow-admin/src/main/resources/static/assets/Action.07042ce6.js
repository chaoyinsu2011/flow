import{Q as s}from"./index.f36f9bca.js";import{_ as o}from"./PageWrapper.5df89cd8.js";import{k as l,r,u as a,l as e,m as t,K as c,o as n,n as i,q as d,V as f,ah as p,s as m,x as u,Y as x}from"./vendor.9d9efc92.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var _=l({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=r(null),o=()=>{const o=a(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const b=u();e("data-v-83ef995e");const j={class:"my-4"},v=x(" 滚动到100px位置 "),C=x(" 滚动到800px位置 "),k=x(" 滚动到顶部 "),T=x(" 滚动到底部 "),g={class:"scroll-wrap"},P={class:"p-3"};t();const w=b(((s,o,l,r,a,e)=>{const t=c("a-button"),u=c("ScrollContainer"),x=c("PageWrapper");return n(),i(x,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:b((()=>[d("div",j,[d(t,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:b((()=>[v])),_:1}),d(t,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:b((()=>[C])),_:1}),d(t,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:b((()=>[k])),_:1}),d(t,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:b((()=>[T])),_:1})]),d("div",g,[d(u,{class:"mt-4",ref:"scrollRef"},{default:b((()=>[d("ul",P,[(n(),i(f,null,p(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])),_:1})}));_.render=w,_.__scopeId="data-v-83ef995e";export default _;
