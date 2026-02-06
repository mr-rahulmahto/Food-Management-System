import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const authMiddleware = async (req , res , next) => {
    const {token} = req.headers;
    if(!token){
       return res.json({success:false , message : "Not Athorized Login Again"}) 
    }
    try {
        // eslint-disable-next-line no-undef
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
        
        
    } catch (error) {

        console.log(error);
        res.json({success:false , message:"Error Authorized"})
        
        
    }

}

export default authMiddleware;