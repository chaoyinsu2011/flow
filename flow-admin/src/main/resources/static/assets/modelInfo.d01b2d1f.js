import{dP as o}from"./index.ef013507.js";const a=e=>{const t=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let l=e||{};l&&(delete l.pageNum,delete l.pageSize);const s={query:t,entity:l};return o.post({url:"/flow/flowable/modelInfo/getPagerModel",params:s})};function p(e){return o.get({url:"/flow/flowable/bpmn/getBpmnByModelKey/"+e.modelKey,params:{}})}const f=e=>o.post({url:"/flow/flowable/modelInfo/saveOrUpdateModelInfo",params:e}),d=e=>o.post({url:"/flow/flowable/bpmn/publishBpmn/"+e}),m=e=>o.post({url:"/flow/flowable/bpmn/stopBpmn/"+e}),r=e=>o.get({url:"/flow/flowable/modelInfo/getByModelId/"+e}),u=e=>o.post({url:"/flow/flowable/modelInfo/deleteByIds",params:e}),g=e=>o.post({url:"/flow/flowable/modelInfo/checkEntityExist",params:e});export{r as a,a as b,m as c,u as d,g as e,p as g,d as p,f as s};
