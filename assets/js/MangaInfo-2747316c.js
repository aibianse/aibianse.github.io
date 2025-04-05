import{d as a,v as e,e as l,E as s,G as i,n,u as o,c as t,q as u,p as v,a as c,w as r,A as p,o as d,t as m,H as f,x as g,F as h,J as _,B as y,M as w,N as b}from"./vue-vendor-61cc29ec.js";import{e as k,A as z}from"./common-429a40e1.js";import{b as x,a as j}from"./image-modules-34a440f9.js";import{q as M,E as C,i as S,p as H,v as T,x as L,s as q}from"./naive-ui-b24daaf4.js";import"./utils-f1e0c1c0.js";import"./layout-ba237d8b.js";const A=a=>(w("data-v-5e802894"),a=a(),b(),a),E={class:"flex flex-col w-full h-full"},I={class:"flex-1 overflow-hidden"},B={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},F={class:"manga-detail-container"},G={key:0,class:"info-section"},J={class:"manga-header"},N={class:"manga-cover-wrapper"},R={class:"manga-info"},U={class:"info-item"},$=A((()=>v("span",{class:"label"},"类型：",-1))),D={class:"info-item"},K=A((()=>v("span",{class:"label"},"作者：",-1))),O={class:"info-item"},P=A((()=>v("span",{class:"label"},"更新时间：",-1))),Q={class:"info-items"},V={class:"info-item"},W=A((()=>v("span",{class:"label"},"简介：",-1))),X=["innerHTML"],Y={key:1,class:"info-item"},Z=A((()=>v("span",{class:"label"},"简介：",-1))),aa=["innerHTML"],ea={key:2,class:"expand-more"},la={key:1,class:"episodes-section"},sa={class:"pagination-wrapper"},ia=j(a({__name:"MangaInfo",setup(a){const w=y(),{isMobile:b}=k(),j=p(),A=e(!0),ia=e(null),na=e(0),oa=e(!1),ta=e({page:1,pageSize:20,itemCount:0}),ua=l((()=>{var a;if(!(null==(a=ia.value)?void 0:a.rows))return[];const e=(ta.value.page-1)*ta.value.pageSize,l=e+ta.value.pageSize;return ia.value.rows.slice(e,l)}));function va(a){ta.value.page=a,window.scrollTo({top:0,behavior:"smooth"})}return s((()=>{!async function(){try{const a=await z(j.params.id);0===a.code&&(ia.value=a.data,ta.value.itemCount=ia.value.rows.length)}catch(a){}finally{A.value=!1}}()})),i((()=>{})),(a,e)=>{var l;return d(),n("div",E,[o(b)?(d(),t(x,{key:0})):u("",!0),v("main",I,[v("div",B,[v("div",F,[ia.value?(d(),n("div",G,[c(o(H),null,{default:r((()=>[v("div",J,[v("div",N,[c(o(M),{src:ia.value.cover_image_url,alt:ia.value.name,class:"manga-cover","preview-disabled":"","object-fit":"cover"},null,8,["src","alt"])]),v("div",R,[v("h1",null,m(ia.value.name),1),c(o(C),{vertical:"",size:"small"},{default:r((()=>[v("div",U,[$,v("span",null,m(ia.value.type_name),1)]),v("div",D,[K,v("span",null,m(ia.value.author),1)]),v("div",O,[P,v("span",null,m(ia.value.update_time),1)]),o(b)?(d(),n("div",{key:0,class:f(["expandable-content",{collapsed:!oa.value}])},[v("div",Q,[v("div",V,[W,v("div",{class:"manga-desc",innerHTML:ia.value.description||"暂无简介"},null,8,X)])])],2)):(d(),n("div",Y,[Z,v("div",{class:"manga-desc",innerHTML:ia.value.description||"暂无简介"},null,8,aa)])),o(b)?(d(),n("div",ea,[c(o(S),{text:"",onClick:e[0]||(e[0]=a=>oa.value=!oa.value)},{default:r((()=>[g(m(oa.value?"收起":"展开更多"),1)])),_:1})])):u("",!0)])),_:1})])])])),_:1})])):u("",!0),(null==(l=ia.value)?void 0:l.rows.length)?(d(),n("div",la,[c(o(H),{title:"章节列表"},{default:r((()=>[c(o(T),{cols:o(b)?4:8,"x-gap":8,"y-gap":8},{default:r((()=>[(d(!0),n(h,null,_(o(ua),((a,e)=>(d(),t(o(L),{key:a.chapter_number},{default:r((()=>[c(o(S),{block:"",type:na.value===(ta.value.page-1)*ta.value.pageSize+e?"primary":"default",onClick:e=>{return l=a.chapter_id,ta.value.page,ta.value.pageSize,void w.push(`/manga/manga-detail/${l}`);var l}},{default:r((()=>[g(m(a.chapter_number),1)])),_:2},1032,["type","onClick"])])),_:2},1024)))),128))])),_:1},8,["cols"]),v("div",sa,[c(o(q),{page:ta.value.page,"onUpdate:page":[e[1]||(e[1]=a=>ta.value.page=a),va],size:o(b)?"small":"medium","item-count":ta.value.itemCount,"page-size":ta.value.pageSize,"show-quick-jumper":""},null,8,["page","size","item-count","page-size"])])])),_:1})])):u("",!0)])])])])}}}),[["__scopeId","data-v-5e802894"]]);export{ia as default};
