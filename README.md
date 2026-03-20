# 🏷️ RetailDeals – React Native Mobile App

A full-featured affiliate coupon & deals app built with **React Native + Expo**.

---

## 📱 Screens & Features

| Screen | Description |
|---|---|
| **Auth** | Sign In / Register with country picker, social login |
| **Country Select** | Choose country to personalise deals & stores |
| **Home** | Hero banner, search, All/Deals/Coupons filter, deal cards, top stores |
| **Categories** | 8 categories with icons, deal counts, expandable deal lists |
| **Stores** | Filtered store grid by category; country-aware |
| **Store Detail** | Store info + All/Deals/Coupons filter tabs |
| **Reviews** | Write reviews with star rating; sort by Recent/Top/Helpful |
| **Blog** | Category-filtered blog posts, latest first, NEW badges |
| **Profile** | Saved deals, history, settings, WhatsApp alerts field |
| **Notifications** | Bell icon with unread badge, mark read/all read |
| **Deal Modal** | Slide-up: coupon code blur→reveal→copy→redirect; deal redirect |

---

## 🚀 Quick Start (5 minutes)

### Prerequisites
- **Node.js** 18+ → https://nodejs.org
- **Expo Go** app on your phone → App Store / Google Play

### Steps

```bash
# 1. Install Expo CLI globally
npm install -g expo-cli

# 2. Enter the project folder
cd RetailDeals

# 3. Install dependencies
npm install

# 4. Start the dev server
npx expo start
```

### Run on your phone
1. Open **Expo Go** on your phone
2. Scan the **QR code** shown in the terminal
3. The app loads instantly — no build required!

### Run on Emulator
```bash
# Android (requires Android Studio + emulator running)
npx expo start --android

# iOS (requires Xcode on Mac)
npx expo start --ios
```

---

## 📁 Project Structure

```
RetailDeals/
├── App.js                        # Root entry, flow controller
├── index.js                      # Expo entry point
├── app.json                      # Expo config (name, icons, splash)
├── package.json                  # Dependencies
│
└── src/
    ├── data/
    │   ├── data.js               # All mock data + color tokens
    │   └── AppContext.js         # Global state (user, country, saved deals, notifs)
    │
    ├── components/
    │   ├── DealCard.js           # Reusable deal card with Save button
    │   └── DealModal.js          # Slide-up modal (coupon reveal + deal redirect)
    │
    ├── screens/
    │   ├── AuthScreen.js         # Login / Register
    │   ├── CountryScreen.js      # Country selection
    │   ├── HomeScreen.js         # Home feed
    │   ├── CategoriesScreen.js   # Browse categories
    │   ├── StoresScreen.js       # All stores (filtered)
    │   ├── StoreDetailScreen.js  # Single store + deals
    │   ├── ReviewsScreen.js      # Community reviews
    │   ├── BlogScreen.js         # Blog posts
    │   ├── ProfileScreen.js      # User profile + settings
    │   └── NotificationsScreen.js # Notifications list
    │
    └── navigation/
        └── AppNavigator.js       # Bottom tab + stack navigation
```

---

## 🎨 Design System

- **Primary:** `#F26522` (Warm Orange) — CTAs, badges, accents
- **Success:** `#2EB87E` (Fresh Green) — deal buttons, savings
- **Trust:** `#3B7DD8` (Subtle Blue) — info, store links
- **Base:** `#F7F6F2` (Off-White) — background
- **Font:** System font (San Francisco on iOS, Roboto on Android)

---

## 📦 Build for App Stores

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Configure build
eas build:configure

# Build for Android (.apk / .aab)
eas build --platform android

# Build for iOS (.ipa)
eas build --platform ios
```

> **Note:** iOS builds require an Apple Developer account ($99/year).
> Android builds can be sideloaded for free.

---

## 🔧 Customisation

### Add Real Deals
Edit `src/data/data.js` → `DEALS` array. Each deal has:
- `href` — your affiliate link
- `code` — coupon code (null for deals)
- `type` — `'coupon'` or `'deal'`
- `countries` — array of country codes

### Add Real Stores
Edit `src/data/data.js` → `STORES` array.

### Connect a Backend
Replace the static arrays in `data.js` with `fetch()` calls to your API inside `AppContext.js`.

---

## ✅ Affiliate Integration

- **Coupon Modal:** Copies code to clipboard → opens `href` in browser
- **Deal Modal:** Opens `href` directly in browser  
- All `href` values point to your affiliate URLs
- Replace placeholder URLs with your actual affiliate links

---

*Built with ❤️ using React Native + Expo*
