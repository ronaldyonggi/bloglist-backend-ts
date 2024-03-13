/* eslint-disable @typescript-eslint/no-misused-promises */
import { Request, Response, Router } from 'express';
import BlogModel from '../models/blog';
import ts_utils from '../utils/ts_utils';

const blogsRouter = Router();

/**
 * NOTE: async error handlers are handled with the express-async-errors library
 * so no need to use try-catch clause.
 */

// GET all blogs
blogsRouter.get('/', async (_req: Request, res: Response) => {
  const blogs = await BlogModel.find({});
  res.json(blogs);
});

// CREATE a blog
blogsRouter.post('/', async (req: Request, res: Response) => {
  const validatedBlog = ts_utils.toNewBlog(req.body);

  const newBlog = new BlogModel({
    ...validatedBlog
  });

  const savedBlog = await newBlog.save();
  res.json(savedBlog);
});

// DELETE a blog
blogsRouter.delete('/:id', async (req: Request, res: Response) => {
  await BlogModel.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// UPDATE a blog
blogsRouter.put('/:id', async (req: Request, res: Response) => {
  const requestPutBlog = ts_utils.toNewBlog(req.body);

  const updatedBlog = await BlogModel.findById(req.params.id, requestPutBlog, { new: true, runValidators: true, context: 'query'});
  res.json(updatedBlog);
});

export default blogsRouter;