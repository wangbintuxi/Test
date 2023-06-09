import{_ as ne,G as ae,l as r,bB as se,d as oe,r as le,k as ue,b2 as ie,bC as de,o,c as x,i as e,m as t,f as l,bE as ce,F as E,bD as _e,q as i,x as d,t as re,e as me,w as p,bF as P,s as f,b3 as pe,be as fe,I as ve,bH as ye,bI as ge,D as be,bf as he,bJ as ke,b4 as xe,bK as Ie,d9 as Ce}from"./index.bde4a40f.js";import{_ as we}from"./index.b299fc45.js";import"./index.e162e362.js";import{C as Se}from"./index.ec64e5cc.js";/* empty css              */import Ne from"./CreateForm.bb52e6e6.js";import{l as ze,d as Re}from"./menu.f66d5a42.js";import{_ as Fe,F as Ke}from"./Form.9957df10.js";import{_ as $e,a as Be}from"./index.20aec7d3.js";import"./index.094c9c57.js";import"./RadioButton.41d4890b.js";import"./index.5d20d864.js";import"./Group.12a87c6f.js";import"./Search.26e235a2.js";import"./isPlainObject.46058b4b.js";import"./Password.f10fa33a.js";import"./index.a928b755.js";import"./index.1ba87f8f.js";const De=d(" \u67E5\u8BE2 "),Oe=d(" \u91CD\u7F6E "),Ue={class:"table-operations"},qe=d(" \u65B0\u589E "),Ae=d(" \u5C55\u5F00/\u6298\u53E0 "),Ee={key:0,class:"flex items-center justify-center"},Pe=d(" \u4FEE\u6539 "),Le=d(" \u65B0\u589E "),Ve=d(" \u5220\u9664 "),je=ae({name:"Menu"}),Me=Object.assign(je,{setup(Qe){const{proxy:I}=pe(),{sys_normal_disable:C}=I.useDict("sys_normal_disable"),w=r([]),K=r([]),$=se(),y=oe({get(){return $.size},set(n){$.setSize(n)}}),L=r(!1),S=r(null),g=r(!0),N=r(!0),z=r([]),V=le({queryParams:{pageNum:1,pageSize:10,menuName:void 0,status:void 0},columns:[{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"menuName",ellipsis:!0,align:"center"},{title:"\u56FE\u6807",dataIndex:"icon",align:"center"},{title:"\u6392\u5E8F",dataIndex:"orderNum",align:"center"},{title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",ellipsis:!0,align:"center"},{title:"\u7EC4\u4EF6\u8DEF\u5F84",dataIndex:"component",ellipsis:!0,align:"center"},{title:"\u72B6\u6001",dataIndex:"status",ellipsis:!0,align:"center"},{title:"\u64CD\u4F5C",dataIndex:"operation",width:"18%",align:"center"}]}),{queryParams:c,columns:b}=ue(V),h=()=>{g.value=!0,ze(c.value).then(n=>{w.value=I.handleTree(n.data,"menuId"),z.value=n.data.map(a=>a.menuId),K.value=n.data.map(a=>a.menuId),g.value=!1})},k=()=>{c.value.pageNum=1,h()},j=()=>{I.resetForm("queryRef"),k()},M=()=>{N.value?R([]):R(K.value),N.value=!N.value},R=n=>{z.value=n},Q=n=>{const a=n.menuId;Re(a).then(()=>{h(),fe.success("\u5220\u9664\u6210\u529F",3)})},B=()=>{S.value.handleAdd()},T=n=>{S.value.handleUpdate(n)};return h(),(n,a)=>{const G=ve,D=Fe,F=$e,H=ye,J=ge,v=ie("c-icon"),_=be,O=he,W=Be,X=Ke,U=Se,Y=ke,Z=xe,ee=Ie,q=Ce,te=we,m=de("hasPermi");return o(),x("div",null,[e(U,{bordered:!1,class:"card card-search p-0",size:"small"},{default:t(()=>[e(X,{class:"search-form",model:l(c),ref:"queryRef","label-col":{span:8},"wrapper-col":{span:16}},{default:t(()=>[e(W,{gutter:48},{default:t(()=>[e(F,{md:8,sm:24},{default:t(()=>[e(D,{label:"\u83DC\u5355\u540D\u79F0",name:"jobName"},{default:t(()=>[e(G,{value:l(c).menuName,"onUpdate:value":a[0]||(a[0]=s=>l(c).menuName=s),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",allowClear:"",onKeyup:ce(k,["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1}),e(F,{md:8,sm:24},{default:t(()=>[e(D,{label:"\u83DC\u5355\u72B6\u6001",name:"status"},{default:t(()=>[e(J,{value:l(c).status,"onUpdate:value":a[1]||(a[1]=s=>l(c).status=s),placeholder:"\u8BF7\u9009\u62E9\u83DC\u5355\u72B6\u6001",style:{width:"100%"}},{default:t(()=>[(o(!0),x(E,null,_e(l(C),(s,u)=>(o(),i(H,{key:u,value:s.value},{default:t(()=>[d(re(s.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),e(F,{md:8,sm:24},{default:t(()=>[e(O,null,{default:t(()=>[e(_,{type:"primary",onClick:k},{default:t(()=>[e(v,{type:"SearchOutlined"}),De]),_:1}),e(_,{onClick:j},{default:t(()=>[e(v,{type:"SyncOutlined"}),Oe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(U,{bordered:!1,class:"card",size:"small"},{default:t(()=>[me("div",Ue,[e(O,null,{default:t(()=>[p((o(),i(_,{type:"primary",onClick:B},{default:t(()=>[e(v,{type:"PlusOutlined"}),qe]),_:1})),[[m,["system:menu:add"]]]),e(_,{type:"cyan",onClick:M},{default:t(()=>[e(v,{type:"SwapOutlined"}),Ae]),_:1})]),_:1}),e(Y,{class:"float-right",columns:l(b),"onUpdate:columns":a[2]||(a[2]=s=>P(b)?b.value=s:null),tableSize:l(y),"onUpdate:tableSize":a[3]||(a[3]=s=>P(y)?y.value=s:null),"refresh-loading":g.value,onRefresh:h},null,8,["columns","tableSize","refresh-loading"])]),w.value.length>0?(o(),i(te,{key:0,loading:g.value,size:l(y),rowKey:"menuId",columns:l(b),"data-source":w.value,pagination:!1,bordered:L.value,expandedRowKeys:z.value,onExpandedRowsChange:R},{bodyCell:t(({column:s,record:u})=>[s.dataIndex==="icon"?(o(),x("div",Ee,[u.icon&&!n.$svgIcon.includes(u.icon)?(o(),i(v,{key:0,type:u.icon},null,8,["type"])):f("",!0),u.icon&&n.$svgIcon.includes(u.icon)?(o(),i(Z,{key:1,"icon-class":u.icon},null,8,["icon-class"])):f("",!0)])):f("",!0),s.dataIndex==="status"?(o(),i(ee,{key:1,options:l(C),value:u.status},null,8,["options","value"])):f("",!0),s.dataIndex==="operation"?(o(),x(E,{key:2},[p((o(),i(_,{class:"ant-btn-sm",type:"link",onClick:A=>T(u)},{default:t(()=>[Pe]),_:2},1032,["onClick"])),[[m,["system:menu:edit"]]]),p(e(q,{type:"vertical"},null,512),[[m,["system:menu:add"]]]),p((o(),i(_,{class:"ant-btn-sm",type:"link",onClick:A=>B()},{default:t(()=>[Le]),_:2},1032,["onClick"])),[[m,["system:menu:add"]]]),p(e(q,{type:"vertical"},null,512),[[m,["system:menu:remove"]]]),p((o(),i(_,{danger:"",class:"ant-btn-sm",type:"link",onClick:A=>Q(u)},{default:t(()=>[Ve]),_:2},1032,["onClick"])),[[m,["system:menu:remove"]]])],64)):f("",!0)]),_:1},8,["loading","size","columns","data-source","bordered","expandedRowKeys"])):f("",!0)]),_:1}),e(Ne,{ref_key:"createForm",ref:S,sys_normal_disable:l(C),onOk:k},null,8,["sys_normal_disable"])])}}});var ct=ne(Me,[["__scopeId","data-v-2009cb51"]]);export{ct as default};
