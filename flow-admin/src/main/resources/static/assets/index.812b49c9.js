import{k as e,bz as r,K as o,o as a,n as s,Q as t,q as i,Y as n}from"./vendor.56d2c57f.js";/* empty css              */import{u as p}from"./useDrawer.05668bc1.js";import m from"./Drawer1.f438885b.js";import d from"./Drawer2.4ad90852.js";import f from"./Drawer3.0862c985.js";import w from"./Drawer4.11a00d44.js";import c from"./Drawer5.0a616851.js";import{_ as D}from"./PageWrapper.37b62bcf.js";/* empty css              */import"./index.574e7466.js";import"./BasicForm.4f71108f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";import"./uuid.c53863e7.js";/* empty css              */import"./useModal.919850c0.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";import"./useForm.4c43bf99.js";import"./usePageContext.568cee97.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var l=e({components:{Alert:r,PageWrapper:D,Drawer1:m,Drawer2:d,Drawer3:f,Drawer4:w,Drawer5:c},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[a,{openDrawer:s}]=p(),[t,{openDrawer:i}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:f}]=p();return{register1:e,openDrawer1:r,register2:a,openDrawer2:s,register3:t,openDrawer3:i,register4:n,register5:d,openDrawer5:f,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const g=n(" 打开Drawer "),j=n(" 打开Drawer "),u=n(" 打开Drawer "),b=n(" 打开Drawer并传递数据 "),x=n(" 打开详情Drawer ");l.render=function(e,r,n,p,m,d){const f=o("Alert"),w=o("a-button"),c=o("Drawer1"),D=o("Drawer2"),l=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return a(),s(C,{title:"抽屉组件使用示例"},{default:t((()=>[i(f,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[g])),_:1},8,["onClick"]),i(f,{message:"内外同时控制显示隐藏","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:t((()=>[j])),_:1}),i(f,{message:"自适应高度/显示footer","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:t((()=>[u])),_:1}),i(f,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),i(f,{message:"详情页模式","show-icon":""}),i(w,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),i(c,{onRegister:e.register1},null,8,["onRegister"]),i(D,{onRegister:e.register2},null,8,["onRegister"]),i(l,{onRegister:e.register3},null,8,["onRegister"]),i(y,{onRegister:e.register4},null,8,["onRegister"]),i(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default l;
