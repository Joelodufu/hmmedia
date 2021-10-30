const mongoose = require('mongoose');
const currentDate = new Date
const dateString = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getUTCFullYear()}`
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    disability: {
        type: String
    },
    department: {
        type: String
    },
    otherdept: {
        type: String
    },
    datOfBirth: {
        type: String,
        required: true
    },
    guardian: {
        type: String
    },
    adress: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: dateString
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String
    },
    speakEnglish: {
        type: Boolean,
        default: true
    }
});
userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
userSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('user', userSchema)