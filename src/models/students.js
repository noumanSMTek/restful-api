const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"],
        dropDups: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        },
    },
    phone: {
        type: Number,
        uunique: [true, "Number already exists"],
        dropDups: true,
    }
});

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;