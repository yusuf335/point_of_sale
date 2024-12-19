# Point of Sales Backend

This project is a web application that leverages REST APIs and GraphQL for data management and communication between the client and the server. It is designed to provide a scalable and maintainable architecture for managing user data, authentication, and other core business logic. The application is built with TypeScript and organized into modular components for easy collaboration and extensibility.

### Explanation of Key Directories

- **`controller/`**: Contains REST API controllers to handle HTTP requests and send appropriate responses.
- **`graphql/`**: Houses the GraphQL setup, including schema definitions, resolvers, and custom types.
- **`services/`**: Implements the core business logic that is reusable across the application.
- **`model/`**: Defines the database schemas and models for interacting with the database.
- **`router/`**: Maps REST API routes to the corresponding controllers.
- **`utils/`**: Contains utility functions and helper methods to simplify and centralize reusable logic.
- **`app.ts`**: Acts as the entry point for setting up the application logic.
- **`server.ts`**: Configures and starts the server to handle incoming requests.

### How to Navigate

- Start with `server.ts` to understand the application bootstrapping process.
- Look into `router/` or `graphql/` to find API endpoints and GraphQL operations.
- Dive into `services/` for the logic handling core functionalities.
- Check `model/` for the data structure and database design.
