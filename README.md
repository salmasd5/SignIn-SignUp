
# Authentication System for Information Extraction App

## Description
This project implements a **Login** and **Signup** system for an Information Extraction App. It is built with **React** and includes essential functionality for user authentication. The app provides users with a seamless way to register, log in, and access protected features.

## Features
- **User Signup**: New users can create an account by providing basic information.
- **User Login**: Registered users can log in securely.
- **Form Validation**: Includes client-side validation for email and password.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Displays meaningful error messages for incorrect credentials or other issues.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **React Router**: For navigation and routing between pages.
- **Axios**: For making HTTP requests.
- **CSS Modules**: For styling components.
- **Node.js & Express (Optional)**: Backend for handling authentication requests.
- **JSON Web Tokens (Optional)**: For secure session management.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
Install dependencies:

bash
Copier le code
npm install
Start the development server:

bash
Copier le code
npm start
Navigate to http://localhost:3000 in your browser.



## Signup
Navigate to the Signup page.
Enter a valid email address and password.
Submit the form to create a new account.
## Login
Navigate to the Login page.
Enter your registered email address and password.
Submit the form to access the app.
Authentication Flow
Upon successful login, the user receives a token (if using a backend) and is redirected to the main dashboard.
Unauthenticated users trying to access protected routes will be redirected to the login page.
## API Endpoints (Optional)
If you are using a backend server, ensure it supports the following endpoints:

POST /api/auth/signup: For user registration.
POST /api/auth/login: For user authentication.
## Environment Variables
Create a .env file in the root directory and include the following variables:


REACT_APP_API_BASE_URL=http://localhost:5000/api
## Screenshots
home page

sign in
sign up 
## Contributeurs
Salma Daigham 
Tahri Imane
Abid Hanane 
Zinaoui Zakaria
Ziad Ousoul
Elbellarj Hamza
