import{av as e,a$ as r,aP as a}from"./index.574e7466.js";var o,d;(d=o||(o={})).GetJobGrades="/flow/org/jobGrade/getJobGrades",d.GetJobGradeTree="/flow/org/jobGrade/getJobGradeTree",d.SaveOrUpdate="/flow/org/jobGrade/saveOrUpdate",d.BatchSaveJobGradeTypeAndJobGrade="/flow/org/jobGrade/batchSaveJobGradeTypeAndJobGrade",d.Delete="/flow/org/jobGrade/delete",d.CheckEntityExist="/flow/org/jobGrade/checkEntityExist";const t=d=>{const t=e.post({url:o.GetJobGradeTree,params:d});return Promise.resolve(t).then((e=>{const o=r(e,{id:"id",children:"children",pid:"pid"});return a(o,(e=>{e.showName=`${e.name} (${e.code})`,"1"===e.sourceType&&(e.selectable=!1,e.disabled=!0),0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),o}))},s=r=>e.post({url:o.GetJobGrades,params:r}),l=r=>e.post({url:o.SaveOrUpdate,params:r}),i=r=>e.post({url:o.CheckEntityExist,params:r}),p=r=>e.post({url:o.Delete,params:r});export{t as a,i as c,p as d,s as g,l as s};
