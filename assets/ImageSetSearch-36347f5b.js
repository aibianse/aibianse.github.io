import{a1 as Te,a2 as ve,a3 as Se,d as ye,A as xe,a4 as Ie,m as u,E as ke,a5 as Be,a6 as be,l as B,a7 as Re,a8 as Fe,a9 as he,y as k,aa as Oe,ab as Pe,ac as Ve,ad as Ce,ae as Ne,af as Ae,ag as ze,ah as Me,ai as Ue,aj as Ee,ak as De,al as $e,am as Le,an as $,ao as X,C as je,ap as Ke,O as He,N as We,u as qe,P as Qe,aq as Xe,c as R,a as r,b as Ye,e as Ge,f as b,n as pe,F as fe,r as me,h as d,Q as f,ar as Je,o as I,U as F,X as Ze,t as et,as as tt,S as at,Y as O,W as nt,_ as ge,at as ot,au as lt,av as st,aw as we,j as rt}from"./index-8204837f.js";import{_ as it}from"./index.vue_vue_type_script_setup_true_lang-638b6f42.js";import{N as ut}from"./Image-d9d26e62.js";import{N as ct}from"./Spin-ad4756b4.js";function dt(n){return n.map(_e)}function _e(n){var h,l;return typeof n=="string"?{label:n,value:n}:n.type==="group"?{type:"group",label:(h=n.label)!==null&&h!==void 0?h:n.name,value:(l=n.value)!==null&&l!==void 0?l:n.name,key:n.key||n.name,children:n.children.map(c=>_e(c))}:n}const ft=Te([ve("auto-complete",`
 z-index: auto;
 position: relative;
 display: inline-flex;
 width: 100%;
 `),ve("auto-complete-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Se({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),mt=Object.assign(Object.assign({},be.props),{to:he.propTo,menuProps:Object,bordered:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},defaultValue:{type:String,default:null},loading:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},placeholder:String,placement:{type:String,default:"bottom-start"},value:String,blurAfterSelect:Boolean,clearAfterSelect:Boolean,getShow:Function,inputProps:Object,renderOption:Function,renderLabel:Function,size:String,options:{type:Array,default:()=>[]},zIndex:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onSelect:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array],onInput:[Function,Array]}),ht=ye({name:"AutoComplete",props:mt,setup(n){const{mergedBorderedRef:h,namespaceRef:l,mergedClsPrefixRef:v,inlineThemeDisabled:c}=xe(n),C=Ie(n),{mergedSizeRef:L,mergedDisabledRef:j,mergedStatusRef:P}=C,K=u(null),V=u(null),H=u(n.defaultValue),N=ke(n,"value"),A=Be(N,H),T=u(!1),W=u(!1),q=be("AutoComplete","-auto-complete",ft,Ee,n,v),Y=B(()=>dt(n.options)),Q=B(()=>{const{getShow:a}=n;return a?a(A.value||""):!!A.value}),ne=B(()=>Q.value&&T.value&&!!Y.value.length),G=B(()=>De(Y.value,Le("value","children")));function z(a){const{"onUpdate:value":s,onUpdateValue:m,onInput:g}=n,{nTriggerFormInput:E,nTriggerFormChange:e}=C;m&&$(m,a),s&&$(s,a),g&&$(g,a),H.value=a,E(),e()}function oe(a){const{onSelect:s}=n,{nTriggerFormInput:m,nTriggerFormChange:g}=C;s&&$(s,a),m(),g()}function J(a){const{onBlur:s}=n,{nTriggerFormBlur:m}=C;s&&$(s,a),m()}function Z(a){const{onFocus:s}=n,{nTriggerFormFocus:m}=C;s&&$(s,a),m()}function ee(){W.value=!0}function S(){window.setTimeout(()=>{W.value=!1},0)}function le(a){var s,m,g;switch(a.key){case"Enter":if(!W.value){const E=(s=V.value)===null||s===void 0?void 0:s.getPendingTmNode();E&&(te(E.rawNode),a.preventDefault())}break;case"ArrowDown":(m=V.value)===null||m===void 0||m.next();break;case"ArrowUp":(g=V.value)===null||g===void 0||g.prev();break}}function te(a){(a==null?void 0:a.value)!==void 0&&(oe(a.value),n.clearAfterSelect?z(null):a.label!==void 0&&z(a.label),T.value=!1,n.blurAfterSelect&&p())}function se(){z(null)}function re(a){T.value=!0,Z(a)}function ie(a){T.value=!1,J(a)}function ue(a){T.value=!0,z(a)}function ce(a){te(a.rawNode)}function _(a){var s;!((s=K.value)===null||s===void 0)&&s.contains($e(a))||(T.value=!1)}function p(){var a,s;!((a=K.value)===null||a===void 0)&&a.contains(document.activeElement)&&((s=document.activeElement)===null||s===void 0||s.blur())}const ae=B(()=>{const{common:{cubicBezierEaseInOut:a},self:{menuBoxShadow:s}}=q.value;return{"--n-menu-box-shadow":s,"--n-bezier":a}}),x=c?Re("auto-complete",void 0,ae,n):void 0,M=u(null),U={focus:()=>{var a;(a=M.value)===null||a===void 0||a.focus()},blur:()=>{var a;(a=M.value)===null||a===void 0||a.blur()}};return{focus:U.focus,blur:U.blur,inputInstRef:M,uncontrolledValue:H,mergedValue:A,isMounted:Fe(),adjustedTo:he(n),menuInstRef:V,triggerElRef:K,treeMate:G,mergedSize:L,mergedDisabled:j,active:ne,mergedStatus:P,handleClear:se,handleFocus:re,handleBlur:ie,handleInput:ue,handleToggle:ce,handleClickOutsideMenu:_,handleCompositionStart:ee,handleCompositionEnd:S,handleKeyDown:le,mergedTheme:q,cssVars:c?void 0:ae,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender,mergedBordered:h,namespace:l,mergedClsPrefix:v}},render(){const{mergedClsPrefix:n}=this;return k("div",{class:`${n}-auto-complete`,ref:"triggerElRef",onKeydown:this.handleKeyDown,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd},k(Oe,null,{default:()=>[k(Pe,null,{default:()=>{if(this.$slots.default)return Ve(this.$slots,"default",{handleInput:this.handleInput,handleFocus:this.handleFocus,handleBlur:this.handleBlur,value:this.mergedValue});const{mergedTheme:l}=this;return k(Ce,{ref:"inputInstRef",status:this.mergedStatus,theme:l.peers.Input,themeOverrides:l.peerOverrides.Input,bordered:this.mergedBordered,value:this.mergedValue,placeholder:this.placeholder,size:this.mergedSize,disabled:this.mergedDisabled,clearable:this.clearable,loading:this.loading,inputProps:this.inputProps,onClear:this.handleClear,onFocus:this.handleFocus,onUpdateValue:this.handleInput,onBlur:this.handleBlur},{suffix:()=>{var v,c;return(c=(v=this.$slots).suffix)===null||c===void 0?void 0:c.call(v)},prefix:()=>{var v,c;return(c=(v=this.$slots).prefix)===null||c===void 0?void 0:c.call(v)}})}}),k(Ne,{show:this.active,to:this.adjustedTo,containerClass:this.namespace,zIndex:this.zIndex,teleportDisabled:this.adjustedTo===he.tdkey,placement:this.placement,width:"target"},{default:()=>k(Ae,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>{var h;if((h=this.onRender)===null||h===void 0||h.call(this),!this.active)return null;const{menuProps:l}=this;return ze(k(Ue,Object.assign({},l,{clsPrefix:n,ref:"menuInstRef",theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,"auto-pending":!0,class:[`${n}-auto-complete-menu`,this.themeClass,l==null?void 0:l.class],style:[l==null?void 0:l.style,this.cssVars],treeMate:this.treeMate,multiple:!1,renderLabel:this.renderLabel,renderOption:this.renderOption,size:"medium",onToggle:this.handleToggle})),[[Me,this.handleClickOutsideMenu,void 0,{capture:!0}]])}})})]}))}});function vt(){const n=u(null);return{scrollRef:n,scrollToBottom:async()=>{await X(),n.value&&(n.value.scrollTop=n.value.scrollHeight)},scrollToTop:async()=>{await X(),n.value&&(n.value.scrollTop=0)},scrollToBottomIfAtBottom:async()=>{await X(),n.value&&n.value.scrollHeight-n.value.scrollTop-n.value.clientHeight<=100&&(n.value.scrollTop=n.value.scrollHeight)}}}const pt={class:"flex flex-col w-full h-full"},gt={class:"flex-1 overflow-hidden"},wt=["onClick"],yt={style:{"text-align":"center"}},bt={class:"image-container"},Ct={class:"w-full max-w-screen-xl m-auto"},_t={class:"flex items-center justify-between space-x-2"},Tt={class:"button-spacing"},St={class:"dark:text-black"},xt=ye({__name:"ImageSetSearch",setup(n){je(async()=>{try{if(!await Z(10,1))throw new Error("加载图片集合失败");await x(),!p.value&&U.value&&U.value.focus()}catch(e){console.error("Initialization error:",e),_.error(e instanceof Error?e.message:"初始化失败")}});const h=u([]),l=u(""),v=u([]),c=u(!1),C=u(1),L=u(""),j=u(!1),P=u([]),K="aibianse.pages.dev",V="cdn.aibianse.com";function H(e){if(!e)return"";try{return e.replace(K,V)}catch(o){return console.error("URL replace error:",o),e}}async function N(){await ne(l.value),await A()}async function A(){P.value[P.value.length-1].scrollIntoView({behavior:"smooth"})}const T=e=>{e&&P.value.push(e)};async function W(e){v.value=[],c.value=!0,L.value=e,C.value=1,await q(L.value,C.value),lt(e)}async function q(e,o){var t,w;try{const i=await st(e,o);if(!((w=(t=i==null?void 0:i.data)==null?void 0:t.rows)!=null&&w.length)){_.success("查询成功，已经没有了！");return}const y=i.data.rows[0].urls||[];if(!y.length){_.warning("没有找到图片");return}const de=y.filter(D=>D).map(D=>(D.startsWith("http")||(D=`https://${D}`),H(D)));de.length?v.value.push(...de):_.warning("处理后没有有效的图片URL")}catch(i){console.error("fetchImageCollection error:",i),_.error("查询失败！")}}async function Y(){j.value=!0;try{C.value++,await q(L.value,C.value)}finally{setTimeout(()=>{j.value=!1},500)}}async function Q(e,o){try{return(await Je(e,o)).data}catch(t){return _.error(t instanceof Error?t.message:"搜索失败"),null}}async function ne(e){if(!(e!=null&&e.trim()))return;l.value="";const o=await Q(e,1);o&&h.value.push({search_keyword:e,image_data:o.rows,totalPages:Math.ceil(o.total/10),currentPage:1})}async function G(e,o){const w=await(e.search_keyword==="   目录   "?()=>ee(10,o):()=>Q(e.search_keyword,o))();w&&(e.image_data=w.rows,e.currentPage=o)}const z=B(()=>M.value||!l.value||l.value.trim()==="");function oe(e){p.value?e.key==="Enter"&&e.ctrlKey&&(e.preventDefault(),N()):e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),N())}const J=B(()=>p.value?we("chat.placeholderMobile"):we("chat.placeholder"));async function Z(e,o){try{const t=u("");if(e===10)t.value="   目录   ";else if(e===20)t.value="最热";else if(e===30)t.value="最新";else if(e===40)t.value="巧遇";else throw new Error("类型错误！");const w=await ee(e,o);if(!w)throw new Error("获取数据失败");return h.value.push({search_keyword:t.value,image_data:w.rows,totalPages:Math.ceil(w.total/10),currentPage:1}),await X(),await A(),!0}catch(t){return console.error("clickImageCollectionByType error:",t),_.error(t instanceof Error?t.message:"操作失败"),!1}}async function ee(e,o){try{const t=await Ke(e,o);if(!(t!=null&&t.data))throw new Error("获取数据失败");return t.data}catch(t){throw console.error("fetchImageCollectionByType error:",t),t}}const S=u([]),le=e=>k("div",{style:"padding: 4px 0"},e.label),te=async e=>{if(!(e!=null&&e.trim())){S.value=[];return}try{const o=await Q(e.trim(),1);if(!o){S.value=[];return}S.value=o.rows.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())).slice(0,10).map(t=>({label:t.name,value:t.name}))}catch(o){console.error("Failed to fetch search suggestions:",o),S.value=[]}},se=He(async e=>{await te(e)},300),re=e=>{l.value=e,se(e)},ie=e=>{l.value=e,N()},ue=e=>{p.value&&e.target&&window.setTimeout(()=>{e.target.scrollIntoView({behavior:"smooth",block:"center"})},300)},ce=new AbortController,_=We(),{isMobile:p}=qe(),{scrollRef:ae,scrollToBottom:x}=vt(),M=u(!1),U=u(null),a=B(()=>{let e=["p-4"];return p.value&&(e=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),e});Qe(()=>{M.value&&ce.abort(),P.value=[],v.value=[]});const s=u(null);Xe(()=>c.value,async e=>{e&&(await X(),s.value&&(s.value.scrollTop=0))});const m=u(!1);function g(e,o){Z(e,o),m.value=!1}const E=e=>{p.value&&e.target&&window.setTimeout(()=>{e.target.scrollIntoView({behavior:"smooth",block:"center"})},300)};return(e,o)=>(I(),R("div",pt,[r(p)?(I(),Ye(it,{key:0})):Ge("",!0),b("main",gt,[b("div",{id:"scrollRef",ref_key:"scrollRef",ref:ae,class:"h-full overflow-hidden overflow-y-auto"},[b("div",{id:"image-wrapper image-scroll-container",class:pe(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[r(p)?"p-2":"p-4"]])},[(I(!0),R(fe,null,me(h.value,(t,w)=>(I(),R("div",{key:t.search_keyword+w,ref_for:!0,ref:T,class:"image_card"},[d(r(tt),{title:`搜索关键字：${t.search_keyword}`,segmented:{content:!0,footer:"soft"}},{"header-extra":f(()=>[]),footer:f(()=>[F(" 广告位招租 ")]),action:f(()=>[b("div",yt,[d(r(Ze),{page:t.currentPage,"onUpdate:page":[i=>t.currentPage=i,i=>G(t,t.currentPage)],"page-count":t.totalPages,size:"large",simple:"","onUpdate:pageSize":i=>G(t,t.currentPage)},null,8,["page","onUpdate:page","page-count","onUpdate:pageSize"])])]),default:f(()=>[b("ul",null,[(I(!0),R(fe,null,me(t.image_data,(i,y)=>(I(),R("li",{key:y,class:"image_name",onClick:de=>W(i.id)},et(`${y+1}、${i.name}`),9,wt))),128))])]),_:2},1032,["title"]),d(r(nt),{id:"image-scroll-container",show:c.value,"onUpdate:show":o[0]||(o[0]=i=>c.value=i),class:"custom-card",preset:"card",style:{width:"95%",maxWidth:"960px",textAlign:"center"},title:"",size:"huge",bordered:!1,segmented:{content:"soft",footer:"soft"}},{default:f(()=>[b("div",bt,[(I(!0),R(fe,null,me(v.value,(i,y)=>(I(),R("div",{key:i+y,class:"image-item"},[d(r(ut),{src:i,"preview-src":i,width:r(p).value?"100%":900,"show-toolbar":!0,lazy:"","show-loading-placeholder":""},{placeholder:f(()=>[b("div",{style:at({width:r(p).value?"100%":"400px",height:"300px",textAlign:"center"}),class:"image-placeholder"},[d(r(ct),null,{default:f(()=>[F(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src","preview-src","width"])]))),128))]),d(r(O),{loading:j.value,style:{width:"100%","margin-top":"20px"},onClick:Y},{default:f(()=>[F(" 加载更多 ")]),_:1},8,["loading"])]),_:2},1032,["show"])]))),128))],2)],512)]),b("footer",{class:pe(r(a))},[b("div",Ct,[b("div",_t,[d(r(ot),{show:m.value,"onUpdate:show":o[5]||(o[5]=t=>m.value=t),overlap:!1,placement:"top",trigger:"click"},{trigger:f(()=>[d(r(O),null,{default:f(()=>[d(r(ge),{icon:"ep:menu"})]),_:1})]),default:f(()=>[b("div",Tt,[d(r(O),{onClick:o[1]||(o[1]=t=>g(10,1))},{default:f(()=>[F(" 目录 ")]),_:1}),d(r(O),{onClick:o[2]||(o[2]=t=>g(20,1))},{default:f(()=>[F(" 最热 ")]),_:1}),d(r(O),{onClick:o[3]||(o[3]=t=>g(30,1))},{default:f(()=>[F(" 最新 ")]),_:1}),d(r(O),{onClick:o[4]||(o[4]=t=>g(40,1))},{default:f(()=>[F(" 巧遇 ")]),_:1})])]),_:1},8,["show"]),d(r(ht),{value:l.value,"onUpdate:value":[o[8]||(o[8]=t=>l.value=t),re],options:S.value,"render-label":le,"input-props":{placeholder:r(J),type:"textarea",autosize:{minRows:1,maxRows:r(p)?4:8}},style:{width:"70%"},onSelect:ie,onFocus:E},{default:f(({handleInput:t,handleBlur:w,handleFocus:i})=>[d(r(Ce),{ref_key:"inputRef",ref:U,value:l.value,"onUpdate:value":[o[6]||(o[6]=y=>l.value=y),t],type:"textarea",clearable:"",placeholder:r(J),autosize:{minRows:1,maxRows:r(p)?4:8},onFocus:y=>{i(y),ue(y)},onBlur:w,onKeypress:oe,onClear:o[7]||(o[7]=()=>{l.value="",S.value.value=[]})},null,8,["value","placeholder","autosize","onUpdate:value","onFocus","onBlur"])]),_:1},8,["value","options","input-props"]),d(r(O),{type:"primary",disabled:r(z),onClick:N},{icon:f(()=>[b("span",St,[d(r(ge),{icon:"lucide:search"})])]),_:1},8,["disabled"])])])],2)]))}});const Ft=rt(xt,[["__scopeId","data-v-1beb7476"]]);export{Ft as default};