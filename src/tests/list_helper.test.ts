/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Blog } from "../types/blog";
import toNewBlog from "../utils/utils";
import { dummy, totalLikes } from "./list_helper";


test('dummy returns one', () => {
  const blogs: Blog[] = [];

  const result = dummy(blogs);
  expect(result).toBe(1);
});

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ];

  // Validate the blog list with typescript first
  const validatedBlog = listWithOneBlog.map(b => toNewBlog(b));

  test('when list has only one blog, equals the likes of that', () => {
    const result = totalLikes(validatedBlog);
    expect(result).toBe(5);
  });
});