import{d as P,l as V,m as l,u as q,q as $,o as A,ah as E,v as F,c as p,a as s,b as W,e as C,f as t,n as k,F as O,r as T,j as m,ai as G,h as H,aj as J,i,x as y,z as K,A as Q,N as X,C as Y,k as Z}from"./index-7654caff.js";import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang-6abdcf4b.js";import{_ as ae}from"./R18Permission.vue_vue_type_script_setup_true_lang-cf0459a5.js";import{N as se}from"./Spin-48abfa58.js";import"./index-9f25338a.js";const te={class:"flex flex-col w-full h-full"},oe={class:"flex-1 overflow-hidden"},le={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},ne={class:"image_wrap"},re={class:"w-full max-w-screen-xl m-auto"},ie={class:"flex items-center justify-between space-x-2"},ce=P({__name:"ImageSetDetail",setup(ue){const b=V(),f=l(!1),N=b.token,{isMobile:o}=q(),c=$(),g=G(),I=H(),_=l([]),r=l(1),h=l(!1),v=l(0),D=l(""),S=l(!1),j="aibianse.pages.dev",z="cdn.aibianse.com";function M(e){if(!e)return"";try{return e.replace(j,z)}catch(n){return console.error("URL replace error:",n),e}}async function x(e,n){try{h.value=!0,_.value=[];const a=await J(e,n);D.value=a.data.name||"图片集",S.value=a.data.x_rated>0;const u=a.data.rows||[];if(!u.length){c.warning("没有找到图片");return}v.value=Math.max(1,Math.ceil(a.data.total/a.data.page_size));const w=u.map(d=>({...d,url:d.url.startsWith("http")?M(d.url):`https://${d.url}`}));w.length?_.value=w:c.warning("处理后没有有效的图片")}catch(a){console.error("fetchImageCollection error:",a),c.error("查询失败！")}finally{h.value=!1}}async function U(e){r.value=e,await x(g.params.id,r.value)}A(async()=>{const e=g.params.id;if(!e){c.error("参数错误"),I.push("/image/search");return}await x(e,r.value),E(e)});const B=F(()=>{let e=["p-4"];return o.value&&(e=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),e});function L(){f.value=!0}function R(){f.value=!1}return(e,n)=>(i(),p("div",te,[s(o)?(i(),W(ee,{key:0})):C("",!0),t("main",oe,[t("div",le,[t("div",{id:"image-wrapper image-scroll-container",class:k(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[s(o)?"p-2":"p-4"]])},[t("div",ne,[(i(!0),p(O,null,T(_.value,(a,u)=>(i(),p("div",{key:u,class:"image_item"},[m(s(X),{lazy:"",src:a.url,"intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5}},{placeholder:y(()=>[t("div",{style:K({width:"100%",height:s(o)?"200px":"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[m(s(se),null,{default:y(()=>[Q(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src","intersection-observer-options"]),a.x_rated===20&&s(N)===void 0?(i(),p("div",{key:0,class:"unlock-button",onClick:L}," 点击解锁查看 ")):C("",!0)]))),128))])],2)]),m(ae,{visible:f.value,onCancel:R},null,8,["visible"])]),t("footer",{class:k(s(B))},[t("div",re,[t("div",ie,[m(s(Y),{page:r.value,"onUpdate:page":[n[0]||(n[0]=a=>r.value=a),U],"page-count":v.value,size:"large",simple:s(o),"page-slot":s(o)?void 0:5,"show-quick-jumper":!s(o)},null,8,["page","page-count","simple","page-slot","show-quick-jumper"])])])],2)]))}});const ge=Z(ce,[["__scopeId","data-v-4499eeb7"]]);export{ge as default};
