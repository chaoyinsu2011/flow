import{c as e}from"./index.04486bdf.js";import{b as i}from"./index.40b4973a.js";import{j as s,bQ as t,K as r,o as n,m as o,V as a,ah as d,n as p}from"./vendor.686fd1d4.js";import"./index.4aea3684.js";/* empty css              *//* empty css              */import"./index.632f4a8c.js";import"./index.1a64133a.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.7d9b9537.js";import"./useContentViewHeight.c5b829cb.js";/* empty css              */import"./useSortable.979115a3.js";import"./lock.f1d58193.js";var l=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&i(s.event,e)}}}});l.render=function(e,i,s,t,l,m){const c=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,d(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:s=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[p(c)],14,["onClick"])))),128))],2)};export default l;
