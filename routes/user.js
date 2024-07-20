const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

// 1. API for POST request for signup and check age > 20 and salary less than 25k.
router.post('/signup', async (req, res) => {
    const { phone, email, name, dob, monthlySalary, password } = req.body;
    const age = new Date().getFullYear() - new Date(dob).getFullYear();

    // age calculation -> current date - DOB of user and also Check for age > 20 and salary less than 25k.

    if (age < 20) return res.status(400).json({ message: 'Error: User underage, should be above 20 years.' });
    if (monthlySalary < 25000) return res.status(400).json({ message: 'Error: Monthly salary must be 25k or more.' });

    // hashing the user's password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ phone, email, name, dob, monthlySalary, password: hashedPassword, status: 'approved' });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
});

// 2. Login API, Endpoint: POST /login.
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    //extract and find user mail.
    //also we compare the provided password 
    //with the stored hashed password.
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Invalid request: User not found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    //generate JWT token for the authentication
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
});
// auth() is the middleware to authenticate JWT with the secret key
const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token required for authentication' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
};

//3. GET request. show user data API, this route handles requests to retrieve user information
router.get('/user', auth, async (req, res) => {
    // we find the user by their unique id and exclude the password 
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({
        purchasePower: user.purchasePower,
        phone: user.phone,
        email: user.email,
        registrationDate: user.registrationDate,
        dob: user.dob,
        monthlySalary: user.monthlySalary
    });
});
// 4.  POST request borrow money API
//we take two parameters- loan amount as "amount and loan tenure as "tenure"
router.post('/borrow', auth, async (req, res) => {
    const { amount, tenure } = req.body;
    const interestRate = 0.08;
    const user = await User.findById(req.user.id);

    // we update the purchasing power and also calculate the monthly
    //EMI based on tenure and 8% rate of intrest and also round it to two decimal places.
    user.purchasePower += amount;
    const monthlyRepayment = (amount + (amount * interestRate)) / tenure;
    await user.save();

    res.json({
        purchasePower: user.purchasePower,
        monthlyRepayment: monthlyRepayment.toFixed(2)
    });
});

module.exports = router;
