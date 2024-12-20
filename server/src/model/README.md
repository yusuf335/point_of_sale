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
