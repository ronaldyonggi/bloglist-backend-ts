import mongoose from "mongoose";
import { NewBlog } from "../types/blog";

const blogSchema = new mongoose.Schema<NewBlog>({
  title: String,
  author: String,
  url: String,
  likes: Number
});

export default mongoose.model<NewBlog>('Blog', blogSchema);
