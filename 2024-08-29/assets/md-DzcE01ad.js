import{d as p,z as m,o as c,b as f,e as a,f as v,h as _,c as g,k as h,q as $,s as k,B as l}from"./modules/vue-Cw7aWbQJ.js";import{u,f as x}from"./slidev/context-DdRlWQSu.js";import"./index-vXUo98A8.js";import"./modules/shiki-CScBSBAF.js";function i(e){return e.startsWith("/")?"/"+e.slice(1):e}function C(e,s=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const y={class:"my-auto w-full"},B=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,o=m(()=>C(s.background,!0));return(t,r)=>(c(),f("div",{class:"slidev-layout cover text-center",style:_(o.value)},[a("div",y,[v(t.$slots,"default")])],4))}}),q={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:r,$page:b,$renderContext:P,$frontmatter:d}=u();return t.setup(),(S,n)=>(c(),g(B,$(k(l(x)(l(d),0))),{default:h(()=>n[0]||(n[0]=[a("h1",null,"Closing the Gap in Non-Latin Script Data",-1),a("p",null,"Pragmatic methods to manage corpora with diverse languages",-1)])),_:1},16))}};export{q as default};