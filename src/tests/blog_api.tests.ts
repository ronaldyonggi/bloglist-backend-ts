import { initialBlogs } from './initialBlogs';
import BlogModel from '../models/blog';
import supertest from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

const api = supertest(app);

beforeEach(async () => {
  await BlogModel.deleteMany({});
  const blogObjects = initialBlogs.map((b) => new BlogModel(b));
  const promiseArray = blogObjects.map((b) => b.save());
  await Promise.all(promiseArray);
});

afterAll(async () => {
  await mongoose.connection.close();
});
