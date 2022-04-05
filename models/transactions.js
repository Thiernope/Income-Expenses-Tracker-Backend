import mongoose from "mongoose";
import Joi from "joi";

const transactionSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    date: {
        type: String,
        required: true,   
    },
    color: {
        type: String,
        required: true,   
    },
    userId: {
        type: String,
        required: true
  },
})


export const Transaction = mongoose.model("transactions", transactionSchema)

export const validate = (data) => {
const schema = Joi.object({
    category : Joi.string().required().label("Category"),
    type : Joi.string().required().label("Type"),
    amount : Joi.number().required().label("Amount"),
    date: Joi.string().required().label("Date"),
    color: Joi.string().required().label("Color"),
})

return schema.validate(data)
}

