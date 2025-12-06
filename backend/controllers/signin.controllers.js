import Userdata from '../models/user.model.js';

export async function createUser (req , res) {
       try {
        const {username , email , phone , address} = req.body

        if(!username || !email || !phone || !address){
           return res.status(400).json({success: false , message: "All fields are mandatory"});
        }

        const newUser = new Userdata({username , email , phone , address})
        await newUser.save();

        return res.status(201).json({success: true , message: "User created success" , newUser});
       } catch (error) {
        return res.status(400).json({success: false , message: "User created failed" , error: error.message});
       }
}

export async function getUser (req, res) {
       try {
        const userData = await Userdata.findOne()
        
        res.status(200).json({success: true , message: "User found success" , userData});
       } catch (error) {
        res.status(400).json({success: false , message: "Failed to find user"});
       }
}