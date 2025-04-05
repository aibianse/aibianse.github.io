import{i as e,_ as a,a as l,b as t,u as o,c as s,d as i,e as r,t as n,T as u,g as c,f as d,s as v,h as p,j as m,k as h}from"./common-429a40e1.js";import{d as f}from"./utils-f1e0c1c0.js";import{e as g,n as y,o as w,p as b,h as x,i as _,l as k,k as C,m as j,q as z,r as $,s as I,t as S,v as T,w as U,x as E,y as M,z as R}from"./naive-ui-b24daaf4.js";import{z as P,d as A,v as B,o as O,n as q,a as D,w as F,u as K,x as Z,p as H,t as L,e as V,c as J,y as N,A as G,B as W,F as Q,C as X,D as Y,E as ee,G as ae,q as le,H as te,J as oe,K as se,L as ie,h as re,M as ne,N as ue}from"./vue-vendor-61cc29ec.js";const ce={nav:{home:"material-symbols-light:family-home-rounded",search:"material-symbols-light:search-rounded",write:"material-symbols-light:edit-rounded",image:"material-symbols-light:image-rounded",read:"material-symbols-light:description-rounded",manga:"material-symbols-light:manga-rounded",book:"material-symbols-light:book-rounded",more:"material-symbols-light:apps",movie:"material-symbols-light:movie-rounded"},action:{add:"material-symbols-light:add-rounded",edit:"material-symbols-light:edit-rounded",delete:"material-symbols-light:delete-rounded",save:"material-symbols-light:save-rounded",cancel:"material-symbols-light:close-rounded",refresh:"material-symbols-light:refresh-rounded",upload:"material-symbols-light:upload-rounded",download:"material-symbols-light:download-rounded",top:"material-symbols-light:keyboard-arrow-up-rounded"},status:{success:"material-symbols-light:check-circle-rounded",warning:"material-symbols-light:warning-rounded",error:"material-symbols-light:error-rounded",info:"material-symbols-light:info-rounded"},media:{play:"material-symbols-light:play-circle-rounded",pause:"material-symbols-light:pause-circle-rounded",stop:"material-symbols-light:stop-circle-rounded",next:"material-symbols-light:skip-next-rounded",previous:"material-symbols-light:skip-previous-rounded",playFilled:"material-symbols-light:play-arrow-rounded",pauseFilled:"material-symbols-light:pause-rounded",volumeUp:"material-symbols-light:volume-up-rounded",volumeDown:"material-symbols-light:volume-down-rounded",mute:"material-symbols-light:volume-off-rounded",fullscreen:"material-symbols-light:fullscreen-rounded",fullscreenExit:"material-symbols-light:fullscreen-exit-rounded",forward5:"material-symbols-light:forward-5-rounded",replay5:"material-symbols-light:replay-5-rounded"},like:{outline:"material-symbols-light:favorite-outline-rounded",filled:"material-symbols-light:favorite-rounded"}};let de=null,ve=null;async function pe(){try{if(ve)return ve;de||(de=P.load());const e=await de,a=await e.get();return ve=a.visitorId,a.visitorId}catch(e){throw new Error("获取访问者指纹失败")}}const me={class:"space-y-4"},he=H("br",null,null,-1),fe=H("br",null,null,-1),ge={class:"space-y-2"},ye={class:"flex items-center"},we={class:"flex-1"},be={class:"flex items-center"},xe={class:"flex-1"},_e={class:"flex items-center"},ke={class:"flex-1"},Ce={class:"space-y-4"},je=A({__name:"InviteInfo",props:{visible:{type:Boolean}},setup(o){const s=g(),i=window.location.origin,r="/#/invite/",n=B({email:"",invite_code:"",invite_url:"",invite_count:0,use_count:0,remaining_count:0,start_date:"",end_date:""}),u=B(!1),c=B(!1),d=B(""),v=()=>d.value?!!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(d.value)||(s.error("请输入正确的邮箱格式"),!1):(s.error("请输入绑定邮箱"),!1);async function p(e){try{await async function(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0;const a=document.createElement("textarea");a.setAttribute("readonly","readonly"),a.value=e,document.body.appendChild(a),a.select();const l=document.execCommand("copy");return document.body.removeChild(a),l}catch(a){return!1}}(e),s.success("复制成功")}catch{s.error("复制失败")}}return(o,m)=>(O(),q("div",me,[D(K(w),{class:"notice-alert",title:"兑换规则",type:"error"},{icon:F((()=>[D(K(y),null,{default:F((()=>[D(K(a),{icon:"mingcute:announcement-line"})])),_:1})])),default:F((()=>[Z(" 10次邀请次数兑换30天有效期。"),he,Z(" 如是续期，则自动在现有效期基础上延长。"),fe])),_:1}),D(K(b),{title:"邀请信息"},{default:F((()=>[H("div",ge,[H("div",ye,[H("span",we,"绑定邮箱："+L(n.value.email?n.value.email:"--"),1)]),H("div",be,[H("span",xe,"邀请链接："+L(n.value.invite_url?n.value.invite_url:"--"),1),D(K(a),{class:"cursor-pointer hover:text-primary",icon:"ri:file-copy-2-line",onClick:m[0]||(m[0]=e=>p(n.value.invite_url))})]),H("div",_e,[H("span",ke,"邀请验证码："+L(n.value.invite_code?n.value.invite_code:"--"),1),D(K(a),{class:"cursor-pointer hover:text-primary",icon:"ri:file-copy-2-line",onClick:m[1]||(m[1]=e=>p(n.value.invite_code))})]),H("div",null,"邀请总次数："+L(n.value.invite_count),1),H("div",null,"已使用次数："+L(n.value.use_count),1),H("div",null,"剩余次数："+L(n.value.remaining_count),1),H("div",null,"开始时间："+L(n.value.start_date?n.value.start_date:"未激活，暂无生效时间"),1),H("div",null,"结束时间："+L(n.value.end_date?n.value.end_date:"未激活，暂无生效时间"),1)])])),_:1}),D(K(b),null,{default:F((()=>[H("div",Ce,[D(K(x),{value:d.value,"onUpdate:value":m[2]||(m[2]=e=>d.value=e),type:"text",style:{width:"100%"},placeholder:"请输入绑定邮箱",maxlength:50},null,8,["value"]),D(K(_),{block:"",onClick:m[3]||(m[3]=e=>async function(){if(v())try{const e=await l(d.value);s.success("获取成功"),n.value=e.data,n.value.invite_url=`${i}${r}${n.value.invite_code}`}catch(e){s.error(e.msg??"获取失败，请稍后再试")}}())},{default:F((()=>[Z(" 查看邀请信息 ")])),_:1}),D(K(_),{block:"",loading:u.value,onClick:m[4]||(m[4]=a=>async function(){if(v())try{u.value=!0;const a=await async function(a){const l=await pe();return await e(l,a)}(d.value);s.success("生成成功"),n.value=a.data,n.value.invite_url=`${i}${r}${n.value.invite_code}`,u.value=!1}catch(a){s.error(a.msg??"生成失败，请稍后再试"),u.value=!1}}())},{default:F((()=>[Z(" 生成邀请链接 ")])),_:1},8,["loading"]),D(K(_),{block:"",loading:c.value,onClick:m[5]||(m[5]=e=>async function(){if(v())try{c.value=!0;const e=await t(d.value);n.value=e.data,n.value.invite_url=`${i}${r}${n.value.invite_code}`,c.value=!1,s.success("兑换成功")}catch(e){s.error(e.msg??"兑换失败，请稍后再试"),c.value=!1}}())},{default:F((()=>[Z(" 兑换使用时间 ")])),_:1},8,["loading"])])])),_:1})]))}}),ze={class:"space-y-4"},$e=A({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:a}){const l=e,t=V({get:()=>l.visible,set:e=>a("update:visible",e)});return(e,a)=>(O(),J(K(j),{show:K(t),"onUpdate:show":a[0]||(a[0]=e=>N(t)?t.value=e:null),style:{width:"90%","max-width":"900px"},preset:"card"},{default:F((()=>[H("div",ze,[D(K(C),{type:"segment"},{default:F((()=>[D(K(k),{name:"local",tab:e.$t("store.local")},{default:F((()=>[D(je,{visible:K(t)},null,8,["visible"])])),_:1},8,["tab"])])),_:1})])])),_:1},8,["show"]))}}),Ie=(e,a)=>{const l=e.__vccOpts||e;for(const[t,o]of a)l[t]=o;return l},Se={class:"sticky top-0 left-0 right-0 z-30 border-b dark:border-neutral-800 bg-white/80 dark:bg-black/20 backdrop-blur"},Te={class:"relative flex items-center justify-between min-w-0 overflow-hidden h-14"},Ue={class:"flex items-center"},Ee={key:0},Me={key:1},Re=A({__name:"index",setup(e){const l=o(),t=G(),s=W(),i=V((()=>l.siderCollapsed)),r=V((()=>"/"===t.path));function n(){const e=document.querySelector("#scrollRef");e&&X((()=>e.scrollTop=0))}return(e,t)=>(O(),q("header",Se,[H("div",Te,[H("div",Ue,[H("button",{class:"flex items-center justify-center w-11 h-11",onClick:t[0]||(t[0]=e=>K(r)?void l.setSiderCollapsed(!i.value):void s.back())},[K(r)?(O(),q(Q,{key:0},[K(i)?(O(),J(K(a),{key:0,class:"text-2xl",icon:"ri:align-justify"})):(O(),J(K(a),{key:1,class:"text-2xl",icon:"ri:align-right"}))],64)):(O(),J(K(a),{key:1,class:"text-2xl",icon:"ri:arrow-left-s-line"}))])]),H("h1",{class:"flex-1 px-4 pr-6 overflow-hidden cursor-pointer select-none text-ellipsis whitespace-nowrap",onDblclick:n},[K(r)?(O(),q("span",Ee,"导航")):(O(),q("span",Me,"上一页"))],32)])]))}}),Pe={class:"p-10 bg-white rounded dark:bg-slate-800"},Ae={class:"space-y-4"},Be={class:"space-y-2"},Oe=H("h2",{class:"text-2xl font-bold text-center text-slate-800 dark:text-neutral-200"}," 403 ",-1),qe={class:"text-base text-center text-slate-500 dark:text-slate-500"},De=H("p",{class:"text-base text-center text-slate-500 dark:text-slate-500"}," 邀请链接访问邀请10人，即可解锁 ",-1),Fe={class:"flex justify-center"},Ke={class:"space-y-4"},Ze=A({__name:"R18Permission",props:{visible:{type:Boolean}},emits:["cancel"],setup(e,{emit:a}){const l=s(),t=g(),o=B(!1),r=B(""),n=B(""),u=B(""),c=V((()=>!n.value.trim()||!u.value.trim()||o.value));async function d(){if(!(n.value?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n.value)||(t.error("请输入正确的邮箱格式"),0):(t.error("请输入绑定邮箱"),0)))return;const e=await async function(e){const a=Y.enc.Utf8.parse("aibianse12345678");return Y.AES.encrypt(e,a,{mode:Y.mode.ECB,padding:Y.pad.Pkcs7}).ciphertext.toString(Y.enc.Base64)}(`${n.value}_${u.value}`);r.value=e;const a=r.value.trim();if(a)try{o.value=!0;const e=await i(n.value,u.value,a);0===e.code?(l.setToken(a),t.success("success"),window.location.reload()):(t.error(e.msg??"error"),l.removeToken(),r.value="")}catch(s){t.error(s.msg??"error"),l.removeToken(),r.value=""}finally{o.value=!1}}function v(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),d())}function p(){a("cancel")}const m=B(!1);function h(){m.value=!0,a("cancel")}function f(){n.value="",u.value=""}return(a,l)=>(O(),q(Q,null,[D(K(j),{show:e.visible,style:{width:"90%","max-width":"640px"},onAfterLeave:f},{default:F((()=>[H("div",Pe,[H("div",Ae,[H("header",Be,[Oe,H("p",qe,L(a.$t("common.unauthorizedTips")),1),De,H("div",Fe,[D(K(z),{"preview-disabled":"",src:K("https://oss.lookimage.live/assets/img/r18-58802ae8.gif"),class:"w-[200px] m-auto"},null,8,["src"])])]),H("div",Ke,[D(K(x),{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),placeholder:"请输入绑定邮箱",type:"text","show-password-on":"mousedown",maxlength:50,onKeypress:v},null,8,["value"]),D(K(x),{value:u.value,"onUpdate:value":l[1]||(l[1]=e=>u.value=e),placeholder:"请输入邀请验证码",type:"text",maxlength:20,onKeypress:v},null,8,["value"]),D(K(_),{block:"",type:"primary",disabled:K(c),loading:o.value,onClick:d},{default:F((()=>[Z(L(a.$t("common.verify")),1)])),_:1},8,["disabled","loading"]),D(K(_),{block:"",onClick:p},{default:F((()=>[Z(L(a.$t("common.cancel")),1)])),_:1}),D(K(_),{block:"",onClick:h},{default:F((()=>[Z(" 打开【邀请&兑换】 ")])),_:1})])])])])),_:1},8,["show"]),D($e,{visible:m.value,"onUpdate:visible":l[2]||(l[2]=e=>m.value=e)},null,8,["visible"])],64))}}),He={class:"flex flex-col w-full h-full"},Le={class:"flex-1 overflow-hidden"},Ve={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},Je={class:"image_wrap"},Ne={key:2,class:"group_image_text"},Ge={class:"w-full max-w-screen-xl m-auto"},We={class:"flex items-center justify-between space-x-2"},Qe={class:"flex justify-between items-center w-full"},Xe={class:"space-x-2"},Ye={class:"space-x-2"},ea=Ie(A({__name:"ImageTag",setup(e){const l=s(),t=B(!1),o=l.token,{isMobile:i}=r(),d=g(),v=new AbortController,p=B(!1),m=B([]),h=B(1),y=B(0),w=B(!0),b=B(!1),x=B(!1),k=B([]),C=B(""),M=B([]),R=B([]),P=e=>e.replace("https://aibianse.pages.dev","https://oss.lookimage.live"),A=async(e,a)=>{if(0!==e.length)try{p.value=!0,m.value=[];const l=await n(e,a,{signal:v.signal});m.value=l.data.rows.map((e=>({...e,url:P(e.url)}))),y.value=Math.ceil(l.data.total/20),w.value=!0}catch(l){d.error("获取图片失败，请重试")}finally{p.value=!1}else d.error("标签参数为空")},L=async()=>{R.value=[];try{const e=(await u()).data.rows;for(const a in e)R.value.push(e[a].name)}catch(e){d.error("查询标签失败，请刷新页面重试！")}},N=f(((e,a)=>{A(e,a)}),300);function G(){b.value=!0,0===R.value.length&&L()}ee((async()=>{await L(),M.value=R.value,await A(M.value,1)}));const W=B([]);function X(e){W.value=[],W.value=e}function Y(){W.value.length>0&&(W.value=M.value),b.value=!1}function ie(){0===W.value.length?d.error("查询的标签为空！"):(N(W.value,1),d.success("查询中，知道你很急，但你先别急..."),M.value=W.value,b.value=!1)}const re=V((()=>{let e=["p-4"];return i.value&&(e=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),e}));function ne(){W.value=[]}function ue(){t.value=!0}function de(){t.value=!1}return ae((()=>{p.value&&v.abort(),N.cancel()})),(e,l)=>(O(),q("div",He,[K(i)?(O(),J(Re,{key:0})):le("",!0),H("main",Le,[H("div",Ve,[H("div",{id:"image-wrapper image-scroll-container",class:te(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[K(i)?"p-2":"p-4"]])},[H("div",Je,[D(K(j),{show:x.value,"onUpdate:show":l[0]||(l[0]=e=>x.value=e),class:"custom-card",preset:"card",style:{width:"95%",maxWidth:"650px"},title:C.value,size:"huge",bordered:!1,segmented:{content:"soft",footer:"soft"}},{default:F((()=>[(O(!0),q(Q,null,oe(k.value,((e,a)=>(O(),J(K(z),{key:a,lazy:"",src:e.url},{placeholder:F((()=>[H("div",{style:se({width:`${e.width}px`,height:e.height<1e3?.3*e.height+"px":e.height>=1e3&&e.height<=2e3?.2*e.height+"px":.1*e.height+"px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[D(K($),null,{default:F((()=>[Z(" 知道你很急，但是你先别急... ")])),_:1})],4)])),_:2},1032,["src"])))),128))])),_:1},8,["show","title"]),(O(!0),q(Q,null,oe(m.value,((e,a)=>(O(),q("div",{key:a,class:"image_item"},[10===e.type?(O(),J(K(z),{key:0,lazy:"",src:e.url,"intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5}},{placeholder:F((()=>[H("div",{style:se({width:`${e.width}px`,height:e.height<1e3?.3*e.height+"px":e.height>=1e3&&e.height<=2e3?.2*e.height+"px":.1*e.height+"px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[D(K($),null,{default:F((()=>[Z(" 知道你很急，但是你先别急... ")])),_:1})],4)])),_:2},1032,["src","intersection-observer-options"])):le("",!0),20===e.x_rated&&void 0===K(o)?(O(),q("div",{key:1,class:"unlock-button",onClick:ue}," 点击解锁查看 ")):le("",!0),20===e.type?(O(),q("div",Ne," 组图 ")):le("",!0),10!==e.type?(O(),J(K(z),{key:3,lazy:"",src:e.url,"preview-disabled":"","intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5},onClick:a=>async function(e){var a;try{k.value=[],x.value=!0;const l=await c(e);k.value=l.data.rows.map((e=>({...e,url:P(e.url)}))),C.value=(null==(a=l.data.rows[0])?void 0:a.name)||"详情"}catch(l){d.error("获取组图失败，请重试"),x.value=!1}}(e.group_id??"")},{placeholder:F((()=>[H("div",{style:se({width:`${e.width}px`,height:e.height<1e3?.3*e.height+"px":e.height>=1e3&&e.height<=2e3?.2*e.height+"px":.1*e.height+"px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[D(K($),null,{default:F((()=>[Z(" 知道你很急，但是你先别急... ")])),_:1})],4)])),_:2},1032,["src","intersection-observer-options","onClick"])):le("",!0)])))),128))])],2)]),D(Ze,{visible:t.value,onCancel:de},null,8,["visible"])]),H("footer",{class:te(K(re))},[H("div",Ge,[H("div",We,[D(K(I),{page:h.value,"onUpdate:page":[l[1]||(l[1]=e=>h.value=e),l[2]||(l[2]=e=>K(N)(M.value,h.value))],"page-count":y.value,size:"large",simple:K(i),"page-slot":K(i)?void 0:5,"show-quick-jumper":!K(i),"onUpdate:pageSize":l[3]||(l[3]=e=>K(N)(M.value,h.value))},null,8,["page","page-count","simple","page-slot","show-quick-jumper"]),D(K(_),{onClick:G},{default:F((()=>[D(K(a),{icon:K(ce).nav.search},null,8,["icon"]),Z(" 标签筛选 ")])),_:1}),D(K(j),{show:b.value,"onUpdate:show":l[5]||(l[5]=e=>b.value=e),preset:"dialog",title:"选择标签","footer-style":{padding:"12px 24px"},style:{width:"90%","max-width":"600px"}},{action:F((()=>[H("div",Qe,[H("div",Xe,[D(K(_),{onClick:l[4]||(l[4]=e=>void(W.value=[...R.value]))},{default:F((()=>[Z(" 全选 ")])),_:1}),D(K(_),{onClick:ne},{default:F((()=>[Z(" 清空 ")])),_:1})]),H("div",Ye,[D(K(_),{onClick:Y},{default:F((()=>[Z(" 取消 ")])),_:1}),D(K(_),{type:"primary",onClick:ie},{default:F((()=>[Z(" 筛选 ")])),_:1})])])])),default:F((()=>[D(K(S),{value:W.value,"onUpdate:value":X},{default:F((()=>[D(K(T),{"y-gap":8,cols:2},{default:F((()=>[(O(!0),q(Q,null,oe(R.value,((e,a)=>(O(),J(K(E),{key:a},{default:F((()=>[D(K(U),{value:e,label:e},null,8,["value","label"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["value"])])),_:1},8,["show"])])])],2)]))}}),[["__scopeId","data-v-6497c776"]]),aa=Object.freeze(Object.defineProperty({__proto__:null,default:ea},Symbol.toStringTag,{value:"Module"})),la={class:"ad-content"},ta=Ie(A({__name:"Adsterra",setup(e){const a=B(null),l=B(!1),t=()=>{l.value=!0,localStorage.setItem("adClickStatus","true")};return ee((()=>{"true"===localStorage.getItem("adClickStatus")&&(l.value=!0),(()=>{const e=document.createElement("script");e.type="text/javascript",e.textContent=`\n    atOptions = ${JSON.stringify({key:"9f5c0de96291e3bd32ac75b2e82f1cc8",format:"iframe",height:50,width:320,params:{}})};\n  `;const l=document.createElement("script");l.type="text/javascript",l.src="//www.highperformanceformat.com/9f5c0de96291e3bd32ac75b2e82f1cc8/invoke.js",a.value&&(a.value.appendChild(e),a.value.appendChild(l),a.value.addEventListener("click",t))})()})),(e,l)=>(O(),q("div",la,[H("div",{ref_key:"adContainer",ref:a},null,512)]))}}),[["__scopeId","data-v-d46cbfc6"]]),oa={class:"flex flex-col w-full h-full"},sa={class:"flex-1 overflow-hidden"},ia=["onClick"],ra=(e=>(ne("data-v-0049f634"),e=e(),ue(),e))((()=>H("span",{class:"block text-base text-center text-slate-500 dark:text-slate-400 mb-2"}," 广告位招租 ",-1))),na={style:{"text-align":"center"}},ua={class:"w-full max-w-screen-xl m-auto"},ca={class:"flex items-center justify-between space-x-2"},da={class:"button-spacing"},va={class:"dark:text-black"},pa=Ie(A({__name:"ImageSetSearch",setup(e){const l=W(),t=g(),o=B([]),s=new AbortController,{isMobile:i}=r(),{scrollRef:n,scrollToBottom:u}=function(){const e=B(null);return{scrollRef:e,scrollToBottom:async()=>{await X(),e.value&&(e.value.scrollTop=e.value.scrollHeight)},scrollToTop:async()=>{await X(),e.value&&(e.value.scrollTop=0)},scrollToBottomIfAtBottom:async()=>{if(await X(),e.value){const a=100;e.value.scrollHeight-e.value.scrollTop-e.value.clientHeight<=a&&(e.value.scrollTop=e.value.scrollHeight)}}}}(),c=B(!1),m=B(null),h=B(null),y=B(!1),w=V((()=>{let e=["p-4"];return i.value&&(e=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),e})),k=B([]),C=B(""),j=B([]),z=B(!1),$=B([]);async function S(){await async function(e){if(!(null==e?void 0:e.trim()))return;C.value="";const a=await E(e,1);a&&k.value.push({search_keyword:e,image_data:a.rows,totalPages:Math.ceil(a.total/10),currentPage:1})}(C.value),await T()}async function T(){$.value[$.value.length-1].scrollIntoView({behavior:"smooth"})}ee((async()=>{try{if(!(await Y(10,1)))throw new Error("加载图片集合失败");await u(),!i.value&&m.value&&m.value.focus()}catch(e){t.error(e instanceof Error?e.message:"初始化失败")}})),ae((()=>{c.value&&s.abort(),$.value=[],j.value=[]}));const U=e=>{e&&$.value.push(e)};async function E(e,a){try{return(await v(e,a)).data}catch(l){return t.error(l instanceof Error?l.message:"搜索内容失败 or 搜索内容不存在"),null}}async function P(e,a){const l=await("   目录   "===e.search_keyword?se(10,a):"R18"===e.search_keyword?se(40,a):E(e.search_keyword,a));l&&(e.image_data=l.rows,e.currentPage=a)}const A=V((()=>c.value||!C.value||""===C.value.trim()));function N(e){i.value?"Enter"===e.key&&e.ctrlKey&&(e.preventDefault(),S()):"Enter"!==e.key||e.shiftKey||(e.preventDefault(),S())}const G=V((()=>i.value?p("chat.placeholderMobile"):p("chat.placeholder")));async function Y(e,a){try{const l=B("");if(10===e)l.value="   目录   ";else if(20===e)l.value="最热";else if(30===e)l.value="最新";else if(40===e)l.value="R18";else{if(50!==e)throw new Error("类型错误！");l.value="巧遇"}const t=await se(e,a);if(!t)throw new Error("获取数据失败");return k.value.push({search_keyword:l.value,image_data:t.rows,totalPages:Math.ceil(t.total/10),currentPage:1}),await X(),await T(),!0}catch(l){return t.error(l instanceof Error?l.message:"操作失败"),!1}}async function se(e,a){try{const l=await d(e,a);if(!(null==l?void 0:l.data))throw new Error("获取数据失败");return l.data}catch(l){throw l}}const ne=e=>re("div",{style:"padding: 4px 0"},e.label),ue=f((async e=>{await(async e=>{if(null==e?void 0:e.trim())try{const a=await E(e.trim(),1);if(!a)return void(o.value=[]);o.value=a.rows.filter((a=>a.name.toLowerCase().includes(e.toLowerCase()))).slice(0,10).map((e=>({label:e.name,value:e.name})))}catch(a){o.value=[]}else o.value=[]})(e)}),300),ce=e=>{C.value=e,ue(e)},de=e=>{C.value=e,S()};function ve(e,a){Y(e,a),y.value=!1}ie((()=>z.value),(async e=>{e&&(await X(),h.value&&(h.value.scrollTop=0))}));const pe=e=>{i.value&&e.target&&window.setTimeout((()=>{e.target.scrollIntoView({behavior:"smooth",block:"center"})}),300)};return(e,t)=>(O(),q("div",oa,[K(i)?(O(),J(Re,{key:0})):le("",!0),H("main",sa,[H("div",{id:"scrollRef",ref_key:"scrollRef",ref:n,class:"h-full overflow-hidden overflow-y-auto"},[H("div",{id:"image-wrapper image-scroll-container",class:te(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[K(i)?"p-2":"p-4"]])},[(O(!0),q(Q,null,oe(k.value,((e,a)=>(O(),q("div",{key:e.search_keyword+a,ref_for:!0,ref:U,class:"image_card"},[D(K(b),{title:`搜索关键字：${e.search_keyword}`,segmented:{content:!0,footer:"soft"}},{"header-extra":F((()=>[])),footer:F((()=>[ra,H("div",null,[D(ta)])])),action:F((()=>[H("div",na,[D(K(I),{page:e.currentPage,"onUpdate:page":[a=>e.currentPage=a,a=>P(e,e.currentPage)],"page-count":e.totalPages,size:"large",simple:"","onUpdate:pageSize":a=>P(e,e.currentPage)},null,8,["page","onUpdate:page","page-count","onUpdate:pageSize"])])])),default:F((()=>[H("ul",null,[(O(!0),q(Q,null,oe(e.image_data,((e,a)=>(O(),q("li",{key:a,class:"image_name",onClick:a=>K(l).push(`/image/image-set-detail/${e.id}`)},L(`${a+1}、${e.name}`),9,ia)))),128))])])),_:2},1032,["title"])])))),128))],2)],512)]),H("footer",{class:te(K(w))},[H("div",ua,[H("div",ca,[D(K(M),{show:y.value,"onUpdate:show":t[5]||(t[5]=e=>y.value=e),overlap:!1,placement:"top",trigger:"click"},{trigger:F((()=>[D(K(_),null,{default:F((()=>[D(K(a),{icon:"ep:menu"})])),_:1})])),default:F((()=>[H("div",da,[D(K(_),{onClick:t[0]||(t[0]=e=>ve(10,1))},{default:F((()=>[Z(" 目录 ")])),_:1}),D(K(_),{onClick:t[1]||(t[1]=e=>ve(20,1))},{default:F((()=>[Z(" 最热 ")])),_:1}),D(K(_),{onClick:t[2]||(t[2]=e=>ve(30,1))},{default:F((()=>[Z(" 最新 ")])),_:1}),D(K(_),{onClick:t[3]||(t[3]=e=>ve(40,1))},{default:F((()=>[Z(" R18 ")])),_:1}),D(K(_),{onClick:t[4]||(t[4]=e=>ve(50,1))},{default:F((()=>[Z(" 巧遇 ")])),_:1})])])),_:1},8,["show"]),D(K(R),{value:C.value,"onUpdate:value":[t[8]||(t[8]=e=>C.value=e),ce],options:o.value,"render-label":ne,"input-props":{placeholder:K(G),type:"textarea",autosize:{minRows:1,maxRows:K(i)?4:8}},style:{width:"70%"},onSelect:de,onFocus:pe},{default:F((({handleInput:e,handleBlur:a,handleFocus:l})=>[D(K(x),{ref_key:"inputRef",ref:m,value:C.value,"onUpdate:value":[t[6]||(t[6]=e=>C.value=e),e],type:"textarea",clearable:"",placeholder:K(G),autosize:{minRows:1,maxRows:K(i)?4:8},onFocus:e=>{l(e),(e=>{i.value&&e.target&&window.setTimeout((()=>{e.target.scrollIntoView({behavior:"smooth",block:"center"})}),300)})(e)},onBlur:a,onKeypress:N,onClear:t[7]||(t[7]=()=>{C.value="",o.value=[]})},null,8,["value","placeholder","autosize","onUpdate:value","onFocus","onBlur"])])),_:1},8,["value","options","input-props"]),D(K(_),{type:"primary",disabled:K(A),onClick:S},{icon:F((()=>[H("span",va,[D(K(a),{icon:"lucide:search"})])])),_:1},8,["disabled"])])])],2)]))}}),[["__scopeId","data-v-0049f634"]]),ma=Object.freeze(Object.defineProperty({__proto__:null,default:pa},Symbol.toStringTag,{value:"Module"})),ha={class:"flex flex-col w-full h-full"},fa={class:"flex-1 overflow-hidden"},ga={id:"scrollRef",class:"h-full overflow-hidden overflow-y-auto"},ya={class:"image_wrap"},wa={class:"w-full max-w-screen-xl m-auto"},ba={class:"flex items-center justify-between space-x-2"},xa=Ie(A({__name:"ImageSetDetail",setup(e){const a=s(),l=B(!1),t=a.token,{isMobile:o}=r(),i=g(),n=G(),u=W(),c=B([]),d=B(1),v=B(!1),p=B(0),f=B("");async function y(e,a){try{v.value=!0,c.value=[];const l=await h(e,a);f.value=l.data.name||"图片集";const t=l.data.rows||[];if(!t.length)return void i.warning("没有找到图片");p.value=Math.max(1,Math.ceil(l.data.total/l.data.page_size)),c.value=t.map((e=>{return{...e,url:(a=e.url,a.replace("https://aibianse.pages.dev","https://oss.lookimage.live"))};var a}))}catch(l){i.error("查询失败！")}finally{v.value=!1}}async function w(e){d.value=e,await y(n.params.id,d.value)}ee((async()=>{const e=n.params.id;if(!e)return i.error("参数错误"),void u.push("/image/search");await y(e,d.value),m(e)}));const b=V((()=>{let e=["p-4"];return o.value&&(e=["sticky","left-0","bottom-0","right-0","p-2","pr-3","overflow-hidden"]),e}));function x(){l.value=!0}function _(){l.value=!1}return(e,a)=>(O(),q("div",ha,[K(o)?(O(),J(Re,{key:0})):le("",!0),H("main",fa,[H("div",ga,[H("div",{id:"image-wrapper image-scroll-container",class:te(["w-full max-w-screen-xl m-auto dark:bg-[#101014]",[K(o)?"p-2":"p-4"]])},[H("div",ya,[(O(!0),q(Q,null,oe(c.value,((e,a)=>(O(),q("div",{key:a,class:"image_item"},[D(K(z),{lazy:"",src:e.url,"intersection-observer-options":{root:null,rootMargin:"0px 0px 200px 0px",threshold:.5}},{placeholder:F((()=>[H("div",{style:se({width:"100%",height:K(o)?"200px":"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0001"})},[D(K($),null,{default:F((()=>[Z(" 知道你很急，但是你先别急... ")])),_:1})],4)])),_:2},1032,["src","intersection-observer-options"]),20===e.x_rated&&void 0===K(t)?(O(),q("div",{key:0,class:"unlock-button",onClick:x}," 点击解锁查看 ")):le("",!0)])))),128))])],2)]),D(Ze,{visible:l.value,onCancel:_},null,8,["visible"])]),H("footer",{class:te(K(b))},[H("div",wa,[H("div",ba,[D(K(I),{page:d.value,"onUpdate:page":[a[0]||(a[0]=e=>d.value=e),w],"page-count":p.value,size:"large",simple:K(o),"page-slot":K(o)?void 0:5,"show-quick-jumper":!K(o)},null,8,["page","page-count","simple","page-slot","show-quick-jumper"])])])],2)]))}}),[["__scopeId","data-v-1f9c8ade"]]),_a=Object.freeze(Object.defineProperty({__proto__:null,default:xa},Symbol.toStringTag,{value:"Module"}));export{ce as I,$e as _,Ie as a,Re as b,Ze as c,aa as d,ma as e,_a as f,pe as g};
