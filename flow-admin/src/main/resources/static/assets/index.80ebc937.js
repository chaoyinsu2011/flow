import{_ as e}from"./TableImg.28dd5cba.js";import{f as o}from"./BasicForm.4961b69c.js";import{u as t}from"./useTable.f161cb20.js";import{b as n}from"./useModal.c70d8b8c.js";import{_ as i,g as r,c as a,s,d}from"./LoginLogModal.ceff0f35.js";import{g as c}from"./index.f36f9bca.js";import{P as l}from"./perEnum.9a5ef72f.js";import{_ as m}from"./Authority.vue_vue&type=script&lang.aa9d4c9d.js";import{k as u,K as p,o as f,n as b,q as h,Q as g,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";var x=u({name:"LoginLog",components:{BasicTable:e,TableAction:o,LoginLogModal:i,Authority:m},setup(){const{createMessage:e,createConfirm:o}=c(),[i,{openModal:m}]=n(),[u,{reload:p,getSelectRows:f}]=t({title:"列表",api:r,columns:a,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:l,registerTable:u,registerModal:i,handleCreate:function(){m(!0,{isUpdate:!1})},handleEdit:function(e){m(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d([e.id]).then((()=>{p()}))},handleDeleteAll:function(){const t=f();t&&t.length<=0?e.warn("请选择行！"):o({iconType:"warning",title:"提示",content:"确定要删除所选行吗？",onOk:()=>{return e=this,o=null,n=function*(){const e=t.map((e=>e.id));yield d(e).then((()=>{p()}))},new Promise(((t,i)=>{var r=e=>{try{s(n.next(e))}catch(o){i(o)}},a=e=>{try{s(n.throw(e))}catch(o){i(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,a);s((n=n.apply(e,o)).next())}));var e,o,n}})},handleSuccess:function(){p()}}}});const v=j(" 删除 ");x.render=function(e,o,t,n,i,r){const a=p("a-button"),s=p("Authority"),d=p("TableAction"),c=p("BasicTable"),l=p("LoginLogModal");return f(),b("div",null,[h(c,{onRegister:e.registerTable},{toolbar:g((()=>[h(s,{value:this.$options.name+":"+e.PerEnum.DELETE},{default:g((()=>[h(a,{type:"danger",onClick:e.handleDeleteAll},{default:g((()=>[v])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:g((({record:o})=>[h(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
