import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  // Log the URI to check if it's being read correctly
  console.log('MongoDB URI:', process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI!); // Ensure the URI is not undefined
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;

