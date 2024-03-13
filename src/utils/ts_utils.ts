import { NewBlog } from "../types/blog";
import { NewUser } from "../types/user";

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

// validateNewBlog type validator function
const validateNewBlog = (object: unknown): NewBlog => {
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

  throw new Error('TypeScript validateNewBlog error: invalid input data!');
};

// Validate request for creating a new user
const validateNewUser = (object: unknown): NewUser => {
  if (!object || typeof object !== 'object') {
    throw new Error('TypeScript validateNewUser error: incorrect or missing data');
  }

  if ('username' in object && 'name' in object && 'password' in object) {
    const newUser = {
      username: parseString(object.username),
      name: parseString(object.name),
      password: parseString(object.password)
    };

    return newUser;
  }

  throw new Error('TypeScript validateNewUser error: invalid input data!');
};

export default {
  validateNewBlog,
  validateNewUser
};