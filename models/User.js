const mongoose = require('mongoose');


// this is the user schema that will be stored in MongoDB
const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    registrationDate: {
        type: Date,
        default: Date.now
    },

    dob: { type: Date, required: true },

    monthlySalary: { type: Number, required: true },

    purchasePower: { type: Number, default: 0 },

    status: { type: String, enum: ['approved', 'rejected'], default: 'pending' },

    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);