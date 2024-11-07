import express from "express";
import { addImg, getImg, removeImg } from "../controllers/gallery.controller.js";
const router = express.Router();

router.get("/get-img", getImg);
router.post("/add-img", addImg);
router.post("/remove-img", removeImg);

export default router;
