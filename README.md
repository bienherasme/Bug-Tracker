# **Bug Tracker**

## **Overview**
Bug Tracker is a simple full-stack application that allows users to log, track, and manage bugs in their projects. This app demonstrates a modern development stack with React for the frontend, Node.js/Express for the backend, and MongoDB as the database.

---

## **Features**
- Add new bugs with title, description, and priority.
- View a list of all bugs with their details.
- Delete bugs when resolved.
- Dynamic, responsive user interface.
- RESTful API for handling bug data.

---

## **Technologies Used**
### **Frontend**
- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling and responsive design.

### **Backend**
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Minimalist web framework for building RESTful APIs.

### **Database**
- **MongoDB**: NoSQL database for storing bug data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

---

## **Setup Instructions**

### **1. Prerequisites**
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud database via MongoDB Atlas)
- [Git](https://git-scm.com/)

---

### **2. Installation**

#### Install Backend Dependencies
cd backend
npm install

#### Install Frontend Dependencies
cd ../frontend
npm install

### **3. Configure the Environment**
Create a .env file in the backend directory and add the following:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bugtracker?retryWrites=true&w=majority
PORT=5000

Replace <username> and <password> with your MongoDB Atlas credentials.
If using a local MongoDB instance, use this instead:
MONGO_URI=mongodb://localhost:27017/bugtracker

### **4. Run the Application**

####Start the Backend
cd backend
node server.js
####Start the Frontend
cd ../frontend
npm start

## **Author**
Developed by Bienvenido Herasme.
For feedback or inquiries, contact me at bienherasme@gmail.com


## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
