import express from "express"
import { getIncomeTypes, createIncomeType, getIncomeTypeById, updateIncomeType, deleteIncomeType, deleteAll } from "../controllers/incomeTypes.js";
import { verifyToken } from "../utils/tokenAuth.js";
const router = express.Router();

router.post("/", verifyToken, createIncomeType);
router.get("/", verifyToken, getIncomeTypes);
router.delete("/delete-all", verifyToken, deleteAll);
router.get("/:id", verifyToken, getIncomeTypeById);
router.put("/:id", verifyToken, updateIncomeType);
router.delete("/:id", verifyToken, deleteIncomeType );

export default router;