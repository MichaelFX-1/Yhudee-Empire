/* =====================================================================
   YHUDEE EMPIRE — Luxury Fashion House
   Cinematic motion · Pricing engine · WhatsApp commerce
   ===================================================================== */

const PRODUCTS = [
  { id:1,  name:"Casio Wristwatch", price:16499, cat:"Timepieces", img:"products/casio-watch.jpg", desc:"Iconic Casio precision — classic everyday luxury." },
  { id:2,  name:"Flower Earrings", price:6499, cat:"Earrings", img:"products/flower-earrings.jpg", desc:"Delicate floral studs with a soft golden glow." },
  { id:3,  name:"Premium Ladies Wristwatch", price:23499, cat:"Timepieces", img:"products/female-watch.jpg", desc:"Crystal-set ladies timepiece, premium finish." },
  { id:4,  name:"Stainless Steel Ladies Bangle", price:5499, cat:"Bangles", img:"products/bangle.jpg", desc:"Polished stainless steel — timeless and lustrous." },
  { id:5,  name:"Signature Necklace", price:12999, cat:"Necklace", img:"products/bracelet.jpg", desc:"Sculpted necklace with luminous detailing." },
  { id:6,  name:"Gem Drop Earrings", price:5499, cat:"Earrings", img:"products/gem-earrings.jpg", desc:"Faceted gem drops — elegant evening sparkle." },
  { id:7,  name:"Orchid Stone Earrings", price:5499, cat:"Earrings", img:"products/orchid-earrings.jpg", desc:"Orchid-cut stones with a rose-gold halo." },
  { id:8,  name:"Tomi Double Leather Watch", price:29499, cat:"Timepieces", img:"products/tomi-watch.jpg", desc:"Tomi double-strap leather. Box, bag & adjuster included." },
  { id:9,  name:"Solid Quality Male Wristwatch", price:28999, cat:"Timepieces", img:"products/casio-watch.jpg", desc:"Bold solid build for the modern gentleman." },
  { id:10, name:"Poedagar Premium Watch", price:27999, cat:"Timepieces", img:"products/poedagar-watch.jpg", desc:"Poedagar signature — sapphire shine, leather strap." },
  { id:11, name:"Poedagar Couple Set", price:27999, cat:"Timepieces", img:"products/poedagar-pair.jpg", desc:"His & hers Poedagar — emerald and ocean dials." },
  { id:12, name:"Poedagar Brown Leather", price:27999, cat:"Timepieces", img:"products/poedagar-brown.jpg", desc:"Poedagar quartz with rich brown croco leather." },
  { id:13, name:"Poedagar Duo Set", price:27999, cat:"Timepieces", img:"products/poedagar-duo.jpg", desc:"Twin set — midnight blue & ivory silver. Boxed pair." },
  { id:14, name:"Scottie Rose-Gold Bracelet Watch", price:12999, cat:"Timepieces", img:"products/scottie-bracelet.jpg", desc:"Scottie oval bracelet watch — your best statement piece." },
  { id:15, name:"Matte Black Stealth Watch", price:28999, cat:"Timepieces", img:"products/matte-black-watch.jpg", desc:"All-black timepiece. Box, tools & adjuster included." },
  { id:16, name:"Matte Black Twin Set", price:28999, cat:"Timepieces", img:"products/matte-black-duo.jpg", desc:"Twin matte-black watches — numerical & indexed pair." },
  { id:17, name:"Casio Heritage Lineup", price:16499, cat:"Timepieces", img:"products/casio-lineup.jpg", desc:"Iconic Casio square — gold, silver, black & champagne dials." },
  { id:18, name:"GG Double Bangle (Gold)", price:5499, cat:"Bangles", img:"products/gg-bangle-duo.jpg", desc:"Stainless steel GG bangle — pavé crystal medallion. Gold finish." },
  { id:19, name:"GG Double Bangle (Silver)", price:5499, cat:"Bangles", img:"products/gg-bangle-duo.jpg", desc:"Stainless steel GG bangle — pavé crystal medallion. Silver finish." },
  { id:20, name:"Butterfly Bangle (Gold)", price:5499, cat:"Bangles", img:"products/butterfly-bangle.jpg", desc:"Butterfly Collection bangle in lustrous gold — boxed." },
  { id:21, name:"Butterfly Bangle (Silver)", price:5499, cat:"Bangles", img:"products/butterfly-bangle.jpg", desc:"Butterfly Collection bangle in brushed silver — boxed." },
  { id:22, name:"Orchid Earring — Green", price:5499, cat:"Earrings", img:"products/orchid-green.jpg", desc:"Soft jade orchid bloom — bold statement stud." },
  { id:23, name:"Orchid Earring — Yellow", price:5499, cat:"Earrings", img:"products/orchid-yellow.jpg", desc:"Sun-kissed amber orchid — vibrant daylight glow." },
  { id:24, name:"Orchid Earring — White", price:5499, cat:"Earrings", img:"products/orchid-white.jpg", desc:"Ivory orchid with yellow heart — pure & luminous." },
  { id:25, name:"Orchid Earring — Pink", price:5499, cat:"Earrings", img:"products/orchid-pink.jpg", desc:"Blush pink orchid petals — romantic & feminine." },
  { id:26, name:"Orchid Earring — Red", price:5499, cat:"Earrings", img:"products/orchid-red.jpg", desc:"Crimson orchid — dramatic evening statement." },
  { id:27, name:"Orchid Earring — Blue", price:5499, cat:"Earrings", img:"products/orchid-blue.jpg", desc:"Ocean blue orchid — rare, vivid, unforgettable." },
  { id:28, name:"Leg Chain — Gold", price:4499, cat:"Leg Chain", img:"products/Leg-Chain.jpg", desc:"Gold piece leg chain — rare, aesthetic, unforgettable." },
  { id:29, name:"Leg Chain — Silver", price:4499, cat:"Leg Chain", img:"products/Leg Chain-Silver.jpg", desc:"Rare silver leg chain — timeless, unforgettable." },
  { id:30, name:"Leg Chain — Gold II", price:4499, cat:"Leg Chain", img:"products/Leg Chain-Gold.jpg", desc:"Signature gold piece leg chain — timeless statement." },
  { id:31, name:"Leg Bracelet — Silver", price:4499, cat:"Leg Chain", img:"products/Leg Bracelet-Silver.jpg", desc:"Rare silver leg bracelet — timeless, unforgettable." },
  { id:32, name:"Floral Earring", price:5499, cat:"Earrings", img:"products/Earring.jpg", desc:"Delicate floral gem with a soft color glow." },
  { id:33, name:"Golden White Earring", price:5499, cat:"Earrings", img:"products/Earring3.jpg", desc:"Rare golden white piece earring — floral, beautiful." },
  { id:34, name:"Matte Black Blue Twin-Set", price:28999, cat:"Timepieces", img:"products/Matte Black Blue Twin-Set.jpg", desc:"Twin matte black-blue watches — numerical and indexed pair." },
  { id:35, name:"Premium Ladies Wristwatch Golden", price:23499, cat:"Timepieces", img:"products/Premium Ladies Wristwatch.jpg", desc:"Golden ladies style — premium edge, luxurious finish." },
  { id:36, name:"Poedagar Premium Watch II", price:27999, cat:"Timepieces", img:"products/Poedagar.jpg", desc:"Poedagar signature — sapphire shine, leather strap." },
  { id:37, name:"Poedagar Premium Watch III", price:27999, cat:"Timepieces", img:"products/Poedagar2.jpg", desc:"Poedagar signature — sapphire shine, leather strap." },
  { id:38, name:"Earring — Multi-Color", price:5499, cat:"Earrings", img:"products/Earring2.jpg", desc:"Multi-color earring — rare, vivid, unforgettable." },
  { id:39, name:"Earring — Petal", price:5499, cat:"Earrings", img:"products/Petal Earring.jpg", desc:"Flower golden earring — lush, vivid, real." },
  { id:40, name:"Poedagar Premium Navy Blue", price:27999, cat:"Timepieces", img:"products/Poedagar Blue.jpg", desc:"Poedagar signature — sapphire shine, leather strap. Navy Blue." },
  { id:41, name:"Earring — Burnt Orange Flower", price:5499, cat:"Earrings", img:"products/Burnt Orange Earring.jpg", desc:"Floral burnt orange earring — rare, vivid, unforgettable." },
  { id:42, name:"Earring — White Ball", price:5499, cat:"Earrings", img:"products/Ball Earring.jpg", desc:"White ball earring — rare, vivid, unforgettable." },
  { id:43, name:"Round Ball Earring", price:5499, cat:"Earrings", img:"products/Ball Earring.jpg", desc:"Ball earring — rare, vivid, unforgettable." },
  { id:44, name:"Earring — Golden", price:5499, cat:"Earrings", img:"products/Earring Gold.jpg", desc:"Golden-color earring — rare, vivid, luxury, unforgettable." },
  { id:45, name:"Ball Earring — Pearl", price:5499, cat:"Earrings", img:"products/Ball Earring2.jpg", desc:"Pearl ball earring — rare, vivid, unforgettable." },
  { id:46, name:"Earring — Pink Flower", price:5499, cat:"Earrings", img:"products/Pink Flower Earring.jpg", desc:"Pink flower earring — rare, vivid, unforgettable." },
  { id:47, name:"Earring — Golden White II", price:5499, cat:"Earrings", img:"products/Golden White Earring.jpg", desc:"Golden white earring — rare, vivid, unforgettable." }
];

const CATS = ["All","Timepieces","Earrings","Bangles","Leg Chain","Necklace"];
const WA_NUMBER = "2348100603289";

/* ---------------- PRICING ENGINE ---------------- */
const fmt = n => "₦" + n.toLocaleString();
const roundPsych = n => (n % 1000 === 0 ? n - 1 : n);   // .999 psychology
const pricing = p => ({
  standard: roundPsych(p),
  promo:    roundPsych(p - 2000)   // +₦2,000 promo-as-savings model
});

const state = {
  query: "", cat: "All", sort: "featured",
  cart: JSON.parse(localStorage.getItem("yhudee_cart") || "{}"),
  giftWrap: false,
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------------- INTRO ---------------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    const i = $("#intro");
    if (i) { i.classList.add("gone"); setTimeout(()=>i.remove(),900); }
  }, 1800);
});

/* ---------------- THEME ---------------- */
const setTheme = t => {
  document.body.classList.toggle("theme-light", t === "light");
  document.body.classList.toggle("theme-dark",  t === "dark");
  localStorage.setItem("yhudee_theme", t);
  $("#themeBtn").textContent = t === "dark" ? "☀" : "☾";
};
setTheme(localStorage.getItem("yhudee_theme") || "dark");
$("#themeBtn").onclick = () => setTheme(document.body.classList.contains("theme-dark") ? "light" : "dark");

/* ---------------- NAV SCROLL ---------------- */
const nav = $("#nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30));

/* ---------------- CUSTOM CURSOR ---------------- */
const cursor = $("#cursor"), cdot = $("#cursorDot");
let mx=0,my=0,cx=0,cy=0;
window.addEventListener("mousemove", e => { mx=e.clientX; my=e.clientY; cdot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`; });
function rafCursor(){ cx+=(mx-cx)*.15; cy+=(my-cy)*.15; cursor.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(rafCursor);} rafCursor();
document.addEventListener("mouseover", e => { if (e.target.closest("a,button,[data-magnet]")) cursor.classList.add("active"); });
document.addEventListener("mouseout",  e => { if (e.target.closest("a,button,[data-magnet]")) cursor.classList.remove("active"); });

/* ---------------- CHIPS ---------------- */
const chipsEl = $("#chips");
CATS.forEach(c => {
  const b = document.createElement("button");
  b.className = "chip" + (c === state.cat ? " on" : "");
  b.textContent = c;
  b.onclick = () => { state.cat = c; [...chipsEl.children].forEach(x=>x.classList.remove("on")); b.classList.add("on"); render(); };
  chipsEl.appendChild(b);
});
$("#search").oninput = e => { state.query = e.target.value; render(); };
$("#sort").onchange = e => { state.sort = e.target.value; render(); };
$("#giftWrap").onchange = e => { state.giftWrap = e.target.checked; renderCart(); };

/* ---------------- PRODUCT GRID ---------------- */
function render() {
  let list = PRODUCTS.filter(p =>
    (state.cat==="All"||p.cat===state.cat) &&
    (state.query===""||p.name.toLowerCase().includes(state.query.toLowerCase()))
  );
  if (state.sort==="low")  list.sort((a,b)=>a.price-b.price);
  if (state.sort==="high") list.sort((a,b)=>b.price-a.price);
  if (state.sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));

  const grid = $("#grid");
  grid.innerHTML = "";
  if (!list.length) { grid.innerHTML = '<p class="empty">No pieces match your search.</p>'; return; }
  list.forEach((p,i) => {
    const pr = pricing(p.price);
    const el = document.createElement("article");
    el.className = "card reveal-up";
    el.style.transitionDelay = (i%4)*60 + "ms";
    el.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <span class="cat-tag">${p.cat}</span>
        <span class="promo-tag">Promo</span>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="card-row">
          <div class="price-stack">
            <span class="price-old">${fmt(pr.standard)}</span>
            <span class="price promo">${fmt(pr.promo)}</span>
          </div>
          <button class="btn primary small" data-add="${p.id}">Add</button>
        </div>
      </div>`;
    grid.appendChild(el);
  });
  grid.querySelectorAll("[data-add]").forEach(b => b.onclick = () => { addItem(+b.dataset.add); openDrawer(); });
  observeReveals();
}

/* ---------------- CART ---------------- */
function addItem(id) { state.cart[id] = (state.cart[id]||0) + 1; persist(); pulseCart(); }
function decItem(id) { if (!state.cart[id]) return; state.cart[id]--; if (state.cart[id]<=0) delete state.cart[id]; persist(); }
function rmItem(id)  { delete state.cart[id]; persist(); }
function persist()   { localStorage.setItem("yhudee_cart", JSON.stringify(state.cart)); renderCart(); }
function pulseCart() {
  const b = $("#cartBtn");
  b.animate([{transform:"scale(1)"},{transform:"scale(1.1)"},{transform:"scale(1)"}], {duration:400, easing:"ease-out"});
}
function cartItems() {
  return Object.entries(state.cart)
    .map(([id,q]) => ({ p: PRODUCTS.find(x=>x.id===+id), q }))
    .filter(x=>x.p);
}
function renderCart() {
  const items = cartItems();
  $("#cartCount").textContent = items.reduce((s,{q})=>s+q,0);
  const total = items.reduce((s,{p,q})=>s + pricing(p.price).promo * q, 0) + (state.giftWrap ? 1500 : 0);
  $("#total").textContent = fmt(total);
  const body = $("#drawerBody");
  body.innerHTML = "";
  if (!items.length) { body.innerHTML = '<p class="empty">Your bag awaits its first piece.</p>'; return; }
  items.forEach(({p,q}) => {
    const pr = pricing(p.price);
    const el = document.createElement("div");
    el.className = "line";
    el.innerHTML = `
      <img src="${p.img}" alt="" />
      <div class="line-body">
        <strong>${p.name}</strong>
        <span class="price-old" style="font-size:12px">${fmt(pr.standard)}</span>
        <span class="price promo" style="font-size:18px">${fmt(pr.promo)}</span>
        <div class="qty">
          <button data-dec="${p.id}">−</button><span>${q}</span><button data-inc="${p.id}">+</button>
          <button class="rm" data-rm="${p.id}">remove</button>
        </div>
      </div>`;
    body.appendChild(el);
  });
  body.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>decItem(+b.dataset.dec));
  body.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>addItem(+b.dataset.inc));
  body.querySelectorAll("[data-rm]").forEach (b=>b.onclick=()=>rmItem (+b.dataset.rm ));
}
function openDrawer()  { $("#drawer").classList.add("on");    $("#drawerBack").classList.add("on"); }
function closeDrawer() { $("#drawer").classList.remove("on"); $("#drawerBack").classList.remove("on"); }
$("#cartBtn").onclick    = openDrawer;
$("#closeDrawer").onclick = closeDrawer;
$("#drawerBack").onclick  = closeDrawer;

/* ---------------- WHATSAPP COMMERCE ---------------- */
function whatsapp() {
  const items = cartItems();
  let msg;
  if (items.length) {
    const lines = items.map(({p,q}) => `• ${p.name} ×${q} — ${fmt(pricing(p.price).promo*q)}`).join("\n");
    const total = items.reduce((s,{p,q})=>s+pricing(p.price).promo*q,0) + (state.giftWrap?1500:0);
    msg = `Hello Yhudee Empire 👑\n\nI'd like to order the following pieces:\n\n${lines}${state.giftWrap?"\n• Gift Wrap — ₦1,500":""}\n\nTotal: ${fmt(total)}\n\nDelivery name:\nAddress:\nPhone:`;
  } else {
    msg = "Hello Yhudee Empire 👑\n\nI'd like to know more about your collection.";
  }
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}
function emailCheckout() {
  const items = cartItems(); if (!items.length) return;
  const total = items.reduce((s,{p,q})=>s+pricing(p.price).promo*q,0) + (state.giftWrap?1500:0);
  const body = items.map(({p,q})=>`• ${p.name} × ${q} — ${fmt(pricing(p.price).promo*q)}`).join("%0A");
  window.location.href = `mailto:yhudeeempire@gmail.com?subject=${encodeURIComponent("New Order — Yhudee Empire")}&body=Hello Yhudee Empire,%0A%0AI'd like to order:%0A${body}%0A%0ATotal: ${fmt(total)}%0A%0AName:%0AAddress:%0APhone:`;
}
$("#waHero").onclick = whatsapp;
$("#waFloat").onclick = whatsapp;
$("#waOrderBtn").onclick = whatsapp;
$("#waFoot").onclick = e => { e.preventDefault(); whatsapp(); };
$("#checkoutBtn").onclick = emailCheckout;

/* ---------------- MARQUEES ---------------- */
function fillMarquee(el, mode) {
  const items = [...PRODUCTS, ...PRODUCTS];
  el.innerHTML = items.map(p =>
    `<span class="m-item"><span class="dot"></span>${mode==='price' ? fmt(pricing(p.price).promo) + ' · ' : ''}${p.name}</span>`
  ).join("");
}
fillMarquee($("#marqueeTop"), "name");
fillMarquee($("#marqueeBot"), "price");
$("#yr").textContent = new Date().getFullYear();

/* ---------------- HERO ORBIT ---------------- */
const orbitItems = [
  "products/poedagar-watch.jpg",
  "products/orchid-red.jpg",
  "products/gg-bangle-duo.jpg",
  "products/tomi-watch.jpg",
  "products/Ball Earring.jpg",
  "products/Leg-Chain.jpg",
  "products/matte-black-watch.jpg",
  "products/Petal Earring.jpg",
];
const orbit = $("#orbit");
const orbitRadius = Math.min(window.innerWidth, 800) < 700 ? 140 : 230;
orbitItems.forEach((src, i) => {
  const angle = (i / orbitItems.length) * Math.PI * 2;
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;
  const el = document.createElement("div");
  el.className = "o-item";
  el.style.left = `calc(50% + ${x}px - 45px)`;
  el.style.top  = `calc(50% + ${y}px - 45px)`;
  el.innerHTML = `<img src="${src}" alt="" loading="lazy"/>`;
  orbit.appendChild(el);
});

/* ---------------- HERO CANVAS — floating particles ---------------- */
(function particles(){
  const c = $("#heroCanvas"); if (!c) return;
  const ctx = c.getContext("2d");
  let w,h,parts;
  function resize(){ w=c.width=c.offsetWidth*devicePixelRatio; h=c.height=c.offsetHeight*devicePixelRatio; init(); }
  function init(){ parts = Array.from({length:60}, () => ({
    x:Math.random()*w, y:Math.random()*h,
    r:Math.random()*1.6+0.4,
    vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3,
    a:Math.random()*0.5+0.2
  })); }
  function tick(){
    ctx.clearRect(0,0,w,h);
    parts.forEach(p => {
      p.x+=p.vx; p.y+=p.vy;
      if (p.x<0||p.x>w) p.vx*=-1;
      if (p.y<0||p.y>h) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r*devicePixelRatio,0,Math.PI*2);
      ctx.fillStyle = `rgba(212,175,55,${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  window.addEventListener("resize", resize);
  resize(); tick();
})();

/* ---------------- SHOWROOM CAROUSEL ---------------- */
(function showroom(){
  const stage = $("#ssCarousel"); if (!stage) return;
  const picks = [PRODUCTS[9], PRODUCTS[7], PRODUCTS[14], PRODUCTS[17], PRODUCTS[25], PRODUCTS[33], PRODUCTS[39], PRODUCTS[2]];
  const n = picks.length;
  const radius = 360;
  picks.forEach((p,i) => {
    const a = (i / n) * 360;
    const el = document.createElement("div");
    el.className = "ss-item";
    el.style.transform = `rotateY(${a}deg) translateZ(${radius}px)`;
    el.innerHTML = `<img src="${p.img}" alt="${p.name}"><div class="ss-label"><span>${p.cat}</span><h4>${p.name}</h4></div>`;
    stage.appendChild(el);
  });
  let manual = 0;
  $("#ssPrev").onclick = () => { manual -= 45; stage.style.transform = `rotateY(${manual}deg)`; stage.style.animation = "none"; };
  $("#ssNext").onclick = () => { manual += 45; stage.style.transform = `rotateY(${manual}deg)`; stage.style.animation = "none"; };
})();

/* ---------------- GALLERY WALL ---------------- */
(function gallery(){
  const wall = $("#galleryWall"); if (!wall) return;
  const picks = [...PRODUCTS].sort(()=>Math.random()-0.5).slice(0,16);
  wall.innerHTML = picks.map(p => `<div class="g-item"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>`).join("");
})();

/* ---------------- SCROLL REVEALS ---------------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
function observeReveals(){ $$(".reveal, .reveal-up").forEach(el => io.observe(el)); }
// Safety net: any reveal still hidden after 3.5s gets revealed
setTimeout(() => $$(".reveal, .reveal-up").forEach(el => el.classList.add("in")), 3500);

/* ---------------- GSAP CINEMATIC SEQUENCES ---------------- */
window.addEventListener("load", () => {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero title word stagger
  gsap.from(".hero-title .word", {
    yPercent: 110, duration: 1.2, ease: "expo.out", stagger: 0.12, delay: 0.4
  });
  gsap.from(".hero .kicker, .hero .lead, .hero .cta, .hero-meta", {
    y: 30, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.12, delay: 1
  });

  // Section heads parallax
  $$(".section-head").forEach(el => {
    gsap.from(el, {
      y: 60, opacity: 0, duration: 1, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  // Collection cards 3D entry
  gsap.from(".collection", {
    y: 80, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.1,
    scrollTrigger: { trigger: ".collections", start: "top 80%" }
  });

  // Drop banner parallax
  gsap.to(".db-bg", {
    yPercent: -15,
    scrollTrigger: { trigger: ".drop-banner", scrub: true }
  });

  // Hero stage rotate on scroll
  gsap.to(".orbit", {
    rotation: 90,
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
});

/* ---------------- TILT (collections) ---------------- */
$$("[data-tilt]").forEach(el => {
  el.addEventListener("mousemove", e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - 0.5;
    const y = (e.clientY - r.top )/r.height - 0.5;
    el.style.transform = `translateY(-10px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  });
  el.addEventListener("mouseleave", () => el.style.transform = "");
});

/* ---------------- MAGNETIC BUTTONS ---------------- */
$$("[data-magnet]").forEach(el => {
  el.addEventListener("mousemove", e => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top  - r.height/2;
    el.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });
  el.addEventListener("mouseleave", () => el.style.transform = "");
});

/* ---------------- BOOT ---------------- */
render();
renderCart();
observeReveals();
