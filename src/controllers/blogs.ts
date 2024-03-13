/* eslint-disable @typescript-eslint/no-misused-promises */
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

// DELETE a blog
blogsRouter.delete('/:id',  (req: Request, res: Response, next: NextFunction) => {
  BlogModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch(error => next(error));
});

export default blogsRouter;