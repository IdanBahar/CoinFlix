[README_coinflix.md](https://github.com/user-attachments/files/23027552/README_coinflix.md)
# 🪙 CoinFlix

CoinFlix is a modern cryptocurrency dashboard built with **React** and **Vite**.  
It provides users with real-time insights into cryptocurrency prices, trends, and charts — powered by the **CoinGecko API**.

The project focuses on clean UI, fast performance, and accurate data visualization.

## ⚙️ Tech Stack

- **React 19** – UI library for building dynamic interfaces  
- **Vite** – lightning-fast build tool for modern web apps  
- **Chart.js + React ChartJS 2** – for rich and responsive data visualizations  
- **date-fns** – for date and time formatting  
- **React Router** – for client-side routing  
- **React Spinners** – for smooth loading animations  

## 📁 Project Structure

```
CoinFlix/
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages
│   ├── services/          # API calls and data fetching logic
│   ├── hooks/             # Custom React hooks
│   ├── assets/            # Icons, images, and static files
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
│
├── .env                   # API keys and environment variables
├── package.json
├── vite.config.js
└── README.md
```

## 🧠 Features

- Live cryptocurrency prices  
- Interactive line and bar charts  
- Historical data visualization  
- Auto-refresh intervals for real-time updates  
- Clean and minimal UI  
- Fully responsive design  

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/IdanBahar/CoinFlix.git
cd coinflix-dash
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your CoinGecko API key (if required).

```
VITE_API_URL=https://api.coingecko.com/api/v3
```

### 4. Run the app

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

## 🧩 Scripts

| Command        | Description                |
|----------------|----------------------------|
| `npm run dev`  | Start development server   |
| `npm run build`| Build production version   |
| `npm run lint` | Run ESLint checks          |
| `npm run preview` | Preview production build |

## 📊 API Reference

Data is powered by the **[CoinGecko API](https://www.coingecko.com/en/api)**, providing up-to-date crypto market information.

## 💡 Future Improvements

- Add favorite coins section  
- Implement dark mode  
- Integrate WebSocket updates for live streaming prices  
