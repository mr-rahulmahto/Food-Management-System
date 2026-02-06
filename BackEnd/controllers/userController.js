import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


// login user
const loginUser = async (req, res) => {
   const{email ,password} = req.body;
   try {

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({success:false ,message:"user not found"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(404).json({success:false ,message:"password is incorrect"})

    }
    const token = createToken(user._id);
    res.json({success:true , token})
    
   } catch (error) {
    console.log(error);
    res.json({success:false , message:"Error"})
    
   }
}

// create token for user data 
const createToken =  (id) => {
   
    return jwt.sign({id}, process.env.JWT_SECRET )
}

// register user
const registerUser = async (req, res) => {
     const{name , password , email}= req.body;
     try {
        // checking is user already exits
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false , message:"User already exists"} );
        }
        // validating email format & strong Password
        if(!validator.isEmail(email)){
          return res.json({success:false , message:"Please Enter a valid Email"} );
        }
       
        if(password.length < 8){
             return res.json({success:false , message:"Password must be at least 8 characters"} );
        }
        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
            });

            const user=await newUser.save(); // save with database
            const token = createToken(user._id);
            res.json({success:true , token});

     } catch (error) {
        console.log(error);
        res.json({success:false ,message:"Error"})
        
     }
}

export { loginUser, registerUser };