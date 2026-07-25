# 🌺 Nyaman Cafe 88 @ Balik Pulau — Authentic Thai Kitchen Web Application

![Pork-Free Kitchen](https://img.shields.io/badge/Kitchen-100%25%20Pork--Free-2A9D8F?style=for-the-badge&logo=leaf)
![Base OS](https://img.shields.io/badge/Base%20OS-Ubuntu%2026.04-E95420?style=for-the-badge&logo=ubuntu)
![Web Server](https://img.shields.io/badge/Web%20Server-Nginx-009639?style=for-the-badge&logo=nginx)
![Containerization](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker)

Welcome to the official repository for **Nyaman Cafe 88 @ Balik Pulau**, a stunning, high-end single-page Thai restaurant web application. Built with dark mode luxury glassmorphism aesthetics, AI-generated professional Thai food photography, interactive digital menu filtering, a live order cart drawer, an interactive Thai flavor matchmaker quiz, and online table reservation.

---

## ✨ Why This Web Application Stands Out

### 🎨 1. Dark Luxury Aesthetics & Visual Excellence
- **Royal Gold & Spice Color Palette**: Crafted with deep obsidian (`#0d0d0f`), warm royal gold (`#e5b469`), chili spice red (`#e63946`), and emerald jade accents.
- **Glassmorphism & Radial Lighting**: Translucent card surfaces with backdrop blurs (`backdrop-filter: blur(16px)`), glowing gold button effects, and dynamic shimmer titles.
- **Micro-Animations**: Smooth tilt transforms on food cards, pulse pin animations on map previews, and sliding cart drawer transitions.

### 🍲 2. Authentic AI-Generated Thai Food Photography
Includes dedicated high-resolution photography assets:
- **Royal Seafood Feast Platter**: Opulent banquet platter featuring grilled river prawns, steamed garlic butter crab, stuffed squid, and authentic chili dipping sauces.
- **Royal Tom Yum Goong**: Aromatic hot & sour soup with giant tiger prawns, galangal, lemongrass, and chili oil in a traditional clay pot.
- **Signature Pad Thai Goong**: Wok-hei stir-fried rice noodles topped with jumbo prawns, crushed peanuts, bean sprouts & fresh lime.
- **Thai Green Curry Chicken**: Velvety coconut curry with tender chicken, Thai pea eggplants, and sweet basil leaves.
- **Authentic Mango Sticky Rice**: Sweet golden mango slices over warm coconut sticky rice with toasted mung beans.
- **Som Tum Papaya Salad**: Crispy green papaya pounded with bird's eye chilies, peanuts, and lime.
- **Traditional Thai Milk Tea**: Chilled Cha Yen brewed from premium Thai black tea leaves.

---

## 🚀 Key Interactive Features

### 🛍️ 1. Live Slide-Out Order Cart Drawer
- **Navbar Cart Badge Counter**: Real-time counter badge updating as items are added.
- **Quantity Adjustments**: Increase or decrease dish quantities directly within the cart.
- **Automated Price Breakdown**: Instant calculation of Subtotal, 6% Service Tax (SST), and Estimated Total.
- **Instant WhatsApp Pre-Formatted Export**: One-click order button that generates an itemized order receipt ready to send directly to the cafe's WhatsApp!

### 🪄 2. Thai Flavor Finder Quiz
An interactive 3-step recommendation assistant:
1. **Dining Mood**: *Hearty Comfort*, *Zesty & Fiery*, or *Light & Sweet*.
2. **Preferred Base**: *Rich Broth / Curry*, *Wok Noodles / Fried Rice*, *Fresh Seafood / Meat*, or *Dessert / Beverage*.
3. **Spice Tolerance**: *Mild (Zero Spice)*, *Medium Thai Heat*, or *Extra Spicy*.
- Instantly matches and presents the ideal dish recommendation with a one-click *"Add to Cart"* button.

### 📅 3. Online Table Reservation Module
- Interactive booking form allowing diners to select date, time slot, guest count, and seating preference (*Indoor Air-conditioned* vs. *Garden Outdoor Breeze*).
- Automatic date constraints preventing past date selections.
- Confirmation modal dialog displaying reservation summary and WhatsApp confirmation link.

### 📍 4. Location & Operating Hours Section
- Exact address details for **88 Jalan Balik Pulau, 11000 Balik Pulau, Penang, Malaysia**.
- Opening hours: **Tue – Sun: 11:30 AM – 10:00 PM** (Kitchen last order 09:30 PM • Closed on Mondays).
- Interactive location preview map with pin pulse animation and free parking notices.

---

## 🛠️ Technology Stack

- **Frontend Core**: HTML5 & Modular ES6 JavaScript
- **Styling**: Vanilla CSS3 (Custom Design Tokens, CSS Grid & Flexbox)
- **Typography**: Google Fonts (`Playfair Display`, `Plus Jakarta Sans`, `Prompt`)
- **Icons**: FontAwesome 6 CDN
- **Container Base**: Ubuntu 26.04 LTS Image
- **Web Server**: Nginx (Optimized Gzip compression, static file caching, security headers)
- **Orchestration**: Docker Compose

---

## 🐳 Quick Start with Docker Compose

Ensure Docker and Docker Compose are installed on your machine.

```bash
# 1. Clone the repository
git clone https://github.com/boonpin1975/nyaman-cafe-88.git
cd nyaman-cafe-88

# 2. Build & Launch Container Service
docker compose up -d --build
```

Access the website live in your browser at: **`http://localhost:8080`**

To stop the service:
```bash
docker compose down
```

---

## 💻 Local Desktop Development (Without Docker)

You can also serve the site locally using Python's HTTP server:

```bash
# In the project directory
python -m http.server 8088
```

Open your browser at **`http://localhost:8088`**.

---

## 📁 Repository Project Structure

```text
nyaman-cafe-88/
├── Dockerfile              # Ubuntu 26.04 + Nginx setup
├── docker-compose.yml      # Docker Compose configuration (Port 8080:80)
├── nginx.conf              # Nginx server block, Gzip & Caching rules
├── index.html              # Main single-page web app structure
├── styles.css              # Dark mode luxury design tokens & responsive CSS
├── script.js               # Cart state, menu search/filter & Flavor Quiz engine
├── .gitignore              # Git ignore rules
├── README.md               # Repository documentation
└── images/                 # AI-generated Thai cuisine photography
    ├── hero_thai_feast.png
    ├── tom_yum_goong.png
    ├── pad_thai_prawn.png
    ├── green_curry_chicken.png
    ├── mango_sticky_rice.png
    ├── thai_milk_tea.png
    ├── pineapple_fried_rice.png
    ├── thai_seafood_platter.png
    └── som_tum_salad.png
```

---

## 📜 License & Credits

- **Restaurant Name**: Nyaman Cafe 88 @ Balik Pulau
- **Location**: Balik Pulau, Penang, Malaysia
- **Copyright**: &copy; 2026 Nyaman Cafe 88. All Rights Reserved. Crafted with ❤️ for Authentic Thai Food Lovers.
