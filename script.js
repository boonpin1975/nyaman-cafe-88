/**
 * Nyaman Cafe 88 @ Balik Pulau - Dynamic Frontend Controller
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
        image: "images/tom_yum_goong.png",
        desc: "Crispy shredded green papaya pounded in a mortar with bird's eye chili, garlic, cherry tomatoes, yardlong beans, lime, and crushed peanuts.",
        ingredients: "Green Papaya, Bird's Eye Chili, Garlic, Cherry Tomatoes, Palm Sugar, Lime, Dried Shrimp, Roasted Peanuts."
    },
    {
        id: "seabass-lime",
        title: "Steamed Seabass with Chili & Lime",
        category: "seafood",
        price: 48.00,
        spicy: 2,
        badge: "Grand Signature",
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

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initMenuRender();
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
            const spicyIcons = Array(dish.spicy).fill('<i class="fa-solid fa-pepper-hot text-red"></i>').join('');
            
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
                        <button class="btn-icon quick-view-trigger" data-id="${dish.id}"><i class="fa-solid fa-eye"></i></button>
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
                <div style="margin-bottom:12px;">${spicyIcons || '<span class="text-muted">Mild Spice</span>'}</div>
                <h3 class="text-gold" style="font-size:1.5rem; margin-bottom:14px;">RM ${dish.price.toFixed(2)}</h3>
                <p class="text-muted" style="font-size:0.9rem; margin-bottom:16px;">${dish.desc}</p>
                <div style="background:rgba(255,255,255,0.04); padding:12px; border-radius:12px; font-size:0.82rem; margin-bottom:20px; border: 1px solid rgba(255,255,255,0.08);">
                    <strong class="text-gold">Key Ingredients:</strong><br>${dish.ingredients}
                </div>
                <a href="https://wa.me/60123456789?text=Hi%20Nyaman%20Cafe%2088,%20I'd%20like%20to%20order%20${encodeURIComponent(dish.title)}" target="_blank" class="btn btn-gold btn-block">
                    <i class="fa-brands fa-whatsapp"></i> Order via WhatsApp
                </a>
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
        // Set min date to today
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
