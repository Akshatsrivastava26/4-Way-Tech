# Exciteme AI Homepage Clone

A pixel-perfect, responsive clone of the Exciteme AI homepage built with React and TailwindCSS.

## 🎯 Project Overview

This is a frontend-only replica of the Exciteme AI platform homepage, featuring a modern dark-themed interface with character cards, category filters, and full responsive design.

## ✨ Features

- **Dark Modern UI**: Sleek black background with orange accent colors
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Component Architecture**: Clean, modular, and reusable React components
- **Interactive Elements**: All clickable elements trigger a "Work in progress" alert
- **Character Grid**: Beautiful card layout with hover effects and overlay information
- **Navigation**: Fixed sidebar (desktop) and hamburger menu (mobile)
- **Category Filters**: Horizontal scrolling category pills
- **Mock Data**: Placeholder character data for demonstration

## 🛠️ Tech Stack

- **React** (v19.0.0)
- **TailwindCSS** (v3.4.17) - Utility-first CSS framework
- **Lucide React** - Icon library
- **Shadcn UI** - Pre-built accessible components
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx           # Desktop navigation sidebar
│   ├── MobileMenu.jsx         # Mobile hamburger menu
│   ├── Navbar.jsx             # Top navigation bar
│   ├── CategoryPills.jsx      # Horizontal category filters
│   ├── FilterTabs.jsx         # All/Following/New/Popular tabs
│   ├── CharacterCard.jsx      # Individual character card
│   └── CharacterGrid.jsx      # Grid container for cards
├── pages/
│   └── HomePage.jsx           # Main homepage composition
├── data/
│   └── mockData.js            # Mock character data
├── App.js                     # App entry point
└── index.css                  # Global styles & Tailwind config
```

## 🎨 Component Breakdown

### Sidebar (Desktop)
- Fixed left navigation
- Orange logo
- "+ Create" button with orange border
- Navigation menu items: Home, Recent Chats, Favorites, My Chatbots, Store, Daily Task

### MobileMenu
- Hamburger menu icon for mobile devices
- Slide-in navigation drawer
- Same menu items as desktop sidebar

### Navbar
- Search bar with placeholder text
- Orange "Sign In" button
- Responsive padding and sizing

### CategoryPills
- Horizontal scrolling category tags
- Dark pill buttons with hover effects
- "All tags" dropdown button

### FilterTabs
- Tab navigation: All, Following, New, Popular, Premium
- NSFW toggle switch
- Active state highlighting

### CharacterCard
- Image with gradient overlay
- Character name, username, description
- Tag badges
- Engagement metrics (messages, rating)
- Hover effect with scale transform

## 🚀 Installation & Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

The app will run on `http://localhost:3000`

## 📱 Responsive Breakpoints

- **Mobile**: < 1024px (Hamburger menu, single column grid)
- **Desktop**: ≥ 1024px (Sidebar navigation, multi-column grid)

## 🎭 Interactive Behavior

All clickable elements (buttons, cards, navigation items, category pills, tabs) trigger the following alert:

```javascript
alert("Work in progress, get back in few days")
```

This includes:
- Navigation menu items
- "+ Create" button
- Search bar
- "Sign In" button
- Category pills
- Filter tabs
- NSFW toggle
- Character cards

## 🎨 Design Features

- **Color Scheme**: Black background (#000000) with orange accents (#ea580c)
- **Typography**: System fonts with multiple fallbacks
- **Animations**: Smooth hover transitions and scale effects
- **Custom Scrollbar**: Styled scrollbar for webkit browsers
- **Card Hover**: Scale transform with orange ring effect
- **Gradient Overlays**: Bottom gradient on character card images

## 📊 Mock Data

The application uses placeholder data for character cards with:
- Character names and usernames
- Profile images from Unsplash
- Descriptions
- Category tags
- Engagement metrics

## 🔧 Customization

### Changing Colors
Edit the color values in `/src/components/*` files. Primary colors used:
- Orange: `bg-orange-600`, `text-orange-500`
- Dark backgrounds: `bg-black`, `bg-zinc-900`
- Borders: `border-zinc-800`

### Adding More Characters
Edit `/src/data/mockData.js` to add more character objects to the array.

### Modifying Layout
Character grid columns are defined in `CharacterGrid.jsx`:
```jsx
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
```

## 📄 License

This is a demo project created for educational purposes.

## 🙏 Acknowledgments

- Original design inspiration from Exciteme AI
- Images from Unsplash
- Icons from Lucide React
- UI components from Shadcn UI
