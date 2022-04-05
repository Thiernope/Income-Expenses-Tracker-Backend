import mongoose from "mongoose";

const incomeTypeSchema = mongoose.Schema({
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
        required: true
    },
    color: {
        type: String,
        required: true
    }
})


const IncomeType = mongoose.model("Income_Type", incomeTypeSchema);

export default IncomeType;