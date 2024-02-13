import { NextFunction, Request, Response } from 'express';
import BlogModel from '../models/blog';
import toNewBlog from "../utils/utils";

// GET all blogs
const getAllBlogs = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await BlogModel.find({});
    res.json(blogs);
  } catch(error) {
    next(error);
  }
};

// CREATE a blog
const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  const validatedBlog = toNewBlog(req.body);

  const newBlog = new BlogModel({
    ...validatedBlog
  });

  try {
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch(error) {
    next(error);
  }

};

export {
  getAllBlogs,
  createBlog
};