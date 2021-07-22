import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.93f19dfa.js";import{t}from"./data.5e96733f.js";import{h as a}from"./index.04486bdf.js";import{P as n}from"./index.c1dc3b6b.js";import{j as l,r as s,u as c,K as d,o,m as i,Q as r,n as u,Y as f}from"./vendor.686fd1d4.js";import"./useContextMenu.1f0fede2.js";/* empty css              */import"./useContentViewHeight.c5b829cb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var p=l({components:{BasicTree:e,PageWrapper:n},setup(){const e=s(null),{createMessage:n}=a();function l(){const t=c(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){l().filterByLevel(e)},handleSetCheckData:function(){l().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=l().getCheckedKeys();n.success(JSON.stringify(e))},handleSetSelectData:function(){l().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=l().getSelectedKeys();n.success(JSON.stringify(e))},handleSetExpandData:function(){l().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=l().getExpandedKeys();n.success(JSON.stringify(e))},appendNodeByKey:function(e=null){l().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){l().deleteNodeByKey(e)},updateNodeByKey:function(e){l().updateNodeByKey(e,{title:"parent2-new"})},checkAll:function(e){l().checkAll(e)},expandAll:function(e){l().expandAll(e)}}}});const m={class:"mb-4"},k=f(" 展开全部 "),y=f(" 折叠全部 "),h=f(" 全选 "),C=f(" 全不选 "),_=f(" 显示到第2级 "),x=f(" 显示到第1级 "),K={class:"mb-4"},D=f(" 设置勾选数据 "),S=f(" 获取勾选数据 "),B=f(" 设置选中数据 "),b=f(" 获取选中数据 "),j=f(" 设置展开数据 "),N=f(" 获取展开数据 "),g={class:"mb-4"},v=f(" 添加根节点 "),A=f(" 添加在parent3内添加节点 "),E=f(" 删除parent3节点 "),G=f(" 更新parent2节点 ");p.render=function(e,t,a,n,l,s){const c=d("a-button"),f=d("BasicTree"),p=d("PageWrapper");return o(),i(p,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:r((()=>[u("div",m,[u(c,{onClick:t[1]||(t[1]=t=>e.expandAll(!0)),class:"mr-2"},{default:r((()=>[k])),_:1}),u(c,{onClick:t[2]||(t[2]=t=>e.expandAll(!1)),class:"mr-2"},{default:r((()=>[y])),_:1}),u(c,{onClick:t[3]||(t[3]=t=>e.checkAll(!0)),class:"mr-2"},{default:r((()=>[h])),_:1}),u(c,{onClick:t[4]||(t[4]=t=>e.checkAll(!1)),class:"mr-2"},{default:r((()=>[C])),_:1}),u(c,{onClick:t[5]||(t[5]=t=>e.handleLevel(2)),class:"mr-2"},{default:r((()=>[_])),_:1}),u(c,{onClick:t[6]||(t[6]=t=>e.handleLevel(1)),class:"mr-2"},{default:r((()=>[x])),_:1})]),u("div",K,[u(c,{onClick:e.handleSetCheckData,class:"mr-2"},{default:r((()=>[D])),_:1},8,["onClick"]),u(c,{onClick:e.handleGetCheckData,class:"mr-2"},{default:r((()=>[S])),_:1},8,["onClick"]),u(c,{onClick:e.handleSetSelectData,class:"mr-2"},{default:r((()=>[B])),_:1},8,["onClick"]),u(c,{onClick:e.handleGetSelectData,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),u(c,{onClick:e.handleSetExpandData,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),u(c,{onClick:e.handleGetExpandData,class:"mr-2"},{default:r((()=>[N])),_:1},8,["onClick"])]),u("div",g,[u(c,{onClick:t[7]||(t[7]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:r((()=>[v])),_:1}),u(c,{onClick:t[8]||(t[8]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[A])),_:1}),u(c,{onClick:t[9]||(t[9]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[E])),_:1}),u(c,{onClick:t[10]||(t[10]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:r((()=>[G])),_:1})]),u(f,{treeData:e.treeData,title:"函数操作",ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})};export default p;
