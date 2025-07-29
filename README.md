# BitLinks - URL Shortener

BitLinks is a full-stack URL shortener web application built with React.js, Next.js, Tailwind CSS, MongoDB, and tested using Postman. The application allows users to convert long URLs into short and shareable links through a clean and responsive interface.

---

## Features

This application provides the ability to shorten lengthy URLs into compact versions. It includes a fully responsive design using Tailwind CSS, a backend powered by Next.js API routes, and URL data stored securely in a MongoDB database. The APIs are thoroughly tested with Postman, and a dark mode toggle is integrated for enhanced user experience.

---

## Tech Stack

The frontend is developed using React.js and Next.js with the App Router. Tailwind CSS is used for fast and customizable styling. The backend logic is handled by Next.js API routes, while MongoDB is used as the NoSQL database. Postman is used for testing the API endpoints, and the project is optimized for deployment on Vercel.

---

## Getting Started

To run this project locally, clone the repository, install the dependencies, and create a local environment file containing the MongoDB connection string. After setting up the environment, run the development server to start the application on your local machine.

---

## API Overview

The API includes an endpoint to generate short URLs from long ones, and a route that redirects short URLs to their original destination. The application supports full CRUD operations for shortened URLs.

---

## Folder Structure Summary

The `app` folder contains the main routing pages and API logic. The `components` folder includes all reusable UI elements. The `lib` directory contains the MongoDB connection logic. The `public` folder holds static assets. Configuration and environment setup files are located in the project root.

---

## Deployment

BitLinks is optimized for deployment on Vercel. The application uses MongoDB Atlas for cloud-based database management, ensuring scalability and performance in production environments.

---

## Future Improvements

Planned future enhancements include the ability to define custom short links, analytics for tracking URL visits, and an expiration feature for temporary links.

---

## License

This project is open source and is available under the MIT License.

---
