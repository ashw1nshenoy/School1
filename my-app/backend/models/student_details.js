const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Student = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    }
});

// Hash password before saving
Student.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('Student', Student);
