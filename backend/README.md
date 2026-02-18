# Backend – Micro Marketplace

## Features
- Node.js + Express + MongoDB
- JWT authentication
- CRUD for products (title, price, description, image)
- Search + pagination
- Add/Remove favorites
- Seed data: 2 users, 10 products

## Test Credentials
- user1@example.com / 123456
- user2@example.com / 123456

## Setup
1. npm install
2. Copy `.env.example` → `.env` and fill your Mongo URI + JWT secret
3. Run seed: `node seed.js`
4. Start server: `npm run dev`
5. Server runs on `http://localhost:5000`

## API Endpoints
- POST /auth/register
- POST /auth/login
- GET /products?search=&page=&limit=
- POST /products (protected)
- PUT /products/:id (protected)
- DELETE /products/:id (protected)
- POST /products/:id/favorite (protected)
