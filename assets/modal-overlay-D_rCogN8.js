import{y as ht,a9 as Pr,aa as Mr,ab as Er,r as c,ac as Me,R as kr,j as C,J as tt,g as ae,G as bt,N as Or,ad as de,ae as Ir,af as Ar,P as te,a as X,ag as R,ah as T,c as ve,f as De,X as rt}from"./index-KBM8R8LS.js";import{_ as A,a as pt,b as Nr}from"./tslib.es6-KGZ4s6vb.js";import{_ as Rr}from"./lodash-RJGComSW.js";const yt=e=>e.hasAttribute("tabindex"),Tr=e=>yt(e)&&e.tabIndex===-1;function gt(e){if(!ht(e)||Pr(e)||Mr(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const n={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in n?n[t]():Er(e)?!0:yt(e)}function uo(e){return e?ht(e)&&gt(e)&&!Tr(e):!1}const Dr=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],_r=Dr.join(),Lr=e=>e.offsetWidth>0&&e.offsetHeight>0;function Br(e){const t=Array.from(e.querySelectorAll(_r));return t.unshift(e),t.filter(r=>gt(r)&&Lr(r))}var Ee="data-focus-lock",xt="data-focus-lock-disabled",Wr="data-no-focus-lock",jr="data-autofocus-inside",Hr="data-no-autofocus";function ye(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ur(e,t){var r=c.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=t,r.facade}var Gr=typeof window<"u"?c.useLayoutEffect:c.useEffect,nt=new WeakMap;function St(e,t){var r=Ur(null,function(n){return e.forEach(function(a){return ye(a,n)})});return Gr(function(){var n=nt.get(r);if(n){var a=new Set(n),o=new Set(e),i=r.current;a.forEach(function(u){o.has(u)||ye(u,null)}),o.forEach(function(u){a.has(u)||ye(u,i)})}nt.set(r,e)},[e]),r}var ge={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"};function wt(e){return e}function Ft(e,t){t===void 0&&(t=wt);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var i=t(o,n);return r.push(i),function(){r=r.filter(function(u){return u!==i})}},assignSyncMedium:function(o){for(n=!0;r.length;){var i=r;r=[],i.forEach(o)}r={push:function(u){return o(u)},filter:function(){return r}}},assignMedium:function(o){n=!0;var i=[];if(r.length){var u=r;r=[],u.forEach(o),i=r}var m=function(){var h=i;i=[],h.forEach(o)},d=function(){return Promise.resolve().then(m)};d(),r={push:function(h){i.push(h),d()},filter:function(h){return i=i.filter(h),r}}}};return a}function _e(e,t){return t===void 0&&(t=wt),Ft(e,t)}function Ct(e){e===void 0&&(e={});var t=Ft(null);return t.options=A({async:!0,ssr:!1},e),t}var Pt=function(e){var t=e.sideCar,r=pt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return c.createElement(n,A({},r))};Pt.isSideCarExport=!0;function $r(e,t){return e.useMedium(t),Pt}var Mt=_e({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),Et=_e(),Vr=_e(),Xr=Ct({async:!0,ssr:typeof document<"u"}),Yr=c.createContext(void 0),qr=[],Le=c.forwardRef(function(t,r){var n,a=c.useState(),o=a[0],i=a[1],u=c.useRef(),m=c.useRef(!1),d=c.useRef(null),h=c.useState({}),l=h[1],s=t.children,v=t.disabled,b=v===void 0?!1:v,f=t.noFocusGuards,p=f===void 0?!1:f,x=t.persistentFocus,y=x===void 0?!1:x,g=t.crossFrame,w=g===void 0?!0:g,S=t.autoFocus,M=S===void 0?!0:S;t.allowTextSelection;var E=t.group,I=t.className,F=t.whiteList,Y=t.hasPositiveIndices,re=t.shards,he=re===void 0?qr:re,ze=t.as,sr=ze===void 0?"div":ze,Ke=t.lockProps,lr=Ke===void 0?{}:Ke,fr=t.sideCar,Qe=t.returnFocus,ne=Qe===void 0?!1:Qe,dr=t.focusOptions,be=t.onActivation,pe=t.onDeactivation,vr=c.useState({}),mr=vr[0],hr=c.useCallback(function(O){var L=O.captureFocusRestore;if(!d.current){var B,N=(B=document)==null?void 0:B.activeElement;d.current=N,N!==document.body&&(d.current=L(N))}u.current&&be&&be(u.current),m.current=!0,l()},[be]),br=c.useCallback(function(){m.current=!1,pe&&pe(u.current),l()},[pe]),pr=c.useCallback(function(O){var L=d.current;if(L){var B=(typeof L=="function"?L():L)||document.body,N=typeof ne=="function"?ne(B):ne;if(N){var et=typeof N=="object"?N:void 0;d.current=null,O?Promise.resolve().then(function(){return B.focus(et)}):B.focus(et)}}},[ne]),yr=c.useCallback(function(O){m.current&&Mt.useMedium(O)},[]),gr=Et.useMedium,xr=c.useCallback(function(O){u.current!==O&&(u.current=O,i(O))},[]),Sr=Me((n={},n[xt]=b&&"disabled",n[Ee]=E,n),lr),Je=p!==!0,wr=Je&&p!=="tail",Fr=St([r,xr]),Cr=c.useMemo(function(){return{observed:u,shards:he,enabled:!b,active:m.current}},[b,m.current,he,o]);return c.createElement(c.Fragment,null,Je&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:b?-1:0,style:ge}),Y?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:b?-1:1,style:ge}):null],!b&&c.createElement(fr,{id:mr,sideCar:Xr,observed:o,disabled:b,persistentFocus:y,crossFrame:w,autoFocus:M,whiteList:F,shards:he,onActivation:hr,onDeactivation:br,returnFocus:pr,focusOptions:dr,noFocusGuards:p}),c.createElement(sr,Me({ref:Fr},Sr,{className:I,onBlur:gr,onFocus:yr}),c.createElement(Yr.Provider,{value:Cr},s)),wr&&c.createElement("div",{"data-focus-guard":!0,tabIndex:b?-1:0,style:ge}))});Le.propTypes={};function ke(e,t){return ke=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ke(e,t)}function Zr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ke(e,t)}function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function zr(e,t){if(z(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(z(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kr(e){var t=zr(e,"string");return z(t)=="symbol"?t:t+""}function Qr(e,t,r){return(t=Kr(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jr(e,t){function r(n){return n.displayName||n.name||"Component"}return function(a){var o=[],i;function u(){i=e(o.map(function(d){return d.props})),t(i)}var m=function(d){Zr(h,d);function h(){return d.apply(this,arguments)||this}h.peek=function(){return i};var l=h.prototype;return l.componentDidMount=function(){o.push(this),u()},l.componentDidUpdate=function(){u()},l.componentWillUnmount=function(){var v=o.indexOf(this);o.splice(v,1),u()},l.render=function(){return kr.createElement(a,this.props)},h}(c.PureComponent);return Qr(m,"displayName","SideEffect("+r(a)+")"),m}}var k=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},_=function(e){return Array.isArray(e)?e:[e]},kt=function(e){return Array.isArray(e)?e[0]:e},en=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},Ot=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},It=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},tn=function(e){return e.hasAttribute("inert")},rn=function(e,t){return!e||It(e)||!en(e)&&!tn(e)&&t(Ot(e))},At=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=rn(t,At.bind(void 0,e));return e.set(t,n),n},nn=function(e,t){return e&&!It(e)?un(e)?t(Ot(e)):!1:!0},Nt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=nn(t,Nt.bind(void 0,e));return e.set(t,n),n},Rt=function(e){return e.dataset},an=function(e){return e.tagName==="BUTTON"},Tt=function(e){return e.tagName==="INPUT"},Dt=function(e){return Tt(e)&&e.type==="radio"},on=function(e){return!((Tt(e)||an(e))&&(e.type==="hidden"||e.disabled))},un=function(e){var t=e.getAttribute(Hr);return![!0,"true",""].includes(t)},Be=function(e){var t;return!!(e&&(!((t=Rt(e))===null||t===void 0)&&t.focusGuard))},Oe=function(e){return!Be(e)},cn=function(e){return!!e},sn=function(e,t){var r=Math.max(0,e.tabIndex),n=Math.max(0,t.tabIndex),a=r-n,o=e.index-t.index;if(a){if(!r)return 1;if(!n)return-1}return a||o},ln=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},We=function(e,t,r){return k(e).map(function(n,a){var o=ln(n);return{node:n,index:a,tabIndex:r&&o===-1?(n.dataset||{}).focusGuard?0:-1:o}}).filter(function(n){return!t||n.tabIndex>=0}).sort(sn)},fn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],je=fn.join(","),dn="".concat(je,", [data-focus-guard]"),_t=function(e,t){return k((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?dn:je)?[n]:[],_t(n))},[])},vn=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?V([e.contentDocument.body],t):[e]},V=function(e,t){return e.reduce(function(r,n){var a,o=_t(n,t),i=(a=[]).concat.apply(a,o.map(function(u){return vn(u,t)}));return r.concat(i,n.parentNode?k(n.parentNode.querySelectorAll(je)).filter(function(u){return u===n}):[])},[])},mn=function(e){var t=e.querySelectorAll("[".concat(jr,"]"));return k(t).map(function(r){return V([r])}).reduce(function(r,n){return r.concat(n)},[])},He=function(e,t){return k(e).filter(function(r){return At(t,r)}).filter(function(r){return on(r)})},at=function(e,t){return t===void 0&&(t=new Map),k(e).filter(function(r){return Nt(t,r)})},Ue=function(e,t,r){return We(He(V(e,r),t),!0,r)},K=function(e,t){return We(He(V(e),t),!1)},hn=function(e,t){return He(mn(e),t)},D=function(e,t){return e.shadowRoot?D(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:k(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var a=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return a?D(a,t):!1}return D(r,t)})},bn=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var a=n+1;a<r;a+=1){var o=e[n].compareDocumentPosition(e[a]);(o&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(o&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(i,u){return!t.has(u)})},Lt=function(e){return e.parentNode?Lt(e.parentNode):e},Ge=function(e){var t=_(e);return t.filter(Boolean).reduce(function(r,n){var a=n.getAttribute(Ee);return r.push.apply(r,a?bn(k(Lt(n).querySelectorAll("[".concat(Ee,'="').concat(a,'"]:not([').concat(xt,'="disabled"])')))):[n]),r},[])},pn=function(e){try{return e()}catch{return}},Q=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Q(t.shadowRoot):t instanceof HTMLIFrameElement&&pn(function(){return t.contentWindow.document})?Q(t.contentWindow.document):t}},yn=function(e,t){return e===t},gn=function(e,t){return!!k(e.querySelectorAll("iframe")).some(function(r){return yn(r,t)})},Bt=function(e,t){return t===void 0&&(t=Q(kt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Ge(e).some(function(r){return D(r,t)||gn(r,t)})},xn=function(e){e===void 0&&(e=document);var t=Q(e);return t?k(e.querySelectorAll("[".concat(Wr,"]"))).some(function(r){return D(r,t)}):!1},Sn=function(e,t){return t.filter(Dt).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},$e=function(e,t){return Dt(e)&&e.name?Sn(e,t):e},wn=function(e){var t=new Set;return e.forEach(function(r){return t.add($e(r,e))}),e.filter(function(r){return t.has(r)})},ot=function(e){return e[0]&&e.length>1?$e(e[0],e):e[0]},ut=function(e,t){return e.indexOf($e(t,e))},Ie="NEW_FOCUS",Fn=function(e,t,r,n,a){var o=e.length,i=e[0],u=e[o-1],m=Be(n);if(!(n&&e.indexOf(n)>=0)){var d=n!==void 0?r.indexOf(n):-1,h=a?r.indexOf(a):d,l=a?e.indexOf(a):-1;if(d===-1)return l!==-1?l:Ie;if(l===-1)return Ie;var s=d-h,v=r.indexOf(i),b=r.indexOf(u),f=wn(r),p=n!==void 0?f.indexOf(n):-1,x=p-(a?f.indexOf(a):d);if(!s&&l>=0||t.length===0)return l;var y=ut(e,t[0]),g=ut(e,t[t.length-1]);if(d<=v&&m&&Math.abs(s)>1)return g;if(d>=b&&m&&Math.abs(s)>1)return y;if(s&&Math.abs(x)>1)return l;if(d<=v)return g;if(d>b)return y;if(s)return Math.abs(s)>1?l:(o+l+s)%o}},Cn=function(e){return function(t){var r,n=(r=Rt(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},it=function(e,t,r){var n=e.map(function(o){var i=o.node;return i}),a=at(n.filter(Cn(r)));return a&&a.length?ot(a):ot(at(t))},Ae=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&Ae(e.parentNode.host||e.parentNode,t),t},xe=function(e,t){for(var r=Ae(e),n=Ae(t),a=0;a<r.length;a+=1){var o=r[a];if(n.indexOf(o)>=0)return o}return!1},Wt=function(e,t,r){var n=_(e),a=_(t),o=n[0],i=!1;return a.filter(Boolean).forEach(function(u){i=xe(i||u,u)||i,r.filter(Boolean).forEach(function(m){var d=xe(o,m);d&&(!i||D(d,i)?i=d:i=xe(d,i))})}),i},ct=function(e,t){return e.reduce(function(r,n){return r.concat(hn(n,t))},[])},Pn=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(cn)},Mn=function(e,t){var r=Q(_(e).length>0?document:kt(e).ownerDocument),n=Ge(e).filter(Oe),a=Wt(r||e,e,n),o=new Map,i=K(n,o),u=i.filter(function(b){var f=b.node;return Oe(f)});if(u[0]){var m=K([a],o).map(function(b){var f=b.node;return f}),d=Pn(m,u),h=d.map(function(b){var f=b.node;return f}),l=d.filter(function(b){var f=b.tabIndex;return f>=0}).map(function(b){var f=b.node;return f}),s=Fn(h,l,m,r,t);if(s===Ie){var v=it(i,l,ct(n,o))||it(i,h,ct(n,o));if(v)return{node:v};console.warn("focus-lock: cannot find any node to move focus into");return}return s===void 0?s:d[s]}},En=function(e){var t=Ge(e).filter(Oe),r=Wt(e,e,t),n=We(V([r],!0),!0,!0),a=V(t,!1);return n.map(function(o){var i=o.node,u=o.index;return{node:i,index:u,lockItem:a.indexOf(i)>=0,guard:Be(i)}})},Ve=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},Se=0,we=!1,jt=function(e,t,r){r===void 0&&(r={});var n=Mn(e,t);if(!we&&n){if(Se>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),we=!0,setTimeout(function(){we=!1},1);return}Se++,Ve(n.node,r.focusOptions),Se--}};function q(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var kn=function(e){if(!e)return null;for(var t=[],r=e;r&&r!==document.body;)t.push({current:q(r),parent:q(r.parentElement),left:q(r.previousElementSibling),right:q(r.nextElementSibling)}),r=r.parentElement;return{element:q(e),stack:t,ownerDocument:e.ownerDocument}},On=function(e){var t,r,n,a,o;if(e)for(var i=e.stack,u=e.ownerDocument,m=new Map,d=0,h=i;d<h.length;d++){var l=h[d],s=(t=l.parent)===null||t===void 0?void 0:t.call(l);if(s&&u.contains(s)){for(var v=(r=l.left)===null||r===void 0?void 0:r.call(l),b=l.current(),f=s.contains(b)?b:void 0,p=(n=l.right)===null||n===void 0?void 0:n.call(l),x=Ue([s],m),y=(o=(a=f??(v==null?void 0:v.nextElementSibling))!==null&&a!==void 0?a:p)!==null&&o!==void 0?o:v;y;){for(var g=0,w=x;g<w.length;g++){var S=w[g];if(y!=null&&y.contains(S.node))return S.node}y=y.nextElementSibling}if(x.length)return x[0].node}}},Ht=function(e){var t=kn(e);return function(){return On(t)}},In=function(e,t,r){if(!e||!t)return console.error("no element or scope given"),{};var n=_(t);if(n.every(function(i){return!D(i,e)}))return console.error("Active element is not contained in the scope"),{};var a=r?Ue(n,new Map):K(n,new Map),o=a.findIndex(function(i){var u=i.node;return u===e});if(o!==-1)return{prev:a[o-1],next:a[o+1],first:a[0],last:a[a.length-1]}},An=function(e,t){var r=t?Ue(_(e),new Map):K(_(e),new Map);return{first:r[0],last:r[r.length-1]}},Nn=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Ut=function(e,t,r){t===void 0&&(t={});var n=Nn(t),a=In(e,n.scope,n.onlyTabbable);if(a){var o=r(a,n.cycle);o&&Ve(o.node,n.focusOptions)}},Rn=function(e,t){t===void 0&&(t={}),Ut(e,t,function(r,n){var a=r.next,o=r.first;return a||n&&o})},Tn=function(e,t){t===void 0&&(t={}),Ut(e,t,function(r,n){var a=r.prev,o=r.last;return a||n&&o})},Gt=function(e,t,r){var n,a=An(e,(n=t.onlyTabbable)!==null&&n!==void 0?n:!0),o=a[r];o&&Ve(o.node,t.focusOptions)},Dn=function(e,t){t===void 0&&(t={}),Gt(e,t,"first")},_n=function(e,t){t===void 0&&(t={}),Gt(e,t,"last")};function Xe(e){setTimeout(e,1)}var Ln=function(t){return t&&"current"in t?t.current:t},$t=function(){return document&&document.activeElement===document.body},Bn=function(){return $t()||xn()},U=null,P=null,st=function(){return null},G=null,J=!1,Ye=!1,Wn=function(){return!0},jn=function(t){return(U.whiteList||Wn)(t)},Hn=function(t,r){G={observerNode:t,portaledElement:r}},Un=function(t){return G&&G.portaledElement===t};function lt(e,t,r,n){var a=null,o=e;do{var i=n[o];if(i.guard)i.node.dataset.focusAutoGuard&&(a=i);else if(i.lockItem){if(o!==e)return;a=null}else break}while((o+=r)!==t);a&&(a.node.tabIndex=0)}var Gn=function(t){return t?!!J:J==="meanwhile"},$n=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},Vn=function(t,r){return r.some(function(n){return $n(t,n,n)})},Vt=function(t){return K(t,new Map)},Xn=function(t){return!Vt([t.parentNode]).some(function(r){return r.node===t})},fe=function(){var t=!1;if(U){var r=U,n=r.observed,a=r.persistentFocus,o=r.autoFocus,i=r.shards,u=r.crossFrame,m=r.focusOptions,d=r.noFocusGuards,h=n||G&&G.portaledElement;if($t()&&P&&(!document.body.contains(P)||Xn(P))){P=null;var l=st();l&&l.focus()}var s=document&&document.activeElement;if(h){var v=[h].concat(i.map(Ln).filter(Boolean)),b=function(){if(!Gn(u)||!d||!P||Ye)return!1;var g=Vt(v),w=g.findIndex(function(S){var M=S.node;return M===P});return w===0||w===g.length-1};if((!s||jn(s))&&(a||b()||!Bn()||!P&&o)&&(h&&!(Bt(v)||s&&Vn(s,v)||Un(s))&&(document&&!P&&s&&!o?(s.blur&&s.blur(),document.body.focus()):(t=jt(v,P,{focusOptions:m}),G={})),J=!1,P=document&&document.activeElement,st=Ht(P)),document&&s!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var f=document&&document.activeElement,p=En(v),x=p.map(function(y){var g=y.node;return g}).indexOf(f);x>-1&&(p.filter(function(y){var g=y.guard,w=y.node;return g&&w.dataset.focusAutoGuard}).forEach(function(y){var g=y.node;return g.removeAttribute("tabIndex")}),lt(x,p.length,1,p),lt(x,-1,-1,p))}}}return t},Xt=function(t){fe()&&t&&(t.stopPropagation(),t.preventDefault())},qe=function(){return Xe(fe)},Yn=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||Hn(n,r)},qn=function(){return null},Yt=function(){Ye=!0},qt=function(){Ye=!1,J="just",Xe(function(){J="meanwhile"})},Zn=function(){document.addEventListener("focusin",Xt),document.addEventListener("focusout",qe),window.addEventListener("focus",Yt),window.addEventListener("blur",qt)},zn=function(){document.removeEventListener("focusin",Xt),document.removeEventListener("focusout",qe),window.removeEventListener("focus",Yt),window.removeEventListener("blur",qt)};function Kn(e){return e.filter(function(t){var r=t.disabled;return!r})}var Zt={moveFocusInside:jt,focusInside:Bt,focusNextElement:Rn,focusPrevElement:Tn,focusFirstElement:Dn,focusLastElement:_n,captureFocusRestore:Ht};function Qn(e){var t=e.slice(-1)[0];t&&!U&&Zn();var r=U,n=r&&t&&t.id===r.id;U=t,r&&!n&&(r.onDeactivation(),e.filter(function(a){var o=a.id;return o===r.id}).length||r.returnFocus(!t)),t?(P=null,(!n||r.observed!==t.observed)&&t.onActivation(Zt),fe(),Xe(fe)):(zn(),P=null)}Mt.assignSyncMedium(Yn);Et.assignMedium(qe);Vr.assignMedium(function(e){return e(Zt)});const Jn=Jr(Kn,Qn)(qn);var Ne=c.forwardRef(function(t,r){return c.createElement(Le,Me({sideCar:Jn,ref:r},t))}),zt=Le.propTypes||{};zt.sideCar;Rr(zt,["sideCar"]);Ne.propTypes={};const ea=Ne.default??Ne,Kt=e=>{const{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:a,children:o,isDisabled:i,autoFocus:u,persistentFocus:m,lockFocusAcrossFrames:d}=e,h=c.useCallback(()=>{t!=null&&t.current?t.current.focus():n!=null&&n.current&&Br(n.current).length===0&&requestAnimationFrame(()=>{var b;(b=n.current)==null||b.focus()})},[t,n]),l=c.useCallback(()=>{var v;(v=r==null?void 0:r.current)==null||v.focus()},[r]),s=a&&!r;return C.jsx(ea,{crossFrame:d,persistentFocus:m,autoFocus:u,disabled:i,onActivation:h,onDeactivation:l,returnFocus:s,children:o})};Kt.displayName="FocusLock";var ta=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},W=new WeakMap,oe=new WeakMap,ue={},Fe=0,Qt=function(e){return e&&(e.host||Qt(e.parentNode))},ra=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=Qt(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},na=function(e,t,r,n){var a=ra(t,Array.isArray(e)?e:[e]);ue[r]||(ue[r]=new WeakMap);var o=ue[r],i=[],u=new Set,m=new Set(a),d=function(l){!l||u.has(l)||(u.add(l),d(l.parentNode))};a.forEach(d);var h=function(l){!l||m.has(l)||Array.prototype.forEach.call(l.children,function(s){if(u.has(s))h(s);else try{var v=s.getAttribute(n),b=v!==null&&v!=="false",f=(W.get(s)||0)+1,p=(o.get(s)||0)+1;W.set(s,f),o.set(s,p),i.push(s),f===1&&b&&oe.set(s,!0),p===1&&s.setAttribute(r,"true"),b||s.setAttribute(n,"true")}catch(x){console.error("aria-hidden: cannot operate on ",s,x)}})};return h(t),u.clear(),Fe++,function(){i.forEach(function(l){var s=W.get(l)-1,v=o.get(l)-1;W.set(l,s),o.set(l,v),s||(oe.has(l)||l.removeAttribute(n),oe.delete(l)),v||l.removeAttribute(r)}),Fe--,Fe||(W=new WeakMap,W=new WeakMap,oe=new WeakMap,ue={})}},aa=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=ta(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),na(n,a,r,"aria-hidden")):function(){return null}},oa=Object.defineProperty,ua=(e,t,r)=>t in e?oa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ia=(e,t,r)=>(ua(e,t+"",r),r);class ca{constructor(){ia(this,"modals"),this.modals=new Set}add(t){return this.modals.add(t),this.modals.size}remove(t){this.modals.delete(t)}isTopModal(t){if(!t)return!1;const r=Array.from(this.modals)[this.modals.size-1];return t===r}}const Re=new ca;function Jt(e,t){const[r,n]=c.useState(0);return c.useEffect(()=>{const a=e.current;if(a){if(t){const o=Re.add(a);n(o)}return()=>{Re.remove(a),n(0)}}},[t,e]),r}function sa(e){const{isOpen:t,onClose:r,id:n,closeOnOverlayClick:a=!0,closeOnEsc:o=!0,useInert:i=!0,onOverlayClick:u,onEsc:m}=e,d=c.useRef(null),h=c.useRef(null),[l,s,v]=fa(n,"chakra-modal","chakra-modal--header","chakra-modal--body");la(d,t&&i);const b=Jt(d,t),f=c.useRef(null),p=c.useCallback(F=>{f.current=F.target},[]),x=c.useCallback(F=>{F.key==="Escape"&&(F.stopPropagation(),o&&(r==null||r()),m==null||m())},[o,r,m]),[y,g]=c.useState(!1),[w,S]=c.useState(!1),M=c.useCallback((F={},Y=null)=>({role:"dialog",...F,ref:tt(Y,d),id:l,tabIndex:-1,"aria-modal":!0,"aria-labelledby":y?s:void 0,"aria-describedby":w?v:void 0,onClick:ae(F.onClick,re=>re.stopPropagation())}),[v,w,l,s,y]),E=c.useCallback(F=>{F.stopPropagation(),f.current===F.target&&Re.isTopModal(d.current)&&(a&&(r==null||r()),u==null||u())},[r,a,u]),I=c.useCallback((F={},Y=null)=>({...F,ref:tt(Y,h),onClick:ae(F.onClick,E),onKeyDown:ae(F.onKeyDown,x),onMouseDown:ae(F.onMouseDown,p)}),[x,p,E]);return{isOpen:t,onClose:r,headerId:s,bodyId:v,setBodyMounted:S,setHeaderMounted:g,dialogRef:d,overlayRef:h,getDialogProps:M,getDialogContainerProps:I,index:b}}function la(e,t){const r=e.current;c.useEffect(()=>{if(!(!e.current||!t))return aa(e.current)},[t,e,r])}function fa(e,...t){const r=c.useId(),n=e||r;return c.useMemo(()=>t.map(a=>`${a}-${n}`),[n,t])}const[da,Ze]=bt({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[va,ee]=bt({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),ma=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,preserveScrollBarGap:!0,motionPreset:"scale",...e,lockFocusAcrossFrames:e.lockFocusAcrossFrames||!0},{portalProps:r,children:n,autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:m,blockScrollOnMount:d,allowPinchZoom:h,preserveScrollBarGap:l,motionPreset:s,lockFocusAcrossFrames:v,animatePresenceProps:b,onCloseComplete:f}=t,p=Or("Modal",t),y={...sa(t),autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:m,blockScrollOnMount:d,allowPinchZoom:h,preserveScrollBarGap:l,motionPreset:s,lockFocusAcrossFrames:v};return C.jsx(va,{value:y,children:C.jsx(da,{value:p,children:C.jsx(de,{...b,onExitComplete:f,children:y.isOpen&&C.jsx(Ir,{...r,children:n})})})})};ma.displayName="Modal";var se="right-scroll-bar-position",le="width-before-scroll-bar",ha="with-scroll-bars-hidden",ba="--removed-body-scroll-bar-size",er=Ct(),Ce=function(){},me=c.forwardRef(function(e,t){var r=c.useRef(null),n=c.useState({onScrollCapture:Ce,onWheelCapture:Ce,onTouchMoveCapture:Ce}),a=n[0],o=n[1],i=e.forwardProps,u=e.children,m=e.className,d=e.removeScrollBar,h=e.enabled,l=e.shards,s=e.sideCar,v=e.noIsolation,b=e.inert,f=e.allowPinchZoom,p=e.as,x=p===void 0?"div":p,y=e.gapMode,g=pt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=s,S=St([r,t]),M=A(A({},g),a);return c.createElement(c.Fragment,null,h&&c.createElement(w,{sideCar:er,removeScrollBar:d,shards:l,noIsolation:v,inert:b,setCallbacks:o,allowPinchZoom:!!f,lockRef:r,gapMode:y}),i?c.cloneElement(c.Children.only(u),A(A({},M),{ref:S})):c.createElement(x,A({},M,{className:m,ref:S}),u))});me.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};me.classNames={fullWidth:le,zeroRight:se};var pa=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ya(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=pa();return t&&e.setAttribute("nonce",t),e}function ga(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function xa(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Sa=function(){var e=0,t=null;return{add:function(r){e==0&&(t=ya())&&(ga(t,r),xa(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},wa=function(){var e=Sa();return function(t,r){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},tr=function(){var e=wa(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},Fa={left:0,top:0,right:0,gap:0},Pe=function(e){return parseInt(e||"",10)||0},Ca=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Pe(r),Pe(n),Pe(a)]},Pa=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Fa;var t=Ca(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},Ma=tr(),$="data-scroll-locked",Ea=function(e,t,r,n){var a=e.left,o=e.top,i=e.right,u=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(ha,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(u,"px ").concat(n,`;
  }
  body[`).concat($,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(u,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(se,` {
    right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(le,` {
    margin-right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(se," .").concat(se,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(le," .").concat(le,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat($,`] {
    `).concat(ba,": ").concat(u,`px;
  }
`)},ft=function(){var e=parseInt(document.body.getAttribute($)||"0",10);return isFinite(e)?e:0},ka=function(){c.useEffect(function(){return document.body.setAttribute($,(ft()+1).toString()),function(){var e=ft()-1;e<=0?document.body.removeAttribute($):document.body.setAttribute($,e.toString())}},[])},Oa=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n;ka();var o=c.useMemo(function(){return Pa(a)},[a]);return c.createElement(Ma,{styles:Ea(o,!t,a,r?"":"!important")})},Te=!1;if(typeof window<"u")try{var ie=Object.defineProperty({},"passive",{get:function(){return Te=!0,!0}});window.addEventListener("test",ie,ie),window.removeEventListener("test",ie,ie)}catch{Te=!1}var j=Te?{passive:!1}:!1,Ia=function(e){return e.tagName==="TEXTAREA"},rr=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!Ia(e)&&r[t]==="visible")},Aa=function(e){return rr(e,"overflowY")},Na=function(e){return rr(e,"overflowX")},dt=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=nr(e,n);if(a){var o=ar(e,n),i=o[1],u=o[2];if(i>u)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},Ra=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},Ta=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},nr=function(e,t){return e==="v"?Aa(t):Na(t)},ar=function(e,t){return e==="v"?Ra(t):Ta(t)},Da=function(e,t){return e==="h"&&t==="rtl"?-1:1},_a=function(e,t,r,n,a){var o=Da(e,window.getComputedStyle(t).direction),i=o*n,u=r.target,m=t.contains(u),d=!1,h=i>0,l=0,s=0;do{var v=ar(e,u),b=v[0],f=v[1],p=v[2],x=f-p-o*b;(b||x)&&nr(e,u)&&(l+=x,s+=b),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!m&&u!==document.body||m&&(t.contains(u)||t===u));return(h&&(Math.abs(l)<1||!a)||!h&&(Math.abs(s)<1||!a))&&(d=!0),d},ce=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},vt=function(e){return[e.deltaX,e.deltaY]},mt=function(e){return e&&"current"in e?e.current:e},La=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ba=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Wa=0,H=[];function ja(e){var t=c.useRef([]),r=c.useRef([0,0]),n=c.useRef(),a=c.useState(Wa++)[0],o=c.useState(tr)[0],i=c.useRef(e);c.useEffect(function(){i.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var f=Nr([e.lockRef.current],(e.shards||[]).map(mt),!0).filter(Boolean);return f.forEach(function(p){return p.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),f.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=c.useCallback(function(f,p){if("touches"in f&&f.touches.length===2||f.type==="wheel"&&f.ctrlKey)return!i.current.allowPinchZoom;var x=ce(f),y=r.current,g="deltaX"in f?f.deltaX:y[0]-x[0],w="deltaY"in f?f.deltaY:y[1]-x[1],S,M=f.target,E=Math.abs(g)>Math.abs(w)?"h":"v";if("touches"in f&&E==="h"&&M.type==="range")return!1;var I=dt(E,M);if(!I)return!0;if(I?S=E:(S=E==="v"?"h":"v",I=dt(E,M)),!I)return!1;if(!n.current&&"changedTouches"in f&&(g||w)&&(n.current=S),!S)return!0;var F=n.current||S;return _a(F,p,f,F==="h"?g:w,!0)},[]),m=c.useCallback(function(f){var p=f;if(!(!H.length||H[H.length-1]!==o)){var x="deltaY"in p?vt(p):ce(p),y=t.current.filter(function(S){return S.name===p.type&&(S.target===p.target||p.target===S.shadowParent)&&La(S.delta,x)})[0];if(y&&y.should){p.cancelable&&p.preventDefault();return}if(!y){var g=(i.current.shards||[]).map(mt).filter(Boolean).filter(function(S){return S.contains(p.target)}),w=g.length>0?u(p,g[0]):!i.current.noIsolation;w&&p.cancelable&&p.preventDefault()}}},[]),d=c.useCallback(function(f,p,x,y){var g={name:f,delta:p,target:x,should:y,shadowParent:Ha(x)};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(w){return w!==g})},1)},[]),h=c.useCallback(function(f){r.current=ce(f),n.current=void 0},[]),l=c.useCallback(function(f){d(f.type,vt(f),f.target,u(f,e.lockRef.current))},[]),s=c.useCallback(function(f){d(f.type,ce(f),f.target,u(f,e.lockRef.current))},[]);c.useEffect(function(){return H.push(o),e.setCallbacks({onScrollCapture:l,onWheelCapture:l,onTouchMoveCapture:s}),document.addEventListener("wheel",m,j),document.addEventListener("touchmove",m,j),document.addEventListener("touchstart",h,j),function(){H=H.filter(function(f){return f!==o}),document.removeEventListener("wheel",m,j),document.removeEventListener("touchmove",m,j),document.removeEventListener("touchstart",h,j)}},[]);var v=e.removeScrollBar,b=e.inert;return c.createElement(c.Fragment,null,b?c.createElement(o,{styles:Ba(a)}):null,v?c.createElement(Oa,{gapMode:e.gapMode}):null)}function Ha(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ua=$r(er,ja);var or=c.forwardRef(function(e,t){return c.createElement(me,A({},e,{ref:t,sideCar:Ua}))});or.classNames=me.classNames;function Ga(e){const{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:a,blockScrollOnMount:o,allowPinchZoom:i,finalFocusRef:u,returnFocusOnClose:m,preserveScrollBarGap:d,lockFocusAcrossFrames:h,isOpen:l}=ee(),[s,v]=Ar();c.useEffect(()=>{!s&&v&&setTimeout(v)},[s,v]);const b=Jt(n,l);return C.jsx(Kt,{autoFocus:t,isDisabled:!r,initialFocusRef:a,finalFocusRef:u,restoreFocus:m,contentRef:n,lockFocusAcrossFrames:h,children:C.jsx(or,{removeScrollBar:!d,allowPinchZoom:i,enabled:b===1&&o,forwardProps:!0,children:e.children})})}const $a={initial:({offsetX:e,offsetY:t,transition:r,transitionEnd:n,delay:a})=>({opacity:0,x:e,y:t,transition:(r==null?void 0:r.exit)??R.exit(T.exit,a),transitionEnd:n==null?void 0:n.exit}),enter:({transition:e,transitionEnd:t,delay:r})=>({opacity:1,x:0,y:0,transition:(e==null?void 0:e.enter)??R.enter(T.enter,r),transitionEnd:t==null?void 0:t.enter}),exit:({offsetY:e,offsetX:t,transition:r,transitionEnd:n,reverse:a,delay:o})=>{const i={x:t,y:e};return{opacity:0,transition:(r==null?void 0:r.exit)??R.exit(T.exit,o),...a?{...i,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{...i,...n==null?void 0:n.exit}}}}},Z={initial:"initial",animate:"enter",exit:"exit",variants:$a},Va=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,className:i,offsetX:u=0,offsetY:m=8,transition:d,transitionEnd:h,delay:l,animatePresenceProps:s,...v}=t,b=n?a&&n:!0,f=a||n?"enter":"exit",p={offsetX:u,offsetY:m,reverse:o,transition:d,transitionEnd:h,delay:l};return C.jsx(de,{...s,custom:p,children:b&&C.jsx(te.div,{ref:r,className:X("chakra-offset-slide",i),custom:p,...Z,animate:f,...v})})});Va.displayName="SlideFade";const Xa={exit:({reverse:e,initialScale:t,transition:r,transitionEnd:n,delay:a})=>({opacity:0,...e?{scale:t,transitionEnd:n==null?void 0:n.exit}:{transitionEnd:{scale:t,...n==null?void 0:n.exit}},transition:(r==null?void 0:r.exit)??R.exit(T.exit,a)}),enter:({transitionEnd:e,transition:t,delay:r})=>({opacity:1,scale:1,transition:(t==null?void 0:t.enter)??R.enter(T.enter,r),transitionEnd:e==null?void 0:e.enter})},ur={initial:"exit",animate:"enter",exit:"exit",variants:Xa},Ya=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,reverse:o=!0,initialScale:i=.95,className:u,transition:m,transitionEnd:d,delay:h,animatePresenceProps:l,...s}=t,v=n?a&&n:!0,b=a||n?"enter":"exit",f={initialScale:i,reverse:o,transition:m,transitionEnd:d,delay:h};return C.jsx(de,{...l,custom:f,children:v&&C.jsx(te.div,{ref:r,className:X("chakra-offset-slide",u),...ur,animate:b,custom:f,...s})})});Ya.displayName="ScaleFade";const qa={slideInBottom:{...Z,custom:{offsetY:16,reverse:!0}},slideInRight:{...Z,custom:{offsetX:16,reverse:!0}},slideInTop:{...Z,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...Z,custom:{offsetX:-16,reverse:!0}},scale:{...ur,custom:{initialScale:.95,reverse:!0}},none:{}},Za=ve(te.section),za=e=>qa[e||"none"],ir=c.forwardRef((e,t)=>{const{preset:r,motionProps:n=za(r),...a}=e;return C.jsx(Za,{ref:t,...n,...a})});ir.displayName="ModalTransition";const Ka=De((e,t)=>{const{className:r,children:n,containerProps:a,motionProps:o,...i}=e,{getDialogProps:u,getDialogContainerProps:m}=ee(),d=u(i,t),h=m(a),l=X("chakra-modal__content",r),s=Ze(),v=rt({display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...s.dialog}),b=rt({display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...s.dialogContainer}),{motionPreset:f}=ee();return C.jsx(Ga,{children:C.jsx(ve.div,{...h,className:"chakra-modal__content-container",tabIndex:-1,__css:b,children:C.jsx(ir,{preset:f,motionProps:o,className:l,...d,__css:v,children:n})})})});Ka.displayName="ModalContent";const Qa=De((e,t)=>{const{className:r,...n}=e,{bodyId:a,setBodyMounted:o}=ee();c.useEffect(()=>(o(!0),()=>o(!1)),[o]);const i=X("chakra-modal__body",r),u=Ze();return C.jsx(ve.div,{ref:t,className:i,id:a,...n,__css:u.body})});Qa.displayName="ModalBody";const Ja={enter:({transition:e,transitionEnd:t,delay:r}={})=>({opacity:1,transition:(e==null?void 0:e.enter)??R.enter(T.enter,r),transitionEnd:t==null?void 0:t.enter}),exit:({transition:e,transitionEnd:t,delay:r}={})=>({opacity:0,transition:(e==null?void 0:e.exit)??R.exit(T.exit,r),transitionEnd:t==null?void 0:t.exit})},cr={initial:"exit",animate:"enter",exit:"exit",variants:Ja},eo=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,className:o,transition:i,transitionEnd:u,delay:m,animatePresenceProps:d,...h}=t,l=a||n?"enter":"exit",s=n?a&&n:!0,v={transition:i,transitionEnd:u,delay:m};return C.jsx(de,{...d,custom:v,children:s&&C.jsx(te.div,{ref:r,className:X("chakra-fade",o),custom:v,...cr,animate:l,...h})})});eo.displayName="Fade";const to=ve(te.div),ro=De((e,t)=>{const{className:r,transition:n,motionProps:a,...o}=e,i=X("chakra-modal__overlay",r),m={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Ze().overlay},{motionPreset:d}=ee(),l=a||(d==="none"?{}:cr);return C.jsx(to,{...l,__css:m,ref:t,className:i,...o})});ro.displayName="ModalOverlay";export{ma as M,Ze as a,ro as b,Ka as c,Qa as d,uo as i,ee as u};
