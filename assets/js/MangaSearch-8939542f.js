import{g as a,d as e,v as t,e as s,a$ as o,b0 as l,L as n,E as r,G as c,n as i,u,c as m,q as v,p as h,H as d,a as g,w as p,P as f,Q as y,U as S,F as w,J as k,B as x,M as R,N as C,o as I,V as _,x as b,t as P}from"./vue-vendor-ca37f3ab.js";import{e as J,_ as K,z as N}from"./common-75d0ab74.js";import{I as j,b as O,a as D}from"./image-modules-5e14b9c2.js";import{e as M,h as H,i as T,D as $,q as z}from"./naive-ui-5b39965d.js";import"./utils-f1e0c1c0.js";import"./layout-c4db1552.js";const q=a("manga",{state:()=>({searchKeyword:"",searchResults:[]}),actions:{setSearchResults(a){this.searchResults=a},setSearchKeyword(a){this.searchKeyword=a},resetStore(){this.$reset()}}}),B=a=>(R("data-v-d7450f91"),a=a(),C(),a),F={class:"flex flex-col w-full h-full"},U={class:"flex-1 overflow-hidden"},E={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},G={class:"manga-search-container"},L={class:"search-container"},Q={class:"search-wrapper"},V={class:"search-input-wrapper"},A={key:0,class:"suggestion-section"},W={class:"section-header"},X=B((()=>h("span",null,"搜索历史",-1))),Y=["onClick"],Z={class:"history-list"},aa={class:"history-grid"},ea=["onClick"],ta={class:"history-text"},sa=["onClick"],oa={class:"suggestion-section"},la=B((()=>h("div",{class:"section-header"},[h("span",null,"热搜榜")],-1))),na={class:"hot-search-list"},ra=["onClick"],ca={class:"hot-text"},ia={class:"results-container"},ua=["onClick"],ma={class:"manga-image"},va={class:"manga-info"},ha={class:"type-tag"},da=D(e({__name:"MangaSearch",setup(a){const{isMobile:e}=J(),R=x(),C=q(),D=M(),B=t(C.searchKeyword),da=s((()=>C.searchResults)),ga=t(!1),pa=t([]),fa=t(!1),ya=t([{text:"娼年",tag:"热"},{text:"回复术士的重来人生",tag:"R18"},{text:"无良公会",tag:"新"}]),Sa=t(!1);let wa=null;const ka=t(!1),xa=t(!1),Ra=t({fromPath:"",toPath:""});function Ca(){wa&&(clearTimeout(wa),wa=null),Sa.value=!0}function Ia(){wa=setTimeout((()=>{ka.value||(Sa.value=!1)}),200)}function _a(){wa&&(clearTimeout(wa),wa=null)}function ba(){Ia()}o(((a,e)=>{a.path.includes("/manga/manga-info")&&(Ra.value={fromPath:e.path,toPath:a.path},localStorage.setItem("mangaRouteState",JSON.stringify({fromPath:e.path,toPath:a.path,timestamp:Date.now()})))})),l(((a,e)=>{try{const a=localStorage.getItem("mangaRouteState");if(a){const t=JSON.parse(a);Date.now()-t.timestamp<6e5&&e.path.includes("/manga/manga-info")&&(xa.value=!0)}}catch(t){}}));try{const a=localStorage.getItem("mangaSearchHistory");a&&(pa.value=JSON.parse(a))}catch(ja){pa.value=[]}async function Pa(a){try{const e=await N(a);if("Success"===e.status){const t=e.data;C.setSearchResults(t.rows),C.setSearchKeyword(a),function(a){if(!a.trim())return;const e={keyword:a.trim(),timestamp:Date.now()};pa.value=pa.value.filter((a=>!(a.keyword===e.keyword))),pa.value.unshift(e),pa.value.length>10&&pa.value.pop(),localStorage.setItem("mangaSearchHistory",JSON.stringify(pa.value))}(a)}}catch(e){D.error((null==e?void 0:e.message)||"获取失败，请稍后再试")}}async function Ja(a){a&&(B.value=a),Sa.value=!1;const e=a||B.value;if(e.trim()){fa.value=!1,ga.value=!0;try{Pa(e)}catch(t){D.error((null==t?void 0:t.message)||"获取失败，请稍后再试")}finally{ga.value=!1}}}function Ka(){pa.value=[],localStorage.removeItem("mangaSearchHistory")}function Na(a){switch(a){case"热":case"R18":return"hot";case"新":return"new";case"直播中":return"live";default:return""}}return n((()=>R.currentRoute.value),(a=>{try{const e="/manga/manga-search"===a.path;if(e){const a=localStorage.getItem("mangaRouteState");if(a){const e=JSON.parse(a);Date.now()-e.timestamp<6e5&&"/manga/manga-search"===e.fromPath&&e.toPath.includes("/manga/manga-info")&&(xa.value=!0)}}e&&!xa.value&&(C.resetStore(),B.value=C.searchKeyword,Pa(""))}catch(e){}}),{immediate:!0}),r((()=>{xa.value=!1;try{const a=localStorage.getItem("mangaRouteState");if(a){const e=JSON.parse(a);Date.now()-e.timestamp>=6e5&&localStorage.removeItem("mangaRouteState")}}catch(a){}})),c((()=>{wa&&(clearTimeout(wa),wa=null),R.currentRoute.value.path.includes("/manga/manga-info")||localStorage.removeItem("mangaRouteState")})),(a,t)=>(I(),i("div",F,[u(e)?(I(),m(O,{key:0})):v("",!0),h("main",U,[h("div",E,[h("div",{id:"manga-wrapper",class:d(["w-full max-w-screen-xl m-auto",[u(e)?"p-2":"p-4"]])},[h("div",G,[h("div",L,[h("div",Q,[h("div",V,[g(u($),null,{default:p((()=>[g(u(H),{value:B.value,"onUpdate:value":t[1]||(t[1]=a=>B.value=a),style:{width:"85%"},size:"large",type:"text",placeholder:"输入名称关键字",clearable:"",loading:ga.value,onKeyup:t[2]||(t[2]=_((a=>Ja()),["enter"])),onFocus:Ca,onBlur:Ia},{suffix:p((()=>[g(u(T),{disabled:ga.value,secondary:"",onClick:t[0]||(t[0]=a=>Ja())},{icon:p((()=>[g(u(K),{icon:u(j).nav.search,class:"search-icon"},null,8,["icon"])])),_:1},8,["disabled"])])),_:1},8,["value","loading"]),g(u(T),{style:{width:"15%"},onClick:t[3]||(t[3]=a=>async function(){C.resetStore(),B.value=C.searchKeyword,Pa("")}())},{default:p((()=>[b(" 重置 ")])),_:1})])),_:1})]),f(h("div",{class:"search-suggestions",onMouseenter:_a,onMouseleave:ba},[pa.value.length>0?(I(),i("div",A,[h("div",W,[X,h("span",{class:"clear-history",onClick:S(Ka,["stop"])},"清空",8,Y)]),h("div",Z,[h("div",aa,[(I(!0),i(w,null,k(pa.value,((a,e)=>(I(),i("div",{key:`history-${e}`,class:"history-item",onClick:e=>async function(a){await Ja(a.keyword)}(a)},[h("span",ta,P(a.keyword),1),h("span",{class:"delete-icon",onClick:S((a=>function(a){ka.value=!0,pa.value.splice(a,1),localStorage.setItem("mangaSearchHistory",JSON.stringify(pa.value)),setTimeout((()=>{ka.value=!1}),300)}(e)),["stop","prevent"])},"×",8,sa)],8,ea)))),128))])])])):v("",!0),h("div",oa,[la,h("div",na,[(I(!0),i(w,null,k(ya.value,((a,e)=>(I(),i("div",{key:`hot-${e}`,class:"suggestion-item",onClick:e=>Ja(a.text)},[h("span",{class:d(["hot-rank",{"top-3":e<3}])},P(e+1),3),h("span",ca,P(a.text),1),a.tag?(I(),i("span",{key:0,class:d(["hot-tag",Na(a.tag)])},P(a.tag),3)):v("",!0)],8,ra)))),128))])])],544),[[y,Sa.value]])])]),h("div",ia,[(I(!0),i(w,null,k(u(da),(a=>(I(),i("div",{key:a.id,class:"manga-card",onClick:e=>u(R).push(`/manga/manga-info/${a.id}`)},[h("div",ma,[g(u(z),{lazy:"",src:a.cover_image_url,alt:a.name,"preview-disabled":"","object-fit":"cover","intersection-observer-options":{root:"#scrollRef",rootMargin:"200px 0px",threshold:.1}},null,8,["src","alt","intersection-observer-options"])]),h("div",va,[h("h3",null,P(a.name),1),h("span",ha,P(a.type_name),1)])],8,ua)))),128))])])],2)])])]))}}),[["__scopeId","data-v-d7450f91"]]);export{da as default};
