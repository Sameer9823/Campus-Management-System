import mongoose from 'mongoose';

// Define the user schema with timestamps option
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter the username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter the password"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    forgetpassword: {
        type: String
    },
    forgetpasswordExpiry: {
        type: Date
    },
    verifyToken: {
        type: String
    },
    verifyTokenExpiry: {
        type: Date
    }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt`
});

// Use singular 'User' and ensure it's correctly checked for existing models
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
