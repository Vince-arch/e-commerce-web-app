import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
    port: process.env.PORT || 5050,
    mongoDBURI: process.env.MONGODBURL
  };
  
  export default config;