import{p as J,l as O,r,j as a,q as V,F as R,T as y,H as K,B as A,t as P}from"./index-KBM8R8LS.js";import{R as w}from"./index-CEAH9bYU.js";import"./lodash-RJGComSW.js";import{S as Q}from"./index-B3Z5FeYB.js";import{u as X,T as c}from"./index-wimdqAz_.js";import{u as Y}from"./useGetDirtyData-Dc4_-Xhu.js";import{u as T}from"./useGetErrors-Bhs_yQR9.js";import{b as Z,c as $,d as ee}from"./service-category-CNojOtkN.js";import"./Plus-DrEXXnyP.js";import"./tslib.es6-KGZ4s6vb.js";import"./inputProps-Dl7gHUhT.js";import"./Trash-BqUmz8_B.js";import"./visually-hidden.style-Bfr07Aua.js";import"./service-form-methods-B0_ayLo8.js";const xe=()=>{var S;const m={name:"",description:"",image:"",is_active:"1",icon:"",images:[]},{id:t}=J(),{mutateAsync:_,isPending:q,isError:l,error:g}=Z(),{mutateAsync:z,isPending:B,isError:x,error:f}=$(),p=O(),{control:i,handleSubmit:H,reset:o,formState:M}=X({defaultValues:m}),{data:e,isFetching:N}=ee(parseInt(t)),[U,h]=r.useState([]),[b,W]=r.useState(!1),[v,G]=r.useState([]),[u,E]=r.useState({});r.useEffect(()=>{l?E(T(g)):x&&E(T(f))},[l,x,g,f]),r.useEffect(()=>{var n,s,d,j,I,D,F,k;t?(o({name:(n=e==null?void 0:e.data)==null?void 0:n.name,description:(s=e==null?void 0:e.data)==null?void 0:s.description,image:(d=e==null?void 0:e.data)==null?void 0:d.image,icon:(j=e==null?void 0:e.data)==null?void 0:j.icon,is_active:(I=e==null?void 0:e.data)!=null&&I.is_active?"1":"0"}),(((D=e==null?void 0:e.data)==null?void 0:D.images.length)??!1)&&h(((k=(F=e==null?void 0:e.data)==null?void 0:F.images)==null?void 0:k.map(C=>({id:C.id,url:C.image})))||[])):o(m)},[t,o,e==null?void 0:e.data]);const L=async n=>{const s=t?P(Y(M,n)):P(n);t?(v.length>0&&s.append("deleted_images",JSON.stringify(v)),b&&s.append("remove_image",b),(await z({id:t,data:s})).data.status&&(o(m),p("/category"))):(await _({data:s})).data.status&&(o(m),p("/category"))};return N?a.jsx(V,{height:"70dvh",width:"70dvw"}):a.jsxs(R,{flexDir:"column",gap:4,children:[a.jsxs(y,{fontWeight:600,fontSize:"2xl",children:[t?"Edit":"Add"," Category"]}),a.jsxs(R,{gap:4,flexDir:"column",as:"form",onSubmit:H(L),children:[a.jsx(c,{name:"name",control:i,label:"Name",backendError:u.name,isRequired:!0}),a.jsx(c,{control:i,name:"description",type:"textarea",label:"Description"}),a.jsx(c,{control:i,name:"icon",label:"Icon",helperText:"Please provide svg icon"}),a.jsx(w,{name:"image",control:i,label:"Image",options:{accept:{"image/*":[]}},boxWidth:"250px",boxHeight:"250px",file:t?(S=e==null?void 0:e.data)==null?void 0:S.image:"",isRequired:!0,noMaxSize:!0,backendError:u.image,setRemoveImage:W}),a.jsx(w,{isMultiple:!0,name:"images",control:i,label:"Images",options:{accept:{"image/*":[]}},noMaxSize:!0,prevFiles:U,setPrevFiles:h,setDeleteImages:G,width:"100%",boxWidth:"250px",boxHeight:"250px",isRequired:!0,backendError:u.images}),a.jsx(Q,{control:i}),a.jsxs(K,{spacing:2,my:6,children:[a.jsx(A,{variant:"outline",onClick:()=>p(-1),children:"Back"}),a.jsx(A,{type:"submit",isLoading:t?B:q,children:"Submit"})]})]})]})};export{xe as default};
