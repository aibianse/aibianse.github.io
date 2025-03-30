import{e,m as s,_ as t}from"./common-8c4f62e8.js";import{d as o,v as a,E as i,G as n,n as r,u as c,c as l,q as m,p as u,H as d,F as v,J as p,M as h,N as g,o as f,a as _,t as y,B as w}from"./vue-vendor-ca37f3ab.js";import{I as x,b as E,a as j}from"./image-modules-54f63cac.js";import"./naive-ui-5b39965d.js";import"./utils-f1e0c1c0.js";import"./layout-087772db.js";const P=[{icon:x.nav.image,title:"散图&组图",description:"散图组图，各种标签，在线浏览",route:"/image/image-tag"},{icon:x.nav.search,title:"套图&写真",description:"各种套图，整合搜索，在线浏览",route:"/image/image-set-search"},{icon:x.nav.movie,title:"影视&电影",description:"海量影视资源，一键搜索",route:"/movie/movie-search"},{icon:x.nav.manga,title:"漫画&本子",description:"漫画本子，乐趣无穷",route:"/manga/manga-search"}],T=e=>(h("data-v-c2951ab1"),e=e(),g(),e),b={class:"flex flex-col w-full h-full"},k={class:"flex-1 overflow-hidden"},L={id:"scrollRef",ref:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},I={class:"home-container"},R=T((()=>u("div",{class:"welcome-text"},[u("h1",null,"你好，欢迎使用！😘"),u("p",null,"如若不曾睹真容，客官静赏落霓裳！🥰")],-1))),M={class:"grid-container"},C=["onClick"],A={class:"card-content"},D={class:"card-header"},O={class:"icon-wrapper"},V={class:"card-title"},q={class:"card-description"},B=T((()=>u("div",{class:"card-background"},null,-1))),$=j(o({__name:"index",setup(o){const{isMobile:h}=e(),g=w();function x(e){const s=e.currentTarget,t=s.getBoundingClientRect(),o=e.clientX-t.left,a=e.clientY-t.top;s.style.setProperty("--mouse-x",`${o}px`),s.style.setProperty("--mouse-y",`${a}px`)}function j(e){const s=e.currentTarget;s.style.setProperty("--mouse-x","50%"),s.style.setProperty("--mouse-y","50%")}const T=()=>{(window.requestIdleCallback||(e=>setTimeout(e,1e3)))((()=>{s((()=>import("./image-modules-54f63cac.js").then((e=>e.d))),["assets/js/image-modules-54f63cac.js","assets/js/common-8c4f62e8.js","assets/js/vue-vendor-ca37f3ab.js","assets/css/vue-vendor-aaa8bf00.css","assets/js/naive-ui-5b39965d.js","assets/js/utils-f1e0c1c0.js","assets/js/layout-087772db.js","assets/css/layout-c1543d8f.css","assets/css/image-modules-527ae3e0.css"]).then((()=>new Promise((e=>setTimeout(e,300))))).then((()=>s((()=>import("./image-modules-54f63cac.js").then((e=>e.e))),["assets/js/image-modules-54f63cac.js","assets/js/common-8c4f62e8.js","assets/js/vue-vendor-ca37f3ab.js","assets/css/vue-vendor-aaa8bf00.css","assets/js/naive-ui-5b39965d.js","assets/js/utils-f1e0c1c0.js","assets/js/layout-087772db.js","assets/css/layout-c1543d8f.css","assets/css/image-modules-527ae3e0.css"]))).then((()=>new Promise((e=>setTimeout(e,300))))).then((()=>s((()=>import("./movie-modules-087c33e1.js").then((e=>e.M))),["assets/js/movie-modules-087c33e1.js","assets/js/vue-vendor-ca37f3ab.js","assets/css/vue-vendor-aaa8bf00.css","assets/js/common-8c4f62e8.js","assets/js/naive-ui-5b39965d.js","assets/js/utils-f1e0c1c0.js","assets/js/layout-087772db.js","assets/js/image-modules-54f63cac.js","assets/css/image-modules-527ae3e0.css","assets/css/layout-c1543d8f.css","assets/css/movie-modules-acebc0eb.css"]))).catch(console.error)}))},$=a(!1),F=()=>{$.value||($.value=!0,T())};return i((()=>{document.addEventListener("mousemove",F,{once:!0}),document.addEventListener("touchstart",F,{once:!0}),setTimeout((()=>{$.value||T()}),5e3)})),n((()=>{document.removeEventListener("mousemove",F),document.removeEventListener("touchstart",F)})),(e,s)=>(f(),r("div",b,[c(h)?(f(),l(E,{key:0})):m("",!0),u("main",k,[u("div",L,[u("div",{id:"image-wrapper image-scroll-container",class:d(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[c(h)?"p-2":"p-4"]])},[u("div",I,[R,u("div",M,[(f(!0),r(v,null,p(c(P),(e=>(f(),r("div",{key:e.title,class:"card",onClick:s=>{return t=e.route,void g.push(t);var t},onMouseenter:x,onMouseleave:j},[u("div",A,[u("div",D,[u("div",O,[_(c(t),{icon:e.icon},null,8,["icon"])]),u("h2",V,y(e.title),1)]),u("p",q,y(e.description),1)]),B],40,C)))),128))])])],2)],512)])]))}}),[["__scopeId","data-v-c2951ab1"]]);export{$ as default};
