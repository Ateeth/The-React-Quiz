# React Projects Collection

This repository contains two React applications built during the React Udemy course:

## 📚 Applications Overview

### 1. React Quiz

A dynamic quiz application that tests users with timed questions and tracks their progress.

**Features:**

- Interactive quiz interface with multiple-choice questions
- Timer functionality to add time constraints
- Progress tracking through quiz questions
- Finish screen with results
- Loading and error handling
- Responsive design

**Tech Stack:**

- React with Vite
- CSS styling
- JSON data structure for questions

**Key Components:**

- `Question.jsx` - Displays current question
- `Options.jsx` - Renders answer options
- `Timer.jsx` - Countdown timer for questions
- `Progress.jsx` - Shows quiz progress
- `FinishScreen.jsx` - Displays results
- `StartScreen.jsx` - Initial quiz screen

**Getting Started:**

```bash
cd react-quiz
npm install
npm run dev
```

---

### 2. WorldWise

A travel tracking application that allows users to mark cities they've visited on an interactive map.

**Features:**

- Interactive world map with geolocation support
- Add and manage visited cities
- User authentication (fake auth context)
- Responsive sidebar navigation
- City detail views
- Country-based filtering
- Form-based city creation
- Protected routes for authenticated users

**Tech Stack:**

- React with Vite
- React Context API for state management
- CSS Modules for styling
- Leaflet/Map library integration
- Custom hooks for geolocation and URL position management

**Key Components:**

- `Map.jsx` - Interactive world map
- `Sidebar.jsx` - Navigation and city list
- `CityList.jsx` / `CountryList.jsx` - List views
- `Form.jsx` - Add new city form
- `AppLayout.jsx` - Main app layout
- `ProtectedRoute.jsx` - Route protection

**Key Pages:**

- `Homepage.jsx` - Landing page
- `Product.jsx` / `Pricing.jsx` - Info pages
- `AppLayout.jsx` - Main application
- `Login.jsx` - Authentication
- `PageNotFound.jsx` - 404 page

**Custom Hooks:**

- `useGeolocation.js` - Get user's current location
- `useUrlPosition.js` - Parse position from URL parameters

**Getting Started:**

```bash
cd worldwise
npm install
npm run dev
```

---

## 📋 Project Structure

```
├── react-quiz/          # Quiz application
│   ├── src/
│   │   ├── components/  # Quiz UI components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── data/
│       └── questions.json
│
└── worldwise/           # Travel tracking application
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── contexts/    # React Context providers
    │   ├── hooks/       # Custom React hooks
    │   ├── pages/       # Page components
    │   └── main.jsx
    └── data/
        └── cities.json
```

---

## 🚀 Development

Both projects use:

- **Build Tool:** Vite
- **Package Manager:** npm
- **Linting:** ESLint

### Install Dependencies (Both Projects)

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```
