import{Y as ue,E as K,r as n,Z as A,D as de,K as a,g as d,J as W,f as fe,N as be,o as he,j as y,c as I,a as me,_ as X}from"./index-KBM8R8LS.js";import{a as ke}from"./service-form-methods-B0_ayLo8.js";import{t as ye,v as ge}from"./visually-hidden.style-Bfr07Aua.js";import{u as Se}from"./inputProps-Dl7gHUhT.js";function ve(c={}){const i=Se(c),{isDisabled:t,isReadOnly:s,isRequired:h,isInvalid:o,id:v,onBlur:M,onFocus:L,"aria-describedby":p}=i,{defaultChecked:C,isChecked:w,isFocusable:R,onChange:F,isIndeterminate:u,name:U,value:q,tabIndex:H=void 0,"aria-label":O,"aria-labelledby":T,"aria-invalid":B,...ae}=c,j=ue(ae,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),x=K(F),$=K(M),V=K(L),[P,te]=n.useState(!1),[m,_]=n.useState(!1),[g,z]=n.useState(!1),[S,k]=n.useState(!1);n.useEffect(()=>ye(te),[]);const f=n.useRef(null),[J,se]=n.useState(!0),[ne,E]=n.useState(!!C),N=w!==void 0,r=N?w:ne,Y=n.useCallback(e=>{if(s||t){e.preventDefault();return}N||E(r?e.currentTarget.checked:u?!0:e.currentTarget.checked),x==null||x(e)},[s,t,r,N,u,x]);A(()=>{f.current&&(f.current.indeterminate=!!u)},[u]),de(()=>{t&&_(!1)},[t,_]),A(()=>{const e=f.current;if(!(e!=null&&e.form))return;const l=()=>{E(!!C)};return e.form.addEventListener("reset",l),()=>{var b;return(b=e.form)==null?void 0:b.removeEventListener("reset",l)}},[]);const Z=t&&!R,G=n.useCallback(e=>{e.key===" "&&k(!0)},[k]),Q=n.useCallback(e=>{e.key===" "&&k(!1)},[k]);A(()=>{if(!f.current)return;f.current.checked!==r&&E(f.current.checked)},[f.current]);const oe=n.useCallback((e={},l=null)=>{const b=D=>{m&&D.preventDefault(),k(!0)};return{...e,ref:l,"data-active":a(S),"data-hover":a(g),"data-checked":a(r),"data-focus":a(m),"data-focus-visible":a(m&&P),"data-indeterminate":a(u),"data-disabled":a(t),"data-invalid":a(o),"data-readonly":a(s),"aria-hidden":!0,onMouseDown:d(e.onMouseDown,b),onMouseUp:d(e.onMouseUp,()=>k(!1)),onMouseEnter:d(e.onMouseEnter,()=>z(!0)),onMouseLeave:d(e.onMouseLeave,()=>z(!1))}},[S,r,t,m,P,g,u,o,s]),re=n.useCallback((e={},l=null)=>({...e,ref:l,"data-active":a(S),"data-hover":a(g),"data-checked":a(r),"data-focus":a(m),"data-focus-visible":a(m&&P),"data-indeterminate":a(u),"data-disabled":a(t),"data-invalid":a(o),"data-readonly":a(s)}),[S,r,t,m,P,g,u,o,s]),ce=n.useCallback((e={},l=null)=>({...j,...e,ref:W(l,b=>{b&&se(b.tagName==="LABEL")}),onClick:d(e.onClick,()=>{var b;J||((b=f.current)==null||b.click(),requestAnimationFrame(()=>{var D;(D=f.current)==null||D.focus({preventScroll:!0})}))}),"data-disabled":a(t),"data-checked":a(r),"data-invalid":a(o)}),[j,t,r,o,J]),ie=n.useCallback((e={},l=null)=>({...e,ref:W(f,l),type:"checkbox",name:U,value:q,id:v,tabIndex:H,onChange:d(e.onChange,Y),onBlur:d(e.onBlur,$,()=>_(!1)),onFocus:d(e.onFocus,V,()=>_(!0)),onKeyDown:d(e.onKeyDown,G),onKeyUp:d(e.onKeyUp,Q),required:h,checked:r,disabled:Z,readOnly:s,"aria-label":O,"aria-labelledby":T,"aria-invalid":B?!!B:o,"aria-describedby":p,"aria-disabled":t,style:ge}),[U,q,v,Y,$,V,G,Q,h,r,Z,s,O,T,B,o,p,t,H]),le=n.useCallback((e={},l=null)=>({...e,ref:l,onMouseDown:d(e.onMouseDown,pe),"data-disabled":a(t),"data-checked":a(r),"data-invalid":a(o)}),[r,t,o]);return{state:{isInvalid:o,isFocused:m,isChecked:r,isActive:S,isHovered:g,isIndeterminate:u,isDisabled:t,isReadOnly:s,isRequired:h},getRootProps:ce,getCheckboxProps:oe,getIndicatorProps:re,getInputProps:ie,getLabelProps:le,htmlProps:j}}function pe(c){c.preventDefault(),c.stopPropagation()}const ee=fe(function(i,t){const s=be("Switch",i),{spacing:h="0.5rem",children:o,...v}=he(i),{getIndicatorProps:M,getInputProps:L,getCheckboxProps:p,getRootProps:C,getLabelProps:w}=ve(v),R=n.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...s.container}),[s.container]),F=n.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...s.track}),[s.track]),u=n.useMemo(()=>({userSelect:"none",marginStart:h,...s.label}),[h,s.label]);return y.jsxs(I.label,{...C(),className:me("chakra-switch",i.className),__css:R,children:[y.jsx("input",{className:"chakra-switch__input",...L({},t)}),y.jsx(I.span,{...p(),className:"chakra-switch__track",__css:F,children:y.jsx(I.span,{__css:s.thumb,className:"chakra-switch__thumb",...M()})}),o&&y.jsx(I.span,{className:"chakra-switch__label",...w(),__css:u,children:o})]})});ee.displayName="Switch";const Ce=({model:c,id:i})=>ke({apiEndpoint:`toggle-status/${c}/${i}`,invalidateEndpoints:[`${c}s`],enabled:!!i,method:"POST",queryKey:[`${c}s`],message:"Status updated successfully."}),De=({isActive:c,id:i,model:t})=>{const{mutateAsync:s}=Ce({id:i,model:t}),h=async()=>{try{i!==null?await s({id:String(i),data:{is_active:!c}}):(X.error("Something went wrong"),console.error("Invalid id: id cannot be null"))}catch(o){X.error("Something went wrong"),console.error("Error updating status:",o)}};return y.jsx(ee,{isChecked:c,colorScheme:"red",onChange:h})};export{De as S};
