import{L as d,a as l,v as f,aF as n,o as u,i as I,z as r,m as e,l as t}from"./index.75df828b.js";import{C as _}from"./index.f7065eda.js";import"./index.e72a2c0b.js";import"./index.4ae6698d.js";import{P as g}from"./index.ebf1aaf7.js";import y from"./WorkbenchHeader.2ec5a085.js";import S from"./SystemListCard.995eb67e.js";import h from"./QuickNav.b2ba1da3.js";import C from"./DynamicInfo.7b57c49a.js";import v from"./NoticeInfo.1990a525.js";import b from"./BannerInfo.ec8fcc83.js";import k from"./SaleRadar.f40e46a4.js";import{d as B,n as N,b as W}from"./data.93390901.js";import"./index.04511fa8.js";import"./index.9f5ee9cb.js";import"./useRefs.2caae181.js";import"./PlusOutlined.58f79c9c.js";import"./useFlexGapSupport.4972a32f.js";import"./index.c80a7d24.js";import"./index.1274b7b1.js";import"./useSize.f8b8ed9e.js";import"./eagerComputed.117d0821.js";import"./useWindowSizeFn.1b303f48.js";import"./useContentViewHeight.1db0a346.js";import"./ArrowLeftOutlined.ec67e314.js";import"./index.4961ba28.js";import"./transButton.07ac4e4d.js";import"./header.d801b988.js";import"./index.6bc1332b.js";import"./index.bfd414b8.js";import"./process.91b5dfff.js";import"./index.44c3112f.js";import"./useECharts.d44f6ae2.js";const L=l({components:{PageWrapper:g,WorkbenchHeader:y,SystemListCard:S,NoticeInfo:v,BannerInfo:b,QuickNav:h,DynamicInfo:C,SaleRadar:k,Card:_},setup(){const o=f(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:B,noticeInfoItems:N,bannerInfoItems:W}}}),w={class:"md:flex w-full enter-y"},P={class:"w-2/3"},$={class:"md:w-1/3 pl-4"};function D(o,H,V,z,F,Q){const a=n("WorkbenchHeader"),m=n("NoticeInfo"),i=n("SystemListCard"),s=n("BannerInfo"),p=n("DynamicInfo"),c=n("PageWrapper");return u(),I(c,{class:"!mt-4"},{headerContent:r(()=>[e(a)]),default:r(()=>[t("div",w,[t("div",P,[e(m,{dataSource:o.noticeInfoItems,loading:o.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),e(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),t("div",$,[e(s,{dataSource:o.bannerInfoItems,class:"!my-4",loading:o.loading},null,8,["dataSource","loading"]),e(p,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])]),_:1})}var yo=d(L,[["render",D]]);export{yo as default};
