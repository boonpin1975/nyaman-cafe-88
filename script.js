/**
 * Nyaman Cafe 88 @ Balik Pulau - Dynamic Frontend Controller & Interactive Cart
 */

// Food Catalog Data
const menuDishes = [
    {
        id: "tom-yum",
        title: "Royal Tom Yum Goong",
        category: "soups",
        price: 28.00,
        spicy: 3,
        badge: "#1 Bestseller",
        image: "images/tom_yum_goong.png",
        desc: "Aromatic hot & sour soup simmered with giant tiger prawns, lemongrass, galangal, kaffir lime, mushrooms, and homemade Thai chili oil paste.",
        ingredients: "Tiger Prawns, Lemongrass, Galangal, Kaffir Lime, Straw Mushrooms, Chili Oil, Fish Sauce, Lime Juice, Fresh Cilantro."
    },
    {
        id: "seafood-platter",
        title: "Royal Seafood Feast Platter",
        category: "seafood",
        price: 78.00,
        spicy: 2,
        badge: "Grand Signature",
        image: "images/thai_seafood_platter.png",
        desc: "Opulent banquet platter featuring grilled river prawns, steamed garlic butter crab, stuffed squid, grilled fish, and authentic chili dipping sauces.",
        ingredients: "Giant River Prawns, Blue Crab, Fresh Squid, Seabass Fillet, Thai Seafood Sauce, Fresh Lime, Roasted Chilies."
    },
    {
        id: "pad-thai",
        title: "Signature Pad Thai Goong",
        category: "noodles",
        price: 18.90,
        spicy: 1,
        badge: "Chef's Choice",
        image: "images/pad_thai_prawn.png",
        desc: "Wok-hei stir-fried rice noodles with tangy tamarind glaze, topped with jumbo grilled prawns, firm tofu, crushed peanuts, beansprouts & lime.",
        ingredients: "Rice Noodles, Jumbo Prawns, Tamarind Sauce, Tofu, Eggs, Bean Sprouts, Crushed Peanuts, Fresh Lime, Chinese Chives."
    },
    {
        id: "green-curry",
        title: "Thai Green Curry Chicken",
        category: "soups",
        price: 22.00,
        spicy: 2,
        badge: "Popular",
        image: "images/green_curry_chicken.png",
        desc: "Velvety green curry cooked with coconut cream, tender chicken breast, Thai pea eggplants, bamboo shoots, and fresh sweet basil leaves.",
        ingredients: "Chicken, Fresh Green Curry Paste, Coconut Cream, Thai Eggplant, Sweet Basil, Kaffir Lime Leaf, Red Chili."
    },
    {
        id: "pineapple-rice",
        title: "Royal Pineapple Fried Rice",
        category: "noodles",
        price: 19.50,
        spicy: 0,
        badge: "Must Try",
        image: "images/pineapple_fried_rice.png",
        desc: "Fragrant turmeric fried jasmine rice served inside a fresh pineapple boat, tossed with prawns, cashew nuts, raisins, and chicken floss.",
        ingredients: "Jasmine Rice, Fresh Pineapple, Prawns, Turmeric Spice, Roasted Cashews, Raisins, Crispy Chicken Floss, Sweet Corn."
    },
    {
        id: "mango-sticky-rice",
        title: "Authentic Mango Sticky Rice",
        category: "desserts",
        price: 13.00,
        spicy: 0,
        badge: "Dessert Special",
        image: "images/mango_sticky_rice.png",
        desc: "Classic sweet Thai dessert featuring ripe golden mango slices over warm coconut sticky rice, drizzled with rich coconut cream.",
        ingredients: "Ripe Thai Honey Mango, Glutinous Rice, Coconut Milk, Toasted Mung Beans, Pandan Leaf Infusion."
    },
    {
        id: "thai-milk-tea",
        title: "Traditional Thai Iced Milk Tea",
        category: "desserts",
        price: 6.50,
        spicy: 0,
        badge: "Refreshing",
        image: "images/thai_milk_tea.png",
        desc: "Authentic Cha Yen brewed from premium Thai tea leaves, layered with condensed milk and evaporated milk served over crushed ice.",
        ingredients: "Ceylon Thai Black Tea Leaves, Condensed Milk, Evaporated Milk, Crushed Ice, Mint Leaf."
    },
    {
        id: "som-tum",
        title: "Som Tum (Spicy Papaya Salad)",
        category: "seafood",
        price: 14.00,
        spicy: 3,
        badge: "Authentic",
        image: "images/som_tum_salad.png",
        desc: "Crispy shredded green papaya pounded in a mortar with bird's eye chili, garlic, cherry tomatoes, yardlong beans, lime, and crushed peanuts.",
        ingredients: "Green Papaya, Bird's Eye Chili, Garlic, Cherry Tomatoes, Palm Sugar, Lime, Dried Shrimp, Roasted Peanuts."
    },
    {
        id: "seabass-lime",
        title: "Steamed Seabass with Chili & Lime",
        category: "seafood",
        price: 48.00,
        spicy: 2,
        badge: "Chef Specialty",
        image: "images/hero_thai_feast.png",
        desc: "Whole fresh Penang seabass steamed to perfection with zesty garlic, fresh lime juice, lemongrass, and fiery green chili broth.",
        ingredients: "Whole Fresh Seabass, Garlic, Fresh Lime Juice, Green Chili, Lemongrass, Coriander Root, Fish Broth."
    },
    {
        id: "pad-krapow",
        title: "Thai Basil Chicken (Pad Krapow)",
        category: "seafood",
        price: 16.50,
        spicy: 2,
        badge: "Street Classic",
        image: "images/pad_thai_prawn.png",
        desc: "Minced chicken stir-fried at high heat with holy basil leaves, garlic, and chili, served over jasmine rice with a crispy fried egg.",
        ingredients: "Minced Chicken, Holy Basil (Krapow), Bird's Eye Chili, Garlic, Dark Soy, Jasmine Rice, Crispy Fried Egg."
    }
];

// Cart State
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initMenuRender();
    initCartSystem();
    initFlavorQuiz();
    initReservationForm();
    initModalControls();
});

/* Navbar & Mobile Toggle */
function initNavigation() {
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            mobileToggle.querySelector("i").classList.toggle("fa-xmark");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                if (mobileToggle.querySelector("i")) {
                    mobileToggle.querySelector("i").className = "fa-solid fa-bars";
                }
            });
        });
    }

    // Scroll header background shift
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(7, 7, 8, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(13, 13, 15, 0.85)";
            navbar.style.boxShadow = "none";
        }
    });
}

/* Digital Menu Filter & Render */
function initMenuRender() {
    const menuGrid = document.getElementById("menuGrid");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const searchInput = document.getElementById("menuSearchInput");

    let currentCategory = "all";
    let currentQuery = "";

    function renderDishes() {
        if (!menuGrid) return;
        menuGrid.innerHTML = "";

        const filtered = menuDishes.filter(dish => {
            const matchesCat = currentCategory === "all" || dish.category === currentCategory;
            const matchesSearch = dish.title.toLowerCase().includes(currentQuery.toLowerCase()) || 
                                  dish.desc.toLowerCase().includes(currentQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            menuGrid.innerHTML = `
                <div class="col-span-full text-center py-5" style="grid-column: 1/-1; padding: 40px 0;">
                    <i class="fa-solid fa-utensils text-gold fa-3x mb-3"></i>
                    <h3>No dishes found</h3>
                    <p class="text-muted">Try adjusting your search query or switching categories.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(dish => {
            const spicyIcons = Array(dish.spicy).fill('<i class="fa-solid fa-pepper-hot text-red"></i>').join('') || '<span class="text-green">Mild</span>';
            
            const card = document.createElement("div");
            card.className = "dish-card";
            card.innerHTML = `
                ${dish.badge ? `<div class="dish-badge">${dish.badge}</div>` : ''}
                <div class="dish-img-wrapper">
                    <img src="${dish.image}" alt="${dish.title}" loading="lazy">
                    <div class="dish-overlay">
                        <button class="btn btn-sm btn-gold quick-view-trigger" data-id="${dish.id}">Quick View</button>
                    </div>
                </div>
                <div class="dish-body">
                    <div class="dish-meta">
                        <span class="dish-category">${dish.category.toUpperCase()}</span>
                        <span class="dish-spicy">${spicyIcons}</span>
                    </div>
                    <h3 class="dish-title">${dish.title}</h3>
                    <p class="dish-desc">${dish.desc}</p>
                    <div class="dish-footer">
                        <span class="dish-price">RM ${dish.price.toFixed(2)}</span>
                        <button class="btn-icon add-to-cart-btn" data-id="${dish.id}" title="Add to Cart"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;
            menuGrid.appendChild(card);
        });

        // Re-attach quick view click listeners
        document.querySelectorAll(".quick-view-trigger").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const dishId = e.currentTarget.getAttribute("data-id");
                openDishModal(dishId);
            });
        });

        // Re-attach add to cart listeners
        document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const dishId = e.currentTarget.getAttribute("data-id");
                addToCart(dishId);
            });
        });
    }

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderDishes();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentQuery = e.target.value;
            renderDishes();
        });
    }

    // Initial render
    renderDishes();

    // Attach static signature card button listeners
    document.querySelectorAll(".view-dish-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const dishId = e.currentTarget.getAttribute("data-dish");
            openDishModal(dishId);
        });
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const dishId = e.currentTarget.getAttribute("data-id");
            addToCart(dishId);
        });
    });
}

/* Interactive Order Cart System */
function initCartSystem() {
    const cartToggleBtn = document.getElementById("cartToggleBtn");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartCloseBtn = document.getElementById("cartCloseBtn");

    if (cartToggleBtn && cartOverlay) {
        cartToggleBtn.addEventListener("click", () => cartOverlay.classList.add("active"));
        cartCloseBtn.addEventListener("click", () => cartOverlay.classList.remove("active"));

        cartOverlay.addEventListener("click", (e) => {
            if (e.target === cartOverlay) cartOverlay.classList.remove("active");
        });
    }

    updateCartUI();
}

function addToCart(dishId) {
    const dish = menuDishes.find(d => d.id === dishId);
    if (!dish) return;

    const existing = cart.find(item => item.id === dishId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...dish, quantity: 1 });
    }

    updateCartUI();

    // Open drawer automatically
    const cartOverlay = document.getElementById("cartOverlay");
    if (cartOverlay) cartOverlay.classList.add("active");
}

function updateCartUI() {
    const cartBadge = document.getElementById("cartBadge");
    const cartContainer = document.getElementById("cartItemsContainer");
    const subtotalEl = document.getElementById("cartSubtotal");
    const taxEl = document.getElementById("cartTax");
    const totalEl = document.getElementById("cartTotal");
    const whatsappBtn = document.getElementById("cartSendWhatsappBtn");

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalCount;

    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fa-solid fa-basket-shopping text-muted fa-3x mb-3"></i>
                <h4 style="color:var(--text-muted);">Your cart is empty</h4>
                <p class="text-muted" style="font-size:0.85rem;">Add some mouthwatering Thai dishes from our menu!</p>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = "RM 0.00";
        if (taxEl) taxEl.textContent = "RM 0.00";
        if (totalEl) totalEl.textContent = "RM 0.00";
        if (whatsappBtn) {
            whatsappBtn.classList.add("disabled");
            whatsappBtn.setAttribute("href", "#");
        }
        return;
    }

    cartContainer.innerHTML = "";
    let subtotal = 0;
    let orderSummaryText = "Hi Nyaman Cafe 88! I would like to order the following for takeaway/delivery:\n\n";

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        orderSummaryText += `• ${item.quantity}x ${item.title} (RM ${itemTotal.toFixed(2)})\n`;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h5 class="cart-item-title">${item.title}</h5>
                <span class="cart-item-price">RM ${item.price.toFixed(2)}</span>
                <div class="cart-item-qty">
                    <button class="qty-btn" data-id="${item.id}" data-action="dec">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-id="${item.id}" data-action="inc">+</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    const sst = subtotal * 0.06;
    const finalTotal = subtotal + sst;

    orderSummaryText += `\nSubtotal: RM ${subtotal.toFixed(2)}\nSST (6%): RM ${sst.toFixed(2)}\nTotal Amount: RM ${finalTotal.toFixed(2)}`;

    if (subtotalEl) subtotalEl.textContent = `RM ${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `RM ${sst.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `RM ${finalTotal.toFixed(2)}`;

    if (whatsappBtn) {
        whatsappBtn.classList.remove("disabled");
        whatsappBtn.setAttribute("href", `https://wa.me/60123456789?text=${encodeURIComponent(orderSummaryText)}`);
    }

    // Attach quantity button listeners
    document.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-id");
            const action = e.currentTarget.getAttribute("data-action");
            const targetItem = cart.find(i => i.id === id);

            if (targetItem) {
                if (action === "inc") {
                    targetItem.quantity += 1;
                } else if (action === "dec") {
                    targetItem.quantity -= 1;
                    if (targetItem.quantity <= 0) {
                        cart = cart.filter(i => i.id !== id);
                    }
                }
                updateCartUI();
            }
        });
    });
}

/* Interactive Thai Flavor Finder Quiz */
function initFlavorQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    if (!quizContainer) return;

    let userAnswers = {};
    const steps = quizContainer.querySelectorAll(".quiz-step");
    const resultCard = document.getElementById("quizResult");
    const recommendCard = document.getElementById("recommendCard");
    const resetBtn = document.getElementById("quizResetBtn");

    document.querySelectorAll(".quiz-opt-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const key = e.currentTarget.getAttribute("data-key");
            const val = e.currentTarget.getAttribute("data-val");
            userAnswers[key] = val;

            const currentStep = e.currentTarget.closest(".quiz-step");
            const currentStepNum = parseInt(currentStep.getAttribute("data-step"));

            currentStep.classList.remove("active");

            if (currentStepNum < 3) {
                const nextStep = quizContainer.querySelector(`.quiz-step[data-step="${currentStepNum + 1}"]`);
                if (nextStep) nextStep.classList.add("active");
            } else {
                // Calculate match
                showRecommendation();
            }
        });
    });

    function showRecommendation() {
        // Find best matching dish
        const matched = menuDishes.find(d => d.category === userAnswers.base) || menuDishes[0];

        if (recommendCard && resultCard) {
            recommendCard.innerHTML = `
                <img src="${matched.image}" alt="${matched.title}" style="width: 110px; height: 110px; border-radius: 12px; object-fit: cover;">
                <div style="text-align: left; flex-grow: 1;">
                    <h3 style="font-size: 1.4rem; color: var(--color-gold); margin-bottom: 4px;">${matched.title}</h3>
                    <p class="text-muted" style="font-size: 0.88rem; margin-bottom: 10px;">${matched.desc}</p>
                    <div style="display: flex; gap: 12px; align-items: center;">
                        <span class="text-gold" style="font-weight:700; font-size:1.1rem;">RM ${matched.price.toFixed(2)}</span>
                        <button class="btn btn-sm btn-gold" onclick="addToCart('${matched.id}')"><i class="fa-solid fa-plus"></i> Add to Cart</button>
                    </div>
                </div>
            `;
            resultCard.style.display = "block";
        }
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            userAnswers = {};
            if (resultCard) resultCard.style.display = "none";
            steps.forEach(s => s.classList.remove("active"));
            steps[0].classList.add("active");
        });
    }
}

/* Modal View Controls */
function openDishModal(dishId) {
    const dish = menuDishes.find(d => d.id === dishId) || menuDishes[0];
    const modal = document.getElementById("dishModal");
    const modalBody = document.getElementById("modalBody");

    const spicyIcons = Array(dish.spicy).fill('<i class="fa-solid fa-pepper-hot text-red me-1"></i>').join('');

    modalBody.innerHTML = `
        <div class="modal-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center;">
            <div style="border-radius: 16px; overflow: hidden; height: 260px;">
                <img src="${dish.image}" alt="${dish.title}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div>
                <span class="text-gold" style="font-size:0.8rem; letter-spacing:1px; text-transform:uppercase;">${dish.category}</span>
                <h2 style="font-size:1.8rem; margin:6px 0;">${dish.title}</h2>
                <div style="margin-bottom:12px;">${spicyIcons || '<span class="text-green">Mild Spice</span>'}</div>
                <h3 class="text-gold" style="font-size:1.5rem; margin-bottom:14px;">RM ${dish.price.toFixed(2)}</h3>
                <p class="text-muted" style="font-size:0.9rem; margin-bottom:16px;">${dish.desc}</p>
                <div style="background:rgba(255,255,255,0.04); padding:12px; border-radius:12px; font-size:0.82rem; margin-bottom:20px; border: 1px solid rgba(255,255,255,0.08);">
                    <strong class="text-gold">Key Ingredients:</strong><br>${dish.ingredients}
                </div>
                <button class="btn btn-gold btn-block" onclick="addToCart('${dish.id}')">
                    <i class="fa-solid fa-cart-plus"></i> Add to Order Cart
                </button>
            </div>
        </div>
    `;

    modal.classList.add("active");
}

function initModalControls() {
    const dishModal = document.getElementById("dishModal");
    const modalClose = document.getElementById("modalClose");
    const resSuccessModal = document.getElementById("resSuccessModal");
    const resCloseBtn = document.getElementById("resCloseBtn");

    if (modalClose) {
        modalClose.addEventListener("click", () => {
            dishModal.classList.remove("active");
        });
    }

    if (resCloseBtn) {
        resCloseBtn.addEventListener("click", () => {
            resSuccessModal.classList.remove("active");
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === dishModal) dishModal.classList.remove("active");
        if (e.target === resSuccessModal) resSuccessModal.classList.remove("active");
    });
}

/* Reservation Form Handler */
function initReservationForm() {
    const resForm = document.getElementById("reservationForm");
    const resDateInput = document.getElementById("resDate");

    if (resDateInput) {
        const today = new Date().toISOString().split("T")[0];
        resDateInput.setAttribute("min", today);
        resDateInput.value = today;
    }

    if (resForm) {
        resForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("resName").value.trim();
            const phone = document.getElementById("resPhone").value.trim();
            const guests = document.getElementById("resGuests").value;
            const date = document.getElementById("resDate").value;
            const time = document.getElementById("resTime").value;
            const seating = document.getElementById("resSeating").value;
            const notes = document.getElementById("resNotes").value.trim();

            const summaryText = `Hi Nyaman Cafe 88! I would like to reserve a table:\n` +
                `👤 Name: ${name}\n` +
                `📞 Phone: ${phone}\n` +
                `👥 Guests: ${guests}\n` +
                `📅 Date: ${date}\n` +
                `⏰ Time: ${time}\n` +
                `🪑 Seating: ${seating}` +
                (notes ? `\n📝 Notes: ${notes}` : '');

            const waUrl = `https://wa.me/60123456789?text=${encodeURIComponent(summaryText)}`;

            const resSuccessText = document.getElementById("resSuccessText");
            const resWhatsappLink = document.getElementById("resWhatsappLink");
            const resSuccessModal = document.getElementById("resSuccessModal");

            if (resSuccessText) {
                resSuccessText.innerHTML = `Table reservation requested for <strong>${name}</strong> on <strong>${date} at ${time}</strong> (${guests} Guests, ${seating}).`;
            }

            if (resWhatsappLink) {
                resWhatsappLink.setAttribute("href", waUrl);
            }

            resSuccessModal.classList.add("active");
            resForm.reset();

            if (resDateInput) {
                resDateInput.value = new Date().toISOString().split("T")[0];
            }
        });
    }
}
