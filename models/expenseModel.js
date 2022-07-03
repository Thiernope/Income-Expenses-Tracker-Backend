import mongoose from "mongoose";
import Joi from "joi"

const expenseSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    userId: {
          type: String,
          required: true
    },
    date: {
        type: String,
        required: true,
        
    },
    color: {
        type: String,
        required: true
    }
})


export const Expense = mongoose.model("expenses", expenseSchema);



