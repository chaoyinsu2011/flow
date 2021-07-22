import{_ as e}from"./TableImg.69b87631.js";import{f as o}from"./BasicForm.ccc180d0.js";import{u as t}from"./useTable.96fb9503.js";import{a as n,d as i}from"./group.f7896d1e.js";import{c as s,s as r}from"./group.data.50658ad5.js";import d from"./GroupModal.543df13d.js";import a from"./SetAccountModal.732a0d2d.js";import c from"./SetAclModal.4d9f2884.js";import{b as l}from"./index.cf90a7d3.js";import{A as u}from"./index.3350134f.js";import{P as m}from"./perEnum.9a5ef72f.js";import{j as p,K as f,o as j,m as h,n as b,Q as S,Y as A}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.753834fe.js";import"./index.91a03d82.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.aa5494d2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";import"./account.2048d043.js";import"./AclCheckboxGroup.e03c4dfc.js";var g=p({name:"Group",components:{BasicTable:e,TableAction:o,GroupModal:d,SetAccountModal:a,SetAclModal:c,Authority:u},setup(){const[e,{openModal:o}]=l(),[d,{openModal:a}]=l(),[c,{openModal:u,setModalProps:p}]=l(),[f,{reload:j}]=t({title:"列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,rowSelection:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:m,registerTable:f,registerModal:e,registerSetAccountModal:d,registerSetAclModal:c,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleAcl:function(e){u(!0,{record:e,isUpdate:!0}),p({bodyStyle:{padding:"0px",margin:"0px"},width:800,height:400,showOkBtn:!1,cancelText:"关闭"})},handleAddUser:function(e){a(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((e=>{j()}))},handleSuccess:function(){j()},handleSetAccountSuccess:function(){j()},handleSetAclSuccess:function(){j()}}}});const x=A(" 新增");g.render=function(e,o,t,n,i,s){const r=f("a-button"),d=f("Authority"),a=f("TableAction"),c=f("BasicTable"),l=f("GroupModal"),u=f("SetAccountModal"),m=f("SetAclModal");return j(),h("div",null,[b(c,{onRegister:e.registerTable},{toolbar:S((()=>[b(d,{value:this.$options.name+":"+e.PerEnum.ADD},{default:S((()=>[b(r,{type:"primary",onClick:e.handleCreate},{default:S((()=>[x])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:S((({record:o})=>[b(a,{actions:[{auth:this.$options.name+":"+e.PerEnum.AUTH,title:"分配权限",icon:"ant-design:safety",onClick:e.handleAcl.bind(null,o)},{auth:this.$options.name+":"+e.PerEnum.AUTH,title:"分配用户",icon:"ant-design:user-add",onClick:e.handleAddUser.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),b(u,{onRegister:e.registerSetAccountModal,onSuccess:e.handleSetAccountSuccess},null,8,["onRegister","onSuccess"]),b(m,{onRegister:e.registerSetAclModal,onSuccess:e.handleSetAclSuccess},null,8,["onRegister","onSuccess"])])};export default g;
