# Task API

A simple RESTful API for managing tasks built with **Node.js**, **TypeScript**, and **MongoDB**. This project includes Docker support for easy development and deployment.

---

## Features

- CRUD operations for tasks
- Persistent storage with MongoDB
- Written in TypeScript
- Dockerized for development and production

---

## Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional, for containerized development)
- [MongoDB](https://www.mongodb.com/) (or use Docker)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-api.git
cd task-api
```

### 2. Install dependencies

```
npm install 
```

### 3. Configure environment variables

Create a .env file at the project root:

PORT=3000
MONGO_URI=mongodb://localhost:27017/task-api

### 4. Run the application 

Locally:

```
npm run build
npm start
```

Development mode with live reload:

```
npm run dev
```

Using Docker (recommended approach because this includes the Mongo DB):

Build the image:

```
docker-compose build
```

Run the containers:

```
docker-compose up
```

Or build and run the image:

```
docker-compose up --build
```

The API will be available at http://localhost:3000.


