var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,r=(e,r)=>{for(var i in r||(r={}))l.call(r,i)&&s(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&s(e,i,r[i]);return e};import{_ as i,a as n}from"./useModal.c70d8b8c.js";import{_ as c}from"./PageWrapper.5df89cd8.js";import{k as o,b2 as d,aH as u,c8 as p,r as m,D as f,J as v,f as h,u as S,K as g,ar as b,o as y,n as O,Q as k,q as j,V as x,ah as C,Y as N,s as w,X as P,w as J,N as T}from"./vendor.9d9efc92.js";/* empty css              */import{g as M}from"./dept.9eb2ebb9.js";import{a_ as K}from"./index.f36f9bca.js";import{_}from"./Tree.vue_vue&type=style&index=0&lang.93b9c797.js";import"./useWindowSizeFn.0534066c.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";import"./useContextMenu.e6e614fe.js";/* empty css              */import"./useExpose.0886c4eb.js";var E=o({props:{title:{type:String,default:"人员选择"}},name:"OrgSelector",components:{BasicModal:i,PageWrapper:c,Tag:d,BasicTree:_,Spin:u,CloseCircleOutlined:p},setup(e,{emit:t}){const l=m([]),a=m(!1),s=m([]),i=m(!1),c=m([]),o=m([]),d=m(null);function u(){const e=S(d);if(!e)throw new Error("tree is null!");return e}f(o,((e,t)=>{if(a.value){const t=e.map((e=>{let t=K(s.value,(t=>t.id===e),{id:"id",pid:"pid",children:"children"});return t=r({},t),delete t.children,t}));v((()=>{l.value=JSON.parse(JSON.stringify(t)),u().setCheckedKeys(e)}))}else{const t=e.map((e=>{let t=K(s.value,(t=>t.id===e),{id:"id",pid:"pid",children:"children"});return t=r({},t),delete t.children,t}));v((()=>{l.value=JSON.parse(JSON.stringify(t)),u().setSelectedKeys(e)}))}}),{immediate:!0,deep:!0}),f(c,((e,t)=>{if(!a.value){const t=e.map((e=>{let t=K(s.value,(t=>t.id===e),{id:"id",pid:"pid",children:"children"});return t=r({},t),delete t.children,t}));v((()=>{l.value=JSON.parse(JSON.stringify(t)),u().setSelectedKeys(e)}))}}),{immediate:!0,deep:!0});const[p,{setModalProps:g,closeModal:b}]=n((e=>{return t=this,l=null,r=function*(){const{selectorProps:t}=e;i.value=!0,a.value=t.multiSelect,M().then((e=>{s.value=e;let l=t.selectedList.map((e=>e.id));a.value?(o.value=l,setTimeout((()=>{u().setCheckedKeys(o.value),u().setExpandedKeys(o.value)}),200)):(c.value=l,setTimeout((()=>{u().setSelectedKeys(c.value),u().setExpandedKeys(c.value)}),200))})).finally((()=>{i.value=!1})),g({wrapClassName:"selector-content"})},new Promise(((e,a)=>{var s=e=>{try{n(r.next(e))}catch(t){a(t)}},i=e=>{try{n(r.throw(e))}catch(t){a(t)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,i);n((r=r.apply(t,l)).next())}));var t,l,r}));const y=h((()=>"选择人员"));return{treeRef:d,multiSelect:a,treeData:s,treeLoading:i,registerModal:p,getTitle:y,selectedList:l,removeAllSelected:function(){a.value?o.value=[]:c.value=[]},removeSelectedItem:function(e){a.value?o.value.splice(o.value.findIndex((t=>t===e)),1):c.value.splice(c.value.findIndex((t=>t===e)),1)},handleSubmit:function(){t("success",l),b()},handleCheck:function(e){a.value?o.value=JSON.parse(JSON.stringify(e.checked)):o.value=JSON.parse(JSON.stringify(e.checked.length>0?[e.checked[0]]:[]))},handleSelect:function(e){a.value||(c.value=e)}}}});const D={class:"selected-items"};E.render=function(e,t,l,a,s,r){const i=g("Tag"),n=g("CloseCircleOutlined"),c=g("BasicTree"),o=g("PageWrapper"),d=g("BasicModal"),u=b("loading");return y(),O(d,T({wrapClassName:"selector-body org"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:k((()=>[j("div",D,[(y(!0),O(x,null,C(e.selectedList,(t=>(y(),O(i,{color:"processing",closable:"",onClose:l=>{l.preventDefault(),e.removeSelectedItem(t.id)}},{default:k((()=>[N(w(t.shortName),1)])),_:2},1032,["onClose"])))),256)),e.selectedList.length>0?(y(),O(n,{key:0,class:"close-all",title:"清空",onClick:e.removeAllSelected},null,8,["onClick"])):P("",!0)]),j(o,{dense:"",contentClass:"flex"},{default:k((()=>[J(j(c,{ref:"treeRef",class:"w-4/4 org-tree",title:"组织",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onCheck:e.handleCheck,onSelect:e.handleSelect,checkable:!!e.multiSelect,selectable:!e.multiSelect,checkStrictly:!0,autoExpandParent:""},null,8,["treeData","onCheck","onSelect","checkable","selectable"]),[[u,e.treeLoading]])])),_:1})])),_:1},16,["onRegister","title","onOk"])};export default E;
