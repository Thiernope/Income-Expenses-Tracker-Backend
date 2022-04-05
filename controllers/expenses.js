import mongoose from "mongoose";
import { Expense, validateBody } from "../models/expenseModel.js"


export const createExpense = async (req, res) => {
    const userId = req.user._id;
    const body = req.body;
    const type = req.body.type;
    const newExpense = new Expense({...body, userId})
    try {
        const availableUserExpenses = await Expense.find({userId});
        if(availableUserExpenses) {
            const filteredExp = availableUserExpenses.filter(exp => exp.type === type);
            if(filteredExp.length >=1) return res.status(400).json({message: "The type of expense already exist"})
        }
        const createdExpense = await newExpense.save();
        return res.status(201).json({
            message: "Created Successfully",
            createdExpense
        })
    } catch (error) {
      console.log(error)
    }
}


export const getExpenses = async (req, res) => {
    const userId = req.user._id;
    try {
       const availableExpenses = await Expense.find({userId});
       if(!availableExpenses.length) {
        return res.status(404).json({error: "No any Expense Type Found"})
       } else {
        return res.status(200).json(availableExpenses)  
       }   
       
    } catch (error) {
        console.log(error)
    }
    }


    export const getExpenseById = async (req, res) => {
        const { id: _id } = req.params
        const userId = req.user._id;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({message: "That id is not valid"});
        const exp = await Expense.findById(_id);
        try {
            if(!exp) {
                return res.status(404).json({ message: "Not Found"})
            } else if(exp.userId !== userId){
                return res.status(401).json({message: "you are not the owner"})
            } else {
                return res.status(200).json(exp)
            }
        
        } catch (error) {
            console.log(error)
        }
        }


        export const updateExpense = async (req, res) => {
            const { id: _id } = req.params;
            const userId = req.user._id;
            const body = req.body;
            const { error } = validateBody(body);
            if(error) return res.status(400).json({message: error.details[0].message});
            if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: "Expense with that Id doesn't exist"});
            try {
                const updatedExpense = await Expense.findOneAndUpdate({_id, userId}, {...body}, {new: true});

                if(!updatedExpense) {
                    return res.status(404).json({message: "The id for this expense type might be invalid or you are not the owner"})
                } else {
                    return res.status(201).json({message: "Updated Successfully", updatedExpense});   
                }
            } catch (error) {
               console.log(error) 
            }
            
       }
       

       export const deleteExpense = async(req, res) => {
        const { id: _id } = req.params
        const userId = req.user._id;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({message: "There is not expense with that id, it's not valid"})
        try {
            const expense = await Expense.findOneAndDelete({_id, userId});
            if(!expense) {
                return res.status(404).json({message: "No such expense Type with that id or you might not be the owner"})
            } else {
                return res.json({message: "Deleted Successfully"})   
            }
        } catch (error) {
            console.log(error)
        }
    }


    export const deleteAll = async (req, res) => {
        const userId = req.user._id;
        try {
            await Expense.deleteMany({userId});
            res.json({message: "Deleted all expenses Types"});
        } catch (error) {
           console.log(error) 
        }
    }