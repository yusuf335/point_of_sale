## Entities

### Store

- **Attributes**: `id`, `name`, `address`, `phone`, `maxRegisters`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Has many `users` (Many to Many)
  - Has many `categories` (One to Many)
  - Has many `products` (One to Many)
  - Has many `registers` (One to Many)
  - Has many `carts` (One to Many)
  - Has many `orders` (One to Many)

### Category

- **Attributes**: `id`, `name`, `description`, `store_id`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Has many `products` (One to Many)

### Product

- **Attributes**: `id`, `name`, `description`, `price`, `image`, `stock`,`category_id`, `store_id`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Belongs to a `category` (Many to One)

### User

- **Attributes**: `id`, `name`, `email`, `password`, `role`, `isActive`, `isVerified`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `store` (Many to Many relationship)

### Register

- **Attributes**: `id`, `sessionStarted`, `sessionEnded`, `total`, `user_id`, `store_id`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Has many `carts` (One to Many)
  - Has many `orders` (One to Many)

### Cart

- **Attributes**: `id`, `productId`, `name`, `price`, `quantity`, `totalPrice`, `order_id`, `store_id`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Belongs to a `order` (Many to One)

### Order

- **Attributes**: `id`, `total`, `paymentMethod`, `status`, `message`, `store_id`, `register_id`, `recordCreated_at`, `recordUpdated_at`
- **Relationships**:
  - Belongs to a `store` (Many to One)
  - Belongs to a `register` (Many to One)
  - Contains many `carts` (One to Many)
