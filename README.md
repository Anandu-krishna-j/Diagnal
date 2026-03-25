# 📺 Infinite Scroll Content App

A React application that displays paginated content using **infinite scrolling**, built with modern best practices like **Redux Toolkit**, **RTK Query**, and performance optimizations.

---

## 🚀 Tech Stack

* ⚛️ React (Functional Components + Hooks)
* 🧠 Redux Toolkit (Global State Management)
* 🔄 RTK Query (API Data Fetching & Caching)
* 🎨 Tailwind CSS (Responsive UI)
* 🧩 Custom Hooks (Infinite Scroll, Debounce)
* ⚡ Performance Optimizations:

  * `React.lazy` + `Suspense`
  * `useCallback`
  * `useMemo`

---

## 📂 Project Structure

```
src/
│
├── app/
│   └── store.js                # Redux store setup
│
├── services/
│   └── contentApi.js          # RTK Query API config
│
├── features/
│   └── uiSlice.js             # Redux UI state (search, flags)
│
├── hooks/
│   ├── useInfiniteScroll.js   # Infinite scroll logic
│   └── useDebounce.js         # Debounce hook for search
│
├── components/
│   ├── Header/
│   ├── Grid/
│   └── Common/
│       └── LazyWrapper.jsx
│
├── pages/
│   └── Home.jsx               # Main page logic
│
├── assets/                   # Images (from API or local)
│
└── App.jsx
```

---

## 🌐 API Details

* **Base URL**:
  `https://test.create.diagnal.com/`

* **Paginated Data**:
  `/data/page1.json`, `/data/page2.json`, `/data/page3.json`

* **Images**:
  `/images/{poster-image}`

---

## ✨ Features

### 📌 Infinite Scroll

* Loads next page when user reaches bottom
* Uses `IntersectionObserver`
* Prevents duplicate API calls with lock mechanism

---

### 🔍 Search with Debounce

* Client-side filtering of content
* Debounced input to reduce unnecessary re-renders

---

### ⚡ Performance Optimizations

* **Lazy Loading**

  * Components loaded using `React.lazy`
* **Memoization**

  * `useMemo` for filtered data
  * `useCallback` for stable functions
* **RTK Query Caching**

  * Efficient API calls with controlled cache

---

### 📱 Responsive UI

* Built with Tailwind CSS
* Works across mobile, tablet, and desktop
* Matches provided design guidelines

---

## 🧠 Key Concepts Used

### 🔹 Redux Toolkit

* Simplified global state management
* Slice-based architecture

### 🔹 RTK Query

* Data fetching & caching
* Auto-managed loading/error states

### 🔹 Custom Hooks

* `useInfiniteScroll` → handles pagination trigger
* `useDebounce` → optimizes search input

---

## 🧪 How It Works

1. App loads **Page 1**
2. User scrolls → triggers **Page 2**
3. Scroll again → loads **Page 3**

---

## 🚨 Edge Cases Handled

* ✅ Prevents multiple API calls on fast scroll
* ✅ Avoids duplicate data rendering
* ✅ Handles empty API responses

---

## 🏆 Highlights

* Clean and scalable architecture
* Production-level infinite scroll implementation
* Optimized rendering and API usage
* Strong separation of concerns

---

## 📌 Future Improvements

* Skeleton loaders for better UX
* Server-side search
* Image lazy loading
* Unit & integration testing

---

## 👨‍💻 Author

Developed as part of a frontend assignment using modern React ecosystem tools and best practices.

---

## 📄 License

This project is for learning/demo purposes.
