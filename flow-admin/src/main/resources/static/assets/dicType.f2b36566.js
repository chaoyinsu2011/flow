import{aw as e,b3 as s,aR as t}from"./index.04486bdf.js";var i,a;(a=i||(i={})).GetDicTypes="/flow/base/dicType/getDicTypes",a.SaveOrUpdate="/flow/base/dicType/saveOrUpdate",a.Delete="/flow/base/dicType/delete",a.CheckEntityExist="/flow/base/dicType/checkEntityExist";const r=a=>{const r=e.post({url:i.GetDicTypes,params:a});return Promise.resolve(r).then((e=>{const i=s(e,{id:"id",children:"children",pid:"pid"});return t(i,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),i}))},d=s=>e.post({url:i.SaveOrUpdate,params:s}),p=s=>e.post({url:i.Delete,params:s}),c=s=>e.post({url:i.CheckEntityExist,params:s});export{c,p as d,r as g,d as s};
