import{bg as v,l as d,bC as S,o as p,q as f,m as e,i as a,w as k,f as w,e as n,x as h,be as A,I as D,D as I}from"./index.bde4a40f.js";/* empty css              */import{C as B}from"./index.ec64e5cc.js";import{_ as K,F as q}from"./Form.9957df10.js";import"./index.20aec7d3.js";import"./isPlainObject.46058b4b.js";function N(){return v({url:"/config/getAliSmsConfig",method:"get"})}function P(r){return v({url:"/config/updateAliSmsConfig",method:"post",data:r})}const V=n("span",{class:"card-title"},"\u963F\u91CC\u4E91\u77ED\u4FE1\u914D\u7F6E",-1),z=n("span",{class:"pl-10 text-xs text-warning"},[h(" \u77ED\u4FE1\u5E73\u53F0\u7BA1\u7406\u5730\u5740\uFF1A "),n("a",{href:"https://dysms.console.aliyun.com/dysms.htm",target:"_blank"}," https://dysms.console.aliyun.com/dysms.htm ")],-1),U=n("div",{class:"mt-4 text-xs"},"\u963F\u91CC\u4E91\u77ED\u4FE1\u79D8\u94A5ID,\u8BF7\u524D\u5F80\u963F\u91CC\u4E91\u63A7\u5236\u5E73\u53F0\u83B7\u53D6",-1),L=n("div",{class:"mt-4 text-xs"},"\u963F\u91CC\u4E91\u77ED\u4FE1\u79D8\u94A5,\u8BF7\u524D\u5F80\u963F\u91CC\u4E91\u63A7\u5236\u5E73\u53F0\u83B7\u53D6",-1),T=h(" \u4FDD \u5B58 "),O={__name:"aliyun",setup(r){const s=d({}),g={accessKey:[{required:!0,message:"\u8BF7\u8F93\u5165\u963F\u91CC\u4E91\u77ED\u4FE1\u79D8\u94A5ID!"}],accessSecret:[{required:!0,message:"\u8BF7\u8F93\u5165\u963F\u91CC\u4E91\u77ED\u4FE1\u5BC6\u94A5!"}]};let o=d(!1);function i(){N().then(({data:l}=response)=>{s.value=l})}const y=l=>{o.value=!0,P(s.value).then(t=>{A.success("\u4FDD\u5B58\u6210\u529F!"),o.value=!1,i()}).catch(t=>{o.value=!1})},x=l=>{o.value=!1};return i(),(l,t)=>{const u=D,m=K,_=B,b=I,C=q,F=S("hasPermi");return p(),f(C,{model:s.value,name:"basic",rules:g,labelCol:{xs:3,sm:5},"wrapper-col":{xs:14,sm:10},autocomplete:"off",onFinish:y,onFinishFailed:x},{default:e(()=>[a(_,{class:"card",size:"small"},{title:e(()=>[V,z]),default:e(()=>[a(m,{label:"access_key_id",name:"accessKey"},{extra:e(()=>[U]),default:e(()=>[a(u,{value:s.value.accessKey,"onUpdate:value":t[0]||(t[0]=c=>s.value.accessKey=c),placeholder:"\u8BF7\u8F93\u5165access_key_id"},null,8,["value"])]),_:1}),a(m,{label:"access_key_secret",name:"accessSecret"},{extra:e(()=>[L]),default:e(()=>[a(u,{value:s.value.accessSecret,"onUpdate:value":t[1]||(t[1]=c=>s.value.accessSecret=c),placeholder:"\u8BF7\u8F93\u5165access_key_secret"},null,8,["value"])]),_:1})]),_:1}),a(_,{class:"card-btn",size:"small"},{default:e(()=>[k((p(),f(b,{type:"primary",loading:w(o),"html-type":"submit"},{default:e(()=>[T]),_:1},8,["loading"])),[[F,["config:alisms:updateConfig"]]])]),_:1})]),_:1},8,["model"])}}};export{O as default};
