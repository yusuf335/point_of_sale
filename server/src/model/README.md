## Here’s a breakdown of the relationships:

1. Store ↔ Category: A store can have many categories. Each category belongs to a store.
2. Store ↔ Product: A store can have many products. Each product belongs to one store and one category.
3. Store ↔ User: A store can have many users (employees, managers). Each user belongs to a store.
4. Store ↔ Cash Register: A store can have many cash registers. Each cash register belongs to a store.
5. Store ↔ Cart: A store can have many carts. Each cart belongs to a store and a cash register. Cart get removed once order completed.
6. Store ↔ Order: A store can have many orders. Each order belongs to a store and a cash register.
