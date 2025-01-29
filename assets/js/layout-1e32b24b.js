import{d as e,N as a,v as l,o as s,n as t,p as o,a as n,u as i,c as r,q as u,e as d,C as c,w as p,x as v,K as f,O as m,P as b,F as h,G as _,L as x,M as y,t as w,y as k,E as g,Q as C,R as j}from"./vue-vendor-12459f3a.js";import{h as P,j as z,u as I,b as T,_ as E,k as K,a as M,f as O,l as S}from"./common-78e43f63.js";import{I as U,_ as L,a as R}from"./image-modules-1cc4ba43.js";import{i as B,G as D,H as F,y as G,I as V,e as $,h as q,p as A,J as H,K as J}from"./naive-ui-832a6a86.js";const N={class:"flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800"},Q={class:"flex-1 flex-shrink-0 overflow-hidden"},W=e({__name:"Footer",setup(e){const d=a((()=>z((()=>import("./common-78e43f63.js").then((e=>e.w))),["assets/js/common-78e43f63.js","assets/js/vue-vendor-12459f3a.js","assets/css/vue-vendor-aaa8bf00.css","assets/js/naive-ui-832a6a86.js","assets/js/utils-08c8755b.js"]))),c=l(!1);return(e,a)=>(s(),t("footer",N,[o("div",Q,[n(i(P))]),c.value?(s(),r(i(d),{key:0,visible:c.value,"onUpdate:visible":a[0]||(a[0]=e=>c.value=e)},null,8,["visible"])):u("",!0)]))}}),X=e=>(x("data-v-3223c148"),e=e(),y(),e),Y={class:"flex flex-col flex-1 min-h-0"},Z={class:"p-4"},ee=X((()=>o("br",null,null,-1))),ae=X((()=>o("br",null,null,-1))),le=X((()=>o("br",null,null,-1))),se=X((()=>o("br",null,null,-1))),te=X((()=>o("div",{class:"flex-1 min-h-0 pb-4 overflow-hidden"},null,-1))),oe=X((()=>o("div",{class:"flex items-center p-4 space-x-4"},[o("div",{class:"flex-1"})],-1))),ne=L(e({__name:"index",setup(e){const a=I(),{isMobile:r}=T(),x=l(!1),y=d((()=>a.siderCollapsed));function w(){a.setSiderCollapsed(!y.value)}const k=d((()=>r.value?{position:"fixed",zIndex:50}:{})),g=d((()=>r.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{}));c(r,(e=>{a.setSiderCollapsed(e)}),{immediate:!0,flush:"post"});const C=_();function j(){C.push("/"),r.value&&w()}return(e,a)=>(s(),t(h,null,[n(i(V),{collapsed:i(y),"collapsed-width":0,width:260,"show-trigger":!i(r)&&"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:f(i(k)),onUpdateCollapsed:w},{default:p((()=>[o("div",{class:"flex flex-col h-full",style:f(i(g))},[o("main",Y,[o("div",Z,[n(i(B),{class:"home-button",block:"",secondary:"",type:"primary",onClick:j},{default:p((()=>[n(i(E),{icon:i(U).nav.home},null,8,["icon"]),v(" 返回首页 ")])),_:1}),n(i(D),{class:"notice-alert",title:"些许通知"},{icon:p((()=>[n(i(F),null,{default:p((()=>[n(i(E),{icon:"mingcute:announcement-line"})])),_:1})])),default:p((()=>[v(" 永久发布页，"),ee,v(" 请收藏标签！"),ae,le,v(" 手机扫码，快速访问"),se,n(i(G),{src:i("https://cdn.lookimage.live/assets/img/aibianse_github_io-ff5e2de0.png")},null,8,["src"])])),_:1})]),te,oe]),n(W)],4)])),_:1},8,["collapsed","show-trigger","style"]),i(r)?m((s(),t("div",{key:0,class:"fixed inset-0 z-40 w-full h-full bg-black/40",onClick:w},null,512)),[[b,!i(y)]]):u("",!0),n(i(K),{visible:x.value,"onUpdate:visible":a[0]||(a[0]=e=>x.value=e)},null,8,["visible"])],64))}}),[["__scopeId","data-v-3223c148"]]),ie={class:"p-10 bg-white rounded dark:bg-slate-800"},re={class:"space-y-4"},ue={class:"space-y-2"},de=o("h2",{class:"text-2xl font-bold text-center text-slate-800 dark:text-neutral-200"}," 403 ",-1),ce={class:"text-base text-center text-slate-500 dark:text-slate-500"},pe=e({__name:"Permission",props:{visible:{type:Boolean}},setup(e){const a=M(),t=$(),u=l(!1),c=l(""),f=d((()=>!c.value.trim()||u.value));async function m(){const e=c.value.trim();if(e)try{u.value=!0,await O(e),a.setToken(e),t.success("success"),window.location.reload()}catch(l){t.error(l.message??"error"),a.removeToken(),c.value=""}finally{u.value=!1}}function b(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),m())}return(a,l)=>(s(),r(i(A),{show:e.visible,style:{width:"90%","max-width":"640px"}},{default:p((()=>[o("div",ie,[o("div",re,[o("header",ue,[de,o("p",ce,w(a.$t("common.unauthorizedTips")),1),n(R,{class:"w-[200px] m-auto"})]),n(i(q),{value:c.value,"onUpdate:value":l[0]||(l[0]=e=>c.value=e),type:"password",placeholder:"",onKeypress:b},null,8,["value"]),n(i(B),{block:"",type:"primary",disabled:i(f),loading:u.value,onClick:m},{default:p((()=>[v(w(a.$t("common.verify")),1)])),_:1},8,["disabled","loading"])])])])),_:1},8,["show"]))}}),ve=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"})),fe=e({__name:"Layout",setup(e){const a=_(),l=g(),u=I(),c=S(),v=M();"Chat"===l.name&&c.active&&a.replace({name:"Chat",params:{uuid:c.active}});const{isMobile:f}=T(),m=d((()=>u.siderCollapsed)),b=d((()=>{var e;return!!(null==(e=v.session)?void 0:e.auth)&&!v.token})),h=d((()=>f.value?["rounded-none","shadow-none"]:["border","rounded-md","shadow-md","dark:border-neutral-800"])),x=d((()=>["h-full",{"pl-[260px]":!f.value&&!m.value}]));return(e,a)=>{const l=j("RouterView");return s(),t("div",{class:k(["h-full dark:bg-[#24272e] transition-all",[i(f)?"p-0":"p-4"]])},[o("div",{class:k(["h-full overflow-hidden",i(h)])},[n(i(J),{class:k(["z-40 transition",i(x)]),"has-sider":""},{default:p((()=>[n(ne),n(i(H),{class:"h-full"},{default:p((()=>[n(l,null,{default:p((({Component:e,route:a})=>[(s(),r(C(e),{key:a.fullPath}))])),_:1})])),_:1})])),_:1},8,["class"])],2),n(pe,{visible:i(b)},null,8,["visible"])],2)}}});export{ve as P,fe as _};
