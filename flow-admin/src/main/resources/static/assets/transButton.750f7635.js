import{a as m,x as S,o as K,S as x,_ as n,q as B,c5 as c}from"./index.ef013507.js";var E=["noStyle","disabled"],T={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},g=m({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(i,l){var r=l.slots,d=l.emit,s=l.attrs,v=l.expose,t=S(),y=function(e){var a=e.keyCode;a===c.ENTER&&e.preventDefault()},p=function(e){var a=e.keyCode;a===c.ENTER&&d("click",e)},b=function(e){d("click",e)},f=function(){t.value&&t.value.focus()},k=function(){t.value&&t.value.blur()};return K(function(){i.autofocus&&f()}),v({focus:f,blur:k}),function(){var o,e=i.noStyle,a=i.disabled,C=x(i,E),u={};return e||(u=n({},T)),a&&(u.pointerEvents="none"),B("div",n(n(n({role:"button",tabindex:0,ref:t},C),s),{},{onClick:b,onKeydown:y,onKeyup:p,style:n(n({},u),s.style||{})}),[(o=r.default)===null||o===void 0?void 0:o.call(r)])}}}),w=g;export{w as T};
