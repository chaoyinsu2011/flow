import{P as g}from"./index.3c0bc9c3.js";import{L as I,a as h,cV as F,v as m,bA as P,bQ as C,h as B,aF as o,o as k,i as S,z as t,m as r,B as n,t as w,l as a}from"./index.f3cc7ad7.js";import{S as V}from"./index.8000580e.js";import{T as b}from"./index.b2ca6e7c.js";import x from"./FormContainer.8eb2f785.js";import E from"./ActionButtons.590461bb.js";import H from"./BaseActionButtons.c196c6ce.js";import R from"./ProcessBackButton.07d6685f.js";import T from"./ApproveActionButtons.f7cd98ae.js";import N from"./ApprovalHistory.a432da07.js";import{c as $,d as D}from"./process.59d5edec.js";import W from"./ProcessHeader.13865cc1.js";import"./index.84d9d03c.js";import"./index.4658f800.js";import"./useSize.489031db.js";import"./eagerComputed.14abc072.js";import"./useWindowSizeFn.2875097b.js";import"./useContentViewHeight.d9d91672.js";import"./ArrowLeftOutlined.6ca2c112.js";import"./index.b18329cd.js";import"./transButton.89d72f2f.js";import"./useFlexGapSupport.7ceb9daf.js";import"./index.11e1e271.js";import"./index.3779cff5.js";import"./index.d4f1cd9f.js";import"./CopyOutlined.fc1e0d80.js";import"./index.a56983fb.js";import"./index.5eecea9e.js";import"./index.4cbb0f8b.js";import"./get.26f6b197.js";import"./index.c43829ae.js";import"./index.8ae63227.js";import"./FullscreenOutlined.af4c6990.js";import"./index.daf215b1.js";import"./index.9afd6c1c.js";import"./throttleByAnimationFrame.5b3ce196.js";import"./Viewer.ca2e1abd.js";import"./PlusOutlined.c8fb4a3b.js";import"./ApartmentOutlined.84f98493.js";import"./index.555d958b.js";import"./FlowDiagramModal.1e4487f2.js";import"./ClockCircleOutlined.c9be623f.js";import"./index.077d37be.js";import"./useRefs.d5c25866.js";import"./index.38d72023.js";const K=h({components:{LeftOutlined:F,ProcessHeader:W,PageWrapper:g,FormContainer:x,ActionButtons:E,BaseActionButtons:H,ApproveActionButtons:T,ApprovalHistory:N,ProcessBackButton:R,Space:V,Tag:b},setup(){const s=m(),c=m({}),u=m({}),l=m(""),_=P(),{currentRoute:d}=C(),{params:{modelKey:f},query:{procInstId:p}}=B(d);$({modelKey:f}).then(e=>{c.value=e}),p&&D({procInstId:p}).then(e=>{u.value=e,B(s).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:l,modelBaseInfo:c,formContainerRef:s,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(s,c,u,l,_,d){const f=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),y=o("ApprovalHistory"),A=o("PageWrapper");return k(),S(A,{class:"!mt-4 process-container"},{title:t(()=>[r(f),n(" "+w(s.startorBaseInfo.formName||s.modelBaseInfo.name||"-")+" ",1),r(p)]),extra:t(()=>[]),footer:t(()=>[a("div",L,[r(e,null,{default:t(()=>[a("span",null,[n(" \u6D41\u7A0BBP\uFF1A"),r(i,null,{default:t(()=>[n("\u5F20\u4E09")]),_:1})]),a("span",null,[n(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),r(i,null,{default:t(()=>[n("\u674E\u56DB")]),_:1})])]),_:1})])]),default:t(()=>[a("div",M,[r(v,{ref:"formContainerRef"},null,512)]),a("div",q,[r(y,{ref:"approvalHistoryRef"},null,512)])]),_:1})}var $o=I(K,[["render",z]]);export{$o as default};
