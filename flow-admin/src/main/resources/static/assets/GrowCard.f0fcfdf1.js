import{C as t}from"./index.3dae036b.js";import{_ as a}from"./index.91a03d82.js";import{j as o,b2 as l,b3 as e,K as n,o as s,m as i,V as r,ah as d,Q as c,n as u,Y as m,q as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const f=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var x=o({components:{CountTo:t,Tag:l,Card:e,Icon:a},setup:()=>({growCardList:f})});const v={class:"md:flex"},g={class:"py-4 px-4 flex justify-between"},b={class:"p-2 px-4 flex justify-between"};x.render=function(t,a,o,l,e,f){const x=n("Tag"),j=n("CountTo"),w=n("Icon"),C=n("Card");return s(),i("div",v,[(s(!0),i(r,null,d(t.growCardList,((a,o)=>(s(),i(C,{key:a.title,size:"small",loading:t.$attrs.loading,title:a.title,class:["md:w-1/4 w-full !md:mt-0 !mt-4",[o+1<4&&"!md:mr-4"]],canExpan:!1},{extra:c((()=>[u(x,{color:a.color},{default:c((()=>[m(p(a.action),1)])),_:2},1032,["color"])])),default:c((()=>[u("div",g,[u(j,{prefix:"$",startVal:1,endVal:a.value,class:"text-2xl"},null,8,["endVal"]),u(w,{icon:a.icon,size:40},null,8,["icon"])]),u("div",b,[u("span",null,"总"+p(a.title),1),u(j,{prefix:"$",startVal:1,endVal:a.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default x;
