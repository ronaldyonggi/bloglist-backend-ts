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

blogSchema.set('toJSON', {
  transform: (_document, returnedObject: Record<string, string>) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model<NewBlog>('Blog', blogSchema);
