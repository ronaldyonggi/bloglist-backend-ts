import { Router } from 'express';
import blogController from '../controllers/blogs';
const router = Router();

// Base router
router.route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

export default router;