import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-86674ae9.js";import{d as te,l as se,m as n,u as oe,q as le,s as ne,o as ie,v as re,w as ce,c as h,a,b as _,e as x,f as i,n as P,j as l,x as o,F as M,r as j,y as ue,T as de,i as r,z,A as d,N as E,B as pe,_ as he,I as ve,C as w,D as ge,E as fe,G as me,k as _e}from"./index-17a36ada.js";import{_ as xe}from"./R18Permission.vue_vue_type_script_setup_true_lang-70e57dfc.js";import{N as S}from"./Image-0f8f489f.js";import{N as we,a as ye}from"./Grid-cc704410.js";import{N as T}from"./Spin-2bcffe5e.js";const ke={class:"flex flex-col w-full h-full"},be={class:"flex-1 overflow-hidden"},Ce={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},Ne={class:"image_wrap"},$e={key:2,class:"group_image_text"},Ie={class:"w-full max-w-screen-xl m-auto"},Ue={class:"flex items-center justify-between space-x-2"},Me={class:"flex justify-between items-center w-full"},je={class:"space-x-2"},ze={class:"space-x-2"},Se=te({__name:"ImageTag",setup(Te){const F=se(),C=n(!1),B=F.token,{isMobile:v}=oe(),g=le(),A=new AbortController,N=n(!1),$=n([]),y=n(1),L=n(0),R=n(!0),m=n(!1),k=n(!1),I=n([]),V=n(""),p=n([]),f=n([]),q=s=>s.replace("aibianse.pages.dev","cdn.aibianse.com"),D=async(s,t)=>{if(s.length===0){g.error("标签参数为空");return}try{N.value=!0,$.value=[];const e=p.value.join(","),c=await ue(e,t,{signal:A.signal});$.value=c.data.rows.map(U=>({...U,url:q(U.url)})),L.value=Math.ceil(c.data.total/20),R.value=!0}catch(e){if(e.name==="AbortError"){console.log("Request was cancelled");return}g.error("获取图片失败，请重试"),console.error(e)}finally{N.value=!1}},G=async()=>{f.value=[];try{const t=(await de()).data.rows;for(const e in t)f.value.push(t[e].name)}catch{g.error("查询标签失败，请刷新页面重试！")}},b=ne((s,t)=>{D(s,t)},300);ie(async()=>{await G(),p.value=f.value,await D(p.value,1)});function O(){m.value=!0,f.value.length===0&&G()}const u=n([]);function W(s){u.value=[],u.value=s}function H(){u.value.length>0&&(u.value=p.value),m.value=!1}function J(){u.value.length===0?g.error("查询的标签为空！"):(b(u.value,1),g.success("查询中，知道你很急，但你先别急..."),p.value=u.value,m.value=!1)}async function K(s){var t;try{I.value=[],k.value=!0;const e=await me(s);I.value=e.data.rows.map(c=>({...c,url:q(c.url)})),V.value=((t=e.data.rows[0])==null?void 0:t.name)||"详情"}catch{g.error("获取组图失败，请重试"),k.value=!1}}const Q=re(()=>{let s=["p-4"];return v.value&&(s=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),s});ce(()=>{N.value&&A.abort(),b.cancel()});function X(s){u.value=s?[...f.value]:[]}function Y(){u.value=[]}function Z(){C.value=!0}function ee(){C.value=!1}return(s,t)=>(r(),h("div",ke,[a(v)?(r(),_(ae,{key:0})):x("",!0),i("main",be,[i("div",Ce,[i("div",{id:"image-wrapper image-scroll-container",class:P(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[a(v)?"p-2":"p-4"]])},[i("div",Ne,[l(a(E),{show:k.value,"onUpdate:show":t[0]||(t[0]=e=>k.value=e),class:"custom-card",preset:"card",style:{width:"95%",maxWidth:"650px"},title:V.value,size:"huge",bordered:!1,segmented:{content:"soft",footer:"soft"}},{default:o(()=>[(r(!0),h(M,null,j(I.value,(e,c)=>(r(),_(a(S),{key:c,lazy:"",src:e.url},{placeholder:o(()=>[i("div",{style:z({width:`${e.width}px`,height:e.height<1e3?`${e.height*.3}px`:e.height>=1e3&&e.height<=2e3?`${e.height*.2}px`:`${e.height*.1}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[l(a(T),null,{default:o(()=>[d(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src"]))),128))]),_:1},8,["show","title"]),(r(!0),h(M,null,j($.value,(e,c)=>(r(),h("div",{key:c,class:"image_item"},[e.type===10?(r(),_(a(S),{key:0,lazy:"",src:e.url,"intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5}},{placeholder:o(()=>[i("div",{style:z({width:`${e.width}px`,height:e.height<1e3?`${e.height*.3}px`:e.height>=1e3&&e.height<=2e3?`${e.height*.2}px`:`${e.height*.1}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[l(a(T),null,{default:o(()=>[d(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src","intersection-observer-options"])):x("",!0),e.x_rated===20&&(a(B)===!1||a(B)===void 0)?(r(),h("div",{key:1,class:"unlock-button",onClick:Z}," 点击解锁查看 ")):x("",!0),e.type===20?(r(),h("div",$e," 组图 ")):x("",!0),e.type!==10?(r(),_(a(S),{key:3,lazy:"",src:e.url,"preview-disabled":"","intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5},onClick:U=>K(e.group_id)},{placeholder:o(()=>[i("div",{style:z({width:`${e.width}px`,height:e.height<1e3?`${e.height*.3}px`:e.height>=1e3&&e.height<=2e3?`${e.height*.2}px`:`${e.height*.1}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[l(a(T),null,{default:o(()=>[d(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src","intersection-observer-options","onClick"])):x("",!0)]))),128))])],2)]),l(xe,{visible:C.value,onCancel:ee},null,8,["visible"])]),i("footer",{class:P(a(Q))},[i("div",Ie,[i("div",Ue,[l(a(pe),{page:y.value,"onUpdate:page":[t[1]||(t[1]=e=>y.value=e),t[2]||(t[2]=e=>a(b)(p.value,y.value))],"page-count":L.value,size:"large",simple:a(v),"page-slot":a(v)?void 0:5,"show-quick-jumper":!a(v),"onUpdate:pageSize":t[3]||(t[3]=e=>a(b)(p.value,y.value))},null,8,["page","page-count","simple","page-slot","show-quick-jumper"]),l(a(w),{onClick:O},{default:o(()=>[l(a(he),{icon:a(ve).nav.search},null,8,["icon"]),d(" 标签筛选 ")]),_:1}),l(a(E),{show:m.value,"onUpdate:show":t[5]||(t[5]=e=>m.value=e),preset:"dialog",title:"选择标签","footer-style":{padding:"12px 24px"},style:{width:"90%","max-width":"600px"}},{action:o(()=>[i("div",Me,[i("div",je,[l(a(w),{onClick:t[4]||(t[4]=e=>X(!0))},{default:o(()=>[d(" 全选 ")]),_:1}),l(a(w),{onClick:Y},{default:o(()=>[d(" 清空 ")]),_:1})]),i("div",ze,[l(a(w),{onClick:H},{default:o(()=>[d(" 取消 ")]),_:1}),l(a(w),{type:"primary",onClick:J},{default:o(()=>[d(" 筛选 ")]),_:1})])])]),default:o(()=>[l(a(ge),{value:u.value,"onUpdate:value":W},{default:o(()=>[l(a(we),{"y-gap":8,cols:2},{default:o(()=>[(r(!0),h(M,null,j(f.value,(e,c)=>(r(),_(a(ye),{key:c},{default:o(()=>[l(a(fe),{value:e,label:e},null,8,["value","label"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),_:1},8,["show"])])])],2)]))}});const Ge=_e(Se,[["__scopeId","data-v-17bd66aa"]]);export{Ge as default};
