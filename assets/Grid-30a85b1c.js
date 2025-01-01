import{aj as P,ap as X,s as S,l as N,aq as z,ar as F,d as T,as as U,at as x,U as E,au as Y,K as H,av as B,q as J,aw as W,M as j,ax as Z,ay as k,az as K,aA as ee,aB as te,aC as V,aD as se}from"./index-a53ea9c5.js";function ne(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,s]=r.split(":");s===void 0?t[""]=n:t[n]=s}),t}function _(e,t){var r;if(e==null)return;const n=ne(e);if(t===void 0)return n[""];if(typeof t=="string")return(r=n[t])!==null&&r!==void 0?r:n[""];if(Array.isArray(t)){for(let s=t.length-1;s>=0;--s){const i=t[s];if(i in n)return n[i]}return n[""]}else{let s,i=-1;return Object.keys(n).forEach(o=>{const l=Number(o);!Number.isNaN(l)&&t>=l&&l>=i&&(i=l,s=n[o])}),s}}function re(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===P);return!!(r&&r.value===!1)}const ie={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ae(e){return`(min-width: ${e}px)`}const C={};function oe(e=ie){if(!X)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=N({}),r=Object.keys(e),n=(s,i)=>{s.matches?t.value[i]=!0:t.value[i]=!1};return r.forEach(s=>{const i=e[s];let o,l;C[i]===void 0?(o=window.matchMedia(ae(i)),o.addEventListener?o.addEventListener("change",d=>{l.forEach(f=>{f(d,s)})}):o.addListener&&o.addListener(d=>{l.forEach(f=>{f(d,s)})}),l=new Set,C[i]={mql:o,cbs:l}):(o=C[i].mql,l=C[i].cbs),l.add(n),o.matches&&l.forEach(d=>{d(o,s)})}),z(()=>{r.forEach(s=>{const{cbs:i}=C[e[s]];i.has(n)&&i.delete(n)})}),S(()=>{const{value:s}=t;return r.filter(i=>s[i])})}const O=1,q=F("n-grid"),L=1,le={span:{type:[Number,String],default:L},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},pe=T({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:le,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:s}=Y(q),i=U();return{overflow:n,itemStyle:r,layoutShiftDisabled:s,mergedXGap:S(()=>x(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:o=L,privateShow:l=!0,privateColStart:d=void 0,privateOffset:f=0}=i.vnode.props,{value:$}=t,y=x($||0);return{display:l?"":"none",gridColumn:`${d??`span ${o}`} / span ${o}`,marginLeft:f?`calc((100% - (${o} - 1) * ${y}) / ${o} * ${f} + ${y} * ${f})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:s}=this;return E("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${s}) / ${r} * ${n} + ${s} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),fe={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Q=24,M="__ssr__",ue={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Q},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},ve=T({name:"Grid",inheritAttrs:!1,props:ue,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=H(e),n=/^\d+$/,s=N(void 0),i=oe((r==null?void 0:r.value)||fe),o=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),l=S(()=>{if(o.value)return e.responsive==="self"?s.value:i.value}),d=B(()=>{var u;return(u=Number(_(e.cols.toString(),l.value)))!==null&&u!==void 0?u:Q}),f=B(()=>_(e.xGap.toString(),l.value)),$=B(()=>_(e.yGap.toString(),l.value)),y=u=>{s.value=u.contentRect.width},c=u=>{se(y,u)},g=N(!1),R=S(()=>{if(e.responsive==="self")return c}),p=N(!1),h=N();return J(()=>{const{value:u}=h;u&&u.hasAttribute(M)&&(u.removeAttribute(M),p.value=!0)}),W(q,{layoutShiftDisabledRef:j(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:j(e,"itemStyle"),xGapRef:f,overflowRef:g}),{isSsr:!Z,contentEl:h,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:x(e.xGap),rowGap:x(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:x(f.value),rowGap:x($.value)}),isResponsive:o,responsiveQuery:l,responsiveCols:d,handleResize:R,overflow:g}},render(){if(this.layoutShiftDisabled)return E("div",k({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,n,s,i,o,l;this.overflow=!1;const d=ee(te(this)),f=[],{collapsed:$,collapsedRows:y,responsiveCols:c,responsiveQuery:g}=this;d.forEach(a=>{var G,m,v,b,D;if(((G=a==null?void 0:a.type)===null||G===void 0?void 0:G.__GRID_ITEM__)!==!0)return;if(re(a)){const w=V(a);w.props?w.props.privateShow=!1:w.props={privateShow:!1},f.push({child:w,rawChildSpan:0});return}a.dirs=((m=a.dirs)===null||m===void 0?void 0:m.filter(({dir:w})=>w!==P))||null,((v=a.dirs)===null||v===void 0?void 0:v.length)===0&&(a.dirs=null);const A=V(a),I=Number((D=_((b=A.props)===null||b===void 0?void 0:b.span,g))!==null&&D!==void 0?D:O);I!==0&&f.push({child:A,rawChildSpan:I})});let R=0;const p=(t=f[f.length-1])===null||t===void 0?void 0:t.child;if(p!=null&&p.props){const a=(r=p.props)===null||r===void 0?void 0:r.suffix;a!==void 0&&a!==!1&&(R=Number((s=_((n=p.props)===null||n===void 0?void 0:n.span,g))!==null&&s!==void 0?s:O),p.props.privateSpan=R,p.props.privateColStart=c+1-R,p.props.privateShow=(i=p.props.privateShow)!==null&&i!==void 0?i:!0)}let h=0,u=!1;for(const{child:a,rawChildSpan:G}of f){if(u&&(this.overflow=!0),!u){const m=Number((l=_((o=a.props)===null||o===void 0?void 0:o.offset,g))!==null&&l!==void 0?l:0),v=Math.min(G+m,c);if(a.props?(a.props.privateSpan=v,a.props.privateOffset=m):a.props={privateSpan:v,privateOffset:m},$){const b=h%c;v+b>c&&(h+=c-b),v+h+R>y*c?u=!0:h+=v}}u&&(a.props?a.props.privateShow!==!0&&(a.props.privateShow=!1):a.props={privateShow:!1})}return E("div",k({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[M]:this.isSsr||void 0},this.$attrs),f.map(({child:a})=>a))};return this.isResponsive&&this.responsive==="self"?E(K,{onResize:this.handleResize},{default:e}):e()}});export{ve as N,pe as a};
