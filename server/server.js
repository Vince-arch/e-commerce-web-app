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

//get images
app.get('/images/:id', async (req, res) => {
  try {
      const image = await Image.findById(req.params.id);
      if (!image) return res.status(404).send('Image not found');

      res.contentType(image.img.contentType);
      res.send(image.img.data);
  } catch (err) {
      res.status(500).send('Server error');
  }
});

app.listen(config.port, () => {
    console.log(`server is running on port:${config.port}`)
})