# Money Lending-Backend APIs
## Overview
This is an application’s back end responsible for receiving customer sign up request, user login and displaying user financial information when requested. It has endpoints that approve applications from users, authenticate existing users, and returns data about a user when called. It is built with Node.js, MongoDB and JWT and testing of APIs is done through Postman.
## Technologies Used
Node.js,
Express.js,
MongoDB,
Mongoose,
JWT (JSON Web Token) and
bcryptjs
## Features
### User Signup:
- Users can register with their phone number, email, name, password, date of birth, and monthly salary.
- Application is approved or rejected based on age (must be above 20) and monthly salary (must be 25k or more).
User registration status is tracked (Approved/Rejected)
- **Endpoint**: `POST /api/signup`
#### Postman screenshots of the results obtained from hitting POST / Signup endpoint.
![Screenshot (1080)](https://github.com/user-attachments/assets/7efab02a-7eaa-43a6-b355-d69e64181f7a)
![Screenshot (1091)](https://github.com/user-attachments/assets/6f61f00c-f3d5-4b0b-adb6-d2183b8e0a81)

### User Login:
- Users can log in using their email and password.
- JWT is used for authentication and provides a token for secure access.
- **Endpoint**: `POST /api/login`
#### Postman screenshots of the results obtained from hitting POST / login endpoint
![Screenshot (1081)](https://github.com/user-attachments/assets/b4bbb871-c4fd-4b56-994c-305393a39079)
![Screenshot (1087)](https://github.com/user-attachments/assets/64620c91-32fd-4db0-93fc-4e1288746ae7)

### Show User Data:
- Users can retrieve their personal and financial details including purchase power, phone number, email, registration date, date of birth, and monthly salary.
Data is returned in a readable HTML format.
- **Endpoint**: `POST /api/user`
#### Postman screenshots of the results obtained from hitting POST/user endpoint.
![Screenshot (1082)](https://github.com/user-attachments/assets/cb474773-67ec-4bb8-bd2b-ddb334ca2685)
![Screenshot (1086)](https://github.com/user-attachments/assets/fe49b927-a67b-45e3-8f14-ea09203070e6)

### Borrow Money
- Loan Request: Users can borrow money by providing the loan amount and tenure.
- Purchasing Power Update: The API updates the user's purchasing power.
- Monthly Repayment Calculation: Calculates the monthly EMI based on a fixed interest rate of 8% and the provided loan tenure.
- Rounded Values: The monthly repayment amount is rounded to two decimal places for precision.
- **Endpoint**: `POST /api/borrow`
  #### Postman screenshots of the results obtained from hitting POST / borrow endpoint.
![Screenshot (1084)](https://github.com/user-attachments/assets/1d5b7617-e363-41b7-91f5-bf0b40b8951c)
![Screenshot (1083)](https://github.com/user-attachments/assets/3aedadff-a456-424e-abbd-b3ddc56a6872)



