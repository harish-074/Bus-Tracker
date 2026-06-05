# API Documentation

## Base URL

http://localhost:8080

---

# Student APIs

## Register Student

POST /student/register

Request:

{
"name": "Harish",
"email": "[harish@gmail.com](mailto:harish@gmail.com)",
"password": "1234",
"busNumber": "1"
}

---

## Get All Students

GET /student/all

---

## Student Login

POST /student/login

Request:

{
"email": "[harish@gmail.com](mailto:harish@gmail.com)",
"password": "1234"
}

---

# Bus APIs

## Add Bus

POST /bus/save

---

## Get All Buses

GET /bus/all

---

## Get Bus By Number

GET /bus/{busNumber}

Example:

GET /bus/1
