import mongoose from 'mongoose';


const ImageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    public_id: { type: String, required: true },
    folder: { type: String, required: true }
});

const Image = mongoose.model('Image', ImageSchema);

export default Image;