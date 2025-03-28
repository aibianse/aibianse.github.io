import{g as e,d as s,v as a,e as t,G as l,n as o,u as r,c,q as i,p as n,H as u,a as d,w as v,P as h,Q as p,U as f,F as y,J as m,M as g,N as w,o as k,V as S,x as b,t as x,B as C}from"./vue-vendor-ca37f3ab.js";import{e as _,_ as R,C as K}from"./common-af2d1236.js";import{I as j,b as I,a as H}from"./image-modules-8dab8a3d.js";import{h as M,i as T,D as J,q as N}from"./naive-ui-5b39965d.js";import"./utils-f1e0c1c0.js";import"./layout-a72d7ad8.js";const $=e("rebd",{state:()=>({searchKeyword:"",searchResults:[]}),actions:{setSearchResults(e){this.searchResults=e},setSearchKeyword(e){this.searchKeyword=e},resetStore(){this.$reset()}}}),O=e=>(g("data-v-c0f0e8c3"),e=e(),w(),e),q={class:"flex flex-col w-full h-full"},z={class:"flex-1 overflow-hidden"},B={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},D={class:"main-search-container"},F={class:"search-container"},U={class:"search-wrapper"},G={class:"search-input-wrapper"},L={key:0,class:"suggestion-section"},P={class:"section-header"},Q=O((()=>n("span",null,"搜索历史",-1))),V=["onClick"],A={class:"history-list"},E={class:"history-grid"},W=["onClick"],X={class:"history-text"},Y=["onClick"],Z={class:"suggestion-section"},ee=O((()=>n("div",{class:"section-header"},[n("span",null,"热搜榜")],-1))),se={class:"hot-search-list"},ae=["onClick"],te={class:"hot-text"},le={class:"results-container"},oe=["onClick"],re={class:"cover-image"},ce={class:"cover-info"},ie=H(s({__name:"RebdSearch",setup(e){const{isMobile:s}=_(),g=C(),w=$(),H=a(w.searchKeyword),O=t((()=>w.searchResults)),ie=a(!1),ne=a([]),ue=a(!1),de=a([{text:"娼年",tag:"热"},{text:"回复术士的重来人生",tag:"R18"},{text:"无良公会",tag:"新"}]),ve=a(!1);let he=null;const pe=a(!1);function fe(){he&&(clearTimeout(he),he=null),ve.value=!0}function ye(){he=setTimeout((()=>{pe.value||(ve.value=!1)}),200)}function me(){he&&(clearTimeout(he),he=null)}function ge(){ye()}l((()=>{he&&(clearTimeout(he),he=null)}));try{const e=localStorage.getItem("rebdSearchHistory");e&&(ne.value=JSON.parse(e))}catch(be){ne.value=[]}async function we(e){e&&(H.value=e),ve.value=!1;const s=e||H.value;if(s.trim()){ue.value=!1,ie.value=!0;try{const e=await K(s);0===e.code&&(w.setSearchResults(e.data.rows),w.setSearchKeyword(s),function(e){if(!e.trim())return;const s={keyword:e.trim(),timestamp:Date.now()};ne.value=ne.value.filter((e=>!(e.keyword===s.keyword))),ne.value.unshift(s),ne.value.length>10&&ne.value.pop(),localStorage.setItem("rebdSearchHistory",JSON.stringify(ne.value))}(s))}catch(a){}finally{ie.value=!1}}}function ke(){ne.value=[],localStorage.removeItem("rebdSearchHistory")}function Se(e){switch(e){case"热":case"R18":return"hot";case"新":return"new";case"直播中":return"live";default:return""}}return l((()=>{w.setSearchKeyword(H.value)})),(e,a)=>(k(),o("div",q,[r(s)?(k(),c(I,{key:0})):i("",!0),n("main",z,[n("div",B,[n("div",{id:"content-wrapper",class:u(["w-full max-w-screen-xl m-auto",[r(s)?"p-2":"p-4"]])},[n("div",D,[n("div",F,[n("div",U,[n("div",G,[d(r(J),null,{default:v((()=>[d(r(M),{value:H.value,"onUpdate:value":a[1]||(a[1]=e=>H.value=e),style:{width:"85%"},size:"large",type:"text",placeholder:"输入名称关键字",clearable:"",loading:ie.value,onKeyup:a[2]||(a[2]=S((e=>we()),["enter"])),onFocus:fe,onBlur:ye},{suffix:v((()=>[d(r(T),{disabled:ie.value,secondary:"",onClick:a[0]||(a[0]=e=>we())},{icon:v((()=>[d(r(R),{icon:r(j).nav.search,class:"search-icon"},null,8,["icon"])])),_:1},8,["disabled"])])),_:1},8,["value","loading"]),d(r(T),{style:{width:"15%"},onClick:a[3]||(a[3]=e=>async function(){w.resetStore(),H.value=w.searchKeyword,K("")}())},{default:v((()=>[b(" 重置 ")])),_:1})])),_:1})]),h(n("div",{class:"search-suggestions",onMouseenter:me,onMouseleave:ge},[ne.value.length>0?(k(),o("div",L,[n("div",P,[Q,n("span",{class:"clear-history",onClick:f(ke,["stop"])},"清空",8,V)]),n("div",A,[n("div",E,[(k(!0),o(y,null,m(ne.value,((e,s)=>(k(),o("div",{key:`history-${s}`,class:"history-item",onClick:s=>async function(e){await we(e.keyword)}(e)},[n("span",X,x(e.keyword),1),n("span",{class:"delete-icon",onClick:f((e=>function(e){pe.value=!0,ne.value.splice(e,1),localStorage.setItem("rebdSearchHistory",JSON.stringify(ne.value)),setTimeout((()=>{pe.value=!1}),300)}(s)),["stop","prevent"])},"×",8,Y)],8,W)))),128))])])])):i("",!0),n("div",Z,[ee,n("div",se,[(k(!0),o(y,null,m(de.value,((e,s)=>(k(),o("div",{key:`hot-${s}`,class:"suggestion-item",onClick:s=>we(e.text)},[n("span",{class:u(["hot-rank",{"top-3":s<3}])},x(s+1),3),n("span",te,x(e.text),1),e.tag?(k(),o("span",{key:0,class:u(["hot-tag",Se(e.tag)])},x(e.tag),3)):i("",!0)],8,ae)))),128))])])],544),[[p,ve.value]])])]),n("div",le,[(k(!0),o(y,null,m(r(O),(e=>(k(),o("div",{key:e.code,class:"cover-card",onClick:s=>r(g).push(`/rebd/rebd-detail/${e.code.toLowerCase()}`)},[n("div",re,[d(r(N),{lazy:"",src:e.cover_image_url,alt:e.code,"preview-disabled":"","object-fit":"cover","intersection-observer-options":{root:"#scrollRef",rootMargin:"200px 0px",threshold:.1}},null,8,["src","alt","intersection-observer-options"])]),n("div",ce,[n("h3",null,x(e.code),1)])],8,oe)))),128))])])],2)])])]))}}),[["__scopeId","data-v-c0f0e8c3"]]);export{ie as default};
