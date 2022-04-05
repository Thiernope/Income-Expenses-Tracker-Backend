import express from "express";
import { createTransactions, getTransactions, deleteTransaction} from "../controllers/transactions.js";
import { verifyToken } from "../utils/tokenAuth.js";
const router = express.Router();

router.post("/",verifyToken, createTransactions )
router.get("/",verifyToken, getTransactions)
router.delete("/:id", verifyToken, deleteTransaction)

export default router;