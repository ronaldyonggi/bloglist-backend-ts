/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Blog } from "../types/blog";
import { dummy } from "./list_helper";

test('dummy returns one', () => {
  const blogs: Blog[] = [];

  const result = dummy(blogs);
  expect(result).toBe(1);
});