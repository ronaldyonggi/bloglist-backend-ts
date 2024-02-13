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
