import{P as I}from"./index.ebf1aaf7.js";import{L as h,a as F,cV as C,v as m,bA as P,bQ as k,h as B,aF as o,o as S,i as V,z as r,m as t,B as s,t as b,l as a}from"./index.75df828b.js";import{S as x}from"./index.96bb241f.js";import{T as E}from"./index.5ad6026c.js";import R from"./FormContainer.998f3127.js";import T from"./ActionButtons.ffd4cbf9.js";import w from"./BaseActionButtons.c786443e.js";import H from"./ApproveActionButtons.7a3cdb94.js";import N from"./ProcessBackButton.043b72e6.js";import $ from"./ApprovalHistory.ebfad96b.js";import{c as D,d as W}from"./process.91b5dfff.js";import"./index.c80a7d24.js";import"./index.1274b7b1.js";import"./useSize.f8b8ed9e.js";import"./eagerComputed.117d0821.js";import"./useWindowSizeFn.1b303f48.js";import"./useContentViewHeight.1db0a346.js";import"./ArrowLeftOutlined.ec67e314.js";import"./index.4961ba28.js";import"./transButton.07ac4e4d.js";import"./useFlexGapSupport.4972a32f.js";import"./index.639d4e57.js";import"./index.4ae6698d.js";import"./index.20b89fd8.js";import"./CopyOutlined.e217097f.js";import"./index.d37cd69d.js";import"./index.df2747db.js";import"./index.c2724343.js";import"./get.84b8183b.js";import"./index.9f5ee9cb.js";import"./index.27340b6a.js";import"./FullscreenOutlined.bfc2b1fe.js";import"./index.bd84e3cc.js";import"./index.b3ac699f.js";import"./throttleByAnimationFrame.9c05ab18.js";import"./Viewer.ca2e1abd.js";import"./PlusOutlined.58f79c9c.js";import"./ApartmentOutlined.8ddb3c1c.js";import"./index.44c3112f.js";import"./FlowDiagramModal.9502be9e.js";import"./ClockCircleOutlined.0efb1ca0.js";const K=F({components:{LeftOutlined:C,PageWrapper:I,FormContainer:R,ActionButtons:T,BaseActionButtons:w,ApproveActionButtons:H,ApprovalHistory:$,ProcessBackButton:N,Space:x,Tag:E},setup(){const n=m(),c=m({}),u=m({}),f=m(""),_=P(),{currentRoute:d}=k(),{params:{modelKey:l},query:{procInstId:p}}=B(d);D({modelKey:l}).then(e=>{c.value=e}),p&&W({procInstId:p}).then(e=>{u.value=e,B(n).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:f,modelBaseInfo:c,formContainerRef:n,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(n,c,u,f,_,d){const l=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),A=o("ApprovalHistory"),y=o("ApproveActionButtons"),g=o("PageWrapper");return S(),V(g,{class:"!mt-4 process-container"},{title:r(()=>[t(l),s(" "+b(n.startorBaseInfo.formName||n.modelBaseInfo.name||"-")+" ",1),t(p)]),extra:r(()=>[]),footer:r(()=>[a("div",L,[t(e,null,{default:r(()=>[a("span",null,[s(" \u6D41\u7A0BBP\uFF1A"),t(i,null,{default:r(()=>[s("\u5F20\u4E09")]),_:1})]),a("span",null,[s(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),t(i,null,{default:r(()=>[s("\u674E\u56DB")]),_:1})])]),_:1})])]),default:r(()=>[a("div",M,[t(v,{ref:"formContainerRef"},null,512)]),a("div",q,[t(A,{ref:"approvalHistoryRef"},null,512)]),t(y)]),_:1})}var To=h(K,[["render",z]]);export{To as default};
