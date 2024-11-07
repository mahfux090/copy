import express from "express";
import {
  addPost,
  editPost,
  getPost,
  removePost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.get("/get-post", getPost);
router.post("/add-post", addPost);
router.post("/remove-post", removePost);
router.post("/edit-post/:id", editPost);

export default router;
