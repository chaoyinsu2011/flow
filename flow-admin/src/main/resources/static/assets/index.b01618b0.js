import{M as e}from"./index.2bb9c759.js";import{P as n}from"./index.52d50d5a.js";import{j as t,r as a,u as o,K as r,o as s,m as i,Q as d,n as m,Y as u}from"./vendor.686fd1d4.js";import"./index.ffeb6485.js";import"./index.08cdb95c.js";import"./useWindowSizeFn.d82e06bf.js";import"./useContentViewHeight.7085396b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var l=t({components:{MarkDown:e,PageWrapper:n},setup(){const e=a(null),n=a("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const f=u(" 黑暗主题 ");l.render=function(e,n,t,a,o,u){const l=r("a-button"),p=r("MarkDown"),c=r("PageWrapper");return s(),i(c,{title:"MarkDown组件示例"},{default:d((()=>[m(l,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[f])),_:1},8,["onClick"]),m(p,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default l;
