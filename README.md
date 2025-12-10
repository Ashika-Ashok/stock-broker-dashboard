# StockFlow Dashboard

**StockFlow** is a modern, responsive web dashboard that allows users to track real-time stock prices, subscribe to favorite stocks, and visualize price trends using interactive charts. The project is built with **React.js**, **Chart.js**, and WebSockets to provide live updates.

---

## Features

1. **Real-Time Stock Prices**

   * Users can see live stock prices for supported tickers: **GOOG, TSLA, AMZN, META, NVDA**.
   * Before login, random demo prices are displayed to simulate a real-time dashboard.

2. **User Authentication**

   * Login via email only (no password required).
   * Stores user preferences and subscriptions in **localStorage** for persistent state.

3. **Subscribe/Unsubscribe to Stocks**

   * Users can subscribe to stocks they want to follow.
   * Subscribed stocks are highlighted and displayed in graphs.

4. **Interactive Charts**

   * **Price Graph:** Shows a live line graph of subscribed stock prices over time.
   * **Mini Bar Graph:** Displays a snapshot of all supported stock prices on the landing page.

5. **Company Cards**

   * Cards with icons, names, and descriptions of supported companies.
   * Hover animation for a professional UI feel.

6. **Theme Toggle**

   * Switch between **Light** and **Dark** themes.
   * Persistent across sessions using CSS variables and `data-theme` attribute.

7. **Why StackFlow Section**

   * Highlights the benefits of using StackFlow for developers:

     * Real-time solutions for dev queries
     * Large developer community support
     * Learn from practical code examples
   * Includes gradient, glow, and floating animations for visual appeal.

8. **Responsive & Animated UI**

   * Header logo floats gently for a dynamic look.
   * Buttons have hover animations.
   * Cards and StackFlow box scale on hover.

9. **WebSocket Integration**

   * Real-time communication with server for live stock updates.
   * Updates the dashboard efficiently without page reloads.

---

## Screenshots
<img width="1897" height="839" alt="image" src="https://github.com/user-attachments/assets/19b08515-893a-47c0-bb3b-5d14cfbb5fae" />


<img width="924" height="517" alt="image" src="https://github.com/user-attachments/assets/1042bd8c-2f48-4376-9d17-6119c07ecd21" />
<img width="935" height="830" alt="image" src="https://github.com/user-attachments/assets/a64b6238-2813-4e83-af8b-ce9943cfc617" />
<img width="911" height="782" alt="image" src="https://github.com/user-attachments/assets/6e2f2a67-6710-49d3-bf2c-6dbc17bb6f46" />
<img width="915" height="581" alt="image" src="https://github.com/user-attachments/assets/a64cd8b1-bdfb-40e4-ba8e-184054c8e9a1" />
<img width="920" height="647" alt="image" src="https://github.com/user-attachments/assets/4cf868e9-bc7d-4b58-b8bc-b7c73ac2b45b" />
<img width="918" height="675" alt="image" src="https://github.com/user-attachments/assets/b7058b93-054b-46d2-9fff-02f3c758f7cb" />
<img width="938" height="641" alt="image" src="https://github.com/user-attachments/assets/35e1242a-cce7-4ebb-b901-f42cf00c568a" />
<img width="925" height="822" alt="image" src="https://github.com/user-attachments/assets/aa8602d9-8f14-4b4e-a7a2-0fb88ec4cade" />


1. **Landing Page / Hero Section** – Show the main landing screen with the Get Started button.
2. **Mini Graph / Live Price Overview** – Screenshot of the Bar chart displaying random or live prices.
3. **Supported Stocks / StockRow** – Show the subscribe/unsubscribe buttons with prices.
4. **Price Graph / GraphSummary** – Screenshot of live chart for subscribed stocks.
5. **Company Cards** – Screenshot of the company cards grid.
6. **Why StackFlow Box** – Screenshot showing the animated StackFlow section.
7. **Login Popup** – Screenshot of the email login modal.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <your-github-link>
   cd stock-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run locally:

   ```bash
   npm run dev
   ```

4. Open in browser: `http://localhost:3000`

---

## Deployment

* The project can be easily deployed using **Vercel**:

  ```bash
  npm i -g vercel
  vercel login
  vercel
  ```
* Random demo prices will appear on the landing page, and WebSocket integration will work for live updates.

---

## Technologies Used
* **Next.js**
* **React.js** – Frontend framework
* **Chart.js** – Interactive charts and graphs
* **WebSockets** – Real-time price updates
* **CSS3 & JS Animations** – Smooth transitions and animations
* **LocalStorage** – Persisting user subscriptions and theme

---

## Future Enhancements

* Add **price-up / price-down color indicators** for each stock.
* Enable **user profile** with multiple stock portfolios.
* Add **alerts** for significant price changes.
* Integrate **API for live stock prices** instead of random numbers.
