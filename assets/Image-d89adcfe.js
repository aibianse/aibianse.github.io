import{b6 as ge,aG as $,U as l,d as _,P as we,ar as me,ax as et,G as W,H as k,b7 as ie,J as tt,b8 as ot,M as pe,b9 as nt,l as y,ba as it,aa as rt,aq as xe,bb as A,s as at,K as Y,Q as lt,R as st,bc as ut,a0 as re,bd as ct,$ as F,F as ae,aJ as L,aj as dt,be as V,au as be,y as ft,bf as ht,aD as vt,b3 as gt,as as wt,aw as Ce,q as le,aW as se,bg as mt,bh as pt}from"./index-585dae92.js";function xt(e,a,t,c){var r=-1,f=e==null?0:e.length;for(c&&f&&(t=e[++r]);++r<f;)t=a(t,e[r],r,e);return t}function bt(e){return function(a){return e==null?void 0:e[a]}}var Ct={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},St=bt(Ct);const Ot=St;var yt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rt="\\u0300-\\u036f",It="\\ufe20-\\ufe2f",Pt="\\u20d0-\\u20ff",Lt=Rt+It+Pt,Mt="["+Lt+"]",kt=RegExp(Mt,"g");function zt(e){return e=ge(e),e&&e.replace(yt,Ot).replace(kt,"")}var Et=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Tt(e){return e.match(Et)||[]}var Dt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function At(e){return Dt.test(e)}var Se="\\ud800-\\udfff",Ht="\\u0300-\\u036f",$t="\\ufe20-\\ufe2f",_t="\\u20d0-\\u20ff",jt=Ht+$t+_t,Oe="\\u2700-\\u27bf",ye="a-z\\xdf-\\xf6\\xf8-\\xff",Nt="\\xac\\xb1\\xd7\\xf7",Ut="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zt="\\u2000-\\u206f",Bt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="A-Z\\xc0-\\xd6\\xd8-\\xde",Wt="\\ufe0e\\ufe0f",Ie=Nt+Ut+Zt+Bt,Pe="['’]",ue="["+Ie+"]",Ft="["+jt+"]",Le="\\d+",Vt="["+Oe+"]",Me="["+ye+"]",ke="[^"+Se+Ie+Le+Oe+ye+Re+"]",Yt="\\ud83c[\\udffb-\\udfff]",Xt="(?:"+Ft+"|"+Yt+")",Gt="[^"+Se+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",D="["+Re+"]",qt="\\u200d",ce="(?:"+Me+"|"+ke+")",Jt="(?:"+D+"|"+ke+")",de="(?:"+Pe+"(?:d|ll|m|re|s|t|ve))?",fe="(?:"+Pe+"(?:D|LL|M|RE|S|T|VE))?",Te=Xt+"?",De="["+Wt+"]?",Kt="(?:"+qt+"(?:"+[Gt,ze,Ee].join("|")+")"+De+Te+")*",Qt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",eo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",to=De+Te+Kt,oo="(?:"+[Vt,ze,Ee].join("|")+")"+to,no=RegExp([D+"?"+Me+"+"+de+"(?="+[ue,D,"$"].join("|")+")",Jt+"+"+fe+"(?="+[ue,D+ce,"$"].join("|")+")",D+"?"+ce+"+"+de,D+"+"+fe,eo,Qt,Le,oo].join("|"),"g");function io(e){return e.match(no)||[]}function ro(e,a,t){return e=ge(e),a=t?void 0:a,a===void 0?At(e)?io(e):Tt(e):e.match(a)||[]}var ao="['’]",lo=RegExp(ao,"g");function so(e){return function(a){return xt(ro(zt(a).replace(lo,"")),e,"")}}var uo=so(function(e,a,t){return e+(t?"-":"")+a.toLowerCase()});const co=uo,fo=$("rotateClockwise",l("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),l("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),ho=$("rotateClockwise",l("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),l("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),vo=$("zoomIn",l("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),l("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),go=$("zoomOut",l("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),l("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),wo=_({name:"ResizeSmall",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l("g",{fill:"none"},l("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),X=Object.assign(Object.assign({},we.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),Ae=me("n-image");var He=globalThis&&globalThis.__awaiter||function(e,a,t,c){function r(f){return f instanceof t?f:new t(function(h){h(f)})}return new(t||(t=Promise))(function(f,h){function v(u){try{n(c.next(u))}catch(m){h(m)}}function d(u){try{n(c.throw(u))}catch(m){h(m)}}function n(u){u.done?f(u.value):r(u.value).then(v,d)}n((c=c.apply(e,a||[])).next())})};const $e=e=>e.includes("image/"),he=(e="")=>{const a=e.split("/"),c=a[a.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(c)||[""])[0]},ve=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,Lo=e=>{if(e.type)return $e(e.type);const a=he(e.name||"");if(ve.test(a))return!0;const t=e.thumbnailUrl||e.url||"",c=he(t);return!!(/^data:image\//.test(t)||ve.test(c))};function Mo(e){return He(this,void 0,void 0,function*(){return yield new Promise(a=>{if(!e.type||!$e(e.type)){a("");return}a(window.URL.createObjectURL(e))})})}const ko=et&&window.FileReader&&window.File;function mo(e){return e.isDirectory}function po(e){return e.isFile}function zo(e,a){return He(this,void 0,void 0,function*(){const t=[];let c,r=0;function f(){r++}function h(){r--,r||c(t)}function v(d){d.forEach(n=>{if(n){if(f(),a&&mo(n)){const u=n.createReader();f(),u.readEntries(m=>{v(m),h()},()=>{h()})}else po(n)&&(f(),n.file(u=>{t.push({file:u,entry:n,source:"dnd"}),h()},()=>{h()}));h()}})}return yield new Promise(d=>{c=d,v(e)}),t})}function Eo(e){const{id:a,name:t,percentage:c,status:r,url:f,file:h,thumbnailUrl:v,type:d,fullPath:n,batchId:u}=e;return{id:a,name:t,percentage:c??null,status:r,url:f??null,file:h??null,thumbnailUrl:v??null,type:d??null,fullPath:n??null,batchId:u??null}}function To(e,a,t){return e=e.toLowerCase(),a=a.toLocaleLowerCase(),t=t.toLocaleLowerCase(),t.split(",").map(r=>r.trim()).filter(Boolean).some(r=>{if(r.startsWith(".")){if(e.endsWith(r))return!0}else if(r.includes("/")){const[f,h]=a.split("/"),[v,d]=r.split("/");if((v==="*"||f&&v&&v===f)&&(d==="*"||h&&d&&d===h))return!0}else return!0;return!1})}const xo=(e,a)=>{if(!e)return;const t=document.createElement("a");t.href=e,a!==void 0&&(t.download=a),document.body.appendChild(t),t.click(),document.body.removeChild(t)},bo=l("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),Co=l("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),So=l("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),Oo=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024"},l("path",{fill:"currentColor",d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"})),yo=W([W("body >",[k("image-container","position: fixed;")]),k("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),k("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[ie()]),k("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[k("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),ie()]),k("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[tt()]),k("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),k("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[ot("preview-disabled",`
 cursor: pointer;
 `),W("img",`
 border-radius: inherit;
 `)])]),H=32,_e=_({name:"ImagePreview",props:Object.assign(Object.assign({},X),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const a=we("Image","-image",yo,nt,e,pe(e,"clsPrefix"));let t=null;const c=y(null),r=y(null),f=y(void 0),h=y(!1),v=y(!1),{localeRef:d}=it("Image");function n(){const{value:o}=r;if(!t||!o)return;const{style:s}=o,i=t.getBoundingClientRect(),g=i.left+i.width/2,w=i.top+i.height/2;s.transformOrigin=`${g}px ${w}px`}function u(o){var s,i;switch(o.key){case" ":o.preventDefault();break;case"ArrowLeft":(s=e.onPrev)===null||s===void 0||s.call(e);break;case"ArrowRight":(i=e.onNext)===null||i===void 0||i.call(e);break;case"Escape":te();break}}rt(h,o=>{o?V("keydown",document,u):A("keydown",document,u)}),xe(()=>{A("keydown",document,u)});let m=0,I=0,R=0,P=0,j=0,N=0,G=0,q=0,U=!1;function J(o){const{clientX:s,clientY:i}=o;R=s-m,P=i-I,vt(S)}function Ne(o){const{mouseUpClientX:s,mouseUpClientY:i,mouseDownClientX:g,mouseDownClientY:w}=o,b=g-s,C=w-i,O=`vertical${C>0?"Top":"Bottom"}`,M=`horizontal${b>0?"Left":"Right"}`;return{moveVerticalDirection:O,moveHorizontalDirection:M,deltaHorizontal:b,deltaVertical:C}}function K(o){const{value:s}=c;if(!s)return{offsetX:0,offsetY:0};const i=s.getBoundingClientRect(),{moveVerticalDirection:g,moveHorizontalDirection:w,deltaHorizontal:b,deltaVertical:C}=o||{};let O=0,M=0;return i.width<=window.innerWidth?O=0:i.left>0?O=(i.width-window.innerWidth)/2:i.right<window.innerWidth?O=-(i.width-window.innerWidth)/2:w==="horizontalRight"?O=Math.min((i.width-window.innerWidth)/2,j-(b??0)):O=Math.max(-((i.width-window.innerWidth)/2),j-(b??0)),i.height<=window.innerHeight?M=0:i.top>0?M=(i.height-window.innerHeight)/2:i.bottom<window.innerHeight?M=-(i.height-window.innerHeight)/2:g==="verticalBottom"?M=Math.min((i.height-window.innerHeight)/2,N-(C??0)):M=Math.max(-((i.height-window.innerHeight)/2),N-(C??0)),{offsetX:O,offsetY:M}}function Q(o){A("mousemove",document,J),A("mouseup",document,Q);const{clientX:s,clientY:i}=o;U=!1;const g=Ne({mouseUpClientX:s,mouseUpClientY:i,mouseDownClientX:G,mouseDownClientY:q}),w=K(g);R=w.offsetX,P=w.offsetY,S()}const p=be(Ae,null);function Ue(o){var s,i;if((i=(s=p==null?void 0:p.previewedImgPropsRef.value)===null||s===void 0?void 0:s.onMousedown)===null||i===void 0||i.call(s,o),o.button!==0)return;const{clientX:g,clientY:w}=o;U=!0,m=g-R,I=w-P,j=R,N=P,G=g,q=w,S(),V("mousemove",document,J),V("mouseup",document,Q)}function Ze(o){var s,i;(i=(s=p==null?void 0:p.previewedImgPropsRef.value)===null||s===void 0?void 0:s.onDblclick)===null||i===void 0||i.call(s,o);const g=ee();x=x===g?1:g,S()}const Z=1.5;let z=0,x=1,E=0;function B(){x=1,z=0}function Be(){var o;B(),E=0,(o=e.onPrev)===null||o===void 0||o.call(e)}function We(){var o;B(),E=0,(o=e.onNext)===null||o===void 0||o.call(e)}function Fe(){E-=90,S()}function Ve(){E+=90,S()}function Ye(){const{value:o}=c;if(!o)return 1;const{innerWidth:s,innerHeight:i}=window,g=Math.max(1,o.naturalHeight/(i-H)),w=Math.max(1,o.naturalWidth/(s-H));return Math.max(3,g*2,w*2)}function ee(){const{value:o}=c;if(!o)return 1;const{innerWidth:s,innerHeight:i}=window,g=o.naturalHeight/(i-H),w=o.naturalWidth/(s-H);return g<1&&w<1?1:Math.max(g,w)}function Xe(){const o=Ye();x<o&&(z+=1,x=Math.min(o,Math.pow(Z,z)),S())}function Ge(){if(x>.5){const o=x;z-=1,x=Math.max(.5,Math.pow(Z,z));const s=o-x;S(!1);const i=K();x+=s,S(!1),x-=s,R=i.offsetX,P=i.offsetY,S()}}function qe(){const o=f.value;o&&xo(o,void 0)}function S(o=!0){var s;const{value:i}=c;if(!i)return;const{style:g}=i,w=ft((s=p==null?void 0:p.previewedImgPropsRef.value)===null||s===void 0?void 0:s.style);let b="";if(typeof w=="string")b=w+";";else for(const O in w)b+=`${co(O)}: ${w[O]};`;const C=`transform-origin: center; transform: translateX(${R}px) translateY(${P}px) rotate(${E}deg) scale(${x});`;U?g.cssText=b+"cursor: grabbing; transition: none;"+C:g.cssText=b+"cursor: grab;"+C+(o?"":"transition: none;"),o||i.offsetHeight}function te(){h.value=!h.value,v.value=!0}function Je(){x=ee(),z=Math.ceil(Math.log(x)/Math.log(Z)),R=0,P=0,S()}const Ke={setPreviewSrc:o=>{f.value=o},setThumbnailEl:o=>{t=o},toggleShow:te};function Qe(o,s){if(e.showToolbarTooltip){const{value:i}=a;return l(ht,{to:!1,theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>d.value[s],trigger:()=>o})}else return o}const oe=at(()=>{const{common:{cubicBezierEaseInOut:o},self:{toolbarIconColor:s,toolbarBorderRadius:i,toolbarBoxShadow:g,toolbarColor:w}}=a.value;return{"--n-bezier":o,"--n-toolbar-icon-color":s,"--n-toolbar-color":w,"--n-toolbar-border-radius":i,"--n-toolbar-box-shadow":g}}),{inlineThemeDisabled:ne}=Y(),T=ne?lt("image-preview",void 0,oe,e):void 0;return Object.assign({previewRef:c,previewWrapperRef:r,previewSrc:f,show:h,appear:st(),displayed:v,previewedImgProps:p==null?void 0:p.previewedImgPropsRef,handleWheel(o){o.preventDefault()},handlePreviewMousedown:Ue,handlePreviewDblclick:Ze,syncTransformOrigin:n,handleAfterLeave:()=>{B(),E=0,v.value=!1},handleDragStart:o=>{var s,i;(i=(s=p==null?void 0:p.previewedImgPropsRef.value)===null||s===void 0?void 0:s.onDragstart)===null||i===void 0||i.call(s,o),o.preventDefault()},zoomIn:Xe,zoomOut:Ge,handleDownloadClick:qe,rotateCounterclockwise:Fe,rotateClockwise:Ve,handleSwitchPrev:Be,handleSwitchNext:We,withTooltip:Qe,resizeToOrignalImageSize:Je,cssVars:ne?void 0:oe,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},Ke)},render(){var e,a;const{clsPrefix:t}=this;return l(ae,null,(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e),l(ut,{show:this.show},{default:()=>{var c;return this.show||this.displayed?((c=this.onRender)===null||c===void 0||c.call(this),re(l("div",{class:[`${t}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},l(F,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?l("div",{class:`${t}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?l(F,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:r}=this;return l("div",{class:`${t}-image-preview-toolbar`},this.onPrev?l(ae,null,r(l(L,{clsPrefix:t,onClick:this.handleSwitchPrev},{default:()=>bo}),"tipPrevious"),r(l(L,{clsPrefix:t,onClick:this.handleSwitchNext},{default:()=>Co}),"tipNext")):null,r(l(L,{clsPrefix:t,onClick:this.rotateCounterclockwise},{default:()=>l(ho,null)}),"tipCounterclockwise"),r(l(L,{clsPrefix:t,onClick:this.rotateClockwise},{default:()=>l(fo,null)}),"tipClockwise"),r(l(L,{clsPrefix:t,onClick:this.resizeToOrignalImageSize},{default:()=>l(wo,null)}),"tipOriginalSize"),r(l(L,{clsPrefix:t,onClick:this.zoomOut},{default:()=>l(go,null)}),"tipZoomOut"),r(l(L,{clsPrefix:t,onClick:this.zoomIn},{default:()=>l(vo,null)}),"tipZoomIn"),r(l(L,{clsPrefix:t,onClick:this.handleDownloadClick},{default:()=>Oo}),"tipDownload"),r(l(L,{clsPrefix:t,onClick:this.toggleShow},{default:()=>So}),"tipClose"))}}):null,l(F,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:r={}}=this;return re(l("div",{class:`${t}-image-preview-wrapper`,ref:"previewWrapperRef"},l("img",Object.assign({},r,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${t}-image-preview`,r.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[dt,this.show]])}})),[[ct,{enabled:this.show}]])):null}}))}}),je=me("n-image-group"),Ro=X,Do=_({name:"ImageGroup",props:Ro,setup(e){let a;const{mergedClsPrefixRef:t}=Y(e),c=`c${gt()}`,r=wt(),f=d=>{var n;a=d,(n=v.value)===null||n===void 0||n.setPreviewSrc(d)};function h(d){var n,u;if(!(r!=null&&r.proxy))return;const I=r.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${c}]:not([data-error=true])`);if(!I.length)return;const R=Array.from(I).findIndex(P=>P.dataset.previewSrc===a);~R?f(I[(R+d+I.length)%I.length].dataset.previewSrc):f(I[0].dataset.previewSrc),d===1?(n=e.onPreviewNext)===null||n===void 0||n.call(e):(u=e.onPreviewPrev)===null||u===void 0||u.call(e)}Ce(je,{mergedClsPrefixRef:t,setPreviewSrc:f,setThumbnailEl:d=>{var n;(n=v.value)===null||n===void 0||n.setThumbnailEl(d)},toggleShow:()=>{var d;(d=v.value)===null||d===void 0||d.toggleShow()},groupId:c});const v=y(null);return{mergedClsPrefix:t,previewInstRef:v,next:()=>{h(1)},prev:()=>{h(-1)}}},render(){return l(_e,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:this.mergedClsPrefix,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},this.$slots)}}),Io=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},X),Ao=_({name:"Image",props:Io,inheritAttrs:!1,setup(e){const a=y(null),t=y(!1),c=y(null),r=be(je,null),{mergedClsPrefixRef:f}=r||Y(e),h={click:()=>{if(e.previewDisabled||t.value)return;const n=e.previewSrc||e.src;if(r){r.setPreviewSrc(n),r.setThumbnailEl(a.value),r.toggleShow();return}const{value:u}=c;u&&(u.setPreviewSrc(n),u.setThumbnailEl(a.value),u.toggleShow())}},v=y(!e.lazy);le(()=>{var n;(n=a.value)===null||n===void 0||n.setAttribute("data-group-id",(r==null?void 0:r.groupId)||"")}),le(()=>{if(e.lazy&&e.intersectionObserverOptions){let n;const u=se(()=>{n==null||n(),n=void 0,n=pt(a.value,e.intersectionObserverOptions,v)});xe(()=>{u(),n==null||n()})}}),se(()=>{var n;e.src,(n=e.imgProps)===null||n===void 0||n.src,t.value=!1});const d=y(!1);return Ce(Ae,{previewedImgPropsRef:pe(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:f,groupId:r==null?void 0:r.groupId,previewInstRef:c,imageRef:a,showError:t,shouldStartLoading:v,loaded:d,mergedOnClick:n=>{var u,m;h.click(),(m=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||m===void 0||m.call(u,n)},mergedOnError:n=>{if(!v.value)return;t.value=!0;const{onError:u,imgProps:{onError:m}={}}=e;u==null||u(n),m==null||m(n)},mergedOnLoad:n=>{const{onLoad:u,imgProps:{onLoad:m}={}}=e;u==null||u(n),m==null||m(n),d.value=!0}},h)},render(){var e,a;const{mergedClsPrefix:t,imgProps:c={},loaded:r,$attrs:f,lazy:h}=this,v=(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e),d=this.src||c.src,n=l("img",Object.assign(Object.assign({},c),{ref:"imageRef",width:this.width||c.width,height:this.height||c.height,src:this.showError?this.fallbackSrc:h&&this.intersectionObserverOptions?this.shouldStartLoading?d:void 0:d,alt:this.alt||c.alt,"aria-label":this.alt||c.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:mt&&h&&!this.intersectionObserverOptions?"lazy":"eager",style:[c.style||"",v&&!r?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return l("div",Object.assign({},f,{role:"none",class:[f.class,`${t}-image`,(this.previewDisabled||this.showError)&&`${t}-image--preview-disabled`]}),this.groupId?n:l(_e,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:t,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>n}),!r&&v)}});export{Ao as N,Do as a,Mo as b,Eo as c,xo as d,ko as e,zo as g,Lo as i,To as m};
