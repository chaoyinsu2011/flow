import{av as e,a$ as i,aP as t}from"./index.574e7466.js";var o,s;(s=o||(o={})).GetPositionSeqs="/flow/org/positionSeq/getPositionSeqs",s.SaveOrUpdate="/flow/org/positionSeq/saveOrUpdate",s.Delete="/flow/org/positionSeq/delete",s.CheckEntityExist="/flow/org/positionSeq/checkEntityExist";const r=s=>{const r=e.post({url:o.GetPositionSeqs,params:s});return Promise.resolve(r).then((e=>{const o=i(e,{id:"id",children:"children",pid:"pid"});return t(o,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),o}))},n=i=>e.post({url:o.SaveOrUpdate,params:i}),a=i=>e.post({url:o.Delete,params:i});export{a as d,r as g,n as s};
