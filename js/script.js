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
    "name": "Pink Boho Dreamcatcher Wall Hanging",
    "price": 300,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/1.png",
    "desc": "Handcrafted pink boho dreamcatcher with delicate web and soft pastel feathers."
  },
  {
    "id": 2,
    "name": "Personalized Beaded Name Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/1.jpg",
    "desc": "Custom handmade beaded name keychain with vibrant alphabet beads and tassel."
  },
  {
    "id": 3,
    "name": "Navratri Traditional Mirror Work Jewelry Set",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/20250801_163522.jpg",
    "desc": "Exquisite handmade traditional mirror work jewelry set for Garba and Navratri celebrations."
  },
  {
    "id": 4,
    "name": "Handmade Navratri Ghungroo Anklet",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/anklet.jpg",
    "desc": "Traditional ghungroo anklet with colorful thread work and jingling bells."
  },
  {
    "id": 5,
    "name": "White Feather Dreamcatcher Wall Decor",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/2.jpg",
    "desc": "Classic white dreamcatcher featuring gold bead accents and elegant white feathers."
  },
  {
    "id": 6,
    "name": "Mini White Feather Dreamcatcher Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/2.jpg",
    "desc": "Compact white dreamcatcher keychain with silver keyring and soft feather."
  },
  {
    "id": 7,
    "name": "Multicolor Thread Navratri Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 1.jpg",
    "desc": "Vibrant handcrafted thread bangle adorned with mirror work for Garba nights."
  },
  {
    "id": 8,
    "name": "Mirror Accent Festive Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 2.jpg",
    "desc": "Eye-catching mirror accent bangle handcrafted with colorful silk threads."
  },
  {
    "id": 9,
    "name": "Protection Evil Eye Car Hanging",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/3.jpg",
    "desc": "Handmade evil eye protection charm with blue glass beads and flowing tassels."
  },
  {
    "id": 10,
    "name": "Protection Evil Eye Bead Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/3.jpg",
    "desc": "Evil eye protection keychain crafted with frosted glass beads and charm."
  },
  {
    "id": 11,
    "name": "Royal Blue Handcrafted Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 3.jpg",
    "desc": "Royal blue traditional bangle decorated with Gujarati mirror work."
  },
  {
    "id": 12,
    "name": "Bright Yellow Navratri Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 4.jpg",
    "desc": "Festive sunshine yellow bangle with intricate thread wrapping and beads."
  },
  {
    "id": 13,
    "name": "Tree of Life Crystal Wall Hanging",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/4.jpg",
    "desc": "Woven tree of life design with turquoise crystal chips and teal feathers."
  },
  {
    "id": 14,
    "name": "Pastel Pink Pom-Pom Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/4.webp",
    "desc": "Fluffy pastel pink pom-pom keychain with gold hardware and pearl charm."
  },
  {
    "id": 15,
    "name": "Magenta Pink Beaded Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 5.jpg",
    "desc": "Rich magenta pink handcrafted bangle featuring tiny mirror charms."
  },
  {
    "id": 16,
    "name": "Vibrant Green Shell Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 6.jpg",
    "desc": "Traditional green Garba bangle accented with mini cowrie shells."
  },
  {
    "id": 17,
    "name": "Royal Blue Dreamcatcher Car Decor",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/5.jpg",
    "desc": "Bold royal blue dreamcatcher with layered feathers and protective evil eye bead."
  },
  {
    "id": 18,
    "name": "Celestial Moon & Star Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/5.jpg",
    "desc": "Enchanting moon and star charm keychain with dark blue beaded accent."
  },
  {
    "id": 19,
    "name": "Golden Threaded Garba Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 7.jpg",
    "desc": "Sparkling golden thread bangle perfect for pairing with Navratri chaniya choli."
  },
  {
    "id": 20,
    "name": "Peacock Motif Navratri Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 8.jpg",
    "desc": "Hand-painted peacock style bangle with vibrant festive colors."
  },
  {
    "id": 21,
    "name": "Rose Pink Feather Dreamcatcher",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/6.jpg",
    "desc": "Soft pink dreamcatcher wall hanging woven with pearl accents and fluffy pink feathers."
  },
  {
    "id": 22,
    "name": "Macrame Daisy Flower Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/6.jpg",
    "desc": "Hand-knotted macrame daisy flower keychain in cream and yellow thread."
  },
  {
    "id": 23,
    "name": "Oxidized Bead & Thread Bangle",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/bangle 9.jpg",
    "desc": "Oxidized style bead and cotton thread bangle with traditional charm."
  },
  {
    "id": 24,
    "name": "Festive Red Fabric Hairbow",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 1.jpg",
    "desc": "Traditional red fabric hairbow with mirror and ghungroo highlights."
  },
  {
    "id": 25,
    "name": "Pastel Rainbow Macrame Wall Hanging",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/7.jpg",
    "desc": "Charming hand-knotted pastel rainbow macrame wall decor with fringe detail."
  },
  {
    "id": 26,
    "name": "Rainbow Corded Fringe Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/7.jpg",
    "desc": "Vibrant rainbow thread keychain with tassel fringe and sturdy ring."
  },
  {
    "id": 27,
    "name": "Mirror Work Garba Hairbow",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 2.jpg",
    "desc": "Beautiful hand-stitched mirror work hairbow for festive hair styling."
  },
  {
    "id": 28,
    "name": "Royal Yellow Navratri Hairbow",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 3.jpg",
    "desc": "Bright yellow hairbow clip accented with pom-poms and mirror discs."
  },
  {
    "id": 29,
    "name": "Lavender Charm Car Hanging",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/8.jpg",
    "desc": "Delicate purple and lavender dreamcatcher car hanging with soft feather drops."
  },
  {
    "id": 30,
    "name": "Amethyst Purple Feather Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/8.jpg",
    "desc": "Rich purple dreamcatcher keychain with amethyst style beads and feathers."
  },
  {
    "id": 31,
    "name": "Vibrant Pink Garba Hairbow",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 4.jpg",
    "desc": "Hot pink festive hairbow designed specially for Navratri celebrations."
  },
  {
    "id": 32,
    "name": "Peacock Blue Hairbow Accent",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairbow 5.jpg",
    "desc": "Peacock blue handcrafted hairbow clip with ghungroo bells."
  },
  {
    "id": 33,
    "name": "Peacock Feather Mini Wall Decor",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/9.jpg",
    "desc": "Stunning mini wall hanging with natural peacock feather and crystal beadwork."
  },
  {
    "id": 34,
    "name": "Peacock Feather Charm Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/9.jpg",
    "desc": "Unique keychain featuring mini peacock feather drop and gold accents."
  },
  {
    "id": 35,
    "name": "Handcrafted Floral Hairpin Set",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 1.jpg",
    "desc": "Set of handcrafted festive hairpins with colorful fabric flowers."
  },
  {
    "id": 36,
    "name": "Festive Shell & Bead Hairpin",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 2.jpg",
    "desc": "Garba-special hairpin embellished with shells, mirrors, and beads."
  },
  {
    "id": 37,
    "name": "Turquoise Bead Dreamcatcher",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/10.webp",
    "desc": "Vibrant turquoise dreamcatcher with silver charms and matching feathers."
  },
  {
    "id": 38,
    "name": "Ocean Blue Mini Dreamcatcher Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/10.jpg",
    "desc": "Deep blue dreamcatcher keychain with silver bead highlight."
  },
  {
    "id": 39,
    "name": "Mirror Work Decorative Hairpin",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 3.jpg",
    "desc": "Elegant mirror work hairpin drop for traditional Gujarati hair accessory."
  },
  {
    "id": 40,
    "name": "Traditional Ghungroo Hairpin",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairpin 4.jpg",
    "desc": "Jingling ghungroo bell hairpin crafted for folk dance performances."
  },
  {
    "id": 41,
    "name": "Boho Chic Macrame Wall Hanging",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/11.jpg",
    "desc": "Bohemian style dreamcatcher with natural cotton macrame cords and wooden beads."
  },
  {
    "id": 42,
    "name": "Boho Tassel Bead Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/11.jpg",
    "desc": "Earth-toned bohemian bead keychain with hand-tied thread tassel."
  },
  {
    "id": 43,
    "name": "Traditional Garba Hairstring (Parandi)",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 1.jpg",
    "desc": "Multicolor braided parandi hairstring with tassel and mirror work."
  },
  {
    "id": 44,
    "name": "Multicolor Pom-Pom Hairstring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 2.jpg",
    "desc": "Playful pom-pom and bead hairstring for colorful Navratri hairstyles."
  },
  {
    "id": 45,
    "name": "Sunburst Crystal Car Hanging",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/12.jpg",
    "desc": "Radiant sunburst motif car hanging accent with sparkling crystal prism drop."
  },
  {
    "id": 46,
    "name": "Rainbow Ombre Macrame Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/12.jpg",
    "desc": "Multi-tone rainbow ombre macrame keychain woven with soft cotton."
  },
  {
    "id": 47,
    "name": "Mirror Accent Braided Hairstring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 3.jpg",
    "desc": "Intricate mirror accent hairstring to braid into hair for Garba."
  },
  {
    "id": 48,
    "name": "Royal Blue Festival Hairstring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 4.jpg",
    "desc": "Deep blue parandi hairstring with silver ghungroo endings."
  },
  {
    "id": 49,
    "name": "Rose Quartz Feather Dreamcatcher",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/13.jpg",
    "desc": "Pink rose quartz stone dreamcatcher with hand-dyed pink feathers."
  },
  {
    "id": 50,
    "name": "Magenta Feather Dreamcatcher Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/13.jpg",
    "desc": "Bright magenta pink dreamcatcher keychain with fluffy feather."
  },
  {
    "id": 51,
    "name": "Golden Bead Navratri Hairstring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairsting 5.jpg",
    "desc": "Golden beaded hairstring adding instant shimmer to traditional braids."
  },
  {
    "id": 52,
    "name": "Bright Pink Tassel Hairstring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 6.jpg",
    "desc": "Hot pink silk tassel hairstring handcrafted with traditional flair."
  },
  {
    "id": 53,
    "name": "Evil Eye Shell Wall Charm",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/14.jpg",
    "desc": "Protective evil eye wall hanging featuring genuine cowrie shell accents."
  },
  {
    "id": 54,
    "name": "Cowrie Shell Evil Eye Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/14.webp",
    "desc": "Beach-inspired evil eye keychain with natural cowrie shell drop."
  },
  {
    "id": 55,
    "name": "Heavy Festive Garba Parandi Hairstring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 7.jpg",
    "desc": "Statement heavy parandi hairstring with multi-layered tassels and mirrors."
  },
  {
    "id": 56,
    "name": "Shell & Mirror Work Hairstring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hairstring 8.jpg",
    "desc": "Cowrie shell and mirror studded hairstring for authentic Gujarati look."
  },
  {
    "id": 57,
    "name": "Floral Wreath Dreamcatcher",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/15.jpg",
    "desc": "Handmade floral wreath dreamcatcher with pastel flowers and silk ribbons."
  },
  {
    "id": 58,
    "name": "Crystal Quartz Pendant Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/15.jpg",
    "desc": "Raw crystal quartz pendant keychain wrapped in gold jewelry wire."
  },
  {
    "id": 59,
    "name": "Traditional Navratri Handcuff (Hathphool)",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff.jpg",
    "desc": "Handcrafted hathphool handcuff bracelet connecting ring to wrist with mirror work."
  },
  {
    "id": 60,
    "name": "Mirror Work Festive Handcuff",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 2.jpg",
    "desc": "Stunning mirror work hathphool handcuff for Garba dance."
  },
  {
    "id": 61,
    "name": "Golden Bell Feather Wall Hanging",
    "price": 250,
    "category": "Car / Wall Hanging",
    "image": "bloom products/car-wall hanging/16.jpg",
    "desc": "Traditional golden bell and feather wall hanging creating gentle melody."
  },
  {
    "id": 62,
    "name": "Golden Sun Charm Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/16.jpg",
    "desc": "Sun motif metal charm keychain with warm orange and yellow beads."
  },
  {
    "id": 63,
    "name": "Shell Accent Garba Handcuff",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 3.jpg",
    "desc": "Traditional cowrie shell and thread handcuff jewelry."
  },
  {
    "id": 64,
    "name": "Multicolor Threaded Hathphool",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 4.jpg",
    "desc": "Vibrant multicolor thread work hathphool handcuff."
  },
  {
    "id": 65,
    "name": "Braided Heart Charm Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/17.jpg",
    "desc": "Hand-braided cord keychain featuring a sweet polished heart pendant."
  },
  {
    "id": 66,
    "name": "Royal Blue Handcuff Bracelet",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 5.jpg",
    "desc": "Royal blue handcrafted handcuff adorned with small ghungroo bells."
  },
  {
    "id": 67,
    "name": "Golden Bead Festive Handcuff",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 6.jpg",
    "desc": "Golden bead and mirror cuff bracelet for festive attire."
  },
  {
    "id": 68,
    "name": "Rose Pearl Tassel Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/18.jpg",
    "desc": "Elegant freshwater style pearl and silk tassel keychain in blush pink."
  },
  {
    "id": 69,
    "name": "Vibrant Magenta Garba Handcuff",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 7.jpg",
    "desc": "Bright magenta pink hathphool handcuff with traditional embroidery."
  },
  {
    "id": 70,
    "name": "Traditional Oxidized Mirror Handcuff",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/handcuff 8.jpg",
    "desc": "Oxidized finish mirror handcuff with ring attachment."
  },
  {
    "id": 71,
    "name": "Vintage Butterfly Bead Keychain",
    "price": 250,
    "category": "Keychain",
    "image": "bloom products/keychain/19.jpg",
    "desc": "Charming butterfly accent keychain with pastel glass seed beads."
  },
  {
    "id": 72,
    "name": "Traditional Navratri Mirror Hasli Necklace",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hasli 1.jpg",
    "desc": "Handcrafted rigid choker hasli necklace studded with mirrors and beads."
  },
  {
    "id": 73,
    "name": "Handcrafted Thread & Bead Hasli Choker",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/hasli 2.jpg",
    "desc": "Colorful thread wrapped hasli necklace perfect for Garba outfit."
  },
  {
    "id": 74,
    "name": "Statement Mirror Work Navratri Ring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/ring 1.jpg",
    "desc": "Bold adjustable statement ring with central mirror work and bead border."
  },
  {
    "id": 75,
    "name": "Festive Fabric Flower Ring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/ring 2.jpg",
    "desc": "Handmade fabric floral statement ring in bright festival colors."
  },
  {
    "id": 76,
    "name": "Traditional Oxidized Motif Ring",
    "price": 250,
    "category": "Navratri",
    "image": "bloom products/Navratri new/ring 3.jpg",
    "desc": "Oxidized style traditional motif ring with mirror highlight."
  }
];

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
