# AppSignal Tutorial - Blog API

A simple Express.js API for managing blog articles using MongoDB.

## Features

- Create, read, update, and delete blog articles
- MongoDB integration with Mongoose
- RESTful API endpoints

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB locally (default: mongodb://localhost:27017)
4. Run the application:
   ```bash
   node index.js
   ```

The server will start on http://localhost:3000

## API Endpoints

- `GET /` - Welcome message
- `POST /api/articles` - Create a new article
- `GET /api/articles` - Get all articles
- `GET /api/articles/:id` - Get a specific article by ID
- `PATCH /api/articles/:id` - Update an article by ID
- `DELETE /api/articles/:id` - Delete an article by ID

## Article Schema

```json
{
  "title": "String (required)",
  "content": "String",
  "date": "Date (default: now)"
}
```

## Dependencies

- Express.js
- Mongoose
