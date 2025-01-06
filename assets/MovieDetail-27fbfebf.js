import{d as T,u as E,m as r,s as H,o as V,c as d,a,b as w,e as h,f as e,j as _,w as u,an as j,ao as F,i,t,ap as P,n as $,F as z,B as N,z as x,ac as C,r as G,A as R,p as U,g as q,k as A}from"./index-bf05176f.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-c8943c5d.js";import{N as K,a as O}from"./Grid-7ed5c6ee.js";import{N as Q}from"./Image-f6b17d90.js";const n=f=>(U("data-v-bc760b07"),f=f(),q(),f),W={class:"flex flex-col w-full h-full"},X={class:"flex-1 overflow-hidden"},Y={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},Z={class:"movie-detail-container"},ee={key:0,class:"player-wrapper"},se=["src"],ae={key:1,class:"info-section"},le={class:"movie-header"},oe={class:"movie-cover-wrapper"},te={class:"movie-info"},ne={class:"info-item"},ie=n(()=>e("span",{class:"label"},"类型：",-1)),ce={class:"info-item"},de=n(()=>e("span",{class:"label"},"导演：",-1)),_e={class:"info-item"},ue=n(()=>e("span",{class:"label"},"主演：",-1)),ve={class:"info-items"},re={class:"info-item"},pe=n(()=>e("span",{class:"label"},"地区：",-1)),me={class:"info-item"},he=n(()=>e("span",{class:"label"},"语言：",-1)),fe={class:"info-item"},ge=n(()=>e("span",{class:"label"},"状态：",-1)),ye={class:"info-item"},be=n(()=>e("span",{class:"label"},"简介：",-1)),ke=["innerHTML"],we={class:"info-item"},ze=n(()=>e("span",{class:"label"},"地区：",-1)),Ne={class:"info-item"},xe=n(()=>e("span",{class:"label"},"语言：",-1)),Ce={class:"info-item"},Me=n(()=>e("span",{class:"label"},"状态：",-1)),Se={class:"info-item"},Be=n(()=>e("span",{class:"label"},"简介：",-1)),De=["innerHTML"],Ie={key:2,class:"expand-more"},Le={key:2,class:"episodes-section"},Te={class:"pagination-wrapper"},Ee=T({__name:"MovieDetail",setup(f){const{isMobile:p}=E(),M=F(),S=r(!0),s=r(null),g=r(""),b=r(0),y=r(!1),l=r({page:1,pageSize:20,itemCount:0}),B=H(()=>{var m;if(!((m=s.value)!=null&&m.vod_play_urls))return[];const o=(l.value.page-1)*l.value.pageSize,c=o+l.value.pageSize;return s.value.vod_play_urls.slice(o,c)});function D(o){l.value.page=o,window.scrollTo({top:0,behavior:"smooth"})}async function I(){try{const o=await j(M.params.id);o.code===0&&o.data.length>0&&(s.value=o.data[0],l.value.itemCount=s.value.vod_play_urls.length,s.value.vod_play_urls.length>0&&(g.value=s.value.vod_play_urls[0].play_url,b.value=0))}catch(o){console.error("Failed to fetch movie detail:",o)}finally{S.value=!1}}function L(o,c){g.value=o,b.value=c}return V(()=>{I()}),(o,c)=>{var m;return i(),d("div",W,[a(p)?(i(),w(J,{key:0})):h("",!0),e("main",X,[e("div",Y,[e("div",Z,[g.value?(i(),d("div",ee,[e("video",{src:g.value,controls:"",autoplay:"",class:"video-player"},null,8,se)])):h("",!0),s.value?(i(),d("div",ae,[_(a(C),null,{default:u(()=>[e("div",le,[e("div",oe,[_(a(Q),{src:s.value.vod_pic,alt:s.value.vod_name,class:"movie-cover","preview-disabled":"","object-fit":"cover"},null,8,["src","alt"])]),e("div",te,[e("h1",null,t(s.value.vod_name),1),_(a(P),{vertical:"",size:"small"},{default:u(()=>[e("div",ne,[ie,e("span",null,t(s.value.type_name),1)]),e("div",ce,[de,e("span",null,t(s.value.vod_director),1)]),e("div",_e,[ue,e("span",null,t(s.value.vod_actor),1)]),a(p)?(i(),d("div",{key:0,class:$(["expandable-content",{collapsed:!y.value}])},[e("div",ve,[e("div",re,[pe,e("span",null,t(s.value.vod_area),1)]),e("div",me,[he,e("span",null,t(s.value.vod_lang),1)]),e("div",fe,[ge,e("span",null,t(s.value.vod_remarks),1)]),e("div",ye,[be,e("div",{class:"movie-desc",innerHTML:s.value.vod_content},null,8,ke)])])],2)):(i(),d(z,{key:1},[e("div",we,[ze,e("span",null,t(s.value.vod_area),1)]),e("div",Ne,[xe,e("span",null,t(s.value.vod_lang),1)]),e("div",Ce,[Me,e("span",null,t(s.value.vod_remarks),1)]),e("div",Se,[Be,e("div",{class:"movie-desc",innerHTML:s.value.vod_content},null,8,De)])],64)),a(p)?(i(),d("div",Ie,[_(a(N),{text:"",onClick:c[0]||(c[0]=v=>y.value=!y.value)},{default:u(()=>[x(t(y.value?"收起":"展开更多"),1)]),_:1})])):h("",!0)]),_:1})])])]),_:1})])):h("",!0),(m=s.value)!=null&&m.vod_play_urls.length?(i(),d("div",Le,[_(a(C),{title:"剧集列表"},{default:u(()=>[_(a(K),{cols:a(p)?4:8,"x-gap":8,"y-gap":8},{default:u(()=>[(i(!0),d(z,null,G(a(B),(v,k)=>(i(),w(a(O),{key:v.play_id},{default:u(()=>[_(a(N),{block:"",type:b.value===(l.value.page-1)*l.value.pageSize+k?"primary":"default",onClick:He=>L(v.play_url,(l.value.page-1)*l.value.pageSize+k)},{default:u(()=>[x(t(v.play_num),1)]),_:2},1032,["type","onClick"])]),_:2},1024))),128))]),_:1},8,["cols"]),e("div",Te,[_(a(R),{page:l.value.page,"onUpdate:page":[c[1]||(c[1]=v=>l.value.page=v),D],size:a(p)?"small":"medium","item-count":l.value.itemCount,"page-size":l.value.pageSize,"show-quick-jumper":""},null,8,["page","size","item-count","page-size"])])]),_:1})])):h("",!0)])])])])}}});const $e=A(Ee,[["__scopeId","data-v-bc760b07"]]);export{$e as default};
