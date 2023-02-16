import{bV as t,b9 as a}from"./index.e61ad282.js";import{T as l}from"./index.6e0a0264.js";const i=[{title:"\u56FE\u6807",dataIndex:"image",width:60,customRender:({record:e})=>t(a,{icon:e.image})},{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u6807\u8BC6",dataIndex:"sn",width:180,align:"left"},{title:"URL",dataIndex:"url",align:"left"},{title:"\u9996\u9875",dataIndex:"indexUrl",width:100,align:"left"},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:e})=>{const u=~~e.status===1,s=u?"green":"red",n=u?"\u542F\u7528":"\u505C\u7528";return t(l,{color:s},()=>n)}},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:80,align:"right"},{title:"\u5907\u6CE8",dataIndex:"note",align:"left"}],d=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],c=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:32,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"}],colProps:{span:24}},{field:"sn",label:"\u6807\u8BC6",required:!0,component:"Input",colProps:{span:24}},{field:"url",label:"\u7CFB\u7EDFURL",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u7CFB\u7EDFURL\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("[a-zA-z]+://[^\\s]*"),type:"string",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u5730\u5740\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"}],colProps:{span:24}},{field:"indexUrl",label:"\u9996\u9875URL",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u9996\u9875URL\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^\\/(\\w+\\/?)+(\\.?\\w+)?$"),type:"string",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u5730\u5740\uFF01\uFF01"},{max:128,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E128\uFF01"}],colProps:{span:24}},{field:"image",label:"\u56FE\u6807",required:!1,component:"IconPicker",colProps:{span:24}},{field:"orderNo",label:"\u6392\u5E8F\u53F7",helpMessage:"\u6570\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D\uFF01",required:!1,component:"InputNumber"},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528"},colProps:{span:24}},{label:"\u5907\u6CE8",field:"note",component:"InputTextArea",rules:[{max:500,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E500\uFF01"}],colProps:{span:24}}],F=[{field:"id",label:"ID",component:"Input",show:!1},{field:"sn",label:"\u6807\u8BC6",component:"Input",slot:"snSlot",colProps:{span:24}},{label:"\u5BC6\u94A5",field:"secretKey",component:"InputTextArea",slot:"secretKeySlot",colProps:{span:24}}];export{F as a,i as c,c as f,d as s};
