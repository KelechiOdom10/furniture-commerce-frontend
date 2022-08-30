[![License](https://img.shields.io/github/license/falberthen/ecommerceddd.svg)](LICENSE)

# Furniture Commerce Website

* This is a full ecommerce platform made with Next.js and Mantine Ui for styling. The accompanying backend is built using .NET Core and can be found [here](https://github.com/KelechiOdom10/furniture-commerce-api)

## Key Features

- Get a list of categories and their associated products
- Get a list of product types and their associated products
- Get a list of products
- Filter and sort products
- Search products
- Get Individual product details
- Users can add items to cart
- Create an Order with delivery details
- Ability to checkout as a guest or authenticated user
- Wishlist management
- Address Managment
- Payment gateway integration
- Authentication:
  - User Signup
  - User Login
- Admin functionality to perform CRUD operations with products, categories, product types, users and orders

## Getting Started 

Clone the repository

```bash
git clone https://github.com/KelechiOdom10/furniture-commerce-frontend.git
```

Fill your .env variables:
```
NEXT_PUBLIC_API_URL=
```

Install deps:

```bash
npm install
```

Run Next dev server:

```bash
npm run dev
```

## TO-DO

- [ ] Add order functionality to Checkout page 
- [ ] Sort out payment integration with Stripe
- [ ] Add Social login

## Contributing 

This is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and feature requests are all listed on the [issues](https://github.com/KelechiOdom10/furniture-commerce-frontend/issues) tab and labeled accordingly. Feel free to open bug tickets and make feature requests.
