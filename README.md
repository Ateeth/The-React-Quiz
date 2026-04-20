# React Projects Collection

This repository contains two React applications:

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
- React Context API + `useReducer` for global state management (no prop drilling)
- CSS styling
- JSON data structure for questions

**State Management:**

All quiz state is managed centrally in `QuizContext` using `useReducer`, avoiding prop drilling across components. Any component can access state via the `useQuiz()` custom hook.

Managed state includes: `questions`, `status`, `index`, `answer`, `points`, `highScore`, `secondsRemaining`

Actions: `dataReceived`, `dataFailed`, `start`, `newAnswer`, `nextQuestion`, `finish`, `restart`, `tick`

**Key Components:**

- `Question.jsx` - Displays current question
- `Options.jsx` - Renders answer options
- `Timer.jsx` - Countdown timer (30s per question)
- `Progress.jsx` - Shows quiz progress
- `FinishScreen.jsx` - Displays final score and high score
- `StartScreen.jsx` - Initial quiz screen

**Context:**

- `contexts/QuizContext.jsx` - Global quiz state via `useReducer` + `useQuiz()` hook

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
│   │   ├── contexts/    # QuizContext (useReducer + Context API)
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
- **Backend:** json-server for mock API

### Install Dependencies (Both Projects)

```bash
npm install
```

### Run Development Server & Backend

Both the development server and JSON server need to be running simultaneously. Open two terminal windows:

**Terminal 1 - React Development Server:**

```bash
npm run dev
```

**Terminal 2 - JSON Server (Backend):**

```bash
npm run server
```

The JSON server runs on `http://localhost:8000` and serves:

- **React Quiz:** `data/questions.json` (quiz questions)
- **WorldWise:** `data/cities.json` (visited cities data)

### Build for Production

```bash
npm run build
```

---

## 💾 Backend / JSON Server

Both projects use **json-server** to provide a mock REST API for data persistence.

### React Quiz Backend

- **Data File:** `data/questions.json`
- **API Endpoint:** `http://localhost:8000/questions`
- **Data:** Quiz questions with options and correct answers
- **Methods:** GET (retrieve questions)

### WorldWise Backend

- **Data File:** `data/cities.json`
- **API Endpoints:**
  - `http://localhost:8000/cities` - List all visited cities
  - `http://localhost:8000/cities/:id` - Get specific city
- **Data:** Visited cities with geolocation data
- **Methods:** GET (retrieve), POST (add city), DELETE (remove city)

### JSON Server Commands

To start the JSON server for either project:

```bash
npm run server
```

The server includes automatic route generation, making it easy to perform CRUD operations on the JSON data files without writing backend code.

---
