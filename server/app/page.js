(()=>{var e={};e.id=931,e.ids=[931],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},5934:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>u,routeModule:()=>m,tree:()=>d});var s=r(73137),a=r(54647),o=r(4183),n=r.n(o),l=r(71775),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let c=s.AppPageRouteModule,d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,76768)),"/Users/xocoo/Desktop/Projects/elottery2/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,66447))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,59197)),"/Users/xocoo/Desktop/Projects/elottery2/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,66447))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/xocoo/Desktop/Projects/elottery2/src/app/page.tsx"],p="/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},73625:(e,t,r)=>{Promise.resolve().then(r.bind(r,51630))},51630:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(60080),a=r(9885),o=r(11440),n=r.n(o),l=r(79636),i=r.n(l),c=r(52349),d=r(75737);let{Text:u}=c.default,p=function(e){return(0,s.jsxs)(n(),{href:"/"+e.name,className:"flex items-center justify-between w-full hover:bg-blue-300 duration-300 rounded-lg border-2 border-black-800 hover:border-blue-300 p-4",children:[s.jsx(u,{children:e.name}),s.jsx(i(),{shape:"circle",icon:s.jsx(d.default,{className:"text-white"}),onClick:()=>{let t=localStorage.getItem("elottery"),r=JSON.parse(t);delete r[e.name],localStorage.setItem("elottery",JSON.stringify(r)),window.location.reload()},className:"bg-red-500 hover:bg-red-400 border-none"})]})};var x=r(11500),m=r(29468),f=r(77829),g=r(72781),h=r(53275),j=r(62342);let{Title:y}=c.default,b=function(){let[e,t]=(0,a.useState)({}),[r,o]=(0,a.useState)([]),[n,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=localStorage.getItem("elottery");e&&t(JSON.parse(e))},[]),(0,a.useEffect)(()=>{let t=Object.keys(e);o(t)},[e]),(0,a.useEffect)(()=>{let t=Object.keys(e);o(t)},[n]),(0,s.jsxs)("div",{className:"w-1/3 h-full text-center flex flex-col",children:[s.jsx(m.Z,{className:"text-center",header:s.jsx(y,{className:"font-medium",children:"Хэрэглэгчид"}),dataSource:r,renderItem:e=>s.jsx(m.Z.Item,{children:s.jsx(p,{name:e})})}),s.jsx(x.Z,{type:"primary",onClick:()=>{l(!0)},icon:s.jsx(j.Z,{}),className:"w-[75px] h-[75px]"}),s.jsx(h.Z,{title:"Хэрэглэгч үүсгэх",open:n,onCancel:()=>{l(!1)},footer:s.jsx(i(),{className:"btn primary",onClick:()=>{let e=localStorage.getItem("elottery")||"{}",t=JSON.parse(e);e?t[c]={months:[]}:t={[c]:{months:[]}},localStorage.setItem("elottery",JSON.stringify(t)),window.location.reload(),l(!1)},children:"Үүсгэх"}),children:s.jsx(f.Z,{className:"flex flex-col justify-center",children:s.jsx(f.Z.Item,{label:"Нэр:",name:"name",children:s.jsx(g.Z,{placeholder:"Бат",onChange:e=>{d(e.target.value)}})})})})]})};function v(){return s.jsx("div",{className:"w-full flex justify-center items-center",children:s.jsx(b,{})})}},76768:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var s=r(17536);let a=(0,s.createProxy)(String.raw`/Users/xocoo/Desktop/Projects/elottery2/src/app/page.tsx`),{__esModule:o,$$typeof:n}=a,l=a.default,i=l},66447:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(96885);let a=e=>{let t=(0,s.fillMetadataSegment)("/elottery",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[173,567,440,781,481],()=>r(5934));module.exports=s})();