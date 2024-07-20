import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendcookie } from "../utils/feature.js";


export const login=async(req,res,next)=>{
    try {
    const {email,password}=req.body;
    const user=await User.findOne({email}).select("+password");

    if(!user){
        return next(new Erronhandler("Invalid Email or Password",404))
    }

    const ismatch= await bcrypt.compare(password,user.password)
    
    if(!ismatch){
        return next(new Erronhandler("Invalid Email or Password",404))
    }

    sendcookie(user,res,`welcome back ${user.name}`,200)
    } catch (error) {
        next(error);
    }
};

export const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        let user= await User.findOne({email});
     
        if(user){
         return next(new Erronhandler("user already exist",404))
         }
     
         const hashpassword= await bcrypt.hash(password,10)
     
         user=await User.create({name,email,password:hashpassword});
         
         sendcookie(user,res,"register successfully",201)
    } catch (error) {
        next(error);
    }
};



export const getuserdetail = async(req,res)=>{
    res.status(200).json({
        success:true,
        user : req.user ,
    })
}

export const logout=async(req,res)=>{
    res.status(200).cookie("token","",{
        expire:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
    }).json({
        success:true,
        user : req.user ,
    })
}
