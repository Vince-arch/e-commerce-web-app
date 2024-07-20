import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();

console.log( process.env.PORT)

const config = {
    port: process.env.PORT || 5050,
    mongoDBURI: process.env.mongoDBURL
  };
  
  export default config;