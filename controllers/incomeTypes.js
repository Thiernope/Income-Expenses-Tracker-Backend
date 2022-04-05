import mongoose from "mongoose";
import IncomeType from "../models/incomeTypeModel.js"

export const createIncomeType = async (req, res) => {
    const userId = req.user._id;
    const body = req.body;
    const type = req.body.type;
    const newIcomeType = new IncomeType({...body, userId})
    try {
        const availableIncomeTypes = await IncomeType.find({userId});
        if(availableIncomeTypes) {
            const filteredIncome = availableIncomeTypes.filter(inc => inc.type === type);
            if(filteredIncome.length >=1) return res.status(400).json({message: "The type of income already exist"})
        }

        const createdIncome = await newIcomeType.save();
        return res.status(201).json({
            message: "Created Successfully",
            createdIncome
        })
    } catch (error) {
      console.log(error)
    }
  }





export const getIncomeTypes = async (req, res) => {
    const userId = req.user._id;
try {
   const availableIncomeTypes = await IncomeType.find({userId});
   if(!availableIncomeTypes.length) {
    return res.status(404).json({error: "No Any income Type Found"})
   } else {
    return res.status(200).json(availableIncomeTypes)  
   }   
   
} catch (error) {
    console.log(error)
}
}


export const getIncomeTypeById = async (req, res) => {
    const { id:_id } = req.params
    const userId = req.user._id;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({message: "No income with such id: id is not vilid"})
    const incomeType = await IncomeType.findById(_id);
    try {
        if(!incomeType) {
            return res.status(404).json({ message: "Not Found"})
        } else if(incomeType.userId !== userId){
            return res.status(401).json({message: "you are not the owner"})
        } else {
            return res.status(200).json(incomeType)
        }
    
    } catch (error) {
        console.log(error)
    }
    }
    

    export const updateIncomeType = async (req, res) => {
     const { id: _id } = req.params;
     const incoming = req.body;
     const userId = req.user._id;
     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: "IncomeType with that Id doesn't exist"});
     try {
        const updatedIncomeType = await IncomeType.findOneAndUpdate({_id, userId}, {...incoming}, {new: true});
        if(!updatedIncomeType) {
            return res.status(404).json({message: "The id for this income type might be invalid or you are not the owner"})
        } else {
            return res.status(201).json({message: "Updated Successfully", updatedIncomeType});   
        }
     } catch (error) {
         console.log(error)
     }
    }


    export const deleteIncomeType = async(req, res) => {
        const { id: _id } = req.params
        const userId = req.user._id;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: "IncomeType with that Id doesn't exist"});
        try {
            const incomeType = await IncomeType.findOneAndDelete({_id, userId});
            if(!incomeType) {
                return res.status(404).json({message: "No such income Type with that id or you might not be the owner"})
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
       await IncomeType.deleteMany({userId});
       res.json({message: "Deleted all incomes Types"});
    } catch (error) {
       console.log(error) 
    }
}