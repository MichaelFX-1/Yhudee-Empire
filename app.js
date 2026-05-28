const PRODUCTS = [
  { id:1,  name:"Casio Wristwatch", price:14500, cat:"Timepieces", img:"products/casio-watch.jpg", desc:"Iconic Casio precision — classic everyday luxury." },
  { id:2,  name:"Flower Earrings", price:4500, cat:"Earrings", img:"products/flower-earrings.jpg", desc:"Delicate floral studs with a soft golden glow." },
  { id:3,  name:"Premium Ladies Wristwatch", price:21500, cat:"Timepieces", img:"products/female-watch.jpg", desc:"Crystal-set ladies timepiece, premium finish." },
  { id:4,  name:"Stainless Steel Ladies Bangle", price:3500, cat:"Bangles", img:"products/bangle.jpg", desc:"Polished stainless steel — timeless and lustrous." },
  { id:5,  name:"Signature Bracelet", price:11000, cat:"Bracelets", img:"products/bracelet.jpg", desc:"Sculpted bracelet with luminous detailing." },
  { id:6,  name:"Gem Drop Earrings", price:3500, cat:"Earrings", img:"products/gem-earrings.jpg", desc:"Faceted gem drops — elegant evening sparkle." },
  { id:7,  name:"Orchid Stone Earrings", price:3500, cat:"Earrings", img:"products/orchid-earrings.jpg", desc:"Orchid-cut stones with a rose-gold halo." },
  { id:8,  name:"Tomi Double Leather Watch", price:27500, cat:"Timepieces", img:"products/tomi-watch.jpg", desc:"Tomi double-strap leather. Box, bag & adjuster included." },
  { id:9,  name:"Solid Quality Male Wristwatch", price:27000, cat:"Timepieces", img:"products/casio-watch.jpg", desc:"Bold solid build for the modern gentleman." },
  { id:10, name:"Poedagar Premium Watch", price:25999, cat:"Timepieces", img:"products/poedagar-watch.jpg", desc:"Poedagar signature — sapphire shine, leather strap." },
  { id:11, name:"Poedagar Couple Set", price:25999, cat:"Timepieces", img:"products/poedagar-pair.jpg", desc:"His & hers Poedagar — emerald and ocean dials." },
  { id:12, name:"Poedagar Brown Leather", price:25999, cat:"Timepieces", img:"products/poedagar-brown.jpg", desc:"Poedagar quartz with rich brown croco leather." },
  { id:13, name:"Poedagar Duo Set", price:25999, cat:"Timepieces", img:"products/poedagar-duo.jpg", desc:"Twin set — midnight blue & ivory silver. Boxed pair." },
  { id:14, name:"Scottie Rose-Gold Bracelet Watch", price:11000, cat:"Bracelets", img:"products/scottie-bracelet.jpg", desc:"Scottie oval bracelet watch — your best statement piece." },
  { id:15, name:"Matte Black Stealth Watch", price:27000, cat:"Timepieces", img:"products/matte-black-watch.jpg", desc:"All-black timepiece. Box, tools & adjuster included." },
  { id:16, name:"Matte Black Twin Set", price:27000, cat:"Timepieces", img:"products/matte-black-duo.jpg", desc:"Twin matte-black watches — numerical & indexed pair." },
  { id:17, name:"Casio Heritage Lineup", price:14500, cat:"Timepieces", img:"products/casio-lineup.jpg", desc:"Iconic Casio square — gold, silver, black & champagne dials." },
  { id:18, name:"GG Double Bangle (Gold)", price:3500, cat:"Bangles", img:"products/gg-bangle-duo.jpg", desc:"Stainless steel GG bangle — pavé crystal medallion. Gold finish." },
  { id:19, name:"GG Double Bangle (Silver)", price:3500, cat:"Bangles", img:"products/gg-bangle-duo.jpg", desc:"Stainless steel GG bangle — pavé crystal medallion. Silver finish." },
  { id:20, name:"Butterfly Bangle (Gold)", price:3500, cat:"Bangles", img:"products/butterfly-bangle.jpg", desc:"Butterfly Collection bangle in lustrous gold — boxed." },
  { id:21, name:"Butterfly Bangle (Silver)", price:3500, cat:"Bangles", img:"products/butterfly-bangle.jpg", desc:"Butterfly Collection bangle in brushed silver — boxed." },
  { id:22, name:"Orchid Earring — Green", price:3500, cat:"Earrings", img:"products/orchid-green.jpg", desc:"Soft jade orchid bloom — bold statement stud." },
  { id:23, name:"Orchid Earring — Yellow", price:3500, cat:"Earrings", img:"products/orchid-yellow.jpg", desc:"Sun-kissed amber orchid — vibrant daylight glow." },
  { id:24, name:"Orchid Earring — White", price:3500, cat:"Earrings", img:"products/orchid-white.jpg", desc:"Ivory orchid with yellow heart — pure & luminous." },
  { id:25, name:"Orchid Earring — Pink", price:3500, cat:"Earrings", img:"products/orchid-pink.jpg", desc:"Blush pink orchid petals — romantic & feminine." },
  { id:26, name:"Orchid Earring — Red", price:3500, cat:"Earrings", img:"products/orchid-red.jpg", desc:"Crimson orchid — dramatic evening statement." },
  { id:27, name:"Orchid Earring — Blue", price:3500, cat:"Earrings", img:"products/orchid-blue.jpg", desc:"Ocean blue orchid — rare, vivid, unforgettable." },
  { id:28, name:"Leg Chain — Gold", price:2500, cat:"Leg Chain", img:"/products/Leg-Chain.jpg", desc:"Gold Piece Leg Chain — rare, aesthetic, unforgettable." },
  { id:29, name:"Leg Chain — Silver", price:2500, cat:"Leg Chain", img:"/products/Leg Chain-Silver.jpg", desc:"Rare Silver Piece Leg Chain — rare, timeless, unforgettable."},
  { id:30, name:"Leg Chain — Gold", price:2500, cat:"Leg Chain", img:"/products/Leg Chain-Gold.jpg", desc:"Rare Silver Piece Leg Chain — rare, timeless, unforgettable."},
  { id:31, name:"Leg Bracelet — Silver", price:2500, cat:"Leg Chain", img:"/products/Leg Bracelet-Silver.jpg", desc:"Rare Silver Piece Leg Chain — rare, timeless, unforgettable."},
  { id:32, name:"Earring", price:3500, cat:"Earrings", img:"/products/Earring.jpg", desc:"Delicate floral gem with a soft color glow"},
  { id:33, name:"Golden White Earring", price:3500, cat:"Earrings", img:"/products/Earring3.jpg", desc:"Rare golden white Piece earring — rare, floral, beautiful."},
  { id:34, name:"Matte Black BLue Twin-Set", price:27000, cat:"Timepieces", img:"/products/Matte Black Blue Twin-Set.jpg", desc:"Twin matte-black-blue watches - Numerical and Indexed pair"},
  { id:35, name:"Premium Ladies Wristwatch Golden", price:21500, cat:"Timepieces", img:"/products/Premium Ladies Wristwatch.jpg", desc:"Premium, Golden, set to the ladies style and premium edge luxurious finish"},
  { id:36, name:"Poedagar Premium Watch", price:25999, cat:"Timepieces", img:"products/Poedagar.jpg", desc:"Poedagar signature — sapphire shine, leather strap." },
  { id:37, name:"Poedagar Premium Watch", price:25999, cat:"Timepieces", img:"products/Poedagar2.jpg", desc:"Poedagar signature — sapphire shine, leather strap." },
  { id:38, name:"Earring — Multi-Color", price:3500, cat:"Earrings", img:"products/Earring2.jpg", desc:"Multi-Color earring — rare, vivid, unforgettable." },
  { id:39, name:"Earring — Petal", price:3500, cat:"Earrings", img:"products/Petal Earring.jpg", desc:"Flower golden earring — lush, vivid, real." },
  { id:40, name:"Poedagar Premium Watch", price:25999, cat:"Timepieces", img:"products/Poedagar Blue.jpg", desc:"Poedagar signature — sapphire shine, leather strap. Navy Blue" },
  { id:41, name:"Earring - Flower", price:3500, cat:"Earrings", img:"products/Burnt Orange Earring.jpg", desc:"Floral Burnt Orange earring — rare, vivid, unforgettable." },
  { id:42, name:"Earring — White", price:3500, cat:"Earrings", img:"products/Ball Earring.jpg", desc:"White earring — rare, vivid, unforgettable." },
  { id:43, name:"Round Ball Earring", price:3500, cat:"Earrings", img:"products/Ball Earring.jpg", desc:"Ball Earring — rare, vivid, unforgettable." },
  { id:44, name:"Earring — Golden", price:3500, cat:"Earrings", img:"products/Earring Gold.jpg", desc:"Golden-Color earring — rare, vivid, luxury, unforgettable." },
  { id:45, name:"Ball Earring", price:3500, cat:"Earrings", img:"products/Ball Earring2.jpg", desc:"Multi-Color earring — rare, vivid, unforgettable." },
  { id:46, name:"Earring — Pink Flower", price:3500, cat:"Earrings", img:"products/Pink Flower Earring.jpg", desc:"Pink Flower Earring — rare, vivid, unforgettable." },
  { id:47, name:"Earring — Golden White", price:3500, cat:"Earrings", img:"products/Golden White Earring.jpg", desc:"White Golden Earring — rare, vivid, unforgettable." }
];
const CATS = ["All","Timepieces","Earrings","Bangles","Bracelets", "Leg Chain"];
const fmt = n => "₦" + n.toLocaleString();
const $ = s => document.querySelector(s);

let state = {
  q:"", cat:"All", sort:"featured",
  cart: JSON.parse(localStorage.getItem("yhudee_cart") || "{}"),
  theme: localStorage.getItem("yhudee_theme") || "light",
  giftWrap:false
};

const setTheme = t => {
  state.theme = t;
  document.documentElement.classList.toggle("theme-light", t==="light");
  document.documentElement.classList.toggle("theme-dark", t==="dark");
  $("#themeBtn").textContent = t==="dark" ? "☀" : "☾";
  localStorage.setItem("yhudee_theme", t);
};
setTheme(state.theme);

const saveCart = () => localStorage.setItem("yhudee_cart", JSON.stringify(state.cart));
const add = id => { state.cart[id] = (state.cart[id]||0)+1; saveCart(); renderBag(); openBag(); };
const dec = id => { if(!state.cart[id]) return; state.cart[id]--; if(state.cart[id]<=0) delete state.cart[id]; saveCart(); renderBag(); };
const remove = id => { delete state.cart[id]; saveCart(); renderBag(); };

function renderChips(){
  $("#chips").innerHTML = CATS.map(c=>`<button class="chip ${state.cat===c?'on':''}" data-c="${c}">${c}</button>`).join("");
  $("#chips").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{state.cat=b.dataset.c; renderChips(); renderGrid();});
}
function renderGrid(){
  let list = PRODUCTS.filter(p =>
    (state.cat==="All" || p.cat===state.cat) &&
    (state.q==="" || p.name.toLowerCase().includes(state.q.toLowerCase()))
  );
  if(state.sort==="low") list = [...list].sort((a,b)=>a.price-b.price);
  if(state.sort==="high") list = [...list].sort((a,b)=>b.price-a.price);
  if(state.sort==="name") list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
  if(!list.length){ $("#grid").innerHTML = `<p class="empty">No pieces match your search.</p>`; return; }
  $("#grid").innerHTML = list.map(p=>`
    <article class="card">
      <div class="card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"/><span class="cat-tag">${p.cat}</span></div>
      <div class="card-body">
        <h3>${p.name}</h3><p>${p.desc}</p>
        <div class="card-row"><span class="price">${fmt(p.price)}</span>
          <button class="btn small primary" data-add="${p.id}">Add to Bag</button></div>
      </div>
    </article>`).join("");
  $("#grid").querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>add(+b.dataset.add));
}
function renderMarquees(){
  const right = PRODUCTS.concat(PRODUCTS).map(p=>`<span class="m-item"><span class="dot"></span>${p.name}</span>`).join("");
  const left = [...PRODUCTS].reverse().concat([...PRODUCTS].reverse()).map(p=>`<span class="m-item"><span class="dot"></span>${fmt(p.price)} · ${p.name}</span>`).join("");
  $("#mqRight").innerHTML = right; $("#mqLeft").innerHTML = left;
}
function items(){ return Object.entries(state.cart).map(([id,q])=>({p:PRODUCTS.find(p=>p.id===+id), q})).filter(x=>x.p); }
function renderBag(){
  const it = items();
  const total = it.reduce((s,{p,q})=>s+p.price*q,0) + (state.giftWrap?1500:0);
  const count = it.reduce((s,{q})=>s+q,0);
  $("#count").textContent = count;
  $("#total").textContent = fmt(total);
  if(!it.length){ $("#bagBody").innerHTML = `<p class="empty">Your bag awaits its first piece.</p>`; return; }
  $("#bagBody").innerHTML = it.map(({p,q})=>`
    <div class="line"><img src="${p.img}" alt=""/>
      <div class="line-body"><strong>${p.name}</strong>
        <span class="price" style="font-size:15px">${fmt(p.price)}</span>
        <div class="qty">
          <button data-dec="${p.id}">−</button><span>${q}</span>
          <button data-add="${p.id}">+</button>
          <button class="rm" data-rm="${p.id}">remove</button>
        </div>
      </div>
    </div>`).join("");
  $("#bagBody").querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>dec(+b.dataset.dec));
  $("#bagBody").querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>add(+b.dataset.add));
  $("#bagBody").querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>remove(+b.dataset.rm));
}
const openBag = () => { $("#drawer").classList.add("on"); $("#back").classList.add("on"); };
const closeBag = () => { $("#drawer").classList.remove("on"); $("#back").classList.remove("on"); };

function checkout(){
  const it = items(); if(!it.length) return;
  const total = it.reduce((s,{p,q})=>s+p.price*q,0) + (state.giftWrap?1500:0);
  const extras = [$("#boxBag").checked&&"Box & bag",$("#adjuster").checked&&"Adjuster",state.giftWrap&&"Gift wrap"].filter(Boolean).join(", ");
  const body = it.map(({p,q})=>`• ${p.name} × ${q} — ${fmt(p.price*q)}`).join("%0A");
  const text = `Hello Yhudee Empire,%0A%0AI'd like to order:%0A${body}%0A%0ATotal: ${fmt(total)}%0AExtras: ${encodeURIComponent(extras||"—")}%0A%0AName:%0AAddress:%0APhone:`;
  location.href = `mailto:yhudeeempire@gmail.com?subject=${encodeURIComponent("New Order — Yhudee Empire Store")}&body=${text}`;
}
function whatsapp(){
  const it = items();
  const body = it.length ? it.map(({p,q})=>`• ${p.name} x${q} — ${fmt(p.price*q)}`).join("\n") : "I'd like to know more about your collection.";
  window.open(`https://wa.me/2348100603289?text=${encodeURIComponent("Hello Yhudee Empire!\n"+body)}`,"_blank");
}

$("#q").oninput = e => { state.q = e.target.value; renderGrid(); };
$("#sort").onchange = e => { state.sort = e.target.value; renderGrid(); };
$("#themeBtn").onclick = () => setTheme(state.theme==="dark"?"light":"dark");
$("#openBag").onclick = openBag; $("#closeBag").onclick = closeBag; $("#back").onclick = closeBag;
$("#checkout").onclick = checkout;
$("#waCheckout").onclick = whatsapp; $("#waHero").onclick = whatsapp; $("#waContact").onclick = whatsapp;
$("#giftWrap").onchange = e => { state.giftWrap = e.target.checked; renderBag(); };
$("#yr").textContent = new Date().getFullYear();


renderChips(); renderGrid(); renderMarquees(); renderBag();
