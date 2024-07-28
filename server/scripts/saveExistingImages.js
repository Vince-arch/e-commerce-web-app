import mongoose from 'mongoose';
import cloudinary from '../cloudinaryConfig.js';
import dotenv from 'dotenv';
import Image from '../models/Image.js';

dotenv.config();

mongoose.connect(process.env.MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Database connection error:', err));

const folders = ['bikini', 'dress', 'hat', 'jacket', 'short', 'skirt', 'sweater'];

const fetchAndSaveImages = async () => {
  try {
    for (const folder of folders) {
      const result = await cloudinary.search
        .expression(`folder:${folder}`)
        .execute();

      for (const image of result.resources) {
        const newImage = new Image({
          title: image.public_id.split('/').pop(), // Use the file name as title
          url: image.secure_url,
          public_id: image.public_id,
          folder: folder,
        });

        await newImage.save();
      }
    }
    console.log('Images saved to MongoDB');
  } catch (error) {
    console.error('Error saving images:', error);
  } finally {
    mongoose.connection.close();
  }
};

fetchAndSaveImages();
