# 🚖 Uber Replica Web App – README  

## 🚀 Uber Clone Web Application  

This is a full-stack Uber-like web application where users can locate nearby rides, book a cab, track their ride in real time on Google Maps, and make payments. Captains (drivers) receive ride requests, can accept or reject them, navigate to the passenger's location, and collect payments.  

Additionally, the app includes **secure authentication**, **role-based access control (RBAC)**, and **vehicle registration** with different vehicle options: **Bike, Auto, and Car**.  

---

## 🛠️ Tech Stack  

### **Frontend**  
- **React 18** – UI framework  
- **Vite** – Fast build tool  
- **Tailwind CSS** – For styling  
- **Google Maps API** – For ride tracking and navigation  
- **Axios** – API communication  
- **Socket.io Client** – Real-time ride updates  

### **Backend**  
- **Node.js + Express.js** – Server-side framework  
- **MongoDB + Mongoose** – Database for users, rides, and transactions  
- **Socket.io** – Real-time updates  
- **JWT (jsonwebtoken)** – Secure authentication  
- **Bcrypt** – Password hashing  
- **Express Validator** – Data validation  
- **Dotenv** – Environment variables management  
- **CORS & Cookie-Parser** – Middleware utilities  

---

## ✨ Features  

### **User Features**  
- 🔍 Locate **nearby rides**  
- 🚖 **Book a cab** instantly  
- ❌ **Cancel a ride** anytime  
- 📍 **Live ride tracking** with Google Maps  
- 💳 **Secure online payment**  
- 🔐 **User Registration & Authentication**  

### **Captain (Driver) Features**  
- 📩 **Receive ride requests** in real time  
- ✅ **Accept/Reject requests**  
- 🗺️ **Navigation to passenger** via Google Maps  
- 🚘 **Register vehicle** (Bike, Auto, or Car)  
- 💰 **Collect payment** (cash or online)  

### **Admin Features**  
- 🔒 **Role-based access control (RBAC)** for Users, Captains, and Admins  
- 📊 **Manage users, rides, and vehicles**  
- 🚗 **Approve/Reject captain registrations**  
- 🛠 **Monitor payments and disputes**  

---

## 🛡 Security Features  
- 🔐 **JWT Authentication** for secure login  
- 👤 **Role-based Access Control (RBAC)** for different users  
- 🏦 **Secure Payment Gateway Integration**  
- 🚧 **Data validation & error handling**  

---

## 📦 Installation & Setup  

### **1️⃣ Clone the repository**  
```sh
git clone https://github.com/your-username/uber-clone.git
cd uber-clone
```

### **2️⃣ Install dependencies**  

#### Backend  
```sh
cd backend
npm install
```

#### Frontend  
```sh
cd frontend
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the **backend** directory and add the following:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
PAYMENT_GATEWAY_KEY=your_payment_gateway_api_key
```

---

## 🚀 Running the Application  

### **Start the backend server**  
```sh
cd backend
node server.js
```

### **Start the frontend (Vite)**  
```sh
cd frontend
npm run dev
```

---

## 🔗 API Endpoints  

### **User Authentication**  
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Login  
- `GET /api/auth/profile` – Get user profile  

### **User Ride Requests**  
- `GET /api/rides` – Find nearby rides  
- `POST /api/rides/book` – Book a ride  
- `POST /api/rides/cancel` – Cancel a ride  

### **Captain Registration & Management**  
- `POST /api/captain/register` – Register a captain  
- `POST /api/captain/vehicle` – Register a vehicle (Bike/Auto/Car)  
- `GET /api/captain/rides` – Get assigned rides  
- `POST /api/captain/accept` – Accept a ride  
- `POST /api/captain/reject` – Reject a ride  

### **Admin Management**  
- `GET /api/admin/users` – Get all users  
- `GET /api/admin/captains` – Get all captains  
- `POST /api/admin/approve-captain` – Approve captain registration  
- `POST /api/admin/reject-captain` – Reject captain registration  

---

## ⚡ Future Improvements  
- 🛡️ **OAuth Authentication (Google/Facebook)**  
- 🎨 **Improved UI/UX**  
- 📱 **Mobile App with React Native**  
- 🌎 **Multi-language support**  
- 🎟 **Discount & Promo Codes**  

---

## 📝 License  
This project is under the **ISC License**.  

---

## 🤝 Contributing  
Feel free to submit issues or pull requests to improve this project.  

---

### 🚗 **Book your ride now!**  
Made with ❤️ by Sandip Das(Code With Jarvis)
