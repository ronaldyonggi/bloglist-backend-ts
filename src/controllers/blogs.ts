import { NextFunction, Request, Response, Router } from 'express';
import BlogModel from '../models/blog';
import toNewBlog from "../utils/utils";

const blogsRouter = Router();

// GET all blogs
blogsRouter.get('/', (_req: Request, res: Response, next: NextFunction) => {

  BlogModel.find({})
    .then(blogs => res.json(blogs))
    .catch(error => next(error));
});

// CREATE a blog
blogsRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const validatedBlog = toNewBlog(req.body);

  const newBlog = new BlogModel({
    ...validatedBlog
  });

  newBlog.save()
    .then(savedBlog => res.json(savedBlog))
    .catch(error => next(error));
});

export default blogsRouter;