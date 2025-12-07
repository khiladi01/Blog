import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
               type: String,
               required: true,
        },
        email: {
            type: String,
            required: true
        },
        mobile: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    }
)

const Userdata = mongoose.model("Userdata" , userSchema)

export default Userdata;