import{_ as e}from"./TableImg.96b6e2f6.js";import{f as o}from"./BasicForm.99631a91.js";import{u as i}from"./useTable.ee2b6f63.js";import{g as n,d as t}from"./account.c0adc700.js";import{P as s}from"./index.52d50d5a.js";import{b as r}from"./index.08cdb95c.js";import a from"./AccountModal.c768cfe0.js";import d from"./PasswordModal.8f99348c.js";import c from"./SetGroupModal.82150d33.js";import{c as l,s as u}from"./account.data.54aff4b6.js";import{j as m,br as p,by as f,ci as b,r as g,K as j,o as h,m as w,n as S,Q as v,Y as x}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.29bf2c0c.js";import"./index.ffeb6485.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";import"./useContentViewHeight.7085396b.js";/* empty css              */import"./group.76ed5162.js";var C=m({name:"Account",components:{BasicTable:e,PageWrapper:s,AccountModal:a,PasswordModal:d,SetGroupModal:c,TableAction:o,Avatar:p,Image:f,UserOutlined:b},setup(){const[e,{openModal:o}]=r(),[s,{openModal:a}]=r(),[d,{openModal:c}]=r(),m=g(""),p=g(!1),[f,{reload:b}]=i({title:"列表",api:n,columns:l,formConfig:{labelWidth:120,schemas:u,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:f,registerModal:e,registerPasswordModal:s,registerSetGroupModal:d,previewImage:m,previewImageVisible:p,previewImageHandle:function(e){e&&(m.value=e,p.value=!0)},previewImageVisibleChange:function(e,o){p.value=e},handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSetPassword:function(e){a(!0,{record:e,isUpdate:!0})},handleSetGroup:function(e){c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){t([e.id]).then((e=>{b()}))},handleSuccess:function(){b()},handlePasswordSuccess:function(){b()},handleSetGroupSuccess:function(){b()}}}});const M=x(" 新增 "),I={style:{width:"0",height:"0",overflow:"hidden"}};C.render=function(e,o,i,n,t,s){const r=j("a-button"),a=j("TableAction"),d=j("UserOutlined"),c=j("Avatar"),l=j("BasicTable"),u=j("Image"),m=j("AccountModal"),p=j("PasswordModal"),f=j("SetGroupModal");return h(),w("div",null,[S(l,{onRegister:e.registerTable},{toolbar:v((()=>[S(r,{type:"primary",onClick:e.handleCreate},{default:v((()=>[M])),_:1},8,["onClick"])])),action:v((({record:o})=>[S(a,{actions:[{title:"分配组",icon:"ant-design:usergroup-add",onClick:e.handleSetGroup.bind(null,o)},{title:"设置密码",icon:"ant-design:setting-outlined",onClick:e.handleSetPassword.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),imageRender:v((({record:o})=>[S(c,{src:o.image,onClick:i=>e.previewImageHandle(o.image)},{icon:v((()=>[S(d)])),_:2},1032,["src","onClick"])])),_:1},8,["onRegister"]),S("div",I,[S(u,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"])]),S(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),S(p,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),S(f,{onRegister:e.registerSetGroupModal,onSuccess:e.handleSetGroupSuccess},null,8,["onRegister","onSuccess"])])};export default C;
