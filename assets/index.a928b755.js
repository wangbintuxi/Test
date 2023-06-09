import{da as we,db as De,O as p,G as pe,l as D,aL as Ce,dc as Re,N as R,i as y,H as N,aJ as Te,bM as Ne,ap as qe,d as ue,aw as He,az as J,L as Me,cr as le,aS as Ue,U as ze,K as Oe,dd as Ge,c7 as Ke,P as Le,Q as We,aP as ve}from"./index.bde4a40f.js";function me(){return typeof BigInt=="function"}function Q(a){var e=a.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var l=e||"0",v=l.split("."),s=v[0]||"0",f=v[1]||"0";s==="0"&&f==="0"&&(t=!1);var d=t?"-":"";return{negative:t,negativeStr:d,trimStr:l,integerStr:s,decimalStr:f,fullStr:"".concat(d).concat(l)}}function be(a){var e=String(a);return!Number.isNaN(Number(e))&&e.includes("e")}function Y(a){var e=String(a);if(be(a)){var t=Number(e.slice(e.indexOf("e-")+2)),l=e.match(/\.(\d+)/);return l!=null&&l[1]&&(t+=l[1].length),t}return e.includes(".")&&he(e)?e.length-e.indexOf(".")-1:0}function Se(a){var e=String(a);if(be(a)){if(a>Number.MAX_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MIN_SAFE_INTEGER);e=a.toFixed(Y(e))}return Q(e).fullStr}function he(a){return typeof a=="number"?!Number.isNaN(a):a?/^\s*-?\d+(\.\d+)?\s*$/.test(a)||/^\s*-?\d+\.\s*$/.test(a)||/^\s*-?\.\d+\s*$/.test(a):!1}var je=function(){function a(e){if(De(this,a),p(this,"origin",""),!e&&e!==0||!String(e).trim()){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return we(a,[{key:"negate",value:function(){return new a(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var l=Number(t);if(Number.isNaN(l))return this;var v=this.number+l;if(v>Number.MAX_SAFE_INTEGER)return new a(Number.MAX_SAFE_INTEGER);if(v<Number.MIN_SAFE_INTEGER)return new a(Number.MIN_SAFE_INTEGER);var s=Math.max(Y(this.number),Y(l));return new a(v.toFixed(s))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Se(this.number):this.origin}}]),a}(),Xe=function(){function a(e){if(De(this,a),p(this,"origin",""),!e&&e!==0||!String(e).trim()){this.empty=!0;return}if(this.origin=String(e),e==="-"){this.nan=!0;return}var t=e;if(be(t)&&(t=Number(t)),t=typeof t=="string"?t:Se(t),he(t)){var l=Q(t);this.negative=l.negative;var v=l.trimStr.split(".");this.integer=BigInt(v[0]);var s=v[1]||"0";this.decimal=BigInt(s),this.decimalLen=s.length}else this.nan=!0}return we(a,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var l="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(l)}},{key:"negate",value:function(){var t=new a(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var l=new a(t);if(l.isInvalidate())return this;var v=Math.max(this.getDecimalStr().length,l.getDecimalStr().length),s=this.alignDecimal(v),f=l.alignDecimal(v),d=(s+f).toString(),c=Q(d),g=c.negativeStr,m=c.trimStr,i="".concat(g).concat(m.padStart(v+1,"0"));return new a("".concat(i.slice(0,-v),".").concat(i.slice(-v)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Q("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),a}();function F(a){return me()?new Xe(a):new je(a)}function ge(a,e,t){if(a==="")return"";var l=Q(a),v=l.negativeStr,s=l.integerStr,f=l.decimalStr,d="".concat(e).concat(f),c="".concat(v).concat(s);if(t>=0){var g=Number(f[t]);if(g>=5){var m=F(a).add("".concat(v,"0.").concat("0".repeat(t)).concat(10-g));return ge(m.toString(),e,t)}return t===0?c:"".concat(c).concat(e).concat(f.padEnd(t,"0").slice(0,t))}return d===".0"?c:"".concat(c).concat(d)}var Je=200,Qe=600,Ye=pe({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var l=t.slots,v=t.emit,s=D(),f=function(g,m){g.preventDefault(),v("step",m);function i(){v("step",m),s.value=setTimeout(i,Je)}s.value=setTimeout(i,Qe)},d=function(){clearTimeout(s.value)};return Ce(function(){d()}),function(){if(Re())return null;var c=e.prefixCls,g=e.upDisabled,m=e.downDisabled,i="".concat(c,"-handler"),V=R(i,"".concat(i,"-up"),p({},"".concat(i,"-up-disabled"),g)),_=R(i,"".concat(i,"-down"),p({},"".concat(i,"-down-disabled"),m)),C={unselectable:"on",role:"button",onMouseup:d,onMouseleave:d},x=l.upNode,A=l.downNode;return y("div",{class:"".concat(i,"-wrap")},[y("span",N(N({},C),{},{onMousedown:function(M){f(M,!0)},"aria-label":"Increase Value","aria-disabled":g,class:V}),[(x==null?void 0:x())||y("span",{unselectable:"on",class:"".concat(c,"-handler-up-inner")},null)]),y("span",N(N({},C),{},{onMousedown:function(M){f(M,!1)},"aria-label":"Decrease Value","aria-disabled":m,class:_}),[(A==null?void 0:A())||y("span",{unselectable:"on",class:"".concat(c,"-handler-down-inner")},null)])])}}});function Ze(a,e){var t=D(null);function l(){try{var s=a.value,f=s.selectionStart,d=s.selectionEnd,c=s.value,g=c.substring(0,f),m=c.substring(d);t.value={start:f,end:d,value:c,beforeTxt:g,afterTxt:m}}catch{}}function v(){if(a.value&&t.value&&e.value)try{var s=a.value.value,f=t.value,d=f.beforeTxt,c=f.afterTxt,g=f.start,m=s.length;if(s.endsWith(c))m=s.length-t.value.afterTxt.length;else if(s.startsWith(d))m=d.length;else{var i=d[g-1],V=s.indexOf(i,g-1);V!==-1&&(m=V+1)}a.value.setSelectionRange(m,m)}catch(_){Te(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(_.message))}}return[l,v]}var et=function(){var a=D(0),e=function(){Ne.cancel(a.value)};return Ce(function(){e()}),function(t){e(),a.value=Ne(function(){t()})}},tt=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],Ie=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},xe=function(e){var t=F(e);return t.isInvalidate()?null:t},Be=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}},nt=pe({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:N(N({},Be()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var l=t.attrs,v=t.slots,s=t.emit,f=t.expose,d=D(),c=D(!1),g=D(!1),m=D(!1),i=D(F(e.value));function V(u){e.value===void 0&&(i.value=u)}var _=function(n,o){if(!o)return e.precision>=0?e.precision:Math.max(Y(n),Y(e.step))},C=function(n){var o=String(n);if(e.parser)return e.parser(o);var r=o;return e.decimalSeparator&&(r=r.replace(e.decimalSeparator,".")),r.replace(/[^\w.-]+/g,"")},x=D(""),A=function(n,o){if(e.formatter)return e.formatter(n,{userTyping:o,input:String(x.value)});var r=typeof n=="number"?Se(n):n;if(!o){var I=_(r,o);if(he(r)&&(e.decimalSeparator||I>=0)){var h=e.decimalSeparator||".";r=ge(r,h,I)}}return r},G=function(){var u=e.value;return i.value.isInvalidate()&&["string","number"].includes(qe(u))?Number.isNaN(u)?"":u:A(i.value.toString(),!1)}();x.value=G;function M(u,n){x.value=A(u.isInvalidate()?u.toString(!1):u.toString(!n),n)}var P=ue(function(){return xe(e.max)}),E=ue(function(){return xe(e.min)}),S=ue(function(){return!P.value||!i.value||i.value.isInvalidate()?!1:P.value.lessEquals(i.value)}),T=ue(function(){return!E.value||!i.value||i.value.isInvalidate()?!1:i.value.lessEquals(E.value)}),k=Ze(d,c),w=He(k,2),q=w[0],Z=w[1],H=function(n){return P.value&&!n.lessEquals(P.value)?P.value:E.value&&!E.value.lessEquals(n)?E.value:null},U=function(n){return!H(n)},z=function(n,o){var r=n,I=U(r)||r.isEmpty();if(!r.isEmpty()&&!o&&(r=H(r)||r,I=!0),!e.readonly&&!e.disabled&&I){var h=r.toString(),B=_(h,o);if(B>=0&&(r=F(ge(h,".",B))),!r.equals(i.value)){var $;V(r),($=e.onChange)===null||$===void 0||$.call(e,r.isEmpty()?null:Ie(e.stringMode,r)),e.value===void 0&&M(r,o)}return r}return i.value},K=et(),L=function u(n){var o;if(q(),x.value=n,!m.value){var r=C(n),I=F(r);I.isNaN()||z(I,!0)}(o=e.onInput)===null||o===void 0||o.call(e,n),K(function(){var h=n;e.parser||(h=n.replace(/。/g,".")),h!==n&&u(h)})},W=function(){m.value=!0},ee=function(){m.value=!1,L(d.value.value)},j=function(n){L(n.target.value)},X=function(n){var o,r;if(!(n&&S.value||!n&&T.value)){g.value=!1;var I=F(e.step);n||(I=I.negate());var h=(i.value||F(0)).add(I.toString()),B=z(h,!1);(o=e.onStep)===null||o===void 0||o.call(e,Ie(e.stringMode,B),{offset:e.step,type:n?"up":"down"}),(r=d.value)===null||r===void 0||r.focus()}},te=function(n){var o=F(C(x.value)),r=o;o.isNaN()?r=i.value:r=z(o,n),e.value!==void 0?M(i.value,!1):r.isNaN()||M(r,!1)},oe=function(n){var o=n.which;if(g.value=!0,o===le.ENTER){var r;m.value||(g.value=!1),te(!1),(r=e.onPressEnter)===null||r===void 0||r.call(e,n)}e.keyboard!==!1&&!m.value&&[le.UP,le.DOWN].includes(o)&&(X(le.UP===o),n.preventDefault())},b=function(){g.value=!1},O=function(n){te(!1),c.value=!1,g.value=!1,s("blur",n)};return J(function(){return e.precision},function(){i.value.isInvalidate()||M(i.value,!1)},{flush:"post"}),J(function(){return e.value},function(){var u=F(e.value);i.value=u;var n=F(C(x.value));(!u.equals(n)||!g.value||e.formatter)&&M(u,g.value)},{flush:"post"}),J(x,function(){e.formatter&&Z()},{flush:"post"}),J(function(){return e.disabled},function(u){u&&(c.value=!1)}),f({focus:function(){var n;(n=d.value)===null||n===void 0||n.focus()},blur:function(){var n;(n=d.value)===null||n===void 0||n.blur()}}),function(){var u,n=N(N({},l),e),o=n.prefixCls,r=o===void 0?"rc-input-number":o,I=n.min,h=n.max,B=n.step,$=B===void 0?1:B;n.defaultValue,n.value;var ne=n.disabled,ae=n.readonly;n.keyboard;var re=n.controls,se=re===void 0?!0:re,ie=n.autofocus;n.stringMode,n.parser,n.formatter,n.precision,n.decimalSeparator,n.onChange,n.onInput,n.onPressEnter,n.onStep;var Ve=n.lazy,_e=n.class,Fe=n.style,ke=Me(n,tt),Ae=v.upHandler,$e=v.downHandler,ye="".concat(r,"-input"),ce={};return Ve?ce.onChange=j:ce.onInput=j,y("div",{class:R(r,_e,(u={},p(u,"".concat(r,"-focused"),c.value),p(u,"".concat(r,"-disabled"),ne),p(u,"".concat(r,"-readonly"),ae),p(u,"".concat(r,"-not-a-number"),i.value.isNaN()),p(u,"".concat(r,"-out-of-range"),!i.value.isInvalidate()&&!U(i.value)),u)),style:Fe,onKeydown:oe,onKeyup:b},[se&&y(Ye,{prefixCls:r,upDisabled:S.value,downDisabled:T.value,onStep:X},{upNode:Ae,downNode:$e}),y("div",{class:"".concat(ye,"-wrap")},[y("input",N(N(N({autofocus:ie,autocomplete:"off",role:"spinbutton","aria-valuemin":I,"aria-valuemax":h,"aria-valuenow":i.value.isInvalidate()?null:i.value.toString(),step:$},ke),{},{ref:d,class:ye,value:x.value,disabled:ne,readonly:ae,onFocus:function(Pe){c.value=!0,s("focus",Pe)}},ce),{},{onBlur:O,onCompositionstart:W,onCompositionend:ee}),null)])])}}});function de(a){return a!=null}var at=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],Ee=Be(),rt=function(){return N(N({},Ee),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:ve.any,addonAfter:ve.any,prefix:ve.any,"onUpdate:value":Ee.onChange,valueModifiers:Object})},fe=pe({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:rt(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var l=t.emit,v=t.expose,s=t.attrs,f=t.slots,d=ze(),c=Oe("input-number",e),g=c.prefixCls,m=c.size,i=c.direction,V=D(e.value===void 0?e.defaultValue:e.value),_=D(!1);J(function(){return e.value},function(){V.value=e.value});var C=D(null),x=function(){var S;(S=C.value)===null||S===void 0||S.focus()},A=function(){var S;(S=C.value)===null||S===void 0||S.blur()};v({focus:x,blur:A});var G=function(S){e.value===void 0&&(V.value=S),l("update:value",S),l("change",S),d.onFieldChange()},M=function(S){_.value=!1,l("blur",S),d.onFieldBlur()},P=function(S){_.value=!0,l("focus",S)};return function(){var E,S,T,k,w=N(N({},s),e),q=w.class,Z=w.bordered,H=w.readonly,U=w.style,z=w.addonBefore,K=z===void 0?(E=f.addonBefore)===null||E===void 0?void 0:E.call(f):z,L=w.addonAfter,W=L===void 0?(S=f.addonAfter)===null||S===void 0?void 0:S.call(f):L,ee=w.prefix,j=ee===void 0?(T=f.prefix)===null||T===void 0?void 0:T.call(f):ee,X=w.valueModifiers,te=X===void 0?{}:X,oe=Me(w,at),b=g.value,O=m.value,u=R((k={},p(k,"".concat(b,"-lg"),O==="large"),p(k,"".concat(b,"-sm"),O==="small"),p(k,"".concat(b,"-rtl"),i.value==="rtl"),p(k,"".concat(b,"-readonly"),H),p(k,"".concat(b,"-borderless"),!Z),k),q),n=y(nt,N(N({},Le(oe,["size","defaultValue"])),{},{ref:C,lazy:!!te.lazy,value:V.value,class:u,prefixCls:b,readonly:H,onChange:G,onBlur:M,onFocus:P}),{upHandler:function(){return y(Ge,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return y(Ke,{class:"".concat(b,"-handler-down-inner")},null)}}),o=de(K)||de(W);if(de(j)){var r,I=R("".concat(b,"-affix-wrapper"),(r={},p(r,"".concat(b,"-affix-wrapper-focused"),_.value),p(r,"".concat(b,"-affix-wrapper-disabled"),e.disabled),p(r,"".concat(b,"-affix-wrapper-rtl"),i.value==="rtl"),p(r,"".concat(b,"-affix-wrapper-readonly"),H),p(r,"".concat(b,"-affix-wrapper-borderless"),!Z),p(r,"".concat(q),!o&&q),r));n=y("div",{class:I,style:U,onMouseup:function(){return C.value.focus()}},[y("span",{class:"".concat(b,"-prefix")},[j]),n])}if(o){var h,B="".concat(b,"-group"),$="".concat(B,"-addon"),ne=K?y("div",{class:$},[K]):null,ae=W?y("div",{class:$},[W]):null,re=R("".concat(b,"-wrapper"),B,p({},"".concat(B,"-rtl"),i.value==="rtl")),se=R("".concat(b,"-group-wrapper"),(h={},p(h,"".concat(b,"-group-wrapper-sm"),O==="small"),p(h,"".concat(b,"-group-wrapper-lg"),O==="large"),p(h,"".concat(b,"-group-wrapper-rtl"),i.value==="rtl"),h),q);n=y("div",{class:se,style:U},[y("div",{class:re},[ne,n,ae])])}return We(n,{style:U})}}}),lt=Ue(fe,{install:function(e){return e.component(fe.name,fe),e}});export{lt as _};
