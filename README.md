# Multilingual FAQ System

## Introduction
This is a multilingual FAQ system built with Node.js, Express, MongoDB, Redis, and Google Translate API. It supports real-time caching using Redis and provides APIs for adding, retrieving, updating, and deleting FAQs in multiple languages.

## Features
- **Multilingual Support**: Uses Google Translate to translate FAQs into multiple languages.
- **Redis Caching**: Improves response time by caching FAQ data.
- **REST API**: Fully functional API for managing FAQs.
- **Docker Support**: Easily deployable using Docker and Docker Compose.


## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>=14)
- MongoDB
- Redis
- Docker & Docker Compose (if using Docker)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/multilingual-faq-system.git
   cd multilingual-faq-system
   ```
2. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Configure environment variables by creating a `.env` file:
   ```sh
   PORT=5500
   MONGO_URI=mongodb://localhost:27017/faqs
   REDIS_URL=redis://localhost:6379
   ```
4. Start MongoDB and Redis servers locally.
5. Run the backend:
   ```sh
   npm start
   ```

## API Usage
### 1. Add FAQ
```sh
POST /api/faqs/add
Content-Type: application/json
{
  "question": "What is this system?",
  "answer": "It is a multilingual FAQ system."
}
```

### 2. Get FAQs
```sh
GET /api/faqs?lang=hi
```

### 3. Get FAQ by ID
```sh
GET /api/faqs/get-by-id/:id
```

### 4. Update FAQ
```sh
PUT /api/faqs/update/:id
```

### 5. Delete FAQ
```sh
DELETE /api/faqs/delete/:id
```

## Running with Docker
1. Build and run the project using Docker Compose:
   ```sh
   docker-compose up --build
   ```
2. Access the backend at `http://localhost:5500`.


## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License.

