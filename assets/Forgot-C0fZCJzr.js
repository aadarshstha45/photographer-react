import{l as f,r as e,j as r,C as x,F as E,B as b}from"./index-KBM8R8LS.js";import{u as g,T as h}from"./index-wimdqAz_.js";import"./lodash-RJGComSW.js";import{u as j}from"./useGetErrors-Bhs_yQR9.js";import{b as w}from"./service-user-RTBQsP0U.js";import{u as y}from"./boxProps-CyTGHnDg.js";import"./inputProps-Dl7gHUhT.js";import"./service-form-methods-B0_ayLo8.js";const q=()=>{const a={email:""},i=f(),{control:n,handleSubmit:m}=g({defaultValues:a}),{mutateAsync:u,isError:s,error:o,isPending:l}=w(),[c,t]=e.useState({});e.useEffect(()=>{t(s?j(o):{})},[s,o]);const d=async p=>{(await u({data:p})).data.status&&i("/email-confirmation")};return r.jsx(x,{h:"100dvh",w:"full",children:r.jsxs(E,{...y(),as:"form",onSubmit:m(d),flexDirection:"column",children:[r.jsx(h,{label:"Email",isRequired:!0,placeholder:"Enter your email",control:n,name:"email",type:"email",backendError:c.email}),r.jsx(b,{w:"full",type:"submit",isLoading:l,children:"Submit"})]})})};export{q as default};
