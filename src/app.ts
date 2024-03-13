import express from 'express';
import mongoose from 'mongoose';
import logger from './utils/logger';
import cors from 'cors';
import config from './utils/config';
import middleware from './utils/middleware';
import blogsRouter from './controllers/blogs';

const app = express();

// Initiate MongoDB connection
mongoose.set('strictQuery', false);
logger.info('connecting to', config.MONGODB_URI!);
mongoose.connect(config.MONGODB_URI!)
  .then(() => logger.info('connected to MongoDB'))
  .catch((error: unknown) => {
    if (error instanceof Error) {
      logger.error('error connecting to MongoDB:', error.message);
    }
  });

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());

// Routing for blogs
app.use('/api/blogs', blogsRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;

