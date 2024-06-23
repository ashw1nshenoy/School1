const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Student = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    }
});
// detail.find()
//     .then(users => {
//         console.log(users); // Logs an array of user objects
//     })
//     .catch(err => console.error(err));
// Hash password before saving
Student.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
const detail = mongoose.model('detail', Student);

module.exports = detail
