/**
 * Bloom by Janvi — E-Commerce Engine
 * Matches reference design. Preserves cart/wishlist in localStorage.
 */

'use strict';

const INSTAGRAM_URL = 'https://www.instagram.com/bloombyjanvi';
const WHATSAPP_NUMBER = '918511037557';

// ─── Real Product Catalogue (76 Client Products — All ₹250) ───
const PRODUCTS = [
  {
    "id": 1,
    "name": "Pink Dreamcatcher Car Hanging",
    "price": 349,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/1.png",
    "desc": "Handcrafted pink dreamcatcher car hanging of 4 inch width and 10 inch approx length."
  },
  {
    "id": 2,
    "name": "Personalized Beaded Name Keychain",
    "price": 199,
    "category": "Keychain",
    "image": "bloom products/keychain/18.jpg",
    "desc": "Custom handmade beaded name keychain with vibrant alphabet beads and tassel NOTE:charms and name can be customized as per your need."
  },
  {
    "id": 3,
    "name": "Navratri Special Traditional Bangle Set",
    "price": 299,
    "category": "Navratri",
    "image": "bloom products/Navratri new/20250801_163522.jpg",
    "desc": "Bangles are handmade with threads mirrors and vibrant colors for navratri.. set of any one bangle pair at 299 ."
  },
  {
    "id": 4,
    "name": "Navratri Ghungroo Anklet",
    "price": 99,
    "category": "Navratri",
    "image": "bloom products/Navratri new/anklet.jpg",
    "desc": "Traditional ghungroo anklet with thread work and jingling bells which gives full navratri vibes."
  },
  {
    "id": 5,
    "name": "Tree Of Life Crystal Wall Decor",
    "price": 499,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/2.jpg",
    "desc": "Woven tree of life design with crystal chips, teal feathers and eye catching colors."
  },
  {
    "id": 6,
    "name": "Mini White Feather Dreamcatcher Keychain",
    "price": 119,
    "category": "Keychain",
    "image": "bloom products/keychain/2.jpg",
    "desc": "Compact white dreamcatcher keychain with silver keyring and soft feather with evil eye bead."
  },
  {
    "id": 7,
    "name": "Black Navratri Bangle",
    "price": 299,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 1.jpg",
    "desc": "black handcrafted thread bangle adorned with mirror work for Garba nights."
  },
  {
    "id": 8,
    "name": "Multicolor Pastel Thread Festive Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 2.jpg",
    "desc": "Eye-catching mirror accent bangle handcrafted with colorful cotton threads."
  },
  {
    "id": 9,
    "name": "Wave Of Blue Car Hanging",
    "price": 249,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/3.jpg",
    "desc": "Handmade Wave Of Blue car hanging with eye catchy colors and brilliant design."
  },
  {
    "id": 10,
    "name": "Rainbow Macramé Keychain",
    "price": 179,
    "category": "Keychain",
    "image": "bloom products/keychain/3.jpg",
    "desc": "Macramé rainbow keychain in pretty summer vibe with vibrant colors."
  },
  {
    "id": 11,
    "name": "Multicolor Thread Festive Bangle",
    "price": 299,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 3.jpg",
    "desc": "Eye-catching mirror accent bangle handcrafted with colorful cotton threads."
  },
  {
    "id": 12,
    "name": "Pink Blue Traditional Bangle",
    "price": 299,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 4.jpg",
    "desc": "Royal blue traditional bangle decorated with Gujarati mirror work."
  },
  {
    "id": 13,
    "name": "Multicolor Wall Hanging with light ",
    "price": 249,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/4.jpg",
    "desc": "Multicolored wall hanging with lighting which brings positivity and light both."
  },
  {
    "id": 14,
    "name": "Purple Theme Macramé Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/4.webp",
    "desc": "macramé keychain in shade of purple with pretty look."
  },
  {
    "id": 15,
    "name": "Brown Blue Mirror Bangle ",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 5.jpg",
    "desc": "Rich blue and brown handcrafted bangle featuring tiny mirror charms."
  },
  {
    "id": 16,
    "name": "Yellow Brown Kada Stack",
    "price": 179,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 6.jpg",
    "desc": "Traditional daily wear kada stack for classy look."
  },
  {
    "id": 17,
    "name": "Evil Eye Dreamcatcher Car Hanging",
    "price": 199,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/5.jpg",
    "desc": "Bold royal blue dreamcatcher with layered feathers and protective evil eye bead."
  },
  {
    "id": 18,
    "name": "Mini Evil Eye Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/5.jpg",
    "desc": "Bold royal blue dreamcatcher keychain with protective evil eye bead."
  },
  {
    "id": 19,
    "name": "Elephant Oxidize Bangle",
    "price": 99,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 7.jpg",
    "desc": "Oxidize bangles which will add  charm to your look 2.8 size."
  },
  {
    "id": 20,
    "name": "Oxodize Navratri Bangle",
    "price": 99,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 8.jpg",
    "desc": "Oxidize bangles which will add  charm to your look 2.8 size."
  },
  {
    "id": 21,
    "name": "Evil Eye Dreamcatcher Car Hanging ",
    "price": 349,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/6.jpg",
    "desc": "Evil eye dreamcatcher with full of feathers which will add attraction to your car and home."
  },
  {
    "id": 22,
    "name": "Mini Evil Eye Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/6.jpg",
    "desc": "Bold royal black dreamcatcher keychain with protective evil eye bead."
  },
  {
    "id": 23,
    "name": "Oxidized Peacock Bangle",
    "price": 99,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 9.jpg",
    "desc": "Oxidized style peacock bangle with traditional charm."
  },
  {
    "id": 24,
    "name": "Hairbow",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 1.jpg",
    "desc": "Traditional hairbow with mirror and ghungroo highlights."
  },
  {
    "id": 25,
    "name": "Pink Purple Car Hanging",
    "price": 179,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/7.jpg",
    "desc": "Handcrafted pink and purple dreamcatcher keychain adorned with delicate feathers and pearl beads.
."
  },
  {
    "id": 26,
    "name": "Mini Purple Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/7.jpg",
    "desc": "purple keychain with bright color to add charm to your beg or keyrings."
  },
  {
    "id": 27,
    "name": "Hairbow",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 2.jpg",
    "desc": "Traditional hairbow with mirror and ghungroo highlights."
  },
  {
    "id": 28,
    "name": "Hairbow",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 3.jpg",
    "desc": "Traditional hairbow with mirror and ghungroo highlights."
  },
  {
    "id": 29,
    "name": "Blue Skyblue Car Hanging",
    "price": 179,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/8.jpg",
    "desc": "Delicate blue sky blue dreamcatcher car hanging with soft feather drops."
  },
  {
    "id": 30,
    "name": "Mini blue sku blue Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/8.jpg",
    "desc": "keychain with perfect color coombination to add charm classic blue."
  },
  {
    "id": 31,
    "name": "Hairbow",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 4.jpg",
    "desc": "Traditional hairbow with mirror and ghungroo highlights."
  },
  {
    "id": 32,
    "name": "Hairbow",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 5.jpg",
    "desc": "Traditional hairbow with mirror and ghungroo highlights."
  },
  {
    "id": 33,
    "name": "Blue Pink Dreamcatcher Wall Hanging",
    "price": 349,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/9.jpg",
    "desc": "pink and blue wall hanging in size of 7 inch width and 16 inch approx length."
  },
  {
    "id": 34,
    "name": "Mini in shade of purple Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/9.jpg",
    "desc": "keychain with perfect color coombination in shade of purple."
  },
  {
    "id": 35,
    "name": "Hairpin",
    "price": 49,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 1.jpg",
    "desc": "handcrafted festive hairpins with colorful thread and mirror."
  },
  {
    "id": 36,
    "name": "Hairpin",
    "price": 49,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 2.jpg",
    "desc": "handcrafted festive hairpins with colorful thread and mirror."
  },
  {
    "id": 37,
    "name": "Pastel Boho Bead Dreamcatcher",
    "price": 249,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/10.webp",
    "desc": "Vibrant dreamcatcher with pastle boho beads and matching feathers."
  },
  {
    "id": 38,
    "name": "Orange Black Mini Dreamcatcher Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/10.jpg",
    "desc": "Deep orange black dreamcatcher keychain perfect shade."
  },
  {
    "id": 39,
    "name": "Hairpin",
    "price": 49,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 3.jpg",
    "desc": "Elegant oxodize hairpin drop for traditional Gujarati hair accessory."
  },
  {
    "id": 40,
    "name": "Hairpin",
    "price": 49,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 4.jpg",
    "desc": "Jingling Traditional Ghungroo kodi hairpin for perfecr navratri vibe."
  },
  {
    "id": 41,
    "name": "Shade Of Purple Car Hanging Dreamcatcher",
    "price": 179,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/11.jpg",
    "desc": "Bohemian style dreamcatcher with shade of purple and perfect one."
  },
  {
    "id": 42,
    "name": "yellow white Dreamcatcher Keychain",
    "price": 110,
    "category": "Keychain",
    "image": "bloom products/keychain/11.jpg",
    "desc": "Yeollow white combined keychain webbed with hand-tied thread tassel."
  },
  {
    "id": 43,
    "name": "Traditional Garba Hairstring (Parandi)",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 1.jpg",
    "desc": "Multicolor braided parandi hairstring with tassel and mirror work."
  },
  {
    "id": 44,
    "name": "Traditional Garba Hairstring (Parandi)",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 2.jpg",
    "desc": "Playful pom-pom and bead hairstring for colorful Navratri hairstyles."
  },
  {
    "id": 45,
    "name": "Peacock Theme Wall Hanging ",
    "price": 349,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/12.jpg",
    "desc": " black peacock feather dream catcher wall hanging, often used for home decor and positive energy. ."
  },
  {
    "id": 46,
    "name": "Evil Eye Webbed Dreamcatcher Keychain",
    "price": 149,
    "category": "Keychain",
    "image": "bloom products/keychain/12.jpg",
    "desc": "Handcrafted blue dreamcatcher keychain featuring intricate woven detailing, pearl beads, a cowrie shell, evil-eye charm, and vibrant blue-and-white feathers.."
  },
  {
    "id": 47,
    "name": "Traditional Garba Hairstring (Parandi)",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 3.jpg",
    "desc": "Intricate mirror accent hairstring to braid into hair for Garba."
  },
  {
    "id": 48,
    "name": "Traditional Garba Hairstring (Parandi)",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 4.jpg",
    "desc": "Multicolor braided parandi hairstring with tassel and kodi work"
  },
  {
    "id": 49,
    "name": "Tree Of Life car hanging Dreamcatcher",
    "price": 249,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/13.jpg",
    "desc": "Handcrafted turquoise dreamcatcher featuring a sparkling tree-of-life design, crystal beads, delicate pearls, and flowing turquoise feathers for a serene bohemian touch."
  },
 
  {
    "id": 51,
    "name": "Golden Bead Navratri Hairstring(Parandi)",
    "price": 229,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairsting 5.jpg",
    "desc": "Handcrafted boho hair string with braided threads, natural shells, silver charms, and elegant mustard accents for a unique ethnic look.."
  },
  {
    "id": 52,
    "name": "Hairpin (parandi)",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 6.jpg",
    "desc": "Handcrafted boho hair string with braided threads, natural shells, silver charms, and elegant mustard accents for a unique ethnic look.."
  },
  {
    "id": 53,
    "name": "white Grey Car Hanging Dreamcatcher",
    "price": 249,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/14.jpg",
    "desc": "Handcrafted grey dreamcatcher featuring a delicate web, pearl accents, and soft feathers for a serene boho touch.."
  },
  {
    "id": 54,
    "name": "Mini White Evil Eye Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/14.webp",
    "desc": "white elegant evil eye keychain with natural cowrie shell drop."
  },
  {
    "id": 55,
    "name": "Peacock Parandi Hairpin ",
    "price": 59,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 7.jpg",
    "desc": "Handcrafted multicolour braided hair string with silver charms, shell accents, and a stylish clip for a vibrant boho look."
  },
  {
    "id": 56,
    "name": "kodi multicolor parandi Hairpin",
    "price": 59,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 8.jpg",
    "desc": "Handcrafted pastel braided hair string with pink and green threads, delicate silver charms, and a shell accent for a playful boho look."
  },
  {
    "id": 57,
    "name": "White Car Hanging Dreamcatcher",
    "price": 299,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/15.jpg",
    "desc": "Handcrafted white dreamcatcher adorned with delicate golden beads and soft feathers, perfect for adding an elegant and peaceful boho touch to any space."
  },
  {
    "id": 58,
    "name": "Grey Yellow Dreamcatcher Keychain ",
    "price": 149,
    "category": "Keychain",
    "image": "bloom products/keychain/15.jpg",
    "desc": "Yeollow grey combined keychain webbed with hand-tied thread feather."
  },
  {
    "id": 59,
    "name": "Traditional Navratri Handcuff",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff.jpg",
    "desc": "Handcrafted embroidered statement bracelet with vibrant floral detailing, a mirror accent, and intricate silver charms for a colourful boho look."
  },
  {
    "id": 60,
    "name": "Traditional Navratri Handcuff",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 2.jpg",
    "desc": "Handcrafted embroidered statement bracelet with vibrant floral detailing, a mirror accent, and intricate silver charms for a colourful boho look."
  },
  {
    "id": 61,
    "name": "Goldenbrown black Wall Hanging",
    "price": 249,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/16.jpg",
    "desc": "Traditional golden bell and feather wall hanging creating gentle melody."
  },
  {
    "id": 62,
    "name": "Purple Pink webbed Dreamcatcher Keychain ",
    "price": 149,
    "category": "Keychain",
    "image": "bloom products/keychain/16.jpg",
    "desc": "fully Webbed keychain in purple pink rich color combination."
  },
  {
    "id": 63,
    "name": "Traditional Navratri Handcuff",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 3.jpg",
    "desc": "Traditional cowrie shell and thread handcuff jewelry intricate silver charms for a colourful boho look."
  },
  {
    "id": 64,
    "name": "Traditional Navratri Handcuff",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 4.jpg",
    "desc": "Vibrant multicolor thread work hathphool handcuff Traditional Navratri Handcuff."
  },
  {
    "id": 65,
    "name": "Peacock feather blue dreamcatcher Keychain",
    "price": 89,
    "category": "Keychain",
    "image": "bloom products/keychain/17.jpg",
    "desc": "Peacock fethaer dreamcathcer keychain perfect personal touch for gifting."
  },
  {
    "id": 66,
    "name": "Traditional Navratri Handcuff",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 5.jpg",
    "desc": "Royal handcrafted handcuff adorned with small golden ghungroo bells."
  },
  {
    "id": 67,
    "name": "Traditional Navratri Handcuff",
    "price": 179,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 6.jpg",
    "desc": "Handcrafted embroidered statement cuff with geometric mirrorwork, vibrant detailing, and dangling shell accents for a bold boho look."
  },
  {
    "id": 69,
    "name": "Traditional Navratri Handcuff(best seller)",
    "price": 229,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 7.jpg",
    "desc": "handcuff crafted with details of ghughru and kodi shells perfect for navratri."
  },
  {
    "id": 71,
    "name": "Macramé Evil Eye Keychain",
    "price": 79,
    "category": "Keychain",
    "image": "bloom products/keychain/19.jpg",
    "desc": "evil eye macrame keychain for protecting your loved once perfect for gifting."
  },
  {
    "id": 72,
    "name": "Traditional oxodized Hasli",
    "price": 199,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hasli 1.jpg",
    "desc": "rigid choker oxodized hasli with pure detailing ."
  },
  {
    "id": 73,
    "name": "Traditional oxodized Hasli",
    "price": 149,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hasli 2.jpg",
    "desc": "rigid choker oxodized hasli with pure detailing ."
  },
  {
    "id": 74,
    "name": "Mirror Work Navratri Hand Ring",
    "price": 69,
    "category": "Navratri",
    "image": "bloom products/Navratri new/ring 1.jpg",
    "desc": "Bold adjustable statement ring with central mirror work and bead border."
  },
  {
    "id": 75,
    "name": "Mirror Work Navratri Hand Ring",
    "price": 69,
    "category": "Navratri",
    "image": "bloom products/Navratri new/ring 2.jpg",
    "desc": "Handmade fabric floral statement ring in bright festival colors."
  },
  {
    "id": 76,
    "name": "Mirror Work Navratri Hand Ring",
    "price": 129,
    "category": "Navratri",
    "image": "bloom products/Navratri new/ring 3.jpg",
    "desc": "Oxidized style traditional motif ring with mirror highlight."
  }];

// ─── State ───
let cart            = JSON.parse(localStorage.getItem('bloom_cart_v2'))     || [];
let wishlist        = JSON.parse(localStorage.getItem('bloom_wishlist_v2')) || [];
let currentCategory = 'All';
let modalProductId  = null;
let modalQty        = 1;

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

// ─── Helper: Get Full Absolute Image URL ───
function getAbsoluteImageUrl(imagePath) {
  try {
    return new URL(imagePath, window.location.href).href;
  } catch (e) {
    return imagePath;
  }
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
  const body  = document.getElementById('cartBody');
  const subEl = document.getElementById('cartSubtotal');
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
    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;
    return `<div class="drawer-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="drawer-item-info">
        <h4>${p.name}</h4>
        <div class="drawer-item-price">₹${p.price} × ${item.qty} = ₹${itemTotal}</div>
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

// ─── Dynamic WhatsApp Checkout ───
function checkoutWhatsApp() {
  if (cart.length === 0) {
    toast('Your cart is empty! Add products before checking out.');
    return;
  }

  let subtotal = 0;
  const itemLines = [];

  cart.forEach((item, index) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return;
    const total = p.price * item.qty;
    subtotal += total;
    const imgUrl = getAbsoluteImageUrl(p.image);
    itemLines.push(`${index + 1}. ${p.name}\n   Quantity: ${item.qty}\n   Price: ₹${p.price} each\n   Total: ₹${total}\n   Image: ${imgUrl}`);
  });

  const message = `Hello Bloom by Janvi,\n\nI would like to place an order:\n\n${itemLines.join('\n\n')}\n\nSubtotal: ₹${subtotal}\n\nPlease confirm my order.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  // Clear cart in memory
  cart = [];

  // Remove cart-related storage keys
  localStorage.removeItem('bloom_cart_v2');
  localStorage.removeItem('bloom_cart');
  localStorage.removeItem('cart');
  sessionStorage.removeItem('bloom_cart_v2');
  sessionStorage.removeItem('bloom_cart');
  sessionStorage.removeItem('cart');

  // Persist empty cart state and update UI
  save();
  updateBadges();
  renderCartDrawer();

  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
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

// ─── Category Filtering ───
function filterProducts(category) {
  currentCategory = category;

  // Update active state of buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    btn.classList.toggle('active', cat === category);
  });

  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.classList.add('filtering');
  setTimeout(() => {
    renderProducts();
    grid.classList.remove('filtering');
  }, 200);
}

// ─── Product Cards ───
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = currentCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentCategory);

  grid.innerHTML = filtered.map(p => `
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
        <div class="product-price-tag">₹${p.price}</div>
        <button class="product-add-btn" onclick="addToCart(${p.id},1,event)">Add to Cart</button>
      </div>
    </div>
  `).join('');
  grid.classList.add('revealed');
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
    <div class="search-result-item" onclick="closeAll(); openModal(${p.id}); ">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <h4>${p.name}</h4>
        <p>${p.category} · ₹${p.price}</p>
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
