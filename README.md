# User Management API

This is a simple Node.js REST API for managing users, featuring CRUD operations and Swagger documentation. The API allows you to create, read, update, and delete users in a MySQL database. Built with Express, TypeORM, and Swagger for API documentation.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- CRUD operations for User management
- RESTful API design
- Swagger documentation for API endpoints
- Easy setup and configuration with environment variables

## Technologies
- Node.js
- Express
- TypeORM
- MySQL
- Swagger for API documentation

## Getting Started

### Prerequisites
- **Node.js** version >= 14.x
- **MySQL** database
- **Git** for cloning the repository

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name


├── src
│   ├── controllers        # Controllers for handling requests
│   ├── entities           # TypeORM entities (models)
│   ├── routes             # Route definitions
│   ├── services           # Service layer for business logic
│   ├── config             # Database and configuration files
│   └── index.ts           # Main entry point
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── README.md              # Project documentation
└── package.json           # Project metadata and dependencies
