/**
 * Bloom by Janvi — E-Commerce Engine
 * Matches reference design. Preserves cart/wishlist in localStorage.
 */

'use strict';

const INSTAGRAM_URL = 'https://www.instagram.com/bloombyjanvi';

// ─── Product Catalogue (with accurate image-to-name mapping — all ₹250) ───
const PRODUCTS = [
  {
    id: 1,
    name: 'Pink Dreamcatcher',
    price: 250,
    image: 'imgs/6.jpg',
    gallery: ['imgs/6.jpg', 'imgs/2.jpg'],
    desc: 'A delicate pink dreamcatcher handwoven with love, soft feathers and pearl beads. Perfect wall decor or gifting piece.',
    category: 'Dreamcatcher'
  },
  {
    id: 2,
    name: 'Evil Eye Bracelet',
    price: 250,
    image: 'imgs/3.jpg',
    gallery: ['imgs/3.jpg', 'imgs/14.jpg'],
    desc: 'Handmade evil eye bracelet with frosted beads — worn for protection, positivity and style.',
    category: 'Bracelet'
  },
  {
    id: 3,
    name: 'Dreamcatcher Keychain',
    price: 250,
    image: 'imgs/10.jpg',
    gallery: ['imgs/10.jpg', 'imgs/8.jpg'],
    desc: 'Compact blue dreamcatcher keychain with feather accents and a silver keyring.',
    category: 'Keychain'
  },
  {
    id: 4,
    name: 'Blue Dreamcatcher',
    price: 250,
    image: 'imgs/5.jpg',
    gallery: ['imgs/5.jpg', 'imgs/4.jpg'],
    desc: 'A bold, beautifully woven blue evil eye dreamcatcher with layered feathers. A true statement piece.',
    category: 'Dreamcatcher'
  },
  {
    id: 5,
    name: 'Macrame Wall Decor',
    price: 250,
    image: 'imgs/11.jpg',
    gallery: ['imgs/11.jpg', 'imgs/4.jpg'],
    desc: 'Boho-style dreamcatcher with earthy tones and natural feathers. Brings warmth to any wall.',
    category: 'Wall Decor'
  },
  {
    id: 6,
    name: 'White Evil Eye Bracelet',
    price: 250,
    image: 'imgs/3.jpg',
    gallery: ['imgs/3.jpg'],
    desc: 'A clean, minimalist evil eye bracelet with soft pastel beads. Subtle and stylish.',
    category: 'Bracelet'
  },
  {
    id: 7,
    name: 'Tree of Life Dreamcatcher',
    price: 250,
    image: 'imgs/4.jpg',
    gallery: ['imgs/4.jpg', 'imgs/15.jpg'],
    desc: 'Wirework tree of life design with aqua crystals and teal feathers — unique and stunning.',
    category: 'Dreamcatcher'
  },
  {
    id: 8,
    name: 'Purple Dreamcatcher Keychain',
    price: 250,
    image: 'imgs/8.jpg',
    gallery: ['imgs/8.jpg', 'imgs/13.jpg'],
    desc: 'Purple dreamcatcher keychain with soft feathers and a pearl bead. Charming and compact.',
    category: 'Keychain'
  },
  {
    id: 9,
    name: 'Macrame Rainbow Keychain',
    price: 250,
    image: 'imgs/12.jpg',
    gallery: ['imgs/12.jpg'],
    desc: 'Handknotted macrame rainbow keychain in purple ombré tones with cream fringe.',
    category: 'Keychain'
  },
  {
    id: 10,
    name: 'White Dreamcatcher',
    price: 250,
    image: 'imgs/2.jpg',
    gallery: ['imgs/2.jpg'],
    desc: 'Classic white dreamcatcher with gold bell accents and soft feathers. Simple and elegant.',
    category: 'Dreamcatcher'
  },
  {
    id: 11,
    name: 'Customized Keychain',
    price: 250,
    image: 'imgs/1.jpg',
    gallery: ['imgs/1.jpg'],
    desc: 'Personalized beaded name keychain with tassel — a thoughtful custom gift for anyone.',
    category: 'Keychain'
  },
  {
    id: 12,
    name: 'Rainbow Cord Keychain',
    price: 250,
    image: 'imgs/7.jpg',
    gallery: ['imgs/7.jpg'],
    desc: 'Vibrant rainbow macrame keychain in multicolour thread — fun and handcrafted.',
    category: 'Keychain'
  },
  {
    id: 13,
    name: 'Peacock Feather Keychain',
    price: 250,
    image: 'imgs/9.jpg',
    gallery: ['imgs/9.jpg'],
    desc: 'Elegant mini dreamcatcher keychain featuring a real peacock feather accent.',
    category: 'Keychain'
  },
  {
    id: 14,
    name: 'Pink & Purple Keychain',
    price: 250,
    image: 'imgs/13.jpg',
    gallery: ['imgs/13.jpg'],
    desc: 'Pink & purple dreamcatcher keychain with bright feathers — cheerful and handmade.',
    category: 'Keychain'
  },
  {
    id: 15,
    name: 'Evil Eye Dreamcatcher Keychain',
    price: 250,
    image: 'imgs/14.jpg',
    gallery: ['imgs/14.jpg'],
    desc: 'Blue evil eye dreamcatcher keychain with cowrie shell accent for protection and style.',
    category: 'Keychain'
  }
];

// ─── State ───
let cart     = JSON.parse(localStorage.getItem('bloom_cart_v2'))     || [];
let wishlist = JSON.parse(localStorage.getItem('bloom_wishlist_v2')) || [];
let modalProductId = null;
let modalQty = 1;

const save = () => {
  localStorage.setItem('bloom_cart_v2',     JSON.stringify(cart));
  localStorage.setItem('bloom_wishlist_v2', JSON.stringify(wishlist));
};

// ─── Badges ───
function updateBadges() {
  const cartTotal = cart.reduce((s, i) => s + i.qty, 0);
  const cartBadge = document.getElementById('cartBadge');
  if (cartBadge) {
    cartBadge.textContent = cartTotal;
    cartBadge.classList.toggle('show', cartTotal > 0);
  }
  const wishBadge = document.getElementById('wishBadge');
  if (wishBadge) {
    wishBadge.textContent = wishlist.length;
    wishBadge.classList.toggle('show', wishlist.length > 0);
  }
}

// ─── Toast ───
function toast(msg, icon = '') {
  let wrap = document.getElementById('toastWrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toastWrap';
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `${icon ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">${icon}</svg>` : ''}${msg}`;
  wrap.appendChild(t);
  requestAnimationFrame(() => { requestAnimationFrame(() => t.classList.add('show')); });
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 3000);
}

// ─── Cart ───
function addToCart(productId, qty = 1, e) {
  if (e) e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ id: productId, qty });
  save();
  updateBadges();
  renderCartDrawer();
  toast(`Added "${p.name}" to cart`, '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>');
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) cart = cart.filter(i => i.id !== productId);
  save();
  updateBadges();
  renderCartDrawer();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  save();
  updateBadges();
  renderCartDrawer();
}

function renderCartDrawer() {
  const body   = document.getElementById('cartBody');
  const subEl  = document.getElementById('cartSubtotal');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `<div class="drawer-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B9A1D9" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <p>Your cart is empty</p>
      <button class="btn btn-primary btn-sm" onclick="closeAll()">Explore Collection</button>
    </div>`;
    if (subEl) subEl.textContent = '₹0';
    return;
  }

  let subtotal = 0;
  body.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    subtotal += p.price * item.qty;
    return `<div class="drawer-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="drawer-item-info">
        <h4>${p.name}</h4>
        <div class="drawer-item-price">₹${p.price}</div>
        <div class="qty-row">
          <button onclick="updateCartQty(${p.id},-1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${p.id},1)">+</button>
        </div>
      </div>
      <button class="drawer-item-remove" onclick="removeFromCart(${p.id})">✕</button>
    </div>`;
  }).join('');

  if (subEl) subEl.textContent = `₹${subtotal}`;
}

// ─── Wishlist ───
function toggleWishlist(productId, e) {
  if (e) e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    toast(`Removed from wishlist`);
  } else {
    wishlist.push(productId);
    toast(`Added "${p.name}" to wishlist`, '<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>');
  }
  save();
  updateBadges();
  document.querySelectorAll(`.wish-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(productId));
  });
  const mwBtn = document.getElementById('modalWishBtn');
  if (mwBtn && modalProductId === productId) {
    mwBtn.classList.toggle('active', wishlist.includes(productId));
  }
  renderWishlistDrawer();
}

function renderWishlistDrawer() {
  const body = document.getElementById('wishBody');
  if (!body) return;
  if (wishlist.length === 0) {
    body.innerHTML = `<div class="drawer-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B9A1D9" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      <p>Your wishlist is empty</p>
    </div>`;
    return;
  }
  body.innerHTML = wishlist.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return '';
    return `<div class="drawer-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="drawer-item-info">
        <h4>${p.name}</h4>
        <div class="drawer-item-price">₹${p.price}</div>
        <button class="btn btn-primary btn-sm" style="margin-top:.4rem;padding:.4rem 1rem;font-size:.74rem;"
                onclick="addToCart(${p.id}); toggleWishlist(${p.id});">Move to Cart</button>
      </div>
      <button class="drawer-item-remove" onclick="toggleWishlist(${p.id})">✕</button>
    </div>`;
  }).join('');
}

// ─── Product Cards ───
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-id="${p.id}" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        <button class="wish-btn ${wishlist.includes(p.id) ? 'active' : ''}" data-id="${p.id}"
                onclick="toggleWishlist(${p.id}, event)" aria-label="Wishlist">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-card-body">
        <div class="product-name">${p.name}</div>
        <div class="product-price-tag">₹250</div>
        <button class="product-add-btn" onclick="addToCart(${p.id},1,event)">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

// ─── Product Modal ───
function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  modalProductId = productId;
  modalQty = 1;

  document.getElementById('modalTitle').textContent    = p.name;
  document.getElementById('modalPrice').textContent    = `₹${p.price}`;
  document.getElementById('modalDesc').textContent     = p.desc;
  document.getElementById('modalMainImg').src          = p.image;
  document.getElementById('modalQtyVal').textContent   = modalQty;
  document.getElementById('modalWishBtn').className    = `modal-wish-btn${wishlist.includes(p.id) ? ' active' : ''}`;
  document.getElementById('modalCategory').textContent = p.category;

  document.getElementById('modalAddBtn').onclick = () => addToCart(p.id, modalQty);
  document.getElementById('modalWishBtn').onclick = () => toggleWishlist(p.id);

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  modalProductId = null;
}

window.changeQty = (delta) => {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQtyVal').textContent = modalQty;
};

// ─── Drawers & Panels ───
function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function openWishDrawer() {
  renderWishlistDrawer();
  document.getElementById('wishDrawer').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function openSearch() {
  document.getElementById('searchModal').classList.add('open');
  document.getElementById('searchInput').focus();
  document.body.style.overflow = 'hidden';
}
function openMobileMenu() {
  document.getElementById('mobileDrawer').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAll() {
  document.querySelectorAll('.drawer, .search-modal, .mobile-drawer').forEach(el => el.classList.remove('open'));
  document.getElementById('backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Search ───
function handleSearch(query) {
  const container = document.getElementById('searchResults');
  if (!container) return;
  const q = query.trim().toLowerCase();
  if (q.length < 2) {
    container.innerHTML = '<p class="search-hint">Type at least 2 characters…</p>';
    return;
  }
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );
  if (!results.length) {
    container.innerHTML = `<p class="search-hint">No results for "${query}"</p>`;
    return;
  }
  container.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="closeAll(); openModal(${p.id});">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <h4>${p.name}</h4>
        <p>${p.category} · ₹250</p>
      </div>
    </div>
  `).join('');
}

// ─── Navbar scroll effect ───
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ─── Smooth Anchor Scroll ───
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeAll();
        return;
      }
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navOffset = 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
        closeAll();
      }
    });
  });
}

// ─── Scroll Reveal via IntersectionObserver ───
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateBadges();
  initNavScroll();
  initSmoothAnchors();
  initReveal();
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
});
