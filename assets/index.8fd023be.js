import{l as o,d as a,bo as l,bC as u,w as d,o as m,c as p,e as h,f as _,bd as g}from"./index.bde4a40f.js";const f=["src"],x={__name:"index",props:{src:{type:String,required:!0}},setup(n){const s=n,e=o(document.documentElement.clientHeight-94.5+"px;"),t=o(!0),r=a(()=>s.src);return l(()=>{setTimeout(()=>{t.value=!1},300),window.onresize=function(){e.value=document.documentElement.clientHeight-94.5+"px;"}}),(c,v)=>{const i=u("loading");return d((m(),p("div",{style:g("height:"+e.value)},[h("iframe",{src:_(r),frameborder:"no",style:{width:"100%",height:"100%"},scrolling:"auto"},null,8,f)],4)),[[i,t.value]])}}};export{x as _};
