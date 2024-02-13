// GET all blogs
const getAllBlogs = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await BlogModel.find({});
    res.json(blogs);
  } catch(error) {
    next(error);
  }
};
