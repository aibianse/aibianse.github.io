import{e,m as s,_ as t}from"./common-01692133.js";import{d as o,v as a,E as i,G as n,n as r,u as c,c as l,q as m,p as d,H as u,F as v,J as p,M as h,N as f,o as _,a as g,t as y,B as w}from"./vue-vendor-ea954c2b.js";import{I as x,b as E,a as j}from"./image-modules-fe18f5da.js";import"./naive-ui-39fa6320.js";import"./utils-f1e0c1c0.js";import"./layout-da7b8fd9.js";const P=[{icon:x.nav.image,title:"散图组图",description:"散图组图，各种标签，在线浏览",route:"/image/image-tag"},{icon:x.nav.search,title:"套图搜索",description:"各种套图，整合搜索，在线浏览",route:"/image/image-set-search"},{icon:x.nav.movie,title:"影视搜索",description:"海量影视资源，一键搜索",route:"/movie/movie-search"}],T=e=>(h("data-v-c2951ab1"),e=e(),f(),e),b={class:"flex flex-col w-full h-full"},k={class:"flex-1 overflow-hidden"},L={id:"scrollRef",ref:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},I={class:"home-container"},R=T((()=>d("div",{class:"welcome-text"},[d("h1",null,"你好，欢迎使用！😘"),d("p",null,"如若不曾睹真容，客官静赏落霓裳！🥰")],-1))),M={class:"grid-container"},C=["onClick"],A={class:"card-content"},D={class:"card-header"},O={class:"icon-wrapper"},V={class:"card-title"},q={class:"card-description"},B=T((()=>d("div",{class:"card-background"},null,-1))),$=j(o({__name:"index",setup(o){const{isMobile:h}=e(),f=w();function x(e){const s=e.currentTarget,t=s.getBoundingClientRect(),o=e.clientX-t.left,a=e.clientY-t.top;s.style.setProperty("--mouse-x",`${o}px`),s.style.setProperty("--mouse-y",`${a}px`)}function j(e){const s=e.currentTarget;s.style.setProperty("--mouse-x","50%"),s.style.setProperty("--mouse-y","50%")}const T=()=>{(window.requestIdleCallback||(e=>setTimeout(e,1e3)))((()=>{s((()=>import("./image-modules-fe18f5da.js").then((e=>e.c))),["assets/js/image-modules-fe18f5da.js","assets/js/common-01692133.js","assets/js/vue-vendor-ea954c2b.js","assets/css/vue-vendor-aaa8bf00.css","assets/js/naive-ui-39fa6320.js","assets/js/utils-f1e0c1c0.js","assets/js/layout-da7b8fd9.js","assets/css/layout-c1543d8f.css","assets/css/image-modules-a9b251fb.css"]).then((()=>new Promise((e=>setTimeout(e,300))))).then((()=>s((()=>import("./image-modules-fe18f5da.js").then((e=>e.d))),["assets/js/image-modules-fe18f5da.js","assets/js/common-01692133.js","assets/js/vue-vendor-ea954c2b.js","assets/css/vue-vendor-aaa8bf00.css","assets/js/naive-ui-39fa6320.js","assets/js/utils-f1e0c1c0.js","assets/js/layout-da7b8fd9.js","assets/css/layout-c1543d8f.css","assets/css/image-modules-a9b251fb.css"]))).then((()=>new Promise((e=>setTimeout(e,300))))).then((()=>s((()=>import("./movie-modules-960fd5ef.js").then((e=>e.M))),["assets/js/movie-modules-960fd5ef.js","assets/js/vue-vendor-ea954c2b.js","assets/css/vue-vendor-aaa8bf00.css","assets/js/common-01692133.js","assets/js/naive-ui-39fa6320.js","assets/js/utils-f1e0c1c0.js","assets/js/layout-da7b8fd9.js","assets/js/image-modules-fe18f5da.js","assets/css/image-modules-a9b251fb.css","assets/css/layout-c1543d8f.css","assets/css/movie-modules-3b53d324.css"]))).catch(console.error)}))},$=a(!1),F=()=>{$.value||($.value=!0,T())};return i((()=>{document.addEventListener("mousemove",F,{once:!0}),document.addEventListener("touchstart",F,{once:!0}),setTimeout((()=>{$.value||T()}),5e3)})),n((()=>{document.removeEventListener("mousemove",F),document.removeEventListener("touchstart",F)})),(e,s)=>(_(),r("div",b,[c(h)?(_(),l(E,{key:0})):m("",!0),d("main",k,[d("div",L,[d("div",{id:"image-wrapper image-scroll-container",class:u(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[c(h)?"p-2":"p-4"]])},[d("div",I,[R,d("div",M,[(_(!0),r(v,null,p(c(P),(e=>(_(),r("div",{key:e.title,class:"card",onClick:s=>{return t=e.route,void f.push(t);var t},onMouseenter:x,onMouseleave:j},[d("div",A,[d("div",D,[d("div",O,[g(c(t),{icon:e.icon},null,8,["icon"])]),d("h2",V,y(e.title),1)]),d("p",q,y(e.description),1)]),B],40,C)))),128))])])],2)],512)])]))}}),[["__scopeId","data-v-c2951ab1"]]);export{$ as default};
