import { NewBlog } from "../types/blog";

// String type guard
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// String Parser
const parseString = (str: unknown): string => {
  if (!isString(str)) {
    throw new Error(`Invalid input: ${str}`);
  }
  return str;
};

// Number parser
const parseNumber = (str: unknown): number => {
  if (!(typeof str === 'number')) {
    throw new Error(`Invalid input: ${str}`);
  }
  return str;
};

// toNewBlog type validator function
const toNewBlog = (object: unknown): NewBlog => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('title' in object && 'author' in object && 'url' in object) {
    if ('likes' in object) {
      const newBlog = {
        title: parseString(object.title),
        author: parseString(object.author),
        url: parseString(object.url),
        likes: parseNumber(object.likes),
      };
      return newBlog;
    }

    // If likes is not provided, create a new blog with 0 likes
    else {
      const newBlog = {
        title: parseString(object.title),
        author: parseString(object.author),
        url: parseString(object.url),
        likes: 0
      };
      return newBlog;
    }
  }

  throw new Error('Invalid input data!');
};

export default toNewBlog;