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

### User Login:
- Users can log in using their email and password.
- JWT is used for authentication and provides a token for secure access.
- **Endpoint**: `POST /api/login`
#### Postman screenshots of the results obtained from hitting POST / login endpoint.

### Show User Data:
- Users can retrieve their personal and financial details including purchase power, phone number, email, registration date, date of birth, and monthly salary.
Data is returned in a readable HTML format.
- **Endpoint**: `POST /api/user`
#### Postman screenshots of the results obtained from hitting POST/user endpoint.

## Borrow Money
- Loan Request: Users can borrow money by providing the loan amount and tenure.
- Purchasing Power Update: The API updates the user's purchasing power.
- Monthly Repayment Calculation: Calculates the monthly EMI based on a fixed interest rate of 8% and the provided loan tenure.
- Rounded Values: The monthly repayment amount is rounded to two decimal places for precision.
- **Endpoint**: `POST /api/borrow`
  #### Postman screenshots of the results obtained from hitting POST / borrow endpoint.




