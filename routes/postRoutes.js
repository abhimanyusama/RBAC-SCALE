import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
} from "../controllers/postController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { allowRoles } from "../middlewares/rbac.js";
import { requireAttributes } from "../middlewares/abac.js";
import { canEditPost } from "../middlewares/acl.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);

router.post("/", isAuthenticated, allowRoles("admin", "editor"), createPost);
router.put("/:id", isAuthenticated, canEditPost, updatePost);
router.delete("/:id", isAuthenticated, canEditPost, deletePost);

router.get(
  "/india/only",
  isAuthenticated,
  requireAttributes({ location: "India" }),
  getAllPosts
);

export default router;
