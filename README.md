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

- client/frontend

  ```
  cd client
  npm install
  ```

- server/backend

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
