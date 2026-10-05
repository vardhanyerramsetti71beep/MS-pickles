/**
 * MS Pickles - Interactive Lively E-Commerce Engine
 * Contact / WhatsApp Number from Poster: +91 6304433996
 */

// Available standard weights and multipliers
const WEIGHT_OPTIONS = [
  { label: '100g', value: '100g', factor: 0.45, badge: 'Trial Pack' },
  { label: '250g', value: '250g', factor: 1.0, badge: 'Most Popular' },
  { label: '500g', value: '500g', factor: 1.9, badge: 'Family Pack' },
  { label: '1 kg', value: '1kg', factor: 3.6, badge: 'Value Pack' },
  { label: '2 kg', value: '2kg', factor: 7.0, badge: 'Mega Savings' },
  { label: '5 kg', value: '5kg', factor: 16.8, badge: 'Bulk / Catering' }
];

// All 11 Authentic Products from the poster
const PRODUCTS = [
  {
    id: 'chicken_pickle',
    nameEn: 'Spicy Chicken Pickle',
    nameTe: 'చికెన్ పచ్చడి',
    category: 'non-veg',
    basePrice250g: 250, // ₹250 for 250g
    spiceLevel: 'hot',
    spiceBadge: '🌶️🌶️🌶️ Fiery Hot',
    isHero: true,
    tag: 'Signature Best Seller',
    image: 'public/chicken_pickle.jpg',
    heroImage: 'public/hero_chicken_pickle.jpg',
    description: 'Tender country chicken boneless pieces marinated with stone-ground Guntur red chili, cloves, garlic & crispy curry leaves in wood-pressed oil.',
    benefits: ['Boneless succulent pieces', 'Fresh chicken prepared daily', 'Zero preservatives']
  },
  {
    id: 'mutton_pickle',
    nameEn: 'Royal Mutton Pickle',
    nameTe: 'మటన్ పచ్చడి',
    category: 'non-veg',
    basePrice250g: 380, // ₹380 for 250g
    spiceLevel: 'hot',
    spiceBadge: '🌶️🌶️🌶️ Rich & Spicy',
    isHero: false,
    tag: 'Royal Andhra Delicacy',
    image: 'public/mutton_pickle.jpg',
    description: 'Juicy, soft mutton pieces slow-cooked with freshly ground cloves, cinnamon, coriander & Andhra spice blend.',
    benefits: ['Tender juicy mutton', 'Aromatic garam masala blend', 'Long refrigerated shelf life']
  },
  {
    id: 'prawns_pickle',
    nameEn: 'Coastal Prawns Pickle',
    nameTe: 'రొయ్యలు పచ్చడి',
    category: 'non-veg',
    basePrice250g: 320, // ₹320 for 250g
    spiceLevel: 'medium',
    spiceBadge: '🌶️🌶️ Tangy & Spicy',
    isHero: false,
    tag: 'Coastal Andhra Specialty',
    image: 'public/prawns_pickle.jpg',
    description: 'Fresh succulent freshwater prawns crisply fried and steeped in tangy, aromatic Andhra spice gravy with whole garlic cloves.',
    benefits: ['Cleaned deveined prawns', 'Tangy & savory flavor', 'Rich in seafood protein']
  },
  {
    id: 'gongura_pickle',
    nameEn: 'Authentic Gongura Pachadi',
    nameTe: 'గోంగూర పచ్చడి',
    category: 'veg',
    basePrice250g: 130, // ₹130 for 250g
    spiceLevel: 'medium',
    spiceBadge: '🌶️🌶️ Tangy Classic',
    isHero: false,
    tag: 'Pride of Andhra',
    image: 'public/gongura_pickle.jpg',
    description: 'The legendary taste of Andhra! Sour red sorrel leaves simmered with garlic cloves, sun-dried red chilies and mustard oil.',
    benefits: ['Organic sorrel leaves', 'Rich in iron and vitamin C', 'Divine pairing with hot rice & ghee']
  },
  {
    id: 'pandumirchi_pickle',
    nameEn: 'Pandu Mirchi Pachadi',
    nameTe: 'పండుమిర్చి పచ్చడి',
    category: 'veg',
    basePrice250g: 140, // ₹140 for 250g
    spiceLevel: 'hot',
    spiceBadge: '🌶️🌶️🌶️ Fiery Red Chili',
    isHero: false,
    tag: 'Zesty Red Chili',
    image: 'public/pandumirchi_pickle.jpg',
    description: 'Fresh crimson red ripe chilies pounded with tamarind, roasted cumin, and garlic cloves into a thick, fiery relish.',
    benefits: ['Guntur ripe red chillies', 'Natural tamarind tang', 'Authentic stone ground texture']
  },
  {
    id: 'allam_pickle',
    nameEn: 'Traditional Allam Pachadi',
    nameTe: 'అల్లం పచ్చడి',
    category: 'veg',
    basePrice250g: 130, // ₹130 for 250g
    spiceLevel: 'mild',
    spiceBadge: '🌶️ Sweet, Sour & Spicy',
    isHero: false,
    tag: 'Breakfast Favorite',
    image: 'public/allam_pickle.jpg',
    description: 'Farm-fresh ginger blended with pure jaggery, tamarind pulp, and roasted spices. The iconic companion for idli, dosa & pesarattu.',
    benefits: ['Fresh ginger root', 'Pure jaggery balance', 'Great for digestion']
  },
  {
    id: 'karivepaku_podi',
    nameEn: 'Karivepaku Karam Podi',
    nameTe: 'కరివేపాకు కారప్పొడి',
    category: 'podi',
    basePrice250g: 110, // ₹110 for 250g
    spiceLevel: 'mild',
    spiceBadge: '🌶️ Aromatic & Healthy',
    isHero: false,
    tag: 'Rich in Iron & Fiber',
    image: 'public/karivepaku_podi.jpg',
    description: 'Fresh curry leaves dry roasted to perfection and ground with roasted lentils, cumin, garlic, and dry chilies.',
    benefits: ['Excellent for hair & eyesight', 'No oil powder', 'Instant flavor with hot rice & ghee']
  },
  {
    id: 'munagaku_podi',
    nameEn: 'Munagaku Karam Podi',
    nameTe: 'మునగాకు కారప్పొడి',
    category: 'podi',
    basePrice250g: 120, // ₹120 for 250g
    spiceLevel: 'mild',
    spiceBadge: '🌶️ Nutritious Superfood',
    isHero: false,
    tag: 'Moringa Immunity Booster',
    image: 'public/munagaku_podi.jpg',
    description: 'Nutrient-dense drumstick leaves (moringa) gently dried and stone-ground with roasted chana, garlic pods, and spices.',
    benefits: ['Pure Moringa leaves', 'Immunity and energy booster', 'Delicious healthy spice powder']
  },
  {
    id: 'dhaniyala_podi',
    nameEn: 'Dhaniyala Karam Podi',
    nameTe: 'ధనియాల కారప్పొడి',
    category: 'podi',
    basePrice250g: 110, // ₹110 for 250g
    spiceLevel: 'mild',
    spiceBadge: '🌶️ Fragrant Comfort',
    isHero: false,
    tag: 'Classic Andhra Kitchen',
    image: 'public/dhaniyala_podi.jpg',
    description: 'Aromatic roasted whole coriander seeds ground with lentils, red chilies, and roasted garlic. Pure comfort food.',
    benefits: ['Coriander seed antioxidant', 'Soothing on stomach', 'Perfect with warm rice']
  },
  {
    id: 'tomato_pickle',
    nameEn: 'Country Tomato Pachadi',
    nameTe: 'టమాట పచ్చడి',
    category: 'veg',
    basePrice250g: 120, // ₹120 for 250g
    spiceLevel: 'medium',
    spiceBadge: '🌶️🌶️ Tangy & Savory',
    isHero: false,
    tag: 'Tangy Delight',
    image: 'public/tomato_pickle.jpg',
    description: 'Vine-ripened country tomatoes simmered with mustard, fenugreek, red chili powder, and garlic cloves in sesame oil.',
    benefits: ['Farm country tomatoes', 'Rich tangy gravy', 'Goes great with rotis & rice']
  },
  {
    id: 'mamidi_pickle',
    nameEn: 'Andhra Avakaya (Mamidi)',
    nameTe: 'మామిడి పచ్చడి',
    category: 'veg',
    basePrice250g: 140, // ₹140 for 250g
    spiceLevel: 'hot',
    spiceBadge: '🌶️🌶️🌶️ King of Pickles',
    isHero: false,
    tag: 'Royal Avakaya',
    image: 'public/mamidi_pickle.jpg',
    description: 'The monarch of all Indian pickles! Hard-cut sour raw mango pieces steeped in pungent mustard seed powder and fiery red chili.',
    benefits: ['Crisp hard shell pieces', 'Pungent mustard (Aavamindi) punch', 'Long lasting traditional recipe']
  }
];

// Helper to calculate price for any weight
function calculatePrice(basePrice250g, weightStr) {
  const opt = WEIGHT_OPTIONS.find(w => w.value === weightStr) || WEIGHT_OPTIONS[1];
  return Math.round(basePrice250g * opt.factor);
}

// Global Application State
let appState = {
  currentCategory: 'all',
  searchQuery: '',
  spiceFilter: 'all',
  languageMode: 'both', // 'both', 'en', 'te'
  soundEnabled: true,
  cart: JSON.parse(localStorage.getItem('ms_pickles_cart') || '[]'),
  selectedHeroWeight: '250g',
  selectedHeroPrice: 250
};

// Target WhatsApp Phone Number from poster
const PHONE_NUMBER = '916304433996';
const DISPLAY_PHONE = '6304433996';

// Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Render lucide icons
  lucide.createIcons();

  // Render products
  renderProducts();

  // Update Cart UI
  updateCartUI();

  // Attach search listeners
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Attach spice filter listener
  const spiceFilter = document.getElementById('spiceFilter');
  if (spiceFilter) {
    spiceFilter.addEventListener('change', (e) => {
      appState.spiceFilter = e.target.value;
      renderProducts();
    });
  }

  // Language Toggle Button
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  // Sound Toggle Button
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', toggleSound);
  }

  // Cart Drawer open/close
  document.getElementById('openCartBtn').addEventListener('click', openCart);
  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  document.getElementById('cartDrawerBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'cartDrawerBackdrop') closeCart();
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeProductDetailModal();
      closePosterModal();
      closeReceiptModal();
    }
  });

  // Pre-fill customer details from storage if present
  const savedCustomer = JSON.parse(localStorage.getItem('ms_pickles_cust') || '{}');
  if (savedCustomer.name) document.getElementById('custName').value = savedCustomer.name;
  if (savedCustomer.phone) document.getElementById('custPhone').value = savedCustomer.phone;
  if (savedCustomer.address) document.getElementById('custAddress').value = savedCustomer.address;
});

// Sound feedback helper
function playChime() {
  if (!appState.soundEnabled) return;
  try {
    const audio = document.getElementById('addSound');
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {}); // prevent browser policy warning
    }
  } catch (err) {}
}

function toggleSound() {
  appState.soundEnabled = !appState.soundEnabled;
  const soundIcon = document.getElementById('soundIcon');
  if (soundIcon) {
    soundIcon.setAttribute('data-lucide', appState.soundEnabled ? 'volume-2' : 'volume-x');
    lucide.createIcons();
  }
  showToast(appState.soundEnabled ? 'Sound Enabled 🔔' : 'Sound Muted 🔇');
}

function toggleLanguage() {
  if (appState.languageMode === 'both') {
    appState.languageMode = 'te';
    document.getElementById('langLabel').textContent = 'తెలుగు';
  } else if (appState.languageMode === 'te') {
    appState.languageMode = 'en';
    document.getElementById('langLabel').textContent = 'English';
  } else {
    appState.languageMode = 'both';
    document.getElementById('langLabel').textContent = 'తెలుగు / EN';
  }
  renderProducts();
  showToast(`Language switched to: ${document.getElementById('langLabel').textContent}`);
}

// Category filter handler
function setCategoryFilter(cat) {
  appState.currentCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${cat}'`));
  });
  renderProducts();
}

function resetFilters() {
  appState.currentCategory = 'all';
  appState.searchQuery = '';
  appState.spiceFilter = 'all';
  document.getElementById('searchInput').value = '';
  document.getElementById('spiceFilter').value = 'all';
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'all'`));
  });
  renderProducts();
}

// Render Products Grid
function renderProducts() {
  const container = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  if (!container) return;

  // Filter products
  const filtered = PRODUCTS.filter(p => {
    // Category match
    if (appState.currentCategory !== 'all' && p.category !== appState.currentCategory) {
      return false;
    }
    // Spice match
    if (appState.spiceFilter !== 'all' && p.spiceLevel !== appState.spiceFilter) {
      return false;
    }
    // Search match
    if (appState.searchQuery) {
      const q = appState.searchQuery;
      const matchEn = p.nameEn.toLowerCase().includes(q);
      const matchTe = p.nameTe.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      if (!matchEn && !matchTe && !matchDesc) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  } else {
    emptyState.classList.add('hidden');
  }

  // Generate Cards
  container.innerHTML = filtered.map(product => {
    const defaultWeight = '250g';
    const defaultPrice = calculatePrice(product.basePrice250g, defaultWeight);

    // Title representation based on language
    let titleHtml = '';
    if (appState.languageMode === 'te') {
      titleHtml = `<h3 class="font-telugu font-bold text-lg text-gray-900 leading-snug">${product.nameTe}</h3>
                   <span class="text-xs text-gray-500 font-sans">${product.nameEn}</span>`;
    } else if (appState.languageMode === 'en') {
      titleHtml = `<h3 class="font-sans font-bold text-lg text-gray-900 leading-snug">${product.nameEn}</h3>
                   <span class="text-xs text-emerald-800 font-telugu">${product.nameTe}</span>`;
    } else {
      titleHtml = `<div class="flex flex-col">
                    <span class="font-telugu font-bold text-base text-gray-900">${product.nameTe}</span>
                    <span class="font-sans font-extrabold text-sm text-brand-emerald">${product.nameEn}</span>
                   </div>`;
    }

    // Category tag style
    const isNonVeg = product.category === 'non-veg';
    const catBadge = isNonVeg 
      ? '<span class="px-2 py-0.5 rounded text-[10px] font-black bg-red-100 text-red-700 border border-red-200">NON-VEG 🍗</span>'
      : product.category === 'veg'
        ? '<span class="px-2 py-0.5 rounded text-[10px] font-black bg-green-100 text-green-700 border border-green-200">VEG 🥬</span>'
        : '<span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-800 border border-amber-200">PODI 🌶️</span>';

    return `
      <div class="product-card bg-white rounded-3xl border border-amber-200/80 shadow-md flex flex-col justify-between overflow-hidden relative" data-product-id="${product.id}">
        
        <!-- Top Image & Badges -->
        <div class="relative bg-brand-dark/5 overflow-hidden">
          <div class="w-full h-48 sm:h-52 overflow-hidden flex items-center justify-center p-3">
            <img src="${product.image}" alt="${product.nameEn}" 
                 class="w-full h-full object-cover rounded-2xl shadow-inner transform hover:scale-105 transition-transform duration-300">
          </div>

          <!-- Top corner badges -->
          <div class="absolute top-4 left-4 flex flex-col gap-1 items-start">
            ${catBadge}
            ${product.isHero ? '<span class="px-2 py-0.5 rounded text-[10px] font-black bg-brand-gold text-brand-dark shadow">★ STAR</span>' : ''}
          </div>

          <div class="absolute top-4 right-4">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-gray-800 shadow-sm border border-gray-200">
              ${product.spiceBadge}
            </span>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          
          <div>
            <div class="mb-1.5 flex items-start justify-between gap-2">
              ${titleHtml}
            </div>

            <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              ${product.description}
            </p>
          </div>

          <!-- Weight Selector Grid -->
          <div class="space-y-1.5 pt-1 border-t border-gray-100">
            <div class="flex items-center justify-between text-[11px] text-gray-500">
              <span>Choose Size:</span>
              <span class="font-bold text-brand-emerald" id="badge-${product.id}">250g (Popular)</span>
            </div>

            <!-- Weight Buttons -->
            <div class="grid grid-cols-3 gap-1.5">
              ${WEIGHT_OPTIONS.map(w => {
                const price = calculatePrice(product.basePrice250g, w.value);
                const isSelected = w.value === defaultWeight;
                return `
                  <button type="button" 
                          onclick="selectProductCardWeight('${product.id}', '${w.value}', ${price}, '${w.badge}')"
                          class="weight-btn text-[11px] py-1 px-1.5 rounded-lg border text-center font-medium ${isSelected ? 'selected' : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-amber-50'}"
                          data-weight="${w.value}"
                          data-price="${price}">
                    ${w.label}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Price & Quantity Row -->
          <div class="pt-2 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-gray-400 block leading-tight">Price:</span>
              <div class="flex items-baseline gap-1">
                <span class="text-xl font-extrabold text-brand-chili" id="price-display-${product.id}">
                  ₹${defaultPrice}
                </span>
                <span class="text-[10px] text-gray-500" id="weight-display-${product.id}">/ 250g</span>
              </div>
            </div>

            <!-- Quantity Stepper -->
            <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
              <button onclick="decrementCardQty('${product.id}')" class="px-2 py-1 text-gray-600 hover:bg-gray-200 font-bold text-xs">-</button>
              <span id="qty-${product.id}" class="px-2.5 py-1 text-xs font-bold text-gray-800">1</span>
              <button onclick="incrementCardQty('${product.id}')" class="px-2 py-1 text-gray-600 hover:bg-gray-200 font-bold text-xs">+</button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-2 gap-2 pt-1">
            <button onclick="addProductToCartFromCard('${product.id}')" 
                    class="w-full flex items-center justify-center gap-1.5 bg-brand-emerald hover:bg-brand-deep text-white font-extrabold py-2 px-2 rounded-xl text-xs shadow-md transition transform active:scale-95">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> Add to Cart
            </button>
            
            <button onclick="quickOrderFromCard('${product.id}')" 
                    class="w-full flex items-center justify-center gap-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-1 rounded-xl text-[11px] shadow-sm transition transform active:scale-95"
                    title="Direct WhatsApp Order">
              <i data-lucide="zap" class="w-3.5 h-3.5"></i> Quick WA
            </button>
          </div>

        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Card Weight Selector Logic
function selectProductCardWeight(productId, weightValue, price, badge) {
  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (!card) return;

  // Toggle selected button state
  card.querySelectorAll('.weight-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-weight') === weightValue);
  });

  // Update display
  const priceDisplay = document.getElementById(`price-display-${productId}`);
  const weightDisplay = document.getElementById(`weight-display-${productId}`);
  const badgeDisplay = document.getElementById(`badge-${productId}`);

  if (priceDisplay) priceDisplay.textContent = `₹${price}`;
  if (weightDisplay) weightDisplay.textContent = `/ ${weightValue}`;
  if (badgeDisplay) badgeDisplay.textContent = `${weightValue} (${badge})`;
}

function incrementCardQty(productId) {
  const qtyEl = document.getElementById(`qty-${productId}`);
  if (qtyEl) {
    let q = parseInt(qtyEl.textContent, 10) || 1;
    qtyEl.textContent = q + 1;
  }
}

function decrementCardQty(productId) {
  const qtyEl = document.getElementById(`qty-${productId}`);
  if (qtyEl) {
    let q = parseInt(qtyEl.textContent, 10) || 1;
    if (q > 1) qtyEl.textContent = q - 1;
  }
}

// Add to Cart from Card
function addProductToCartFromCard(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  const selectedBtn = card.querySelector('.weight-btn.selected');
  const weight = selectedBtn ? selectedBtn.getAttribute('data-weight') : '250g';
  const price = selectedBtn ? parseInt(selectedBtn.getAttribute('data-price'), 10) : product.basePrice250g;
  
  const qtyEl = document.getElementById(`qty-${productId}`);
  const quantity = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;

  addToCart(product, weight, price, quantity);
}

// Hero Chicken Card Selector
function selectHeroWeight(weight, price) {
  appState.selectedHeroWeight = weight;
  appState.selectedHeroPrice = price;

  document.querySelectorAll('.hero-weight-btn').forEach(b => {
    b.classList.remove('active', 'bg-brand-gold', 'text-brand-dark');
    b.classList.add('border-white/20', 'text-white');
  });

  const activeBtn = Array.from(document.querySelectorAll('.hero-weight-btn')).find(b => b.textContent.includes(weight));
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-brand-gold', 'text-brand-dark');
    activeBtn.classList.remove('border-white/20', 'text-white');
  }
}

function addHeroChickenToCart() {
  const heroProduct = PRODUCTS.find(p => p.id === 'chicken_pickle');
  if (heroProduct) {
    addToCart(heroProduct, appState.selectedHeroWeight, appState.selectedHeroPrice, 1);
  }
}

function quickOrderHeroChicken() {
  const heroProduct = PRODUCTS.find(p => p.id === 'chicken_pickle');
  const weight = appState.selectedHeroWeight;
  const price = appState.selectedHeroPrice;
  const msg = `Hello MS Pickles! 👋%0A%0AI want to order your *Spicy Chicken Pickle (చికెన్ పచ్చడి)*.%0A- Quantity: 1 pack (%2A${weight}%2A)%0A- Price: ₹${price}%0A%0APlease let me know the delivery timeframe and payment details!`;
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');
}

// 1-Click WhatsApp Quick Order from Card
function quickOrderFromCard(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  const selectedBtn = card.querySelector('.weight-btn.selected');
  const weight = selectedBtn ? selectedBtn.getAttribute('data-weight') : '250g';
  const price = selectedBtn ? parseInt(selectedBtn.getAttribute('data-price'), 10) : product.basePrice250g;
  const qtyEl = document.getElementById(`qty-${productId}`);
  const quantity = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
  const total = price * quantity;

  const msg = `Hello MS Pickles! 👋%0A%0AI would like to order *${encodeURIComponent(product.nameEn)} (${encodeURIComponent(product.nameTe)})*:%0A- Size: ${weight}%0A- Packs: ${quantity}%0A- Total: ₹${total}%0A%0APlease confirm my order and share payment details. Thank you!`;
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');
}

// CART MANAGEMENT
function addToCart(product, weight, price, quantity) {
  const cartItemId = `${product.id}_${weight}`;
  const existing = appState.cart.find(item => item.cartItemId === cartItemId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    appState.cart.push({
      cartItemId,
      id: product.id,
      nameEn: product.nameEn,
      nameTe: product.nameTe,
      image: product.image,
      weight,
      price,
      quantity
    });
  }

  saveCart();
  updateCartUI();
  playChime();
  triggerCartBounce();
  showToast(`Added ${quantity}x ${product.nameEn} (${weight}) to cart! 🛒`);
}

function updateCartItemQuantity(cartItemId, delta) {
  const item = appState.cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    appState.cart = appState.cart.filter(i => i.cartItemId !== cartItemId);
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  appState.cart = appState.cart.filter(i => i.cartItemId !== cartItemId);
  saveCart();
  updateCartUI();
  showToast('Item removed from basket');
}

function saveCart() {
  localStorage.setItem('ms_pickles_cart', JSON.stringify(appState.cart));
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const emptyView = document.getElementById('cartEmptyView');
  const cartFooter = document.getElementById('cartFooter');

  const totalCount = appState.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (countBadge) countBadge.textContent = totalCount;

  // Calculate Subtotal
  const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const FREE_DELIVERY_THRESHOLD = 999;
  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : 60;
  const grandTotal = subtotal + deliveryFee;

  // Free delivery progress
  const freeProgress = document.getElementById('freeDeliveryProgress');
  const freeText = document.getElementById('freeDeliveryText');
  const freeAmount = document.getElementById('freeDeliveryAmount');

  if (freeProgress && freeText && freeAmount) {
    if (subtotal === 0) {
      freeProgress.style.width = '0%';
      freeText.textContent = 'Free Delivery on orders above ₹999!';
      freeAmount.textContent = 'Min ₹999';
    } else if (subtotal >= FREE_DELIVERY_THRESHOLD) {
      freeProgress.style.width = '100%';
      freeText.textContent = '🎉 You unlocked FREE Delivery!';
      freeAmount.textContent = 'FREE';
    } else {
      const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
      freeProgress.style.width = `${pct}%`;
      freeText.textContent = `Add ₹${remaining} more for FREE Delivery!`;
      freeAmount.textContent = `${pct}%`;
    }
  }

  // Update Bill Summary
  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryFeeEl = document.getElementById('cartDeliveryFee');
  const grandTotalEl = document.getElementById('cartGrandTotal');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (deliveryFeeEl) deliveryFeeEl.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal}`;

  // Render items list
  if (appState.cart.length === 0) {
    if (emptyView) emptyView.classList.remove('hidden');
    if (itemsContainer) itemsContainer.innerHTML = '';
    if (cartFooter) cartFooter.classList.add('opacity-50', 'pointer-events-none');
    return;
  }

  if (emptyView) emptyView.classList.add('hidden');
  if (cartFooter) cartFooter.classList.remove('opacity-50', 'pointer-events-none');

  if (itemsContainer) {
    itemsContainer.innerHTML = appState.cart.map(item => `
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-200">
        <img src="${item.image}" alt="${item.nameEn}" class="w-14 h-14 object-cover rounded-xl border border-gray-300 shrink-0">
        <div class="flex-1 min-w-0">
          <h5 class="text-xs font-bold text-gray-900 truncate">${item.nameEn}</h5>
          <p class="text-[11px] text-emerald-800 font-telugu truncate">${item.nameTe}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs font-black text-brand-chili">₹${item.price}</span>
            <span class="text-[10px] text-gray-500 bg-white px-1.5 py-0.5 rounded border border-gray-200 font-semibold">${item.weight}</span>
          </div>
        </div>

        <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shrink-0">
          <button onclick="updateCartItemQuantity('${item.cartItemId}', -1)" class="px-2 py-0.5 text-gray-700 hover:bg-gray-100 font-bold text-xs">-</button>
          <span class="px-2 text-xs font-bold text-gray-900">${item.quantity}</span>
          <button onclick="updateCartItemQuantity('${item.cartItemId}', 1)" class="px-2 py-0.5 text-gray-700 hover:bg-gray-100 font-bold text-xs">+</button>
        </div>

        <button onclick="removeCartItem('${item.cartItemId}')" class="text-gray-400 hover:text-red-600 p-1 transition" title="Remove">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `).join('');

    lucide.createIcons();
  }
}

// Drawer Open/Close
function openCart() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  const drawer = document.getElementById('cartDrawerContent');
  if (backdrop && drawer) {
    backdrop.classList.remove('hidden');
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      drawer.classList.remove('translate-x-full');
    }, 10);
  }
}

function closeCart() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  const drawer = document.getElementById('cartDrawerContent');
  if (backdrop && drawer) {
    backdrop.classList.add('opacity-0');
    drawer.classList.add('translate-x-full');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  }
}

function triggerCartBounce() {
  const btn = document.getElementById('openCartBtn');
  if (btn) {
    btn.classList.add('animate-bounce');
    setTimeout(() => btn.classList.remove('animate-bounce'), 1000);
  }
}

// Toast notification helper
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-brand-dark/95 border-2 border-brand-gold text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 pointer-events-auto toast-enter';
  toast.innerHTML = `<span>🌶️</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// SUBMIT ORDER VIA WHATSAPP (Primary Feature!)
function submitOrderViaWhatsApp() {
  if (appState.cart.length === 0) {
    showToast('Your basket is empty! Please add some delicious pickles first.');
    return;
  }

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();

  if (!name || !phone || !address) {
    alert('Please enter your Name, Phone Number, and Delivery Address so we can fulfill your order!');
    return;
  }

  // Save customer info
  localStorage.setItem('ms_pickles_cust', JSON.stringify({ name, phone, address }));

  // Generate unique Order Number
  const orderId = 'MSP-' + Math.floor(1000 + Math.random() * 9000);

  // Subtotal & Totals
  const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const deliveryFee = subtotal >= 999 ? 0 : 60;
  const grandTotal = subtotal + deliveryFee;

  // Build Itemized WhatsApp Message
  let msg = `🌶️ *NEW ORDER - MS PICKLES* 🌶️%0A`;
  msg += `*Order ID:* ${orderId}%0A`;
  msg += `--------------------------------%0A`;
  msg += `👤 *Customer:* ${encodeURIComponent(name)}%0A`;
  msg += `📞 *Phone:* ${encodeURIComponent(phone)}%0A`;
  msg += `📍 *Delivery Address:*%0A${encodeURIComponent(address)}%0A`;
  msg += `--------------------------------%0A`;
  msg += `📦 *ITEMS ORDERED:*%0A`;

  appState.cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${encodeURIComponent(item.nameEn)}* (${encodeURIComponent(item.nameTe)})%0A`;
    msg += `   - Size: ${item.weight} x ${item.quantity} pack(s)%0A`;
    msg += `   - Price: ₹${item.price * item.quantity}%0A`;
  });

  msg += `--------------------------------%0A`;
  msg += `Subtotal: ₹${subtotal}%0A`;
  msg += `Delivery: ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}%0A`;
  msg += `*GRAND TOTAL: ₹${grandTotal}*%0A`;
  msg += `--------------------------------%0A`;
  msg += `Homemade Taste • Authentic Andhra Flavour%0A`;
  msg += `Please send UPI / Bank Transfer QR code to confirm payment. Thank you!`;

  // Trigger celebratory confetti!
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Open WhatsApp in a new tab
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');

  // Close Cart Drawer
  closeCart();
  showToast(`Order #${orderId} generated! WhatsApp opened.`);
}

// INVOICE / RECEIPT MODAL
function showOrderConfirmationModal() {
  if (appState.cart.length === 0) {
    showToast('Your basket is empty.');
    return;
  }

  const name = document.getElementById('custName').value.trim() || 'Valued Customer';
  const phone = document.getElementById('custPhone').value.trim() || 'Not Provided';
  const address = document.getElementById('custAddress').value.trim() || 'Store Pickup / Contact via WhatsApp';

  const orderId = 'MSP-' + Math.floor(1000 + Math.random() * 9000);
  const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const deliveryFee = subtotal >= 999 ? 0 : 60;
  const grandTotal = subtotal + deliveryFee;
  const today = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

  const modal = document.getElementById('receiptModal');
  const content = document.getElementById('receiptContent');

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="flex items-center justify-between border-b pb-4">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center font-bold">
          <i data-lucide="file-text" class="w-5 h-5"></i>
        </div>
        <div>
          <h3 class="font-display font-extrabold text-lg text-gray-900">MS PICKLES - BILL INVOICE</h3>
          <p class="text-[11px] text-gray-500">Order ID: <strong>${orderId}</strong> • ${today}</p>
        </div>
      </div>
      <button onclick="closeReceiptModal()" class="text-gray-400 hover:text-gray-700 p-1 no-print">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Customer Details -->
    <div class="p-3 bg-gray-50 rounded-xl text-xs space-y-1 text-gray-700 border">
      <p><strong>Customer:</strong> ${name} (${phone})</p>
      <p><strong>Delivery Address:</strong> ${address}</p>
      <p><strong>Helpline:</strong> +91 ${DISPLAY_PHONE} (WhatsApp & Phone)</p>
    </div>

    <!-- Items Table -->
    <div class="max-h-56 overflow-y-auto border rounded-xl divide-y text-xs">
      <div class="bg-gray-100 font-bold p-2.5 grid grid-cols-12 text-gray-700">
        <span class="col-span-6">Item</span>
        <span class="col-span-2 text-center">Pack</span>
        <span class="col-span-2 text-center">Qty</span>
        <span class="col-span-2 text-right">Total</span>
      </div>
      ${appState.cart.map(item => `
        <div class="p-2.5 grid grid-cols-12 text-gray-800 items-center">
          <div class="col-span-6">
            <p class="font-bold">${item.nameEn}</p>
            <p class="text-[10px] text-emerald-800 font-telugu">${item.nameTe}</p>
          </div>
          <span class="col-span-2 text-center text-gray-600">${item.weight}</span>
          <span class="col-span-2 text-center font-semibold">${item.quantity}</span>
          <span class="col-span-2 text-right font-black">₹${item.price * item.quantity}</span>
        </div>
      `).join('')}
    </div>

    <!-- Totals -->
    <div class="space-y-1 text-xs text-gray-700 pt-2 border-t">
      <div class="flex justify-between">
        <span>Items Subtotal:</span>
        <span class="font-bold">₹${subtotal}</span>
      </div>
      <div class="flex justify-between">
        <span>Delivery Fee:</span>
        <span class="font-bold text-green-700">${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}</span>
      </div>
      <div class="flex justify-between text-base font-extrabold text-brand-chili pt-1 border-t">
        <span>Total Payable:</span>
        <span>₹${grandTotal}</span>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="pt-3 flex items-center justify-between gap-3 no-print">
      <button onclick="window.print()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition">
        <i data-lucide="printer" class="w-4 h-4"></i> Print Bill
      </button>

      <button onclick="submitOrderViaWhatsApp()" class="flex-1 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-md transition">
        <i data-lucide="message-circle" class="w-4 h-4"></i> Complete Order on WhatsApp
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeReceiptModal() {
  document.getElementById('receiptModal').classList.add('hidden');
}

// POSTER MODAL
function openPosterModal() {
  document.getElementById('posterModal').classList.remove('hidden');
}
function closePosterModal(e) {
  document.getElementById('posterModal').classList.add('hidden');
}

// PRODUCT DETAIL MODAL
function openProductDetailModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const content = document.getElementById('productModalContent');

  content.innerHTML = `
    <div class="relative bg-brand-dark p-4 flex items-center justify-between text-white border-b border-brand-gold/30">
      <div>
        <h3 class="font-display font-extrabold text-lg text-brand-gold">${product.nameEn}</h3>
        <p class="font-telugu text-xs text-emerald-200">${product.nameTe} • 100% Homemade</p>
      </div>
      <button onclick="closeProductDetailModal()" class="text-gray-300 hover:text-white p-1">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
      <div class="rounded-2xl overflow-hidden shadow-inner border border-amber-200 bg-gray-50 flex items-center justify-center">
        <img src="${product.heroImage || product.image}" alt="${product.nameEn}" class="w-full h-56 object-cover">
      </div>

      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">${product.spiceBadge}</span>
          <span class="px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-900 border border-green-200">${product.tag}</span>
        </div>
        <p class="text-sm text-gray-700 leading-relaxed">${product.description}</p>
      </div>

      <div class="space-y-2">
        <h5 class="text-xs font-bold text-gray-800 uppercase tracking-wider">Features & Purity:</h5>
        <ul class="text-xs text-gray-600 space-y-1">
          ${product.benefits.map(b => `<li class="flex items-center gap-2">✓ <span class="text-gray-800">${b}</span></li>`).join('')}
        </ul>
      </div>

      <!-- Quick Weight Selector in Modal -->
      <div class="space-y-2 pt-2 border-t">
        <label class="text-xs font-bold text-gray-800 block">Select Quantity / Packaging Size:</label>
        <div class="grid grid-cols-3 gap-2">
          ${WEIGHT_OPTIONS.map(w => {
            const price = calculatePrice(product.basePrice250g, w.value);
            return `
              <button onclick="modalSelectWeight('${product.id}', '${w.value}', ${price})" 
                      id="modal-btn-${w.value}"
                      class="modal-weight-btn py-2 px-2 text-xs rounded-xl border text-center font-bold transition ${w.value === '250g' ? 'bg-brand-emerald text-white border-brand-emerald' : 'bg-gray-50 hover:bg-amber-50 text-gray-800 border-gray-200'}">
                <span>${w.label}</span>
                <span class="block text-[11px] font-normal">₹${price}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Footer CTA in Modal -->
      <div class="pt-3 border-t flex items-center gap-3">
        <button onclick="modalAddToCart('${product.id}')" class="flex-1 py-3 bg-brand-emerald hover:bg-brand-deep text-white font-extrabold rounded-2xl text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition">
          <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Cart
        </button>
        <button onclick="modalDirectWhatsApp('${product.id}')" class="flex-1 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition">
          <i data-lucide="message-circle" class="w-4 h-4"></i> Order on WA
        </button>
      </div>

    </div>
  `;

  modal.setAttribute('data-current-weight', '250g');
  modal.setAttribute('data-current-price', calculatePrice(product.basePrice250g, '250g'));
  modal.classList.remove('hidden');
  lucide.createIcons();
}

function modalSelectWeight(productId, weight, price) {
  const modal = document.getElementById('productDetailModal');
  modal.setAttribute('data-current-weight', weight);
  modal.setAttribute('data-current-price', price);

  document.querySelectorAll('.modal-weight-btn').forEach(btn => {
    btn.classList.remove('bg-brand-emerald', 'text-white', 'border-brand-emerald');
    btn.classList.add('bg-gray-50', 'text-gray-800', 'border-gray-200');
  });

  const activeBtn = document.getElementById(`modal-btn-${weight}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-brand-emerald', 'text-white', 'border-brand-emerald');
    activeBtn.classList.remove('bg-gray-50', 'text-gray-800', 'border-gray-200');
  }
}

function modalAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const modal = document.getElementById('productDetailModal');
  const weight = modal.getAttribute('data-current-weight') || '250g';
  const price = parseInt(modal.getAttribute('data-current-price'), 10) || product.basePrice250g;

  addToCart(product, weight, price, 1);
  closeProductDetailModal();
}

function modalDirectWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const modal = document.getElementById('productDetailModal');
  const weight = modal.getAttribute('data-current-weight') || '250g';
  const price = parseInt(modal.getAttribute('data-current-price'), 10) || product.basePrice250g;

  const msg = `Hello MS Pickles! 👋%0A%0AI want to order *${encodeURIComponent(product.nameEn)} (${encodeURIComponent(product.nameTe)})*:%0A- Quantity: 1 pack (${weight})%0A- Price: ₹${price}%0A%0APlease share your delivery schedule and UPI payment details. Thank you!`;
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');
  closeProductDetailModal();
}

function closeProductDetailModal() {
  document.getElementById('productDetailModal').classList.add('hidden');
}
