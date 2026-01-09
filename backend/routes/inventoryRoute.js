import express from "express";
import { GetAllCategories,UpdateCategory,CreateNewCategory,deleteCategory } from "./controllers/inventoryController.js";
const router = express.Router();

router.get("/", GetAllCategories);
router.post("/", UpdateCategory);
router.put("/:id", CreateNewCategory);
router.delete("/:id", deleteCategory);

export default router;