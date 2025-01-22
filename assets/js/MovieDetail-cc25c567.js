import{d as T,u as E,m as r,v as H,o as V,c as d,a,b as w,e as f,f as e,j as _,x as u,ar as j,ai as F,i as n,N as P,t,as as $,n as G,F as x,D as C,A as N,ae as z,r as R,C as U,p as q,g as A,k as J}from"./main-6dd4637f.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-1ea3bc0f.js";import{N as O,a as Q}from"./Grid-3ad5dc0a.js";const i=h=>(q("data-v-c3fb3696"),h=h(),A(),h),W={class:"flex flex-col w-full h-full"},X={class:"flex-1 overflow-hidden"},Y={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},Z={class:"movie-detail-container"},ee={key:0,class:"player-wrapper"},se=["src"],ae={key:1,class:"info-section"},le={class:"movie-header"},oe={class:"movie-cover-wrapper"},te={class:"movie-info"},ie={class:"info-item"},ne=i(()=>e("span",{class:"label"},"类型：",-1)),ce={class:"info-item"},de=i(()=>e("span",{class:"label"},"导演：",-1)),_e={class:"info-item"},ue=i(()=>e("span",{class:"label"},"主演：",-1)),ve={class:"info-items"},re={class:"info-item"},pe=i(()=>e("span",{class:"label"},"地区：",-1)),me={class:"info-item"},fe=i(()=>e("span",{class:"label"},"语言：",-1)),he={class:"info-item"},ge=i(()=>e("span",{class:"label"},"状态：",-1)),ye={class:"info-item"},be=i(()=>e("span",{class:"label"},"简介：",-1)),ke=["innerHTML"],we={class:"info-item"},xe=i(()=>e("span",{class:"label"},"地区：",-1)),Ce={class:"info-item"},Ne=i(()=>e("span",{class:"label"},"语言：",-1)),ze={class:"info-item"},Me=i(()=>e("span",{class:"label"},"状态：",-1)),Se={class:"info-item"},De=i(()=>e("span",{class:"label"},"简介：",-1)),Be=["innerHTML"],Ie={key:2,class:"expand-more"},Le={key:2,class:"episodes-section"},Te={class:"pagination-wrapper"},Ee=T({__name:"MovieDetail",setup(h){const{isMobile:p}=E(),M=F(),S=r(!0),s=r(null),g=r(""),b=r(0),y=r(!1),l=r({page:1,pageSize:20,itemCount:0}),D=H(()=>{var m;if(!((m=s.value)!=null&&m.vod_play_urls))return[];const o=(l.value.page-1)*l.value.pageSize,c=o+l.value.pageSize;return s.value.vod_play_urls.slice(o,c)});function B(o){l.value.page=o,window.scrollTo({top:0,behavior:"smooth"})}async function I(){try{const o=await j(M.params.id);o.code===0&&o.data.length>0&&(s.value=o.data[0],l.value.itemCount=s.value.vod_play_urls.length,s.value.vod_play_urls.length>0&&(g.value=s.value.vod_play_urls[0].play_url,b.value=0))}catch(o){console.error("Failed to fetch movie detail:",o)}finally{S.value=!1}}function L(o,c){g.value=o,b.value=c}return V(()=>{I()}),(o,c)=>{var m;return n(),d("div",W,[a(p)?(n(),w(K,{key:0})):f("",!0),e("main",X,[e("div",Y,[e("div",Z,[g.value?(n(),d("div",ee,[e("video",{src:g.value,controls:"",autoplay:"",class:"video-player"},null,8,se)])):f("",!0),s.value?(n(),d("div",ae,[_(a(z),null,{default:u(()=>[e("div",le,[e("div",oe,[_(a(P),{src:s.value.vod_pic,alt:s.value.vod_name,class:"movie-cover","preview-disabled":"","object-fit":"cover"},null,8,["src","alt"])]),e("div",te,[e("h1",null,t(s.value.vod_name),1),_(a($),{vertical:"",size:"small"},{default:u(()=>[e("div",ie,[ne,e("span",null,t(s.value.type_name),1)]),e("div",ce,[de,e("span",null,t(s.value.vod_director),1)]),e("div",_e,[ue,e("span",null,t(s.value.vod_actor),1)]),a(p)?(n(),d("div",{key:0,class:G(["expandable-content",{collapsed:!y.value}])},[e("div",ve,[e("div",re,[pe,e("span",null,t(s.value.vod_area),1)]),e("div",me,[fe,e("span",null,t(s.value.vod_lang),1)]),e("div",he,[ge,e("span",null,t(s.value.vod_remarks),1)]),e("div",ye,[be,e("div",{class:"movie-desc",innerHTML:s.value.vod_content},null,8,ke)])])],2)):(n(),d(x,{key:1},[e("div",we,[xe,e("span",null,t(s.value.vod_area),1)]),e("div",Ce,[Ne,e("span",null,t(s.value.vod_lang),1)]),e("div",ze,[Me,e("span",null,t(s.value.vod_remarks),1)]),e("div",Se,[De,e("div",{class:"movie-desc",innerHTML:s.value.vod_content},null,8,Be)])],64)),a(p)?(n(),d("div",Ie,[_(a(C),{text:"",onClick:c[0]||(c[0]=v=>y.value=!y.value)},{default:u(()=>[N(t(y.value?"收起":"展开更多"),1)]),_:1})])):f("",!0)]),_:1})])])]),_:1})])):f("",!0),(m=s.value)!=null&&m.vod_play_urls.length?(n(),d("div",Le,[_(a(z),{title:"剧集列表"},{default:u(()=>[_(a(O),{cols:a(p)?4:8,"x-gap":8,"y-gap":8},{default:u(()=>[(n(!0),d(x,null,R(a(D),(v,k)=>(n(),w(a(Q),{key:v.play_id},{default:u(()=>[_(a(C),{block:"",type:b.value===(l.value.page-1)*l.value.pageSize+k?"primary":"default",onClick:He=>L(v.play_url,(l.value.page-1)*l.value.pageSize+k)},{default:u(()=>[N(t(v.play_num),1)]),_:2},1032,["type","onClick"])]),_:2},1024))),128))]),_:1},8,["cols"]),e("div",Te,[_(a(U),{page:l.value.page,"onUpdate:page":[c[1]||(c[1]=v=>l.value.page=v),B],size:a(p)?"small":"medium","item-count":l.value.itemCount,"page-size":l.value.pageSize,"show-quick-jumper":""},null,8,["page","size","item-count","page-size"])])]),_:1})])):f("",!0)])])])])}}});const Pe=J(Ee,[["__scopeId","data-v-c3fb3696"]]);export{Pe as default};
