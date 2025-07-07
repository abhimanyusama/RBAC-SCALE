import express from "express";
import { createPost, updatePost, deletePost, getPostById, getAllPosts } from '../controllers/postController.js';
import {isAuthenticated} from '../middlewares/authMiddleware.js'
import { allowRoles } from '../middlewares/rbac.js';
import { requireAttributes } from '../middlewares/abac.js';
import { canEditPost } from '../middlewares/acl.js';  

const router = express.Router();

// Public   
router.get('/', getAllPosts);
router.get('/:id', getPostById);

// Authenticated + Role + Attribute + ACL checks
router.post('/create', isAuthenticated, allowRoles('admin', 'editor'), createPost);
router.put('/edit/:id', isAuthenticated, canEditPost, updatePost);
router.delete('/delete/:id', isAuthenticated, canEditPost, deletePost);


// Example: ABAC for location-specific posts
router.get('/india/only', isAuthenticated, requireAttributes({ location: 'India' }), getAllPosts);

export default router;
