import{j as e,bv as t,i as s,K as i,o as a,m as n,n as d,q as o,N as r,x as l}from"./vendor.686fd1d4.js";import{c as p}from"./index.91a03d82.js";import{b as f}from"./index.f6c1c2ca.js";import"./index.5f76010b.js";/* empty css              *//* empty css              */import"./index.97f1bef6.js";import"./index.81372485.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.ad33b388.js";import"./useContentViewHeight.5e4dffd7.js";/* empty css              */import"./useSortable.aa5494d2.js";import"./lock.fabd1a81.js";var m=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=l()(((e,t,s,l,p,f)=>{const m=i("Select");return a(),n("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(m,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));m.render=u,m.__scopeId="data-v-2dba4940";export default m;
