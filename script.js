// ============================================================
//  JSONBin Config
// ============================================================
const BIN_ID = "6a2792bcda38895dfe9ddc93";
const API_KEY = "$2a$10$fzrT1ZEHuBXP67bUevLiueTIEt.7.ZDgL6vb11rv9GFxUFUjPpiyW";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// ============================================================
//  Default products — loaded into JSONBin on first run
// ============================================================
const DEFAULT_PRODUCTS = [
  {id:"1",name:"Apple iPhone 17",category:"iPhone",price:14000,oldPrice:15500,img:"Apple iPhone 17.webp",desc:"iPhone 17 — Brand New Sealed. All colours. 1-year warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:287},
  {id:"2",name:"Apple iPhone 16 Pro",category:"iPhone",price:12500,oldPrice:13500,img:"Apple iPhone 16, 128GB,.jpg",desc:"iPhone 16 Pro 128GB — Brand New Sealed. Desert Titanium, Black & more.",colors:["#c0a060","#1c1c1e","#d4d4d4"],stock:6,badge:"Brand New",reviews:341},
  {id:"3",name:"Apple iPhone 16",category:"iPhone",price:9500,oldPrice:10500,img:"Apple iPhone 16.jpg",desc:"iPhone 16 128GB — Brand New Sealed. All colours available. Fast delivery.",colors:["#1c1c1e","#f0a0b8","#3a7aaa"],stock:8,badge:"Brand New",reviews:412},
  {id:"4",name:"Apple iPhone 16 Plus",category:"iPhone",price:11500,oldPrice:12500,img:"Apple iPhone 16 Plus.jpg",desc:"iPhone 16 Plus — Brand New Sealed. Big screen, big battery, all colours.",colors:["#1c1c1e","#c0c0c0","#3a7aaa"],stock:4,badge:"Brand New",reviews:198},
  {id:"5",name:"Apple iPhone 15 Pro",category:"iPhone",price:9500,oldPrice:10500,img:"Apple iPhone 15 Pro.jpg",desc:"iPhone 15 Pro 128GB — Brand New Sealed. Natural Titanium, Black & White.",colors:["#c0c0c0","#1c1c1e","#e0e0d8"],stock:5,badge:"Brand New",reviews:523},
  {id:"6",name:"Apple iPhone 15 Plus",category:"iPhone",price:7800,oldPrice:8500,img:"Apple iPhone 15 Plus.jpg",desc:"iPhone 15 Plus 128GB — Brand New Sealed. Pink, Yellow, Green, Blue & more.",colors:["#f0c0c8","#f5e060","#70b878","#5080c0"],stock:7,badge:"Brand New",reviews:276},
  {id:"7",name:"Apple iPhone 15, 128GB",category:"iPhone",price:7000,oldPrice:7800,img:"Apple iPhone 15, 128GB.jpg",desc:"iPhone 15 128GB — Brand New Sealed. All colours. Courier 1–2 days SA.",colors:["#1c1c1e","#f0c0c8","#f0ece0"],stock:9,badge:"Brand New",reviews:389},
  {id:"8",name:"Apple iPhone 15 Black",category:"iPhone",price:7000,oldPrice:7800,img:"Apple iPhone 15, 128GB, Black.jpg",desc:"iPhone 15 128GB Black — Brand New Sealed. Sleek black finish, fast delivery.",colors:["#1c1c1e"],stock:6,badge:"Brand New",reviews:211},
  {id:"9",name:"Apple iPhone 14, Purple",category:"iPhone",price:6000,oldPrice:6800,img:"Apple iPhone 14, 128GB, Purple.jpg",desc:"iPhone 14 128GB Purple — Brand New Sealed. Beautiful deep purple colour.",colors:["#6a4a8a","#1c1c1e","#c0c0c0"],stock:5,badge:"Brand New",reviews:304},
  {id:"10",name:"Apple iPhone 14",category:"iPhone",price:6000,oldPrice:6800,img:"Apple iPhone 14.jpg",desc:"iPhone 14 128GB — Brand New Sealed. Multiple colours. 1-year warranty.",colors:["#1c1c1e","#c0c0c0","#6a4a8a","#3a70b8"],stock:7,badge:"Brand New",reviews:445},
  {id:"11",name:"Apple iPhone 13",category:"iPhone",price:5500,oldPrice:6200,img:"Apple iPhone 13.jpg",desc:"iPhone 13 128GB — Brand New Sealed. Midnight, Starlight, Blue, Pink & more.",colors:["#1c1c1e","#f0ece0","#3a5a9a","#e8a0b8"],stock:8,badge:"Brand New",reviews:612},
  {id:"12",name:"Apple iPhone 13 Pro",category:"iPhone",price:6500,oldPrice:7200,img:"Apple iPhone 13 1.jpg",desc:"iPhone 13 Pro 128GB — Brand New Sealed. All original colours available.",colors:["#1c1c1e","#38a860","#f0ece0"],stock:6,badge:"Brand New",reviews:398},
  {id:"13",name:"Apple iPhone 12 Mini",category:"iPhone",price:3800,oldPrice:4200,img:"Apple iPhone 12 Mini.jpg",desc:"iPhone 12 Mini 64GB — Brand New Sealed. Compact powerhouse. All colours.",colors:["#1c1c1e","#3a5a9a","#38a860","#c02020"],stock:9,badge:"Brand New",reviews:287},
  {id:"14",name:"Apple iPhone 11",category:"iPhone",price:3200,oldPrice:3600,img:"Apple iPhone 11.jpg",desc:"iPhone 11 64GB — Brand New Sealed. Purple, Black, White, Yellow, Green & Red.",colors:["#8a60b8","#1c1c1e","#f0f0f0","#d8d060","#38a860","#c02020"],stock:10,badge:"Brand New",reviews:734},
  {id:"15",name:"Apple iPhone Air",category:"iPhone",price:15000,oldPrice:16500,img:"Apple iPhone Air.jpg",desc:"iPhone Air — Brand New Sealed. The thinnest iPhone ever made.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:3,badge:"Brand New",reviews:89},
  {id:"16",name:"Apple MacBook Pro 2024",category:"MacBook",price:18000,oldPrice:20000,img:"Apple MacBook Pro 2024.jpg",desc:"MacBook Pro M4 2024 — Brand New Sealed. 16GB RAM, 512GB SSD. Space Black.",colors:["#1c1c1e","#c0c0c0"],stock:2,badge:"Brand New",reviews:156},
  {id:"17",name:"Apple MacBook Air 2024",category:"MacBook",price:14000,oldPrice:15500,img:"Apple 2024 MacBook Air.jpg",desc:"MacBook Air M3 2024 — Brand New Sealed. 8GB RAM, 256GB SSD. All colours.",colors:["#1c1c1e","#c8baa8","#a0c0c8","#f0ece0"],stock:4,badge:"Brand New",reviews:203},
  {id:"18",name:"Apple MacBook Air M2 2023",category:"MacBook",price:8500,oldPrice:9500,img:"2023 Apple MacBook Air.jpg",desc:"MacBook Air M2 2023 — Brand New Sealed. 8GB RAM, 256GB SSD. Midnight & Starlight.",colors:["#1c1c1e","#f0ece0"],stock:5,badge:"Brand New",reviews:312},
  {id:"19",name:"Apple MacBook M2 2023",category:"MacBook",price:9000,oldPrice:10000,img:"2023 Apple MacBook.jpg",desc:"Apple MacBook 2023 — Brand New Sealed. M2 chip, fast and powerful.",colors:["#1c1c1e","#c0c0c0"],stock:4,badge:"Brand New",reviews:178},
  {id:"20",name:"Apple MacBook Pro M3 Pro 2023",category:"MacBook",price:22000,oldPrice:24000,img:"Apple 2023 MacBook Pro with Apple.jpg",desc:"MacBook Pro M3 Pro 2023 — Brand New Sealed. 18GB RAM, 512GB SSD.",colors:["#c0c0c0","#1c1c1e"],stock:2,badge:"Brand New",reviews:94},
  {id:"21",name:"MacBook Neo 13-inch 2026",category:"MacBook",price:16000,oldPrice:17500,img:"2026 MacBook Neo 13-inch.jpg",desc:"MacBook Neo 2026 Edition — Brand New Sealed. Latest M-series chip. 13-inch.",colors:["#1c1c1e","#c0c0c0"],stock:3,badge:"Brand New",reviews:67},
  {id:"22",name:"Apple MacBook Air M1 2021",category:"MacBook",price:7500,oldPrice:8500,img:"Apple 2021 MacBook.jpg",desc:"MacBook Air M1 2021 — Brand New Sealed. 8GB RAM, 256GB SSD. Gold & Space Grey.",colors:["#c8b090","#808080"],stock:6,badge:"Brand New",reviews:445},
  {id:"23",name:"Apple Watch Ultra",category:"Watch",price:6500,oldPrice:7200,img:"Apple Watch Ultra.jpg",desc:"Apple Watch Ultra — Brand New Sealed. GPS + Cellular, Titanium case, Ocean Band.",colors:["#c0c0c0","#f5a020"],stock:3,badge:"Brand New",reviews:189},
  {id:"24",name:"Apple Watch Ultra GPS",category:"Watch",price:6500,oldPrice:7200,img:"Apple Watch Ultra [GPS.webp",desc:"Apple Watch Ultra GPS — Brand New Sealed. Adventure-ready titanium smartwatch.",colors:["#c0c0c0"],stock:4,badge:"Brand New",reviews:143},
  {id:"25",name:"Apple Watch Series 8",category:"Watch",price:4000,oldPrice:4500,img:"Apple Watch Series 8.jpg",desc:"Apple Watch Series 8 GPS 45mm — Brand New Sealed. Multiple colours.",colors:["#1c1c1e","#f0f0f0","#c02020","#e8c0b8"],stock:5,badge:"Brand New",reviews:267},
  {id:"26",name:"Apple Watch Series 7",category:"Watch",price:3000,oldPrice:3400,img:"Apple Watch Series 7.jpg",desc:"Apple Watch Series 7 — Brand New Sealed. Green, Blue, Red, Midnight & Starlight.",colors:["#38a860","#3a70b8","#c02020"],stock:7,badge:"Brand New",reviews:334},
  {id:"27",name:"Apple Watch Series 6",category:"Watch",price:2500,oldPrice:2900,img:"Apple Watch Series 6.jpg",desc:"Apple Watch Series 6 — Brand New Sealed. Always-on Retina display.",colors:["#1c1c1e","#c02020","#3a70b8"],stock:8,badge:"Brand New",reviews:412},
  {id:"28",name:"Apple Watch SE",category:"Watch",price:2000,oldPrice:2400,img:"Apple Watch SE.jpg",desc:"Apple Watch SE — Brand New Sealed. Essential smartwatch at an affordable price.",colors:["#1c1c1e","#f0ece0","#c0c0c0"],stock:10,badge:"Brand New",reviews:523},
  {id:"29",name:"Apple iPad Pro M4 2024",category:"iPad",price:14000,oldPrice:15500,img:"Apple iPad Pro 2024.jpg",desc:"iPad Pro M4 2024 — Brand New Sealed. 11-inch Wi-Fi 256GB. Ultra Retina display.",colors:["#c0c0c0","#1c1c1e"],stock:4,badge:"Brand New",reviews:167},
  {id:"30",name:"Apple iPad Air M3 2025",category:"iPad",price:8500,oldPrice:9500,img:"2025 Apple iPad Air.jpg",desc:"iPad Air M3 2025 — Brand New Sealed. 11-inch Wi-Fi 128GB. All colours.",colors:["#4a7aaa","#e8a0b8","#9a70c8","#f0ece0"],stock:6,badge:"Brand New",reviews:198},
  {id:"31",name:"Apple iPad Air 2025",category:"iPad",price:8500,oldPrice:9500,img:"Apple 2025 iPad Air.jpg",desc:"iPad Air M3 2025 — Brand New Sealed. Thin, light and powerful.",colors:["#4a7aaa","#f0ece0"],stock:5,badge:"Brand New",reviews:145},
  {id:"32",name:"Apple iPad Pro",category:"iPad",price:12000,oldPrice:13500,img:"Apple iPad Pro.jpg",desc:"Apple iPad Pro — Brand New Sealed. M-series chip, ProMotion display.",colors:["#c0c0c0","#1c1c1e"],stock:4,badge:"Brand New",reviews:223},
  {id:"33",name:"Apple iPad 10th Gen 2022",category:"iPad",price:6000,oldPrice:6800,img:"Apple 2022 iPad.jpg",desc:"iPad 10th Gen 2022 — Brand New Sealed. Wi-Fi 64GB. Blue, Pink, Yellow, Silver.",colors:["#4a7aaa","#e8a0b8","#f5e060","#c0c0c0"],stock:8,badge:"Brand New",reviews:389},
  {id:"34",name:"Apple iPad 8th Gen 2020",category:"iPad",price:5000,oldPrice:5800,img:"2020 Apple iPad.jpg",desc:"iPad 8th Gen 2020 — Brand New Sealed. A12 Bionic, 32GB Wi-Fi.",colors:["#c0c0c0","#808080"],stock:7,badge:"Brand New",reviews:456},
  {id:"35",name:"AirPods Pro 2nd Gen",category:"AirPods",price:900,oldPrice:1100,img:"Apple AirPods Pro.jpg",desc:"AirPods Pro 2nd Generation — Brand New Sealed. Active Noise Cancellation.",colors:["#f0f0f0"],stock:12,badge:"Brand New",reviews:678},
  {id:"36",name:"AirPods 3rd Gen",category:"AirPods",price:1100,oldPrice:1300,img:"Apple AirPods 3rd Gen.jpg",desc:"AirPods 3rd Generation — Brand New Sealed. Spatial audio, lightning case.",colors:["#f0f0f0"],stock:10,badge:"Brand New",reviews:534},
  {id:"37",name:"AirPods 4th Gen",category:"AirPods",price:1500,oldPrice:1750,img:"Apple AirPods 4th Gen.jpg",desc:"AirPods 4th Generation — Brand New Sealed. Latest Apple audio technology.",colors:["#f0f0f0"],stock:8,badge:"Brand New",reviews:312},
  {id:"38",name:"AirPods Max",category:"AirPods",price:2500,oldPrice:2900,img:"Apple AirPods Max.jpg",desc:"AirPods Max — Brand New Sealed. Premium over-ear headphones with ANC.",colors:["#1c1c1e","#c0c0c0","#e8d0a8"],stock:5,badge:"Brand New",reviews:245},
];

// ============================================================
//  JSONBin helpers
// ============================================================
async function loadFromBin() {
  try {
    const res = await fetch(BIN_URL + "/latest", {
      headers: { "X-Access-Key": API_KEY }
    });
    const data = await res.json();
    const record = data.record;
    // If bin only has the placeholder, upload all default products
    if (!Array.isArray(record) || record.length <= 1) {
      await saveToBin(DEFAULT_PRODUCTS);
      return DEFAULT_PRODUCTS;
    }
    return record;
  } catch (e) {
    console.warn("JSONBin load failed, using defaults", e);
    return DEFAULT_PRODUCTS;
  }
}

async function saveToBin(data) {
  await fetch(BIN_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Access-Key": API_KEY
    },
    body: JSON.stringify(data)
  });
}

// ============================================================
//  State
// ============================================================
let products = [];
let cart = [], activeFilter = 'All', cartOpen = false, wishlist = new Set();
const pagState = { deals:{page:0}, weekly:{page:0}, mostSelling:{page:0} };
const PS = 3;

// ============================================================
//  Card
// ============================================================
function card(p) {
  const hasOld = p.oldPrice && p.oldPrice > p.price;
  const isWish = wishlist.has(p.id);
  return `<div class="product-card" onclick="openPDP('${p.id}')">
    <div class="product-img">
      <div style="position:absolute;top:9px;left:9px;background:var(--blue-dark);color:#fff;font-size:9.5px;font-weight:700;padding:3px 8px;border-radius:11px;z-index:2">${p.badge||'Brand New'}</div>
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src=''">
      <button class="wishlist-btn${isWish?' active':''}" onclick="toggleWish(event,'${p.id}')"><i class="fa fa-heart"></i></button>
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${(p.desc||'').substring(0,56)}...</div>
      <div class="product-stars"><span class="stars">★★★★★</span><span class="review-count">(${p.reviews||99})</span></div>
      <div class="product-bottom">
        <div class="product-price">R${Number(p.price).toLocaleString()}${hasOld?`<span class="old-price">R${Number(p.oldPrice).toLocaleString()}</span>`:''}</div>
        <button class="btn-cart" onclick="addToCart(event,'${p.id}')">Add to Cart</button>
      </div>
    </div>
  </div>`;
}

// ============================================================
//  Render
// ============================================================
function renderGrid(filterFn, id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = products.filter(filterFn).map(card).join('') || '<div style="grid-column:1/-1;text-align:center;padding:44px;color:var(--text-muted)">No products found</div>';
}
function renderAll() {
  renderGrid(p=>p.category==='iPhone','iphoneGrid');
  renderGrid(p=>p.category==='MacBook','macbookGrid');
  renderGrid(p=>p.category==='Watch','watchGrid');
  renderGrid(p=>p.category==='iPad','ipadGrid');
  renderGrid(p=>p.category==='AirPods','airpodsGrid');
}
function getProds(k) {
  if(k==='deals') return activeFilter==='All'?products:products.filter(p=>p.category===activeFilter);
  if(k==='weekly'){if(!window._wo)window._wo=[...products].sort(()=>Math.random()-.5);return window._wo;}
  return[...products].sort((a,b)=>(b.stock||0)-(a.stock||0));
}
function renderSlider(k) {
  const prods=getProds(k),page=pagState[k].page,total=Math.ceil(prods.length/PS);
  if(!total)return;
  const slice=prods.slice(page*PS,page*PS+PS);
  const g=document.getElementById(k+'Grid'),n=document.getElementById(k+'Nav');
  if(g)g.innerHTML=slice.map(card).join('');
  const dots=Array.from({length:total},(_,i)=>`<button class="pag-dot${i===page?' active':''}" onclick="goPage('${k}',${i})"></button>`).join('');
  if(n)n.innerHTML=`<div class="pag-dots">${dots}</div><button class="pag-btn" onclick="goPage('${k}',${page-1})" ${page===0?'disabled':''}>&#8249;</button><button class="pag-btn" onclick="goPage('${k}',${page+1})" ${page>=total-1?'disabled':''}>&#8250;</button>`;
}
function goPage(k,p){const t=Math.ceil(getProds(k).length/PS);if(p<0||p>=t)return;pagState[k].page=p;renderSlider(k);}
function setFilter(f,el){activeFilter=f;document.querySelectorAll('#filterPills .pill').forEach(p=>p.classList.remove('active'));el.classList.add('active');pagState.deals.page=0;renderSlider('deals');}

// ============================================================
//  Wishlist & Cart
// ============================================================
function toggleWish(e,id){e.stopPropagation();if(wishlist.has(id))wishlist.delete(id);else wishlist.add(id);renderAll();renderSlider('deals');renderSlider('weekly');renderSlider('mostSelling');showToast(wishlist.has(id)?'Added to wishlist':'Removed from wishlist');}
function addToCart(e,id){e.stopPropagation();const p=products.find(x=>x.id===id),ex=cart.find(x=>x.id===id);if(ex)ex.qty++;else cart.push({...p,qty:1});updateCartUI();showToast(`${p.name} added to cart`);}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);updateCartUI();}
function changeQty(id,d){const i=cart.find(x=>x.id===id);if(!i)return;i.qty+=d;if(i.qty<=0)removeFromCart(id);else updateCartUI();}
function updateCartUI(){
  const total=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').textContent=total;
  const empty=cart.length===0;
  document.getElementById('cartEmpty').style.display=empty?'block':'none';
  document.getElementById('cartFooter').style.display=empty?'none':'block';
  if(!empty){
    document.getElementById('cartTotal').textContent='R'+cart.reduce((s,i)=>s+(i.price*i.qty),0).toLocaleString();
    document.getElementById('cartItems').innerHTML=`<div class="cart-empty" id="cartEmpty" style="display:none"></div>`+cart.map(i=>`<div class="cart-item"><img class="cart-item-img" src="${i.img}" alt="${i.name}"><div class="cart-item-info"><h4>${i.name}</h4><div class="cart-item-price">R${(i.price*i.qty).toLocaleString()}</div><div class="qty-ctrl"><button class="qty-btn" onclick="changeQty('${i.id}',-1)">−</button><span class="qty-num">${i.qty}</span><button class="qty-btn" onclick="changeQty('${i.id}',1)">+</button></div></div><button class="cart-item-remove" onclick="removeFromCart('${i.id}')"><i class="fa fa-trash"></i></button></div>`).join('');
  }
}
function toggleCart(){cartOpen=!cartOpen;document.getElementById('cartDrawer').classList.toggle('open',cartOpen);document.getElementById('cartOverlay').classList.toggle('open',cartOpen);document.getElementById('overlay').classList.remove('open');document.getElementById('mobileNav').classList.remove('open');}
function checkout(){if(!cart.length){showToast('Your cart is empty!');return;}const msg=`Hi Exclusive iPhones RSA! I'd like to order:\n${cart.map(i=>`- ${i.name} x${i.qty} = R${(i.price*i.qty).toLocaleString()}`).join('\n')}\nTotal: R${cart.reduce((s,i)=>s+(i.price*i.qty),0).toLocaleString()}`;window.open(`https://wa.me/27838687662?text=${encodeURIComponent(msg)}`,'_blank');}

// ============================================================
//  PDP
// ============================================================
let pdpQty=1;
function openPDP(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  pdpQty=1;
  document.getElementById('pdpBreadCat').textContent=p.category;
  document.getElementById('pdpBreadName').textContent=p.name;
  document.getElementById('pdpMainImgWrap').innerHTML=`<img id="pdpMainImg" src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain">`;
  document.getElementById('pdpThumbs').innerHTML=[p.img,p.img,p.img].map((img,i)=>`<div class="pdp-thumb${i===0?' active':''}" onclick="pdpThumb(this,'${img}')"><img src="${img}" alt="" style="width:100%;height:100%;object-fit:contain"></div>`).join('');
  const hasOld=p.oldPrice&&p.oldPrice>p.price;
  const dots=(p.colors||['#1c1c1e']).map((c,i)=>`<div class="pdp-color-dot${i===0?' active':''}" style="background:${c}" onclick="pdpColor(this)"></div>`).join('');
  document.getElementById('pdpInfo').innerHTML=`<div class="pdp-badge">${p.badge||'Brand New'}</div><h1 class="pdp-name">${p.name}</h1><div class="pdp-stars-row"><span class="stars" style="font-size:15px">★★★★★</span>4.9 &nbsp;|&nbsp; ${p.reviews||99} reviews</div><div class="pdp-price-row"><div class="pdp-price">R${Number(p.price).toLocaleString()}</div>${hasOld?`<div class="pdp-old-price">R${Number(p.oldPrice).toLocaleString()}</div>`:''}</div><div class="pdp-monthly">Order, Pay, Receive — courier 1–2 days anywhere in SA</div><div class="pdp-desc">${p.desc}</div><div class="pdp-label">Choose a Colour</div><div class="pdp-colors">${dots}</div><div class="pdp-stock-note"><i class="fa fa-fire"></i> Only ${p.stock||5} items left</div><div class="pdp-qty-row"><div class="pdp-label" style="margin:0">Qty</div><div class="pdp-qty-ctrl"><button class="qty-btn" onclick="pdpQtyChange(-1)">−</button><span class="pdp-qty-num qty-num" id="pdpQtyNum" style="font-size:14.5px;font-weight:700;min-width:34px;text-align:center;border-left:1px solid var(--border);border-right:1px solid var(--border);height:38px;display:flex;align-items:center;justify-content:center;padding:0 7px">1</span><button class="qty-btn" onclick="pdpQtyChange(1)">+</button></div></div><div class="pdp-btns"><button class="pdp-btn-buy" onclick="pdpBuy('${p.id}')"><i class="fab fa-whatsapp"></i> Buy via WhatsApp</button><button class="pdp-btn-cart" onclick="pdpCart('${p.id}')">Add to Cart</button></div><div class="pdp-delivery"><div class="pdp-delivery-item"><i class="fa fa-truck"></i><div><h5>Free Delivery</h5><p>Nationwide via Postnet, PEP & The Courier Guy — 1–2 days</p></div></div><div class="pdp-delivery-item"><i class="fa fa-shield-alt"></i><div><h5>Brand New & Sealed</h5><p>100% brand new in box, warranty included</p></div></div><div class="pdp-delivery-item"><i class="fab fa-whatsapp"></i><div><h5>WhatsApp Support 24/7</h5><p>+27 83 868 7662</p></div></div></div>`;
  const rel=products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4);
  document.getElementById('pdpRelated').innerHTML=rel.length?`<h3>You May Also Like</h3><div class="pdp-related-grid">${rel.map(card).join('')}</div>`:'';
  document.getElementById('pdpPage').classList.add('open');
  document.getElementById('pdpPage').scrollTop=0;
  document.body.style.overflow='hidden';
}
function closePDP(){document.getElementById('pdpPage').classList.remove('open');document.body.style.overflow='';}
function pdpThumb(el,src){document.getElementById('pdpMainImg').src=src;document.querySelectorAll('.pdp-thumb').forEach(t=>t.classList.remove('active'));el.classList.add('active');}
function pdpColor(el){document.querySelectorAll('.pdp-color-dot').forEach(d=>d.classList.remove('active'));el.classList.add('active');}
function pdpQtyChange(d){pdpQty=Math.max(1,pdpQty+d);document.getElementById('pdpQtyNum').textContent=pdpQty;}
function pdpCart(id){const p=products.find(x=>x.id===id),ex=cart.find(x=>x.id===id);if(ex)ex.qty+=pdpQty;else cart.push({...p,qty:pdpQty});updateCartUI();showToast(`${p.name} added to cart`);closePDP();setTimeout(toggleCart,350);}
function pdpBuy(id){const p=products.find(x=>x.id===id);const msg=`Hi! I want to order: ${p.name} x${pdpQty} = R${(p.price*pdpQty).toLocaleString()}`;window.open(`https://wa.me/27838687662?text=${encodeURIComponent(msg)}`,'_blank');}

// ============================================================
//  Nav / Search / FAQ / Utils
// ============================================================
function toggleMobileNav(){document.getElementById('mobileNav').classList.toggle('open');document.getElementById('overlay').classList.toggle('open');}
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open');document.getElementById('overlay').classList.remove('open');}
function handleSearch(e){
  const q=e.target.value.toLowerCase().trim();
  const allSec=document.getElementById('section-all');
  if(!q){allSec.style.display='none';return;}
  const f=products.filter(p=>p.name.toLowerCase().includes(q)||(p.desc||'').toLowerCase().includes(q)||p.category.toLowerCase().includes(q));
  document.getElementById('allGrid').innerHTML=f.length?f.map(card).join(''):`<div style="grid-column:1/-1;text-align:center;padding:44px;color:var(--text-muted)"><i class="fa fa-search" style="font-size:32px;margin-bottom:11px;display:block"></i><p>No products found</p></div>`;
  allSec.style.display='block';
  scrollToSection('section-all');
}
function clearSearch(){document.getElementById('searchInput').value='';document.getElementById('section-all').style.display='none';}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);}
function scrollToSection(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function toggleFaq(questionEl){
  const item=questionEl.closest('.faq-item');
  const isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-icon i').className='fa fa-plus';});
  if(!isOpen){item.classList.add('open');item.querySelector('.faq-icon i').className='fa fa-times';}
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('pdpPage').classList.contains('open'))closePDP();});

// ============================================================
//  Boot — load from JSONBin then render
// ============================================================
loadFromBin().then(data => {
  products = data;
  renderAll();
  renderSlider('deals');
  renderSlider('weekly');
  renderSlider('mostSelling');
});
