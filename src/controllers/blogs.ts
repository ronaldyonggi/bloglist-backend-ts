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
