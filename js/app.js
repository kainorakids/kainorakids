const WHATSAPP = '6285822222430';
const EMAIL = 'kainorakids@gmail.com';
const SOCIAL = {
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  shopee: 'https://shopee.co.id'
};

const products = [
  { id: 1, name: 'Dress Awan Pink', price: 129000, rating: 4.9, badge: 'Best Seller', image: 'assets/products/product-01.svg', description: 'Dress manis dengan warna lembut dan bahan nyaman untuk aktivitas harian si kecil.' },
  { id: 2, name: 'Set Ruffle Peach', price: 149000, rating: 4.8, badge: 'New', image: 'assets/products/product-02.svg', description: 'Setelan lucu dengan nuansa peach yang lembut dan enak dipakai bermain.' },
  { id: 3, name: 'Kaos Dino Soft', price: 99000, rating: 4.9, badge: 'Favorite', image: 'assets/products/product-03.svg', description: 'Kaos adem dengan potongan simpel untuk tampilan santai yang tetap manis.' },
  { id: 4, name: 'Romper Daisy', price: 119000, rating: 4.8, badge: 'Soft Cotton', image: 'assets/products/product-04.svg', description: 'Romper lembut yang nyaman dipakai anak dengan sentuhan detail yang manis.' },
  { id: 5, name: 'Setelan Mint Play', price: 139000, rating: 4.8, badge: 'Limited', image: 'assets/products/product-05.svg', description: 'Set mint playful yang ringan, manis, dan pas untuk aktivitas harian.' },
  { id: 6, name: 'Dress Bloom Cream', price: 135000, rating: 4.9, badge: 'Best Seller', image: 'assets/products/product-06.svg', description: 'Dress cream dengan tampilan lembut dan nuansa clean yang disukai bunda.' },
  { id: 7, name: 'Kaos Sunny Day', price: 95000, rating: 4.7, badge: 'Promo', image: 'assets/products/product-07.svg', description: 'Kaos kasual yang ringan dan mudah dipadukan dengan bawahan favorit.' },
  { id: 8, name: 'Jumpsuit Tulip', price: 145000, rating: 4.9, badge: 'Popular', image: 'assets/products/product-08.svg', description: 'Jumpsuit nyaman dengan warna pastel yang membuat tampilan si kecil lebih manis.' },
  { id: 9, name: 'Kaos Milk Beige', price: 89000, rating: 4.8, badge: 'Basic', image: 'assets/products/product-09.svg', description: 'Pilihan basic yang lembut untuk outfit anak yang simpel tapi tetap cantik.' },
  { id: 10, name: 'Dress Berry Soft', price: 149000, rating: 4.9, badge: 'New', image: 'assets/products/product-10.svg', description: 'Dress dengan nuansa berry yang manis dan lembut untuk momen spesial si kecil.' },
  { id: 11, name: 'Set Lavender Joy', price: 152000, rating: 4.8, badge: 'Limited', image: 'assets/products/product-11.svg', description: 'Set lavender dengan kesan premium, cocok untuk hadiah atau outing keluarga.' },
  { id: 12, name: 'Romper Cloudy', price: 119000, rating: 4.7, badge: 'Soft Cotton', image: 'assets/products/product-12.svg', description: 'Romper lembut dan ringan untuk si kecil yang aktif bergerak.' }
];

const footerInfo = {
  pengiriman: {
    title: 'Detail Pengiriman',
    body: 'Pesanan diproses setelah konfirmasi order diterima. Estimasi proses 1x24 jam pada hari kerja. Estimasi pengiriman mengikuti layanan ekspedisi yang dipilih.'
  },
  retur: {
    title: 'Retur',
    body: 'Retur dapat diajukan maksimal 2 hari setelah barang diterima dengan kondisi belum dipakai, belum dicuci, dan label produk masih lengkap.'
  },
  size: {
    title: 'Size Guide',
    body: 'Setiap produk memiliki panduan ukuran yang bisa bunda lihat di popup detail produk. Pilih ukuran yang paling mendekati panjang badan dan usia si kecil.'
  },
  privacy: {
    title: 'Kebijakan Privasi',
    body: 'Data yang bunda isi digunakan hanya untuk keperluan pemrosesan pesanan, komunikasi admin, dan peningkatan layanan Kainora Kids.'
  }
};

const slides = [
  {
    title: 'Outfit anak yang manis, nyaman, dan siap dipakai setiap hari',
    subtitle: 'Koleksi Kainora Kids dibuat untuk bunda yang ingin si kecil tampil lucu tanpa mengorbankan kenyamanan.',
    image: 'assets/hero-1.png',
    tag: 'Best Seller'
  },
  {
    title: 'Pilihan baju anak yang lembut untuk bermain, jalan, dan foto keluarga',
    subtitle: 'Warna pastel, bahan adem, dan potongan nyaman yang mudah dipadukan untuk aktivitas si kecil.',
    image: 'assets/hero-2.png',
    tag: 'New Drop'
  },
  {
    title: 'Belanja tenang untuk bunda, tampil bahagia untuk si kecil',
    subtitle: 'Mulai dari pilih produk sampai pesanan dipakai si kecil, semuanya dibuat hangat dan menyenangkan.',
    image: 'assets/hero-3.png',
    tag: 'Limited'
  }
];

const testimonials = [
  { name: 'Bunda Nadya', city: 'Bandung', text: 'Bahannya lembut dan anakku nyaman dipakai seharian. Warnanya juga manis banget.' },
  { name: 'Bunda Mita', city: 'Jakarta', text: 'Packing rapi, cepat sampai, dan modelnya persis seperti yang aku cari untuk si kecil.' },
  { name: 'Bunda Rani', city: 'Surabaya', text: 'Anakku happy waktu pertama pakai. Look-nya cantik tapi tetap nyaman.' },
  { name: 'Bunda Salsa', city: 'Bekasi', text: 'Aku repeat order karena kualitasnya enak dan adminnya responsif banget.' },
  { name: 'Bunda Fina', city: 'Bogor', text: 'Cocok untuk hadiah juga. Tampilannya lucu dan terasa premium.' }
];

let selectedProduct = null;

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('kainora-cart') || '[]');
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem('kainora-cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
    el.style.display = count ? 'inline-flex' : 'none';
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  if (![...document.querySelectorAll('.modal')].some(m => m.classList.contains('is-open'))) {
    document.body.classList.remove('modal-open');
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal.is-open').forEach(closeModal);
}

function openProductModal(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  selectedProduct = product;
  const modal = document.getElementById('productModal');
  modal.querySelector('[data-product-image]').src = product.image;
  modal.querySelector('[data-product-image]').alt = product.name;
  modal.querySelector('[data-product-name]').textContent = product.name;
  modal.querySelector('[data-product-price]').textContent = formatRupiah(product.price);
  modal.querySelector('[data-product-rating]').textContent = product.rating.toFixed(1);
  modal.querySelector('[data-product-desc]').textContent = product.description;
  openModal(modal);
}

function addSelectedProductToCart() {
  if (!selectedProduct) return;
  const cart = getCart();
  const found = cart.find(item => item.id === selectedProduct.id);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, image: selectedProduct.image, qty: 1 });
  }
  setCart(cart);
  closeModal(document.getElementById('productModal'));
  openModal(document.getElementById('addCartChoiceModal'));
}

function renderProducts(targetSelector, limit = null) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  const list = limit ? products.slice(0, limit) : products;
  target.innerHTML = list.map(product => `
    <article class="product-card" data-open-product="${product.id}">
      <div class="product-thumb-wrap">
        <img class="product-thumb" src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="price-row">
          <div class="price">${formatRupiah(product.price)}</div>
          <div class="badge">${product.badge}</div>
        </div>
        <div class="rating-row">
          <span class="stars">★</span>
          <span>${product.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderTestimonials() {
  const track = document.querySelector('.testimonial-track');
  if (!track) return;
  const cards = [...testimonials, ...testimonials].map(item => `
    <article class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <p>“${item.text}”</p>
      <strong>${item.name}</strong>
      <span>${item.city}</span>
    </article>
  `).join('');
  track.innerHTML = cards;
}

function openInfoModal(key) {
  const item = footerInfo[key];
  if (!item) return;
  const modal = document.getElementById('infoModal');
  modal.querySelector('[data-info-title]').textContent = item.title;
  modal.querySelector('[data-info-body]').textContent = item.body;
  openModal(modal);
}

function renderCart() {
  const body = document.querySelector('[data-cart-body]');
  const totalEl = document.querySelector('[data-cart-total]');
  const itemsEl = document.querySelector('[data-cart-items]');
  const checkoutBtn = document.querySelector('[data-cart-checkout]');
  if (!body || !totalEl || !itemsEl || !checkoutBtn) return;
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const items = cart.reduce((sum, item) => sum + item.qty, 0);
  if (!cart.length) {
    body.innerHTML = `<div class="empty-box">Keranjang bunda masih kosong. Pilih produk yang disukai lalu tambahkan ke keranjang.</div>`;
    checkoutBtn.style.display = 'none';
  } else {
    body.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-left">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <small>${formatRupiah(item.price)}</small>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="qty-box">
            <button type="button" data-qty-minus="${item.id}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty-plus="${item.id}">+</button>
          </div>
          <div class="cart-line-total">${formatRupiah(item.qty * item.price)}</div>
        </div>
      </div>
    `).join('');
    checkoutBtn.style.display = 'inline-flex';
    const text = encodeURIComponent(
      `Halo Kainora Kids, saya ingin melanjutkan pesanan saya.\n\n${cart.map(item => `- ${item.name} x${item.qty} (${formatRupiah(item.price)})`).join('\n')}\n\nTotal: ${formatRupiah(total)}\n\nNama:\nAlamat:`
    );
    checkoutBtn.href = `https://wa.me/${WHATSAPP}?text=${text}`;
  }
  totalEl.textContent = formatRupiah(total);
  itemsEl.textContent = items;
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty += delta;
  const filtered = cart.filter(entry => entry.qty > 0);
  setCart(filtered);
  renderCart();
}

function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const tag = hero.querySelector('[data-slide-tag]');
  const title = hero.querySelector('[data-slide-title]');
  const subtitle = hero.querySelector('[data-slide-subtitle]');
  const image = hero.querySelector('[data-slide-image]');
  let index = 0;
  const update = () => {
    const item = slides[index];
    tag.textContent = item.tag;
    title.textContent = item.title;
    subtitle.textContent = item.subtitle;
    image.src = item.image;
    image.alt = item.title;
    index = (index + 1) % slides.length;
  };
  update();
  setInterval(update, 2000);
}

function initVideoReplay() {
  const video = document.querySelector('[data-story-video]');
  if (!video) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, { threshold: 0.45 });
  observer.observe(video);
}

function initGroupBuyPage() {
  const slider = document.querySelector('[data-discount-slider]');
  if (!slider) return;
  const qtyEl = document.querySelector('[data-discount-qty]');
  const pctEl = document.querySelector('[data-discount-pct]');
  const cutEl = document.querySelector('[data-discount-cut]');
  const totalEl = document.querySelector('[data-discount-total]');
  const waEl = document.querySelector('[data-discount-wa]');
  const price = 129000;
  const calculate = qty => {
    let pct = 0;
    if (qty >= 20) pct = 18;
    else if (qty >= 10) pct = 12;
    else if (qty >= 5) pct = 7;
    else if (qty >= 3) pct = 4;
    const cut = qty * price * pct / 100;
    const total = qty * price - cut;
    qtyEl.textContent = qty;
    pctEl.textContent = `${pct}%`;
    cutEl.textContent = formatRupiah(cut);
    totalEl.textContent = formatRupiah(total);
    waEl.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Halo Kainora Kids, saya ingin tanya program beli banyak. Perkiraan saya ${qty} pcs.`)}`;
  };
  slider.addEventListener('input', e => calculate(Number(e.target.value)));
  calculate(Number(slider.value));
}

function initEvents() {
  document.addEventListener('click', event => {
    const openProduct = event.target.closest('[data-open-product]');
    if (openProduct) {
      openProductModal(Number(openProduct.dataset.openProduct));
      return;
    }

    const qtyPlus = event.target.closest('[data-qty-plus]');
    if (qtyPlus) {
      changeQty(Number(qtyPlus.dataset.qtyPlus), 1);
      return;
    }

    const qtyMinus = event.target.closest('[data-qty-minus]');
    if (qtyMinus) {
      changeQty(Number(qtyMinus.dataset.qtyMinus), -1);
      return;
    }

    const modalClose = event.target.closest('[data-close-modal]');
    if (modalClose) {
      closeModal(modalClose.closest('.modal'));
      return;
    }

    if (event.target.classList.contains('modal')) {
      closeModal(event.target);
      return;
    }

    const infoBtn = event.target.closest('[data-open-info]');
    if (infoBtn) {
      openInfoModal(infoBtn.dataset.openInfo);
      return;
    }

    const cartOpen = event.target.closest('[data-open-cart]');
    if (cartOpen) {
      renderCart();
      openModal(document.getElementById('cartModal'));
      return;
    }

    const affiliateOpen = event.target.closest('[data-open-affiliate]');
    if (affiliateOpen) {
      openModal(document.getElementById('affiliateModal'));
      return;
    }

    const addCart = event.target.closest('[data-add-cart]');
    if (addCart) {
      addSelectedProductToCart();
      return;
    }

    const addMore = event.target.closest('[data-add-more]');
    if (addMore) {
      closeModal(document.getElementById('addCartChoiceModal'));
      return;
    }

    const seeCart = event.target.closest('[data-see-cart]');
    if (seeCart) {
      closeModal(document.getElementById('addCartChoiceModal'));
      renderCart();
      openModal(document.getElementById('cartModal'));
      return;
    }

    const menuToggle = event.target.closest('[data-menu-toggle]');
    if (menuToggle) {
      document.querySelector('.mobile-nav').classList.toggle('is-open');
      return;
    }
  });
}

function initSocialLinks() {
  document.querySelectorAll('[data-social]').forEach(el => {
    el.href = SOCIAL[el.dataset.social];
  });
}

function initPage() {
  renderProducts('[data-home-products]', 8);
  renderProducts('[data-all-products]');
  renderTestimonials();
  initHero();
  initVideoReplay();
  initGroupBuyPage();
  initEvents();
  initSocialLinks();
  updateCartCount();
}

document.addEventListener('DOMContentLoaded', initPage);
