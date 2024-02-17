import BlogModel from '../models/blog';

const blogsInDb = async () => {
  const blogs = await BlogModel.find({});
  return blogs.map(b => b.toJSON());
};

export default {
  blogsInDb
};