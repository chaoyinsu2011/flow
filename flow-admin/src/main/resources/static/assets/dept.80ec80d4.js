import{a$ as e,aP as r,av as t}from"./index.574e7466.js";var d,i;(i=d||(d={})).DeptList="/flow/org/department/getAll",i.GetOrgTree="/flow/org/department/getOrgTree",i.SaveOrUpdate="/flow/org/department/saveOrUpdate",i.Delete="/flow/org/department/delete",i.CheckEntityExist="/flow/org/department/checkEntityExist";const n=i=>{const n=t.post({url:d.DeptList,params:i});return Promise.resolve(n).then((t=>{const d=e(t,{id:"id",children:"children",pid:"pid"});return r(d,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),d}))},l=()=>{const i=t.get({url:d.GetOrgTree});return Promise.resolve(i).then((t=>{const d=e(t,{id:"id",children:"children",pid:"pid"});return r(d,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),d}))},s=e=>t.post({url:d.SaveOrUpdate,params:e}),a=e=>t.post({url:d.Delete,params:e}),p=e=>t.post({url:d.CheckEntityExist,params:e});export{n as a,p as c,a as d,l as g,s};
