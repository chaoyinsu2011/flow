import{aw as t}from"./index.91a03d82.js";var s,e;(e=s||(s={})).AccountList="/system/getAccountList",e.DeptList="/system/getDeptList",e.setRoleStatus="/system/setRoleStatus",e.MenuList="/system/getMenuList",e.RolePageList="/system/getRoleListByPage",e.GetAllRoleList="/system/getAllRoleList";const a=e=>t.get({url:s.AccountList,params:e}),l=e=>t.get({url:s.DeptList,params:e}),i=e=>t.get({url:s.MenuList,params:e}),o=e=>t.get({url:s.RolePageList,params:e}),r=e=>t.get({url:s.GetAllRoleList,params:e}),u=(e,a)=>t.post({url:s.setRoleStatus,params:{id:e,status:a}});export{l as a,r as b,o as c,i as d,a as g,u as s};
