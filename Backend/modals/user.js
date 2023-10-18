const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    verifid: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    addresses: [
        {
            name: String,
            mobileNo: String,
            houserNo: String,
            street: String,
            landmark: String,
            city: String,
            country: String,
            postalCode: String
        }
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    ceatedAt: {
        type: Date,
        default: Date.now
    },

}); 

const User = mongoose.model("User", userSchema);

module.exports = User;