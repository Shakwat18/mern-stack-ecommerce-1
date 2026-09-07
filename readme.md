# OD MERN Ecommerce API

Backend API for an ecommerce application built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**. It provides product browsing, OTP authentication, profiles, wishlists, carts, reviews, invoices, and payment integration.

## Features

- Product, brand, category, slider, and feature listings
- OTP-based user authentication
- JWT authentication using HTTP cookies
- User profile management
- Wishlist management
- Shopping cart management
- Product reviews
- Invoice creation
- SSLCommerz payment callbacks
- React production build serving
- Security middleware with Helmet, HPP, XSS sanitizer, CORS, and cookie parsing

## Project Structure

```text
.
├── app.js
├── server.js
├── client/
│   └── dist/
└── src/
    ├── config/
    │   └── db.js
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    │   └── api.js
    ├── services/
    └── utility/
        └── TokenHelper.js
```

## Requirements

- Node.js 18+
- MongoDB
- npm
- SSLCommerz credentials for payment processing

## Installation

```bash
git clone <repository-url>
cd "od-mern ecommerce"
npm install
```

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/od_mern_ecommerce
TOKENKEY=your_secure_jwt_secret
```

Start the server:

```bash
node server.js
```

The API will be available at:

```text
http://localhost:3000/api
```

If a development script exists in `package.json`, you can also use:

```bash
npm run dev
```

## Authentication Flow

### 1. Request OTP

```http
GET /api/userLoginController/user@example.com
```

Example:

```bash
curl http://localhost:3000/api/userLoginController/user@example.com
```

The development response contains the OTP:

```json
{
  "status": "success",
  "message": "6 digit otp is sent 123456"
}
```

### 2. Verify OTP

```http
GET /api/verifyLoginController/user@example.com/123456
```

The server returns a JWT and sets a `token` cookie.

```bash
curl -c cookies.txt http://localhost:3000/api/verifyLoginController/user@example.com/123456
```

### 3. Use Protected Routes

Send the saved cookie with subsequent requests:

```bash
curl -b cookies.txt http://localhost:3000/api/readProfileController
```

## API Endpoints

All endpoints are prefixed with:

```text
/api
```

### Public Product Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/brandList` | List all brands |
| GET | `/categoryList` | List all categories |
| GET | `/sliderList` | List homepage sliders |
| GET | `/productsListByBrand/:brandId` | Products by brand |
| GET | `/productsListByCategory/:categoryId` | Products by category |
| GET | `/productsListBySimilar/:similar` | Similar products |
| GET | `/productsListByKeyword/:keyword` | Search products |
| GET | `/productsListByRemark/:remark` | Products by remark |
| GET | `/productsListByDetails/:productId` | Product details |
| GET | `/reviewList/:productId` | Product reviews |
| GET | `/featuresList` | List application features |

### User Routes

| Method | Endpoint | Auth |
|---|---|---|
| GET | `/userLoginController/:email` | No |
| GET | `/verifyLoginController/:email/:otp` | No |
| GET | `/userLogoutController` | Yes |
| POST | `/createProfileController` | Yes |
| POST | `/updateProfileController` | Yes |
| GET | `/readProfileController` | Yes |

Example profile request:

```bash
curl -X POST http://localhost:3000/api/createProfileController ^
  -H "Content-Type: application/json" ^
  -b cookies.txt ^
  -d "{\"cu_name\":\"John Doe\",\"cu_phone\":\"0123456789\",\"cu_add\":\"Dhaka\",\"cu_city\":\"Dhaka\",\"cu_country\":\"Bangladesh\",\"cu_state\":\"Dhaka\",\"cu_postcode\":\"1200\",\"ship_name\":\"John Doe\",\"ship_phone\":\"0123456789\",\"ship_add\":\"Dhaka\",\"ship_city\":\"Dhaka\",\"ship_country\":\"Bangladesh\",\"ship_state\":\"Dhaka\",\"ship_postcode\":\"1200\"}"
```

### Wishlist Routes

| Method | Endpoint | Auth |
|---|---|---|
| POST | `/createWishList` | Yes |
| POST | `/deleteWishList` | Yes |
| GET | `/findWishList` | Yes |

Request body:

```json
{
  "productId": "64f000000000000000000001"
}
```

### Cart Routes

| Method | Endpoint | Auth |
|---|---|---|
| POST | `/createCartList` | Yes |
| POST | `/updateCart` | Yes |
| GET | `/deleteCart` | Yes |
| GET | `/cartList` | Yes |

Example cart request:

```json
{
  "productId": "64f000000000000000000001",
  "color": "Black",
  "qty": "2",
  "size": "L"
}
```

### Review Routes

| Method | Endpoint | Auth |
|---|---|---|
| GET | `/productsReviewList/:productId` | Yes |
| POST | `/createReview/:productId` | Yes |

Example review request:

```json
{
  "color": "Black",
  "des": "Good product",
  "rating": "5"
}
```

### Invoice and Payment Routes

| Method | Endpoint | Auth |
|---|---|---|
| GET | `/createInvoice` | Yes |
| GET | `/invoiceList` | Yes |
| GET | `/invoiceProductLists/:invoiceId` | Yes |
| POST | `/paymentSuccess/:trx_id` | Yes |
| POST | `/paymentFail/:trx_id` | Yes |
| POST | `/paymentCancel/:trx_id` | Yes |
| POST | `/paymentIPN/:trx_id` | Yes |

## Standard Response Format

Successful response:

```json
{
  "status": "success",
  "data": []
}
```

Failed response:

```json
{
  "status": "failed",
  "message": "Error message"
}
```

## Database Collections

The application uses the following Mongoose models:

- `users`
- `profiles`
- `brands`
- `categories`
- `products`
- `productsDetails`
- `productSliders`
- `features`
- `wishLists`
- `carts`
- `reviews`
- `invoices`
- `invoiceProducts`
- `PaymentSettings`

## Frontend Deployment

The Express server serves the React production build from:

```text
client/dist
```

Build the frontend before production deployment:

```bash
cd client
npm install
npm run build
```

Then start the backend from the project root:

```bash
node server.js
```

## Security Notes

- Keep `TOKENKEY` secret.
- Do not expose production OTP values in API responses.
- Use HTTPS in production.
- Use secure, HTTP-only cookies in production.
- Restrict CORS to trusted frontend domains.
- Validate MongoDB ObjectIds before database queries.
- Configure payment credentials through environment variables or secure database configuration.
- Never commit `.env` files.

## License

This project is for educational and development purposes.

