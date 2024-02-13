import mongoose from "mongoose";
import { NewBlog } from "../types/blog";

const blogSchema = new mongoose.Schema<NewBlog>({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  likes: Number
});

export default mongoose.model<NewBlog>('Blog', blogSchema);
