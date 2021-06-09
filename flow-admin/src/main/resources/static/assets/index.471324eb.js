import{_ as e}from"./TableImg.28dd5cba.js";import{f as o}from"./BasicForm.4961b69c.js";import{u as t}from"./useTable.f161cb20.js";import{b as n,d as a,p as i,c as s}from"./modelInfo.7c9da4b1.js";import{_ as d}from"./PageWrapper.5df89cd8.js";import r from"./FlowCategoryTree.9394b675.js";import{b as l}from"./useModal.c70d8b8c.js";import{_ as c,c as p,s as m}from"./ModelInfoModal.c3f50b4d.js";import f from"./index.0863a09e.js";import{k as u,bp as b,ca as j,aw as g,b2 as x,bW as h,r as X,J as w,u as y,l as v,m as C,K as M,ar as I,w as S,o as T,n as B,x as P,q as F}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              */import{a as _}from"./app.bfd31a51.js";import{s as A,g as W}from"./index.f36f9bca.js";import{_ as R}from"./Authority.vue_vue&type=script&lang.aa9d4c9d.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";import"./usePageContext.c12a9fc6.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.93b9c797.js";import"./useContextMenu.e6e614fe.js";import"./category.0603b4aa.js";/* empty css              *//* empty css              */import"./index.96b0e741.js";import"./index.esm.01aeab01.js";const{createMessage:k}=W();var O=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:d,FlowCategoryTree:r,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:j,Popconfirm:g,Tag:x,DeleteOutlined:h,Authority:R,BpmnPreviewModal:f},setup(){const e=A(),[o,{openModal:d}]=l(),[r,{openModal:c,setModalProps:f}]=l();X({});const u=X({}),b=X(!1),[j,{getForm:g,reload:x}]=t({title:"列表",api:n,columns:p,formConfig:{labelWidth:120,schemas:m,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{flowableModelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function h(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function v(e){d(!0,{record:e,isUpdate:!0})}function C(e){a([e.id]).then((e=>{x()}))}function M(e){b.value=!0,i(e.modelId).then((e=>{x(),k.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function I(e){b.value=!0,s(e.modelId).then((e=>{x()})).finally((()=>{b.value=!1}))}return w((()=>{const{updateSchema:e}=g();_().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:j,registerBpmnPreviewModal:r,registerModal:o,handlePublish:M,handleStop:I,createActions:function(e,o){const{status:t}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:h.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:M.bind(null,e)},ifShow:2===t},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:I.bind(null,e)},ifShow:3===t||2===t},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:v.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:C.bind(null,e)}}]},handleCreate:function(){y(u).code?d(!0,{record:{categoryCode:y(u).code},isUpdate:!0}):k.warning("请选择分类！",2)},handleEdit:v,cancelDeleteRole:function(){},handleDelete:C,handleSuccess:function(){x()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};x({searchInfo:o})}}}});const D=P();v("data-v-18d09b83");const E=F("div",{style:{"font-size":"30px",padding:"100px",color:"#aaa","text-align":"center"}}," 敬请期待！ ",-1);C();const K=D(((e,o,t,n,a,i)=>{const s=M("PageWrapper"),d=I("loading");return S((T(),B(s,{dense:"",contentFullHeight:"",fixedHeight:""},{default:D((()=>[E])),_:1},512)),[[d,e.loadingRef]])}));O.render=K,O.__scopeId="data-v-18d09b83";export default O;
