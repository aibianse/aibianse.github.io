import{g as e,d as a,v as l,e as s,J as i,n as o,u as t,c as n,q as c,p as u,y as v,a as r,w as d,S as p,O as m,P as f,T as y,F as h,z as _,L as g,M as b,o as k,t as w,G as S,A as x,E as C,x as z}from"./vue-vendor-4494934e.js";import{b as M,_ as T,m as j,n as O}from"./common-05b9c733.js";import{I as H,b as R,_ as I}from"./image-modules-a4e33f65.js";import{i as K,h as L,y as J,x as N,w as P,B as $,D as q,z as B}from"./naive-ui-4ebe2c4a.js";const D=e("movie",{state:()=>({searchKeyword:"",searchResults:[]}),actions:{setSearchResults(e){this.searchResults=e},setSearchKeyword(e){this.searchKeyword=e}}}),F=e=>(g("data-v-ec535c8b"),e=e(),b(),e),U={class:"flex flex-col w-full h-full"},A={class:"flex-1 overflow-hidden"},E={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},G={class:"movie-search-container"},Q={class:"search-container"},V={class:"search-wrapper"},W={class:"search-input-wrapper"},X={key:0,class:"suggestion-section"},Y={class:"section-header"},Z=F((()=>u("span",null,"搜索历史",-1))),ee=["onClick"],ae={class:"history-list"},le={class:"history-grid"},se=["onClick"],ie={class:"history-text"},oe=["onClick"],te={class:"suggestion-section"},ne=F((()=>u("div",{class:"section-header"},[u("span",null,"热搜榜")],-1))),ce={class:"hot-search-list"},ue=["onClick"],ve={class:"hot-text"},re={class:"results-container"},de=["onClick"],pe={class:"movie-image"},me={class:"movie-info"},fe={class:"type-tag"},ye=I(a({__name:"MovieSearch",setup(e){const{isMobile:a}=M(),g=S(),b=D(),x=l(b.searchKeyword),C=s((()=>b.searchResults)),z=l(!1),O=l([]),I=l(!1),N=l([{text:"娼年",tag:"热"},{text:"回复术士的重来人生",tag:"热"}]),P=l(!1);let $=null;const q=l(!1);function B(){$&&(clearTimeout($),$=null),P.value=!0}function F(){$=setTimeout((()=>{q.value||(P.value=!1)}),200)}function ye(){$&&(clearTimeout($),$=null)}function he(){F()}async function _e(e){e&&(x.value=e),P.value=!1;const a=e||x.value;if(a.trim()){I.value=!1,z.value=!0;try{const e=await j(a);0===e.code&&(b.setSearchResults(e.data),b.setSearchKeyword(a),function(e){if(!e.trim())return;const a=O.value.indexOf(e);a>-1&&O.value.splice(a,1),O.value.unshift(e),O.value.length>10&&O.value.pop(),localStorage.setItem("movieSearchHistory",JSON.stringify(O.value))}(a))}catch(l){}finally{z.value=!1}}}function ge(){O.value=[],localStorage.removeItem("movieSearchHistory")}function be(e){switch(e){case"热":return"hot";case"新":return"new";case"直播中":return"live";default:return""}}return i((()=>{$&&(clearTimeout($),$=null)})),O.value=JSON.parse(localStorage.getItem("movieSearchHistory")||"[]"),i((()=>{b.setSearchKeyword(x.value)})),(e,l)=>(k(),o("div",U,[t(a)?(k(),n(R,{key:0})):c("",!0),u("main",A,[u("div",E,[u("div",{id:"movie-wrapper",class:v(["w-full max-w-screen-xl m-auto",[t(a)?"p-2":"p-4"]])},[u("div",G,[u("div",Q,[u("div",V,[u("div",W,[r(t(L),{value:x.value,"onUpdate:value":l[1]||(l[1]=e=>x.value=e),type:"text",placeholder:"请输入影视名称关键字",clearable:"",loading:z.value,onKeyup:l[2]||(l[2]=p((e=>_e()),["enter"])),onFocus:B,onBlur:F},{suffix:d((()=>[r(t(K),{disabled:z.value,secondary:"",onClick:l[0]||(l[0]=e=>_e())},{icon:d((()=>[r(t(T),{icon:t(H).nav.search,class:"search-icon"},null,8,["icon"])])),_:1},8,["disabled"])])),_:1},8,["value","loading"])]),m(u("div",{class:"search-suggestions",onMouseenter:ye,onMouseleave:he},[O.value.length>0?(k(),o("div",X,[u("div",Y,[Z,u("span",{class:"clear-history",onClick:y(ge,["stop"])},"清空",8,ee)]),u("div",ae,[u("div",le,[(k(!0),o(h,null,_(O.value,((e,a)=>(k(),o("div",{key:`history-${a}`,class:"history-item",onClick:a=>_e(e)},[u("span",ie,w(e),1),u("span",{class:"delete-icon",onClick:y((e=>function(e){q.value=!0,O.value.splice(e,1),localStorage.setItem("movieSearchHistory",JSON.stringify(O.value)),setTimeout((()=>{q.value=!1}),300)}(a)),["stop","prevent"])},"×",8,oe)],8,se)))),128))])])])):c("",!0),u("div",te,[ne,u("div",ce,[(k(!0),o(h,null,_(N.value,((e,a)=>(k(),o("div",{key:`hot-${a}`,class:"suggestion-item",onClick:a=>_e(e.text)},[u("span",{class:v(["hot-rank",{"top-3":a<3}])},w(a+1),3),u("span",ve,w(e.text),1),e.tag?(k(),o("span",{key:0,class:v(["hot-tag",be(e.tag)])},w(e.tag),3)):c("",!0)],8,ue)))),128))])])],544),[[f,P.value]])])]),u("div",re,[(k(!0),o(h,null,_(t(C),(e=>(k(),o("div",{key:e.vod_id,class:"movie-card",onClick:a=>t(g).push(`/movie/movie-detail/${e.vod_id}`)},[u("div",pe,[r(t(J),{lazy:"",src:e.vod_pic,alt:e.vod_name,"preview-disabled":"","object-fit":"cover","intersection-observer-options":{root:"#scrollRef",rootMargin:"200px 0px",threshold:.1}},null,8,["src","alt","intersection-observer-options"])]),u("div",me,[u("h3",null,w(e.vod_name),1),u("span",fe,w(e.type_name),1)])],8,de)))),128))])])],2)])])]))}}),[["__scopeId","data-v-ec535c8b"]]),he=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),_e=e=>(g("data-v-c3fb3696"),e=e(),b(),e),ge={class:"flex flex-col w-full h-full"},be={class:"flex-1 overflow-hidden"},ke={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},we={class:"movie-detail-container"},Se={key:0,class:"player-wrapper"},xe=["src"],Ce={key:1,class:"info-section"},ze={class:"movie-header"},Me={class:"movie-cover-wrapper"},Te={class:"movie-info"},je={class:"info-item"},Oe=_e((()=>u("span",{class:"label"},"类型：",-1))),He={class:"info-item"},Re=_e((()=>u("span",{class:"label"},"导演：",-1))),Ie={class:"info-item"},Ke=_e((()=>u("span",{class:"label"},"主演：",-1))),Le={class:"info-items"},Je={class:"info-item"},Ne=_e((()=>u("span",{class:"label"},"地区：",-1))),Pe={class:"info-item"},$e=_e((()=>u("span",{class:"label"},"语言：",-1))),qe={class:"info-item"},Be=_e((()=>u("span",{class:"label"},"状态：",-1))),De={class:"info-item"},Fe=_e((()=>u("span",{class:"label"},"简介：",-1))),Ue=["innerHTML"],Ae={class:"info-item"},Ee=_e((()=>u("span",{class:"label"},"地区：",-1))),Ge={class:"info-item"},Qe=_e((()=>u("span",{class:"label"},"语言：",-1))),Ve={class:"info-item"},We=_e((()=>u("span",{class:"label"},"状态：",-1))),Xe={class:"info-item"},Ye=_e((()=>u("span",{class:"label"},"简介：",-1))),Ze=["innerHTML"],ea={key:2,class:"expand-more"},aa={key:2,class:"episodes-section"},la={class:"pagination-wrapper"},sa=I(a({__name:"MovieDetail",setup(e){const{isMobile:a}=M(),i=C(),p=l(!0),m=l(null),f=l(""),y=l(0),g=l(!1),b=l({page:1,pageSize:20,itemCount:0}),S=s((()=>{var e;if(!(null==(e=m.value)?void 0:e.vod_play_urls))return[];const a=(b.value.page-1)*b.value.pageSize,l=a+b.value.pageSize;return m.value.vod_play_urls.slice(a,l)}));function T(e){b.value.page=e,window.scrollTo({top:0,behavior:"smooth"})}return x((()=>{!async function(){try{const e=await O(i.params.id);0===e.code&&e.data.length>0&&(m.value=e.data[0],b.value.itemCount=m.value.vod_play_urls.length,m.value.vod_play_urls.length>0&&(f.value=m.value.vod_play_urls[0].play_url,y.value=0))}catch(e){}finally{p.value=!1}}()})),(e,l)=>{var s;return k(),o("div",ge,[t(a)?(k(),n(R,{key:0})):c("",!0),u("main",be,[u("div",ke,[u("div",we,[f.value?(k(),o("div",Se,[u("video",{src:f.value,controls:"",autoplay:"",class:"video-player"},null,8,xe)])):c("",!0),m.value?(k(),o("div",Ce,[r(t(P),null,{default:d((()=>[u("div",ze,[u("div",Me,[r(t(J),{src:m.value.vod_pic,alt:m.value.vod_name,class:"movie-cover","preview-disabled":"","object-fit":"cover"},null,8,["src","alt"])]),u("div",Te,[u("h1",null,w(m.value.vod_name),1),r(t(N),{vertical:"",size:"small"},{default:d((()=>[u("div",je,[Oe,u("span",null,w(m.value.type_name),1)]),u("div",He,[Re,u("span",null,w(m.value.vod_director),1)]),u("div",Ie,[Ke,u("span",null,w(m.value.vod_actor),1)]),t(a)?(k(),o("div",{key:0,class:v(["expandable-content",{collapsed:!g.value}])},[u("div",Le,[u("div",Je,[Ne,u("span",null,w(m.value.vod_area),1)]),u("div",Pe,[$e,u("span",null,w(m.value.vod_lang),1)]),u("div",qe,[Be,u("span",null,w(m.value.vod_remarks),1)]),u("div",De,[Fe,u("div",{class:"movie-desc",innerHTML:m.value.vod_content},null,8,Ue)])])],2)):(k(),o(h,{key:1},[u("div",Ae,[Ee,u("span",null,w(m.value.vod_area),1)]),u("div",Ge,[Qe,u("span",null,w(m.value.vod_lang),1)]),u("div",Ve,[We,u("span",null,w(m.value.vod_remarks),1)]),u("div",Xe,[Ye,u("div",{class:"movie-desc",innerHTML:m.value.vod_content},null,8,Ze)])],64)),t(a)?(k(),o("div",ea,[r(t(K),{text:"",onClick:l[0]||(l[0]=e=>g.value=!g.value)},{default:d((()=>[z(w(g.value?"收起":"展开更多"),1)])),_:1})])):c("",!0)])),_:1})])])])),_:1})])):c("",!0),(null==(s=m.value)?void 0:s.vod_play_urls.length)?(k(),o("div",aa,[r(t(P),{title:"剧集列表"},{default:d((()=>[r(t($),{cols:t(a)?4:8,"x-gap":8,"y-gap":8},{default:d((()=>[(k(!0),o(h,null,_(t(S),((e,a)=>(k(),n(t(q),{key:e.play_id},{default:d((()=>[r(t(K),{block:"",type:y.value===(b.value.page-1)*b.value.pageSize+a?"primary":"default",onClick:l=>function(e,a){f.value=e,y.value=a}(e.play_url,(b.value.page-1)*b.value.pageSize+a)},{default:d((()=>[z(w(e.play_num),1)])),_:2},1032,["type","onClick"])])),_:2},1024)))),128))])),_:1},8,["cols"]),u("div",la,[r(t(B),{page:b.value.page,"onUpdate:page":[l[1]||(l[1]=e=>b.value.page=e),T],size:t(a)?"small":"medium","item-count":b.value.itemCount,"page-size":b.value.pageSize,"show-quick-jumper":""},null,8,["page","size","item-count","page-size"])])])),_:1})])):c("",!0)])])])])}}}),[["__scopeId","data-v-c3fb3696"]]),ia=Object.freeze(Object.defineProperty({__proto__:null,default:sa},Symbol.toStringTag,{value:"Module"}));export{he as M,ia as a};
