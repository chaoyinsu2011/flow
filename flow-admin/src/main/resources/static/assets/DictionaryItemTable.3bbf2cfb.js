import{_ as e}from"./TableImg.2164fbb5.js";import{f as t}from"./BasicForm.6aa2f34f.js";import{u as i}from"./useTable.c766bad0.js";import{a as o,i as a,b as n,e as r}from"./dictionary.2e6c12a2.js";import{P as s}from"./index.1d2e788a.js";import{h as d}from"./index.99f998d8.js";import{b as c}from"./index.e1dd33bd.js";import l from"./DictionaryItemModal.7c998439.js";import{j as m,r as p,K as f,o as u,m as b,n as j,Q as x,X as h,Y as g}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.d7887b42.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e5d10da7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b526d419.js";/* empty css              *//* empty css              *//* empty css              */import"./download.9a81d061.js";import"./base64Conver.bb012c73.js";import"./index.4641642c.js";import"./useContentViewHeight.1a9d325a.js";/* empty css              *//* empty css              */const{createMessage:v}=d();var I=m({name:"DictionaryItemTable",components:{BasicTable:e,DictionaryItemModal:l,PageWrapper:s,TableAction:t},setup(){const[e,{openModal:t,setModalProps:s}]=c(),d=p(""),[l,{reload:m,setProps:f,setTableData:u}]=i({title:"列表",api:o,columns:a,formConfig:{labelWidth:120,schemas:n,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictId:d,registerTable:l,registerModal:e,cleanTableData:function(){u([]),d.value=""},handleCreate:function(){""!==d.value?(s({title:"新增字典项"}),t(!0,{record:{mainId:d.value},isUpdate:!1})):v.warning("请选择数据字典！",2)},handleEdit:function(e){s({title:"修改字典项"}),t(!0,{record:e,isUpdate:!0})},filterByDict:function(e){d.value=e,f({searchInfo:{mainId:d.value}}),m({page:1})},handleDelete:function(e){r(e.id).then((()=>{m()}))},handleSuccess:function(){m()}}}});const T={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},w=g("新增");I.render=function(e,t,i,o,a,n){const r=f("a-button"),s=f("TableAction"),d=f("BasicTable"),c=f("DictionaryItemModal");return u(),b("div",T,[j(d,{onRegister:e.registerTable},{toolbar:x((()=>[""!==e.dictId?(u(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:x((()=>[w])),_:1},8,["onClick"])):h("",!0)])),action:x((({record:t})=>[j(s,{actions:[{title:"修改字典项",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default I;
