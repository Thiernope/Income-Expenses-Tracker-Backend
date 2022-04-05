import mongoose from "mongoose";

import { Transaction, validate } from "../models/transactions.js"
export const createTransactions = async (req, res) => {
    const userId = req.user._id;
    const body = req.body;
    try {
        const {error} = validate(req.body);
        if(error) return res.status(400).json({status: "error", error: error.details[0].message})
        const newTransaction = new Transaction({...body, userId});
        const createdTransaction = await newTransaction.save();
        return res.status(201).json({
            message: "Created Successfully",
            createdTransaction
        })
    } catch (error) {
        console.log(error)
    }
}


export const getTransactions = async (req, res) => {
    const userId = req.user._id;
    try {
       const availableTransactions = await Transaction.find({userId});
       if(!availableTransactions.length) {
        return res.status(404).json({error: "No any Transaction Found"})
       } else {
        return res.status(200).json(availableTransactions)  
       }   
       
    } catch (error) {
        console.log(error)
    }
    }


    export const deleteTransaction = async(req, res) => {
        const { id: _id } = req.params
        const userId = req.user._id;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({message: "There is no such transaction with that id, it's not valid"})
        try {
            const trans = await Transaction.findOneAndDelete({_id, userId});
            if(!trans) {
                return res.status(404).json({message: "No such transaction Type with that id or you might not be the owner"})
            } else {
                return res.json({message: "Deleted Successfully", trans})   
            }
        } catch (error) {
            console.log(error)
        }
    }