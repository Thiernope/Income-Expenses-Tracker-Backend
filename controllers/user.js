import { User, validate } from "../models/userModal.js"
import { generateToken, decodeToken } from "../utils/jwt.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import Joi from "joi";
import dotenv from "dotenv";
import Token from "../models/token.js"
import crypto from "crypto"
import { sendMail, sendMailPasswordReset }  from "../utils/sendEmail.js"
import mongoose from "mongoose";
dotenv.config()

const loginValidate = (data)=>{
   const schema = Joi.object({
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    })

    return schema.validate(data)
}



export const register = async (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error) return res.status(400).json({status: "error", error: error.details[0].message})
        const user = await User.findOne({email: req.body.email});
        if(user) return res.status(409).json({status: "error", error: "User already exist"});
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({...req.body, password: hashPassword})
        const registeredUser = await newUser.save();
        const token = await new Token({
            userId: registeredUser._id,
            token: crypto.randomBytes(32).toString("hex")
        }).save();

        const url = `${process.env.BASE_URL}/user/${token.userId}/verify/${token.token}`
        await sendMail(registeredUser.email, "Verify Email", url, registeredUser.firstName)
        res.status(201).json({
            status: "success",
            message: "We have send you an email to verify your account, go and and finish your registration",
            registeredUser
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res)=>{
    try {
        const { error } = loginValidate(req.body)
        if(error) return res.status(400).json({status: "error", error: error.details[0].message})

        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(404).json({status: "error", error: "User with that email is not found"})

        if(user.verified === false) {
            let token = await Token.findOne({userId: user._id});
            const url = `${process.env.BASE_URL}/user/${token.userId}/verify/${token.token}`
            await sendMail(user.email, "Verify Email", url, user.firstName)
            
            return res.status(201).json({
                status: "need verify",
                error: "You account is not verified, please go to your inbox and verify it first"
            })
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(401).json({status: "error", error: "Password doesn't match"})
        const {_id, firstName, email} = user;
        const token = generateToken({_id, firstName, email});
        res.status(200).json({
            status: "success",
            message: "Login is successful",
            token: token
        })
    } catch (error) {
        console.log(error)
    }
}


export const verifyAccount = async(req, res) => {
 const {id: _id} = req.params;
 const {token} = req.params;

 const user = await User.findOne({_id});
 if(!user) {
     return res.status(400).json({message: "Invilid Link"});
 }

 const tokenExist = await Token.findOne({
     userId: user._id,
     token: token
 })
 if(tokenExist) {
    await tokenExist.remove();
    await user.updateOne({_id: user._id, verified: true});
    return res.status(200).json({message: "Account is verified"});
 } else {
    return res.status(400).json({message: "Invilid or Expired link"});
 }
}



export const resetLink = async (req, res) => {
      const { email } = req.body;
      try {
          const user = await User.findOne({email});
          if(!user) return res.status(400).json({status: "error", error: "User with that email doesn't exist"});
          if(user.verified === false) {
            let token = await Token.findOne({userId: user._id});
            const url = `${process.env.BASE_URL}/user/${token.userId}/verify/${token.token}`
            await sendMail(user.email, "Verify your email", url, user.firstName)
            return res.status(201).json({
                status: "need verify",
                error: "You account is not verified, please go to your inbox and verify it first"
            }) 
          }
          const url = `${process.env.BASE_URL}/user/reset-password/${user._id}`
          await sendMailPasswordReset(user.email, "Reset your password", url, user.firstName)
          res.status(200).json({status: "success", message: "We have send you a verification link to reset you password"})
      } catch (error) {
          console.log(error)
      }
}



export const resetPassword = async (req, res) => {
     const {id: _id} = req.params;
     const {password} = req.body;
     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(409).json({status: "error", error: "You have used blocken link to reset password"}); 
     try {
         const user = await User.findOne({_id});
         if(!user) return res.status(404).json({status: "error", error: "There is no user with that user id"});
         const salt = await bcrypt.genSalt(Number(process.env.SALT));
         const hashPassword = await bcrypt.hash(password, salt);
         await User.findByIdAndUpdate(_id, {password: hashPassword}, {new: true});
         res.status(200).json({message: "password changed successfully"});
     } catch (error) {
         console.log(error);
     }
}



export const getAllUsers = async (req, res) => {
    try {
       const availableUsers = await User.find();
       if(!availableUsers.length) {
        return res.status(404).json({error: "No any user Found"})
       } else {
        return res.status(200).json(availableUsers)  
       }   
       
    } catch (error) {
        console.log(error)
    }
    }



    export const getUserProfile = async (req, res) => {
        const userId = req.user._id;
        if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({message: "No income with such id: id is not vilid"})
        const user = await User.findById(userId);
        try {
            if(!user) {
                return res.status(404).json({ message: "User not Found"})
            } else {
                res.status(200).json(user)
            }
        
        } catch (error) {
            console.log(error)
        }
        }



        export const updateUserProfile = async (req, res) => {
            const userId = req.user._id;
            const body = req.body;
            if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).json({message: "User with that Id doesn't exist"});
            try {
                const updatedUser = await User.findByIdAndUpdate(userId, {...body, userId}, {new: true})
                res.status(201).json({message: "Profile Updated Successfully", updatedUser}); 
            } catch (error) {
               console.log(error) 
            }
            
       }

       export const deleteAccount = async(req, res) => {
        const {id} = req.params;
        const userId = req.user._id;
        if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({message: "User with that id does not exist!"})
        if(id !== userId) return res.status(400).json({status: "error", message: "You are not the real user"})
        try {
            const user = await User.findById(userId);
            if(!user) return res.status(404).json({message: "No such User with that id"})
            await User.deleteOne(user);
            res.json({message: "You no longer have an account here, we regret to lose you!!!"}) 
        } catch (error) {
            console.log(error)
        }
    }
