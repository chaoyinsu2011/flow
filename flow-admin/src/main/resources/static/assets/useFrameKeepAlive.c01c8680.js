import{X as e,a0 as t}from"./index.99f998d8.js";import{i as n,a,bk as o,u as s,t as u}from"./vendor.686fd1d4.js";function r(){const t=e();return{setMultipleTabSetting:function(e){t.setProjectConfig({multiTabsSetting:e})},getShowMultipleTab:n((()=>t.getMultiTabsSetting.show)),getShowQuick:n((()=>t.getMultiTabsSetting.showQuick)),getShowRedo:n((()=>t.getMultiTabsSetting.showRedo)),getShowFold:n((()=>t.getMultiTabsSetting.showFold))}}function i(){const e=a(),{currentRoute:i}=e,{getShowMultipleTab:g}=r(),c=t(),l=n((()=>f(u(e.getRoutes()))||[])),m=n((()=>c.getTabList.reduce(((e,t)=>(t.meta&&Reflect.has(t.meta,"frameSrc")&&e.push(t.name),e)),[])));function f(e){let t=[];for(const n of e){const{meta:{frameSrc:e}={},children:a}=n;e&&t.push(n),a&&a.length&&t.push(...f(a))}return t=o(t,"name"),t}return{hasRenderFrame:function(t){return s(g)?s(m).includes(t):e.currentRoute.value.name===t},getFramePages:l,showIframe:function(e){return e.name===s(i).name},getAllFramePages:f}}export{r as a,i as u};
