import{_ as r,a as e}from"./useDrawer.05668bc1.js";import{k as s,K as a,o as t,n as o,Q as n,q as i,N as c,Y as d}from"./vendor.56d2c57f.js";/* empty css              */import"./index.574e7466.js";var f=s({components:{BasicDrawer:r},setup(){const[r,{closeDrawer:s}]=e();return{register:r,closeDrawer:s}}});const l=d(" Drawer Info. "),w=d(" 内部关闭drawer ");f.render=function(r,e,s,d,f,p){const u=a("a-button"),m=a("BasicDrawer");return t(),o(m,c(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:n((()=>[l,i(u,{type:"primary",onClick:r.closeDrawer},{default:n((()=>[w])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default f;
