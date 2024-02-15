import { Blog, NewBlog } from "../types/blog";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy = (_blogs: Blog[]) => {
  return 1;
};

const totalLikes = (blogs: NewBlog[]) => {

  const blogsLikesReducer = (sum: number, blog: NewBlog) => {
    return sum + blog.likes;
  };

  return blogs.reduce(blogsLikesReducer, 0);
};

const favoriteBlog = (blogs: NewBlog[]) => {
  const blogsMostLikesReducer = (prev: NewBlog, next: NewBlog) => {
    return prev.likes > next.likes ? prev : next;
  };

  return blogs.reduce(blogsMostLikesReducer);
};

export {
  dummy, totalLikes, favoriteBlog
};