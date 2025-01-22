import{J as W,K as r,aR as B,aX as le,L as De,be as ht,bf as vt,bg as ft,d as Q,M as mt,R as Ue,bh as pt,m as C,O as gt,v as D,P as bt,Q as yt,ac as Me,aa as be,au as wt,S as Ie,U as xt,V as we,W as T,X as kt,Y as $t,b6 as _t,a0 as Ct,a1 as St,a9 as re,bi as de,bj as ce,aI as Rt,bk as zt,u as Tt,q as Ae,i as j,c as q,f as o,t as l,j as h,a as i,$ as ue,x as p,A as M,D as U,n as Dt,_ as O,bl as Mt,F as It,r as Vt,bm as Bt,ag as X,bn as Nt,o as Ut,b as xe,e as ke,bo as At,bp as Ft,bq as ye,br as Pt,B as Ht}from"./main-5959a9b2.js";import{N as jt}from"./Spin-538d3aa2.js";const Et=W([r("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[B("reverse",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),B("vertical",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),r("slider-marks",[r("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),B("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[r("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[r("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),r("slider-rail",`
 height: 100%;
 `,[le("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),B("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),r("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[r("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),r("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[r("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[r("slider-handle",`
 cursor: not-allowed;
 `)]),B("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),W("&:hover",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),B("active",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),r("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[r("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),r("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[le("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),r("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[r("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[r("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[W("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),W("&:focus",[r("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[W("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),r("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[B("transition-disabled",[r("slider-dot","transition: none;")]),r("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[B("active","border: var(--n-dot-border-active);")])])]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[De()]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[B("top",`
 margin-bottom: 12px;
 `),B("right",`
 margin-left: 12px;
 `),B("bottom",`
 margin-top: 12px;
 `),B("left",`
 margin-right: 12px;
 `),De()]),ht(r("slider",[r("slider-dot","background-color: var(--n-dot-color-modal);")])),vt(r("slider",[r("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function Ve(a){return window.TouchEvent&&a instanceof window.TouchEvent}function Be(){const a=new Map,s=g=>x=>{a.set(g,x)};return ft(()=>{a.clear()}),[a,s]}const Ot=0,Lt=Object.assign(Object.assign({},Ue.props),{to:we.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Ne=Q({name:"Slider",props:Lt,slots:Object,setup(a){const{mergedClsPrefixRef:s,namespaceRef:g,inlineThemeDisabled:x}=mt(a),u=Ue("Slider","-slider",Et,pt,a,s),c=C(null),[k,$]=Be(),[y,w]=Be(),R=C(new Set),E=gt(a),{mergedDisabledRef:F}=E,L=D(()=>{const{step:e}=a;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let n=0;return t.includes(".")&&(n=t.length-t.indexOf(".")-1),n}),Y=C(a.defaultValue),he=bt(a,"value"),J=yt(he,Y),I=D(()=>{const{value:e}=J;return(a.range?e:[e]).map(Se)}),Z=D(()=>I.value.length>2),f=D(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),b=D(()=>{const{marks:e}=a;return e?Object.keys(e).map(Number.parseFloat):null}),v=C(-1),P=C(-1),N=C(-1),V=C(!1),ee=C(!1),ve=D(()=>{const{vertical:e,reverse:t}=a;return e?t?"top":"bottom":t?"right":"left"}),Fe=D(()=>{if(Z.value)return;const e=I.value,t=te(a.range?Math.min(...e):a.min),n=te(a.range?Math.max(...e):e[0]),{value:d}=ve;return a.vertical?{[d]:`${t}%`,height:`${n-t}%`}:{[d]:`${t}%`,width:`${n-t}%`}}),Pe=D(()=>{const e=[],{marks:t}=a;if(t){const n=I.value.slice();n.sort((z,S)=>z-S);const{value:d}=ve,{value:m}=Z,{range:_}=a,A=m?()=>!1:z=>_?z>=n[0]&&z<=n[n.length-1]:z<=n[0];for(const z of Object.keys(t)){const S=Number(z);e.push({active:A(S),key:S,label:t[z],style:{[d]:`${te(S)}%`}})}}return e});function He(e,t){const n=te(e),{value:d}=ve;return{[d]:`${n}%`,zIndex:t===v.value?1:0}}function $e(e){return a.showTooltip||N.value===e||v.value===e&&V.value}function je(e){return V.value?!(v.value===e&&P.value===e):!0}function Ee(e){var t;~e&&(v.value=e,(t=k.get(e))===null||t===void 0||t.focus())}function Oe(){y.forEach((e,t)=>{$e(t)&&e.syncPosition()})}function _e(e){const{"onUpdate:value":t,onUpdateValue:n}=a,{nTriggerFormInput:d,nTriggerFormChange:m}=E;n&&re(n,e),t&&re(t,e),Y.value=e,d(),m()}function Ce(e){const{range:t}=a;if(t){if(Array.isArray(e)){const{value:n}=I;e.join()!==n.join()&&_e(e)}}else Array.isArray(e)||I.value[0]!==e&&_e(e)}function fe(e,t){if(a.range){const n=I.value.slice();n.splice(t,1,e),Ce(n)}else Ce(e)}function me(e,t,n){const d=n!==void 0;n||(n=e-t>0?1:-1);const m=b.value||[],{step:_}=a;if(_==="mark"){const S=ne(e,m.concat(t),d?n:void 0);return S?S.value:t}if(_<=0)return t;const{value:A}=L;let z;if(d){const S=Number((t/_).toFixed(A)),H=Math.floor(S),pe=S>H?H:H-1,ge=S<H?H:H+1;z=ne(t,[Number((pe*_).toFixed(A)),Number((ge*_).toFixed(A)),...m],n)}else{const S=Ge(e);z=ne(e,[...m,S])}return z?Se(z.value):t}function Se(e){return Math.min(a.max,Math.max(a.min,e))}function te(e){const{max:t,min:n}=a;return(e-n)/(t-n)*100}function Le(e){const{max:t,min:n}=a;return n+(t-n)*e}function Ge(e){const{step:t,min:n}=a;if(Number(t)<=0||t==="mark")return e;const d=Math.round((e-n)/t)*t+n;return Number(d.toFixed(L.value))}function ne(e,t=b.value,n){if(!(t!=null&&t.length))return null;let d=null,m=-1;for(;++m<t.length;){const _=t[m]-e,A=Math.abs(_);(n===void 0||_*n>0)&&(d===null||A<d.distance)&&(d={index:m,distance:A,value:t[m]})}return d}function Re(e){const t=c.value;if(!t)return;const n=Ve(e)?e.touches[0]:e,d=t.getBoundingClientRect();let m;return a.vertical?m=(d.bottom-n.clientY)/d.height:m=(n.clientX-d.left)/d.width,a.reverse&&(m=1-m),Le(m)}function Ke(e){if(F.value||!a.keyboard)return;const{vertical:t,reverse:n}=a;switch(e.key){case"ArrowUp":e.preventDefault(),ae(t&&n?-1:1);break;case"ArrowRight":e.preventDefault(),ae(!t&&n?-1:1);break;case"ArrowDown":e.preventDefault(),ae(t&&n?1:-1);break;case"ArrowLeft":e.preventDefault(),ae(!t&&n?1:-1);break}}function ae(e){const t=v.value;if(t===-1)return;const{step:n}=a,d=I.value[t],m=Number(n)<=0||n==="mark"?d:d+n*e;fe(me(m,d,e>0?1:-1),t)}function Xe(e){var t,n;if(F.value||!Ve(e)&&e.button!==Ot)return;const d=Re(e);if(d===void 0)return;const m=I.value.slice(),_=a.range?(n=(t=ne(d,m))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1:0;_!==-1&&(e.preventDefault(),Ee(_),Ye(),fe(me(d,I.value[_]),_))}function Ye(){V.value||(V.value=!0,a.onDragstart&&re(a.onDragstart),de("touchend",document,ie),de("mouseup",document,ie),de("touchmove",document,se),de("mousemove",document,se))}function oe(){V.value&&(V.value=!1,a.onDragend&&re(a.onDragend),ce("touchend",document,ie),ce("mouseup",document,ie),ce("touchmove",document,se),ce("mousemove",document,se))}function se(e){const{value:t}=v;if(!V.value||t===-1){oe();return}const n=Re(e);n!==void 0&&fe(me(n,I.value[t]),t)}function ie(){oe()}function Je(e){v.value=e,F.value||(N.value=e)}function We(e){v.value===e&&(v.value=-1,oe()),N.value===e&&(N.value=-1)}function qe(e){N.value=e}function Qe(e){N.value===e&&(N.value=-1)}Me(v,(e,t)=>void be(()=>P.value=t)),Me(J,()=>{if(a.marks){if(ee.value)return;ee.value=!0,be(()=>{ee.value=!1})}be(Oe)}),wt(()=>{oe()});const ze=D(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:d,fillColorHover:m,handleColor:_,opacityDisabled:A,dotColor:z,dotColorModal:S,handleBoxShadow:H,handleBoxShadowHover:pe,handleBoxShadowActive:ge,handleBoxShadowFocus:Ze,dotBorder:et,dotBoxShadow:tt,railHeight:nt,railWidthVertical:at,handleSize:ot,dotHeight:st,dotWidth:it,dotBorderRadius:lt,fontSize:rt,dotBorderActive:dt,dotColorPopover:ct},common:{cubicBezierEaseInOut:ut}}=u.value;return{"--n-bezier":ut,"--n-dot-border":et,"--n-dot-border-active":dt,"--n-dot-border-radius":lt,"--n-dot-box-shadow":tt,"--n-dot-color":z,"--n-dot-color-modal":S,"--n-dot-color-popover":ct,"--n-dot-height":st,"--n-dot-width":it,"--n-fill-color":d,"--n-fill-color-hover":m,"--n-font-size":rt,"--n-handle-box-shadow":H,"--n-handle-box-shadow-active":ge,"--n-handle-box-shadow-focus":Ze,"--n-handle-box-shadow-hover":pe,"--n-handle-color":_,"--n-handle-size":ot,"--n-opacity-disabled":A,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":nt,"--n-rail-width-vertical":at,"--n-mark-font-size":e}}),G=x?Ie("slider",void 0,ze,a):void 0,Te=D(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:d,indicatorBorderRadius:m}}=u.value;return{"--n-font-size":e,"--n-indicator-border-radius":m,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":d}}),K=x?Ie("slider-indicator",void 0,Te,a):void 0;return{mergedClsPrefix:s,namespace:g,uncontrolledValue:Y,mergedValue:J,mergedDisabled:F,mergedPlacement:f,isMounted:xt(),adjustedTo:we(a),dotTransitionDisabled:ee,markInfos:Pe,isShowTooltip:$e,shouldKeepTooltipTransition:je,handleRailRef:c,setHandleRefs:$,setFollowerRefs:w,fillStyle:Fe,getHandleStyle:He,activeIndex:v,arrifiedValues:I,followerEnabledIndexSet:R,handleRailMouseDown:Xe,handleHandleFocus:Je,handleHandleBlur:We,handleHandleMouseEnter:qe,handleHandleMouseLeave:Qe,handleRailKeyDown:Ke,indicatorCssVars:x?void 0:Te,indicatorThemeClass:K==null?void 0:K.themeClass,indicatorOnRender:K==null?void 0:K.onRender,cssVars:x?void 0:ze,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){var a;const{mergedClsPrefix:s,themeClass:g,formatTooltip:x}=this;return(a=this.onRender)===null||a===void 0||a.call(this),T("div",{class:[`${s}-slider`,g,{[`${s}-slider--disabled`]:this.mergedDisabled,[`${s}-slider--active`]:this.activeIndex!==-1,[`${s}-slider--with-mark`]:this.marks,[`${s}-slider--vertical`]:this.vertical,[`${s}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},T("div",{class:`${s}-slider-rail`},T("div",{class:`${s}-slider-rail__fill`,style:this.fillStyle}),this.marks?T("div",{class:[`${s}-slider-dots`,this.dotTransitionDisabled&&`${s}-slider-dots--transition-disabled`]},this.markInfos.map(u=>T("div",{key:u.key,class:[`${s}-slider-dot`,{[`${s}-slider-dot--active`]:u.active}],style:u.style}))):null,T("div",{ref:"handleRailRef",class:`${s}-slider-handles`},this.arrifiedValues.map((u,c)=>{const k=this.isShowTooltip(c);return T(kt,null,{default:()=>[T($t,null,{default:()=>T("div",{ref:this.setHandleRefs(c),class:`${s}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":u,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(u,c),onFocus:()=>{this.handleHandleFocus(c)},onBlur:()=>{this.handleHandleBlur(c)},onMouseenter:()=>{this.handleHandleMouseEnter(c)},onMouseleave:()=>{this.handleHandleMouseLeave(c)}},_t(this.$slots.thumb,()=>[T("div",{class:`${s}-slider-handle`})]))}),this.tooltip&&T(Ct,{ref:this.setFollowerRefs(c),show:k,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(c),teleportDisabled:this.adjustedTo===we.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>T(St,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(c),onEnter:()=>{this.followerEnabledIndexSet.add(c)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(c)}},{default:()=>{var $;return k?(($=this.indicatorOnRender)===null||$===void 0||$.call(this),T("div",{class:[`${s}-slider-handle-indicator`,this.indicatorThemeClass,`${s}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof x=="function"?x(u):u)):null}})})]})})),this.marks?T("div",{class:`${s}-slider-marks`},this.markInfos.map(u=>T("div",{key:u.key,class:`${s}-slider-mark`,style:u.style},typeof u.label=="function"?u.label():u.label))):null))}});function Gt(){const a=new Date,s=a.getDate(),g=a.getMonth()+1;return`${a.getFullYear()}-${g}-${s}`}const Kt={class:"p-4 space-y-5 min-h-[200px]"},Xt={class:"space-y-6"},Yt={class:"flex items-center space-x-4"},Jt={class:"flex-shrink-0 w-[100px]"},Wt={class:"flex-1"},qt={class:"flex items-center space-x-4"},Qt={class:"flex-shrink-0 w-[100px]"},Zt={class:"w-[200px]"},en={class:"flex items-center space-x-4"},tn={class:"flex-shrink-0 w-[100px]"},nn={class:"flex-1"},an={class:"flex-shrink-0 w-[100px]"},on={class:"flex flex-wrap items-center gap-4"},sn={class:"flex items-center space-x-4"},ln={class:"flex-shrink-0 w-[100px]"},rn={class:"flex flex-wrap items-center gap-4"},dn={class:"flex items-center space-x-4"},cn={class:"flex-shrink-0 w-[100px]"},un={class:"flex flex-wrap items-center gap-4"},hn={class:"flex items-center space-x-4"},vn={class:"flex-shrink-0 w-[100px]"},fn=Q({__name:"General",setup(a){const s=Rt(),g=zt(),{isMobile:x}=Tt(),u=Ae(),c=D(()=>s.theme),k=D(()=>g.userInfo),$=C(k.value.avatar??""),y=C(k.value.name??""),w=C(k.value.description??""),R=D({get(){return s.language},set(f){s.setLanguage(f)}}),E=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],F=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"}];function L(f){g.updateUserInfo(f),u.success(X("common.success"))}function Y(){g.resetUserInfo(),u.success(X("common.success")),window.location.reload()}function he(){const f=Gt(),b=localStorage.getItem("chatStorage")||"{}",v=JSON.stringify(JSON.parse(b),null,2),P=new Blob([v],{type:"application/json"}),N=URL.createObjectURL(P),V=document.createElement("a");V.href=N,V.download=`chat-store_${f}.json`,document.body.appendChild(V),V.click(),document.body.removeChild(V)}function J(f){const b=f.target;if(!b||!b.files)return;const v=b.files[0];if(!v)return;const P=new FileReader;P.onload=()=>{try{const N=JSON.parse(P.result);localStorage.setItem("chatStorage",JSON.stringify(N)),u.success(X("common.success")),location.reload()}catch{u.error(X("common.invalidFileFormat"))}},P.readAsText(v)}function I(){localStorage.removeItem("chatStorage"),location.reload()}function Z(){const f=document.getElementById("fileInput");f&&f.click()}return(f,b)=>(j(),q("div",Kt,[o("div",Xt,[o("div",Yt,[o("span",Jt,l(f.$t("setting.avatarLink")),1),o("div",Wt,[h(i(ue),{value:$.value,"onUpdate:value":b[0]||(b[0]=v=>$.value=v),placeholder:""},null,8,["value"])]),h(i(U),{size:"tiny",text:"",type:"primary",onClick:b[1]||(b[1]=v=>L({avatar:$.value}))},{default:p(()=>[M(l(f.$t("common.save")),1)]),_:1})]),o("div",qt,[o("span",Qt,l(f.$t("setting.name")),1),o("div",Zt,[h(i(ue),{value:y.value,"onUpdate:value":b[2]||(b[2]=v=>y.value=v),placeholder:""},null,8,["value"])]),h(i(U),{size:"tiny",text:"",type:"primary",onClick:b[3]||(b[3]=v=>L({name:y.value}))},{default:p(()=>[M(l(f.$t("common.save")),1)]),_:1})]),o("div",en,[o("span",tn,l(f.$t("setting.description")),1),o("div",nn,[h(i(ue),{value:w.value,"onUpdate:value":b[4]||(b[4]=v=>w.value=v),placeholder:""},null,8,["value"])]),h(i(U),{size:"tiny",text:"",type:"primary",onClick:b[5]||(b[5]=v=>L({description:w.value}))},{default:p(()=>[M(l(f.$t("common.save")),1)]),_:1})]),o("div",{class:Dt(["flex items-center space-x-4",i(x)&&"items-start"])},[o("span",an,l(f.$t("setting.chatHistory")),1),o("div",on,[h(i(U),{size:"small",onClick:he},{icon:p(()=>[h(i(O),{icon:"ri:download-2-fill"})]),default:p(()=>[M(" "+l(f.$t("common.export")),1)]),_:1}),o("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:J},null,32),h(i(U),{size:"small",onClick:Z},{icon:p(()=>[h(i(O),{icon:"ri:upload-2-fill"})]),default:p(()=>[M(" "+l(f.$t("common.import")),1)]),_:1}),h(i(Mt),{placement:"bottom",onPositiveClick:I},{trigger:p(()=>[h(i(U),{size:"small"},{icon:p(()=>[h(i(O),{icon:"ri:close-circle-line"})]),default:p(()=>[M(" "+l(f.$t("common.clear")),1)]),_:1})]),default:p(()=>[M(" "+l(f.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),o("div",sn,[o("span",ln,l(f.$t("setting.theme")),1),o("div",rn,[(j(),q(It,null,Vt(E,v=>h(i(U),{key:v.key,size:"small",type:v.key===i(c)?"primary":void 0,onClick:P=>i(s).setTheme(v.key)},{icon:p(()=>[h(i(O),{icon:v.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),o("div",dn,[o("span",cn,l(f.$t("setting.language")),1),o("div",un,[h(i(Bt),{style:{width:"140px"},value:i(R),options:F,onUpdateValue:b[6]||(b[6]=v=>i(s).setLanguage(v))},null,8,["value"])])]),o("div",hn,[o("span",vn,l(f.$t("setting.resetUserInfo")),1),h(i(U),{size:"small",onClick:Y},{default:p(()=>[M(l(f.$t("common.reset")),1)]),_:1})])])]))}}),mn={class:"p-4 space-y-5 min-h-[200px]"},pn={class:"space-y-6"},gn={class:"flex items-center space-x-4"},bn={class:"flex-shrink-0 w-[120px]"},yn={class:"flex-1"},wn={class:"flex items-center space-x-4"},xn={class:"flex-shrink-0 w-[120px]"},kn={class:"flex-1"},$n={class:"flex items-center space-x-4"},_n={class:"flex-shrink-0 w-[120px]"},Cn={class:"flex-1"},Sn={class:"flex items-center space-x-4"},Rn=o("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),zn=Q({__name:"Advanced",setup(a){const s=Nt(),g=Ae(),x=C(s.systemMessage??""),u=C(s.temperature??.5),c=C(s.top_p??1);function k(y){s.updateSetting(y),g.success(X("common.success"))}function $(){s.resetSetting(),g.success(X("common.success")),window.location.reload()}return(y,w)=>(j(),q("div",mn,[o("div",pn,[o("div",gn,[o("span",bn,l(y.$t("setting.role")),1),o("div",yn,[h(i(ue),{value:x.value,"onUpdate:value":w[0]||(w[0]=R=>x.value=R),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),h(i(U),{size:"tiny",text:"",type:"primary",onClick:w[1]||(w[1]=R=>k({systemMessage:x.value}))},{default:p(()=>[M(l(y.$t("common.save")),1)]),_:1})]),o("div",wn,[o("span",xn,l(y.$t("setting.temperature")),1),o("div",kn,[h(i(Ne),{value:u.value,"onUpdate:value":w[2]||(w[2]=R=>u.value=R),max:2,min:0,step:.1},null,8,["value","step"])]),o("span",null,l(u.value),1),h(i(U),{size:"tiny",text:"",type:"primary",onClick:w[3]||(w[3]=R=>k({temperature:u.value}))},{default:p(()=>[M(l(y.$t("common.save")),1)]),_:1})]),o("div",$n,[o("span",_n,l(y.$t("setting.top_p")),1),o("div",Cn,[h(i(Ne),{value:c.value,"onUpdate:value":w[4]||(w[4]=R=>c.value=R),max:1,min:0,step:.1},null,8,["value","step"])]),o("span",null,l(c.value),1),h(i(U),{size:"tiny",text:"",type:"primary",onClick:w[5]||(w[5]=R=>k({top_p:c.value}))},{default:p(()=>[M(l(y.$t("common.save")),1)]),_:1})]),o("div",Sn,[Rn,h(i(U),{size:"small",onClick:$},{default:p(()=>[M(l(y.$t("common.reset")),1)]),_:1})])])]))}}),Tn="aibianse",Dn="2.11.1",Mn="爱变色",In="爱变色",Vn=["aibianse","爱变色"],Bn={dev:"vite",build:"run-p type-check-warn build-only",preview:"vite preview","build-only":"vite build","type-check-warn":"vue-tsc --noEmit || exit 0",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},Nn={"@traptitech/markdown-it-katex":"^3.6.0","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",html2canvas:"^1.4.1",katex:"^0.16.4","lodash-es":"^4.17.21","markdown-it":"^13.0.1","naive-ui":"^2.41.0",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},Un={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify-json/material-symbols-light":"^1.2.12","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.3.0",sass:"^1.83.4",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},An={name:Tn,version:Dn,private:!1,description:Mn,author:In,keywords:Vn,scripts:Bn,dependencies:Nn,devDependencies:Un,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},Fn={class:"p-4 space-y-4"},Pn={class:"text-xl font-bold"},Hn=o("div",{class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},[o("p",null,[M(" 此项目开源于 "),o("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," GitHub "),M(" ，免费且基于 MIT 协议，没有任何形式的付费行为！ ")]),o("p",null," 如果你觉得此项目对你有帮助，请在 GitHub 帮我点个 Star 或者给予一点赞助，谢谢！ ")],-1),jn={key:0},En={key:1},On=Q({__name:"About",setup(a){const s=C(!1),g=C();async function x(){try{s.value=!0;const{data:c}=await At();g.value=c}finally{s.value=!1}}Ut(()=>{x()});const u=!0;return(c,k)=>(j(),xe(i(jt),{show:s.value},{default:p(()=>{var $,y,w,R,E,F;return[o("div",Fn,[o("h2",Pn," Version - "+l(i(An).version),1),Hn,o("p",null,l(c.$t("setting.api"))+"："+l((($=g.value)==null?void 0:$.apiModel)??"-"),1),u?(j(),q("p",jn,l(c.$t("setting.monthlyUsage"))+"："+l(((y=g.value)==null?void 0:y.usage)??"-"),1)):ke("",!0),u?ke("",!0):(j(),q("p",En,l(c.$t("setting.reverseProxy"))+"："+l(((w=g.value)==null?void 0:w.reverseProxy)??"-"),1)),o("p",null,l(c.$t("setting.timeout"))+"："+l(((R=g.value)==null?void 0:R.timeoutMs)??"-"),1),o("p",null,l(c.$t("setting.socks"))+"："+l(((E=g.value)==null?void 0:E.socksProxy)??"-"),1),o("p",null,l(c.$t("setting.httpsProxy"))+"："+l(((F=g.value)==null?void 0:F.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Ln={class:"ml-2"},Gn={class:"min-h-[100px]"},Kn={class:"ml-2"},Xn={class:"min-h-[100px]"},Yn={class:"ml-2"},qn=Q({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(a,{emit:s}){const g=a,x=!0,u=C("General"),c=D({get(){return g.visible},set(k){s("update:visible",k)}});return(k,$)=>(j(),xe(i(Ht),{show:i(c),"onUpdate:show":$[1]||($[1]=y=>Pt(c)?c.value=y:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:p(()=>[o("div",null,[h(i(Ft),{value:u.value,"onUpdate:value":$[0]||($[0]=y=>u.value=y),type:"line",animated:""},{default:p(()=>[h(i(ye),{name:"General",tab:"General"},{tab:p(()=>[h(i(O),{class:"text-lg",icon:"ri:file-user-line"}),o("span",Ln,l(k.$t("setting.general")),1)]),default:p(()=>[o("div",Gn,[h(fn)])]),_:1}),x?(j(),xe(i(ye),{key:0,name:"Advanced",tab:"Advanced"},{tab:p(()=>[h(i(O),{class:"text-lg",icon:"ri:equalizer-line"}),o("span",Kn,l(k.$t("setting.advanced")),1)]),default:p(()=>[o("div",Xn,[h(zn)])]),_:1})):ke("",!0),h(i(ye),{name:"Config",tab:"Config"},{tab:p(()=>[h(i(O),{class:"text-lg",icon:"ri:list-settings-line"}),o("span",Yn,l(k.$t("setting.config")),1)]),default:p(()=>[h(On)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{qn as default};
