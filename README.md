# Point of Sale (POS) System

## Overview

The **Point of Sale (POS) System** is a web-based application designed to manage sales transactions in retail environments. The system enables businesses to streamline operations, manage inventory, track sales, handle customer data, and generate insightful reports. It is user-friendly, efficient, and scalable to meet the needs of businesses of various sizes.

### Key Features

- **Inventory Management**: Keep track of product stock levels, prices, and inventory updates.
- **Sales Tracking**: Record and process transactions in real-time.
- **Customer Management**: Manage customer details, their purchase history, and loyalty rewards.
- **Reporting**: Generate various reports including sales performance, inventory status, and customer activities.

The system is built with a **frontend** using **React** and **Next.js**, and a **backend** using **Node.js**, **Express**, **Apollo Server** (for GraphQL), and **MySQL** (via TypeORM) for the database.

## API Type

This project have two types of API

- **REST API**
- **GraphQL**

## Technologies Used

- **Frontend**: React, Next.js, TypeScript
- **Backend**: Node.js, Express, Apollo Server, GraphQL, TypeORM, MySQL
- **Authentication**: JWT, bcrypt
- **Development Tools**: TypeScript, Nodemon

---

## Project Structure

### Client-Side (Frontend)

The frontend of the application is built using **Next.js** with React. It provides a responsive and user-friendly interface for managing sales operations.

### Server-Side (Backend)

The backend is built using **Node.js**, **Express**, and **Apollo Server** to handle GraphQL queries. It uses **TypeORM** for database interaction with **MySQL**.

---

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or later)
- **MySQL** or another database (with MySQL support)
- **TypeScript**

### Installation

1. Clone the client repository:

   ```
   bash git clone https://github.com/yusuf335/point_of_sale.git
   cd point_of_sale
   ```

2. Install dependencies open two terminal inside point_of_sale directory:

- client

  ```
  cd client
  npm install
  ```

- server

  ```
  cd server
  npm install
  ```

3. Set up the environment variables for server. Create a .env file at the root of the server directory and add the following:

   ```
   DB_HOST=localhost
   DB_PORT=your-port
   DB_USERNAME=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=point_of_sale_db
   JWT_SECRET=your-secret-key
   ```

4. Run the development server:

- inside client directory:

  ```
  npm run dev
  ```

  The client will be available at http://localhost:3000.

- inside server directory:

  ```
  npm run dev
  ```

  The server will be available at http://localhost:4000.

# Point of Sale Database Model

This document outlines the database schema for a multi-company Point of Sale (POS) system. The design supports businesses with multiple stores, products, users, and robust inventory management.

---

## **How It Works**

1. **Company Management**:

   - Companies manage their stores, users, products, and categories independently.

2. **Store Operations**:

   - Stores handle inventory, registers, and orders under their respective companies.

3. **Product and Category Management**:

   - Products and categories are defined at the company level and assigned to stores.

4. **User Roles and Access**:

   - Users belong to a company and work in specific stores based on their roles.

5. **Sales Process**:

   - Registers track transactions, and orders capture sales with cart details.

6. **Inventory Tracking**:
   - Product Stock maintains inventory levels specific to each store.

---

## **Advantages**

- **Scalability**: Supports multiple companies and stores.
- **Centralized Management**: Categories and products are globally managed by companies.
- **Granular Tracking**: Tracks users, registers, and orders at a detailed level.
- **Extensibility**: Can accommodate additional features like promotions or loyalty programs.

---

## **Entities and Their Roles**

### **1. Company**

- **Attributes**:
  - `uuid`: Unique identifier for the company.
  - `name`: Name of the company.
  - `address`: Company address.
  - `phone`: Company phone number.
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Has many Stores**: A company owns multiple stores.
  - **Has many Users**: Users are associated with a specific company.
  - **Has many Categories**: Categories are scoped at the company level.
  - **Has many Products**: Products are managed globally by the company.

---

### **2. Store**

- **Attributes**:
  - `id`: Unique identifier for the store.
  - `name`: Store name.
  - `address`: Store address.
  - `phone`: Store phone number.
  - `maxRegisters`: Maximum number of registers allowed in the store.
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Belongs to a Company**: Each store operates under a company.
  - **Has many Users**: Employees or users of the store.
  - **Has many Product Stock entries**: Tracks inventory specific to the store.
  - **Has many Registers**: A store can have multiple registers for handling transactions.
  - **Has many Orders**: A store processes customer orders.

---

### **3. Category**

- **Attributes**:
  - `id`: Unique identifier for the category.
  - `name`: Name of the category.
  - `description`: Description of the category.
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Belongs to a Company**: Categories are managed at the company level.
  - **Has many Products**: A category contains multiple products.

---

### **4. Product**

- **Attributes**:
  - `id`: Unique identifier for the product.
  - `name`: Name of the product.
  - `description`: Description of the product.
  - `price`: Price of the product.
  - `image`: Image URL of the product.
  - `category_id`: Links the product to a category.
  - `company_id`: Links the product to a company.
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Belongs to a Company**: Products are globally managed by the company.
  - **Belongs to a Category**: Each product is assigned to a category.

---

### **5. Product Stock**

- **Attributes**:
  - `id`: Unique identifier for the product stock entry.
  - `stock`: Quantity of the product in stock.
  - `status`: Status of the product stock (e.g., active, inactive).
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Belongs to a Store**: Tracks inventory for a specific store.
  - **Belongs to a Product**: Links back to the global product definition.

---

### **6. User**

- **Attributes**:
  - `id`: Unique identifier for the user.
  - `name`: User’s name.
  - `email`: User’s email address.
  - `password`: User’s password (hashed).
  - `role`: Role of the user (e.g., admin, cashier).
  - `isActive`: Indicates if the user is active.
  - `isVerified`: Indicates if the user’s account is verified.
  - `resetPasswordToken`: Token for password recovery.
  - `note`: Notes or remarks about the user.
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Belongs to a Company**: A user is employed by a company.
  - **Belongs to a Store**: Users work in specific stores.

---

### **7. Register**

- **Attributes**:
  - `id`: Unique identifier for the register.
  - `sessionStarted`: Timestamp when the session started.
  - `sessionEnded`: Timestamp when the session ended.
  - `total`: Total sales processed in the session.
- **Relationships**:
  - **Belongs to a Store**: Registers are tied to specific stores.
  - **Has many Users**: Registers are operated by users.
  - **Has many Orders**: Registers process multiple orders during a session.

---

### **8. Order**

- **Attributes**:
  - `id`: Unique identifier for the order.
  - `total`: Total amount of the order.
  - `paymentMethod`: Payment method used (e.g., cash, card).
  - `status`: Status of the order (e.g., completed, pending).
  - `message`: Additional notes for the order.
  - `store_id`: Links the order to a store.
  - `register_id`: Links the order to a register.
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Belongs to a Store**: Orders are associated with a specific store.
  - **Belongs to a Register**: Orders are processed through a particular register.
  - **Contains many Carts**: Orders consist of multiple cart items.

---

### **9. Cart**

- **Attributes**:
  - `id`: Unique identifier for the cart.
  - `productId`: Identifier of the product in the cart.
  - `name`: Name of the product in the cart.
  - `price`: Price of the product.
  - `quantity`: Quantity of the product in the cart.
  - `totalPrice`: Total price of the product (price × quantity).
  - `recordCreated_at`, `recordUpdated_at`: Timestamps for record creation and updates.
- **Relationships**:
  - **Belongs to an Order**: Carts are part of an order.

---
