import{r as _,bc as vt,a as J,b as r,aA as N,aU as ie,f as Te,bd as ft,be as mt,d as Z,u as pt,h as Be,bf as gt,e as bt,c as C,t as yt,g as wt,b4 as Me,S as ge,o as xt,j as Ie,k as kt,l as ye,m as M,V as $t,n as _t,aM as St,q as Ct,T as Rt,b8 as re,b5 as de,C as Ve,W as zt,bg as Tt,a8 as Mt,a7 as Pe,X as j,Y as q,Z as o,a1 as i,a2 as c,_ as s,N as ce,ae as g,ak as I,ao as B,ad as It,a0 as L,bh as Vt,af as Dt,ag as Nt,a3 as Ut,av as Y,bi as Bt,bj as Ae,I as Pt,$ as we,ac as xe,bk as At,bl as Ft,bm as be,bn as Ht,al as Et}from"./index-25022d87.js";import{N as jt}from"./Spin-5bb6c7a0.js";function De(a){return window.TouchEvent&&a instanceof window.TouchEvent}function Ne(){const a=_(new Map),l=k=>m=>{a.value.set(k,m)};return vt(()=>{a.value.clear()}),[a,l]}const Ot=J([r("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[N("reverse",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),N("vertical",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),r("slider-marks",[r("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),N("vertical",`
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
 `,[ie("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),N("with-mark",`
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
 `)])]),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[r("slider-handle",`
 cursor: not-allowed;
 `)]),N("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),J("&:hover",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ie("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),N("active",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ie("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),r("slider-marks",`
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
 `,[ie("fill",`
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
 `,[J("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),J("&:focus",[r("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[J("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),r("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[N("transition-disabled",[r("slider-dot","transition: none;")]),r("slider-dot",`
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
 `,[N("active","border: var(--n-dot-border-active);")])])]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Te()]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[N("top",`
 margin-bottom: 12px;
 `),N("right",`
 margin-left: 12px;
 `),N("bottom",`
 margin-top: 12px;
 `),N("left",`
 margin-right: 12px;
 `),Te()]),ft(r("slider",[r("slider-dot","background-color: var(--n-dot-color-modal);")])),mt(r("slider",[r("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Lt=0,Gt=Object.assign(Object.assign({},Be.props),{to:ye.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ue=Z({name:"Slider",props:Gt,setup(a){const{mergedClsPrefixRef:l,namespaceRef:k,inlineThemeDisabled:m}=pt(a),h=Be("Slider","-slider",Ot,gt,a,l),f=_(null),[b,$]=Ne(),[w,y]=Ne(),R=_(new Set),O=bt(a),{mergedDisabledRef:A}=O,F=C(()=>{const{step:e}=a;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let n=0;return t.includes(".")&&(n=t.length-t.indexOf(".")-1),n}),X=_(a.defaultValue),ue=yt(a,"value"),W=wt(ue,X),V=C(()=>{const{value:e}=W;return(a.range?e:[e]).map(Se)}),Q=C(()=>V.value.length>2),v=C(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),x=C(()=>{const{marks:e}=a;return e?Object.keys(e).map(parseFloat):null}),u=_(-1),H=_(-1),U=_(-1),D=_(!1),ee=_(!1),he=C(()=>{const{vertical:e,reverse:t}=a;return e?t?"top":"bottom":t?"right":"left"}),Fe=C(()=>{if(Q.value)return;const e=V.value,t=te(a.range?Math.min(...e):a.min),n=te(a.range?Math.max(...e):e[0]),{value:d}=he;return a.vertical?{[d]:`${t}%`,height:`${n-t}%`}:{[d]:`${t}%`,width:`${n-t}%`}}),He=C(()=>{const e=[],{marks:t}=a;if(t){const n=V.value.slice();n.sort((z,T)=>z-T);const{value:d}=he,{value:p}=Q,{range:S}=a,P=p?()=>!1:z=>S?z>=n[0]&&z<=n[n.length-1]:z<=n[0];for(const z of Object.keys(t)){const T=Number(z);e.push({active:P(T),label:t[z],style:{[d]:`${te(T)}%`}})}}return e});function Ee(e,t){const n=te(e),{value:d}=he;return{[d]:`${n}%`,zIndex:t===u.value?1:0}}function ke(e){return a.showTooltip||U.value===e||u.value===e&&D.value}function je(e){return D.value?!(u.value===e&&H.value===e):!0}function Oe(e){var t;~e&&(u.value=e,(t=b.value.get(e))===null||t===void 0||t.focus())}function Le(){w.value.forEach((e,t)=>{ke(t)&&e.syncPosition()})}function $e(e){const{"onUpdate:value":t,onUpdateValue:n}=a,{nTriggerFormInput:d,nTriggerFormChange:p}=O;n&&Ve(n,e),t&&Ve(t,e),X.value=e,d(),p()}function _e(e){const{range:t}=a;if(t){if(Array.isArray(e)){const{value:n}=V;e.join()!==n.join()&&$e(e)}}else Array.isArray(e)||V.value[0]!==e&&$e(e)}function ve(e,t){if(a.range){const n=V.value.slice();n.splice(t,1,e),_e(n)}else _e(e)}function fe(e,t,n){const d=n!==void 0;n||(n=e-t>0?1:-1);const p=x.value||[],{step:S}=a;if(S==="mark"){const T=ne(e,p.concat(t),d?n:void 0);return T?T.value:t}if(S<=0)return t;const{value:P}=F;let z;if(d){const T=Number((t/S).toFixed(P)),E=Math.floor(T),me=T>E?E:E-1,pe=T<E?E:E+1;z=ne(t,[Number((me*S).toFixed(P)),Number((pe*S).toFixed(P)),...p],n)}else{const T=Ke(e);z=ne(e,[...p,T])}return z?Se(z.value):t}function Se(e){return Math.min(a.max,Math.max(a.min,e))}function te(e){const{max:t,min:n}=a;return(e-n)/(t-n)*100}function Ge(e){const{max:t,min:n}=a;return n+(t-n)*e}function Ke(e){const{step:t,min:n}=a;if(Number(t)<=0||t==="mark")return e;const d=Math.round((e-n)/t)*t+n;return Number(d.toFixed(F.value))}function ne(e,t=x.value,n){if(!(t!=null&&t.length))return null;let d=null,p=-1;for(;++p<t.length;){const S=t[p]-e,P=Math.abs(S);(n===void 0||S*n>0)&&(d===null||P<d.distance)&&(d={index:p,distance:P,value:t[p]})}return d}function Ce(e){const t=f.value;if(!t)return;const n=De(e)?e.touches[0]:e,d=t.getBoundingClientRect();let p;return a.vertical?p=(d.bottom-n.clientY)/d.height:p=(n.clientX-d.left)/d.width,a.reverse&&(p=1-p),Ge(p)}function Ye(e){if(A.value||!a.keyboard)return;const{vertical:t,reverse:n}=a;switch(e.key){case"ArrowUp":e.preventDefault(),ae(t&&n?-1:1);break;case"ArrowRight":e.preventDefault(),ae(!t&&n?-1:1);break;case"ArrowDown":e.preventDefault(),ae(t&&n?1:-1);break;case"ArrowLeft":e.preventDefault(),ae(!t&&n?1:-1);break}}function ae(e){const t=u.value;if(t===-1)return;const{step:n}=a,d=V.value[t],p=Number(n)<=0||n==="mark"?d:d+n*e;ve(fe(p,d,e>0?1:-1),t)}function Xe(e){var t,n;if(A.value||!De(e)&&e.button!==Lt)return;const d=Ce(e);if(d===void 0)return;const p=V.value.slice(),S=a.range?(n=(t=ne(d,p))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1:0;S!==-1&&(e.preventDefault(),Oe(S),We(),ve(fe(d,V.value[S]),S))}function We(){D.value||(D.value=!0,re("touchend",document,le),re("mouseup",document,le),re("touchmove",document,se),re("mousemove",document,se))}function oe(){D.value&&(D.value=!1,de("touchend",document,le),de("mouseup",document,le),de("touchmove",document,se),de("mousemove",document,se))}function se(e){const{value:t}=u;if(!D.value||t===-1){oe();return}const n=Ce(e);ve(fe(n,V.value[t]),t)}function le(){oe()}function Je(e){u.value=e,A.value||(U.value=e)}function qe(e){u.value===e&&(u.value=-1,oe()),U.value===e&&(U.value=-1)}function Ze(e){U.value=e}function Qe(e){U.value===e&&(U.value=-1)}Me(u,(e,t)=>void ge(()=>H.value=t)),Me(W,()=>{if(a.marks){if(ee.value)return;ee.value=!0,ge(()=>{ee.value=!1})}ge(Le)}),xt(()=>{oe()});const Re=C(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:d,fillColorHover:p,handleColor:S,opacityDisabled:P,dotColor:z,dotColorModal:T,handleBoxShadow:E,handleBoxShadowHover:me,handleBoxShadowActive:pe,handleBoxShadowFocus:et,dotBorder:tt,dotBoxShadow:nt,railHeight:at,railWidthVertical:ot,handleSize:st,dotHeight:lt,dotWidth:it,dotBorderRadius:rt,fontSize:dt,dotBorderActive:ct,dotColorPopover:ut},common:{cubicBezierEaseInOut:ht}}=h.value;return{"--n-bezier":ht,"--n-dot-border":tt,"--n-dot-border-active":ct,"--n-dot-border-radius":rt,"--n-dot-box-shadow":nt,"--n-dot-color":z,"--n-dot-color-modal":T,"--n-dot-color-popover":ut,"--n-dot-height":lt,"--n-dot-width":it,"--n-fill-color":d,"--n-fill-color-hover":p,"--n-font-size":dt,"--n-handle-box-shadow":E,"--n-handle-box-shadow-active":pe,"--n-handle-box-shadow-focus":et,"--n-handle-box-shadow-hover":me,"--n-handle-color":S,"--n-handle-size":st,"--n-opacity-disabled":P,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":at,"--n-rail-width-vertical":ot,"--n-mark-font-size":e}}),G=m?Ie("slider",void 0,Re,a):void 0,ze=C(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:d,indicatorBorderRadius:p}}=h.value;return{"--n-font-size":e,"--n-indicator-border-radius":p,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":d}}),K=m?Ie("slider-indicator",void 0,ze,a):void 0;return{mergedClsPrefix:l,namespace:k,uncontrolledValue:X,mergedValue:W,mergedDisabled:A,mergedPlacement:v,isMounted:kt(),adjustedTo:ye(a),dotTransitionDisabled:ee,markInfos:He,isShowTooltip:ke,shouldKeepTooltipTransition:je,handleRailRef:f,setHandleRefs:$,setFollowerRefs:y,fillStyle:Fe,getHandleStyle:Ee,activeIndex:u,arrifiedValues:V,followerEnabledIndexSet:R,handleRailMouseDown:Xe,handleHandleFocus:Je,handleHandleBlur:qe,handleHandleMouseEnter:Ze,handleHandleMouseLeave:Qe,handleRailKeyDown:Ye,indicatorCssVars:m?void 0:ze,indicatorThemeClass:K==null?void 0:K.themeClass,indicatorOnRender:K==null?void 0:K.onRender,cssVars:m?void 0:Re,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){var a;const{mergedClsPrefix:l,themeClass:k,formatTooltip:m}=this;return(a=this.onRender)===null||a===void 0||a.call(this),M("div",{class:[`${l}-slider`,k,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},M("div",{class:`${l}-slider-rail`},M("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?M("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(h=>M("div",{key:h.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:h.active}],style:h.style}))):null,M("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((h,f)=>{const b=this.isShowTooltip(f);return M($t,null,{default:()=>[M(_t,null,{default:()=>M("div",{ref:this.setHandleRefs(f),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(h,f),onFocus:()=>{this.handleHandleFocus(f)},onBlur:()=>{this.handleHandleBlur(f)},onMouseenter:()=>{this.handleHandleMouseEnter(f)},onMouseleave:()=>{this.handleHandleMouseLeave(f)}},St(this.$slots.thumb,()=>[M("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&M(Ct,{ref:this.setFollowerRefs(f),show:b,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(f),teleportDisabled:this.adjustedTo===ye.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>M(Rt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(f),onEnter:()=>{this.followerEnabledIndexSet.add(f)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(f)}},{default:()=>{var $;return b?(($=this.indicatorOnRender)===null||$===void 0||$.call(this),M("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof m=="function"?m(h):h)):null}})})]})})),this.marks?M("div",{class:`${l}-slider-marks`},this.markInfos.map(h=>M("div",{key:h.label,class:`${l}-slider-mark`,style:h.style},h.label))):null))}});function Kt(){const a=new Date,l=a.getDate(),k=a.getMonth()+1;return`${a.getFullYear()}-${k}-${l}`}const Yt={class:"p-4 space-y-5 min-h-[200px]"},Xt={class:"space-y-6"},Wt={class:"flex items-center space-x-4"},Jt={class:"flex-shrink-0 w-[100px]"},qt={class:"flex-1"},Zt={class:"flex items-center space-x-4"},Qt={class:"flex-shrink-0 w-[100px]"},en={class:"w-[200px]"},tn={class:"flex items-center space-x-4"},nn={class:"flex-shrink-0 w-[100px]"},an={class:"flex-1"},on={class:"flex-shrink-0 w-[100px]"},sn={class:"flex flex-wrap items-center gap-4"},ln={class:"flex items-center space-x-4"},rn={class:"flex-shrink-0 w-[100px]"},dn={class:"flex flex-wrap items-center gap-4"},cn={class:"flex items-center space-x-4"},un={class:"flex-shrink-0 w-[100px]"},hn={class:"flex flex-wrap items-center gap-4"},vn={class:"flex items-center space-x-4"},fn={class:"flex-shrink-0 w-[100px]"},mn=Z({__name:"General",setup(a){const l=zt(),k=Tt(),{isMobile:m}=Mt(),h=Pe(),f=C(()=>l.theme),b=C(()=>k.userInfo),$=_(b.value.avatar??""),w=_(b.value.name??""),y=_(b.value.description??""),R=C({get(){return l.language},set(v){l.setLanguage(v)}}),O=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],A=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"}];function F(v){k.updateUserInfo(v),h.success(Y("common.success"))}function X(){k.resetUserInfo(),h.success(Y("common.success")),window.location.reload()}function ue(){const v=Kt(),x=localStorage.getItem("chatStorage")||"{}",u=JSON.stringify(JSON.parse(x),null,2),H=new Blob([u],{type:"application/json"}),U=URL.createObjectURL(H),D=document.createElement("a");D.href=U,D.download=`chat-store_${v}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}function W(v){const x=v.target;if(!x||!x.files)return;const u=x.files[0];if(!u)return;const H=new FileReader;H.onload=()=>{try{const U=JSON.parse(H.result);localStorage.setItem("chatStorage",JSON.stringify(U)),h.success(Y("common.success")),location.reload()}catch{h.error(Y("common.invalidFileFormat"))}},H.readAsText(u)}function V(){localStorage.removeItem("chatStorage"),location.reload()}function Q(){const v=document.getElementById("fileInput");v&&v.click()}return(v,x)=>(j(),q("div",Yt,[o("div",Xt,[o("div",Wt,[o("span",Jt,i(v.$t("setting.avatarLink")),1),o("div",qt,[c(s(ce),{value:$.value,"onUpdate:value":x[0]||(x[0]=u=>$.value=u),placeholder:""},null,8,["value"])]),c(s(B),{size:"tiny",text:"",type:"primary",onClick:x[1]||(x[1]=u=>F({avatar:$.value}))},{default:g(()=>[I(i(v.$t("common.save")),1)]),_:1})]),o("div",Zt,[o("span",Qt,i(v.$t("setting.name")),1),o("div",en,[c(s(ce),{value:w.value,"onUpdate:value":x[2]||(x[2]=u=>w.value=u),placeholder:""},null,8,["value"])]),c(s(B),{size:"tiny",text:"",type:"primary",onClick:x[3]||(x[3]=u=>F({name:w.value}))},{default:g(()=>[I(i(v.$t("common.save")),1)]),_:1})]),o("div",tn,[o("span",nn,i(v.$t("setting.description")),1),o("div",an,[c(s(ce),{value:y.value,"onUpdate:value":x[4]||(x[4]=u=>y.value=u),placeholder:""},null,8,["value"])]),c(s(B),{size:"tiny",text:"",type:"primary",onClick:x[5]||(x[5]=u=>F({description:y.value}))},{default:g(()=>[I(i(v.$t("common.save")),1)]),_:1})]),o("div",{class:It(["flex items-center space-x-4",s(m)&&"items-start"])},[o("span",on,i(v.$t("setting.chatHistory")),1),o("div",sn,[c(s(B),{size:"small",onClick:ue},{icon:g(()=>[c(s(L),{icon:"ri:download-2-fill"})]),default:g(()=>[I(" "+i(v.$t("common.export")),1)]),_:1}),o("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:W},null,32),c(s(B),{size:"small",onClick:Q},{icon:g(()=>[c(s(L),{icon:"ri:upload-2-fill"})]),default:g(()=>[I(" "+i(v.$t("common.import")),1)]),_:1}),c(s(Vt),{placement:"bottom",onPositiveClick:V},{trigger:g(()=>[c(s(B),{size:"small"},{icon:g(()=>[c(s(L),{icon:"ri:close-circle-line"})]),default:g(()=>[I(" "+i(v.$t("common.clear")),1)]),_:1})]),default:g(()=>[I(" "+i(v.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),o("div",ln,[o("span",rn,i(v.$t("setting.theme")),1),o("div",dn,[(j(),q(Dt,null,Nt(O,u=>c(s(B),{key:u.key,size:"small",type:u.key===s(f)?"primary":void 0,onClick:H=>s(l).setTheme(u.key)},{icon:g(()=>[c(s(L),{icon:u.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),o("div",cn,[o("span",un,i(v.$t("setting.language")),1),o("div",hn,[c(s(Ut),{style:{width:"140px"},value:s(R),options:A,onUpdateValue:x[6]||(x[6]=u=>s(l).setLanguage(u))},null,8,["value"])])]),o("div",vn,[o("span",fn,i(v.$t("setting.resetUserInfo")),1),c(s(B),{size:"small",onClick:X},{default:g(()=>[I(i(v.$t("common.reset")),1)]),_:1})])])]))}}),pn={class:"p-4 space-y-5 min-h-[200px]"},gn={class:"space-y-6"},bn={class:"flex items-center space-x-4"},yn={class:"flex-shrink-0 w-[120px]"},wn={class:"flex-1"},xn={class:"flex items-center space-x-4"},kn={class:"flex-shrink-0 w-[120px]"},$n={class:"flex-1"},_n={class:"flex items-center space-x-4"},Sn={class:"flex-shrink-0 w-[120px]"},Cn={class:"flex-1"},Rn={class:"flex items-center space-x-4"},zn=o("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),Tn=Z({__name:"Advanced",setup(a){const l=Bt(),k=Pe(),m=_(l.systemMessage??""),h=_(l.temperature??.5),f=_(l.top_p??1);function b(w){l.updateSetting(w),k.success(Y("common.success"))}function $(){l.resetSetting(),k.success(Y("common.success")),window.location.reload()}return(w,y)=>(j(),q("div",pn,[o("div",gn,[o("div",bn,[o("span",yn,i(w.$t("setting.role")),1),o("div",wn,[c(s(ce),{value:m.value,"onUpdate:value":y[0]||(y[0]=R=>m.value=R),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),c(s(B),{size:"tiny",text:"",type:"primary",onClick:y[1]||(y[1]=R=>b({systemMessage:m.value}))},{default:g(()=>[I(i(w.$t("common.save")),1)]),_:1})]),o("div",xn,[o("span",kn,i(w.$t("setting.temperature")),1),o("div",$n,[c(s(Ue),{value:h.value,"onUpdate:value":y[2]||(y[2]=R=>h.value=R),max:2,min:0,step:.1},null,8,["value","step"])]),o("span",null,i(h.value),1),c(s(B),{size:"tiny",text:"",type:"primary",onClick:y[3]||(y[3]=R=>b({temperature:h.value}))},{default:g(()=>[I(i(w.$t("common.save")),1)]),_:1})]),o("div",_n,[o("span",Sn,i(w.$t("setting.top_p")),1),o("div",Cn,[c(s(Ue),{value:f.value,"onUpdate:value":y[4]||(y[4]=R=>f.value=R),max:1,min:0,step:.1},null,8,["value","step"])]),o("span",null,i(f.value),1),c(s(B),{size:"tiny",text:"",type:"primary",onClick:y[5]||(y[5]=R=>b({top_p:f.value}))},{default:g(()=>[I(i(w.$t("common.save")),1)]),_:1})]),o("div",Rn,[zn,c(s(B),{size:"small",onClick:$},{default:g(()=>[I(i(w.$t("common.reset")),1)]),_:1})])])]))}}),Mn="photograph-show",In="2.11.1",Vn="Photograph Show",Dn="Photograph Show",Nn=["Photograph Show","美图秀"],Un={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},Bn={"@traptitech/markdown-it-katex":"^3.6.0","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",html2canvas:"^1.4.1",katex:"^0.16.4","markdown-it":"^13.0.1","naive-ui":"^2.35.0",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},Pn={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.2.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},An={name:Mn,version:In,private:!1,description:Vn,author:Dn,keywords:Nn,scripts:Un,dependencies:Bn,devDependencies:Pn,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},Fn={class:"p-4 space-y-4"},Hn={class:"text-xl font-bold"},En=o("div",{class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},[o("p",null,[I(" 此项目开源于 "),o("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," GitHub "),I(" ，免费且基于 MIT 协议，没有任何形式的付费行为！ ")]),o("p",null," 如果你觉得此项目对你有帮助，请在 GitHub 帮我点个 Star 或者给予一点赞助，谢谢！ ")],-1),jn={key:0},On={key:1},Ln=Z({__name:"About",setup(a){const l=Ae(),k=_(!1),m=_(),h=C(()=>!!l.isChatGPTAPI);async function f(){try{k.value=!0;const{data:b}=await At();m.value=b}finally{k.value=!1}}return Pt(()=>{f()}),(b,$)=>(j(),we(s(jt),{show:k.value},{default:g(()=>{var w,y,R,O,A,F;return[o("div",Fn,[o("h2",Hn," Version - "+i(s(An).version),1),En,o("p",null,i(b.$t("setting.api"))+"："+i(((w=m.value)==null?void 0:w.apiModel)??"-"),1),s(h)?(j(),q("p",jn,i(b.$t("setting.monthlyUsage"))+"："+i(((y=m.value)==null?void 0:y.usage)??"-"),1)):xe("",!0),s(h)?xe("",!0):(j(),q("p",On,i(b.$t("setting.reverseProxy"))+"："+i(((R=m.value)==null?void 0:R.reverseProxy)??"-"),1)),o("p",null,i(b.$t("setting.timeout"))+"："+i(((O=m.value)==null?void 0:O.timeoutMs)??"-"),1),o("p",null,i(b.$t("setting.socks"))+"："+i(((A=m.value)==null?void 0:A.socksProxy)??"-"),1),o("p",null,i(b.$t("setting.httpsProxy"))+"："+i(((F=m.value)==null?void 0:F.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Gn={class:"ml-2"},Kn={class:"min-h-[100px]"},Yn={class:"ml-2"},Xn={class:"min-h-[100px]"},Wn={class:"ml-2"},Zn=Z({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(a,{emit:l}){const k=a,m=Ae(),h=C(()=>!!m.isChatGPTAPI),f=_("General"),b=C({get(){return k.visible},set($){l("update:visible",$)}});return($,w)=>(j(),we(s(Et),{show:s(b),"onUpdate:show":w[1]||(w[1]=y=>Ht(b)?b.value=y:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:g(()=>[o("div",null,[c(s(Ft),{value:f.value,"onUpdate:value":w[0]||(w[0]=y=>f.value=y),type:"line",animated:""},{default:g(()=>[c(s(be),{name:"General",tab:"General"},{tab:g(()=>[c(s(L),{class:"text-lg",icon:"ri:file-user-line"}),o("span",Gn,i($.$t("setting.general")),1)]),default:g(()=>[o("div",Kn,[c(mn)])]),_:1}),s(h)?(j(),we(s(be),{key:0,name:"Advanced",tab:"Advanced"},{tab:g(()=>[c(s(L),{class:"text-lg",icon:"ri:equalizer-line"}),o("span",Yn,i($.$t("setting.advanced")),1)]),default:g(()=>[o("div",Xn,[c(Tn)])]),_:1})):xe("",!0),c(s(be),{name:"Config",tab:"Config"},{tab:g(()=>[c(s(L),{class:"text-lg",icon:"ri:list-settings-line"}),o("span",Wn,i($.$t("setting.config")),1)]),default:g(()=>[c(Ln)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{Zn as default};
