
/* =========================================
   GIFTIFY - JavaScript
   ========================================= */

// Gift data
const gifts = [
  { id: 1, name: "Personalized Photo Frame", price: 499, category: "Personalized", emoji: "🖼️", color: "#FCE4EC", rating: 4.8, tag: "Bestseller", desc: "A beautiful photo frame with your favourite memory.", people: ["Everyone", "Friend", "Partner", "Family"], occasions: ["Birthday", "Anniversary", "Just Because"] },
  { id: 2, name: "Custom Name Necklace", price: 799, category: "Fashion", emoji: "📿", color: "#F3E5F5", rating: 4.9, tag: "Popular", desc: "A stylish necklace personalised with a name.", people: ["Friend", "Partner", "Sister"], occasions: ["Birthday", "Anniversary"] },
  { id: 3, name: "Chocolate Gift Box", price: 399, category: "Food", emoji: "🍫", color: "#FFF0DB", rating: 4.7, tag: "Sweet Pick", desc: "A delicious assortment of chocolates for every mood.", people: ["Everyone", "Friend", "Partner", "Family"], occasions: ["Birthday", "Anniversary", "Thank You", "Just Because"] },
  { id: 4, name: "Wireless Earbuds", price: 1499, category: "Technology", emoji: "🎧", color: "#E3F2FD", rating: 4.8, tag: "Tech Pick", desc: "Compact wireless earbuds for music lovers.", people: ["Friend", "Partner", "Brother"], occasions: ["Birthday", "Graduation"] },
  { id: 5, name: "Scented Candle Set", price: 599, category: "Home Decor", emoji: "🕯️", color: "#FBE9E7", rating: 4.6, tag: "Cozy Gift", desc: "Fragrant candles to create a calm and cosy atmosphere.", people: ["Friend", "Sister", "Family"], occasions: ["Birthday", "Housewarming", "Thank You"] },
  { id: 6, name: "Skincare Hamper", price: 999, category: "Beauty", emoji: "🧴", color: "#F8BBD0", rating: 4.7, tag: "Self-Care", desc: "A thoughtful collection of skincare essentials.", people: ["Friend", "Sister", "Mother"], occasions: ["Birthday", "Anniversary", "Thank You"] },
  { id: 7, name: "Cute Mini Succulent", price: 249, category: "Plants", emoji: "🪴", color: "#E8F5E9", rating: 4.6, tag: "Eco Pick", desc: "A little green plant for a desk or windowsill.", people: ["Everyone", "Friend", "Family"], occasions: ["Housewarming", "Thank You", "Just Because"] },
  { id: 8, name: "Inspirational Book", price: 349, category: "Books", emoji: "📚", color: "#EDE7F6", rating: 4.5, tag: "Reader's Choice", desc: "A thoughtful read for someone who loves learning.", people: ["Friend", "Brother", "Sister", "Family"], occasions: ["Birthday", "Graduation", "Thank You"] },
  { id: 9, name: "Couple Coffee Mugs", price: 449, category: "Personalized", emoji: "☕", color: "#FFF3E0", rating: 4.8, tag: "Cute Pick", desc: "Matching mugs for two people who belong together.", people: ["Partner", "Friend"], occasions: ["Anniversary", "Birthday"] },
  { id: 10, name: "Classic Wrist Watch", price: 1299, category: "Fashion", emoji: "⌚", color: "#E0F2F1", rating: 4.7, tag: "Classic", desc: "A timeless watch that completes any outfit.", people: ["Friend", "Partner", "Brother", "Father"], occasions: ["Birthday", "Graduation"] },
  { id: 11, name: "Bluetooth Speaker", price: 1199, category: "Technology", emoji: "🔊", color: "#E8EAF6", rating: 4.6, tag: "Tech Pick", desc: "A portable speaker for music at home or outdoors.", people: ["Friend", "Brother", "Partner"], occasions: ["Birthday", "Graduation"] },
  { id: 12, name: "Decorative Table Lamp", price: 899, category: "Home Decor", emoji: "💡", color: "#FFF8E1", rating: 4.5, tag: "Home Favourite", desc: "A lovely lamp to brighten up a favourite corner.", people: ["Family", "Friend"], occasions: ["Housewarming", "Birthday"] },
  { id: 13, name: "Perfume Gift Set", price: 1099, category: "Beauty", emoji: "🌸", color: "#FCE4EC", rating: 4.8, tag: "Elegant", desc: "A fragrance set for someone who enjoys a special scent.", people: ["Partner", "Friend", "Sister", "Brother"], occasions: ["Birthday", "Anniversary"] },
  { id: 14, name: "Gourmet Cookie Box", price: 299, category: "Food", emoji: "🍪", color: "#FBE9E7", rating: 4.5, tag: "Treat Time", desc: "A box of tasty cookies for a little celebration.", people: ["Everyone", "Friend", "Family"], occasions: ["Birthday", "Thank You", "Just Because"] },
  { id: 15, name: "Elegant Tote Bag", price: 649, category: "Fashion", emoji: "👜", color: "#F3E5F5", rating: 4.6, tag: "Everyday Style", desc: "A practical tote bag for everyday essentials.", people: ["Friend", "Sister", "Mother"], occasions: ["Birthday", "Graduation"] },
  { id: 16, name: "Custom LED Photo Light", price: 899, category: "Personalized", emoji: "🌟", color: "#FFF9C4", rating: 4.9, tag: "Personal Favourite", desc: "A glowing keepsake made extra special with a photo.", people: ["Partner", "Friend", "Family"], occasions: ["Birthday", "Anniversary"] },
  { id: 17, name: "Indoor Money Plant", price: 299, category: "Plants", emoji: "🌿", color: "#E8F5E9", rating: 4.6, tag: "Green Gift", desc: "A cheerful indoor plant for a fresh-looking room.", people: ["Everyone", "Family", "Friend"], occasions: ["Housewarming", "Thank You"] },
  { id: 18, name: "Journal and Pen Set", price: 399, category: "Books", emoji: "📔", color: "#EDE7F6", rating: 4.7, tag: "Creative Pick", desc: "A notebook and pen set for ideas, plans and memories.", people: ["Friend", "Sister", "Brother"], occasions: ["Birthday", "Graduation", "Thank You"] },
  { id: 19, name: "Mini Projector", price: 2499, category: "Technology", emoji: "📽️", color: "#E3F2FD", rating: 4.7, tag: "Wow Gift", desc: "Bring movie-night fun to a room with a mini projector.", people: ["Partner", "Friend", "Brother"], occasions: ["Birthday", "Graduation"] },
  { id: 20, name: "Soft Plush Teddy", price: 549, category: "Personalized", emoji: "🧸", color: "#FFF0DB", rating: 4.8, tag: "Cute Pick", desc: "A soft teddy bear for a warm and thoughtful surprise.", people: ["Partner", "Friend", "Sister"], occasions: ["Birthday", "Anniversary", "Just Because"] },
  { id: 21, name: "Makeup Brush Set", price: 699, category: "Beauty", emoji: "💄", color: "#F8BBD0", rating: 4.5, tag: "Beauty Pick", desc: "A useful brush set for a makeup enthusiast.", people: ["Friend", "Sister"], occasions: ["Birthday"] },
  { id: 22, name: "Premium Dry Fruit Box", price: 799, category: "Food", emoji: "🥜", color: "#FFF3E0", rating: 4.7, tag: "Premium", desc: "A festive box of assorted dry fruits.", people: ["Everyone", "Family", "Mother", "Father"], occasions: ["Birthday", "Thank You", "Housewarming"] },
  { id: 23, name: "Minimal Wall Art", price: 699, category: "Home Decor", emoji: "🎨", color: "#E1F5FE", rating: 4.5, tag: "Art Lover", desc: "Minimal artwork to personalise a living space.", people: ["Friend", "Family"], occasions: ["Housewarming", "Birthday"] },
  { id: 24, name: "Leather Card Holder", price: 499, category: "Fashion", emoji: "👛", color: "#EFEBE9", rating: 4.6, tag: "Practical Pick", desc: "A compact card holder for everyday use.", people: ["Brother", "Father", "Partner"], occasions: ["Birthday", "Graduation"] },
  { id: 25, name: "Personalised Keychain", price: 199, category: "Personalized", emoji: "🔑", color: "#FCE4EC", rating: 4.6, tag: "Budget Pick", desc: "A small keepsake with a name or special date.", people: ["Everyone", "Friend", "Partner", "Family"], occasions: ["Birthday", "Anniversary", "Thank You"] },
  { id: 26, name: "Yoga Mat", price: 899, category: "Experiences", emoji: "🧘", color: "#E8F5E9", rating: 4.5, tag: "Wellness", desc: "A comfortable mat for yoga and stretching sessions.", people: ["Friend", "Mother", "Sister"], occasions: ["Birthday", "Just Because"] },
  { id: 27, name: "Board Game Set", price: 799, category: "Experiences", emoji: "🎲", color: "#FFF8E1", rating: 4.7, tag: "Game Night", desc: "A fun way to spend quality time with friends and family.", people: ["Everyone", "Friend", "Family"], occasions: ["Birthday", "Housewarming"] },
  { id: 28, name: "Travel Organiser", price: 599, category: "Fashion", emoji: "🧳", color: "#E0F7FA", rating: 4.5, tag: "Travel Pick", desc: "Keep travel essentials organised on every trip.", people: ["Friend", "Partner", "Brother"], occasions: ["Birthday", "Graduation"] },
  { id: 29, name: "Ceramic Flower Vase", price: 549, category: "Home Decor", emoji: "🏺", color: "#F3E5F5", rating: 4.6, tag: "Home Favourite", desc: "A decorative vase for flowers or a shelf display.", people: ["Family", "Friend"], occasions: ["Housewarming", "Thank You"] },
  { id: 30, name: "Bath and Body Hamper", price: 899, category: "Beauty", emoji: "🛁", color: "#FCE4EC", rating: 4.7, tag: "Self-Care", desc: "A relaxing bath and body care gift set.", people: ["Friend", "Sister", "Mother"], occasions: ["Birthday", "Thank You"] },
  { id: 31, name: "Gourmet Tea Collection", price: 499, category: "Food", emoji: "🫖", color: "#E8F5E9", rating: 4.5, tag: "Tea Lover", desc: "A selection of teas for peaceful tea breaks.", people: ["Family", "Mother", "Father", "Friend"], occasions: ["Birthday", "Thank You", "Housewarming"] },
  { id: 32, name: "Desk Organiser", price: 449, category: "Home Decor", emoji: "🗂️", color: "#E3F2FD", rating: 4.5, tag: "Useful Gift", desc: "A neat organiser for stationery and desk essentials.", people: ["Friend", "Brother", "Sister"], occasions: ["Graduation", "Birthday"] },
  { id: 33, name: "Instant Photo Printer", price: 3999, category: "Technology", emoji: "📸", color: "#E8EAF6", rating: 4.8, tag: "Premium Pick", desc: "Print favourite memories from compatible devices.", people: ["Partner", "Friend", "Family"], occasions: ["Birthday", "Anniversary", "Graduation"] },
  { id: 34, name: "Silk Hair Accessories", price: 349, category: "Fashion", emoji: "🎀", color: "#F8BBD0", rating: 4.5, tag: "Cute Pick", desc: "A charming set of hair accessories for daily styling.", people: ["Friend", "Sister"], occasions: ["Birthday", "Thank You"] },
  { id: 35, name: "Handmade Soap Set", price: 299, category: "Beauty", emoji: "🧼", color: "#E0F2F1", rating: 4.4, tag: "Handmade Feel", desc: "A gift set of decorative handmade soaps.", people: ["Friend", "Mother", "Sister"], occasions: ["Birthday", "Thank You"] },
  { id: 36, name: "Macaron Gift Box", price: 599, category: "Food", emoji: "🍬", color: "#F3E5F5", rating: 4.6, tag: "Sweet Pick", desc: "Colourful sweet treats for a special occasion.", people: ["Friend", "Partner", "Family"], occasions: ["Birthday", "Anniversary"] },
  { id: 37, name: "Desk Calendar", price: 249, category: "Personalized", emoji: "🗓️", color: "#FFF8E1", rating: 4.4, tag: "Budget Pick", desc: "A handy calendar to brighten up a work or study desk.", people: ["Friend", "Brother", "Sister"], occasions: ["Birthday", "Graduation"] },
  { id: 38, name: "Terracotta Planter", price: 349, category: "Plants", emoji: "🪴", color: "#FBE9E7", rating: 4.5, tag: "Earthy Pick", desc: "A simple planter for a favourite little plant.", people: ["Friend", "Family"], occasions: ["Housewarming", "Thank You"] },
  { id: 39, name: "Poetry Book", price: 299, category: "Books", emoji: "📖", color: "#EDE7F6", rating: 4.5, tag: "Thoughtful", desc: "A poetry collection for someone who loves words.", people: ["Friend", "Partner", "Sister"], occasions: ["Birthday", "Anniversary"] },
  { id: 40, name: "Movie Night Hamper", price: 699, category: "Experiences", emoji: "🍿", color: "#FFF3E0", rating: 4.8, tag: "Fun Pick", desc: "A cosy movie-night bundle with snacks and treats.", people: ["Everyone", "Friend", "Partner", "Family"], occasions: ["Birthday", "Anniversary", "Just Because"] },
  { id: 41, name: "Custom Phone Case", price: 399, category: "Personalized", emoji: "📱", color: "#E3F2FD", rating: 4.6, tag: "Personalised", desc: "A phone case customised with a favourite design.", people: ["Friend", "Partner", "Brother", "Sister"], occasions: ["Birthday", "Graduation"] },
  { id: 42, name: "Classic Sunglasses", price: 799, category: "Fashion", emoji: "🕶️", color: "#ECEFF1", rating: 4.5, tag: "Style Pick", desc: "A stylish accessory for sunny days and outings.", people: ["Friend", "Partner", "Brother"], occasions: ["Birthday", "Graduation"] },
  { id: 43, name: "Portable Power Bank", price: 999, category: "Technology", emoji: "🔋", color: "#E0F7FA", rating: 4.6, tag: "Useful Gift", desc: "A portable power bank for compatible devices.", people: ["Everyone", "Friend", "Brother"], occasions: ["Birthday", "Graduation"] },
  { id: 44, name: "Embroidered Cushion", price: 649, category: "Home Decor", emoji: "🛋️", color: "#F3E5F5", rating: 4.5, tag: "Cosy Pick", desc: "A decorative cushion to add warmth to a room.", people: ["Family", "Friend"], occasions: ["Housewarming", "Birthday"] },
  { id: 45, name: "Fresh Flower Bouquet", price: 499, category: "Experiences", emoji: "💐", color: "#FCE4EC", rating: 4.8, tag: "Timeless", desc: "A cheerful bouquet for a thoughtful surprise.", people: ["Friend", "Partner", "Mother"], occasions: ["Birthday", "Anniversary", "Thank You"] },
  { id: 46, name: "Cooking Starter Kit", price: 899, category: "Experiences", emoji: "👩‍🍳", color: "#FFF3E0", rating: 4.5, tag: "Creative Pick", desc: "A fun starter kit for someone who loves cooking.", people: ["Friend", "Family", "Partner"], occasions: ["Birthday", "Housewarming"] },
  { id: 47, name: "Premium Pen Set", price: 599, category: "Books", emoji: "🖊️", color: "#E8EAF6", rating: 4.6, tag: "Elegant", desc: "A smart pen set for writing and note-taking.", people: ["Father", "Brother", "Friend"], occasions: ["Birthday", "Graduation", "Thank You"] },
  { id: 48, name: "Mini Perfume", price: 299, category: "Beauty", emoji: "🌷", color: "#F8BBD0", rating: 4.5, tag: "Budget Pick", desc: "A compact fragrance that fits easily in a bag.", people: ["Friend", "Sister", "Partner"], occasions: ["Birthday", "Thank You"] },
  { id: 49, name: "Personalised Scrapbook", price: 699, category: "Personalized", emoji: "💌", color: "#FFF0DB", rating: 4.9, tag: "Memory Maker", desc: "A scrapbook for photos, notes and favourite memories.", people: ["Partner", "Friend", "Family"], occasions: ["Birthday", "Anniversary"] },
  { id: 50, name: "Indoor Flowering Plant", price: 449, category: "Plants", emoji: "🌺", color: "#E8F5E9", rating: 4.6, tag: "Nature Lover", desc: "A flowering plant to bring colour into a home.", people: ["Family", "Friend", "Mother"], occasions: ["Housewarming", "Birthday", "Thank You"] },
  { id: 51, name: "Art Supplies Kit", price: 799, category: "Experiences", emoji: "🖌️", color: "#E1F5FE", rating: 4.7, tag: "Creative Pick", desc: "An art kit for drawing, painting and creative fun.", people: ["Friend", "Sister", "Brother"], occasions: ["Birthday", "Graduation"] },
  { id: 52, name: "Travel Mug", price: 399, category: "Home Decor", emoji: "🥤", color: "#E0F2F1", rating: 4.5, tag: "Everyday Pick", desc: "A reusable mug for favourite drinks on the go.", people: ["Everyone", "Friend", "Brother", "Father"], occasions: ["Birthday", "Graduation", "Thank You"] }
];

// App settings
const FIRST_BATCH = 12;
let visibleGifts = FIRST_BATCH;
let activeCategory = "All";
let wishlist = loadWishlist();

// Get HTML elements
const giftResults = document.getElementById("giftResults");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("searchInput");
const sortBy = document.getElementById("sortBy");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const wishlistResults = document.getElementById("wishlistResults");
const wishlistCount = document.getElementById("wishlistCount");
const emptyWishlist = document.getElementById("emptyWishlist");
const giftModal = document.getElementById("giftModal");
const modalBody = document.getElementById("modalBody");
const toast = document.getElementById("toast");

// Safely load wishlist from browser storage
function loadWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem("giftifyWishlist"));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

// Save wishlist
function saveWishlist() {
  try {
    localStorage.setItem("giftifyWishlist", JSON.stringify(wishlist));
  } catch (error) {
    console.log("Wishlist could not be saved in this browser.");
  }
}

// Show small notification
let toastTimer;

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Format prices in Indian Rupees
function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

// Get currently selected filters
function getFilteredGifts() {
  const person = document.getElementById("person")?.value || "";
  const occasion = document.getElementById("occasion")?.value || "";
  const budget = document.getElementById("budget")?.value || "";
  const category = document.getElementById("category")?.value || "";
  const search = searchInput ? searchInput.value.trim().toLowerCase() : "";

  let filtered = gifts.filter((gift) => {
    const matchesCategory =
      activeCategory === "All" ||
      gift.category === activeCategory;

    const matchesFinderCategory =
      !category || gift.category === category;

    const matchesPerson =
      !person || gift.people.includes(person);

    const matchesOccasion =
      !occasion || gift.occasions.includes(occasion);

    const matchesBudget =
      !budget || gift.price <= Number(budget);

    const matchesSearch =
      !search ||
      gift.name.toLowerCase().includes(search) ||
      gift.category.toLowerCase().includes(search) ||
      gift.desc.toLowerCase().includes(search) ||
      gift.tag.toLowerCase().includes(search);

    return (
      matchesCategory &&
      matchesFinderCategory &&
      matchesPerson &&
      matchesOccasion &&
      matchesBudget &&
      matchesSearch
    );
  });

  const sortValue = sortBy ? sortBy.value : "featured";

  if (sortValue === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}

// Create a gift card
function createGiftCard(gift) {
  const isWished = wishlist.includes(gift.id);

  return `
    <article class="gift-card">
      <div class="gift-photo" style="background:${gift.color}">
        <span class="gift-tag">${gift.tag}</span>
        <span class="gift-emoji" role="img" aria-label="${gift.name}">
          ${gift.emoji}
        </span>

        <button
          class="heart-btn ${isWished ? "active" : ""}"
          onclick="toggleWishlist(${gift.id})"
          aria-label="${isWished ? "Remove from" : "Add to"} wishlist"
          title="${isWished ? "Remove from wishlist" : "Add to wishlist"}"
        >${isWished ? "♥" : "♡"}</button>
      </div>

      <div class="gift-info">
        <p class="gift-category">${gift.category}</p>
        <h3>${gift.name}</h3>
        <p class="gift-description">${gift.desc}</p>

        <div class="gift-bottom">
          <span class="gift-price">${formatPrice(gift.price)}</span>
          <span class="gift-rating">★ ${gift.rating}</span>
        </div>

        <button class="view-details-btn" onclick="viewDetails(${gift.id})">
          View Details →
        </button>
      </div>
    </article>
  `;
}

// Render gift collection
function renderGifts() {
  if (!giftResults) return;

  const filtered = getFilteredGifts();
  const shown = filtered.slice(0, visibleGifts);

  giftResults.innerHTML = shown.length
    ? shown.map(createGiftCard).join("")
    : `<div class="no-results">
         <span>🎁</span>
         <h3>No gifts found</h3>
         <p>Try changing your search or filters.</p>
         <button onclick="clearFilters()">Clear Filters</button>
       </div>`;

  if (resultCount) {
    resultCount.textContent =
      `${filtered.length} gift${filtered.length === 1 ? "" : "s"} found`;
  }

  if (loadMoreBtn) {
    loadMoreBtn.style.display =
      filtered.length > visibleGifts ? "inline-flex" : "none";
  }

  updateWishlistCount();
}

// Search gifts
if (searchInput) {
  searchInput.addEventListener("input", () => {
    visibleGifts = FIRST_BATCH;
    renderGifts();
  });
}

// Sort gifts
if (sortBy) {
  sortBy.addEventListener("change", () => {
    visibleGifts = FIRST_BATCH;
    renderGifts();
  });
}

// Gift finder filters
["person", "occasion", "budget", "category"].forEach((id) => {
  const element = document.getElementById(id);

  if (element) {
    element.addEventListener("change", () => {
      visibleGifts = FIRST_BATCH;
      renderGifts();
    });
  }
});

// Filter by category card or quick-filter button
function chooseCategory(category) {
  activeCategory = category;
  visibleGifts = FIRST_BATCH;

  const finderCategory = document.getElementById("category");
  if (finderCategory) {
    finderCategory.value = category === "All" ? "" : category;
  }

  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.categoryFilter === category
    );
  });

  renderGifts();

  document.getElementById("collection")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Quick-filter buttons
document.querySelectorAll("[data-category-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    chooseCategory(button.dataset.categoryFilter || "All");
  });
});

// Apply finder filters
function findGifts() {
  activeCategory = "All";
  visibleGifts = FIRST_BATCH;
  renderGifts();

  document.getElementById("collection")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Reset all filters
function clearFilters() {
  ["person", "occasion", "budget", "category"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.value = "";
  });

  if (searchInput) searchInput.value = "";
  if (sortBy) sortBy.value = "featured";

  activeCategory = "All";
  visibleGifts = FIRST_BATCH;

  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.categoryFilter === "All"
    );
  });

  renderGifts();
  showToast("All filters cleared!");
}

// Load more gifts
function loadMoreGifts() {
  visibleGifts += FIRST_BATCH;
  renderGifts();
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", loadMoreGifts);
}

// Add or remove wishlist items
function toggleWishlist(id) {
  const gift = gifts.find((item) => item.id === id);
  if (!gift) return;

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((itemId) => itemId !== id);
    showToast("Removed from your wishlist");
  } else {
    wishlist.push(id);
    showToast("Added to your wishlist ♥");
  }

  saveWishlist();
  renderGifts();
  renderWishlist();
}

// Update wishlist number
function updateWishlistCount() {
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }

  const navWishlistCount = document.getElementById("navWishlistCount");
  if (navWishlistCount) {
    navWishlistCount.textContent = wishlist.length;
  }
}

// Render wishlist
function renderWishlist() {
  if (!wishlistResults) return;

  const savedGifts = wishlist
    .map((id) => gifts.find((gift) => gift.id === id))
    .filter(Boolean);

  if (emptyWishlist) {
    emptyWishlist.style.display = savedGifts.length ? "none" : "block";
  }

  wishlistResults.innerHTML = savedGifts
    .map(createGiftCard)
    .join("");

  updateWishlistCount();
}

// Show gift details modal
function viewDetails(id) {
  const gift = gifts.find((item) => item.id === id);
  if (!gift || !giftModal || !modalBody) return;

  const isWished = wishlist.includes(gift.id);

  modalBody.innerHTML = `
    <div class="modal-gift-image" style="background:${gift.color}">
      <span>${gift.emoji}</span>
    </div>

    <p class="gift-category">${gift.category}</p>
    <h2>${gift.name}</h2>
    <p>${gift.desc}</p>

    <div class="modal-gift-meta">
      <p><strong>Price:</strong> ${formatPrice(gift.price)}</p>
      <p><strong>Rating:</strong> ★ ${gift.rating}/5</p>
      <p><strong>Gift for:</strong> ${gift.people.join(", ")}</p>
      <p><strong>Occasions:</strong> ${gift.occasions.join(", ")}</p>
    </div>

    <button class="modal-wishlist-btn" onclick="toggleWishlist(${gift.id}); viewDetails(${gift.id})">
      ${isWished ? "♥ Remove from Wishlist" : "♡ Add to Wishlist"}
    </button>
  `;

  giftModal.classList.add("open");
  giftModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Close details modal
function closeGiftModal() {
  if (!giftModal) return;

  giftModal.classList.remove("open");
  giftModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Close modal when clicking outside it
if (giftModal) {
  giftModal.addEventListener("click", (event) => {
    if (event.target === giftModal) {
      closeGiftModal();
    }
  });
}

// Close modal using Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGiftModal();
  }
});

// Surprise Me
function surpriseGift() {
  const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
  viewDetails(randomGift.id);
}

// Mobile navigation menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  navLinks.classList.toggle("open");
}

// Close mobile menu after selecting a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.remove("open");
  });
});

// Newsletter form
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = newsletterForm.querySelector('input[type="email"]');

    if (!emailInput || !emailInput.checkValidity()) {
      if (newsletterMessage) {
        newsletterMessage.textContent = "Please enter a valid email address.";
      }
      emailInput?.focus();
      return;
    }

    if (newsletterMessage) {
      newsletterMessage.textContent =
        "Thank you for subscribing! 💌";
    }

    newsletterForm.reset();
  });
}

// Back-to-top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (backToTopBtn) {
    backToTopBtn.classList.toggle("show", window.scrollY > 350);
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Initial page setup
renderGifts();
renderWishlist();
updateWishlistCount();
