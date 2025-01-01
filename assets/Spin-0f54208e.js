import{G as m,H as c,b7 as C,aH as h,d as x,K as S,P as v,s as f,Q as k,aR as $,l as w,aW as R,U as o,bv as T,$ as N,bw as P,at as B,aP as W}from"./index-585dae92.js";const V=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[C()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[h("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[h("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),H={small:20,medium:18,large:16},I=Object.assign(Object.assign({},v.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),j=x({name:"Spin",props:I,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=S(e),t=v("Spin","-spin",V,P,e,r),d=f(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:a},self:u}=t.value,{opacitySpinning:y,color:b,textColor:g}=u,z=typeof s=="number"?B(s):u[W("size",s)];return{"--n-bezier":a,"--n-opacity-spinning":y,"--n-size":z,"--n-color":b,"--n-text-color":g}}),i=n?k("spin",f(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),d,e):void 0,p=$(e,["spinning","show"]),l=w(!1);return R(s=>{let a;if(p.value){const{delay:u}=e;if(u){a=window.setTimeout(()=>{l.value=!0},u),s(()=>{clearTimeout(a)});return}}l.value=p.value}),{mergedClsPrefix:r,active:l,mergedStrokeWidth:f(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:a}=e;return H[typeof a=="number"?"medium":a]}),cssVars:n?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,r;const{$slots:n,mergedClsPrefix:t,description:d}=this,i=n.icon&&this.rotate,p=(d||n.description)&&o("div",{class:`${t}-spin-description`},d||((e=n.description)===null||e===void 0?void 0:e.call(n))),l=n.icon?o("div",{class:[`${t}-spin-body`,this.themeClass]},o("div",{class:[`${t}-spin`,i&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),p):o("div",{class:[`${t}-spin-body`,this.themeClass]},o(T,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),p);return(r=this.onRender)===null||r===void 0||r.call(this),n.default?o("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`]},n),o(N,{name:"fade-in-transition"},{default:()=>this.active?l:null})):l}});export{j as N};
