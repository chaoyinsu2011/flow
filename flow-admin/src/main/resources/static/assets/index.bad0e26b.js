import{ae as e,a2 as l}from"./index.574e7466.js";import{_ as s}from"./PageWrapper.37b62bcf.js";import{k as o,ad as a,K as t,o as r,n as c,Q as n,q as i,Y as f}from"./vendor.56d2c57f.js";import"./usePageContext.568cee97.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var d=o({name:"TabsDemo",components:{CollapseContainer:e,PageWrapper:s,[a.name]:a},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:a,closeCurrent:t,refreshPage:r}=l();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:a,closeCurrent:t,refreshPage:r}}});const m=f(" 关闭所有 "),u=f(" 关闭左侧 "),p=f(" 关闭右侧 "),C=f(" 关闭其他 "),k=f(" 关闭当前 "),g=f(" 刷新当前 ");d.render=function(e,l,s,o,a,f){const d=t("a-input"),h=t("CollapseContainer"),_=t("a-button"),j=t("PageWrapper");return r(),c(j,{title:"标签页操作示例"},{default:n((()=>[i(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:n((()=>[i(d,{placeholder:"请输入"})])),_:1}),i(h,{class:"mt-4",title:"标签页操作"},{default:n((()=>[i(_,{class:"mr-2",onClick:e.closeAll},{default:n((()=>[m])),_:1},8,["onClick"]),i(_,{class:"mr-2",onClick:e.closeLeft},{default:n((()=>[u])),_:1},8,["onClick"]),i(_,{class:"mr-2",onClick:e.closeRight},{default:n((()=>[p])),_:1},8,["onClick"]),i(_,{class:"mr-2",onClick:e.closeOther},{default:n((()=>[C])),_:1},8,["onClick"]),i(_,{class:"mr-2",onClick:e.closeCurrent},{default:n((()=>[k])),_:1},8,["onClick"]),i(_,{class:"mr-2",onClick:e.refreshPage},{default:n((()=>[g])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;
