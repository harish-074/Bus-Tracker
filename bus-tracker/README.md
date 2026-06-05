# 🚌 MKCE Bus Tracking Portal

## 📖 Project Description

MKCE Bus Tracking Portal is a Full Stack Web Application developed to help students track college buses through an interactive map interface.

The system allows students to view bus locations, track specific buses, view route details, and access driver information. The project demonstrates the integration of frontend development, backend APIs, database management, and future GPS-based vehicle tracking concepts.

This project was developed as an educational and portfolio project to showcase Full Stack Development skills using Java Spring Boot, MySQL, HTML, CSS, JavaScript, and Leaflet Maps.

---

# 🎯 Objectives

* Provide a centralized bus tracking platform for students.
* Display bus locations on an interactive map.
* Allow students to track buses using bus numbers.
* Display route information and driver details.
* Demonstrate full-stack application development.
* Serve as a foundation for future GPS-based real-time tracking.

---

# 🚀 Features

## Student Features

* Student Login
* Interactive Dashboard
* Bus Tracking
* Route Visualization
* Driver Information Display
* Contact Information Display
* Bus Status Monitoring

## Tracking Features

* Interactive Leaflet Map
* OpenStreetMap Integration
* Bus Markers
* Route Tracking
* Route Display for Selected Bus
* Auto Zoom to Selected Bus
* Bus Information Card

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript
* Leaflet.js
* OpenStreetMap

### Frontend Responsibilities

* Login Page
* Dashboard Interface
* User Interaction
* Bus Tracking Interface
* Map Visualization
* Route Display

---

## Backend

* Java
* Spring Boot
* Maven

### Backend Responsibilities

* Student Registration
* Student Login
* Bus Information Management
* REST API Development
* Database Connectivity

---

## Database

* MySQL

### Database Responsibilities

* Store Student Information
* Store Bus Information
* Manage Route Data
* Support Backend APIs

---

# 🗄️ Database Schema

The complete database schema is available in:

```text
database-schema.sql
```

## Tables Used

### Student Table

| Column     | Type         |
| ---------- | ------------ |
| student_id | INT          |
| name       | VARCHAR(100) |
| email      | VARCHAR(100) |
| password   | VARCHAR(100) |
| bus_number | VARCHAR(20)  |

### Bus Table

| Column         | Type         |
| -------------- | ------------ |
| bus_id         | INT          |
| bus_number     | VARCHAR(20)  |
| route          | VARCHAR(200) |
| driver_name    | VARCHAR(100) |
| contact_number | VARCHAR(20)  |
| status         | VARCHAR(50)  |

---

# 🔍 Database Verification

To verify the database:

### Step 1

Open MySQL Workbench.

### Step 2

Execute:

```text
database-schema.sql
```

### Step 3

Verify tables:

```sql
SHOW TABLES;
```

Expected:

```text
student
bus
```

### Step 4

Verify records:

```sql
SELECT * FROM student;

SELECT * FROM bus;
```

---

# 🔌 Backend API Verification

The backend can be verified using Postman.

## Student APIs

### Register Student

```http
POST /student/register
```

Sample Request

```json
{
  "name": "Harish",
  "email": "harish@gmail.com",
  "password": "1234",
  "busNumber": "1"
}
```

---

### Get All Students

```http
GET /student/all
```

---

### Student Login

```http
POST /student/login
```

Sample Request

```json
{
  "email": "harish@gmail.com",
  "password": "1234"
}
```

---

## Bus APIs

### Add Bus

```http
POST /bus/save
```

---

### Get All Buses

```http
GET /bus/all
```

---

### Get Bus By Number

```http
GET /bus/{busNumber}
```

Example:

```http
GET /bus/1
```

---

# 🗺️ Map Integration

This project uses:

## Leaflet.js

Features:

* Interactive Maps
* Bus Markers
* Route Visualization
* Zoom Controls
* OpenStreetMap Integration

---

# 📡 Hardware Components (Future Enhancement)

The current version simulates bus movement.

Future real-world implementation can use:

## GPS Module

Example:

* Neo-6M GPS

Purpose:

* Obtain real-time latitude and longitude.

---

## GSM Module

Example:

* SIM800L

Purpose:

* Send GPS coordinates to backend servers.

---

## Microcontroller

Examples:

* ESP32
* NodeMCU
* Arduino UNO

Purpose:

* Read GPS data.
* Communicate with backend APIs.

---

# ⚙️ System Architecture

GPS Module
↓
ESP32 / Arduino
↓
GSM / Wi-Fi Network
↓
Spring Boot Backend
↓
MySQL Database
↓
REST APIs
↓
Frontend Dashboard
↓
Student Tracking Portal

---

# 📂 Project Structure

```text
MKCE-Bus-Tracking-Portal
│
├── frontend
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   ├── script.js
│   └── bus.png
│
├── src
│
├── database-schema.sql
│
├── pom.xml
├── mvnw
├── mvnw.cmd
│
└── README.md
```

---

# ▶️ How To Run

## Backend

Run:

```bash
mvn spring-boot:run
```

Backend URL:

```text
http://localhost:8080
```

---

## Frontend

Open:

```text
frontend/index.html
```

or use:

```text
VS Code Live Server
```

---

# 📈 Future Enhancements

* Real GPS Tracking
* Live Location Updates
* ETA Calculation
* Driver Login Module
* Admin Dashboard
* Push Notifications
* Mobile Application
* Route Optimization
* Attendance Integration
* Bus Capacity Monitoring

---

# 👨‍💻 Developer

**Harish Vishwak R K**

B.E Computer Science and Engineering

M.Kumarasamy College of Engineering

---

# ⭐ Project Status

Version 1.0 Completed

Successfully demonstrates:

* Full Stack Web Development
* Java Spring Boot Backend
* REST API Development
* MySQL Database Integration
* Interactive Mapping
* Bus Tracking System Design
* Frontend Development
* Software and Hardware Integration Concepts
