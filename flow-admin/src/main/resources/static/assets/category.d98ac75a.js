import{aw as e,b3 as t,aR as a}from"./index.99f998d8.js";var r,s;(s=r||(r={})).GetCategories="/flow/base/category/getCategories",s.SaveOrUpdate="/flow/base/category/saveOrUpdate",s.Delete="/flow/base/category/delete",s.CheckEntityExist="/flow/base/category/checkEntityExist";const i=s=>{const i=e.post({url:r.GetCategories,params:s});return Promise.resolve(i).then((e=>{const r=t(e,{id:"id",children:"children",pid:"pid"});return a(r,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),r}))},o=t=>e.post({url:r.SaveOrUpdate,params:t}),d=t=>e.post({url:r.CheckEntityExist,params:t}),l=t=>e.post({url:r.Delete,params:t});export{d as c,l as d,i as g,o as s};
