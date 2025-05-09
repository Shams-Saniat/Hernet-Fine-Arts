import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    sno: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

export default mongoose.model("Users", userSchema);