import{_ as e}from"./TableImg.f5e002b4.js";import{f as o}from"./BasicForm.4f71108f.js";import{u as t}from"./useTable.38359fc9.js";import{j as i,k as n,l as a,m as r}from"./dictionary.e408bdd0.js";import{_ as s}from"./PageWrapper.37b62bcf.js";import{g as c}from"./index.574e7466.js";import{b as d}from"./useModal.919850c0.js";import l from"./DictionaryModal.bf8b645b.js";import{k as p,r as m,K as f,o as u,n as b,q as j,Q as h,X as g,Y as y}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";import"./usePageContext.568cee97.js";/* empty css              *//* empty css              */const{createMessage:w}=c();var x=p({name:"DictionaryTable",components:{BasicTable:e,DictionaryModal:l,PageWrapper:s,TableAction:o},setup(e,{emit:o}){const[s,{openModal:c,setModalProps:l}]=d(),p=m(""),[f,{reload:u,setProps:b,setTableData:j,setSelectedRowKeys:h}]=t({title:"列表",api:i,columns:n,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:f,registerModal:s,dictTypeId:p,handleDeleteStop:function(e,o){o.stopPropagation()},clickDictionary:function(e){h(e.id),o("handleSelect",e.id)},changeDictionary:function({keys:e,rows:t}){o("handleSelect",t[0].id)},filterByDictType:function(e){p.value=e,b({searchInfo:{dicTypeId:e}}),u({page:1})},cleanTableData:function(){j([]),p.value=""},handleCreate:function(){""!==p.value?(l({title:"新增字典"}),c(!0,{record:{dicTypeId:p.value},isUpdate:!1})):w.warning("请选择数据类型！",2)},handleEdit:function(e,o){o.stopPropagation(),l({title:"修改字典"}),c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r(e.id).then((()=>{u()}))},handleSuccess:function(){u()}}}});const S={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=y("新增");x.render=function(e,o,t,i,n,a){const r=f("a-button"),s=f("TableAction"),c=f("BasicTable"),d=f("DictionaryModal");return u(),b("div",S,[j(c,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary,class:"w-4/4 xl:w-5/5"},{toolbar:h((()=>[""!==e.dictTypeId?(u(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:h((()=>[T])),_:1},8,["onClick"])):g("",!0)])),action:h((({record:o})=>[j(s,{actions:[{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,o),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister","onRowClick","onSelectionChange"]),j(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
