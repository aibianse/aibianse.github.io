import{d as a,v as e,E as s,e as l,n as o,u as t,c as i,q as n,p as r,H as u,F as c,J as p,a as v,A as d,B as m,o as f,w as g,K as h,x as w}from"./vue-vendor-61cc29ec.js";import{c as x,b as y,a as b}from"./image-modules-34a440f9.js";import{c as k,e as j,B as _}from"./common-429a40e1.js";import{e as q,r as C,q as M,s as z}from"./naive-ui-b24daaf4.js";import"./utils-f1e0c1c0.js";import"./layout-ba237d8b.js";const B={class:"flex flex-col w-full h-full"},I={class:"flex-1 overflow-hidden"},A={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},D={class:"manga_wrap"},E={class:"w-full max-w-screen-xl m-auto"},F={class:"flex items-center justify-between space-x-2"},H=b(a({__name:"MangaDetail",setup(a){const b=k(),H=e(!1),J=b.token,{isMobile:K}=j(),R=q(),U=d(),G=m(),L=e([]),N=e(1),O=e(!1),P=e(0),Q=e(""),S=e(10),T=a=>a.replace("https://aibianse.pages.dev","https://oss.lookimage.live");async function V(a,e){try{O.value=!0,L.value=[];const s=await _(a,e);Q.value=s.data.chapter_name||"图片集";const l=s.data.rows||[];if(!l.length)return void R.warning("没有找到图片");S.value=s.data.x_rated,P.value=1,L.value=l.map(T)}catch(s){R.error("查询失败！")}finally{O.value=!1}}async function W(a){N.value=a,await V(U.params.id,N.value)}s((async()=>{const a=U.params.id;if(!a)return R.error("参数错误"),void G.push("/manga/search");await V(a,N.value)}));const X=l((()=>{let a=["p-4"];return K.value&&(a=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),a}));function Y(){H.value=!0}function Z(){H.value=!1}return(a,e)=>(f(),o("div",B,[t(K)?(f(),i(y,{key:0})):n("",!0),r("main",I,[r("div",A,[r("div",{id:"manga-wrapper manga-scroll-container",class:u(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[t(K)?"p-2":"p-4"]])},[r("div",D,[(f(!0),o(c,null,p(L.value,((a,e)=>(f(),o("div",{key:e,class:"manga_item"},[v(t(M),{lazy:"",src:a,"intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5}},{placeholder:g((()=>[r("div",{style:h({width:"100%",height:t(K)?"200px":"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[v(t(C),null,{default:g((()=>[w(" 知道你很急，但是你先别急... ")])),_:1})],4)])),_:2},1032,["src","intersection-observer-options"]),20===S.value&&void 0===t(J)?(f(),o("div",{key:0,class:"unlock-button",onClick:Y}," 点击解锁查看 ")):n("",!0)])))),128))])],2)]),v(x,{visible:H.value,onCancel:Z},null,8,["visible"])]),r("footer",{class:u(t(X))},[r("div",E,[r("div",F,[v(t(z),{page:N.value,"onUpdate:page":[e[0]||(e[0]=a=>N.value=a),W],"page-count":P.value,size:"large",simple:t(K),"page-slot":t(K)?void 0:5,"show-quick-jumper":!t(K)},null,8,["page","page-count","simple","page-slot","show-quick-jumper"])])])],2)]))}}),[["__scopeId","data-v-aac1558f"]]);export{H as default};
