import express from "express";
import { allNews, specificNews } from "../controllers/news.controller.js";
const router = express.Router();


// get all news
router.get("/", allNews)

// get news by id
router.get("/:id", specificNews)

export default router;
