var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,i=(e,i)=>{for(var o in i||(i={}))n.call(i,o)&&a(e,o,i[o]);if(t)for(var o of t(i))l.call(i,o)&&a(e,o,i[o]);return e};import{B as o,u as E}from"./index.5f76010b.js";import{j as s,i as r,n as u,u as _,aV as O,V as d,N as g,K as S,o as T,m as A}from"./vendor.686fd1d4.js";/* empty css              */import{J as N,b6 as M,b7 as R,b8 as I,M as c,v as D,b9 as H,a2 as C,e as m,X as b,ba as L,bb as p,l as y,bc as U,bd as f,be as v,bf as B,a1 as G,x as h,b as W,bg as P,bh as F,bi as w,_ as x}from"./index.91a03d82.js";import{c as X,u as j}from"./index.97f1bef6.js";import{a as k}from"./useFrameKeepAlive.ad33b388.js";const K=X((()=>N((()=>import("./TypePicker.c668e561.js")),["/assets/TypePicker.c668e561.js","/assets/TypePicker.64692008.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.91a03d82.js","/assets/index.b89ee803.css"]))),V=X((()=>N((()=>import("./ThemeColorPicker.3c5c2e44.js")),["/assets/ThemeColorPicker.3c5c2e44.js","/assets/ThemeColorPicker.97cf21ea.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/index.4881b566.css","/assets/index.91a03d82.js","/assets/index.b89ee803.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.5f76010b.js","/assets/index.bb8cb3fb.css","/assets/index.97f1bef6.js","/assets/index.39cf26f1.css","/assets/index.81372485.js","/assets/index.140aa9f4.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/useFrameKeepAlive.ad33b388.js","/assets/useContentViewHeight.5e4dffd7.js","/assets/useSortable.aa5494d2.js","/assets/lock.fabd1a81.js"]))),Y=X((()=>N((()=>import("./SettingFooter.943ee10d.js")),["/assets/SettingFooter.943ee10d.js","/assets/SettingFooter.92900cc7.css","/assets/index.91a03d82.js","/assets/index.b89ee803.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css"]))),Q=X((()=>N((()=>import("./SwitchItem.f7662ad6.js")),["/assets/SwitchItem.f7662ad6.js","/assets/SwitchItem.6322350a.css","/assets/index.5dcbaae4.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/index.4881b566.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.91a03d82.js","/assets/index.b89ee803.css","/assets/index.5f76010b.js","/assets/index.bb8cb3fb.css","/assets/index.97f1bef6.js","/assets/index.39cf26f1.css","/assets/index.81372485.js","/assets/index.140aa9f4.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/useFrameKeepAlive.ad33b388.js","/assets/useContentViewHeight.5e4dffd7.js","/assets/useSortable.aa5494d2.js","/assets/lock.fabd1a81.js"]))),$=X((()=>N((()=>import("./SelectItem.226cb675.js")),["/assets/SelectItem.226cb675.js","/assets/SelectItem.9d41e7fc.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/index.4881b566.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.91a03d82.js","/assets/index.b89ee803.css","/assets/index.5f76010b.js","/assets/index.bb8cb3fb.css","/assets/index.97f1bef6.js","/assets/index.39cf26f1.css","/assets/index.81372485.js","/assets/index.140aa9f4.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/useFrameKeepAlive.ad33b388.js","/assets/useContentViewHeight.5e4dffd7.js","/assets/useSortable.aa5494d2.js","/assets/lock.fabd1a81.js"]))),Z=X((()=>N((()=>import("./InputNumberItem.fbbdae40.js")),["/assets/InputNumberItem.fbbdae40.js","/assets/InputNumberItem.581e9e46.css","/assets/index.2558ae94.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/index.4881b566.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.91a03d82.js","/assets/index.b89ee803.css","/assets/index.5f76010b.js","/assets/index.bb8cb3fb.css","/assets/index.97f1bef6.js","/assets/index.39cf26f1.css","/assets/index.81372485.js","/assets/index.140aa9f4.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/useFrameKeepAlive.ad33b388.js","/assets/useContentViewHeight.5e4dffd7.js","/assets/useSortable.aa5494d2.js","/assets/lock.fabd1a81.js"]))),{t:z}=m();var J,q;(q=J||(J={}))[q.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",q[q.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",q[q.CHANGE_THEME=2]="CHANGE_THEME",q[q.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",q[q.MENU_ACCORDION=4]="MENU_ACCORDION",q[q.MENU_TRIGGER=5]="MENU_TRIGGER",q[q.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",q[q.MENU_COLLAPSED=7]="MENU_COLLAPSED",q[q.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",q[q.MENU_WIDTH=9]="MENU_WIDTH",q[q.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",q[q.MENU_THEME=11]="MENU_THEME",q[q.MENU_SPLIT=12]="MENU_SPLIT",q[q.MENU_FIXED=13]="MENU_FIXED",q[q.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",q[q.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",q[q.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",q[q.HEADER_SHOW=17]="HEADER_SHOW",q[q.HEADER_THEME=18]="HEADER_THEME",q[q.HEADER_FIXED=19]="HEADER_FIXED",q[q.HEADER_SEARCH=20]="HEADER_SEARCH",q[q.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",q[q.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",q[q.TABS_SHOW=23]="TABS_SHOW",q[q.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",q[q.LOCK_TIME=25]="LOCK_TIME",q[q.FULL_CONTENT=26]="FULL_CONTENT",q[q.CONTENT_MODE=27]="CONTENT_MODE",q[q.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",q[q.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",q[q.GRAY_MODE=30]="GRAY_MODE",q[q.COLOR_WEAK=31]="COLOR_WEAK",q[q.SHOW_LOGO=32]="SHOW_LOGO",q[q.SHOW_FOOTER=33]="SHOW_FOOTER",q[q.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",q[q.OPEN_PROGRESS=35]="OPEN_PROGRESS",q[q.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",q[q.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION";const ee=[{value:M.FULL,label:z("layout.setting.contentModeFull")},{value:M.FIXED,label:z("layout.setting.contentModeFixed")}],te=[{value:R.CENTER,label:z("layout.setting.topMenuAlignRight")},{value:R.START,label:z("layout.setting.topMenuAlignLeft")},{value:R.END,label:z("layout.setting.topMenuAlignCenter")}],ne=[I.ZOOM_FADE,I.FADE,I.ZOOM_OUT,I.FADE_SIDE,I.FADE_BOTTOM,I.FADE_SCALE].map((e=>({label:e,value:e}))),le=[{title:z("layout.setting.menuTypeSidebar"),mode:c.INLINE,type:D.SIDEBAR},{title:z("layout.setting.menuTypeMix"),mode:c.INLINE,type:D.MIX},{title:z("layout.setting.menuTypeTopMenu"),mode:c.HORIZONTAL,type:D.TOP_MENU},{title:z("layout.setting.menuTypeMixSidebar"),mode:c.INLINE,type:D.MIX_SIDEBAR}],ae=[{value:H.HOVER,label:z("layout.setting.triggerHover")},{value:H.CLICK,label:z("layout.setting.triggerClick")}];function ie(e,t){const n=b(),l=function(e,t){const n=b(),{getThemeColor:l,getDarkMode:a}=y();switch(e){case J.CHANGE_LAYOUT:const{mode:e,type:o,split:E}=t;return{menuSetting:i({mode:e,type:o,collapsed:!1,show:!0,hidden:!1},void 0===E?{split:E}:{})};case J.CHANGE_THEME_COLOR:return l.value===t?{}:(B(t),{themeColor:t});case J.CHANGE_THEME:return a.value===t||v(t),{};case J.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case J.MENU_ACCORDION:return{menuSetting:{accordion:t}};case J.MENU_TRIGGER:return{menuSetting:{trigger:t}};case J.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case J.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case J.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case J.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case J.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case J.MENU_THEME:return p(t),{menuSetting:{bgColor:t}};case J.MENU_SPLIT:return{menuSetting:{split:t}};case J.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case J.MENU_FIXED:return{menuSetting:{fixed:t}};case J.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case J.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case J.OPEN_PAGE_LOADING:return n.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case J.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case J.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case J.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case J.LOCK_TIME:return{lockTime:t};case J.FULL_CONTENT:return{fullContent:t};case J.CONTENT_MODE:return{contentMode:t};case J.SHOW_BREADCRUMB:return{showBreadCrumb:t};case J.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case J.GRAY_MODE:return f(t),{grayMode:t};case J.SHOW_FOOTER:return{showFooter:t};case J.COLOR_WEAK:return U(t),{colorWeak:t};case J.SHOW_LOGO:return{showLogo:t};case J.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case J.TABS_SHOW:return{multiTabsSetting:{show:t}};case J.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case J.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case J.HEADER_THEME:return L(t),{headerSetting:{bgColor:t}};case J.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case J.HEADER_FIXED:return{headerSetting:{fixed:t}};case J.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);n.setProjectConfig(l),e===J.CHANGE_THEME&&(L(),p())}const{t:oe}=m();var Ee=s({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:l,getShowBreadCrumb:a,getShowBreadCrumbIcon:i,getShowLogo:E,getFullContent:s,getColorWeak:S,getGrayMode:T,getLockTime:A,getShowDarkModeToggle:N,getThemeColor:M}=y(),{getOpenPageLoading:R,getBasicTransition:I,getEnableTransition:c,getOpenNProgress:H}=G(),{getIsHorizontal:m,getShowMenu:b,getMenuType:L,getTrigger:p,getCollapsedShowTitle:U,getMenuFixed:f,getCollapsed:v,getCanDrag:B,getTopMenuAlign:x,getAccordion:X,getMenuWidth:q,getMenuBgColor:Ee,getIsTopMenu:se,getSplit:re,getIsMixSidebar:ue,getCloseMixSidebarOnChange:_e,getMixSideTrigger:Oe,getMixSideFixed:de}=h(),{getShowHeader:ge,getFixed:Se,getHeaderBgColor:Te,getShowSearch:Ae}=j(),{getShowMultipleTab:Ne,getShowQuick:Me,getShowRedo:Re,getShowFold:Ie}=k(),ce=r((()=>_(b)&&!_(m)));function De(){let e=_(p);const t=(l=_(re),[{value:C.NONE,label:z("layout.setting.menuTriggerNone")},{value:C.FOOTER,label:z("layout.setting.menuTriggerBottom")},...l?[]:[{value:C.HEADER,label:z("layout.setting.menuTriggerTop")}]]);var l;return t.some((t=>t.value===e))||(e=C.FOOTER),u(d,null,[u(Q,{title:oe("layout.setting.splitMenu"),event:J.MENU_SPLIT,def:_(re),disabled:!_(ce)||_(L)!==D.MIX},null),u(Q,{title:oe("layout.setting.mixSidebarFixed"),event:J.MENU_FIXED_MIX_SIDEBAR,def:_(de),disabled:!_(ue)},null),u(Q,{title:oe("layout.setting.closeMixSidebarOnChange"),event:J.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:_(_e),disabled:!_(ue)},null),u(Q,{title:oe("layout.setting.menuCollapse"),event:J.MENU_COLLAPSED,def:_(v),disabled:!_(ce)},null),u(Q,{title:oe("layout.setting.menuDrag"),event:J.MENU_HAS_DRAG,def:_(B),disabled:!_(ce)},null),u(Q,{title:oe("layout.setting.menuSearch"),event:J.HEADER_SEARCH,def:_(Ae),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.menuAccordion"),event:J.MENU_ACCORDION,def:_(X),disabled:!_(ce)},null),u(Q,{title:oe("layout.setting.collapseMenuDisplayName"),event:J.MENU_COLLAPSED_SHOW_TITLE,def:_(U),disabled:!_(ce)||!_(v)||_(ue)},null),u(Q,{title:oe("layout.setting.fixedHeader"),event:J.HEADER_FIXED,def:_(Se),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.fixedSideBar"),event:J.MENU_FIXED,def:_(f),disabled:!_(ce)||_(ue)},null),u($,{title:oe("layout.setting.mixSidebarTrigger"),event:J.MENU_TRIGGER_MIX_SIDEBAR,def:_(Oe),options:ae,disabled:!_(ue)},null),u($,{title:oe("layout.setting.topMenuLayout"),event:J.MENU_TOP_ALIGN,def:_(x),options:te,disabled:!_(ge)||_(re)||!_(se)&&!_(re)||_(ue)},null),u($,{title:oe("layout.setting.menuCollapseButton"),event:J.MENU_TRIGGER,def:e,options:t,disabled:!_(ce)||_(ue)},null),u($,{title:oe("layout.setting.contentMode"),event:J.CONTENT_MODE,def:_(n),options:ee},null),u(Z,{title:oe("layout.setting.autoScreenLock"),min:0,event:J.LOCK_TIME,defaultValue:_(A),formatter:e=>0===parseInt(e)?`0(${oe("layout.setting.notAutoScreenLock")})`:`${e}${oe("layout.setting.minute")}`},null),u(Z,{title:oe("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:J.MENU_WIDTH,disabled:!_(ce),defaultValue:_(q),formatter:e=>`${parseInt(e)}px`},null)])}return()=>u(o,g(t,{title:oe("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"}),{default:()=>[_(N)&&u(O,null,{default:()=>oe("layout.setting.darkMode")}),_(N)&&u(W,{class:"mx-auto"},null),u(O,null,{default:()=>oe("layout.setting.navMode")}),u(d,null,[u(K,{menuTypeList:le,handler:e=>{ie(J.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!_(m)&&void 0})},def:_(L)},null)]),u(O,null,{default:()=>oe("layout.setting.sysTheme")}),u(V,{colorList:P,def:_(M),event:J.CHANGE_THEME_COLOR},null),u(O,null,{default:()=>oe("layout.setting.headerTheme")}),u(V,{colorList:F,def:_(Te),event:J.HEADER_THEME},null),u(O,null,{default:()=>oe("layout.setting.sidebarTheme")}),u(V,{colorList:w,def:_(Ee),event:J.MENU_THEME},null),u(O,null,{default:()=>oe("layout.setting.interfaceFunction")}),De(),u(O,null,{default:()=>oe("layout.setting.interfaceDisplay")}),u(d,null,[u(Q,{title:oe("layout.setting.breadcrumb"),event:J.SHOW_BREADCRUMB,def:_(a),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.breadcrumbIcon"),event:J.SHOW_BREADCRUMB_ICON,def:_(i),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.tabs"),event:J.TABS_SHOW,def:_(Ne)},null),u(Q,{title:oe("layout.setting.tabsRedoBtn"),event:J.TABS_SHOW_REDO,def:_(Re),disabled:!_(Ne)},null),u(Q,{title:oe("layout.setting.tabsQuickBtn"),event:J.TABS_SHOW_QUICK,def:_(Me),disabled:!_(Ne)},null),u(Q,{title:oe("layout.setting.tabsFoldBtn"),event:J.TABS_SHOW_FOLD,def:_(Ie),disabled:!_(Ne)},null),u(Q,{title:oe("layout.setting.sidebar"),event:J.MENU_SHOW_SIDEBAR,def:_(b),disabled:_(m)},null),u(Q,{title:oe("layout.setting.header"),event:J.HEADER_SHOW,def:_(ge)},null),u(Q,{title:"Logo",event:J.SHOW_LOGO,def:_(E),disabled:_(ue)},null),u(Q,{title:oe("layout.setting.footer"),event:J.SHOW_FOOTER,def:_(l)},null),u(Q,{title:oe("layout.setting.fullContent"),event:J.FULL_CONTENT,def:_(s)},null),u(Q,{title:oe("layout.setting.grayMode"),event:J.GRAY_MODE,def:_(T)},null),u(Q,{title:oe("layout.setting.colorWeak"),event:J.COLOR_WEAK,def:_(S)},null)]),u(O,null,{default:()=>oe("layout.setting.animation")}),u(d,null,[u(Q,{title:oe("layout.setting.progress"),event:J.OPEN_PROGRESS,def:_(H)},null),u(Q,{title:oe("layout.setting.switchLoading"),event:J.OPEN_PAGE_LOADING,def:_(R)},null),u(Q,{title:oe("layout.setting.switchAnimation"),event:J.OPEN_ROUTE_TRANSITION,def:_(c)},null),u($,{title:oe("layout.setting.animationType"),event:J.ROUTER_TRANSITION,def:_(I),options:ne,disabled:!_(c)},null)]),u(O,null,null),u(Y,null,null)]})}}),se=s({name:"SettingButton",components:{SettingDrawer:Ee,Icon:x},setup(){const[e,{openDrawer:t}]=E();return{register:e,openDrawer:t}}});se.render=function(e,t,n,l,a,i){const o=S("Icon"),E=S("SettingDrawer");return T(),A("div",{onClick:t[1]||(t[1]=t=>e.openDrawer(!0))},[u(o,{icon:"ion:settings-outline"}),u(E,{onRegister:e.register},null,8,["onRegister"])])};var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});export{ie as b,re as i};
