import mongoose from "mongoose";
import config from "config";

const connectToMongo = async () => {
  try {
     await mongoose.connect(config.get('dbUri')) 
     console.log('Connected to Database');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export { connectToMongo };