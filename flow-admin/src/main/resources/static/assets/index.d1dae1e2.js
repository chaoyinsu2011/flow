import{_ as e}from"./TableImg.69b87631.js";import{f as o}from"./BasicForm.ccc180d0.js";import{u as n}from"./useTable.96fb9503.js";import{b as t,d as i,p as a,c as s}from"./modelInfo.c9012fcd.js";import{P as d}from"./index.27db6639.js";import r from"./FlowCategoryTree.da08dd6a.js";import{b as l}from"./index.cf90a7d3.js";import{_ as c,c as m,s as p}from"./ModelInfoModal.16903a03.js";import f from"./index.d85c1ab3.js";import{j as u,br as b,bV as j,ay as g,b2 as x,b_ as h,r as w,J as X,u as y,k as C,l as S,K as v,at as M,w as T,o as B,m as I,n as P,x as R,Y as F}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              */import{a as A}from"./app.048810e2.js";import{r as _,h as k}from"./index.91a03d82.js";import{A as O}from"./index.3350134f.js";/* empty css              *//* empty css              */import"./useForm.753834fe.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.aa5494d2.js";/* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";import"./useContentViewHeight.5e4dffd7.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.e42e9f52.js";import"./useContextMenu.b4089160.js";import"./category.f4414358.js";/* empty css              *//* empty css              */import"./index.e19e82d4.js";import"./index.esm.01aeab01.js";const{createMessage:W}=k();var D=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:d,FlowCategoryTree:r,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:j,Popconfirm:g,Tag:x,DeleteOutlined:h,Authority:O,BpmnPreviewModal:f},setup(){const e=_(),[o,{openModal:d}]=l(),[r,{openModal:c,setModalProps:f}]=l();w({});const u=w({}),b=w(!1),[j,{getForm:g,reload:x}]=n({title:"列表",api:t,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function h(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function C(e){d(!0,{record:e,isUpdate:!0})}function S(e){i([e.id]).then((e=>{x()}))}function v(e){b.value=!0,a(e.modelId).then((e=>{x(),W.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function M(e){b.value=!0,s(e.modelId).then((e=>{x()})).finally((()=>{b.value=!1}))}return X((()=>{const{updateSchema:e}=g();A().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:j,registerBpmnPreviewModal:r,registerModal:o,handlePublish:v,handleStop:M,createActions:function(e,o){const{status:n}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:h.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:v.bind(null,e)},ifShow:2===n},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:M.bind(null,e)},ifShow:3===n||2===n},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:C.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:S.bind(null,e)}}]},handleCreate:function(){y(u).code?d(!0,{record:{categoryCode:y(u).code},isUpdate:!0}):W.warning("请选择分类！",2)},handleEdit:C,cancelDeleteRole:function(){},handleDelete:S,handleSuccess:function(){x()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};x({searchInfo:o})}}}});const H=R();C("data-v-1636c3ca");const K=F(" 新增 ");S();const U=H(((e,o,n,t,i,a)=>{const s=v("FlowCategoryTree"),d=v("a-button"),r=v("TableAction"),l=v("BasicTable"),c=v("ModelInfoModal"),m=v("BpmnPreviewModal"),p=v("PageWrapper"),f=M("loading");return T((B(),I(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:H((()=>[P(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),P(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:H((()=>[P(d,{type:"primary",onClick:e.handleCreate},{default:H((()=>[K])),_:1},8,["onClick"])])),action:H((({record:o,column:n})=>[P(r,{actions:e.createActions(o,n)},null,8,["actions"])])),_:1},8,["onRegister"]),P(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),P(m,{onRegister:e.registerBpmnPreviewModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1},512)),[[f,e.loadingRef]])}));D.render=U,D.__scopeId="data-v-1636c3ca";export default D;
