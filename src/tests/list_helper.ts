import { Blog } from "../types/blog";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy = (_blogs: Blog[]) => {
  return 1;
};

const totalLikes = (blogs: Blog[]) => {

  const blogsLikesReducer = (sum: number, blog: Blog) => {
    return sum + blog.likes;
  };

  return blogs.reduce(blogsLikesReducer, 0);
};

export {
  dummy, totalLikes
};