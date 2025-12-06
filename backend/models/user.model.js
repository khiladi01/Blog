import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
               type: String,
               required: true,
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    }
)

const Userdata = mongoose.model("Userdata" , userSchema)

export default Userdata;