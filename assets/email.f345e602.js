import{bg as g,l as p,bC as q,o as _,q as v,m as t,i as o,w as P,f as y,e as i,x as U,dj as f,be as B,I as L,D as T}from"./index.bde4a40f.js";/* empty css              */import{C as D}from"./index.ec64e5cc.js";import{_ as I,F as V}from"./Form.9957df10.js";import{_ as j}from"./Password.f10fa33a.js";import"./index.20aec7d3.js";import"./isPlainObject.46058b4b.js";function k(){return g({url:"/config/getMailConfig",method:"get"})}function z(c){return g({url:"/config/updateMailConfig",method:"post",data:c})}const E=i("span",{class:"card-title"},"\u90AE\u7BB1\u914D\u7F6E",-1),O=i("div",{class:"mt-4 text-xs"},"\u6839\u636E\u90AE\u7BB1\u5730\u5740,\u81EA\u52A8\u83B7\u53D6",-1),A=i("div",{class:"mt-4 text-xs"},"\u53D1\u4EF6\u670D\u52A1\u5668\uFF08\u5BF9\u5E94\uFF1ASTMP\uFF09",-1),G=i("div",{class:"mt-4 text-xs"},"\u670D\u52A1\u5668\u7AEF\u53E3\uFF08SSL\u7AEF\u53E3\uFF09",-1),H=U(" \u4FDD \u5B58 "),Z={__name:"email",setup(c){const h=async(l,a)=>{if(!f(a))return Promise.reject(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u66F4\u662F\u7684\u90AE\u7BB1\u5730\u5740"))},e=p({}),x={account:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740!"},{required:!0,validator:h}],accountName:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u540D\u79F0!"}],host:[{required:!0,message:"\u8F93\u5165\u53D1\u4EF6\u670D\u52A1\u5668\uFF08\u5BF9\u5E94\uFF1ASTMP\uFF09!"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5BC6\u7801!"}],port:[{required:!0,message:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u7AEF\u53E3\uFF08SSL\u7AEF\u53E3\uFF09!"}]};let n=p(!1);function b(l){f(l.target._value)&&(e.value.accountName=l.target._value.substring(0,l.target._value.indexOf("@")))}function d(){k().then(({data:l}=response)=>{e.value=l})}const C=l=>{n.value=!0,z(e.value).then(a=>{B.success("\u4FDD\u5B58\u6210\u529F!"),n.value=!1,d()}).catch(a=>{n.value=!1})},w=l=>{n.value=!1};return d(),(l,a)=>{const u=L,r=I,M=j,m=D,F=T,S=V,N=q("hasPermi");return _(),v(S,{model:e.value,rules:x,name:"basic",labelCol:{xs:3,sm:5},"wrapper-col":{xs:14,sm:10},autocomplete:"off",onFinish:C,onFinishFailed:w},{default:t(()=>[o(m,{class:"card",size:"small"},{title:t(()=>[E]),default:t(()=>[o(r,{label:"\u90AE\u7BB1\u5730\u5740",name:"account"},{default:t(()=>[o(u,{value:e.value.account,"onUpdate:value":a[0]||(a[0]=s=>e.value.account=s),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",onChange:b},null,8,["value"])]),_:1}),o(r,{label:"\u90AE\u7BB1\u540D\u79F0",name:"accountName"},{extra:t(()=>[O]),default:t(()=>[o(u,{value:e.value.accountName,"onUpdate:value":a[1]||(a[1]=s=>e.value.accountName=s),readOnly:"",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u540D\u79F0"},null,8,["value"])]),_:1}),o(r,{label:"\u53D1\u4EF6\u670D\u52A1\u5668",name:"host"},{extra:t(()=>[A]),default:t(()=>[o(u,{value:e.value.host,"onUpdate:value":a[2]||(a[2]=s=>e.value.host=s),placeholder:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u670D\u52A1\u5668\uFF08\u5BF9\u5E94\uFF1ASTMP\uFF09"},null,8,["value"])]),_:1}),o(r,{label:"\u90AE\u7BB1\u5BC6\u7801",name:"password"},{default:t(()=>[o(M,{value:e.value.password,"onUpdate:value":a[3]||(a[3]=s=>e.value.password=s),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5BC6\u7801"},null,8,["value"])]),_:1}),o(r,{label:"\u670D\u52A1\u5668\u7AEF\u53E3",name:"port"},{extra:t(()=>[G]),default:t(()=>[o(u,{value:e.value.port,"onUpdate:value":a[4]||(a[4]=s=>e.value.port=s),placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u7AEF\u53E3\uFF08SSL\u7AEF\u53E3\uFF09"},null,8,["value"])]),_:1})]),_:1}),o(m,{class:"card-btn",size:"small"},{default:t(()=>[P((_(),v(F,{type:"primary",loading:y(n),"html-type":"submit"},{default:t(()=>[H]),_:1},8,["loading"])),[[N,["config:mail:updateConfig"]]])]),_:1})]),_:1},8,["model"])}}};export{Z as default};
