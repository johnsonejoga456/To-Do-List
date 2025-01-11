import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    } as mongoose.ConnectOptions);

    console.log('MongoDB Connected...');
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
