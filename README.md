# Starbucks AI Rebrand — Fullstack (Next.js + API)

## Run
```bash
npm install
npm run dev
# http://localhost:3000
```

## Production
```bash
npm run build
npm start
```

## Backend
- **GET /api/menu** → returns coffee menu
- **GET /api/orders** → list orders (from `data/orders.json`)
- **POST /api/orders** `{ item }` → create order
- **POST /api/contact** `{ name, email, message }` → save message

Data is stored as JSON files under `/data` for local development.
