var F=(t,s,e)=>new Promise((i,m)=>{var d=u=>{try{o(e.next(u))}catch(a){m(a)}},p=u=>{try{o(e.throw(u))}catch(a){m(a)}},o=u=>u.done?i(u.value):Promise.resolve(u.value).then(d,p);o((e=e.apply(t,s)).next())});import{P as _}from"./index.c79f76d5.js";import{az as C,a as f,w as E,aB as c,i as D,l as A,C as r,q as n,D as l,p as g}from"./index.e61ad282.js";import{t as k}from"./account.d3cb3c6a.js";import{C as B}from"./index.c938a7eb.js";import"./index.f066cc44.js";/* empty css               */import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useSize.5a37866d.js";import"./eagerComputed.d3c262c3.js";import"./useWindowSizeFn.27de1b1b.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./transButton.2c723edc.js";import"./index.8e210a09.js";import"./index.6d7de824.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useRefs.0c428178.js";import"./PlusOutlined.e602ccf2.js";const y=f({name:"TestSessionTimeout",components:{ACardGrid:B.Grid,ACard:B,PageWrapper:_},setup(){const t=E();function s(){return F(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function e(){return F(this,null,function*(){try{yield k()}catch(i){i.message}})}return{test1:s,test2:e}}}),x=g("span",null,null,-1);function h(t,s,e,i,m,d){const p=c("a-button"),o=c("a-card-grid"),u=c("a-card"),a=c("PageWrapper");return D(),A(a,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:r(()=>[n(u,{title:"\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",extra:"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"},{default:r(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[n(p,{type:"primary",onClick:t.test1},{default:r(()=>[l("HttpStatus == 401")]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[x,n(p,{class:"ml-4",type:"primary",onClick:t.test2},{default:r(()=>[l("Response.code == 401")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var O=C(y,[["render",h]]);export{O as default};
