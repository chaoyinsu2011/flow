import{dP as o,fE as a,f7 as l}from"./index.e61ad282.js";const c=e=>o.post({url:"/flow/org/jobGradeType/getJobGradeTypes",params:e}),n=e=>{const t=o.post({url:"/flow/org/jobGradeType/getJobGradeTypes",params:e});return Promise.resolve(t).then(s=>{s.forEach(r=>{r.key=r.id,r.value=r.id,r.title=r.name});const d=a(s,{id:"id",children:"children",pid:"pid"});return l(d,r=>{r.children.length===0&&delete r.children},{id:"id",children:"children",pid:"pid"}),d})},i=e=>o.post({url:"/flow/org/jobGradeType/saveOrUpdate",params:e}),y=e=>o.post({url:"/flow/org/jobGradeType/checkEntityExist",params:e}),T=e=>o.post({url:"/flow/org/jobGradeType/delete",params:e});export{c as a,y as c,T as d,n as g,i as s};
