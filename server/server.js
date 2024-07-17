//Importing modules
import express from 'express';
import cors from "cors";
import config from "./config.js";
import mongoose from 'mongoose';


//Initializing express app
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//connect to MongoDB
mongoose.connect(config.mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Database connection error:', err));

app.get('/', (req,res) =>{
    res.send('Hello World')
});

app.listen(config.port, () => {
    console.log(`server is running on port:${config.port}`)
})