import{bV as s}from"./index.ef013507.js";import{T as n}from"./index.0b0495b0.js";const p=[{title:"\u5934\u50CF",dataIndex:"image",width:80,align:"center"},{title:"\u7528\u6237\u540D",dataIndex:"username",width:120,align:"left"},{title:"\u59D3\u540D",dataIndex:"realName",width:120,align:"left"},{title:"\u5DE5\u53F7",dataIndex:"userNo",width:120,align:"left"},{title:"\u624B\u673A",dataIndex:"mobile",width:120,align:"left"},{title:"\u90AE\u7BB1",dataIndex:"email",width:120,align:"left"},{title:"\u6027\u522B",dataIndex:"sex",width:50,customRender:({record:u})=>{const e=~~u.sex===1,a=e?"green":"red",o=e?"\u7537":"\u5973";return s(n,{color:a},()=>o)}},{title:"\u6240\u5C5E\u7EC4",dataIndex:"groups",align:"left",customRender:({record:u})=>{const t=u.groups,e="green";return t&&t.map(o=>s(n,{color:e,style:{marginRight:"5px"}},()=>o.name))||[]}}],i=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D/\u59D3\u540D/\u624B\u673A"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],d=[{field:"id",label:"ID",component:"Input",show:!1},{field:"username",label:"\u7528\u6237\u540D",component:"Input",required:!0,colProps:{span:18}},{field:"realName",label:"\u59D3\u540D",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:20,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E20\uFF01"}],colProps:{span:18}},{field:"headImg",label:"",component:"Input",slot:"headImg",colProps:{style:"margin: auto;position: absolute;right: 0;",span:10}},{field:"sex",label:"\u6027\u522B",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"\u7537",value:1},{label:"\u5973",value:0}]},colProps:{span:18}},{field:"userNo",label:"\u5DE5\u53F7",component:"Input",required:!0,colProps:{span:24}},{label:"\u624B\u673A",field:"mobile",component:"Input",required:!0,colProps:{span:24}},{label:"\u90AE\u7BB1",field:"email",component:"Input",required:!1,colProps:{span:24}}],m=[{field:"id",label:"ID",component:"Input",show:!1},{field:"passwordNew",label:"\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u5BC6\u7801"},rules:[{required:!0,whitespace:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"},{pattern:new RegExp("[^\\u4e00-\\u9fa5]+"),type:"string",message:"\u5BC6\u7801\u4E0D\u80FD\u8F93\u5165\u6C49\u5B57\uFF01"},{min:6,max:32,message:"\u957F\u5EA6\u5FC5\u9700\u57286-32\u4E4B\u95F4\uFF01"}],colProps:{span:24}},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:u})=>[{required:!0,validator:(t,e)=>e?e!==u.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u786E\u8BA4\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")},{pattern:new RegExp("[^\\u4e00-\\u9fa5]+"),type:"string",message:"\u5BC6\u7801\u4E0D\u80FD\u8F93\u5165\u6C49\u5B57\uFF01"},{min:6,max:32,message:"\u957F\u5EA6\u5FC5\u9700\u57286-32\u4E4B\u95F4\uFF01"}],colProps:{span:24}}],c=[{field:"id",label:"ID",component:"Input",show:!1},{label:"\u9009\u62E9\u7EC4",field:"groups",slot:"groups",component:"Input",labelWidth:50,colProps:{span:24}}];export{d as a,c as b,p as c,m as p,i as s};
