# WorldWise

WorldWise is a React-based travel tracking application that lets you log the cities and countries you have visited around the world. It features an interactive map powered by Leaflet, a sidebar for browsing your visited cities and countries, and the ability to add new entries with notes and travel dates.

## Features

- Interactive world map to click and add visited cities
- List of visited cities and countries
- City detail view with notes and date of visit
- Geolocation support to center the map on your current position
- Protected app routes — login required to access the tracker
- Fake authentication (see below)

## Tech Stack

- **React 19** with React Router v6
- **Vite** as the build tool
- **Leaflet / React Leaflet** for the interactive map
- **react-datepicker** for date selection in the form
- **json-server** as a lightweight REST API backend

## Getting Started

You need to run **two processes** in separate terminals: the Vite dev server and the JSON Server backend.

### 1. Install dependencies

```bash
npm install
```

### 2. Start the backend (JSON Server)

The backend serves city data from `data/cities.json` on port **8000**.

```bash
npm run server
```

### 3. Start the Vite dev server

In a separate terminal:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite selects).

## Login Credentials (Fake Auth)

Authentication is simulated — no real backend or database is involved. Use the following credentials to log in:

| Field    | Value              |
| -------- | ------------------ | --- |
| Email    | `jack@example.com` |
| Password | `qwerty`           | S   |

> **Note:** These are hardcoded fake credentials for development/demo purposes only.
