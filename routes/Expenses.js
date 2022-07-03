import express from "express";
import { createExpense, getExpenses, getExpenseById,  updateExpense, deleteExpense, deleteAll} from "../controllers/expenses.js";
import { verifyToken} from "../utils/tokenAuth.js"
const router = express.Router();

router.post("/",verifyToken, createExpense)
router.get("/", verifyToken, getExpenses)
router.delete("/delete-all", verifyToken, deleteAll)
router.get("/:id", verifyToken, getExpenseById)
router.put("/:id", verifyToken, updateExpense)
router.delete("/:id", verifyToken, deleteExpense)


export default router;