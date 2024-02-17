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

test('blogs are returned in json format', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
}, 100000);

test('the number of blogs returned from GET equal to number of initial blogs', async () => {
  const res = await api.get('/api/blogs');
  expect(res.body).toHaveLength(initialBlogs.length);
});

afterAll(async () => {
  await mongoose.connection.close();
});
