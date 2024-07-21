//Importing modules
import express from 'express';
import cors from "cors";
import config from "./config.js";
import mongoose from 'mongoose';
import productRoutes from './routes/products.js'

//Initializing express app
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//connect to MongoDB
mongoose.connect(config.mongoDBURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Database connection error:', err));


app.get('/', (req,res) =>{
    res.send('Hello World')
});
app.use('/products', productRoutes)

app.listen(config.port, () => {
    console.log(`server is running on port:${config.port}`)
})