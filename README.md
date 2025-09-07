# 🛍️ Myntra Clone

A simplified clone of Myntra built using **React (Vite), Redux, and Express**.  
The project demonstrates **frontend-backend integration**, **state management**, and **e-commerce functionality** such as a shopping bag.

---

## ✨ Features

- 🏠 Home page with product listings
- 👜 Bag page with add/remove product functionality
- 📦 Express backend serving product data
- 🔄 Redux for state management
- 🌐 API integration for dynamic data fetching

---

## 🛠️ Tech Stack

**Frontend**

- React (Vite)
- Redux Toolkit
- Bootstrap

**Backend**

- Node.js
- Express

---

## 📂 Project Structure

```
myntra-clone/
 ┣ client/        # React (Vite) frontend
 ┃ ┣ src/
 ┃ ┣ package.json
 ┃ ┗ vite.config.js
 ┣ server/        # Express backend
 ┃ ┣ data/
 ┃ ┣ app.js
 ┃ ┗ package.json
 ┣ README.md      # Project documentation
 ┣ .gitignore
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/VNeeha/react-myntra-clone.git
cd myntra-clone
```

---

### 2️⃣ Setup Backend (Express)

```bash
cd server
npm install
npm start
```

- Runs the backend on **http://localhost:8080**
- API endpoint:
  ```
  GET /items
  ```

---

### 3️⃣ Setup Frontend (React + Vite)

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

- Runs the frontend on **http://localhost:5173**

---

## 🧑‍💻 Development Steps

1. **Step 1** – Setup Home & Bag pages with static data and Express backend
2. **Step 2** – Integrated Redux for state management and Bag functionality
3. **Step 3** – Connected frontend with Express backend to fetch dynamic data

---

## 📜 License

This project is for **learning and educational purposes** only.  
Not affiliated with Myntra in any way.
