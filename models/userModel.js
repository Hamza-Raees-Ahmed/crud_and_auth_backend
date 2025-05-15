import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "please add the username"]
    },
    email: {
        type: String,
        required: [true, "please add the email address"],
        unique: [true, " already exist  email address"]

    },
    password: {
        type: String,
        required: [true, "please add the password"]
    },
}, {
    timestamps: true
});


const User = mongoose.model("user", userSchema);

export default User;