import express from "express";
import {
createBook
,getBestBook,getBook,getNewBook
} from "../controllers/index.js";
const router = express.Router();
router.post("/create-book", createBook);
router.get("/get-book", getBook)
router.get("/getBestSeller", getBestBook)
router.get("/getNew", getNewBook);
export default router; 