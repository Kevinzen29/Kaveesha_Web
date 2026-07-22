const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
window.addEventListener("load",()=>{
  setTimeout(()=>$("#loader").classList.add("done"),1830);
});
window.addEventListener("scroll",()=>$(".topbar").classList.toggle("scrolled",scrollY>20));
const saved=localStorage.getItem("kc-theme");if(saved)document.documentElement.dataset.theme=saved;
$("#theme").onclick=()=>{let t=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=t;localStorage.setItem("kc-theme",t)};
$("#menu").onclick=()=>$(".mobile-nav").classList.toggle("open");$$(".mobile-nav a").forEach(a=>a.onclick=()=>$(".mobile-nav").classList.remove("open"));
const persona={
anyone:"Hello there, I’m a<br>designer who cares<br>about making <i>useful,</i><br>beautiful digital things.",
recruiter:"I bring product thinking,<br>visual craft and <i>4+ years</i><br>of hands-on design<br>experience.",
director:"I care about systems,<br>quality and <i>coherent</i><br>experiences from strategy<br>to final pixels.",
designer:"I love the craft—<br>flows, systems, prototypes,<br><i>interaction</i> and all the<br>tiny details.",
pm:"I turn ambiguity into<br>clear product direction,<br>balancing <i>users</i>, business<br>and delivery.",
engineer:"I design with buildability<br>in mind—clear systems,<br><i>states</i>, behavior and<br>collaboration."
};
$$(".persona button").forEach(b=>b.onclick=()=>{$$(".persona button").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("#hero-copy").innerHTML=persona[b.dataset.persona];split($("#hero-copy"));setTimeout(()=>$("#hero-copy").classList.add("show"),30)});
function split(el){if(el.dataset.split)return;let nodes=[...el.childNodes],out="";nodes.forEach(n=>{if(n.nodeType===3){out+=[...n.textContent].map(c=>c===" "?" ":"<span class='char'>"+c+"</span>").join("")}else if(n.nodeName==="BR")out+="<br>";else out+="<"+n.nodeName.toLowerCase()+">"+[...n.textContent].map(c=>c===" "?" ":"<span class='char'>"+c+"</span>").join("")+"</"+n.nodeName.toLowerCase()+">"});el.innerHTML=out;el.dataset.split=1;el.querySelectorAll(".char").forEach((c,i)=>c.style.transitionDelay=(i%45)*8+"ms")}
$$(".split").forEach(split);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});$$("[data-reveal],.split").forEach(x=>io.observe(x));
const sections=$$("main section"),links=$$(".topbar nav a");new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}}),{threshold:.25}).observe;
sections.forEach(s=>{new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+s.id))}),{threshold:.25}).observe(s)});
if(matchMedia("(pointer:fine)").matches){let c=$(".cursor"),d=$(".cursor-dot");addEventListener("mousemove",e=>{c.style.left=e.clientX+"px";c.style.top=e.clientY+"px";d.style.left=e.clientX+"px";d.style.top=e.clientY+"px"});$$("a,button").forEach(x=>{x.onmouseenter=()=>{c.style.width="55px";c.style.height="55px"};x.onmouseleave=()=>{c.style.width="34px";c.style.height="34px"}})}
// ==========================================
// CLEAN .HTML FROM VISIBLE URL
// Files do NOT need to be renamed or moved
// ==========================================

(function () {
  const path = window.location.pathname;

  // Homepage: /index.html -> /
  if (path.endsWith("/index.html")) {
    const cleanPath = path.replace(/index\.html$/, "");

    window.history.replaceState(
      null,
      "",
      cleanPath + window.location.search + window.location.hash
    );

    return;
  }

  // Case study pages:
  // /jungle.html -> /jungle
  // /tradie-trek.html -> /tradie-trek
  // /ewura-pay.html -> /ewura-pay
  if (path.endsWith(".html")) {
    const cleanPath = path.replace(/\.html$/, "");

    window.history.replaceState(
      null,
      "",
      cleanPath + window.location.search + window.location.hash
    );
  }
})();