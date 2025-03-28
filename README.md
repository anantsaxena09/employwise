# EmployWise - User Management App

## 🚀 Live Demo
The project is deployed on Vercel. Click the link below to access it:

🔗 [Live Demo](https://employwise-dusky.vercel.app/)

## 📌 Project Overview
EmployWise is a simple user management system that allows users to log in, view a list of users, edit user details, and delete users. The application is built using **React** and utilizes **Reqres API** as a mock backend.

## 🚀 Getting Started

### 1️⃣ Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (>= 14.x)
- **npm** (comes with Node.js) or **yarn**

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/employwise.git
cd employwise
```

### 3️⃣ Install Dependencies
Using **npm**:
```sh
npm install
```
Or using **yarn**:
```sh
yarn install
```

### 4️⃣ Run the Project
To start the development server, run:
```sh
npm start
```
Or
```sh
yarn start
```
This will start the app on **http://localhost:3000/**.

## 📂 Project Structure
```
/src
│── /components
│   ├── UserList.js
│   ├── UserCard.js
│   ├── EditUserForm.js
│   ├── Pagination.js
│── /pages
│   ├── LoginPage.js
│   ├── UsersPage.js
│── /routes
│   ├── ProtectedRoute.js
│── App.js
│── index.js
│── index.css
```

## 🔑 Authentication & Protected Routes
- The app uses **sessionStorage** to store the authentication token.
- Users must log in to access the **UsersPage**.
- If a user is not authenticated, they are redirected to the **Login Page**.

## ✨ Features
✔️ **Login Authentication** (Uses Reqres API)  
✔️ **Session Persistence** (Token stored in `sessionStorage`)  
✔️ **Protected Routes** (Redirects unauthorized users)  
✔️ **User Management** (View, edit, and delete users)  
✔️ **Pagination Support**  

## 🛠 Assumptions & Considerations
- The authentication system is simulated using **Reqres API**, which provides mock login functionality.
- The token expires upon page refresh (as it is stored in `sessionStorage`).
- Users are fetched from the mock API and stored in local state.


