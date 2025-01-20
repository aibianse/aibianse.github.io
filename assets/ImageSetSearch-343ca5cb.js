import{H as pe,J as le,K as ge,d as de,L as we,M as be,m as u,O as ye,P as _e,Q as fe,v as T,R as Ce,S as Te,U as oe,V as C,W as Se,X as xe,Y as Be,Z as me,$ as Ie,a0 as ke,a1 as Re,a2 as Fe,a3 as Ve,a4 as Oe,a5 as Pe,a6 as Ae,a7 as Me,a8 as R,a9 as j,o as ze,aa as Ee,s as $e,q as Ue,u as Ne,w as De,ab as je,c as N,a as r,b as Le,e as Ke,f as p,n as se,F as re,r as ie,j as m,x as h,ac as He,i as F,A as D,B as qe,t as Je,ad as Qe,C as V,_ as ue,ae as We,h as Xe,af as ce,k as Ye}from"./index-4b1adf9f.js";import{_ as Ze}from"./index.vue_vue_type_script_setup_true_lang-34524d8b.js";function Ge(n){return n.map(he)}function he(n){var f,i;return typeof n=="string"?{label:n,value:n}:n.type==="group"?{type:"group",label:(f=n.label)!==null&&f!==void 0?f:n.name,value:(i=n.value)!==null&&i!==void 0?i:n.name,key:n.key||n.name,children:n.children.map(d=>he(d))}:n}const et=pe([le("auto-complete",`
 z-index: auto;
 position: relative;
 display: inline-flex;
 width: 100%;
 `),le("auto-complete-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ge({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),tt=Object.assign(Object.assign({},fe.props),{to:oe.propTo,menuProps:Object,bordered:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},defaultValue:{type:String,default:null},loading:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},placeholder:String,placement:{type:String,default:"bottom-start"},value:String,blurAfterSelect:Boolean,clearAfterSelect:Boolean,getShow:Function,inputProps:Object,renderOption:Function,renderLabel:Function,size:String,options:{type:Array,default:()=>[]},zIndex:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onSelect:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array],onInput:[Function,Array]}),at=de({name:"AutoComplete",props:tt,setup(n){const{mergedBorderedRef:f,namespaceRef:i,mergedClsPrefixRef:s,inlineThemeDisabled:d}=we(n),w=be(n),{mergedSizeRef:S,mergedDisabledRef:x,mergedStatusRef:L}=w,O=u(null),b=u(null),P=u(n.defaultValue),K=ye(n,"value"),A=_e(K,P),y=u(!1),B=u(!1),M=fe("AutoComplete","-auto-complete",et,Oe,n,s),z=T(()=>Ge(n.options)),_=T(()=>{const{getShow:t}=n;return t?t(A.value||""):!!A.value}),X=T(()=>_.value&&y.value&&!!z.value.length),Y=T(()=>Pe(z.value,Me("value","children")));function I(t){const{"onUpdate:value":l,onUpdateValue:c,onInput:g}=n,{nTriggerFormInput:W,nTriggerFormChange:ve}=w;c&&R(c,t),l&&R(l,t),g&&R(g,t),P.value=t,W(),ve()}function Z(t){const{onSelect:l}=n,{nTriggerFormInput:c,nTriggerFormChange:g}=w;l&&R(l,t),c(),g()}function G(t){const{onBlur:l}=n,{nTriggerFormBlur:c}=w;l&&R(l,t),c()}function ee(t){const{onFocus:l}=n,{nTriggerFormFocus:c}=w;l&&R(l,t),c()}function te(){B.value=!0}function E(){window.setTimeout(()=>{B.value=!1},0)}function v(t){var l,c,g;switch(t.key){case"Enter":if(!B.value){const W=(l=b.value)===null||l===void 0?void 0:l.getPendingTmNode();W&&(H(W.rawNode),t.preventDefault())}break;case"ArrowDown":(c=b.value)===null||c===void 0||c.next();break;case"ArrowUp":(g=b.value)===null||g===void 0||g.prev();break}}function H(t){(t==null?void 0:t.value)!==void 0&&(Z(t.value),n.clearAfterSelect?I(null):t.label!==void 0&&I(t.label),y.value=!1,n.blurAfterSelect&&k())}function ae(){I(null)}function q(t){y.value=!0,ee(t)}function $(t){y.value=!1,G(t)}function ne(t){y.value=!0,I(t)}function J(t){H(t.rawNode)}function U(t){var l;!((l=O.value)===null||l===void 0)&&l.contains(Ae(t))||(y.value=!1)}function k(){var t,l;!((t=O.value)===null||t===void 0)&&t.contains(document.activeElement)&&((l=document.activeElement)===null||l===void 0||l.blur())}const Q=T(()=>{const{common:{cubicBezierEaseInOut:t},self:{menuBoxShadow:l}}=M.value;return{"--n-menu-box-shadow":l,"--n-bezier":t}}),e=d?Ce("auto-complete",void 0,Q,n):void 0,o=u(null),a={focus:()=>{var t;(t=o.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=o.value)===null||t===void 0||t.blur()}};return{focus:a.focus,blur:a.blur,inputInstRef:o,uncontrolledValue:P,mergedValue:A,isMounted:Te(),adjustedTo:oe(n),menuInstRef:b,triggerElRef:O,treeMate:Y,mergedSize:S,mergedDisabled:x,active:X,mergedStatus:L,handleClear:ae,handleFocus:q,handleBlur:$,handleInput:ne,handleToggle:J,handleClickOutsideMenu:U,handleCompositionStart:te,handleCompositionEnd:E,handleKeyDown:v,mergedTheme:M,cssVars:d?void 0:Q,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender,mergedBordered:f,namespace:i,mergedClsPrefix:s}},render(){const{mergedClsPrefix:n}=this;return C("div",{class:`${n}-auto-complete`,ref:"triggerElRef",onKeydown:this.handleKeyDown,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd},C(Se,null,{default:()=>[C(xe,null,{default:()=>{if(this.$slots.default)return Be(this.$slots,"default",{handleInput:this.handleInput,handleFocus:this.handleFocus,handleBlur:this.handleBlur,value:this.mergedValue});const{mergedTheme:i}=this;return C(me,{ref:"inputInstRef",status:this.mergedStatus,theme:i.peers.Input,themeOverrides:i.peerOverrides.Input,bordered:this.mergedBordered,value:this.mergedValue,placeholder:this.placeholder,size:this.mergedSize,disabled:this.mergedDisabled,clearable:this.clearable,loading:this.loading,inputProps:this.inputProps,onClear:this.handleClear,onFocus:this.handleFocus,onUpdateValue:this.handleInput,onBlur:this.handleBlur},{suffix:()=>{var s,d;return(d=(s=this.$slots).suffix)===null||d===void 0?void 0:d.call(s)},prefix:()=>{var s,d;return(d=(s=this.$slots).prefix)===null||d===void 0?void 0:d.call(s)}})}}),C(Ie,{show:this.active,to:this.adjustedTo,containerClass:this.namespace,zIndex:this.zIndex,teleportDisabled:this.adjustedTo===oe.tdkey,placement:this.placement,width:"target"},{default:()=>C(ke,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>{var f;if((f=this.onRender)===null||f===void 0||f.call(this),!this.active)return null;const{menuProps:i}=this;return Re(C(Ve,Object.assign({},i,{clsPrefix:n,ref:"menuInstRef",theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,"auto-pending":!0,class:[`${n}-auto-complete-menu`,this.themeClass,i==null?void 0:i.class],style:[i==null?void 0:i.style,this.cssVars],treeMate:this.treeMate,multiple:!1,renderLabel:this.renderLabel,renderOption:this.renderOption,size:"medium",onToggle:this.handleToggle})),[[Fe,this.handleClickOutsideMenu,void 0,{capture:!0}]])}})})]}))}});function nt(){const n=u(null);return{scrollRef:n,scrollToBottom:async()=>{await j(),n.value&&(n.value.scrollTop=n.value.scrollHeight)},scrollToTop:async()=>{await j(),n.value&&(n.value.scrollTop=0)},scrollToBottomIfAtBottom:async()=>{await j(),n.value&&n.value.scrollHeight-n.value.scrollTop-n.value.clientHeight<=100&&(n.value.scrollTop=n.value.scrollHeight)}}}const ot={class:"flex flex-col w-full h-full"},lt={class:"flex-1 overflow-hidden"},st=["onClick"],rt={style:{"text-align":"center"}},it={class:"w-full max-w-screen-xl m-auto"},ut={class:"flex items-center justify-between space-x-2"},ct={class:"button-spacing"},dt={class:"dark:text-black"},ft=de({__name:"ImageSetSearch",setup(n){const f=Xe();ze(async()=>{try{if(!await M(10,1))throw new Error("加载图片集合失败");await ae(),!v.value&&$.value&&$.value.focus()}catch(e){console.error("Initialization error:",e),E.error(e instanceof Error?e.message:"初始化失败")}});const i=u([]),s=u(""),d=u([]),w=u(!1);u(1),u(""),u(!1);const S=u([]);async function x(){await P(s.value),await L()}async function L(){S.value[S.value.length-1].scrollIntoView({behavior:"smooth"})}const O=e=>{e&&S.value.push(e)};async function b(e,o){try{return(await He(e,o)).data}catch(a){return E.error(a instanceof Error?a.message:"搜索失败"),null}}async function P(e){if(!(e!=null&&e.trim()))return;s.value="";const o=await b(e,1);o&&i.value.push({search_keyword:e,image_data:o.rows,totalPages:Math.ceil(o.total/10),currentPage:1})}async function K(e,o){const t=await(e.search_keyword==="   目录   "?()=>z(10,o):()=>b(e.search_keyword,o))();t&&(e.image_data=t.rows,e.currentPage=o)}const A=T(()=>q.value||!s.value||s.value.trim()==="");function y(e){v.value?e.key==="Enter"&&e.ctrlKey&&(e.preventDefault(),x()):e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),x())}const B=T(()=>v.value?ce("chat.placeholderMobile"):ce("chat.placeholder"));async function M(e,o){try{const a=u("");if(e===10)a.value="   目录   ";else if(e===20)a.value="最热";else if(e===30)a.value="最新";else if(e===40)a.value="巧遇";else throw new Error("类型错误！");const t=await z(e,o);if(!t)throw new Error("获取数据失败");return i.value.push({search_keyword:a.value,image_data:t.rows,totalPages:Math.ceil(t.total/10),currentPage:1}),await j(),await L(),!0}catch(a){return console.error("clickImageCollectionByType error:",a),E.error(a instanceof Error?a.message:"操作失败"),!1}}async function z(e,o){try{const a=await Ee(e,o);if(!(a!=null&&a.data))throw new Error("获取数据失败");return a.data}catch(a){throw console.error("fetchImageCollectionByType error:",a),a}}const _=u([]),X=e=>C("div",{style:"padding: 4px 0"},e.label),Y=async e=>{if(!(e!=null&&e.trim())){_.value=[];return}try{const o=await b(e.trim(),1);if(!o){_.value=[];return}_.value=o.rows.filter(a=>a.name.toLowerCase().includes(e.toLowerCase())).slice(0,10).map(a=>({label:a.name,value:a.name}))}catch(o){console.error("Failed to fetch search suggestions:",o),_.value=[]}},I=$e(async e=>{await Y(e)},300),Z=e=>{s.value=e,I(e)},G=e=>{s.value=e,x()},ee=e=>{v.value&&e.target&&window.setTimeout(()=>{e.target.scrollIntoView({behavior:"smooth",block:"center"})},300)},te=new AbortController,E=Ue(),{isMobile:v}=Ne(),{scrollRef:H,scrollToBottom:ae}=nt(),q=u(!1),$=u(null),ne=T(()=>{let e=["p-4"];return v.value&&(e=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),e});De(()=>{q.value&&te.abort(),S.value=[],d.value=[]});const J=u(null);je(()=>w.value,async e=>{e&&(await j(),J.value&&(J.value.scrollTop=0))});const U=u(!1);function k(e,o){M(e,o),U.value=!1}const Q=e=>{v.value&&e.target&&window.setTimeout(()=>{e.target.scrollIntoView({behavior:"smooth",block:"center"})},300)};return(e,o)=>(F(),N("div",ot,[r(v)?(F(),Le(Ze,{key:0})):Ke("",!0),p("main",lt,[p("div",{id:"scrollRef",ref_key:"scrollRef",ref:H,class:"h-full overflow-hidden overflow-y-auto"},[p("div",{id:"image-wrapper image-scroll-container",class:se(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[r(v)?"p-2":"p-4"]])},[(F(!0),N(re,null,ie(i.value,(a,t)=>(F(),N("div",{key:a.search_keyword+t,ref_for:!0,ref:O,class:"image_card"},[m(r(Qe),{title:`搜索关键字：${a.search_keyword}`,segmented:{content:!0,footer:"soft"}},{"header-extra":h(()=>[]),footer:h(()=>[D(" 广告位招租 ")]),action:h(()=>[p("div",rt,[m(r(qe),{page:a.currentPage,"onUpdate:page":[l=>a.currentPage=l,l=>K(a,a.currentPage)],"page-count":a.totalPages,size:"large",simple:"","onUpdate:pageSize":l=>K(a,a.currentPage)},null,8,["page","onUpdate:page","page-count","onUpdate:pageSize"])])]),default:h(()=>[p("ul",null,[(F(!0),N(re,null,ie(a.image_data,(l,c)=>(F(),N("li",{key:c,class:"image_name",onClick:g=>r(f).push(`/image/image-set-detail/${l.id}`)},Je(`${c+1}、${l.name}`),9,st))),128))])]),_:2},1032,["title"])]))),128))],2)],512)]),p("footer",{class:se(r(ne))},[p("div",it,[p("div",ut,[m(r(We),{show:U.value,"onUpdate:show":o[4]||(o[4]=a=>U.value=a),overlap:!1,placement:"top",trigger:"click"},{trigger:h(()=>[m(r(V),null,{default:h(()=>[m(r(ue),{icon:"ep:menu"})]),_:1})]),default:h(()=>[p("div",ct,[m(r(V),{onClick:o[0]||(o[0]=a=>k(10,1))},{default:h(()=>[D(" 目录 ")]),_:1}),m(r(V),{onClick:o[1]||(o[1]=a=>k(20,1))},{default:h(()=>[D(" 最热 ")]),_:1}),m(r(V),{onClick:o[2]||(o[2]=a=>k(30,1))},{default:h(()=>[D(" 最新 ")]),_:1}),m(r(V),{onClick:o[3]||(o[3]=a=>k(40,1))},{default:h(()=>[D(" 巧遇 ")]),_:1})])]),_:1},8,["show"]),m(r(at),{value:s.value,"onUpdate:value":[o[7]||(o[7]=a=>s.value=a),Z],options:_.value,"render-label":X,"input-props":{placeholder:r(B),type:"textarea",autosize:{minRows:1,maxRows:r(v)?4:8}},style:{width:"70%"},onSelect:G,onFocus:Q},{default:h(({handleInput:a,handleBlur:t,handleFocus:l})=>[m(r(me),{ref_key:"inputRef",ref:$,value:s.value,"onUpdate:value":[o[5]||(o[5]=c=>s.value=c),a],type:"textarea",clearable:"",placeholder:r(B),autosize:{minRows:1,maxRows:r(v)?4:8},onFocus:c=>{l(c),ee(c)},onBlur:t,onKeypress:y,onClear:o[6]||(o[6]=()=>{s.value="",_.value.value=[]})},null,8,["value","placeholder","autosize","onUpdate:value","onFocus","onBlur"])]),_:1},8,["value","options","input-props"]),m(r(V),{type:"primary",disabled:r(A),onClick:x},{icon:h(()=>[p("span",dt,[m(r(ue),{icon:"lucide:search"})])]),_:1},8,["disabled"])])])],2)]))}});const vt=Ye(ft,[["__scopeId","data-v-3c8bc0c5"]]);export{vt as default};
