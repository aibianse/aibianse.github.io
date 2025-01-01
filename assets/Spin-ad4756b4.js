import{a1 as m,a2 as c,b1 as x,aB as h,d as C,A as S,a6 as v,l as f,a7 as k,aL as $,m as w,aQ as T,y as o,bp as R,af as B,bq as N,x as P,aJ as V}from"./index-8204837f.js";const W=m([m("@keyframes spin-rotate",`
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
 `,[x()])]),c("spin-body",`
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
 `)])]),I={small:20,medium:18,large:16},O=Object.assign(Object.assign({},v.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),E=C({name:"Spin",props:O,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=S(e),t=v("Spin","-spin",W,N,e,r),d=f(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:a},self:u}=t.value,{opacitySpinning:y,color:b,textColor:g}=u,z=typeof s=="number"?P(s):u[V("size",s)];return{"--n-bezier":a,"--n-opacity-spinning":y,"--n-size":z,"--n-color":b,"--n-text-color":g}}),i=n?k("spin",f(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),d,e):void 0,p=$(e,["spinning","show"]),l=w(!1);return T(s=>{let a;if(p.value){const{delay:u}=e;if(u){a=window.setTimeout(()=>{l.value=!0},u),s(()=>{clearTimeout(a)});return}}l.value=p.value}),{mergedClsPrefix:r,active:l,mergedStrokeWidth:f(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:a}=e;return I[typeof a=="number"?"medium":a]}),cssVars:n?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,r;const{$slots:n,mergedClsPrefix:t,description:d}=this,i=n.icon&&this.rotate,p=(d||n.description)&&o("div",{class:`${t}-spin-description`},d||((e=n.description)===null||e===void 0?void 0:e.call(n))),l=n.icon?o("div",{class:[`${t}-spin-body`,this.themeClass]},o("div",{class:[`${t}-spin`,i&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),p):o("div",{class:[`${t}-spin-body`,this.themeClass]},o(R,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),p);return(r=this.onRender)===null||r===void 0||r.call(this),n.default?o("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`]},n),o(B,{name:"fade-in-transition"},{default:()=>this.active?l:null})):l}});export{E as N};
