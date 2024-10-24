import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  toggleLikePost,
  addComment,
  deletePost,
  getPosts,
  getLikedPosts,
  getFollowingPosts,
  getPostsByUser,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", protectRoute, getPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getPostsByUser);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, toggleLikePost);
router.post("/comment/:id", protectRoute, addComment);
router.delete("/delete/:id", protectRoute, deletePost);

export default router;
