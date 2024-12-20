## Entities

### Compnay

- **Attributes**: `uuid`, `name`, `address`, `phone`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Has many `stores` (One to Many)
  - Has many `users` (One to Many)
  - Has many `categories` (One to Many)
  - Has many `products` (One to Many)

### Store

- **Attributes**: `id`, `name`, `address`, `phone`, `maxRegisters`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:

  - Belongs to a `company` (Many to One)
  - Has many `users` (One to Many)
  - Has many `product_stock` (One to Many)
  - Has many `registers` (One to Many)
  - Has many `orders` (One to Many)

### Category

- **Attributes**: `id`, `name`, `description`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `company` (Many to One)
  - Has many `products` (One to Many)

### Product

- **Attributes**: `id`, `name`, `description`, `price`, `image`, `category_id`, `company_id`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `company` (Many to One)
  - Belongs to a `category` (Many to One)

### Product Stock

- **Attributes**: `id`, `stock`, `status`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Belongs to a `product` (Many to One)

### User

- **Attributes**: `id`, `name`, `email`, `password`, `role`, `isActive`, `isVerified`, `resetPasswordToken`,`note`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `company` (Many to One relationship)
  - Belongs to a `store` (Many to One relationship)

### Register

- **Attributes**: `id`, `sessionStarted`, `sessionEnded`, `total`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Has many `users` (Many to One)
  - Has many `orders` (One to Many)

### Order

- **Attributes**: `id`, `total`, `paymentMethod`, `status`, `message`, `store_id`, `register_id`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Belongs to a `register` (Many to One)
  - Contains many `carts` (One to Many)

### Cart

- **Attributes**: `id`, `productId`, `name`, `price`, `quantity`, `totalPrice`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `order` (Many to One)
