import { NextFunction, Request, Response } from 'express';
import BlogModel from '../models/blog';
import toNewBlog from "../utils/utils";

// GET all blogs
const getAllBlogs = (_req: Request, res: Response, next: NextFunction) => {

  BlogModel.find({})
    .then(blogs => res.json(blogs))
    .catch(error => next(error));
};

// CREATE a blog
const createBlog = (req: Request, res: Response, next: NextFunction) => {
  const validatedBlog = toNewBlog(req.body);

  const newBlog = new BlogModel({
    ...validatedBlog
  });

  newBlog.save()
    .then(savedBlog => res.json(savedBlog))
    .catch(error => next(error));
};

export default {
  getAllBlogs,
  createBlog
};