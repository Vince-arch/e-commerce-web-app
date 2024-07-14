import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default {
    port: process.env.PORT || 5050,
    mongoDBURl: process.env.mongoDBURL
  };
  
  