import{_ as e}from"./TableImg.28dd5cba.js";import{f as t}from"./BasicForm.4961b69c.js";import{u as o}from"./useTable.f161cb20.js";import{a as i,i as a,b as n,e as r}from"./dictionary.990a1198.js";import{_ as s}from"./PageWrapper.5df89cd8.js";import{g as d}from"./index.f36f9bca.js";import{b as c}from"./useModal.c70d8b8c.js";import l from"./DictionaryItemModal.fe1b223e.js";import{k as m,r as p,K as u,o as f,n as b,q as j,Q as g,X as h,Y as x}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */const{createMessage:w}=d();var I=m({name:"DictionaryItemTable",components:{BasicTable:e,DictionaryItemModal:l,PageWrapper:s,TableAction:t},setup(){const[e,{openModal:t,setModalProps:s}]=c(),d=p(""),[l,{reload:m,setProps:u,setTableData:f}]=o({title:"列表",api:i,columns:a,formConfig:{labelWidth:120,schemas:n,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictId:d,registerTable:l,registerModal:e,cleanTableData:function(){f([]),d.value=""},handleCreate:function(){""!==d.value?(s({title:"新增字典项"}),t(!0,{record:{mainId:d.value},isUpdate:!1})):w.warning("请选择数据字典！",2)},handleEdit:function(e){s({title:"修改字典项"}),t(!0,{record:e,isUpdate:!0})},filterByDict:function(e){d.value=e,u({searchInfo:{mainId:d.value}}),m({page:1})},handleDelete:function(e){r(e.id).then((()=>{m()}))},handleSuccess:function(){m()}}}});const T={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},v=x("新增");I.render=function(e,t,o,i,a,n){const r=u("a-button"),s=u("TableAction"),d=u("BasicTable"),c=u("DictionaryItemModal");return f(),b("div",T,[j(d,{onRegister:e.registerTable,class:"w-12/12 xl:w-12/12"},{toolbar:g((()=>[""!==e.dictId?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:g((()=>[v])),_:1},8,["onClick"])):h("",!0)])),action:g((({record:t})=>[j(s,{actions:[{title:"修改字典项",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default I;
