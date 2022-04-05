import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import passwordComplexity from "joi-password-complexity"
import Joi from "joi";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    profilePicture: {
        type: String,
        default: ""
    },
    verified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.privateKey, {expiresIn: "7d"});
    return token
}

export const User = mongoose.model("user", userSchema)

export const validate = (data) => {
const schema = Joi.object({
    firstName : Joi.string().required().label("First Name"),
    lastName : Joi.string().required().label("Last Name"),
    email : Joi.string().email().required().label("Email"),
    password : passwordComplexity().required().label("Password"),
    profilePicture : Joi.string().label("Profile Picture")
})

return schema.validate(data)
}

