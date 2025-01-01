import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-482da42f.js";import{d as Q,u as X,k as Y,l as i,m as Z,q as ee,s as ae,v as te,c as f,a,b as _,e as b,f as n,n as D,h as l,w as o,F as $,r as M,x as se,T as oe,o as c,y as U,z as d,N as L,A as le,_ as ne,I as ie,B as x,C as re,D as ce,E as ue,j as de}from"./index-a53ea9c5.js";import{N as z}from"./Image-05b5ce37.js";import{N as pe,a as he}from"./Grid-30a85b1c.js";import{N as j}from"./Spin-48d9063d.js";const ge={class:"flex flex-col w-full h-full"},ve={class:"flex-1 overflow-hidden"},fe={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},me={class:"image_wrap"},_e={key:1,class:"group_image_text"},xe={class:"w-full max-w-screen-xl m-auto"},we={class:"flex items-center justify-between space-x-2"},ye={class:"flex justify-between items-center w-full"},ke={class:"space-x-2"},be={class:"space-x-2"},Ce=Q({__name:"ImageTag",setup(Ne){const{isMobile:p}=X(),h=Y(),T=new AbortController,C=i(!1),N=i([]),w=i(1),B=i(0),E=i(!0),m=i(!1),y=i(!1),I=i([]),S=i(""),g=i([]),v=i([]),V=s=>s.replace("aibianse.pages.dev","cdn.aibianse.com"),q=async(s,t)=>{if(s.length===0){h.error("标签参数为空");return}try{C.value=!0,N.value=[];const e=await se(s,t,{signal:T.signal});N.value=e.data.rows.map(r=>({...r,url:V(r.url)})),B.value=Math.ceil(e.data.total/20),E.value=!0}catch(e){if(e.name==="AbortError"){console.log("Request was cancelled");return}h.error("获取图片失败，请重试"),console.error(e)}finally{C.value=!1}},A=async()=>{v.value=[];try{const t=(await oe()).data.rows;for(const e in t)v.value.push(t[e].name)}catch{h.error("查询标签失败，请刷新页面重试！")}},k=Z((s,t)=>{q(s,t)},300);ee(async()=>{await A(),g.value=v.value,await q(g.value,1)});function F(){m.value=!0,v.value.length===0&&A()}const u=i([]);function G(s){u.value=[],u.value=s}function P(){u.value.length>0&&(u.value=g.value),m.value=!1}function R(){u.value.length===0?h.error("查询的标签为空！"):(k(u.value,1),h.success("查询中，知道你很急，但你先别急..."),g.value=u.value,m.value=!1)}async function O(s){var t;try{I.value=[],y.value=!0;const e=await ue(s);I.value=e.data.rows.map(r=>({...r,url:V(r.url)})),S.value=((t=e.data.rows[0])==null?void 0:t.name)||"详情"}catch{h.error("获取组图失败，请重试"),y.value=!1}}const W=ae(()=>{let s=["p-4"];return p.value&&(s=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),s});te(()=>{C.value&&T.abort(),k.cancel()});function H(s){u.value=s?[...v.value]:[]}function J(){u.value=[]}return(s,t)=>(c(),f("div",ge,[a(p)?(c(),_(K,{key:0})):b("",!0),n("main",ve,[n("div",fe,[n("div",{id:"image-wrapper image-scroll-container",class:D(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[a(p)?"p-2":"p-4"]])},[n("div",me,[l(a(L),{show:y.value,"onUpdate:show":t[0]||(t[0]=e=>y.value=e),class:"custom-card",preset:"card",style:{width:"95%",maxWidth:"650px"},title:S.value,size:"huge",bordered:!1,segmented:{content:"soft",footer:"soft"}},{default:o(()=>[(c(!0),f($,null,M(I.value,(e,r)=>(c(),_(a(z),{key:r,lazy:"",src:e.url},{placeholder:o(()=>[n("div",{style:U({width:`${e.width}px`,height:e.height<1e3?`${e.height*.3}px`:e.height>=1e3&&e.height<=2e3?`${e.height*.2}px`:`${e.height*.1}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[l(a(j),null,{default:o(()=>[d(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src"]))),128))]),_:1},8,["show","title"]),(c(!0),f($,null,M(N.value,(e,r)=>(c(),f("div",{key:r,class:"image_item"},[e.type===10?(c(),_(a(z),{key:0,lazy:"",src:e.url,"intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5}},{placeholder:o(()=>[n("div",{style:U({width:`${e.width}px`,height:e.height<1e3?`${e.height*.3}px`:e.height>=1e3&&e.height<=2e3?`${e.height*.2}px`:`${e.height*.1}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[l(a(j),null,{default:o(()=>[d(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src","intersection-observer-options"])):b("",!0),e.type===20?(c(),f("div",_e," 组图 ")):b("",!0),e.type!==10?(c(),_(a(z),{key:2,lazy:"",src:e.url,"preview-disabled":"","intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5},onClick:Ie=>O(e.group_id)},{placeholder:o(()=>[n("div",{style:U({width:`${e.width}px`,height:e.height<1e3?`${e.height*.3}px`:e.height>=1e3&&e.height<=2e3?`${e.height*.2}px`:`${e.height*.1}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[l(a(j),null,{default:o(()=>[d(" 知道你很急，但是你先别急... ")]),_:1})],4)]),_:2},1032,["src","intersection-observer-options","onClick"])):b("",!0)]))),128))])],2)])]),n("footer",{class:D(a(W))},[n("div",xe,[n("div",we,[l(a(le),{page:w.value,"onUpdate:page":[t[1]||(t[1]=e=>w.value=e),t[2]||(t[2]=e=>a(k)(g.value,w.value))],"page-count":B.value,size:"large",simple:a(p),"page-slot":a(p)?void 0:5,"show-quick-jumper":!a(p),"onUpdate:pageSize":t[3]||(t[3]=e=>a(k)(g.value,w.value))},null,8,["page","page-count","simple","page-slot","show-quick-jumper"]),l(a(x),{onClick:F},{default:o(()=>[l(a(ne),{icon:a(ie).nav.search},null,8,["icon"]),d(" 标签筛选 ")]),_:1}),l(a(L),{show:m.value,"onUpdate:show":t[5]||(t[5]=e=>m.value=e),preset:"dialog",title:"选择标签","footer-style":{padding:"12px 24px"},style:{width:"90%","max-width":"600px"}},{action:o(()=>[n("div",ye,[n("div",ke,[l(a(x),{onClick:t[4]||(t[4]=e=>H(!0))},{default:o(()=>[d(" 全选 ")]),_:1}),l(a(x),{onClick:J},{default:o(()=>[d(" 清空 ")]),_:1})]),n("div",be,[l(a(x),{onClick:P},{default:o(()=>[d(" 取消 ")]),_:1}),l(a(x),{type:"primary",onClick:R},{default:o(()=>[d(" 筛选 ")]),_:1})])])]),default:o(()=>[l(a(re),{value:u.value,"onUpdate:value":G},{default:o(()=>[l(a(pe),{"y-gap":8,cols:2},{default:o(()=>[(c(!0),f($,null,M(v.value,(e,r)=>(c(),_(a(he),{key:r},{default:o(()=>[l(a(ce),{value:e,label:e},null,8,["value","label"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),_:1},8,["show"])])])],2)]))}});const Te=de(Ce,[["__scopeId","data-v-7e9326b4"]]);export{Te as default};