/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Blog } from "../types/blog";
import toNewBlog from "../utils/utils";
import { dummy, totalLikes } from "./list_helper";
import { testBlogs } from "./testBlogs";


test('dummy returns one', () => {
  const blogs: Blog[] = [];

  const result = dummy(blogs);
  expect(result).toBe(1);
});

describe('total likes', () => {

  test('when list has only one blog, equals the likes of that', () => {
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
    const validatedBlogs = listWithOneBlog.map(b => toNewBlog(b));
    const result = totalLikes(validatedBlogs);
    expect(result).toBe(5);
  });

  test('when list has multiple blogs, equals the total likes of the blogs', () => {
    const validatedBlogs = testBlogs.map(b => toNewBlog(b));
    const result = totalLikes(validatedBlogs);
    expect(result).toBe(36);
  });
});