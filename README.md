# NestJS CRUD Application

This is a simple CRUD application built with NestJS.

## Features
- Create, read, update, and delete users.
- Built with TypeScript and NestJS.
- Ready for containerization using Docker.

## Requirements
- Node.js (v16 or higher)
- npm
- Docker (optional)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nestjs-crud-app.git
   cd nestjs-crud-app


##Install dependencies:
npm install

##Start the application:
npm run start

##Docker Usage

Build the Docker image:
docker build -t nestjs-crud-app .

Run the container:
docker run -p 3000:3000 nestjs-crud-app

##API Endpoints
POST /users - Create a new user.
GET /users - Get all users.
GET /users/:id - Get a user by ID.
PUT /users/:id - Update a user by ID.
DELETE /users/:id - Delete a user by ID.