import{ag as e,a_ as a,h as n}from"./index.04486bdf.js";import{P as o}from"./index.c1dc3b6b.js";import{j as t,r as s,u as r,K as i,o as l,m as p,Q as d,n as u,Y as c}from"./vendor.686fd1d4.js";import"./useContentViewHeight.c5b829cb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var f=t({name:"Copy",components:{CollapseContainer:e,PageWrapper:o},setup(){const e=s(""),{createMessage:o}=n(),{clipboardRef:t,copiedRef:i}=a();return{handleCopy:function(){const a=r(e);a?(t.value=a,r(i)&&o.warning("copy success！")):o.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"flex justify-center"},C=c(" Copy ");f.render=function(e,a,n,o,t,s){const r=i("a-input"),c=i("a-button"),f=i("CollapseContainer"),v=i("PageWrapper");return l(),p(v,{title:"文本复制示例"},{default:d((()=>[u(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:d((()=>[u("div",m,[u(r,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),u(c,{type:"primary",onClick:e.handleCopy},{default:d((()=>[C])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default f;
