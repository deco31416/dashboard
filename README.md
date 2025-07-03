![deco31416](https://github.com/deco31416/deco31416/blob/main/public/31416-white.svg)

# 🚀 Price Crypto Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-blue.svg?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Cryptocurrency Price Dashboard with real-time tracking, multi-provider analytics, and a modern, accessible architecture.**

---

## 📄 Description

This project implements a dashboard for **real-time tracking** of cryptocurrency prices, integrating data from providers such as CoinMarketCap, CoinGecko, and CryptoCompare.  
It helps you manage price discrepancies, volatility alerts, trading volume, and consolidated average prices for fast decision-making in arbitrage or compliance workflows.  

Built with:  

- **Next.js** 15  
- **React 19**  
- **TailwindCSS**  
- **Radix UI / Shadcn**  
- **Recharts** for interactive charts  
- **React Hook Form** + **Zod** for form validation  
- **Dark/light mode** with `next-themes`

---

## 🗂️ Suggested Structure

```plaintext
/src
  /components
    /ui
    /charts
    /tables
  /features
    /crypto
      Dashboard.tsx
      PriceTable.tsx
      Alerts.tsx
  /hooks
    usePrices.ts
    useAlerts.ts
  /lib
    providers.ts
  /styles
    globals.css
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kokonutui-crypto-dashboard.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure your `.env` file with your provider API keys:

```env
NEXT_PUBLIC_CMC_API_KEY=xxx
NEXT_PUBLIC_COINGECKO_URL=https://api.coingecko.com/api/v3
```

4. Run the development server:

```bash
npm run dev
```

---

## 🚀 Features

✅ Multi-provider price tracking  
✅ Configurable critical alerts  
✅ Consolidated average prices  
✅ Responsive panel optimized for desktop/tablet  
✅ Persistent dark / light mode  
✅ 100% modular, TypeScript-based  
✅ Dynamic charts (volume and prices)  
✅ Report export (CSV/PDF planned)  

---

## 🖥️ Tech Stack

- **Next.js 15.2.4**  
- **React 19**  
- **Tailwind CSS 3.4**  
- **Radix UI**  
- **Shadcn UI**  
- **Recharts**  
- **React Hook Form + Zod**  
- **Embla Carousel** (for sliders)  
- **Sonner** for notifications  

---

## 🛠️ Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## 🧩 Contributing

1. Fork this project  
2. Create your feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add your feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a pull request

---

## 🤝 License

MIT © 2025 — **deco31416**

---

📬 **Contact:**
- **Email:** [contacto@deco31416.com](mailto:contacto@deco31416.com)
- **Website:** [https://www.deco31416.com/](https://www.deco31416.com/)

[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)](https://www.facebook.com/deco31416)
[![Medium](https://img.shields.io/badge/Medium-%2312100E.svg?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@deco31416)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/deco31416)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=Discord&logoColor=white)](https://discord.com/invite/4vwQFmd2)

---
